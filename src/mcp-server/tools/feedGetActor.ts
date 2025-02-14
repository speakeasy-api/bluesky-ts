/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { feedGetActor } from "../../funcs/feedGetActor.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.AppBskyFeedGetActorFeedsRequest$inboundSchema,
};

export const tool$feedGetActor: ToolDefinition<typeof args> = {
  name: "feed_get-actor",
  description:
    `*This endpoint is part of the Bluesky application Lexicon APIs (\`app.bsky.*\`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a list of feeds (feed generator records) created by the actor (in the actor's repo).

`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await feedGetActor(
      client,
      args.request,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    return formatResult(result, apiCall);
  },
};
