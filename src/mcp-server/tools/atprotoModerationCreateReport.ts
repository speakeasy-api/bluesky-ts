/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { atprotoModerationCreateReport } from "../../funcs/atprotoModerationCreateReport.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.ComAtprotoModerationCreateReportBody$inboundSchema,
};

export const tool$atprotoModerationCreateReport: ToolDefinition<typeof args> = {
  name: "atproto-moderation_create-report",
  description:
    `*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Submit a moderation report regarding an atproto account or record. Implemented by moderation services (with PDS proxying), and requires auth.`,
  scopes: ["write"],
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await atprotoModerationCreateReport(
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
