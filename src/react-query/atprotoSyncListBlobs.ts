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
import { atprotoSyncListBlobs } from "../funcs/atprotoSyncListBlobs.js";
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

export type AtprotoSyncListBlobsQueryData = PageIterator<
  operations.ComAtprotoSyncListBlobsResponse,
  { cursor: string }
>;
export type AtprotoSyncListBlobsPageParams = PageIterator<
  operations.ComAtprotoSyncListBlobsResponse,
  { cursor: string }
>["~next"];

/**
 * This endpoint is part of the atproto repository synchronization APIs. Requests usually do not require authentication, and can be made to PDS intances or Relay instances.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * List blob CIDs for an account, since some repo revision. Does not require auth; implemented by PDS.
 */
export function useAtprotoSyncListBlobs(
  request: operations.ComAtprotoSyncListBlobsRequest,
  options?: QueryHookOptions<operations.ComAtprotoSyncListBlobsResponse>,
): UseQueryResult<operations.ComAtprotoSyncListBlobsResponse, Error> {
  const client = useBlueskyContext();
  return useQuery({
    ...buildAtprotoSyncListBlobsQuery(
      client,
      request,
      options?.request,
    ),
    ...options,
  });
}

/**
 * This endpoint is part of the atproto repository synchronization APIs. Requests usually do not require authentication, and can be made to PDS intances or Relay instances.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * List blob CIDs for an account, since some repo revision. Does not require auth; implemented by PDS.
 */
export function useAtprotoSyncListBlobsSuspense(
  request: operations.ComAtprotoSyncListBlobsRequest,
  options?: SuspenseQueryHookOptions<
    operations.ComAtprotoSyncListBlobsResponse
  >,
): UseSuspenseQueryResult<operations.ComAtprotoSyncListBlobsResponse, Error> {
  const client = useBlueskyContext();
  return useSuspenseQuery({
    ...buildAtprotoSyncListBlobsQuery(
      client,
      request,
      options?.request,
    ),
    ...options,
  });
}

/**
 * This endpoint is part of the atproto repository synchronization APIs. Requests usually do not require authentication, and can be made to PDS intances or Relay instances.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * List blob CIDs for an account, since some repo revision. Does not require auth; implemented by PDS.
 */
export function useAtprotoSyncListBlobsInfinite(
  request: operations.ComAtprotoSyncListBlobsRequest,
  options?: InfiniteQueryHookOptions<
    PageIterator<operations.ComAtprotoSyncListBlobsResponse, { cursor: string }>
  >,
): UseInfiniteQueryResult<
  InfiniteData<AtprotoSyncListBlobsQueryData, AtprotoSyncListBlobsPageParams>,
  Error
> {
  const client = useBlueskyContext();
  return useInfiniteQuery<
    AtprotoSyncListBlobsQueryData,
    Error,
    InfiniteData<AtprotoSyncListBlobsQueryData, AtprotoSyncListBlobsPageParams>,
    QueryKey,
    AtprotoSyncListBlobsPageParams
  >({
    ...buildAtprotoSyncListBlobsInfiniteQuery(
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
 * This endpoint is part of the atproto repository synchronization APIs. Requests usually do not require authentication, and can be made to PDS intances or Relay instances.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * List blob CIDs for an account, since some repo revision. Does not require auth; implemented by PDS.
 */
export function useAtprotoSyncListBlobsInfiniteSuspense(
  request: operations.ComAtprotoSyncListBlobsRequest,
  options?: SuspenseInfiniteQueryHookOptions<
    PageIterator<operations.ComAtprotoSyncListBlobsResponse, { cursor: string }>
  >,
): UseSuspenseInfiniteQueryResult<
  InfiniteData<AtprotoSyncListBlobsQueryData, AtprotoSyncListBlobsPageParams>,
  Error
> {
  const client = useBlueskyContext();
  return useSuspenseInfiniteQuery<
    AtprotoSyncListBlobsQueryData,
    Error,
    InfiniteData<AtprotoSyncListBlobsQueryData, AtprotoSyncListBlobsPageParams>,
    QueryKey,
    AtprotoSyncListBlobsPageParams
  >({
    ...buildAtprotoSyncListBlobsInfiniteQuery(
      client,
      request,
      options?.request,
    ),
    initialPageParam: options?.initialPageParam,
    getNextPageParam: (previousPage) => previousPage["~next"],
    ...options,
  });
}

export function prefetchAtprotoSyncListBlobs(
  queryClient: QueryClient,
  client$: BlueskyCore,
  request: operations.ComAtprotoSyncListBlobsRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildAtprotoSyncListBlobsQuery(
      client$,
      request,
    ),
  });
}

export function setAtprotoSyncListBlobsData(
  client: QueryClient,
  queryKeyBase: [
    parameters: {
      did: string;
      since?: string | undefined;
      limit?: number | undefined;
      cursor?: string | undefined;
    },
  ],
  data: operations.ComAtprotoSyncListBlobsResponse,
): operations.ComAtprotoSyncListBlobsResponse | undefined {
  const key = queryKeyAtprotoSyncListBlobs(...queryKeyBase);

  return client.setQueryData<operations.ComAtprotoSyncListBlobsResponse>(
    key,
    data,
  );
}

export function invalidateAtprotoSyncListBlobs(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<
    [parameters: {
      did: string;
      since?: string | undefined;
      limit?: number | undefined;
      cursor?: string | undefined;
    }]
  >,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["bluesky", "sync", "listBlobs", ...queryKeyBase],
  });
}

export function invalidateAllAtprotoSyncListBlobs(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["bluesky", "sync", "listBlobs"],
  });
}

export function buildAtprotoSyncListBlobsQuery(
  client$: BlueskyCore,
  request: operations.ComAtprotoSyncListBlobsRequest,
  options?: RequestOptions,
): {
  retry: boolean;
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<operations.ComAtprotoSyncListBlobsResponse>;
} {
  return {
    retry: false,
    queryKey: queryKeyAtprotoSyncListBlobs({
      did: request.did,
      since: request.since,
      limit: request.limit,
      cursor: request.cursor,
    }),
    queryFn: async function atprotoSyncListBlobsQuery(
      ctx,
    ): Promise<operations.ComAtprotoSyncListBlobsResponse> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(atprotoSyncListBlobs(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function buildAtprotoSyncListBlobsInfiniteQuery(
  client$: BlueskyCore,
  request: operations.ComAtprotoSyncListBlobsRequest,
  options?: RequestOptions,
): {
  retry: boolean;
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext<QueryKey, AtprotoSyncListBlobsPageParams>,
  ) => Promise<
    PageIterator<operations.ComAtprotoSyncListBlobsResponse, { cursor: string }>
  >;
} {
  return {
    retry: false,
    queryKey: queryKeyAtprotoSyncListBlobs({
      did: request.did,
      since: request.since,
      limit: request.limit,
      cursor: request.cursor,
    }),
    queryFn: async function atprotoSyncListBlobsQuery(
      ctx,
    ): Promise<
      PageIterator<
        operations.ComAtprotoSyncListBlobsResponse,
        { cursor: string }
      >
    > {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      if (!ctx.pageParam) {
        return unwrapResultIterator(atprotoSyncListBlobs(
          client$,
          request,
          mergedOptions,
        ));
      }

      return unwrapResultIterator(atprotoSyncListBlobs(
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

export function queryKeyAtprotoSyncListBlobs(
  parameters: {
    did: string;
    since?: string | undefined;
    limit?: number | undefined;
    cursor?: string | undefined;
  },
): QueryKey {
  return ["bluesky", "sync", "listBlobs", parameters];
}
