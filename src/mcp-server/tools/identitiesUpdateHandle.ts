/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { identitiesUpdateHandle } from "../../funcs/identitiesUpdateHandle.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.ComAtprotoIdentityUpdateHandleBody$inboundSchema,
};

export const tool$identitiesUpdateHandle: ToolDefinition<typeof args> = {
  name: "identities_update-handle",
  description:
    `*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Updates the current account's handle. Verifies handle validity, and updates did:plc document if necessary. Implemented by PDS, and requires auth.`,
  scopes: ["write"],
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await identitiesUpdateHandle(
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

    return formatResult(void 0, apiCall);
  },
};
