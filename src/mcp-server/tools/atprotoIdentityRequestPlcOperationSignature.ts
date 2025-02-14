/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { atprotoIdentityRequestPlcOperationSignature } from "../../funcs/atprotoIdentityRequestPlcOperationSignature.js";
import { formatResult, ToolDefinition } from "../tools.js";

export const tool$atprotoIdentityRequestPlcOperationSignature: ToolDefinition =
  {
    name: "atproto-identity_request-plc-operation-signature",
    description:
      `*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Request an email with a code to in order to request a signed PLC operation. Requires Auth.

`,
    tool: async (client, ctx) => {
      const [result, apiCall] =
        await atprotoIdentityRequestPlcOperationSignature(
          client,
          { fetchOptions: { signal: ctx.signal } },
        ).$inspect();

      return formatResult(result, apiCall);
    },
  };
