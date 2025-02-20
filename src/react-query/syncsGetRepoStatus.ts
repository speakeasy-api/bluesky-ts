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
import { syncsGetRepoStatus } from "../funcs/syncsGetRepoStatus.js";
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

export type SyncsGetRepoStatusQueryData =
  operations.ComAtprotoSyncGetRepoStatusResponseBody;

/**
 * This endpoint is part of the atproto repository synchronization APIs. Requests usually do not require authentication, and can be made to PDS intances or Relay instances.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Get the hosting status for a repository, on this server. Expected to be implemented by PDS and Relay.
 */
export function useSyncsGetRepoStatus(
  request: operations.ComAtprotoSyncGetRepoStatusRequest,
  options?: QueryHookOptions<SyncsGetRepoStatusQueryData>,
): UseQueryResult<SyncsGetRepoStatusQueryData, Error> {
  const client = useBlueskyContext();
  return useQuery({
    ...buildSyncsGetRepoStatusQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

/**
 * This endpoint is part of the atproto repository synchronization APIs. Requests usually do not require authentication, and can be made to PDS intances or Relay instances.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Get the hosting status for a repository, on this server. Expected to be implemented by PDS and Relay.
 */
export function useSyncsGetRepoStatusSuspense(
  request: operations.ComAtprotoSyncGetRepoStatusRequest,
  options?: SuspenseQueryHookOptions<SyncsGetRepoStatusQueryData>,
): UseSuspenseQueryResult<SyncsGetRepoStatusQueryData, Error> {
  const client = useBlueskyContext();
  return useSuspenseQuery({
    ...buildSyncsGetRepoStatusQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchSyncsGetRepoStatus(
  queryClient: QueryClient,
  client$: BlueskyCore,
  request: operations.ComAtprotoSyncGetRepoStatusRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildSyncsGetRepoStatusQuery(
      client$,
      request,
    ),
  });
}

export function setSyncsGetRepoStatusData(
  client: QueryClient,
  queryKeyBase: [parameters: { did: string }],
  data: SyncsGetRepoStatusQueryData,
): SyncsGetRepoStatusQueryData | undefined {
  const key = queryKeySyncsGetRepoStatus(...queryKeyBase);

  return client.setQueryData<SyncsGetRepoStatusQueryData>(key, data);
}

export function invalidateSyncsGetRepoStatus(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<[parameters: { did: string }]>,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: [
      "@speakeasy-sdks/bluesky",
      "syncs",
      "getRepoStatus",
      ...queryKeyBase,
    ],
  });
}

export function invalidateAllSyncsGetRepoStatus(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@speakeasy-sdks/bluesky", "syncs", "getRepoStatus"],
  });
}

export function buildSyncsGetRepoStatusQuery(
  client$: BlueskyCore,
  request: operations.ComAtprotoSyncGetRepoStatusRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<SyncsGetRepoStatusQueryData>;
} {
  return {
    queryKey: queryKeySyncsGetRepoStatus({ did: request.did }),
    queryFn: async function syncsGetRepoStatusQueryFn(
      ctx,
    ): Promise<SyncsGetRepoStatusQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(syncsGetRepoStatus(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeySyncsGetRepoStatus(
  parameters: { did: string },
): QueryKey {
  return ["@speakeasy-sdks/bluesky", "syncs", "getRepoStatus", parameters];
}
