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
import { feedGetActorLikes } from "../funcs/feedGetActorLikes.js";
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

export type FeedGetActorLikesQueryData =
  operations.AppBskyFeedGetActorLikesResponse;

export type FeedGetActorLikesInfiniteQueryData = PageIterator<
  operations.AppBskyFeedGetActorLikesResponse,
  { cursor: string }
>;

export type FeedGetActorLikesPageParams = PageIterator<
  operations.AppBskyFeedGetActorLikesResponse,
  { cursor: string }
>["~next"];

/**
 * *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Get a list of posts liked by an actor. Requires auth, actor must be the requesting account.
 */
export function useFeedGetActorLikes(
  request: operations.AppBskyFeedGetActorLikesRequest,
  options?: QueryHookOptions<FeedGetActorLikesQueryData>,
): UseQueryResult<FeedGetActorLikesQueryData, Error> {
  const client = useBlueskyContext();
  return useQuery({
    ...buildFeedGetActorLikesQuery(
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
 * Get a list of posts liked by an actor. Requires auth, actor must be the requesting account.
 */
export function useFeedGetActorLikesSuspense(
  request: operations.AppBskyFeedGetActorLikesRequest,
  options?: SuspenseQueryHookOptions<FeedGetActorLikesQueryData>,
): UseSuspenseQueryResult<FeedGetActorLikesQueryData, Error> {
  const client = useBlueskyContext();
  return useSuspenseQuery({
    ...buildFeedGetActorLikesQuery(
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
 * Get a list of posts liked by an actor. Requires auth, actor must be the requesting account.
 */
export function useFeedGetActorLikesInfinite(
  request: operations.AppBskyFeedGetActorLikesRequest,
  options?: InfiniteQueryHookOptions<FeedGetActorLikesInfiniteQueryData>,
): UseInfiniteQueryResult<
  InfiniteData<FeedGetActorLikesInfiniteQueryData, FeedGetActorLikesPageParams>,
  Error
> {
  const client = useBlueskyContext();
  return useInfiniteQuery<
    FeedGetActorLikesInfiniteQueryData,
    Error,
    InfiniteData<
      FeedGetActorLikesInfiniteQueryData,
      FeedGetActorLikesPageParams
    >,
    QueryKey,
    FeedGetActorLikesPageParams
  >({
    ...buildFeedGetActorLikesInfiniteQuery(
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
 * Get a list of posts liked by an actor. Requires auth, actor must be the requesting account.
 */
export function useFeedGetActorLikesInfiniteSuspense(
  request: operations.AppBskyFeedGetActorLikesRequest,
  options?: SuspenseInfiniteQueryHookOptions<
    FeedGetActorLikesInfiniteQueryData
  >,
): UseSuspenseInfiniteQueryResult<
  InfiniteData<FeedGetActorLikesInfiniteQueryData, FeedGetActorLikesPageParams>,
  Error
> {
  const client = useBlueskyContext();
  return useSuspenseInfiniteQuery<
    FeedGetActorLikesInfiniteQueryData,
    Error,
    InfiniteData<
      FeedGetActorLikesInfiniteQueryData,
      FeedGetActorLikesPageParams
    >,
    QueryKey,
    FeedGetActorLikesPageParams
  >({
    ...buildFeedGetActorLikesInfiniteQuery(
      client,
      request,
      options,
    ),
    initialPageParam: options?.initialPageParam,
    getNextPageParam: (previousPage) => previousPage["~next"],
    ...options,
  });
}

export function prefetchFeedGetActorLikes(
  queryClient: QueryClient,
  client$: BlueskyCore,
  request: operations.AppBskyFeedGetActorLikesRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildFeedGetActorLikesQuery(
      client$,
      request,
    ),
  });
}

export function setFeedGetActorLikesData(
  client: QueryClient,
  queryKeyBase: [
    parameters: {
      actor: string;
      limit?: number | undefined;
      cursor?: string | undefined;
    },
  ],
  data: FeedGetActorLikesQueryData,
): FeedGetActorLikesQueryData | undefined {
  const key = queryKeyFeedGetActorLikes(...queryKeyBase);

  return client.setQueryData<FeedGetActorLikesQueryData>(key, data);
}

export function invalidateFeedGetActorLikes(
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
    queryKey: [
      "@speakeasy-api/bluesky",
      "feed",
      "getActorLikes",
      ...queryKeyBase,
    ],
  });
}

export function invalidateAllFeedGetActorLikes(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@speakeasy-api/bluesky", "feed", "getActorLikes"],
  });
}

export function buildFeedGetActorLikesQuery(
  client$: BlueskyCore,
  request: operations.AppBskyFeedGetActorLikesRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<FeedGetActorLikesQueryData>;
} {
  return {
    queryKey: queryKeyFeedGetActorLikes({
      actor: request.actor,
      limit: request.limit,
      cursor: request.cursor,
    }),
    queryFn: async function feedGetActorLikesQueryFn(
      ctx,
    ): Promise<FeedGetActorLikesQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(feedGetActorLikes(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function buildFeedGetActorLikesInfiniteQuery(
  client$: BlueskyCore,
  request: operations.AppBskyFeedGetActorLikesRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext<QueryKey, FeedGetActorLikesPageParams>,
  ) => Promise<FeedGetActorLikesInfiniteQueryData>;
} {
  return {
    queryKey: queryKeyFeedGetActorLikes({
      actor: request.actor,
      limit: request.limit,
      cursor: request.cursor,
    }),
    queryFn: async function feedGetActorLikesQuery(
      ctx,
    ): Promise<FeedGetActorLikesInfiniteQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      if (!ctx.pageParam) {
        return unwrapResultIterator(feedGetActorLikes(
          client$,
          request,
          mergedOptions,
        ));
      }

      return unwrapResultIterator(feedGetActorLikes(
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

export function queryKeyFeedGetActorLikes(
  parameters: {
    actor: string;
    limit?: number | undefined;
    cursor?: string | undefined;
  },
): QueryKey {
  return ["@speakeasy-api/bluesky", "feed", "getActorLikes", parameters];
}
