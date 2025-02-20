/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { adminsDeleteAccount } from "../../funcs/adminsDeleteAccount.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.ComAtprotoAdminDeleteAccountBody$inboundSchema,
};

export const tool$adminsDeleteAccount: ToolDefinition<typeof args> = {
  name: "admins_delete-account",
  description:
    `*This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Delete a user account as an administrator.`,
  scopes: ["write"],
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await adminsDeleteAccount(
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

    return formatResult(void 0, apiCall);
  },
};
