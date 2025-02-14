/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { graphsGetKnownFollowers } from "../../funcs/graphsGetKnownFollowers.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.AppBskyGraphGetKnownFollowersRequest$inboundSchema,
};

export const tool$graphsGetKnownFollowers: ToolDefinition<typeof args> = {
  name: "graphs_get-known-followers",
  description:
    `*This endpoint is part of the Bluesky application Lexicon APIs (\`app.bsky.*\`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Enumerates accounts which follow a specified account (actor) and are followed by the viewer.

`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await graphsGetKnownFollowers(
      client,
      args.request,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    return formatResult(result, apiCall);
  },
};
