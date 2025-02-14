/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { syncsGetLatestCommit } from "../../funcs/syncsGetLatestCommit.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.ComAtprotoSyncGetLatestCommitRequest$inboundSchema,
};

export const tool$syncsGetLatestCommit: ToolDefinition<typeof args> = {
  name: "syncs_get-latest-commit",
  description:
    `This endpoint is part of the atproto repository synchronization APIs. Requests usually do not require authentication, and can be made to PDS intances or Relay instances.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get the current commit CID & revision of the specified repo. Does not require auth.

`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await syncsGetLatestCommit(
      client,
      args.request,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    return formatResult(result, apiCall);
  },
};
