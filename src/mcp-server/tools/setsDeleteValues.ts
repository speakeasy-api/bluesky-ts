/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { setsDeleteValues } from "../../funcs/setsDeleteValues.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.ToolsOzoneSetDeleteValuesBody$inboundSchema,
};

export const tool$setsDeleteValues: ToolDefinition<typeof args> = {
  name: "sets_delete-values",
  description:
    `*This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Delete values from a specific set. Attempting to delete values that are not in the set will not result in an error`,
  scopes: ["write"],
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await setsDeleteValues(
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
