/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { atprotoServerActivateAccount } from "../../funcs/atprotoServerActivateAccount.js";
import { formatResult, ToolDefinition } from "../tools.js";

export const tool$atprotoServerActivateAccount: ToolDefinition = {
  name: "atproto-server_activate-account",
  description:
    `*This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Activates a currently deactivated account. Used to finalize account migration after the account's repo is imported and identity is setup.`,
  scopes: ["write"],
  tool: async (client, ctx) => {
    const [result, apiCall] = await atprotoServerActivateAccount(
      client,
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
