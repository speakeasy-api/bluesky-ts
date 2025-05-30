/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { reposGetRecord } from "../../funcs/reposGetRecord.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.ComAtprotoRepoGetRecordRequest$inboundSchema,
};

export const tool$reposGetRecord: ToolDefinition<typeof args> = {
  name: "repos_get-record",
  description:
    `*This endpoint is part of the atproto PDS repository management APIs. Requests usually require authentication (unlike the \`com.atproto.sync.*\` endpoints), and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a single record from a repository. Does not require auth.`,
  scopes: ["read"],
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await reposGetRecord(
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
