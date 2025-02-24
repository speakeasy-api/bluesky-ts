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
import { graphGetStarterPack } from "../funcs/graphGetStarterPack.js";
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

export type GraphGetStarterPackQueryData =
  operations.AppBskyGraphGetStarterPackResponseBody;

/**
 * *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Gets a view of a starter pack.
 */
export function useGraphGetStarterPack(
  request: operations.AppBskyGraphGetStarterPackRequest,
  options?: QueryHookOptions<GraphGetStarterPackQueryData>,
): UseQueryResult<GraphGetStarterPackQueryData, Error> {
  const client = useBlueskyContext();
  return useQuery({
    ...buildGraphGetStarterPackQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

/**
 * *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Gets a view of a starter pack.
 */
export function useGraphGetStarterPackSuspense(
  request: operations.AppBskyGraphGetStarterPackRequest,
  options?: SuspenseQueryHookOptions<GraphGetStarterPackQueryData>,
): UseSuspenseQueryResult<GraphGetStarterPackQueryData, Error> {
  const client = useBlueskyContext();
  return useSuspenseQuery({
    ...buildGraphGetStarterPackQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchGraphGetStarterPack(
  queryClient: QueryClient,
  client$: BlueskyCore,
  request: operations.AppBskyGraphGetStarterPackRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildGraphGetStarterPackQuery(
      client$,
      request,
    ),
  });
}

export function setGraphGetStarterPackData(
  client: QueryClient,
  queryKeyBase: [parameters: { starterPack: string }],
  data: GraphGetStarterPackQueryData,
): GraphGetStarterPackQueryData | undefined {
  const key = queryKeyGraphGetStarterPack(...queryKeyBase);

  return client.setQueryData<GraphGetStarterPackQueryData>(key, data);
}

export function invalidateGraphGetStarterPack(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<[parameters: { starterPack: string }]>,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: [
      "@speakeasy-sdks/bluesky",
      "graph",
      "getStarterPack",
      ...queryKeyBase,
    ],
  });
}

export function invalidateAllGraphGetStarterPack(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@speakeasy-sdks/bluesky", "graph", "getStarterPack"],
  });
}

export function buildGraphGetStarterPackQuery(
  client$: BlueskyCore,
  request: operations.AppBskyGraphGetStarterPackRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<GraphGetStarterPackQueryData>;
} {
  return {
    queryKey: queryKeyGraphGetStarterPack({ starterPack: request.starterPack }),
    queryFn: async function graphGetStarterPackQueryFn(
      ctx,
    ): Promise<GraphGetStarterPackQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(graphGetStarterPack(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyGraphGetStarterPack(
  parameters: { starterPack: string },
): QueryKey {
  return ["@speakeasy-sdks/bluesky", "graph", "getStarterPack", parameters];
}
