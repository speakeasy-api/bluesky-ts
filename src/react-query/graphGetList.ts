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
import { graphGetList } from "../funcs/graphGetList.js";
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

export type GraphGetListQueryData = operations.AppBskyGraphGetListResponse;

export type GraphGetListInfiniteQueryData = PageIterator<
  operations.AppBskyGraphGetListResponse,
  { cursor: string }
>;

export type GraphGetListPageParams = PageIterator<
  operations.AppBskyGraphGetListResponse,
  { cursor: string }
>["~next"];

/**
 * *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Gets a 'view' (with additional context) of a specified list.
 */
export function useGraphGetList(
  request: operations.AppBskyGraphGetListRequest,
  options?: QueryHookOptions<GraphGetListQueryData>,
): UseQueryResult<GraphGetListQueryData, Error> {
  const client = useBlueskyContext();
  return useQuery({
    ...buildGraphGetListQuery(
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
 * Gets a 'view' (with additional context) of a specified list.
 */
export function useGraphGetListSuspense(
  request: operations.AppBskyGraphGetListRequest,
  options?: SuspenseQueryHookOptions<GraphGetListQueryData>,
): UseSuspenseQueryResult<GraphGetListQueryData, Error> {
  const client = useBlueskyContext();
  return useSuspenseQuery({
    ...buildGraphGetListQuery(
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
 * Gets a 'view' (with additional context) of a specified list.
 */
export function useGraphGetListInfinite(
  request: operations.AppBskyGraphGetListRequest,
  options?: InfiniteQueryHookOptions<GraphGetListInfiniteQueryData>,
): UseInfiniteQueryResult<
  InfiniteData<GraphGetListInfiniteQueryData, GraphGetListPageParams>,
  Error
> {
  const client = useBlueskyContext();
  return useInfiniteQuery<
    GraphGetListInfiniteQueryData,
    Error,
    InfiniteData<GraphGetListInfiniteQueryData, GraphGetListPageParams>,
    QueryKey,
    GraphGetListPageParams
  >({
    ...buildGraphGetListInfiniteQuery(
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
 * Gets a 'view' (with additional context) of a specified list.
 */
export function useGraphGetListInfiniteSuspense(
  request: operations.AppBskyGraphGetListRequest,
  options?: SuspenseInfiniteQueryHookOptions<GraphGetListInfiniteQueryData>,
): UseSuspenseInfiniteQueryResult<
  InfiniteData<GraphGetListInfiniteQueryData, GraphGetListPageParams>,
  Error
> {
  const client = useBlueskyContext();
  return useSuspenseInfiniteQuery<
    GraphGetListInfiniteQueryData,
    Error,
    InfiniteData<GraphGetListInfiniteQueryData, GraphGetListPageParams>,
    QueryKey,
    GraphGetListPageParams
  >({
    ...buildGraphGetListInfiniteQuery(
      client,
      request,
      options,
    ),
    initialPageParam: options?.initialPageParam,
    getNextPageParam: (previousPage) => previousPage["~next"],
    ...options,
  });
}

export function prefetchGraphGetList(
  queryClient: QueryClient,
  client$: BlueskyCore,
  request: operations.AppBskyGraphGetListRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildGraphGetListQuery(
      client$,
      request,
    ),
  });
}

export function setGraphGetListData(
  client: QueryClient,
  queryKeyBase: [
    parameters: {
      list: string;
      limit?: number | undefined;
      cursor?: string | undefined;
    },
  ],
  data: GraphGetListQueryData,
): GraphGetListQueryData | undefined {
  const key = queryKeyGraphGetList(...queryKeyBase);

  return client.setQueryData<GraphGetListQueryData>(key, data);
}

export function invalidateGraphGetList(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<
    [parameters: {
      list: string;
      limit?: number | undefined;
      cursor?: string | undefined;
    }]
  >,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@speakeasy-sdks/bluesky", "graph", "getList", ...queryKeyBase],
  });
}

export function invalidateAllGraphGetList(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@speakeasy-sdks/bluesky", "graph", "getList"],
  });
}

export function buildGraphGetListQuery(
  client$: BlueskyCore,
  request: operations.AppBskyGraphGetListRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (context: QueryFunctionContext) => Promise<GraphGetListQueryData>;
} {
  return {
    queryKey: queryKeyGraphGetList({
      list: request.list,
      limit: request.limit,
      cursor: request.cursor,
    }),
    queryFn: async function graphGetListQueryFn(
      ctx,
    ): Promise<GraphGetListQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(graphGetList(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function buildGraphGetListInfiniteQuery(
  client$: BlueskyCore,
  request: operations.AppBskyGraphGetListRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext<QueryKey, GraphGetListPageParams>,
  ) => Promise<GraphGetListInfiniteQueryData>;
} {
  return {
    queryKey: queryKeyGraphGetList({
      list: request.list,
      limit: request.limit,
      cursor: request.cursor,
    }),
    queryFn: async function graphGetListQuery(
      ctx,
    ): Promise<GraphGetListInfiniteQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      if (!ctx.pageParam) {
        return unwrapResultIterator(graphGetList(
          client$,
          request,
          mergedOptions,
        ));
      }

      return unwrapResultIterator(graphGetList(
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

export function queryKeyGraphGetList(
  parameters: {
    list: string;
    limit?: number | undefined;
    cursor?: string | undefined;
  },
): QueryKey {
  return ["@speakeasy-sdks/bluesky", "graph", "getList", parameters];
}
