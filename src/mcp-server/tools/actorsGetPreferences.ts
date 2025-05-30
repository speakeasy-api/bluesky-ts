/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { actorsGetPreferences } from "../../funcs/actorsGetPreferences.js";
import { formatResult, ToolDefinition } from "../tools.js";

export const tool$actorsGetPreferences: ToolDefinition = {
  name: "actors_get-preferences",
  description:
    `*This endpoint is part of the Bluesky application Lexicon APIs (\`app.bsky.*\`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get private preferences attached to the current account. Expected use is synchronization between multiple devices, and import/export during account migration. Requires auth.`,
  scopes: ["read"],
  tool: async (client, ctx) => {
    const [result, apiCall] = await actorsGetPreferences(
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
