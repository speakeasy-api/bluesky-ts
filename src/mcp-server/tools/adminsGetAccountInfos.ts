/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { adminsGetAccountInfos } from "../../funcs/adminsGetAccountInfos.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.ComAtprotoAdminGetAccountInfosRequest$inboundSchema,
};

export const tool$adminsGetAccountInfos: ToolDefinition<typeof args> = {
  name: "admins_get-account-infos",
  description:
    `*This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get details about some accounts.`,
  scopes: ["read"],
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await adminsGetAccountInfos(
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
