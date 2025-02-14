/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import { RequestHandlerExtra } from "@modelcontextprotocol/sdk/shared/protocol.js";
import { Variables } from "@modelcontextprotocol/sdk/shared/uriTemplate.js";
import { ReadResourceResult } from "@modelcontextprotocol/sdk/types.js";
import { BlueskyCore } from "../core.js";
import { Result } from "../types/fp.js";
import { isAsyncIterable, isBinaryData, valueToBase64 } from "./shared.js";

export type ReadResourceCallback = (
  client: BlueskyCore,
  uri: URL,
  extra: RequestHandlerExtra,
) => ReadResourceResult | Promise<ReadResourceResult>;

export type ResourceDefinition = {
  name: string;
  description: string;
  resource: string;
  read: ReadResourceCallback;
};

export type ReadResourceTemplateCallback = (
  client: BlueskyCore,
  uri: URL,
  vars: Variables,
  extra: RequestHandlerExtra,
) => ReadResourceResult | Promise<ReadResourceResult>;

export type ResourceTemplateDefinition = {
  name: string;
  description: string;
  resource: ResourceTemplate;
  read: ReadResourceTemplateCallback;
};

export async function formatResult(
  result: Result<unknown, Error>,
  uri: URL,
  init: { response?: Response | undefined },
): Promise<ReadResourceResult> {
  if (!result.ok) {
    throw result.error;
  }

  const { value } = result;
  if (typeof value === "undefined") {
    return { contents: [] };
  }

  const { response } = init;
  const mimeType = response?.headers.get("content-type") ?? "";
  let contents: ReadResourceResult["contents"] = [];

  if (mimeType.search(/\bjson\b/g)) {
    contents = [{ uri: uri.toString(), mimeType, text: JSON.stringify(value) }];
  } else if (
    mimeType.startsWith("text/event-stream")
    && isAsyncIterable(value)
  ) {
    contents = [
      {
        uri: uri.toString(),
        mimeType: "application/json",
        text: await stringifySSEToJSON(value),
      },
    ];
  } else if (mimeType.startsWith("text/") && typeof value === "string") {
    contents = [{ uri: uri.toString(), mimeType, text: value }];
  } else if (isBinaryData(value)) {
    const blob = await valueToBase64(value);
    contents = blob == null ? [] : [{ uri: uri.toString(), blob, mimeType }];
  } else {
    throw new Error(`Unsupported content type: "${mimeType}"`);
  }

  return { contents };
}

async function stringifySSEToJSON(
  value: AsyncIterable<unknown>,
): Promise<string> {
  const payloads = [];

  for await (const chunk of value) {
    payloads.push(chunk);
  }

  return JSON.stringify(payloads);
}
