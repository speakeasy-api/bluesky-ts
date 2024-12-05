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
import { accountExportData } from "../funcs/accountExportData.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import { unwrapAsync } from "../types/fp.js";
import { useBlueskyContext } from "./_context.js";
import { QueryHookOptions, SuspenseQueryHookOptions } from "./_types.js";

export type AccountExportDataQueryData = void;

/**
 * *This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 */
export function useAccountExportData(
  options?: QueryHookOptions<AccountExportDataQueryData>,
): UseQueryResult<AccountExportDataQueryData, Error> {
  const client = useBlueskyContext();
  return useQuery({
    ...buildAccountExportDataQuery(
      client,
      options,
    ),
    ...options,
  });
}

/**
 * *This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 */
export function useAccountExportDataSuspense(
  options?: SuspenseQueryHookOptions<AccountExportDataQueryData>,
): UseSuspenseQueryResult<AccountExportDataQueryData, Error> {
  const client = useBlueskyContext();
  return useSuspenseQuery({
    ...buildAccountExportDataQuery(
      client,
      options,
    ),
    ...options,
  });
}

export function prefetchAccountExportData(
  queryClient: QueryClient,
  client$: BlueskyCore,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildAccountExportDataQuery(
      client$,
    ),
  });
}

export function setAccountExportDataData(
  client: QueryClient,
  data: AccountExportDataQueryData,
): AccountExportDataQueryData | undefined {
  const key = queryKeyAccountExportData();

  return client.setQueryData<AccountExportDataQueryData>(key, data);
}

export function invalidateAllAccountExportData(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["bluesky", "account", "exportData"],
  });
}

export function buildAccountExportDataQuery(
  client$: BlueskyCore,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<AccountExportDataQueryData>;
} {
  return {
    queryKey: queryKeyAccountExportData(),
    queryFn: async function accountExportDataQueryFn(
      ctx,
    ): Promise<AccountExportDataQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(accountExportData(
        client$,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyAccountExportData(): QueryKey {
  return ["bluesky", "account", "exportData"];
}
