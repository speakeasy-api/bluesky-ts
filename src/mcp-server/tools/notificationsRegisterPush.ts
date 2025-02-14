/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { notificationsRegisterPush } from "../../funcs/notificationsRegisterPush.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.AppBskyNotificationRegisterPushRequestBody$inboundSchema,
};

export const tool$notificationsRegisterPush: ToolDefinition<typeof args> = {
  name: "notifications_register-push",
  description:
    `*This endpoint is part of the Bluesky application Lexicon APIs (\`app.bsky.*\`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Register to receive push notifications, via a specified service, for the requesting account. Requires auth.

`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await notificationsRegisterPush(
      client,
      args.request,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    return formatResult(result, apiCall);
  },
};
