/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { SSEServerTransport } from "@modelcontextprotocol/sdk/server/sse.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  buildApplication,
  buildCommand,
  CommandContext,
  run,
  StricliProcess,
} from "@stricli/core";
import express from "express";
import process from "node:process";
import * as z from "zod";
import { createMCPServer } from "./server.js";

function log(...args: unknown[]) {
  console.error(`[${new Date().toISOString()}]`, ...args);
}

interface LocalContext extends CommandContext {
  readonly process: StricliProcess;
}

function buildContext(process: NodeJS.Process): LocalContext {
  return { process: process as StricliProcess };
}

const command = buildCommand({
  loader: async () => main,
  parameters: {
    flags: {
      transport: {
        kind: "enum",
        brief: "The transport to use for communicating with the server",
        default: "stdio",
        values: ["stdio", "sse"],
      },
      port: {
        kind: "parsed",
        brief: "The port to use when the SSE transport is enabled",
        default: "2718",
        parse: (val: string) =>
          z.coerce.number().int().gte(0).lt(65536).parse(val),
      },
    },
  },
  docs: {
    brief: "Run the Model Context Protocol server",
  },
});

interface CommandFlags {
  readonly transport: "stdio" | "sse";
  readonly port: number;
}

const app = buildApplication(command, {
  name: "mcp",
  versionInfo: {
    currentVersion: "0.10.0",
  },
});

async function startStdio() {
  const transport = new StdioServerTransport();
  const server = createMCPServer();
  await server.connect(transport);
}

async function startSSE(flags: CommandFlags) {
  const app = express();
  const mcpServer = createMCPServer();
  let transport: SSEServerTransport | undefined;
  const controller = new AbortController();

  app.get("/sse", async (_req, res) => {
    transport = new SSEServerTransport("/message", res);

    await mcpServer.connect(transport);

    mcpServer.server.onclose = async () => {
      res.end();
    };
  });

  app.post("/message", async (req, res) => {
    if (!transport) {
      throw new Error("Server transport not initialized");
    }

    await transport.handlePostMessage(req, res);
  });

  const httpServer = app.listen(flags.port, "0.0.0.0", () => {
    log(`MCP HTTP server listening on port ${flags.port}`);
  });

  let closing = false;
  controller.signal.addEventListener("abort", async () => {
    if (closing) {
      log("Received second signal. Forcing shutdown.");
      process.exit(1);
    }
    closing = true;

    log("Shutting down MCP server");

    await mcpServer.close();

    log("Shutting down HTTP server");

    const timer = setTimeout(() => {
      log("Forcing shutdown");
      process.exit(1);
    }, 5000);

    httpServer.close(() => {
      clearTimeout(timer);
      log("Graceful shutdown complete");
      process.exit(0);
    });
  });

  const abort = () => controller.abort();
  process.on("SIGTERM", abort);
  process.on("SIGINT", abort);
}

async function main(this: LocalContext, flags: CommandFlags) {
  switch (flags.transport) {
    case "stdio":
      await startStdio();
      break;
    case "sse":
      await startSSE(flags);
      break;
    default:
      throw new Error(`Invalid transport: ${flags.transport}`);
  }
}

run(app, process.argv.slice(2), buildContext(process));
