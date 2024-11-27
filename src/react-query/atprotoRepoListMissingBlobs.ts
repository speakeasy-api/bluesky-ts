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
import { atprotoRepoListMissingBlobs } from "../funcs/atprotoRepoListMissingBlobs.js";
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

export type AtprotoRepoListMissingBlobsQueryData = PageIterator<
  operations.ComAtprotoRepoListMissingBlobsResponse,
  { cursor: string }
>;
export type AtprotoRepoListMissingBlobsPageParams = PageIterator<
  operations.ComAtprotoRepoListMissingBlobsResponse,
  { cursor: string }
>["~next"];

/**
 * *This endpoint is part of the atproto PDS repository management APIs. Requests usually require authentication (unlike the `com.atproto.sync.*` endpoints), and are made directly to the user's own PDS instance.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Returns a list of missing blobs for the requesting account. Intended to be used in the account migration flow.
 */
export function useAtprotoRepoListMissingBlobs(
  request?: operations.ComAtprotoRepoListMissingBlobsRequest | undefined,
  options?: QueryHookOptions<operations.ComAtprotoRepoListMissingBlobsResponse>,
): UseQueryResult<operations.ComAtprotoRepoListMissingBlobsResponse, Error> {
  const client = useBlueskyContext();
  return useQuery({
    ...buildAtprotoRepoListMissingBlobsQuery(
      client,
      request,
      options?.request,
    ),
    ...options,
  });
}

/**
 * *This endpoint is part of the atproto PDS repository management APIs. Requests usually require authentication (unlike the `com.atproto.sync.*` endpoints), and are made directly to the user's own PDS instance.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Returns a list of missing blobs for the requesting account. Intended to be used in the account migration flow.
 */
export function useAtprotoRepoListMissingBlobsSuspense(
  request?: operations.ComAtprotoRepoListMissingBlobsRequest | undefined,
  options?: SuspenseQueryHookOptions<
    operations.ComAtprotoRepoListMissingBlobsResponse
  >,
): UseSuspenseQueryResult<
  operations.ComAtprotoRepoListMissingBlobsResponse,
  Error
> {
  const client = useBlueskyContext();
  return useSuspenseQuery({
    ...buildAtprotoRepoListMissingBlobsQuery(
      client,
      request,
      options?.request,
    ),
    ...options,
  });
}

/**
 * *This endpoint is part of the atproto PDS repository management APIs. Requests usually require authentication (unlike the `com.atproto.sync.*` endpoints), and are made directly to the user's own PDS instance.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Returns a list of missing blobs for the requesting account. Intended to be used in the account migration flow.
 */
export function useAtprotoRepoListMissingBlobsInfinite(
  request?: operations.ComAtprotoRepoListMissingBlobsRequest | undefined,
  options?: InfiniteQueryHookOptions<
    PageIterator<
      operations.ComAtprotoRepoListMissingBlobsResponse,
      { cursor: string }
    >
  >,
): UseInfiniteQueryResult<
  InfiniteData<
    AtprotoRepoListMissingBlobsQueryData,
    AtprotoRepoListMissingBlobsPageParams
  >,
  Error
