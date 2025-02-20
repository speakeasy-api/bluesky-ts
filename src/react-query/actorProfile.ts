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
import { actorsGetProfile } from "../funcs/actorsGetProfile.js";
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

export type ActorProfileQueryData =
  components.AppBskyActorDefsProfileViewDetailed;

/**
 * *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Get detailed profile view of an actor. Does not require auth, but contains relevant metadata with auth.
 */
export function useActorProfile(
  request: operations.AppBskyActorGetProfileRequest,
  options?: QueryHookOptions<ActorProfileQueryData>,
): UseQueryResult<ActorProfileQueryData, Error> {
  const client = useBlueskyContext();
  return useQuery({
    ...buildActorProfileQuery(
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
 * Get detailed profile view of an actor. Does not require auth, but contains relevant metadata with auth.
 */
export function useActorProfileSuspense(
  request: operations.AppBskyActorGetProfileRequest,
  options?: SuspenseQueryHookOptions<ActorProfileQueryData>,
): UseSuspenseQueryResult<ActorProfileQueryData, Error> {
  const client = useBlueskyContext();
  return useSuspenseQuery({
    ...buildActorProfileQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchActorProfile(
  queryClient: QueryClient,
  client$: BlueskyCore,
  request: operations.AppBskyActorGetProfileRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildActorProfileQuery(
      client$,
      request,
    ),
  });
}

export function setActorProfileData(
  client: QueryClient,
  queryKeyBase: [parameters: { actor: string }],
  data: ActorProfileQueryData,
): ActorProfileQueryData | undefined {
  const key = queryKeyActorProfile(...queryKeyBase);

  return client.setQueryData<ActorProfileQueryData>(key, data);
}

export function invalidateActorProfile(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<[parameters: { actor: string }]>,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: [
      "@speakeasy-sdks/bluesky",
      "actors",
      "getProfile",
      ...queryKeyBase,
    ],
  });
}

export function invalidateAllActorProfile(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@speakeasy-sdks/bluesky", "actors", "getProfile"],
  });
}

export function buildActorProfileQuery(
  client$: BlueskyCore,
  request: operations.AppBskyActorGetProfileRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (context: QueryFunctionContext) => Promise<ActorProfileQueryData>;
} {
  return {
    queryKey: queryKeyActorProfile({ actor: request.actor }),
    queryFn: async function actorProfileQueryFn(
      ctx,
    ): Promise<ActorProfileQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(actorsGetProfile(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyActorProfile(parameters: { actor: string }): QueryKey {
  return ["@speakeasy-sdks/bluesky", "actors", "getProfile", parameters];
}
