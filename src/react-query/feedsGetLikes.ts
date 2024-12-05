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
import { feedsGetLikes } from "../funcs/feedsGetLikes.js";
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

export type FeedsGetLikesQueryData = operations.AppBskyFeedGetLikesResponse;

export type FeedsGetLikesInfiniteQueryData = PageIterator<
  operations.AppBskyFeedGetLikesResponse,
  { cursor: string }
>;

export type FeedsGetLikesPageParams = PageIterator<
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
export function useFeedsGetLikes(
  request: operations.AppBskyFeedGetLikesRequest,
  options?: QueryHookOptions<FeedsGetLikesQueryData>,
): UseQueryResult<FeedsGetLikesQueryData, Error> {
  const client = useBlueskyContext();
  return useQuery({
    ...buildFeedsGetLikesQuery(
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
 * Get like records which reference a subject (by AT-URI and CID).
 */
export function useFeedsGetLikesSuspense(
  request: operations.AppBskyFeedGetLikesRequest,
  options?: SuspenseQueryHookOptions<FeedsGetLikesQueryData>,
): UseSuspenseQueryResult<FeedsGetLikesQueryData, Error> {
  const client = useBlueskyContext();
  return useSuspenseQuery({
    ...buildFeedsGetLikesQuery(
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
 * Get like records which reference a subject (by AT-URI and CID).
 */
export function useFeedsGetLikesInfinite(
  request: operations.AppBskyFeedGetLikesRequest,
  options?: InfiniteQueryHookOptions<FeedsGetLikesInfiniteQueryData>,
): UseInfiniteQueryResult<
  InfiniteData<FeedsGetLikesInfiniteQueryData, FeedsGetLikesPageParams>,
  Error
> {
  const client = useBlueskyContext();
  return useInfiniteQuery<
    FeedsGetLikesInfiniteQueryData,
    Error,
    InfiniteData<FeedsGetLikesInfiniteQueryData, FeedsGetLikesPageParams>,
    QueryKey,
    FeedsGetLikesPageParams
  >({
    ...buildFeedsGetLikesInfiniteQuery(
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
 * Get like records which reference a subject (by AT-URI and CID).
 */
export function useFeedsGetLikesInfiniteSuspense(
  request: operations.AppBskyFeedGetLikesRequest,
  options?: SuspenseInfiniteQueryHookOptions<FeedsGetLikesInfiniteQueryData>,
): UseSuspenseInfiniteQueryResult<
  InfiniteData<FeedsGetLikesInfiniteQueryData, FeedsGetLikesPageParams>,
  Error
> {
  const client = useBlueskyContext();
  return useSuspenseInfiniteQuery<
    FeedsGetLikesInfiniteQueryData,
    Error,
    InfiniteData<FeedsGetLikesInfiniteQueryData, FeedsGetLikesPageParams>,
    QueryKey,
    FeedsGetLikesPageParams
  >({
    ...buildFeedsGetLikesInfiniteQuery(
      client,
      request,
      options,
    ),
    initialPageParam: options?.initialPageParam,
    getNextPageParam: (previousPage) => previousPage["~next"],
    ...options,
  });
}

export function prefetchFeedsGetLikes(
  queryClient: QueryClient,
  client$: BlueskyCore,
  request: operations.AppBskyFeedGetLikesRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildFeedsGetLikesQuery(
      client$,
      request,
    ),
  });
}

export function setFeedsGetLikesData(
  client: QueryClient,
  queryKeyBase: [
    parameters: {
      uri: string;
      cid?: string | undefined;
      limit?: number | undefined;
      cursor?: string | undefined;
    },
  ],
  data: FeedsGetLikesQueryData,
): FeedsGetLikesQueryData | undefined {
  const key = queryKeyFeedsGetLikes(...queryKeyBase);

  return client.setQueryData<FeedsGetLikesQueryData>(key, data);
}

export function invalidateFeedsGetLikes(
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
    queryKey: ["@speakeasy-api/bluesky", "feeds", "getLikes", ...queryKeyBase],
  });
}

export function invalidateAllFeedsGetLikes(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@speakeasy-api/bluesky", "feeds", "getLikes"],
  });
}

export function buildFeedsGetLikesQuery(
  client$: BlueskyCore,
  request: operations.AppBskyFeedGetLikesRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (context: QueryFunctionContext) => Promise<FeedsGetLikesQueryData>;
} {
  return {
    queryKey: queryKeyFeedsGetLikes({
      uri: request.uri,
      cid: request.cid,
      limit: request.limit,
      cursor: request.cursor,
    }),
    queryFn: async function feedsGetLikesQueryFn(
      ctx,
    ): Promise<FeedsGetLikesQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(feedsGetLikes(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function buildFeedsGetLikesInfiniteQuery(
  client$: BlueskyCore,
  request: operations.AppBskyFeedGetLikesRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext<QueryKey, FeedsGetLikesPageParams>,
  ) => Promise<FeedsGetLikesInfiniteQueryData>;
} {
  return {
    queryKey: queryKeyFeedsGetLikes({
      uri: request.uri,
      cid: request.cid,
      limit: request.limit,
      cursor: request.cursor,
    }),
    queryFn: async function feedsGetLikesQuery(
      ctx,
    ): Promise<FeedsGetLikesInfiniteQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      if (!ctx.pageParam) {
        return unwrapResultIterator(feedsGetLikes(
          client$,
          request,
          mergedOptions,
        ));
      }

      return unwrapResultIterator(feedsGetLikes(
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

export function queryKeyFeedsGetLikes(
  parameters: {
    uri: string;
    cid?: string | undefined;
    limit?: number | undefined;
    cursor?: string | undefined;
  },
): QueryKey {
  return ["@speakeasy-api/bluesky", "feeds", "getLikes", parameters];
}
