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
import { adminGetSubjectStatus } from "../funcs/adminGetSubjectStatus.js";
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

export type AdminGetSubjectStatusQueryData =
  operations.ComAtprotoAdminGetSubjectStatusResponseBody;

/**
 * *This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Get the service-specific admin status of a subject (account, record, or blob).
 */
export function useAdminGetSubjectStatus(
  request?: operations.ComAtprotoAdminGetSubjectStatusRequest | undefined,
  options?: QueryHookOptions<AdminGetSubjectStatusQueryData>,
): UseQueryResult<AdminGetSubjectStatusQueryData, Error> {
  const client = useBlueskyContext();
  return useQuery({
    ...buildAdminGetSubjectStatusQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

/**
 * *This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Get the service-specific admin status of a subject (account, record, or blob).
 */
export function useAdminGetSubjectStatusSuspense(
  request?: operations.ComAtprotoAdminGetSubjectStatusRequest | undefined,
  options?: SuspenseQueryHookOptions<AdminGetSubjectStatusQueryData>,
): UseSuspenseQueryResult<AdminGetSubjectStatusQueryData, Error> {
  const client = useBlueskyContext();
  return useSuspenseQuery({
    ...buildAdminGetSubjectStatusQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchAdminGetSubjectStatus(
  queryClient: QueryClient,
  client$: BlueskyCore,
  request?: operations.ComAtprotoAdminGetSubjectStatusRequest | undefined,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildAdminGetSubjectStatusQuery(
      client$,
      request,
    ),
  });
}

export function setAdminGetSubjectStatusData(
  client: QueryClient,
  queryKeyBase: [
    parameters: {
      did?: string | undefined;
      uri?: string | undefined;
      blob?: string | undefined;
    },
  ],
  data: AdminGetSubjectStatusQueryData,
): AdminGetSubjectStatusQueryData | undefined {
  const key = queryKeyAdminGetSubjectStatus(...queryKeyBase);

  return client.setQueryData<AdminGetSubjectStatusQueryData>(key, data);
}

export function invalidateAdminGetSubjectStatus(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<
    [parameters: {
      did?: string | undefined;
      uri?: string | undefined;
      blob?: string | undefined;
    }]
  >,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: [
      "@speakeasy-sdks/bluesky",
      "admin",
      "getSubjectStatus",
      ...queryKeyBase,
    ],
  });
}

export function invalidateAllAdminGetSubjectStatus(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@speakeasy-sdks/bluesky", "admin", "getSubjectStatus"],
  });
}

export function buildAdminGetSubjectStatusQuery(
  client$: BlueskyCore,
  request?: operations.ComAtprotoAdminGetSubjectStatusRequest | undefined,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<AdminGetSubjectStatusQueryData>;
} {
  return {
    queryKey: queryKeyAdminGetSubjectStatus({
      did: request?.did,
      uri: request?.uri,
      blob: request?.blob,
    }),
    queryFn: async function adminGetSubjectStatusQueryFn(
      ctx,
    ): Promise<AdminGetSubjectStatusQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(adminGetSubjectStatus(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyAdminGetSubjectStatus(
  parameters: {
    did?: string | undefined;
    uri?: string | undefined;
    blob?: string | undefined;
  },
): QueryKey {
  return ["@speakeasy-sdks/bluesky", "admin", "getSubjectStatus", parameters];
}
