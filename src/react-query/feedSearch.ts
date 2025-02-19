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
import { feedSearch } from "../funcs/feedSearch.js";
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

export type FeedSearchQueryData = operations.AppBskyFeedSearchPostsResponse;

export type FeedSearchInfiniteQueryData = PageIterator<
  operations.AppBskyFeedSearchPostsResponse,
  { cursor: string }
>;

export type FeedSearchPageParams = PageIterator<
  operations.AppBskyFeedSearchPostsResponse,
  { cursor: string }
>["~next"];

/**
 * *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Find posts matching search criteria, returning views of those posts.
 */
export function useFeedSearch(
  request: operations.AppBskyFeedSearchPostsRequest,
  options?: QueryHookOptions<FeedSearchQueryData>,
): UseQueryResult<FeedSearchQueryData, Error> {
  const client = useBlueskyContext();
  return useQuery({
    ...buildFeedSearchQuery(
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
 * Find posts matching search criteria, returning views of those posts.
 */
export function useFeedSearchSuspense(
  request: operations.AppBskyFeedSearchPostsRequest,
  options?: SuspenseQueryHookOptions<FeedSearchQueryData>,
): UseSuspenseQueryResult<FeedSearchQueryData, Error> {
  const client = useBlueskyContext();
  return useSuspenseQuery({
    ...buildFeedSearchQuery(
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
 * Find posts matching search criteria, returning views of those posts.
 */
export function useFeedSearchInfinite(
  request: operations.AppBskyFeedSearchPostsRequest,
  options?: InfiniteQueryHookOptions<FeedSearchInfiniteQueryData>,
): UseInfiniteQueryResult<
  InfiniteData<FeedSearchInfiniteQueryData, FeedSearchPageParams>,
  Error
> {
  const client = useBlueskyContext();
  return useInfiniteQuery<
    FeedSearchInfiniteQueryData,
    Error,
    InfiniteData<FeedSearchInfiniteQueryData, FeedSearchPageParams>,
    QueryKey,
    FeedSearchPageParams
  >({
    ...buildFeedSearchInfiniteQuery(
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
 * Find posts matching search criteria, returning views of those posts.
 */
export function useFeedSearchInfiniteSuspense(
  request: operations.AppBskyFeedSearchPostsRequest,
  options?: SuspenseInfiniteQueryHookOptions<FeedSearchInfiniteQueryData>,
): UseSuspenseInfiniteQueryResult<
  InfiniteData<FeedSearchInfiniteQueryData, FeedSearchPageParams>,
  Error
> {
  const client = useBlueskyContext();
  return useSuspenseInfiniteQuery<
    FeedSearchInfiniteQueryData,
    Error,
    InfiniteData<FeedSearchInfiniteQueryData, FeedSearchPageParams>,
    QueryKey,
    FeedSearchPageParams
  >({
    ...buildFeedSearchInfiniteQuery(
      client,
      request,
      options,
    ),
    initialPageParam: options?.initialPageParam,
    getNextPageParam: (previousPage) => previousPage["~next"],
    ...options,
  });
}

export function prefetchFeedSearch(
  queryClient: QueryClient,
  client$: BlueskyCore,
  request: operations.AppBskyFeedSearchPostsRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildFeedSearchQuery(
      client$,
      request,
    ),
  });
}

export function setFeedSearchData(
  client: QueryClient,
  queryKeyBase: [
    parameters: {
      q: string;
      sort?: operations.AppBskyFeedSearchPostsSort | undefined;
      since?: string | undefined;
      until?: string | undefined;
      mentions?: string | undefined;
      author?: string | undefined;
      lang?: string | undefined;
      domain?: string | undefined;
      url?: string | undefined;
      tag?: Array<string> | undefined;
      limit?: number | undefined;
      cursor?: string | undefined;
    },
  ],
  data: FeedSearchQueryData,
): FeedSearchQueryData | undefined {
  const key = queryKeyFeedSearch(...queryKeyBase);

  return client.setQueryData<FeedSearchQueryData>(key, data);
}

export function invalidateFeedSearch(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<
    [parameters: {
      q: string;
      sort?: operations.AppBskyFeedSearchPostsSort | undefined;
      since?: string | undefined;
      until?: string | undefined;
      mentions?: string | undefined;
      author?: string | undefined;
      lang?: string | undefined;
      domain?: string | undefined;
      url?: string | undefined;
      tag?: Array<string> | undefined;
      limit?: number | undefined;
      cursor?: string | undefined;
    }]
  >,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@speakeasy-api/bluesky", "feed", "search", ...queryKeyBase],
  });
}

export function invalidateAllFeedSearch(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@speakeasy-api/bluesky", "feed", "search"],
  });
}

export function buildFeedSearchQuery(
  client$: BlueskyCore,
  request: operations.AppBskyFeedSearchPostsRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (context: QueryFunctionContext) => Promise<FeedSearchQueryData>;
} {
  return {
    queryKey: queryKeyFeedSearch({
      q: request.q,
      sort: request.sort,
      since: request.since,
      until: request.until,
      mentions: request.mentions,
      author: request.author,
      lang: request.lang,
      domain: request.domain,
      url: request.url,
      tag: request.tag,
      limit: request.limit,
      cursor: request.cursor,
    }),
    queryFn: async function feedSearchQueryFn(
      ctx,
    ): Promise<FeedSearchQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(feedSearch(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function buildFeedSearchInfiniteQuery(
  client$: BlueskyCore,
  request: operations.AppBskyFeedSearchPostsRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext<QueryKey, FeedSearchPageParams>,
  ) => Promise<FeedSearchInfiniteQueryData>;
} {
  return {
    queryKey: queryKeyFeedSearch({
      q: request.q,
      sort: request.sort,
      since: request.since,
      until: request.until,
      mentions: request.mentions,
      author: request.author,
      lang: request.lang,
      domain: request.domain,
      url: request.url,
      tag: request.tag,
      limit: request.limit,
      cursor: request.cursor,
    }),
    queryFn: async function feedSearchQuery(
      ctx,
    ): Promise<FeedSearchInfiniteQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      if (!ctx.pageParam) {
        return unwrapResultIterator(feedSearch(
          client$,
          request,
          mergedOptions,
        ));
      }

      return unwrapResultIterator(feedSearch(
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

export function queryKeyFeedSearch(
  parameters: {
    q: string;
    sort?: operations.AppBskyFeedSearchPostsSort | undefined;
    since?: string | undefined;
    until?: string | undefined;
    mentions?: string | undefined;
    author?: string | undefined;
    lang?: string | undefined;
    domain?: string | undefined;
    url?: string | undefined;
    tag?: Array<string> | undefined;
    limit?: number | undefined;
    cursor?: string | undefined;
  },
): QueryKey {
  return ["@speakeasy-api/bluesky", "feed", "search", parameters];
}
