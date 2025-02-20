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
import { usersGetSuggestedFollows } from "../funcs/usersGetSuggestedFollows.js";
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

export type UsersGetSuggestedFollowsQueryData =
  operations.AppBskyGraphGetSuggestedFollowsByActorResponseBody;

/**
 * *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Enumerates follows similar to a given account (actor). Expected use is to recommend additional accounts immediately after following one account.
 */
export function useUsersGetSuggestedFollows(
  request: operations.AppBskyGraphGetSuggestedFollowsByActorRequest,
  options?: QueryHookOptions<UsersGetSuggestedFollowsQueryData>,
): UseQueryResult<UsersGetSuggestedFollowsQueryData, Error> {
  const client = useBlueskyContext();
  return useQuery({
    ...buildUsersGetSuggestedFollowsQuery(
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
 * Enumerates follows similar to a given account (actor). Expected use is to recommend additional accounts immediately after following one account.
 */
export function useUsersGetSuggestedFollowsSuspense(
  request: operations.AppBskyGraphGetSuggestedFollowsByActorRequest,
  options?: SuspenseQueryHookOptions<UsersGetSuggestedFollowsQueryData>,
): UseSuspenseQueryResult<UsersGetSuggestedFollowsQueryData, Error> {
  const client = useBlueskyContext();
  return useSuspenseQuery({
    ...buildUsersGetSuggestedFollowsQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchUsersGetSuggestedFollows(
  queryClient: QueryClient,
  client$: BlueskyCore,
  request: operations.AppBskyGraphGetSuggestedFollowsByActorRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildUsersGetSuggestedFollowsQuery(
      client$,
      request,
    ),
  });
}

export function setUsersGetSuggestedFollowsData(
  client: QueryClient,
  queryKeyBase: [parameters: { actor: string }],
  data: UsersGetSuggestedFollowsQueryData,
): UsersGetSuggestedFollowsQueryData | undefined {
  const key = queryKeyUsersGetSuggestedFollows(...queryKeyBase);

  return client.setQueryData<UsersGetSuggestedFollowsQueryData>(key, data);
}

export function invalidateUsersGetSuggestedFollows(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<[parameters: { actor: string }]>,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: [
      "@speakeasy-sdks/bluesky",
      "users",
      "getSuggestedFollows",
      ...queryKeyBase,
    ],
  });
}

export function invalidateAllUsersGetSuggestedFollows(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@speakeasy-sdks/bluesky", "users", "getSuggestedFollows"],
  });
}

export function buildUsersGetSuggestedFollowsQuery(
  client$: BlueskyCore,
  request: operations.AppBskyGraphGetSuggestedFollowsByActorRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<UsersGetSuggestedFollowsQueryData>;
} {
  return {
    queryKey: queryKeyUsersGetSuggestedFollows({ actor: request.actor }),
    queryFn: async function usersGetSuggestedFollowsQueryFn(
      ctx,
    ): Promise<UsersGetSuggestedFollowsQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(usersGetSuggestedFollows(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyUsersGetSuggestedFollows(
  parameters: { actor: string },
): QueryKey {
  return [
    "@speakeasy-sdks/bluesky",
    "users",
    "getSuggestedFollows",
    parameters,
  ];
}
