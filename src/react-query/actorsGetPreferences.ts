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
import { actorsGetPreferences } from "../funcs/actorsGetPreferences.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useBlueskyContext } from "./_context.js";
import { QueryHookOptions, SuspenseQueryHookOptions } from "./_types.js";

export type ActorsGetPreferencesQueryData =
  operations.AppBskyActorGetPreferencesResponseBody;

/**
 * *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Get private preferences attached to the current account. Expected use is synchronization between multiple devices, and import/export during account migration. Requires auth.
 */
export function useActorsGetPreferences(
  options?: QueryHookOptions<ActorsGetPreferencesQueryData>,
): UseQueryResult<ActorsGetPreferencesQueryData, Error> {
  const client = useBlueskyContext();
  return useQuery({
    ...buildActorsGetPreferencesQuery(
      client,
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
 * Get private preferences attached to the current account. Expected use is synchronization between multiple devices, and import/export during account migration. Requires auth.
 */
export function useActorsGetPreferencesSuspense(
  options?: SuspenseQueryHookOptions<ActorsGetPreferencesQueryData>,
): UseSuspenseQueryResult<ActorsGetPreferencesQueryData, Error> {
  const client = useBlueskyContext();
  return useSuspenseQuery({
    ...buildActorsGetPreferencesQuery(
      client,
      options,
    ),
    ...options,
  });
}

export function prefetchActorsGetPreferences(
  queryClient: QueryClient,
  client$: BlueskyCore,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildActorsGetPreferencesQuery(
      client$,
    ),
  });
}

export function setActorsGetPreferencesData(
  client: QueryClient,
  data: ActorsGetPreferencesQueryData,
): ActorsGetPreferencesQueryData | undefined {
  const key = queryKeyActorsGetPreferences();

  return client.setQueryData<ActorsGetPreferencesQueryData>(key, data);
}

export function invalidateAllActorsGetPreferences(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["bluesky", "actors", "getPreferences"],
  });
}

export function buildActorsGetPreferencesQuery(
  client$: BlueskyCore,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<ActorsGetPreferencesQueryData>;
} {
  return {
    queryKey: queryKeyActorsGetPreferences(),
    queryFn: async function actorsGetPreferencesQueryFn(
      ctx,
    ): Promise<ActorsGetPreferencesQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(actorsGetPreferences(
        client$,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyActorsGetPreferences(): QueryKey {
  return ["bluesky", "actors", "getPreferences"];
}
