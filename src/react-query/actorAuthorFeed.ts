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
import { feedGetAuthor } from "../funcs/feedGetAuthor.js";
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

export type ActorAuthorFeedQueryData =
  operations.AppBskyFeedGetAuthorFeedResponse;

export type ActorAuthorFeedInfiniteQueryData = PageIterator<
  operations.AppBskyFeedGetAuthorFeedResponse,
  { cursor: string }
>;

export type ActorAuthorFeedPageParams = PageIterator<
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
export function useActorAuthorFeed(
  request: operations.AppBskyFeedGetAuthorFeedRequest,
  options?: QueryHookOptions<ActorAuthorFeedQueryData>,
): UseQueryResult<ActorAuthorFeedQueryData, Error> {
  const client = useBlueskyContext();
  return useQuery({
    ...buildActorAuthorFeedQuery(
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
 * Get a view of an actor's 'author feed' (post and reposts by the author). Does not require auth.
 */
export function useActorAuthorFeedSuspense(
  request: operations.AppBskyFeedGetAuthorFeedRequest,
  options?: SuspenseQueryHookOptions<ActorAuthorFeedQueryData>,
): UseSuspenseQueryResult<ActorAuthorFeedQueryData, Error> {
  const client = useBlueskyContext();
  return useSuspenseQuery({
    ...buildActorAuthorFeedQuery(
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
 * Get a view of an actor's 'author feed' (post and reposts by the author). Does not require auth.
 */
export function useActorAuthorFeedInfinite(
  request: operations.AppBskyFeedGetAuthorFeedRequest,
  options?: InfiniteQueryHookOptions<ActorAuthorFeedInfiniteQueryData>,
): UseInfiniteQueryResult<
  InfiniteData<ActorAuthorFeedInfiniteQueryData, ActorAuthorFeedPageParams>,
  Error
> {
  const client = useBlueskyContext();
  return useInfiniteQuery<
    ActorAuthorFeedInfiniteQueryData,
    Error,
    InfiniteData<ActorAuthorFeedInfiniteQueryData, ActorAuthorFeedPageParams>,
    QueryKey,
    ActorAuthorFeedPageParams
  >({
    ...buildActorAuthorFeedInfiniteQuery(
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
 * Get a view of an actor's 'author feed' (post and reposts by the author). Does not require auth.
 */
export function useActorAuthorFeedInfiniteSuspense(
  request: operations.AppBskyFeedGetAuthorFeedRequest,
  options?: SuspenseInfiniteQueryHookOptions<ActorAuthorFeedInfiniteQueryData>,
): UseSuspenseInfiniteQueryResult<
  InfiniteData<ActorAuthorFeedInfiniteQueryData, ActorAuthorFeedPageParams>,
  Error
> {
  const client = useBlueskyContext();
  return useSuspenseInfiniteQuery<
    ActorAuthorFeedInfiniteQueryData,
    Error,
    InfiniteData<ActorAuthorFeedInfiniteQueryData, ActorAuthorFeedPageParams>,
    QueryKey,
    ActorAuthorFeedPageParams
  >({
    ...buildActorAuthorFeedInfiniteQuery(
      client,
      request,
      options,
    ),
    initialPageParam: options?.initialPageParam,
    getNextPageParam: (previousPage) => previousPage["~next"],
    ...options,
  });
}

export function prefetchActorAuthorFeed(
  queryClient: QueryClient,
  client$: BlueskyCore,
  request: operations.AppBskyFeedGetAuthorFeedRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildActorAuthorFeedQuery(
      client$,
      request,
    ),
  });
}

export function setActorAuthorFeedData(
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
  data: ActorAuthorFeedQueryData,
): ActorAuthorFeedQueryData | undefined {
  const key = queryKeyActorAuthorFeed(...queryKeyBase);

  return client.setQueryData<ActorAuthorFeedQueryData>(key, data);
}

export function invalidateActorAuthorFeed(
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
    queryKey: ["@speakeasy-api/bluesky", "feed", "getAuthor", ...queryKeyBase],
  });
}

export function invalidateAllActorAuthorFeed(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@speakeasy-api/bluesky", "feed", "getAuthor"],
  });
}

export function buildActorAuthorFeedQuery(
  client$: BlueskyCore,
  request: operations.AppBskyFeedGetAuthorFeedRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (context: QueryFunctionContext) => Promise<ActorAuthorFeedQueryData>;
} {
  return {
    queryKey: queryKeyActorAuthorFeed({
      actor: request.actor,
      limit: request.limit,
      cursor: request.cursor,
      filter: request.filter,
      includePins: request.includePins,
    }),
    queryFn: async function actorAuthorFeedQueryFn(
      ctx,
    ): Promise<ActorAuthorFeedQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(feedGetAuthor(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function buildActorAuthorFeedInfiniteQuery(
  client$: BlueskyCore,
  request: operations.AppBskyFeedGetAuthorFeedRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext<QueryKey, ActorAuthorFeedPageParams>,
  ) => Promise<ActorAuthorFeedInfiniteQueryData>;
} {
  return {
    queryKey: queryKeyActorAuthorFeed({
      actor: request.actor,
      limit: request.limit,
      cursor: request.cursor,
      filter: request.filter,
      includePins: request.includePins,
    }),
    queryFn: async function actorAuthorFeedQuery(
      ctx,
    ): Promise<ActorAuthorFeedInfiniteQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      if (!ctx.pageParam) {
        return unwrapResultIterator(feedGetAuthor(
          client$,
          request,
          mergedOptions,
        ));
      }

      return unwrapResultIterator(feedGetAuthor(
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

export function queryKeyActorAuthorFeed(
  parameters: {
    actor: string;
    limit?: number | undefined;
    cursor?: string | undefined;
    filter?: operations.Filter | undefined;
    includePins?: boolean | undefined;
  },
): QueryKey {
  return ["@speakeasy-api/bluesky", "feed", "getAuthor", parameters];
}
