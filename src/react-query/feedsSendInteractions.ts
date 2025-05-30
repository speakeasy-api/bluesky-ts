/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { BlueskyCore } from "../core.js";
import { feedsSendInteractions } from "../funcs/feedsSendInteractions.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useBlueskyContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type FeedsSendInteractionsMutationVariables = {
  request: operations.AppBskyFeedSendInteractionsBody;
  options?: RequestOptions;
};

export type FeedsSendInteractionsMutationData =
  operations.AppBskyFeedSendInteractionsResponseBody;

/**
 * *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Send information about interactions with feed items back to the feed generator that served them.
 */
export function useFeedsSendInteractionsMutation(
  options?: MutationHookOptions<
    FeedsSendInteractionsMutationData,
    Error,
    FeedsSendInteractionsMutationVariables
  >,
): UseMutationResult<
  FeedsSendInteractionsMutationData,
  Error,
  FeedsSendInteractionsMutationVariables
> {
  const client = useBlueskyContext();
  return useMutation({
    ...buildFeedsSendInteractionsMutation(client, options),
    ...options,
  });
}

export function mutationKeyFeedsSendInteractions(): MutationKey {
  return ["@speakeasy-sdks/bluesky", "feeds", "sendInteractions"];
}

export function buildFeedsSendInteractionsMutation(
  client$: BlueskyCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: FeedsSendInteractionsMutationVariables,
  ) => Promise<FeedsSendInteractionsMutationData>;
} {
  return {
    mutationKey: mutationKeyFeedsSendInteractions(),
    mutationFn: function feedsSendInteractionsMutationFn({
      request,
      options,
    }): Promise<FeedsSendInteractionsMutationData> {
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
      return unwrapAsync(feedsSendInteractions(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
