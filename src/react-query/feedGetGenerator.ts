/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  InvalidateQueryFilters,
  QueryClient,
  QueryFunctionContext,
  QueryKey,
  useQuery,
  UseQueryResult,
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";
import { BlueskyCore } from "../core.js";
import { feedGetGenerator } from "../funcs/feedGetGenerator.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useBlueskyContext } from "./_context.js";
import {
  QueryHookOptions,
  SuspenseQueryHookOptions,
  TupleToPrefixes,
} from "./_types.js";

export type FeedGetGeneratorQueryData =
  operations.AppBskyFeedGetFeedGeneratorResponseBody;

/**
 * *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Get information about a feed generator. Implemented by AppView.
 */
export function useFeedGetGenerator(
  request: operations.AppBskyFeedGetFeedGeneratorRequest,
  options?: QueryHookOptions<FeedGetGeneratorQueryData>,
): UseQueryResult<FeedGetGeneratorQueryData, Error> {
  const client = useBlueskyContext();
  return useQuery({
    ...buildFeedGetGeneratorQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

/**
 * *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Get information about a feed generator. Implemented by AppView.
 */
export function useFeedGetGeneratorSuspense(
  request: operations.AppBskyFeedGetFeedGeneratorRequest,
  options?: SuspenseQueryHookOptions<FeedGetGeneratorQueryData>,
): UseSuspenseQueryResult<FeedGetGeneratorQueryData, Error> {
  const client = useBlueskyContext();
  return useSuspenseQuery({
    ...buildFeedGetGeneratorQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchFeedGetGenerator(
  queryClient: QueryClient,
  client$: BlueskyCore,
  request: operations.AppBskyFeedGetFeedGeneratorRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildFeedGetGeneratorQuery(
      client$,
      request,
    ),
  });
}

export function setFeedGetGeneratorData(
  client: QueryClient,
  queryKeyBase: [parameters: { feed: string }],
  data: FeedGetGeneratorQueryData,
): FeedGetGeneratorQueryData | undefined {
  const key = queryKeyFeedGetGenerator(...queryKeyBase);

  return client.setQueryData<FeedGetGeneratorQueryData>(key, data);
}

export function invalidateFeedGetGenerator(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<[parameters: { feed: string }]>,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: [
      "@speakeasy-api/bluesky",
      "feed",
      "getGenerator",
      ...queryKeyBase,
    ],
  });
}

export function invalidateAllFeedGetGenerator(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@speakeasy-api/bluesky", "feed", "getGenerator"],
  });
}

export function buildFeedGetGeneratorQuery(
  client$: BlueskyCore,
  request: operations.AppBskyFeedGetFeedGeneratorRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<FeedGetGeneratorQueryData>;
} {
  return {
    queryKey: queryKeyFeedGetGenerator({ feed: request.feed }),
    queryFn: async function feedGetGeneratorQueryFn(
      ctx,
    ): Promise<FeedGetGeneratorQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(feedGetGenerator(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyFeedGetGenerator(
  parameters: { feed: string },
): QueryKey {
  return ["@speakeasy-api/bluesky", "feed", "getGenerator", parameters];
}
