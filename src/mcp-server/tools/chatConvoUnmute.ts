/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { chatConvoUnmute } from "../../funcs/chatConvoUnmute.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.ChatBskyConvoUnmuteConvoRequestBody$inboundSchema,
};

export const tool$chatConvoUnmute: ToolDefinition<typeof args> = {
  name: "chat-convo_unmute",
  description:
    `*This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (\`did:web:api.bsky.chat\`) in the service proxying header.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await chatConvoUnmute(
      client,
      args.request,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    return formatResult(result, apiCall);
  },
};
