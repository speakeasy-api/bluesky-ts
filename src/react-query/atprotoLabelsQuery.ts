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
import { atprotoLabelsQuery } from "../funcs/atprotoLabelsQuery.js";
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

export type AtprotoLabelsQueryQueryData =
  operations.ComAtprotoLabelQueryLabelsResponse;

export type AtprotoLabelsQueryInfiniteQueryData = PageIterator<
  operations.ComAtprotoLabelQueryLabelsResponse,
  { cursor: string }
>;

export type AtprotoLabelsQueryPageParams = PageIterator<
  operations.ComAtprotoLabelQueryLabelsResponse,
  { cursor: string }
>["~next"];

/**
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Find labels relevant to the provided AT-URI patterns. Public endpoint for moderation services, though may return different or additional results with auth.
 */
export function useAtprotoLabelsQuery(
  request: operations.ComAtprotoLabelQueryLabelsRequest,
  options?: QueryHookOptions<AtprotoLabelsQueryQueryData>,
): UseQueryResult<AtprotoLabelsQueryQueryData, Error> {
  const client = useBlueskyContext();
  return useQuery({
    ...buildAtprotoLabelsQueryQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

/**
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Find labels relevant to the provided AT-URI patterns. Public endpoint for moderation services, though may return different or additional results with auth.
 */
export function useAtprotoLabelsQuerySuspense(
  request: operations.ComAtprotoLabelQueryLabelsRequest,
  options?: SuspenseQueryHookOptions<AtprotoLabelsQueryQueryData>,
): UseSuspenseQueryResult<AtprotoLabelsQueryQueryData, Error> {
  const client = useBlueskyContext();
  return useSuspenseQuery({
    ...buildAtprotoLabelsQueryQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

/**
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Find labels relevant to the provided AT-URI patterns. Public endpoint for moderation services, though may return different or additional results with auth.
 */
export function useAtprotoLabelsQueryInfinite(
  request: operations.ComAtprotoLabelQueryLabelsRequest,
  options?: InfiniteQueryHookOptions<AtprotoLabelsQueryInfiniteQueryData>,
): UseInfiniteQueryResult<
  InfiniteData<
    AtprotoLabelsQueryInfiniteQueryData,
    AtprotoLabelsQueryPageParams
  >,
  Error
> {
  const client = useBlueskyContext();
  return useInfiniteQuery<
    AtprotoLabelsQueryInfiniteQueryData,
    Error,
    InfiniteData<
      AtprotoLabelsQueryInfiniteQueryData,
      AtprotoLabelsQueryPageParams
    >,
    QueryKey,
    AtprotoLabelsQueryPageParams
  >({
    ...buildAtprotoLabelsQueryInfiniteQuery(
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
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Find labels relevant to the provided AT-URI patterns. Public endpoint for moderation services, though may return different or additional results with auth.
 */
export function useAtprotoLabelsQueryInfiniteSuspense(
  request: operations.ComAtprotoLabelQueryLabelsRequest,
  options?: SuspenseInfiniteQueryHookOptions<
    AtprotoLabelsQueryInfiniteQueryData
  >,
): UseSuspenseInfiniteQueryResult<
  InfiniteData<
    AtprotoLabelsQueryInfiniteQueryData,
    AtprotoLabelsQueryPageParams
  >,
  Error
> {
  const client = useBlueskyContext();
  return useSuspenseInfiniteQuery<
    AtprotoLabelsQueryInfiniteQueryData,
    Error,
    InfiniteData<
      AtprotoLabelsQueryInfiniteQueryData,
      AtprotoLabelsQueryPageParams
    >,
    QueryKey,
    AtprotoLabelsQueryPageParams
  >({
    ...buildAtprotoLabelsQueryInfiniteQuery(
      client,
      request,
      options,
    ),
    initialPageParam: options?.initialPageParam,
    getNextPageParam: (previousPage) => previousPage["~next"],
    ...options,
  });
}

export function prefetchAtprotoLabelsQuery(
  queryClient: QueryClient,
  client$: BlueskyCore,
  request: operations.ComAtprotoLabelQueryLabelsRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildAtprotoLabelsQueryQuery(
      client$,
      request,
    ),
  });
}

export function setAtprotoLabelsQueryData(
  client: QueryClient,
  queryKeyBase: [
    parameters: {
      uriPatterns: Array<string>;
      sources?: Array<string> | undefined;
      limit?: number | undefined;
      cursor?: string | undefined;
    },
  ],
  data: AtprotoLabelsQueryQueryData,
): AtprotoLabelsQueryQueryData | undefined {
  const key = queryKeyAtprotoLabelsQuery(...queryKeyBase);

  return client.setQueryData<AtprotoLabelsQueryQueryData>(key, data);
}

export function invalidateAtprotoLabelsQuery(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<
    [parameters: {
      uriPatterns: Array<string>;
      sources?: Array<string> | undefined;
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
      "atprotoLabels",
      "query",
      ...queryKeyBase,
    ],
  });
}

export function invalidateAllAtprotoLabelsQuery(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@speakeasy-sdks/bluesky", "atprotoLabels", "query"],
  });
}

export function buildAtprotoLabelsQueryQuery(
  client$: BlueskyCore,
  request: operations.ComAtprotoLabelQueryLabelsRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<AtprotoLabelsQueryQueryData>;
} {
  return {
    queryKey: queryKeyAtprotoLabelsQuery({
      uriPatterns: request.uriPatterns,
      sources: request.sources,
      limit: request.limit,
      cursor: request.cursor,
    }),
    queryFn: async function atprotoLabelsQueryQueryFn(
      ctx,
    ): Promise<AtprotoLabelsQueryQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(atprotoLabelsQuery(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function buildAtprotoLabelsQueryInfiniteQuery(
  client$: BlueskyCore,
  request: operations.ComAtprotoLabelQueryLabelsRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext<QueryKey, AtprotoLabelsQueryPageParams>,
  ) => Promise<AtprotoLabelsQueryInfiniteQueryData>;
} {
  return {
    queryKey: queryKeyAtprotoLabelsQuery({
      uriPatterns: request.uriPatterns,
      sources: request.sources,
      limit: request.limit,
      cursor: request.cursor,
    }),
    queryFn: async function atprotoLabelsQueryQuery(
      ctx,
    ): Promise<AtprotoLabelsQueryInfiniteQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      if (!ctx.pageParam) {
        return unwrapResultIterator(atprotoLabelsQuery(
          client$,
          request,
          mergedOptions,
        ));
      }

      return unwrapResultIterator(atprotoLabelsQuery(
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

export function queryKeyAtprotoLabelsQuery(
  parameters: {
    uriPatterns: Array<string>;
    sources?: Array<string> | undefined;
    limit?: number | undefined;
    cursor?: string | undefined;
  },
): QueryKey {
  return ["@speakeasy-sdks/bluesky", "atprotoLabels", "query", parameters];
}
