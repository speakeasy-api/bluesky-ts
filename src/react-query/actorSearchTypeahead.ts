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
import { actorSearchTypeahead } from "../funcs/actorSearchTypeahead.js";
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

export type ActorSearchTypeaheadQueryData =
  operations.AppBskyActorSearchActorsTypeaheadResponseBody;

/**
 * *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Find actor suggestions for a prefix search term. Expected use is for auto-completion during text field entry. Does not require auth.
 */
export function useActorSearchTypeahead(
  request?: operations.AppBskyActorSearchActorsTypeaheadRequest | undefined,
  options?: QueryHookOptions<ActorSearchTypeaheadQueryData>,
): UseQueryResult<ActorSearchTypeaheadQueryData, Error> {
  const client = useBlueskyContext();
  return useQuery({
    ...buildActorSearchTypeaheadQuery(
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
 * Find actor suggestions for a prefix search term. Expected use is for auto-completion during text field entry. Does not require auth.
 */
export function useActorSearchTypeaheadSuspense(
  request?: operations.AppBskyActorSearchActorsTypeaheadRequest | undefined,
  options?: SuspenseQueryHookOptions<ActorSearchTypeaheadQueryData>,
): UseSuspenseQueryResult<ActorSearchTypeaheadQueryData, Error> {
  const client = useBlueskyContext();
  return useSuspenseQuery({
    ...buildActorSearchTypeaheadQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchActorSearchTypeahead(
  queryClient: QueryClient,
  client$: BlueskyCore,
  request?: operations.AppBskyActorSearchActorsTypeaheadRequest | undefined,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildActorSearchTypeaheadQuery(
      client$,
      request,
    ),
  });
}

export function setActorSearchTypeaheadData(
  client: QueryClient,
  queryKeyBase: [
    parameters: { q?: string | undefined; limit?: number | undefined },
  ],
  data: ActorSearchTypeaheadQueryData,
): ActorSearchTypeaheadQueryData | undefined {
  const key = queryKeyActorSearchTypeahead(...queryKeyBase);

  return client.setQueryData<ActorSearchTypeaheadQueryData>(key, data);
}

export function invalidateActorSearchTypeahead(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<
    [parameters: { q?: string | undefined; limit?: number | undefined }]
  >,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: [
      "@speakeasy-sdks/bluesky",
      "actor",
      "searchTypeahead",
      ...queryKeyBase,
    ],
  });
}

export function invalidateAllActorSearchTypeahead(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@speakeasy-sdks/bluesky", "actor", "searchTypeahead"],
  });
}

export function buildActorSearchTypeaheadQuery(
  client$: BlueskyCore,
  request?: operations.AppBskyActorSearchActorsTypeaheadRequest | undefined,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<ActorSearchTypeaheadQueryData>;
} {
  return {
    queryKey: queryKeyActorSearchTypeahead({
      q: request?.q,
      limit: request?.limit,
    }),
    queryFn: async function actorSearchTypeaheadQueryFn(
      ctx,
    ): Promise<ActorSearchTypeaheadQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(actorSearchTypeahead(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyActorSearchTypeahead(
  parameters: { q?: string | undefined; limit?: number | undefined },
): QueryKey {
  return ["@speakeasy-sdks/bluesky", "actor", "searchTypeahead", parameters];
}
