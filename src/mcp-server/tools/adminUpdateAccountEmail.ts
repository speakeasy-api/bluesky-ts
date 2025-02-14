/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { adminUpdateAccountEmail } from "../../funcs/adminUpdateAccountEmail.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request:
    operations.ComAtprotoAdminUpdateAccountEmailRequestBody$inboundSchema,
};

export const tool$adminUpdateAccountEmail: ToolDefinition<typeof args> = {
  name: "admin_update-account-email",
  description:
    `*This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Administrative action to update an account's email.

`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await adminUpdateAccountEmail(
      client,
      args.request,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    return formatResult(result, apiCall);
  },
};
