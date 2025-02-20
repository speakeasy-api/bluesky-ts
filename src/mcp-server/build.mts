/// <reference types="bun-types" />

import { build } from "bun";

const entrypoint = "./src/mcp-server/mcp-server.ts";

await build({
  entrypoints: [entrypoint],
  outdir: "./bin",
  sourcemap: "linked",
  target: "node",
  format: "esm",
  throw: true,
  banner: "#!/usr/bin/env node",
});
