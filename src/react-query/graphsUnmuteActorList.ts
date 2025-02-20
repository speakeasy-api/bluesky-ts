/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { BlueskyCore } from "../core.js";
import { graphsUnmuteActorList } from "../funcs/graphsUnmuteActorList.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useBlueskyContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type GraphsUnmuteActorListMutationVariables = {
  request: operations.AppBskyGraphUnmuteActorListBody;
  options?: RequestOptions;
};

export type GraphsUnmuteActorListMutationData = void;

/**
 * *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Unmutes the specified list of accounts. Requires auth.
 */
export function useGraphsUnmuteActorListMutation(
  options?: MutationHookOptions<
    GraphsUnmuteActorListMutationData,
    Error,
    GraphsUnmuteActorListMutationVariables
  >,
): UseMutationResult<
  GraphsUnmuteActorListMutationData,
  Error,
  GraphsUnmuteActorListMutationVariables
> {
  const client = useBlueskyContext();
  return useMutation({
    ...buildGraphsUnmuteActorListMutation(client, options),
    ...options,
  });
}

export function mutationKeyGraphsUnmuteActorList(): MutationKey {
  return ["@speakeasy-sdks/bluesky", "graphs", "unmuteActorList"];
}

export function buildGraphsUnmuteActorListMutation(
  client$: BlueskyCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: GraphsUnmuteActorListMutationVariables,
  ) => Promise<GraphsUnmuteActorListMutationData>;
} {
  return {
    mutationKey: mutationKeyGraphsUnmuteActorList(),
    mutationFn: function graphsUnmuteActorListMutationFn({
      request,
      options,
    }): Promise<GraphsUnmuteActorListMutationData> {
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
      return unwrapAsync(graphsUnmuteActorList(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
