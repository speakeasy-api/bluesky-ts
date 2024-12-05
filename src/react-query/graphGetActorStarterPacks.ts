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
import { graphGetActorStarterPacks } from "../funcs/graphGetActorStarterPacks.js";
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

export type GraphGetActorStarterPacksQueryData =
  operations.AppBskyGraphGetActorStarterPacksResponse;

export type GraphGetActorStarterPacksInfiniteQueryData = PageIterator<
  operations.AppBskyGraphGetActorStarterPacksResponse,
  { cursor: string }
>;

export type GraphGetActorStarterPacksPageParams = PageIterator<
  operations.AppBskyGraphGetActorStarterPacksResponse,
  { cursor: string }
>["~next"];

/**
 * *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Get a list of starter packs created by the actor.
 */
export function useGraphGetActorStarterPacks(
  request: operations.AppBskyGraphGetActorStarterPacksRequest,
  options?: QueryHookOptions<GraphGetActorStarterPacksQueryData>,
): UseQueryResult<GraphGetActorStarterPacksQueryData, Error> {
  const client = useBlueskyContext();
  return useQuery({
    ...buildGraphGetActorStarterPacksQuery(
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
 * Get a list of starter packs created by the actor.
 */
export function useGraphGetActorStarterPacksSuspense(
  request: operations.AppBskyGraphGetActorStarterPacksRequest,
  options?: SuspenseQueryHookOptions<GraphGetActorStarterPacksQueryData>,
): UseSuspenseQueryResult<GraphGetActorStarterPacksQueryData, Error> {
  const client = useBlueskyContext();
  return useSuspenseQuery({
    ...buildGraphGetActorStarterPacksQuery(
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
 * Get a list of starter packs created by the actor.
 */
export function useGraphGetActorStarterPacksInfinite(
  request: operations.AppBskyGraphGetActorStarterPacksRequest,
  options?: InfiniteQueryHookOptions<
    GraphGetActorStarterPacksInfiniteQueryData
  >,
): UseInfiniteQueryResult<
  InfiniteData<
    GraphGetActorStarterPacksInfiniteQueryData,
    GraphGetActorStarterPacksPageParams
  >,
  Error
> {
  const client = useBlueskyContext();
  return useInfiniteQuery<
    GraphGetActorStarterPacksInfiniteQueryData,
    Error,
    InfiniteData<
      GraphGetActorStarterPacksInfiniteQueryData,
      GraphGetActorStarterPacksPageParams
    >,
    QueryKey,
    GraphGetActorStarterPacksPageParams
  >({
    ...buildGraphGetActorStarterPacksInfiniteQuery(
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
 * Get a list of starter packs created by the actor.
 */
export function useGraphGetActorStarterPacksInfiniteSuspense(
  request: operations.AppBskyGraphGetActorStarterPacksRequest,
  options?: SuspenseInfiniteQueryHookOptions<
    GraphGetActorStarterPacksInfiniteQueryData
  >,
): UseSuspenseInfiniteQueryResult<
  InfiniteData<
    GraphGetActorStarterPacksInfiniteQueryData,
    GraphGetActorStarterPacksPageParams
  >,
  Error
> {
  const client = useBlueskyContext();
  return useSuspenseInfiniteQuery<
    GraphGetActorStarterPacksInfiniteQueryData,
    Error,
    InfiniteData<
      GraphGetActorStarterPacksInfiniteQueryData,
      GraphGetActorStarterPacksPageParams
    >,
    QueryKey,
    GraphGetActorStarterPacksPageParams
  >({
    ...buildGraphGetActorStarterPacksInfiniteQuery(
      client,
      request,
      options,
    ),
    initialPageParam: options?.initialPageParam,
    getNextPageParam: (previousPage) => previousPage["~next"],
    ...options,
  });
}

export function prefetchGraphGetActorStarterPacks(
  queryClient: QueryClient,
  client$: BlueskyCore,
  request: operations.AppBskyGraphGetActorStarterPacksRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildGraphGetActorStarterPacksQuery(
      client$,
      request,
    ),
  });
}

export function setGraphGetActorStarterPacksData(
  client: QueryClient,
  queryKeyBase: [
    parameters: {
      actor: string;
      limit?: number | undefined;
      cursor?: string | undefined;
    },
  ],
  data: GraphGetActorStarterPacksQueryData,
): GraphGetActorStarterPacksQueryData | undefined {
  const key = queryKeyGraphGetActorStarterPacks(...queryKeyBase);

  return client.setQueryData<GraphGetActorStarterPacksQueryData>(key, data);
}

export function invalidateGraphGetActorStarterPacks(
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
    queryKey: ["bluesky", "graph", "getActorStarterPacks", ...queryKeyBase],
  });
}

export function invalidateAllGraphGetActorStarterPacks(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["bluesky", "graph", "getActorStarterPacks"],
  });
}

export function buildGraphGetActorStarterPacksQuery(
  client$: BlueskyCore,
  request: operations.AppBskyGraphGetActorStarterPacksRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<GraphGetActorStarterPacksQueryData>;
} {
  return {
    queryKey: queryKeyGraphGetActorStarterPacks({
      actor: request.actor,
      limit: request.limit,
      cursor: request.cursor,
    }),
    queryFn: async function graphGetActorStarterPacksQueryFn(
      ctx,
    ): Promise<GraphGetActorStarterPacksQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(graphGetActorStarterPacks(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function buildGraphGetActorStarterPacksInfiniteQuery(
  client$: BlueskyCore,
  request: operations.AppBskyGraphGetActorStarterPacksRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext<
      QueryKey,
      GraphGetActorStarterPacksPageParams
    >,
  ) => Promise<GraphGetActorStarterPacksInfiniteQueryData>;
} {
  return {
    queryKey: queryKeyGraphGetActorStarterPacks({
      actor: request.actor,
      limit: request.limit,
      cursor: request.cursor,
    }),
    queryFn: async function graphGetActorStarterPacksQuery(
      ctx,
    ): Promise<GraphGetActorStarterPacksInfiniteQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      if (!ctx.pageParam) {
        return unwrapResultIterator(graphGetActorStarterPacks(
          client$,
          request,
          mergedOptions,
        ));
      }

      return unwrapResultIterator(graphGetActorStarterPacks(
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

export function queryKeyGraphGetActorStarterPacks(
  parameters: {
    actor: string;
    limit?: number | undefined;
    cursor?: string | undefined;
  },
): QueryKey {
  return ["bluesky", "graph", "getActorStarterPacks", parameters];
}
