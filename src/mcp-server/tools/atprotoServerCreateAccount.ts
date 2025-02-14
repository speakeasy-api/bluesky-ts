/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { atprotoServerCreateAccount } from "../../funcs/atprotoServerCreateAccount.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.ComAtprotoServerCreateAccountRequestBody$inboundSchema,
};

export const tool$atprotoServerCreateAccount: ToolDefinition<typeof args> = {
  name: "atproto-server_create-account",
  description:
    `*This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Create an account. Implemented by PDS.

`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await atprotoServerCreateAccount(
      client,
      args.request,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    return formatResult(result, apiCall);
  },
};
