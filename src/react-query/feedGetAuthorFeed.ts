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
import { feedGetAuthorFeed } from "../funcs/feedGetAuthorFeed.js";
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

export type FeedGetAuthorFeedQueryData = PageIterator<
  operations.AppBskyFeedGetAuthorFeedResponse,
  { cursor: string }
>;
export type FeedGetAuthorFeedPageParams = PageIterator<
  operations.AppBskyFeedGetAuthorFeedResponse,
  { cursor: string }
>["~next"];

/**
 * *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Get a view of an actor's 'author feed' (post and reposts by the author). Does not require auth.
 */
export function useFeedGetAuthorFeed(
  request: operations.AppBskyFeedGetAuthorFeedRequest,
  options?: QueryHookOptions<operations.AppBskyFeedGetAuthorFeedResponse>,
): UseQueryResult<operations.AppBskyFeedGetAuthorFeedResponse, Error> {
  const client = useBlueskyContext();
  return useQuery({
    ...buildFeedGetAuthorFeedQuery(
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
 * Get a view of an actor's 'author feed' (post and reposts by the author). Does not require auth.
 */
export function useFeedGetAuthorFeedSuspense(
  request: operations.AppBskyFeedGetAuthorFeedRequest,
  options?: SuspenseQueryHookOptions<
    operations.AppBskyFeedGetAuthorFeedResponse
  >,
): UseSuspenseQueryResult<operations.AppBskyFeedGetAuthorFeedResponse, Error> {
  const client = useBlueskyContext();
  return useSuspenseQuery({
    ...buildFeedGetAuthorFeedQuery(
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
 * Get a view of an actor's 'author feed' (post and reposts by the author). Does not require auth.
 */
export function useFeedGetAuthorFeedInfinite(
  request: operations.AppBskyFeedGetAuthorFeedRequest,
  options?: InfiniteQueryHookOptions<
    PageIterator<
      operations.AppBskyFeedGetAuthorFeedResponse,
      { cursor: string }
    >
  >,
): UseInfiniteQueryResult<
  InfiniteData<FeedGetAuthorFeedQueryData, FeedGetAuthorFeedPageParams>,
  Error
> {
  const client = useBlueskyContext();
  return useInfiniteQuery<
    FeedGetAuthorFeedQueryData,
    Error,
    InfiniteData<FeedGetAuthorFeedQueryData, FeedGetAuthorFeedPageParams>,
    QueryKey,
    FeedGetAuthorFeedPageParams
  >({
    ...buildFeedGetAuthorFeedInfiniteQuery(
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
 * Get a view of an actor's 'author feed' (post and reposts by the author). Does not require auth.
 */
export function useFeedGetAuthorFeedInfiniteSuspense(
  request: operations.AppBskyFeedGetAuthorFeedRequest,
  options?: SuspenseInfiniteQueryHookOptions<
    PageIterator<
      operations.AppBskyFeedGetAuthorFeedResponse,
      { cursor: string }
    >
  >,
): UseSuspenseInfiniteQueryResult<
  InfiniteData<FeedGetAuthorFeedQueryData, FeedGetAuthorFeedPageParams>,
  Error
> {
  const client = useBlueskyContext();
  return useSuspenseInfiniteQuery<
    FeedGetAuthorFeedQueryData,
    Error,
    InfiniteData<FeedGetAuthorFeedQueryData, FeedGetAuthorFeedPageParams>,
    QueryKey,
    FeedGetAuthorFeedPageParams
  >({
    ...buildFeedGetAuthorFeedInfiniteQuery(
      client,
      request,
      options?.request,
    ),
    initialPageParam: options?.initialPageParam,
    getNextPageParam: (previousPage) => previousPage["~next"],
    ...options,
  });
}

export function prefetchFeedGetAuthorFeed(
  queryClient: QueryClient,
  client$: BlueskyCore,
  request: operations.AppBskyFeedGetAuthorFeedRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildFeedGetAuthorFeedQuery(
      client$,
      request,
    ),
  });
}

export function setFeedGetAuthorFeedData(
  client: QueryClient,
  queryKeyBase: [
    parameters: {
      actor: string;
      limit?: number | undefined;
      cursor?: string | undefined;
      filter?: operations.Filter | undefined;
      includePins?: boolean | undefined;
    },
  ],
  data: operations.AppBskyFeedGetAuthorFeedResponse,
): operations.AppBskyFeedGetAuthorFeedResponse | undefined {
  const key = queryKeyFeedGetAuthorFeed(...queryKeyBase);

  return client.setQueryData<operations.AppBskyFeedGetAuthorFeedResponse>(
    key,
    data,
  );
}

export function invalidateFeedGetAuthorFeed(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<
    [parameters: {
      actor: string;
      limit?: number | undefined;
      cursor?: string | undefined;
      filter?: operations.Filter | undefined;
      includePins?: boolean | undefined;
    }]
  >,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["bluesky", "feed", "getAuthorFeed", ...queryKeyBase],
  });
}

export function invalidateAllFeedGetAuthorFeed(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["bluesky", "feed", "getAuthorFeed"],
  });
}

export function buildFeedGetAuthorFeedQuery(
  client$: BlueskyCore,
  request: operations.AppBskyFeedGetAuthorFeedRequest,
  options?: RequestOptions,
): {
  retry: boolean;
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<operations.AppBskyFeedGetAuthorFeedResponse>;
} {
  return {
    retry: false,
    queryKey: queryKeyFeedGetAuthorFeed({
      actor: request.actor,
      limit: request.limit,
      cursor: request.cursor,
      filter: request.filter,
      includePins: request.includePins,
    }),
    queryFn: async function feedGetAuthorFeedQuery(
      ctx,
    ): Promise<operations.AppBskyFeedGetAuthorFeedResponse> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(feedGetAuthorFeed(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function buildFeedGetAuthorFeedInfiniteQuery(
  client$: BlueskyCore,
  request: operations.AppBskyFeedGetAuthorFeedRequest,
  options?: RequestOptions,
): {
  retry: boolean;
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext<QueryKey, FeedGetAuthorFeedPageParams>,
  ) => Promise<
    PageIterator<
      operations.AppBskyFeedGetAuthorFeedResponse,
      { cursor: string }
    >
  >;
} {
  return {
    retry: false,
    queryKey: queryKeyFeedGetAuthorFeed({
      actor: request.actor,
      limit: request.limit,
      cursor: request.cursor,
      filter: request.filter,
      includePins: request.includePins,
    }),
    queryFn: async function feedGetAuthorFeedQuery(
      ctx,
    ): Promise<
      PageIterator<
        operations.AppBskyFeedGetAuthorFeedResponse,
        { cursor: string }
      >
    > {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      if (!ctx.pageParam) {
        return unwrapResultIterator(feedGetAuthorFeed(
          client$,
          request,
          mergedOptions,
        ));
      }

      return unwrapResultIterator(feedGetAuthorFeed(
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

export function queryKeyFeedGetAuthorFeed(
  parameters: {
    actor: string;
    limit?: number | undefined;
    cursor?: string | undefined;
    filter?: operations.Filter | undefined;
    includePins?: boolean | undefined;
  },
): QueryKey {
  return ["bluesky", "feed", "getAuthorFeed", parameters];
}
