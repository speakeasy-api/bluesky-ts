/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { serverCheckAccountStatus } from "../../funcs/serverCheckAccountStatus.js";
import { formatResult, ToolDefinition } from "../tools.js";

export const tool$serverCheckAccountStatus: ToolDefinition = {
  name: "server_check-account-status",
  description:
    `*This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Returns the status of an account, especially as pertaining to import or recovery. Can be called many times over the course of an account migration. Requires auth and can only be called pertaining to oneself.

`,
  tool: async (client, ctx) => {
    const [result, apiCall] = await serverCheckAccountStatus(
      client,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    return formatResult(result, apiCall);
  },
};
