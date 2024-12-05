/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  InfiniteData,
  InvalidateQueryFilters,
  QueryClient,
  QueryFunctionContext,
  QueryKey,
  useInfiniteQuery,
  UseInfiniteQueryResult,
  useQuery,
  UseQueryResult,
  useSuspenseInfiniteQuery,
  UseSuspenseInfiniteQueryResult,
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";
import { BlueskyCore } from "../core.js";
import { feedGetActor } from "../funcs/feedGetActor.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";
import { useBlueskyContext } from "./_context.js";
import {
  InfiniteQueryHookOptions,
  QueryHookOptions,
  SuspenseInfiniteQueryHookOptions,
  SuspenseQueryHookOptions,
  TupleToPrefixes,
} from "./_types.js";

export type FeedGetActorQueryData = operations.AppBskyFeedGetActorFeedsResponse;

export type FeedGetActorInfiniteQueryData = PageIterator<
  operations.AppBskyFeedGetActorFeedsResponse,
  { cursor: string }
>;

export type FeedGetActorPageParams = PageIterator<
  operations.AppBskyFeedGetActorFeedsResponse,
  { cursor: string }
>["~next"];

/**
 * *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Get a list of feeds (feed generator records) created by the actor (in the actor's repo).
 */
export function useFeedGetActor(
  request: operations.AppBskyFeedGetActorFeedsRequest,
  options?: QueryHookOptions<FeedGetActorQueryData>,
): UseQueryResult<FeedGetActorQueryData, Error> {
  const client = useBlueskyContext();
  return useQuery({
    ...buildFeedGetActorQuery(
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
 * Get a list of feeds (feed generator records) created by the actor (in the actor's repo).
 */
export function useFeedGetActorSuspense(
  request: operations.AppBskyFeedGetActorFeedsRequest,
  options?: SuspenseQueryHookOptions<FeedGetActorQueryData>,
): UseSuspenseQueryResult<FeedGetActorQueryData, Error> {
  const client = useBlueskyContext();
  return useSuspenseQuery({
    ...buildFeedGetActorQuery(
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
 * Get a list of feeds (feed generator records) created by the actor (in the actor's repo).
 */
export function useFeedGetActorInfinite(
  request: operations.AppBskyFeedGetActorFeedsRequest,
  options?: InfiniteQueryHookOptions<FeedGetActorInfiniteQueryData>,
): UseInfiniteQueryResult<
  InfiniteData<FeedGetActorInfiniteQueryData, FeedGetActorPageParams>,
  Error
> {
  const client = useBlueskyContext();
  return useInfiniteQuery<
    FeedGetActorInfiniteQueryData,
    Error,
    InfiniteData<FeedGetActorInfiniteQueryData, FeedGetActorPageParams>,
    QueryKey,
    FeedGetActorPageParams
  >({
    ...buildFeedGetActorInfiniteQuery(
      client,
      request,
      options,
    ),
    initialPageParam: options?.initialPageParam,
    getNextPageParam: (previousPage) => previousPage["~next"],
    ...options,
  });
}

/**
 * *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Get a list of feeds (feed generator records) created by the actor (in the actor's repo).
 */
export function useFeedGetActorInfiniteSuspense(
  request: operations.AppBskyFeedGetActorFeedsRequest,
  options?: SuspenseInfiniteQueryHookOptions<FeedGetActorInfiniteQueryData>,
): UseSuspenseInfiniteQueryResult<
  InfiniteData<FeedGetActorInfiniteQueryData, FeedGetActorPageParams>,
  Error
> {
  const client = useBlueskyContext();
  return useSuspenseInfiniteQuery<
    FeedGetActorInfiniteQueryData,
    Error,
    InfiniteData<FeedGetActorInfiniteQueryData, FeedGetActorPageParams>,
    QueryKey,
    FeedGetActorPageParams
  >({
    ...buildFeedGetActorInfiniteQuery(
      client,
      request,
      options,
    ),
    initialPageParam: options?.initialPageParam,
    getNextPageParam: (previousPage) => previousPage["~next"],
    ...options,
  });
}

export function prefetchFeedGetActor(
  queryClient: QueryClient,
  client$: BlueskyCore,
  request: operations.AppBskyFeedGetActorFeedsRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildFeedGetActorQuery(
      client$,
      request,
    ),
  });
}

export function setFeedGetActorData(
  client: QueryClient,
  queryKeyBase: [
    parameters: {
      actor: string;
      limit?: number | undefined;
      cursor?: string | undefined;
    },
  ],
  data: FeedGetActorQueryData,
): FeedGetActorQueryData | undefined {
  const key = queryKeyFeedGetActor(...queryKeyBase);

  return client.setQueryData<FeedGetActorQueryData>(key, data);
}

export function invalidateFeedGetActor(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<
    [parameters: {
      actor: string;
      limit?: number | undefined;
      cursor?: string | undefined;
    }]
  >,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["bluesky", "feed", "getActor", ...queryKeyBase],
  });
}

export function invalidateAllFeedGetActor(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["bluesky", "feed", "getActor"],
  });
}

export function buildFeedGetActorQuery(
  client$: BlueskyCore,
  request: operations.AppBskyFeedGetActorFeedsRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (context: QueryFunctionContext) => Promise<FeedGetActorQueryData>;
} {
  return {
    queryKey: queryKeyFeedGetActor({
      actor: request.actor,
      limit: request.limit,
      cursor: request.cursor,
    }),
    queryFn: async function feedGetActorQueryFn(
      ctx,
    ): Promise<FeedGetActorQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(feedGetActor(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function buildFeedGetActorInfiniteQuery(
  client$: BlueskyCore,
  request: operations.AppBskyFeedGetActorFeedsRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext<QueryKey, FeedGetActorPageParams>,
  ) => Promise<FeedGetActorInfiniteQueryData>;
} {
  return {
    queryKey: queryKeyFeedGetActor({
      actor: request.actor,
      limit: request.limit,
      cursor: request.cursor,
    }),
    queryFn: async function feedGetActorQuery(
      ctx,
    ): Promise<FeedGetActorInfiniteQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      if (!ctx.pageParam) {
        return unwrapResultIterator(feedGetActor(
          client$,
          request,
          mergedOptions,
        ));
      }

      return unwrapResultIterator(feedGetActor(
        client$,
        {
          ...request,
          cursor: ctx.pageParam.cursor,
        },
        mergedOptions,
      ));
    },
  };
}

export function queryKeyFeedGetActor(
  parameters: {
    actor: string;
    limit?: number | undefined;
    cursor?: string | undefined;
  },
): QueryKey {
  return ["bluesky", "feed", "getActor", parameters];
}
