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
import { ozoneModerationGet } from "../funcs/ozoneModerationGet.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useBlueskyContext } from "./_context.js";
import {
  QueryHookOptions,
  SuspenseQueryHookOptions,
  TupleToPrefixes,
} from "./_types.js";

export type OzoneModerationGetQueryData =
  components.ToolsOzoneModerationDefsRepoViewDetail;

/**
 * *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Get details about a repository.
 */
export function useOzoneModerationGet(
  request: operations.ToolsOzoneModerationGetRepoRequest,
  options?: QueryHookOptions<OzoneModerationGetQueryData>,
): UseQueryResult<OzoneModerationGetQueryData, Error> {
  const client = useBlueskyContext();
  return useQuery({
    ...buildOzoneModerationGetQuery(
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
 * Get details about a repository.
 */
export function useOzoneModerationGetSuspense(
  request: operations.ToolsOzoneModerationGetRepoRequest,
  options?: SuspenseQueryHookOptions<OzoneModerationGetQueryData>,
): UseSuspenseQueryResult<OzoneModerationGetQueryData, Error> {
  const client = useBlueskyContext();
  return useSuspenseQuery({
    ...buildOzoneModerationGetQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchOzoneModerationGet(
  queryClient: QueryClient,
  client$: BlueskyCore,
  request: operations.ToolsOzoneModerationGetRepoRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildOzoneModerationGetQuery(
      client$,
      request,
    ),
  });
}

export function setOzoneModerationGetData(
  client: QueryClient,
  queryKeyBase: [parameters: { did: string }],
  data: OzoneModerationGetQueryData,
): OzoneModerationGetQueryData | undefined {
  const key = queryKeyOzoneModerationGet(...queryKeyBase);

  return client.setQueryData<OzoneModerationGetQueryData>(key, data);
}

export function invalidateOzoneModerationGet(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<[parameters: { did: string }]>,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: [
      "@speakeasy-sdks/bluesky",
      "ozoneModeration",
      "get",
      ...queryKeyBase,
    ],
  });
}

export function invalidateAllOzoneModerationGet(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@speakeasy-sdks/bluesky", "ozoneModeration", "get"],
  });
}

export function buildOzoneModerationGetQuery(
  client$: BlueskyCore,
  request: operations.ToolsOzoneModerationGetRepoRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<OzoneModerationGetQueryData>;
} {
  return {
    queryKey: queryKeyOzoneModerationGet({ did: request.did }),
    queryFn: async function ozoneModerationGetQueryFn(
      ctx,
    ): Promise<OzoneModerationGetQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(ozoneModerationGet(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyOzoneModerationGet(
  parameters: { did: string },
): QueryKey {
  return ["@speakeasy-sdks/bluesky", "ozoneModeration", "get", parameters];
}
