/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { atprotoAdminDisableAccountInvites } from "../../funcs/atprotoAdminDisableAccountInvites.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request:
    operations.ComAtprotoAdminDisableAccountInvitesRequestBody$inboundSchema,
};

export const tool$atprotoAdminDisableAccountInvites: ToolDefinition<
  typeof args
> = {
  name: "atproto-admin_disable-account-invites",
  description:
    `*This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Disable an account from receiving new invite codes, but does not invalidate existing codes.

`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await atprotoAdminDisableAccountInvites(
      client,
      args.request,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    return formatResult(result, apiCall);
  },
};
