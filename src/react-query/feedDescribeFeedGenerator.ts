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
import { feedDescribeFeedGenerator } from "../funcs/feedDescribeFeedGenerator.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useBlueskyContext } from "./_context.js";
import { QueryHookOptions, SuspenseQueryHookOptions } from "./_types.js";

export type FeedDescribeFeedGeneratorQueryData =
  operations.AppBskyFeedDescribeFeedGeneratorResponseBody;

/**
 * *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Get information about a feed generator, including policies and offered feed URIs. Does not require auth; implemented by Feed Generator services (not App View).
 */
export function useFeedDescribeFeedGenerator(
  options?: QueryHookOptions<
    operations.AppBskyFeedDescribeFeedGeneratorResponseBody
  >,
): UseQueryResult<
  operations.AppBskyFeedDescribeFeedGeneratorResponseBody,
  Error
> {
  const client = useBlueskyContext();
  return useQuery({
    ...buildFeedDescribeFeedGeneratorQuery(
      client,
      options?.request,
    ),
    ...options,
  });
}

/**
 * *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Get information about a feed generator, including policies and offered feed URIs. Does not require auth; implemented by Feed Generator services (not App View).
 */
export function useFeedDescribeFeedGeneratorSuspense(
  options?: SuspenseQueryHookOptions<
    operations.AppBskyFeedDescribeFeedGeneratorResponseBody
  >,
): UseSuspenseQueryResult<
  operations.AppBskyFeedDescribeFeedGeneratorResponseBody,
  Error
> {
  const client = useBlueskyContext();
  return useSuspenseQuery({
    ...buildFeedDescribeFeedGeneratorQuery(
      client,
      options?.request,
    ),
    ...options,
  });
}

export function prefetchFeedDescribeFeedGenerator(
  queryClient: QueryClient,
  client$: BlueskyCore,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildFeedDescribeFeedGeneratorQuery(
      client$,
    ),
  });
}

export function setFeedDescribeFeedGeneratorData(
  client: QueryClient,
  data: operations.AppBskyFeedDescribeFeedGeneratorResponseBody,
): operations.AppBskyFeedDescribeFeedGeneratorResponseBody | undefined {
  const key = queryKeyFeedDescribeFeedGenerator();

  return client.setQueryData<
    operations.AppBskyFeedDescribeFeedGeneratorResponseBody
  >(key, data);
}

export function invalidateAllFeedDescribeFeedGenerator(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["bluesky", "feed", "describeFeedGenerator"],
  });
}

export function buildFeedDescribeFeedGeneratorQuery(
  client$: BlueskyCore,
  options?: RequestOptions,
): {
  retry: boolean;
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<operations.AppBskyFeedDescribeFeedGeneratorResponseBody>;
} {
  return {
    retry: false,
    queryKey: queryKeyFeedDescribeFeedGenerator(),
    queryFn: async function feedDescribeFeedGeneratorQuery(
      ctx,
    ): Promise<operations.AppBskyFeedDescribeFeedGeneratorResponseBody> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(feedDescribeFeedGenerator(
        client$,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyFeedDescribeFeedGenerator(): QueryKey {
  return ["bluesky", "feed", "describeFeedGenerator"];
}
