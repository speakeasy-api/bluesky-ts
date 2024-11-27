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
import { atprotoRepoDescribeRepo } from "../funcs/atprotoRepoDescribeRepo.js";
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

export type AtprotoRepoDescribeRepoQueryData =
  operations.ComAtprotoRepoDescribeRepoResponseBody;

/**
 * *This endpoint is part of the atproto PDS repository management APIs. Requests usually require authentication (unlike the `com.atproto.sync.*` endpoints), and are made directly to the user's own PDS instance.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Get information about an account and repository, including the list of collections. Does not require auth.
 */
export function useAtprotoRepoDescribeRepo(
  request: operations.ComAtprotoRepoDescribeRepoRequest,
  options?: QueryHookOptions<operations.ComAtprotoRepoDescribeRepoResponseBody>,
): UseQueryResult<operations.ComAtprotoRepoDescribeRepoResponseBody, Error> {
  const client = useBlueskyContext();
  return useQuery({
    ...buildAtprotoRepoDescribeRepoQuery(
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
 * Get information about an account and repository, including the list of collections. Does not require auth.
 */
export function useAtprotoRepoDescribeRepoSuspense(
  request: operations.ComAtprotoRepoDescribeRepoRequest,
  options?: SuspenseQueryHookOptions<
    operations.ComAtprotoRepoDescribeRepoResponseBody
  >,
): UseSuspenseQueryResult<
  operations.ComAtprotoRepoDescribeRepoResponseBody,
  Error
> {
  const client = useBlueskyContext();
  return useSuspenseQuery({
    ...buildAtprotoRepoDescribeRepoQuery(
      client,
      request,
      options?.request,
    ),
    ...options,
  });
}

export function prefetchAtprotoRepoDescribeRepo(
  queryClient: QueryClient,
  client$: BlueskyCore,
  request: operations.ComAtprotoRepoDescribeRepoRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildAtprotoRepoDescribeRepoQuery(
      client$,
      request,
    ),
  });
}

export function setAtprotoRepoDescribeRepoData(
  client: QueryClient,
  queryKeyBase: [parameters: { repo: string }],
  data: operations.ComAtprotoRepoDescribeRepoResponseBody,
): operations.ComAtprotoRepoDescribeRepoResponseBody | undefined {
  const key = queryKeyAtprotoRepoDescribeRepo(...queryKeyBase);

  return client.setQueryData<operations.ComAtprotoRepoDescribeRepoResponseBody>(
    key,
    data,
  );
}

export function invalidateAtprotoRepoDescribeRepo(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<[parameters: { repo: string }]>,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["bluesky", "repo", "describeRepo", ...queryKeyBase],
  });
}

export function invalidateAllAtprotoRepoDescribeRepo(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["bluesky", "repo", "describeRepo"],
  });
}

export function buildAtprotoRepoDescribeRepoQuery(
  client$: BlueskyCore,
  request: operations.ComAtprotoRepoDescribeRepoRequest,
  options?: RequestOptions,
): {
  retry: boolean;
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<operations.ComAtprotoRepoDescribeRepoResponseBody>;
} {
  return {
    retry: false,
    queryKey: queryKeyAtprotoRepoDescribeRepo({ repo: request.repo }),
    queryFn: async function atprotoRepoDescribeRepoQuery(
      ctx,
    ): Promise<operations.ComAtprotoRepoDescribeRepoResponseBody> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(atprotoRepoDescribeRepo(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyAtprotoRepoDescribeRepo(
  parameters: { repo: string },
): QueryKey {
  return ["bluesky", "repo", "describeRepo", parameters];
}
