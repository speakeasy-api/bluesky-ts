/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { serverListAppPasswords } from "../../funcs/serverListAppPasswords.js";
import { formatResult, ToolDefinition } from "../tools.js";

export const tool$serverListAppPasswords: ToolDefinition = {
  name: "server_list-app-passwords",
  description:
    `*This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

List all App Passwords.`,
  scopes: ["read"],
  tool: async (client, ctx) => {
    const [result, apiCall] = await serverListAppPasswords(
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
