/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  InvalidateQueryFilters,
  QueryClient,
  QueryFunctionContext,
  QueryKey,
  useQuery,
  UseQueryResult,
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";
import { BlueskyCore } from "../core.js";
import { reposDescribe } from "../funcs/reposDescribe.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useBlueskyContext } from "./_context.js";
import {
  QueryHookOptions,
  SuspenseQueryHookOptions,
  TupleToPrefixes,
} from "./_types.js";

export type ReposDescribeQueryData =
  operations.ComAtprotoRepoDescribeRepoResponseBody;

/**
 * *This endpoint is part of the atproto PDS repository management APIs. Requests usually require authentication (unlike the `com.atproto.sync.*` endpoints), and are made directly to the user's own PDS instance.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Get information about an account and repository, including the list of collections. Does not require auth.
 */
export function useReposDescribe(
  request: operations.ComAtprotoRepoDescribeRepoRequest,
  options?: QueryHookOptions<ReposDescribeQueryData>,
): UseQueryResult<ReposDescribeQueryData, Error> {
  const client = useBlueskyContext();
  return useQuery({
    ...buildReposDescribeQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

/**
 * *This endpoint is part of the atproto PDS repository management APIs. Requests usually require authentication (unlike the `com.atproto.sync.*` endpoints), and are made directly to the user's own PDS instance.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Get information about an account and repository, including the list of collections. Does not require auth.
 */
export function useReposDescribeSuspense(
  request: operations.ComAtprotoRepoDescribeRepoRequest,
  options?: SuspenseQueryHookOptions<ReposDescribeQueryData>,
): UseSuspenseQueryResult<ReposDescribeQueryData, Error> {
  const client = useBlueskyContext();
  return useSuspenseQuery({
    ...buildReposDescribeQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchReposDescribe(
  queryClient: QueryClient,
  client$: BlueskyCore,
  request: operations.ComAtprotoRepoDescribeRepoRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildReposDescribeQuery(
      client$,
      request,
    ),
  });
}

export function setReposDescribeData(
  client: QueryClient,
  queryKeyBase: [parameters: { repo: string }],
  data: ReposDescribeQueryData,
): ReposDescribeQueryData | undefined {
  const key = queryKeyReposDescribe(...queryKeyBase);

  return client.setQueryData<ReposDescribeQueryData>(key, data);
}

export function invalidateReposDescribe(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<[parameters: { repo: string }]>,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@speakeasy-sdks/bluesky", "repos", "describe", ...queryKeyBase],
  });
}

export function invalidateAllReposDescribe(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@speakeasy-sdks/bluesky", "repos", "describe"],
  });
}

export function buildReposDescribeQuery(
  client$: BlueskyCore,
  request: operations.ComAtprotoRepoDescribeRepoRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (context: QueryFunctionContext) => Promise<ReposDescribeQueryData>;
} {
  return {
    queryKey: queryKeyReposDescribe({ repo: request.repo }),
    queryFn: async function reposDescribeQueryFn(
      ctx,
    ): Promise<ReposDescribeQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(reposDescribe(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyReposDescribe(parameters: { repo: string }): QueryKey {
  return ["@speakeasy-sdks/bluesky", "repos", "describe", parameters];
}
