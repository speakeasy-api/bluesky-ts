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
import { ozoneSignatureFindRelatedAccounts } from "../funcs/ozoneSignatureFindRelatedAccounts.js";
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

export type OzoneSignatureFindRelatedAccountsQueryData = PageIterator<
  operations.ToolsOzoneSignatureFindRelatedAccountsResponse,
  { cursor: string }
>;
export type OzoneSignatureFindRelatedAccountsPageParams = PageIterator<
  operations.ToolsOzoneSignatureFindRelatedAccountsResponse,
  { cursor: string }
>["~next"];

/**
 * *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Get accounts that share some matching threat signatures with the root account.
 */
export function useOzoneSignatureFindRelatedAccounts(
  request: operations.ToolsOzoneSignatureFindRelatedAccountsRequest,
  options?: QueryHookOptions<
    operations.ToolsOzoneSignatureFindRelatedAccountsResponse
  >,
): UseQueryResult<
  operations.ToolsOzoneSignatureFindRelatedAccountsResponse,
  Error
> {
  const client = useBlueskyContext();
  return useQuery({
    ...buildOzoneSignatureFindRelatedAccountsQuery(
      client,
      request,
      options?.request,
    ),
    ...options,
  });
}

/**
 * *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Get accounts that share some matching threat signatures with the root account.
 */
export function useOzoneSignatureFindRelatedAccountsSuspense(
  request: operations.ToolsOzoneSignatureFindRelatedAccountsRequest,
  options?: SuspenseQueryHookOptions<
    operations.ToolsOzoneSignatureFindRelatedAccountsResponse
  >,
): UseSuspenseQueryResult<
  operations.ToolsOzoneSignatureFindRelatedAccountsResponse,
  Error
> {
  const client = useBlueskyContext();
  return useSuspenseQuery({
    ...buildOzoneSignatureFindRelatedAccountsQuery(
      client,
      request,
      options?.request,
    ),
    ...options,
  });
}

/**
 * *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Get accounts that share some matching threat signatures with the root account.
 */
export function useOzoneSignatureFindRelatedAccountsInfinite(
  request: operations.ToolsOzoneSignatureFindRelatedAccountsRequest,
  options?: InfiniteQueryHookOptions<
    PageIterator<
      operations.ToolsOzoneSignatureFindRelatedAccountsResponse,
      { cursor: string }
    >
  >,
): UseInfiniteQueryResult<
  InfiniteData<
    OzoneSignatureFindRelatedAccountsQueryData,
    OzoneSignatureFindRelatedAccountsPageParams
  >,
  Error
