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
import { serversGetSession } from "../funcs/serversGetSession.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useBlueskyContext } from "./_context.js";
import { QueryHookOptions, SuspenseQueryHookOptions } from "./_types.js";

export type ServersGetSessionQueryData =
  operations.ComAtprotoServerGetSessionResponseBody;

/**
 * *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Get information about the current auth session. Requires auth.
 */
export function useServersGetSession(
  options?: QueryHookOptions<ServersGetSessionQueryData>,
): UseQueryResult<ServersGetSessionQueryData, Error> {
  const client = useBlueskyContext();
  return useQuery({
    ...buildServersGetSessionQuery(
      client,
      options,
    ),
    ...options,
  });
}

/**
 * *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Get information about the current auth session. Requires auth.
 */
export function useServersGetSessionSuspense(
  options?: SuspenseQueryHookOptions<ServersGetSessionQueryData>,
): UseSuspenseQueryResult<ServersGetSessionQueryData, Error> {
  const client = useBlueskyContext();
  return useSuspenseQuery({
    ...buildServersGetSessionQuery(
      client,
      options,
    ),
    ...options,
  });
}

export function prefetchServersGetSession(
  queryClient: QueryClient,
  client$: BlueskyCore,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildServersGetSessionQuery(
      client$,
    ),
  });
}

export function setServersGetSessionData(
  client: QueryClient,
  data: ServersGetSessionQueryData,
): ServersGetSessionQueryData | undefined {
  const key = queryKeyServersGetSession();

  return client.setQueryData<ServersGetSessionQueryData>(key, data);
}

export function invalidateAllServersGetSession(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@speakeasy-sdks/bluesky", "servers", "getSession"],
  });
}

export function buildServersGetSessionQuery(
  client$: BlueskyCore,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<ServersGetSessionQueryData>;
} {
  return {
    queryKey: queryKeyServersGetSession(),
    queryFn: async function serversGetSessionQueryFn(
      ctx,
    ): Promise<ServersGetSessionQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(serversGetSession(
        client$,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyServersGetSession(): QueryKey {
  return ["@speakeasy-sdks/bluesky", "servers", "getSession"];
}
