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
import { feedGetLikes } from "../funcs/feedGetLikes.js";
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

export type FeedGetLikesQueryData = PageIterator<
  operations.AppBskyFeedGetLikesResponse,
  { cursor: string }
>;
export type FeedGetLikesPageParams = PageIterator<
  operations.AppBskyFeedGetLikesResponse,
  { cursor: string }
>["~next"];

/**
 * *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Get like records which reference a subject (by AT-URI and CID).
 */
export function useFeedGetLikes(
  request: operations.AppBskyFeedGetLikesRequest,
  options?: QueryHookOptions<operations.AppBskyFeedGetLikesResponse>,
): UseQueryResult<operations.AppBskyFeedGetLikesResponse, Error> {
  const client = useBlueskyContext();
  return useQuery({
    ...buildFeedGetLikesQuery(
      client,
      request,
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
 * Get like records which reference a subject (by AT-URI and CID).
 */
export function useFeedGetLikesSuspense(
  request: operations.AppBskyFeedGetLikesRequest,
  options?: SuspenseQueryHookOptions<operations.AppBskyFeedGetLikesResponse>,
): UseSuspenseQueryResult<operations.AppBskyFeedGetLikesResponse, Error> {
  const client = useBlueskyContext();
  return useSuspenseQuery({
    ...buildFeedGetLikesQuery(
      client,
      request,
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
 * Get like records which reference a subject (by AT-URI and CID).
 */
export function useFeedGetLikesInfinite(
  request: operations.AppBskyFeedGetLikesRequest,
  options?: InfiniteQueryHookOptions<
    PageIterator<operations.AppBskyFeedGetLikesResponse, { cursor: string }>
  >,
): UseInfiniteQueryResult<
  InfiniteData<FeedGetLikesQueryData, FeedGetLikesPageParams>,
  Error
> {
  const client = useBlueskyContext();
  return useInfiniteQuery<
    FeedGetLikesQueryData,
    Error,
    InfiniteData<FeedGetLikesQueryData, FeedGetLikesPageParams>,
    QueryKey,
    FeedGetLikesPageParams
  >({
    ...buildFeedGetLikesInfiniteQuery(
      client,
      request,
      options?.request,
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
 * Get like records which reference a subject (by AT-URI and CID).
 */
export function useFeedGetLikesInfiniteSuspense(
  request: operations.AppBskyFeedGetLikesRequest,
  options?: SuspenseInfiniteQueryHookOptions<
    PageIterator<operations.AppBskyFeedGetLikesResponse, { cursor: string }>
  >,
): UseSuspenseInfiniteQueryResult<
  InfiniteData<FeedGetLikesQueryData, FeedGetLikesPageParams>,
  Error
> {
  const client = useBlueskyContext();
  return useSuspenseInfiniteQuery<
    FeedGetLikesQueryData,
    Error,
    InfiniteData<FeedGetLikesQueryData, FeedGetLikesPageParams>,
    QueryKey,
    FeedGetLikesPageParams
  >({
    ...buildFeedGetLikesInfiniteQuery(
      client,
      request,
      options?.request,
    ),
    initialPageParam: options?.initialPageParam,
    getNextPageParam: (previousPage) => previousPage["~next"],
    ...options,
  });
}

export function prefetchFeedGetLikes(
  queryClient: QueryClient,
  client$: BlueskyCore,
  request: operations.AppBskyFeedGetLikesRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildFeedGetLikesQuery(
      client$,
      request,
    ),
  });
}

export function setFeedGetLikesData(
  client: QueryClient,
  queryKeyBase: [
    parameters: {
      uri: string;
      cid?: string | undefined;
      limit?: number | undefined;
      cursor?: string | undefined;
    },
  ],
  data: operations.AppBskyFeedGetLikesResponse,
): operations.AppBskyFeedGetLikesResponse | undefined {
  const key = queryKeyFeedGetLikes(...queryKeyBase);

  return client.setQueryData<operations.AppBskyFeedGetLikesResponse>(key, data);
}

export function invalidateFeedGetLikes(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<
    [parameters: {
      uri: string;
      cid?: string | undefined;
      limit?: number | undefined;
      cursor?: string | undefined;
    }]
  >,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["bluesky", "feed", "getLikes", ...queryKeyBase],
  });
}

export function invalidateAllFeedGetLikes(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["bluesky", "feed", "getLikes"],
  });
}

export function buildFeedGetLikesQuery(
  client$: BlueskyCore,
  request: operations.AppBskyFeedGetLikesRequest,
  options?: RequestOptions,
): {
  retry: boolean;
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<operations.AppBskyFeedGetLikesResponse>;
} {
  return {
    retry: false,
    queryKey: queryKeyFeedGetLikes({
      uri: request.uri,
      cid: request.cid,
      limit: request.limit,
      cursor: request.cursor,
    }),
    queryFn: async function feedGetLikesQuery(
      ctx,
    ): Promise<operations.AppBskyFeedGetLikesResponse> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(feedGetLikes(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function buildFeedGetLikesInfiniteQuery(
  client$: BlueskyCore,
  request: operations.AppBskyFeedGetLikesRequest,
  options?: RequestOptions,
): {
  retry: boolean;
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext<QueryKey, FeedGetLikesPageParams>,
  ) => Promise<
    PageIterator<operations.AppBskyFeedGetLikesResponse, { cursor: string }>
  >;
} {
  return {
    retry: false,
    queryKey: queryKeyFeedGetLikes({
      uri: request.uri,
      cid: request.cid,
      limit: request.limit,
      cursor: request.cursor,
    }),
    queryFn: async function feedGetLikesQuery(
      ctx,
    ): Promise<
      PageIterator<operations.AppBskyFeedGetLikesResponse, { cursor: string }>
    > {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      if (!ctx.pageParam) {
        return unwrapResultIterator(feedGetLikes(
          client$,
          request,
          mergedOptions,
        ));
      }

      return unwrapResultIterator(feedGetLikes(
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

export function queryKeyFeedGetLikes(
  parameters: {
    uri: string;
    cid?: string | undefined;
    limit?: number | undefined;
    cursor?: string | undefined;
  },
): QueryKey {
  return ["bluesky", "feed", "getLikes", parameters];
}
