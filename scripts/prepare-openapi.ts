/* eslint-disable */
// deno-lint-ignore-file no-explicit-any

import { parse, stringify } from "jsr:@std/yaml";
import * as path from "jsr:@std/path";
import { dlv } from "./dlv.ts";

function assert(condition: unknown, message?: string): asserts condition {
  if (!condition) {
    throw Error(message ? `assertion error: ${message}` : "assertion error");
  }
}

assert(!!import.meta.dirname, "import.meta.dirname must be set");

const root = path.resolve(import.meta.dirname, "..");

const originalSpec = path.join(root, "bluesky_orig.yaml");
const fixedSpec = path.join(root, "openapi.yaml");

const doc: any = parse(await Deno.readTextFile(originalSpec));

// 🟢 Add global servers entry
doc.servers = [{ url: "https://api.bsky.app", description: "Bluesky API" }];

// 🟢 Fix enums with duplicate entries
[
  "/xrpc/com.atproto.server.confirmEmail",
  "/xrpc/com.atproto.server.deleteAccount",
  "/xrpc/com.atproto.server.resetPassword",
  "/xrpc/com.atproto.server.updateEmail",
].forEach((pathname) => {
  const errfield = dlv(doc, [
    "paths",
    pathname,
    "post",
    "responses",
    "400",
    "content",
    "application/json",
    "schema",
    "properties",
    "error",
  ]);
  assert(
    typeof errfield === "object" && errfield != null && "enum" in errfield &&
      Array.isArray(errfield.enum),
  );
  errfield.enum = Array.from(new Set(errfield.enum)).sort();
});

for (const [pathname, pathItem] of Object.entries(doc.paths)) {
  for (const [method, operation] of Object.entries(pathItem as any)) {
    // 🟢 Set SDK groups and name overrides
    const op = operation as any;
    const id = op.operationId;
    assert(
      typeof id === "string" && !!id,
      `operationId is not a string [${method} ${pathname}]`,
    );

    const idBase = id.split(".").at(-1);
    assert(
      typeof idBase === "string",
      `operationId base component is not a string [${id}]`,
    );

    op["x-speakeasy-name-override"] = idBase;

    const tag = op.tags[0];
    assert(
      typeof tag === "string" && !!tag,
      `operation tag is not a string [${method} ${pathname}]`,
    );

    if (tag.startsWith("app.bsky.")) {
      op["x-speakeasy-group"] = tag.slice("app.bsky.".length);
    } else if (tag.startsWith("chat.bsky.")) {
      op["x-speakeasy-group"] = "chat." + tag.slice("chat.bsky.".length);
    } else if (tag.startsWith("com.atproto.")) {
      op["x-speakeasy-group"] = tag.slice("com.".length);
    } else if (tag.startsWith("tools.ozone.")) {
      op["x-speakeasy-group"] = tag.slice("tools.".length);
    }

    // 🟢 Enable pagination
    const hasCursorParam = op.parameters?.find((param: any) =>
      param.name === "cursor" && param.in === "query"
    );
    const hasCursorResponseField =
      op.responses?.["200"]?.content?.["application/json"]?.schema?.properties
        ?.cursor?.type === "string";
    if (hasCursorParam && hasCursorResponseField) {
      op["x-speakeasy-pagination"] = {
        type: "cursor",
        inputs: [
          { type: "cursor", name: "cursor", in: "parameters" },
        ],
        outputs: {
          nextCursor: "$.cursor",
        },
      };
    }
  }
}

// ✅ Write out
Deno.writeTextFileSync(
  fixedSpec,
  stringify(doc, { indent: 2 }),
);
