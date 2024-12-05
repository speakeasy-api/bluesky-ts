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
import { moderationsGetRecords } from "../funcs/moderationsGetRecords.js";
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

export type ModerationsGetRecordsQueryData =
  operations.ToolsOzoneModerationGetRecordsResponseBody;

/**
 * *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Get details about some records.
 */
export function useModerationsGetRecords(
  request: operations.ToolsOzoneModerationGetRecordsRequest,
  options?: QueryHookOptions<ModerationsGetRecordsQueryData>,
): UseQueryResult<ModerationsGetRecordsQueryData, Error> {
  const client = useBlueskyContext();
  return useQuery({
    ...buildModerationsGetRecordsQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

/**
 * *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Get details about some records.
 */
export function useModerationsGetRecordsSuspense(
  request: operations.ToolsOzoneModerationGetRecordsRequest,
  options?: SuspenseQueryHookOptions<ModerationsGetRecordsQueryData>,
): UseSuspenseQueryResult<ModerationsGetRecordsQueryData, Error> {
  const client = useBlueskyContext();
  return useSuspenseQuery({
    ...buildModerationsGetRecordsQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchModerationsGetRecords(
  queryClient: QueryClient,
  client$: BlueskyCore,
  request: operations.ToolsOzoneModerationGetRecordsRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildModerationsGetRecordsQuery(
      client$,
      request,
    ),
  });
}

export function setModerationsGetRecordsData(
  client: QueryClient,
  queryKeyBase: [parameters: { uris: Array<string> }],
  data: ModerationsGetRecordsQueryData,
): ModerationsGetRecordsQueryData | undefined {
  const key = queryKeyModerationsGetRecords(...queryKeyBase);

  return client.setQueryData<ModerationsGetRecordsQueryData>(key, data);
}

export function invalidateModerationsGetRecords(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<[parameters: { uris: Array<string> }]>,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["bluesky", "moderations", "getRecords", ...queryKeyBase],
  });
}

export function invalidateAllModerationsGetRecords(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["bluesky", "moderations", "getRecords"],
  });
}

export function buildModerationsGetRecordsQuery(
  client$: BlueskyCore,
  request: operations.ToolsOzoneModerationGetRecordsRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<ModerationsGetRecordsQueryData>;
} {
  return {
    queryKey: queryKeyModerationsGetRecords({ uris: request.uris }),
    queryFn: async function moderationsGetRecordsQueryFn(
      ctx,
    ): Promise<ModerationsGetRecordsQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(moderationsGetRecords(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyModerationsGetRecords(
  parameters: { uris: Array<string> },
): QueryKey {
  return ["bluesky", "moderations", "getRecords", parameters];
}