> {
  const client = useBlueskyContext();
  return useInfiniteQuery<
    OzoneSignatureFindRelatedAccountsQueryData,
    Error,
    InfiniteData<
      OzoneSignatureFindRelatedAccountsQueryData,
      OzoneSignatureFindRelatedAccountsPageParams
    >,
    QueryKey,
    OzoneSignatureFindRelatedAccountsPageParams
  >({
    ...buildOzoneSignatureFindRelatedAccountsInfiniteQuery(
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
 * *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Get accounts that share some matching threat signatures with the root account.
 */
export function useOzoneSignatureFindRelatedAccountsInfiniteSuspense(
  request: operations.ToolsOzoneSignatureFindRelatedAccountsRequest,
  options?: SuspenseInfiniteQueryHookOptions<
    PageIterator<
      operations.ToolsOzoneSignatureFindRelatedAccountsResponse,
      { cursor: string }
    >
  >,
): UseSuspenseInfiniteQueryResult<
  InfiniteData<
    OzoneSignatureFindRelatedAccountsQueryData,
    OzoneSignatureFindRelatedAccountsPageParams
  >,
  Error
> {
  const client = useBlueskyContext();
  return useSuspenseInfiniteQuery<
    OzoneSignatureFindRelatedAccountsQueryData,
    Error,
    InfiniteData<
      OzoneSignatureFindRelatedAccountsQueryData,
      OzoneSignatureFindRelatedAccountsPageParams
    >,
    QueryKey,
    OzoneSignatureFindRelatedAccountsPageParams
  >({
    ...buildOzoneSignatureFindRelatedAccountsInfiniteQuery(
      client,
      request,
      options?.request,
    ),
    initialPageParam: options?.initialPageParam,
    getNextPageParam: (previousPage) => previousPage["~next"],
    ...options,
  });
}

export function prefetchOzoneSignatureFindRelatedAccounts(
  queryClient: QueryClient,
  client$: BlueskyCore,
  request: operations.ToolsOzoneSignatureFindRelatedAccountsRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildOzoneSignatureFindRelatedAccountsQuery(
      client$,
      request,
    ),
  });
}

export function setOzoneSignatureFindRelatedAccountsData(
  client: QueryClient,
  queryKeyBase: [
    parameters: {
      did: string;
      cursor?: string | undefined;
      limit?: number | undefined;
    },
  ],
  data: operations.ToolsOzoneSignatureFindRelatedAccountsResponse,
): operations.ToolsOzoneSignatureFindRelatedAccountsResponse | undefined {
  const key = queryKeyOzoneSignatureFindRelatedAccounts(...queryKeyBase);

  return client.setQueryData<
    operations.ToolsOzoneSignatureFindRelatedAccountsResponse
  >(key, data);
}

export function invalidateOzoneSignatureFindRelatedAccounts(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<
    [parameters: {
      did: string;
      cursor?: string | undefined;
      limit?: number | undefined;
    }]
  >,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["bluesky", "signature", "findRelatedAccounts", ...queryKeyBase],
  });
}

export function invalidateAllOzoneSignatureFindRelatedAccounts(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["bluesky", "signature", "findRelatedAccounts"],
  });
}

export function buildOzoneSignatureFindRelatedAccountsQuery(
  client$: BlueskyCore,
  request: operations.ToolsOzoneSignatureFindRelatedAccountsRequest,
  options?: RequestOptions,
): {
  retry: boolean;
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<operations.ToolsOzoneSignatureFindRelatedAccountsResponse>;
} {
  return {
    retry: false,
    queryKey: queryKeyOzoneSignatureFindRelatedAccounts({
      did: request.did,
      cursor: request.cursor,
      limit: request.limit,
    }),
    queryFn: async function ozoneSignatureFindRelatedAccountsQuery(
      ctx,
    ): Promise<operations.ToolsOzoneSignatureFindRelatedAccountsResponse> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(ozoneSignatureFindRelatedAccounts(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function buildOzoneSignatureFindRelatedAccountsInfiniteQuery(
  client$: BlueskyCore,
  request: operations.ToolsOzoneSignatureFindRelatedAccountsRequest,
  options?: RequestOptions,
): {
  retry: boolean;
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext<
      QueryKey,
      OzoneSignatureFindRelatedAccountsPageParams
    >,
  ) => Promise<
    PageIterator<
      operations.ToolsOzoneSignatureFindRelatedAccountsResponse,
      { cursor: string }
    >
  >;
} {
  return {
    retry: false,
    queryKey: queryKeyOzoneSignatureFindRelatedAccounts({
      did: request.did,
      cursor: request.cursor,
      limit: request.limit,
    }),
    queryFn: async function ozoneSignatureFindRelatedAccountsQuery(
      ctx,
    ): Promise<
      PageIterator<
        operations.ToolsOzoneSignatureFindRelatedAccountsResponse,
        { cursor: string }
      >
    > {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      if (!ctx.pageParam) {
        return unwrapResultIterator(ozoneSignatureFindRelatedAccounts(
          client$,
          request,
          mergedOptions,
        ));
      }

      return unwrapResultIterator(ozoneSignatureFindRelatedAccounts(
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

export function queryKeyOzoneSignatureFindRelatedAccounts(
  parameters: {
    did: string;
    cursor?: string | undefined;
    limit?: number | undefined;
  },
): QueryKey {
  return ["bluesky", "signature", "findRelatedAccounts", parameters];
}
