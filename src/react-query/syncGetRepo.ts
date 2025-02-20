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
import { syncGetRepo } from "../funcs/syncGetRepo.js";
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

export type SyncGetRepoQueryData = void;

/**
 * This endpoint is part of the atproto repository synchronization APIs. Requests usually do not require authentication, and can be made to PDS intances or Relay instances.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Download a repository export as CAR file. Optionally only a 'diff' since a previous revision. Does not require auth; implemented by PDS.
 */
export function useSyncGetRepo(
  request: operations.ComAtprotoSyncGetRepoRequest,
  options?: QueryHookOptions<SyncGetRepoQueryData>,
): UseQueryResult<SyncGetRepoQueryData, Error> {
  const client = useBlueskyContext();
  return useQuery({
    ...buildSyncGetRepoQuery(
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
 * Download a repository export as CAR file. Optionally only a 'diff' since a previous revision. Does not require auth; implemented by PDS.
 */
export function useSyncGetRepoSuspense(
  request: operations.ComAtprotoSyncGetRepoRequest,
  options?: SuspenseQueryHookOptions<SyncGetRepoQueryData>,
): UseSuspenseQueryResult<SyncGetRepoQueryData, Error> {
  const client = useBlueskyContext();
  return useSuspenseQuery({
    ...buildSyncGetRepoQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchSyncGetRepo(
  queryClient: QueryClient,
  client$: BlueskyCore,
  request: operations.ComAtprotoSyncGetRepoRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildSyncGetRepoQuery(
      client$,
      request,
    ),
  });
}

export function setSyncGetRepoData(
  client: QueryClient,
  queryKeyBase: [parameters: { did: string; since?: string | undefined }],
  data: SyncGetRepoQueryData,
): SyncGetRepoQueryData | undefined {
  const key = queryKeySyncGetRepo(...queryKeyBase);

  return client.setQueryData<SyncGetRepoQueryData>(key, data);
}

export function invalidateSyncGetRepo(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<
    [parameters: { did: string; since?: string | undefined }]
  >,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@speakeasy-sdks/bluesky", "sync", "getRepo", ...queryKeyBase],
  });
}

export function invalidateAllSyncGetRepo(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@speakeasy-sdks/bluesky", "sync", "getRepo"],
  });
}

export function buildSyncGetRepoQuery(
  client$: BlueskyCore,
  request: operations.ComAtprotoSyncGetRepoRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (context: QueryFunctionContext) => Promise<SyncGetRepoQueryData>;
} {
  return {
    queryKey: queryKeySyncGetRepo({ did: request.did, since: request.since }),
    queryFn: async function syncGetRepoQueryFn(
      ctx,
    ): Promise<SyncGetRepoQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(syncGetRepo(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeySyncGetRepo(
  parameters: { did: string; since?: string | undefined },
): QueryKey {
  return ["@speakeasy-sdks/bluesky", "sync", "getRepo", parameters];
}
