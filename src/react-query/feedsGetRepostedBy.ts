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
import { feedsGetRepostedBy } from "../funcs/feedsGetRepostedBy.js";
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

export type FeedsGetRepostedByQueryData =
  operations.AppBskyFeedGetRepostedByResponse;

export type FeedsGetRepostedByInfiniteQueryData = PageIterator<
  operations.AppBskyFeedGetRepostedByResponse,
  { cursor: string }
>;

export type FeedsGetRepostedByPageParams = PageIterator<
  operations.AppBskyFeedGetRepostedByResponse,
  { cursor: string }
>["~next"];

/**
 * *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Get a list of reposts for a given post.
 */
export function useFeedsGetRepostedBy(
  request: operations.AppBskyFeedGetRepostedByRequest,
  options?: QueryHookOptions<FeedsGetRepostedByQueryData>,
): UseQueryResult<FeedsGetRepostedByQueryData, Error> {
  const client = useBlueskyContext();
  return useQuery({
    ...buildFeedsGetRepostedByQuery(
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
 * Get a list of reposts for a given post.
 */
export function useFeedsGetRepostedBySuspense(
  request: operations.AppBskyFeedGetRepostedByRequest,
  options?: SuspenseQueryHookOptions<FeedsGetRepostedByQueryData>,
): UseSuspenseQueryResult<FeedsGetRepostedByQueryData, Error> {
  const client = useBlueskyContext();
  return useSuspenseQuery({
    ...buildFeedsGetRepostedByQuery(
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
 * Get a list of reposts for a given post.
 */
export function useFeedsGetRepostedByInfinite(
  request: operations.AppBskyFeedGetRepostedByRequest,
  options?: InfiniteQueryHookOptions<FeedsGetRepostedByInfiniteQueryData>,
): UseInfiniteQueryResult<
  InfiniteData<
    FeedsGetRepostedByInfiniteQueryData,
    FeedsGetRepostedByPageParams
  >,
  Error
> {
  const client = useBlueskyContext();
  return useInfiniteQuery<
    FeedsGetRepostedByInfiniteQueryData,
    Error,
    InfiniteData<
      FeedsGetRepostedByInfiniteQueryData,
      FeedsGetRepostedByPageParams
    >,
    QueryKey,
    FeedsGetRepostedByPageParams
  >({
    ...buildFeedsGetRepostedByInfiniteQuery(
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
 * Get a list of reposts for a given post.
 */
export function useFeedsGetRepostedByInfiniteSuspense(
  request: operations.AppBskyFeedGetRepostedByRequest,
  options?: SuspenseInfiniteQueryHookOptions<
    FeedsGetRepostedByInfiniteQueryData
  >,
): UseSuspenseInfiniteQueryResult<
  InfiniteData<
    FeedsGetRepostedByInfiniteQueryData,
    FeedsGetRepostedByPageParams
  >,
  Error
> {
  const client = useBlueskyContext();
  return useSuspenseInfiniteQuery<
    FeedsGetRepostedByInfiniteQueryData,
    Error,
    InfiniteData<
      FeedsGetRepostedByInfiniteQueryData,
      FeedsGetRepostedByPageParams
    >,
    QueryKey,
    FeedsGetRepostedByPageParams
  >({
    ...buildFeedsGetRepostedByInfiniteQuery(
      client,
      request,
      options,
    ),
    initialPageParam: options?.initialPageParam,
    getNextPageParam: (previousPage) => previousPage["~next"],
    ...options,
  });
}

export function prefetchFeedsGetRepostedBy(
  queryClient: QueryClient,
  client$: BlueskyCore,
  request: operations.AppBskyFeedGetRepostedByRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildFeedsGetRepostedByQuery(
      client$,
      request,
    ),
  });
}

export function setFeedsGetRepostedByData(
  client: QueryClient,
  queryKeyBase: [
    parameters: {
      uri: string;
      cid?: string | undefined;
      limit?: number | undefined;
      cursor?: string | undefined;
    },
  ],
  data: FeedsGetRepostedByQueryData,
): FeedsGetRepostedByQueryData | undefined {
  const key = queryKeyFeedsGetRepostedBy(...queryKeyBase);

  return client.setQueryData<FeedsGetRepostedByQueryData>(key, data);
}

export function invalidateFeedsGetRepostedBy(
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
    queryKey: [
      "@speakeasy-sdks/bluesky",
      "feeds",
      "getRepostedBy",
      ...queryKeyBase,
    ],
  });
}

export function invalidateAllFeedsGetRepostedBy(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@speakeasy-sdks/bluesky", "feeds", "getRepostedBy"],
  });
}

export function buildFeedsGetRepostedByQuery(
  client$: BlueskyCore,
  request: operations.AppBskyFeedGetRepostedByRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<FeedsGetRepostedByQueryData>;
} {
  return {
    queryKey: queryKeyFeedsGetRepostedBy({
      uri: request.uri,
      cid: request.cid,
      limit: request.limit,
      cursor: request.cursor,
    }),
    queryFn: async function feedsGetRepostedByQueryFn(
      ctx,
    ): Promise<FeedsGetRepostedByQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(feedsGetRepostedBy(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function buildFeedsGetRepostedByInfiniteQuery(
  client$: BlueskyCore,
  request: operations.AppBskyFeedGetRepostedByRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext<QueryKey, FeedsGetRepostedByPageParams>,
  ) => Promise<FeedsGetRepostedByInfiniteQueryData>;
} {
  return {
    queryKey: queryKeyFeedsGetRepostedBy({
      uri: request.uri,
      cid: request.cid,
      limit: request.limit,
      cursor: request.cursor,
    }),
    queryFn: async function feedsGetRepostedByQuery(
      ctx,
    ): Promise<FeedsGetRepostedByInfiniteQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      if (!ctx.pageParam) {
        return unwrapResultIterator(feedsGetRepostedBy(
          client$,
          request,
          mergedOptions,
        ));
      }

      return unwrapResultIterator(feedsGetRepostedBy(
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

export function queryKeyFeedsGetRepostedBy(
  parameters: {
    uri: string;
    cid?: string | undefined;
    limit?: number | undefined;
    cursor?: string | undefined;
  },
): QueryKey {
  return ["@speakeasy-sdks/bluesky", "feeds", "getRepostedBy", parameters];
}
