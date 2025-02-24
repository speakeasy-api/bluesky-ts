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
import { atprotoIdentityResolveHandle } from "../funcs/atprotoIdentityResolveHandle.js";
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

export type DidForProfileQueryData =
  operations.ComAtprotoIdentityResolveHandleResponseBody;

/**
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Resolves a handle (domain name) to a DID.
 */
export function useDidForProfile(
  request: operations.ComAtprotoIdentityResolveHandleRequest,
  options?: QueryHookOptions<DidForProfileQueryData>,
): UseQueryResult<DidForProfileQueryData, Error> {
  const client = useBlueskyContext();
  return useQuery({
    ...buildDidForProfileQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

/**
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Resolves a handle (domain name) to a DID.
 */
export function useDidForProfileSuspense(
  request: operations.ComAtprotoIdentityResolveHandleRequest,
  options?: SuspenseQueryHookOptions<DidForProfileQueryData>,
): UseSuspenseQueryResult<DidForProfileQueryData, Error> {
  const client = useBlueskyContext();
  return useSuspenseQuery({
    ...buildDidForProfileQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchDidForProfile(
  queryClient: QueryClient,
  client$: BlueskyCore,
  request: operations.ComAtprotoIdentityResolveHandleRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildDidForProfileQuery(
      client$,
      request,
    ),
  });
}

export function setDidForProfileData(
  client: QueryClient,
  queryKeyBase: [parameters: { handle: string }],
  data: DidForProfileQueryData,
): DidForProfileQueryData | undefined {
  const key = queryKeyDidForProfile(...queryKeyBase);

  return client.setQueryData<DidForProfileQueryData>(key, data);
}

export function invalidateDidForProfile(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<[parameters: { handle: string }]>,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: [
      "@speakeasy-sdks/bluesky",
      "atprotoIdentity",
      "resolveHandle",
      ...queryKeyBase,
    ],
  });
}

export function invalidateAllDidForProfile(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@speakeasy-sdks/bluesky", "atprotoIdentity", "resolveHandle"],
  });
}

export function buildDidForProfileQuery(
  client$: BlueskyCore,
  request: operations.ComAtprotoIdentityResolveHandleRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (context: QueryFunctionContext) => Promise<DidForProfileQueryData>;
} {
  return {
    queryKey: queryKeyDidForProfile({ handle: request.handle }),
    queryFn: async function didForProfileQueryFn(
      ctx,
    ): Promise<DidForProfileQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(atprotoIdentityResolveHandle(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyDidForProfile(
  parameters: { handle: string },
): QueryKey {
  return [
    "@speakeasy-sdks/bluesky",
    "atprotoIdentity",
    "resolveHandle",
    parameters,
  ];
}
