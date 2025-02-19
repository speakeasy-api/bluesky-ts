/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { feedGetSuggested } from "../../funcs/feedGetSuggested.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.AppBskyFeedGetSuggestedFeedsRequest$inboundSchema
    .optional(),
};

export const tool$feedGetSuggested: ToolDefinition<typeof args> = {
  name: "feed_get-suggested",
  description:
    `*This endpoint is part of the Bluesky application Lexicon APIs (\`app.bsky.*\`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a list of suggested feeds (feed generators) for the requesting account.`,
  scopes: ["read"],
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await feedGetSuggested(
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
