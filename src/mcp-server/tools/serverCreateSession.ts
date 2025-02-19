/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { serverCreateSession } from "../../funcs/serverCreateSession.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.ComAtprotoServerCreateSessionBody$inboundSchema,
};

export const tool$serverCreateSession: ToolDefinition<typeof args> = {
  name: "server_create-session",
  description:
    `*This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Create an authentication session.`,
  scopes: ["write"],
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await serverCreateSession(
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

    const value = result.value;

    return formatResult(value, apiCall);
  },
};
