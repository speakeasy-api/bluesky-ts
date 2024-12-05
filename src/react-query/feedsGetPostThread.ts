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
import { feedsGetPostThread } from "../funcs/feedsGetPostThread.js";
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

export type FeedsGetPostThreadQueryData =
  operations.AppBskyFeedGetPostThreadResponseBody;

/**
 * *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Get posts in a thread. Does not require auth, but additional metadata and filtering will be applied for authed requests.
 */
export function useFeedsGetPostThread(
  request: operations.AppBskyFeedGetPostThreadRequest,
  options?: QueryHookOptions<FeedsGetPostThreadQueryData>,
): UseQueryResult<FeedsGetPostThreadQueryData, Error> {
  const client = useBlueskyContext();
  return useQuery({
    ...buildFeedsGetPostThreadQuery(
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
 * Get posts in a thread. Does not require auth, but additional metadata and filtering will be applied for authed requests.
 */
export function useFeedsGetPostThreadSuspense(
  request: operations.AppBskyFeedGetPostThreadRequest,
  options?: SuspenseQueryHookOptions<FeedsGetPostThreadQueryData>,
): UseSuspenseQueryResult<FeedsGetPostThreadQueryData, Error> {
  const client = useBlueskyContext();
  return useSuspenseQuery({
    ...buildFeedsGetPostThreadQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchFeedsGetPostThread(
  queryClient: QueryClient,
  client$: BlueskyCore,
  request: operations.AppBskyFeedGetPostThreadRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildFeedsGetPostThreadQuery(
      client$,
      request,
    ),
  });
}

export function setFeedsGetPostThreadData(
  client: QueryClient,
  queryKeyBase: [
    parameters: {
      uri: string;
      depth?: number | undefined;
      parentHeight?: number | undefined;
    },
  ],
  data: FeedsGetPostThreadQueryData,
): FeedsGetPostThreadQueryData | undefined {
  const key = queryKeyFeedsGetPostThread(...queryKeyBase);

  return client.setQueryData<FeedsGetPostThreadQueryData>(key, data);
}

export function invalidateFeedsGetPostThread(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<
    [parameters: {
      uri: string;
      depth?: number | undefined;
      parentHeight?: number | undefined;
    }]
  >,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["bluesky", "feeds", "getPostThread", ...queryKeyBase],
  });
}

export function invalidateAllFeedsGetPostThread(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["bluesky", "feeds", "getPostThread"],
  });
}

export function buildFeedsGetPostThreadQuery(
  client$: BlueskyCore,
  request: operations.AppBskyFeedGetPostThreadRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<FeedsGetPostThreadQueryData>;
} {
  return {
    queryKey: queryKeyFeedsGetPostThread({
      uri: request.uri,
      depth: request.depth,
      parentHeight: request.parentHeight,
    }),
    queryFn: async function feedsGetPostThreadQueryFn(
      ctx,
    ): Promise<FeedsGetPostThreadQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(feedsGetPostThread(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyFeedsGetPostThread(
  parameters: {
    uri: string;
    depth?: number | undefined;
    parentHeight?: number | undefined;
  },
): QueryKey {
  return ["bluesky", "feeds", "getPostThread", parameters];
}
