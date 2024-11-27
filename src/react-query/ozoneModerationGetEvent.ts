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
import { ozoneModerationGetEvent } from "../funcs/ozoneModerationGetEvent.js";
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

export type OzoneModerationGetEventQueryData =
  components.ToolsOzoneModerationDefsModEventViewDetail;

/**
 * *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Get details about a moderation event.
 */
export function useOzoneModerationGetEvent(
  request: operations.ToolsOzoneModerationGetEventRequest,
  options?: QueryHookOptions<
    components.ToolsOzoneModerationDefsModEventViewDetail
  >,
): UseQueryResult<
  components.ToolsOzoneModerationDefsModEventViewDetail,
  Error
> {
  const client = useBlueskyContext();
  return useQuery({
    ...buildOzoneModerationGetEventQuery(
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
 * Get details about a moderation event.
 */
export function useOzoneModerationGetEventSuspense(
  request: operations.ToolsOzoneModerationGetEventRequest,
  options?: SuspenseQueryHookOptions<
    components.ToolsOzoneModerationDefsModEventViewDetail
  >,
): UseSuspenseQueryResult<
  components.ToolsOzoneModerationDefsModEventViewDetail,
  Error
> {
  const client = useBlueskyContext();
  return useSuspenseQuery({
    ...buildOzoneModerationGetEventQuery(
      client,
      request,
      options?.request,
    ),
    ...options,
  });
}

export function prefetchOzoneModerationGetEvent(
  queryClient: QueryClient,
  client$: BlueskyCore,
  request: operations.ToolsOzoneModerationGetEventRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildOzoneModerationGetEventQuery(
      client$,
      request,
    ),
  });
}

export function setOzoneModerationGetEventData(
  client: QueryClient,
  queryKeyBase: [parameters: { id: number }],
  data: components.ToolsOzoneModerationDefsModEventViewDetail,
): components.ToolsOzoneModerationDefsModEventViewDetail | undefined {
  const key = queryKeyOzoneModerationGetEvent(...queryKeyBase);

  return client.setQueryData<
    components.ToolsOzoneModerationDefsModEventViewDetail
  >(key, data);
}

export function invalidateOzoneModerationGetEvent(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<[parameters: { id: number }]>,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["bluesky", "moderation", "getEvent", ...queryKeyBase],
  });
}

export function invalidateAllOzoneModerationGetEvent(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["bluesky", "moderation", "getEvent"],
  });
}

export function buildOzoneModerationGetEventQuery(
  client$: BlueskyCore,
  request: operations.ToolsOzoneModerationGetEventRequest,
  options?: RequestOptions,
): {
  retry: boolean;
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<components.ToolsOzoneModerationDefsModEventViewDetail>;
} {
  return {
    retry: false,
    queryKey: queryKeyOzoneModerationGetEvent({ id: request.id }),
    queryFn: async function ozoneModerationGetEventQuery(
      ctx,
    ): Promise<components.ToolsOzoneModerationDefsModEventViewDetail> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(ozoneModerationGetEvent(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyOzoneModerationGetEvent(
  parameters: { id: number },
): QueryKey {
  return ["bluesky", "moderation", "getEvent", parameters];
}
