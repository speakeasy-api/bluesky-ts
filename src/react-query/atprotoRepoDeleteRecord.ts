/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from "@tanstack/react-query";
import { BlueskyCore } from "../core.js";
import { atprotoRepoDeleteRecord } from "../funcs/atprotoRepoDeleteRecord.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useBlueskyContext } from "./_context.js";

export type AtprotoRepoDeleteRecordMutationVariables = {
  request: operations.ComAtprotoRepoDeleteRecordRequestBody;
  options?: RequestOptions;
};

/**
 * *This endpoint is part of the atproto PDS repository management APIs. Requests usually require authentication (unlike the `com.atproto.sync.*` endpoints), and are made directly to the user's own PDS instance.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Delete a repository record, or ensure it doesn't exist. Requires auth, implemented by PDS.
 */
export function useAtprotoRepoDeleteRecordMutation(
  options?: UseMutationOptions<
    operations.ComAtprotoRepoDeleteRecordResponseBody,
    Error,
    AtprotoRepoDeleteRecordMutationVariables
  >,
): UseMutationResult<
  operations.ComAtprotoRepoDeleteRecordResponseBody,
  Error,
  AtprotoRepoDeleteRecordMutationVariables
> {
  const client = useBlueskyContext();
  return useMutation({
    ...buildAtprotoRepoDeleteRecordMutation(client),
    ...options,
  });
}

export function mutationKeyAtprotoRepoDeleteRecord(): MutationKey {
  return ["bluesky", "repo", "deleteRecord"];
}

export function buildAtprotoRepoDeleteRecordMutation(
  client$: BlueskyCore,
): {
  retry: boolean;
  mutationKey: MutationKey;
  mutationFn: (
    variables: AtprotoRepoDeleteRecordMutationVariables,
  ) => Promise<operations.ComAtprotoRepoDeleteRecordResponseBody>;
} {
  return {
    retry: false,
    mutationKey: mutationKeyAtprotoRepoDeleteRecord(),
    mutationFn: function atprotoRepoDeleteRecordQuery({
      request,
      options,
    }): Promise<operations.ComAtprotoRepoDeleteRecordResponseBody> {
      return unwrapAsync(atprotoRepoDeleteRecord(
        client$,
        request,
        options,
      ));
    },
  };
}
