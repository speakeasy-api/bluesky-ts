/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { notificationList } from "../../funcs/notificationList.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.AppBskyNotificationListNotificationsRequest$inboundSchema
    .optional(),
};

export const tool$notificationList: ToolDefinition<typeof args> = {
  name: "notification_list",
  description:
    `*This endpoint is part of the Bluesky application Lexicon APIs (\`app.bsky.*\`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Enumerate notifications for the requesting account. Requires auth.`,
  scopes: ["read"],
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await notificationList(
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
