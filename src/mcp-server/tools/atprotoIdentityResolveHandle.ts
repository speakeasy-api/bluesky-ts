/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { atprotoIdentityResolveHandle } from "../../funcs/atprotoIdentityResolveHandle.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.ComAtprotoIdentityResolveHandleRequest$inboundSchema,
};

export const tool$atprotoIdentityResolveHandle: ToolDefinition<typeof args> = {
  name: "atproto-identity_resolve-handle",
  description:
    `*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Resolves a handle (domain name) to a DID.

`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await atprotoIdentityResolveHandle(
      client,
      args.request,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    return formatResult(result, apiCall);
  },
};
