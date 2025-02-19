/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { moderationQueryEvents } from "../../funcs/moderationQueryEvents.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.ToolsOzoneModerationQueryEventsRequest$inboundSchema
    .optional(),
};

export const tool$moderationQueryEvents: ToolDefinition<typeof args> = {
  name: "moderation_query-events",
  description:
    `*This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

List moderation events related to a subject.`,
  scopes: ["read"],
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await moderationQueryEvents(
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

    const value = result.value.result;

    return formatResult(value, apiCall);
  },
};
