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
import { atprotoSyncGetBlob } from "../funcs/atprotoSyncGetBlob.js";
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

export type AtprotoSyncGetBlobQueryData = void;

/**
 * This endpoint is part of the atproto repository synchronization APIs. Requests usually do not require authentication, and can be made to PDS intances or Relay instances.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Get a blob associated with a given account. Returns the full blob as originally uploaded. Does not require auth; implemented by PDS.
 */
export function useAtprotoSyncGetBlob(
  request: operations.ComAtprotoSyncGetBlobRequest,
  options?: QueryHookOptions<AtprotoSyncGetBlobQueryData>,
): UseQueryResult<AtprotoSyncGetBlobQueryData, Error> {
  const client = useBlueskyContext();
  return useQuery({
    ...buildAtprotoSyncGetBlobQuery(
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
 * Get a blob associated with a given account. Returns the full blob as originally uploaded. Does not require auth; implemented by PDS.
 */
export function useAtprotoSyncGetBlobSuspense(
  request: operations.ComAtprotoSyncGetBlobRequest,
  options?: SuspenseQueryHookOptions<AtprotoSyncGetBlobQueryData>,
): UseSuspenseQueryResult<AtprotoSyncGetBlobQueryData, Error> {
  const client = useBlueskyContext();
  return useSuspenseQuery({
    ...buildAtprotoSyncGetBlobQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchAtprotoSyncGetBlob(
  queryClient: QueryClient,
  client$: BlueskyCore,
  request: operations.ComAtprotoSyncGetBlobRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildAtprotoSyncGetBlobQuery(
      client$,
      request,
    ),
  });
}

export function setAtprotoSyncGetBlobData(
  client: QueryClient,
  queryKeyBase: [parameters: { did: string; cid: string }],
  data: AtprotoSyncGetBlobQueryData,
): AtprotoSyncGetBlobQueryData | undefined {
  const key = queryKeyAtprotoSyncGetBlob(...queryKeyBase);

  return client.setQueryData<AtprotoSyncGetBlobQueryData>(key, data);
}

export function invalidateAtprotoSyncGetBlob(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<[parameters: { did: string; cid: string }]>,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: [
      "@speakeasy-sdks/bluesky",
      "atprotoSync",
      "getBlob",
      ...queryKeyBase,
    ],
  });
}

export function invalidateAllAtprotoSyncGetBlob(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@speakeasy-sdks/bluesky", "atprotoSync", "getBlob"],
  });
}

export function buildAtprotoSyncGetBlobQuery(
  client$: BlueskyCore,
  request: operations.ComAtprotoSyncGetBlobRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<AtprotoSyncGetBlobQueryData>;
} {
  return {
    queryKey: queryKeyAtprotoSyncGetBlob({
      did: request.did,
      cid: request.cid,
    }),
    queryFn: async function atprotoSyncGetBlobQueryFn(
      ctx,
    ): Promise<AtprotoSyncGetBlobQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(atprotoSyncGetBlob(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyAtprotoSyncGetBlob(
  parameters: { did: string; cid: string },
): QueryKey {
  return ["@speakeasy-sdks/bluesky", "atprotoSync", "getBlob", parameters];
}
