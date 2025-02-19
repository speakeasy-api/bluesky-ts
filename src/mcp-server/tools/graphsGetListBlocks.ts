/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { graphsGetListBlocks } from "../../funcs/graphsGetListBlocks.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.AppBskyGraphGetListBlocksRequest$inboundSchema.optional(),
};

export const tool$graphsGetListBlocks: ToolDefinition<typeof args> = {
  name: "graphs_get-list-blocks",
  description:
    `*This endpoint is part of the Bluesky application Lexicon APIs (\`app.bsky.*\`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get mod lists that the requesting account (actor) is blocking. Requires auth.`,
  scopes: ["read"],
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await graphsGetListBlocks(
      client,
      args.request,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    const value = result.value.result;

    return formatResult(value, apiCall);
  },
};