> {
  const client = useBlueskyContext();
  return useInfiniteQuery<
    AtprotoRepoListMissingBlobsQueryData,
    Error,
    InfiniteData<
      AtprotoRepoListMissingBlobsQueryData,
      AtprotoRepoListMissingBlobsPageParams
    >,
    QueryKey,
    AtprotoRepoListMissingBlobsPageParams
  >({
    ...buildAtprotoRepoListMissingBlobsInfiniteQuery(
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
 * *This endpoint is part of the atproto PDS repository management APIs. Requests usually require authentication (unlike the `com.atproto.sync.*` endpoints), and are made directly to the user's own PDS instance.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Returns a list of missing blobs for the requesting account. Intended to be used in the account migration flow.
 */
export function useAtprotoRepoListMissingBlobsInfiniteSuspense(
  request?: operations.ComAtprotoRepoListMissingBlobsRequest | undefined,
  options?: SuspenseInfiniteQueryHookOptions<
    PageIterator<
      operations.ComAtprotoRepoListMissingBlobsResponse,
      { cursor: string }
    >
  >,
): UseSuspenseInfiniteQueryResult<
  InfiniteData<
    AtprotoRepoListMissingBlobsQueryData,
    AtprotoRepoListMissingBlobsPageParams
  >,
  Error
> {
  const client = useBlueskyContext();
  return useSuspenseInfiniteQuery<
    AtprotoRepoListMissingBlobsQueryData,
    Error,
    InfiniteData<
      AtprotoRepoListMissingBlobsQueryData,
      AtprotoRepoListMissingBlobsPageParams
    >,
    QueryKey,
    AtprotoRepoListMissingBlobsPageParams
  >({
    ...buildAtprotoRepoListMissingBlobsInfiniteQuery(
      client,
      request,
      options?.request,
    ),
    initialPageParam: options?.initialPageParam,
    getNextPageParam: (previousPage) => previousPage["~next"],
    ...options,
  });
}

export function prefetchAtprotoRepoListMissingBlobs(
  queryClient: QueryClient,
  client$: BlueskyCore,
  request?: operations.ComAtprotoRepoListMissingBlobsRequest | undefined,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildAtprotoRepoListMissingBlobsQuery(
      client$,
      request,
    ),
  });
}

export function setAtprotoRepoListMissingBlobsData(
  client: QueryClient,
  queryKeyBase: [
    parameters: { limit?: number | undefined; cursor?: string | undefined },
  ],
  data: operations.ComAtprotoRepoListMissingBlobsResponse,
): operations.ComAtprotoRepoListMissingBlobsResponse | undefined {
  const key = queryKeyAtprotoRepoListMissingBlobs(...queryKeyBase);

  return client.setQueryData<operations.ComAtprotoRepoListMissingBlobsResponse>(
    key,
    data,
  );
}

export function invalidateAtprotoRepoListMissingBlobs(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<
    [parameters: { limit?: number | undefined; cursor?: string | undefined }]
  >,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["bluesky", "repo", "listMissingBlobs", ...queryKeyBase],
  });
}

export function invalidateAllAtprotoRepoListMissingBlobs(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["bluesky", "repo", "listMissingBlobs"],
  });
}

export function buildAtprotoRepoListMissingBlobsQuery(
  client$: BlueskyCore,
  request?: operations.ComAtprotoRepoListMissingBlobsRequest | undefined,
  options?: RequestOptions,
): {
  retry: boolean;
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<operations.ComAtprotoRepoListMissingBlobsResponse>;
} {
  return {
    retry: false,
    queryKey: queryKeyAtprotoRepoListMissingBlobs({
      limit: request?.limit,
      cursor: request?.cursor,
    }),
    queryFn: async function atprotoRepoListMissingBlobsQuery(
      ctx,
    ): Promise<operations.ComAtprotoRepoListMissingBlobsResponse> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(atprotoRepoListMissingBlobs(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function buildAtprotoRepoListMissingBlobsInfiniteQuery(
  client$: BlueskyCore,
  request?: operations.ComAtprotoRepoListMissingBlobsRequest | undefined,
  options?: RequestOptions,
): {
  retry: boolean;
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext<
      QueryKey,
      AtprotoRepoListMissingBlobsPageParams
    >,
  ) => Promise<
    PageIterator<
      operations.ComAtprotoRepoListMissingBlobsResponse,
      { cursor: string }
    >
  >;
} {
  return {
    retry: false,
    queryKey: queryKeyAtprotoRepoListMissingBlobs({
      limit: request?.limit,
      cursor: request?.cursor,
    }),
    queryFn: async function atprotoRepoListMissingBlobsQuery(
      ctx,
    ): Promise<
      PageIterator<
        operations.ComAtprotoRepoListMissingBlobsResponse,
        { cursor: string }
      >
    > {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      if (!ctx.pageParam) {
        return unwrapResultIterator(atprotoRepoListMissingBlobs(
          client$,
          request,
          mergedOptions,
        ));
      }

      return unwrapResultIterator(atprotoRepoListMissingBlobs(
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

export function queryKeyAtprotoRepoListMissingBlobs(
  parameters: { limit?: number | undefined; cursor?: string | undefined },
): QueryKey {
  return ["bluesky", "repo", "listMissingBlobs", parameters];
}
