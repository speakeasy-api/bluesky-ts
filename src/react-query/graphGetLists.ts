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
import { graphGetLists } from "../funcs/graphGetLists.js";
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

export type GraphGetListsQueryData = operations.AppBskyGraphGetListsResponse;

export type GraphGetListsInfiniteQueryData = PageIterator<
  operations.AppBskyGraphGetListsResponse,
  { cursor: string }
>;

export type GraphGetListsPageParams = PageIterator<
  operations.AppBskyGraphGetListsResponse,
  { cursor: string }
>["~next"];

/**
 * *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Enumerates the lists created by a specified account (actor).
 */
export function useGraphGetLists(
  request: operations.AppBskyGraphGetListsRequest,
  options?: QueryHookOptions<GraphGetListsQueryData>,
): UseQueryResult<GraphGetListsQueryData, Error> {
  const client = useBlueskyContext();
  return useQuery({
    ...buildGraphGetListsQuery(
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
 * Enumerates the lists created by a specified account (actor).
 */
export function useGraphGetListsSuspense(
  request: operations.AppBskyGraphGetListsRequest,
  options?: SuspenseQueryHookOptions<GraphGetListsQueryData>,
): UseSuspenseQueryResult<GraphGetListsQueryData, Error> {
  const client = useBlueskyContext();
  return useSuspenseQuery({
    ...buildGraphGetListsQuery(
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
 * Enumerates the lists created by a specified account (actor).
 */
export function useGraphGetListsInfinite(
  request: operations.AppBskyGraphGetListsRequest,
  options?: InfiniteQueryHookOptions<GraphGetListsInfiniteQueryData>,
): UseInfiniteQueryResult<
  InfiniteData<GraphGetListsInfiniteQueryData, GraphGetListsPageParams>,
  Error
> {
  const client = useBlueskyContext();
  return useInfiniteQuery<
    GraphGetListsInfiniteQueryData,
    Error,
    InfiniteData<GraphGetListsInfiniteQueryData, GraphGetListsPageParams>,
    QueryKey,
    GraphGetListsPageParams
  >({
    ...buildGraphGetListsInfiniteQuery(
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
 * Enumerates the lists created by a specified account (actor).
 */
export function useGraphGetListsInfiniteSuspense(
  request: operations.AppBskyGraphGetListsRequest,
  options?: SuspenseInfiniteQueryHookOptions<GraphGetListsInfiniteQueryData>,
): UseSuspenseInfiniteQueryResult<
  InfiniteData<GraphGetListsInfiniteQueryData, GraphGetListsPageParams>,
  Error
> {
  const client = useBlueskyContext();
  return useSuspenseInfiniteQuery<
    GraphGetListsInfiniteQueryData,
    Error,
    InfiniteData<GraphGetListsInfiniteQueryData, GraphGetListsPageParams>,
    QueryKey,
    GraphGetListsPageParams
  >({
    ...buildGraphGetListsInfiniteQuery(
      client,
      request,
      options,
    ),
    initialPageParam: options?.initialPageParam,
    getNextPageParam: (previousPage) => previousPage["~next"],
    ...options,
  });
}

export function prefetchGraphGetLists(
  queryClient: QueryClient,
  client$: BlueskyCore,
  request: operations.AppBskyGraphGetListsRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildGraphGetListsQuery(
      client$,
      request,
    ),
  });
}

export function setGraphGetListsData(
  client: QueryClient,
  queryKeyBase: [
    parameters: {
      actor: string;
      limit?: number | undefined;
      cursor?: string | undefined;
    },
  ],
  data: GraphGetListsQueryData,
): GraphGetListsQueryData | undefined {
  const key = queryKeyGraphGetLists(...queryKeyBase);

  return client.setQueryData<GraphGetListsQueryData>(key, data);
}

export function invalidateGraphGetLists(
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
    queryKey: ["@speakeasy-sdks/bluesky", "graph", "getLists", ...queryKeyBase],
  });
}

export function invalidateAllGraphGetLists(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@speakeasy-sdks/bluesky", "graph", "getLists"],
  });
}

export function buildGraphGetListsQuery(
  client$: BlueskyCore,
  request: operations.AppBskyGraphGetListsRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (context: QueryFunctionContext) => Promise<GraphGetListsQueryData>;
} {
  return {
    queryKey: queryKeyGraphGetLists({
      actor: request.actor,
      limit: request.limit,
      cursor: request.cursor,
    }),
    queryFn: async function graphGetListsQueryFn(
      ctx,
    ): Promise<GraphGetListsQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(graphGetLists(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function buildGraphGetListsInfiniteQuery(
  client$: BlueskyCore,
  request: operations.AppBskyGraphGetListsRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext<QueryKey, GraphGetListsPageParams>,
  ) => Promise<GraphGetListsInfiniteQueryData>;
} {
  return {
    queryKey: queryKeyGraphGetLists({
      actor: request.actor,
      limit: request.limit,
      cursor: request.cursor,
    }),
    queryFn: async function graphGetListsQuery(
      ctx,
    ): Promise<GraphGetListsInfiniteQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      if (!ctx.pageParam) {
        return unwrapResultIterator(graphGetLists(
          client$,
          request,
          mergedOptions,
        ));
      }

      return unwrapResultIterator(graphGetLists(
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

export function queryKeyGraphGetLists(
  parameters: {
    actor: string;
    limit?: number | undefined;
    cursor?: string | undefined;
  },
): QueryKey {
  return ["@speakeasy-sdks/bluesky", "graph", "getLists", parameters];
}
