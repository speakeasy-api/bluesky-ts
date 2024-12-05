/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { BlueskyCore } from "../core.js";
import { atprotoRepoUploadBlob } from "../funcs/atprotoRepoUploadBlob.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useBlueskyContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type AtprotoRepoUploadBlobMutationVariables = {
  request: ReadableStream<Uint8Array> | Blob | ArrayBuffer | Uint8Array;
  options?: RequestOptions;
};

export type AtprotoRepoUploadBlobMutationData =
  operations.ComAtprotoRepoUploadBlobResponseBody;

/**
 * *This endpoint is part of the atproto PDS repository management APIs. Requests usually require authentication (unlike the `com.atproto.sync.*` endpoints), and are made directly to the user's own PDS instance.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Upload a new blob, to be referenced from a repository record. The blob will be deleted if it is not referenced within a time window (eg, minutes). Blob restrictions (mimetype, size, etc) are enforced when the reference is created. Requires auth, implemented by PDS.
 */
export function useAtprotoRepoUploadBlobMutation(
  options?: MutationHookOptions<
    AtprotoRepoUploadBlobMutationData,
    Error,
    AtprotoRepoUploadBlobMutationVariables
  >,
): UseMutationResult<
  AtprotoRepoUploadBlobMutationData,
  Error,
  AtprotoRepoUploadBlobMutationVariables
> {
  const client = useBlueskyContext();
  return useMutation({
    ...buildAtprotoRepoUploadBlobMutation(client, options),
    ...options,
  });
}

export function mutationKeyAtprotoRepoUploadBlob(): MutationKey {
  return ["@speakeasy-api/bluesky", "atprotoRepo", "uploadBlob"];
}

export function buildAtprotoRepoUploadBlobMutation(
  client$: BlueskyCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: AtprotoRepoUploadBlobMutationVariables,
  ) => Promise<AtprotoRepoUploadBlobMutationData>;
} {
  return {
    mutationKey: mutationKeyAtprotoRepoUploadBlob(),
    mutationFn: function atprotoRepoUploadBlobMutationFn({
      request,
      options,
    }): Promise<AtprotoRepoUploadBlobMutationData> {
      const mergedOptions = {
        ...hookOptions,
        ...options,
        fetchOptions: {
          ...hookOptions?.fetchOptions,
          ...options?.fetchOptions,
          signal: combineSignals(
            hookOptions?.fetchOptions?.signal,
            options?.fetchOptions?.signal,
          ),
        },
      };
      return unwrapAsync(atprotoRepoUploadBlob(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
