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
import { feedsGetQuotes } from "../funcs/feedsGetQuotes.js";
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

export type FeedsGetQuotesQueryData = operations.AppBskyFeedGetQuotesResponse;

export type FeedsGetQuotesInfiniteQueryData = PageIterator<
  operations.AppBskyFeedGetQuotesResponse,
  { cursor: string }
>;

export type FeedsGetQuotesPageParams = PageIterator<
  operations.AppBskyFeedGetQuotesResponse,
  { cursor: string }
>["~next"];

/**
 * *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Get a list of quotes for a given post.
 */
export function useFeedsGetQuotes(
  request: operations.AppBskyFeedGetQuotesRequest,
  options?: QueryHookOptions<FeedsGetQuotesQueryData>,
): UseQueryResult<FeedsGetQuotesQueryData, Error> {
  const client = useBlueskyContext();
  return useQuery({
    ...buildFeedsGetQuotesQuery(
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
 * Get a list of quotes for a given post.
 */
export function useFeedsGetQuotesSuspense(
  request: operations.AppBskyFeedGetQuotesRequest,
  options?: SuspenseQueryHookOptions<FeedsGetQuotesQueryData>,
): UseSuspenseQueryResult<FeedsGetQuotesQueryData, Error> {
  const client = useBlueskyContext();
  return useSuspenseQuery({
    ...buildFeedsGetQuotesQuery(
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
 * Get a list of quotes for a given post.
 */
export function useFeedsGetQuotesInfinite(
  request: operations.AppBskyFeedGetQuotesRequest,
  options?: InfiniteQueryHookOptions<FeedsGetQuotesInfiniteQueryData>,
): UseInfiniteQueryResult<
  InfiniteData<FeedsGetQuotesInfiniteQueryData, FeedsGetQuotesPageParams>,
  Error
> {
  const client = useBlueskyContext();
  return useInfiniteQuery<
    FeedsGetQuotesInfiniteQueryData,
    Error,
    InfiniteData<FeedsGetQuotesInfiniteQueryData, FeedsGetQuotesPageParams>,
    QueryKey,
    FeedsGetQuotesPageParams
  >({
    ...buildFeedsGetQuotesInfiniteQuery(
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
 * Get a list of quotes for a given post.
 */
export function useFeedsGetQuotesInfiniteSuspense(
  request: operations.AppBskyFeedGetQuotesRequest,
  options?: SuspenseInfiniteQueryHookOptions<FeedsGetQuotesInfiniteQueryData>,
): UseSuspenseInfiniteQueryResult<
  InfiniteData<FeedsGetQuotesInfiniteQueryData, FeedsGetQuotesPageParams>,
  Error
> {
  const client = useBlueskyContext();
  return useSuspenseInfiniteQuery<
    FeedsGetQuotesInfiniteQueryData,
    Error,
    InfiniteData<FeedsGetQuotesInfiniteQueryData, FeedsGetQuotesPageParams>,
    QueryKey,
    FeedsGetQuotesPageParams
  >({
    ...buildFeedsGetQuotesInfiniteQuery(
      client,
      request,
      options,
    ),
    initialPageParam: options?.initialPageParam,
    getNextPageParam: (previousPage) => previousPage["~next"],
    ...options,
  });
}

export function prefetchFeedsGetQuotes(
  queryClient: QueryClient,
  client$: BlueskyCore,
  request: operations.AppBskyFeedGetQuotesRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildFeedsGetQuotesQuery(
      client$,
      request,
    ),
  });
}

export function setFeedsGetQuotesData(
  client: QueryClient,
  queryKeyBase: [
    parameters: {
      uri: string;
      cid?: string | undefined;
      limit?: number | undefined;
      cursor?: string | undefined;
    },
  ],
  data: FeedsGetQuotesQueryData,
): FeedsGetQuotesQueryData | undefined {
  const key = queryKeyFeedsGetQuotes(...queryKeyBase);

  return client.setQueryData<FeedsGetQuotesQueryData>(key, data);
}

export function invalidateFeedsGetQuotes(
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
      "getQuotes",
      ...queryKeyBase,
    ],
  });
}

export function invalidateAllFeedsGetQuotes(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@speakeasy-sdks/bluesky", "feeds", "getQuotes"],
  });
}

export function buildFeedsGetQuotesQuery(
  client$: BlueskyCore,
  request: operations.AppBskyFeedGetQuotesRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (context: QueryFunctionContext) => Promise<FeedsGetQuotesQueryData>;
} {
  return {
    queryKey: queryKeyFeedsGetQuotes({
      uri: request.uri,
      cid: request.cid,
      limit: request.limit,
      cursor: request.cursor,
    }),
    queryFn: async function feedsGetQuotesQueryFn(
      ctx,
    ): Promise<FeedsGetQuotesQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(feedsGetQuotes(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function buildFeedsGetQuotesInfiniteQuery(
  client$: BlueskyCore,
  request: operations.AppBskyFeedGetQuotesRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext<QueryKey, FeedsGetQuotesPageParams>,
  ) => Promise<FeedsGetQuotesInfiniteQueryData>;
} {
  return {
    queryKey: queryKeyFeedsGetQuotes({
      uri: request.uri,
      cid: request.cid,
      limit: request.limit,
      cursor: request.cursor,
    }),
    queryFn: async function feedsGetQuotesQuery(
      ctx,
    ): Promise<FeedsGetQuotesInfiniteQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      if (!ctx.pageParam) {
        return unwrapResultIterator(feedsGetQuotes(
          client$,
          request,
          mergedOptions,
        ));
      }

      return unwrapResultIterator(feedsGetQuotes(
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

export function queryKeyFeedsGetQuotes(
  parameters: {
    uri: string;
    cid?: string | undefined;
    limit?: number | undefined;
    cursor?: string | undefined;
  },
): QueryKey {
  return ["@speakeasy-sdks/bluesky", "feeds", "getQuotes", parameters];
}
