/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { serversGetServiceAuth } from "../../funcs/serversGetServiceAuth.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.ComAtprotoServerGetServiceAuthRequest$inboundSchema,
};

export const tool$serversGetServiceAuth: ToolDefinition<typeof args> = {
  name: "servers_get-service-auth",
  description:
    `*This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a signed token on behalf of the requesting DID for the requested service.`,
  scopes: ["read"],
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await serversGetServiceAuth(
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
