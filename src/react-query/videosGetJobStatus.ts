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
import { videosGetJobStatus } from "../funcs/videosGetJobStatus.js";
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

export type VideosGetJobStatusQueryData =
  operations.AppBskyVideoGetJobStatusResponseBody;

/**
 * *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Get status details for a video processing job.
 */
export function useVideosGetJobStatus(
  request: operations.AppBskyVideoGetJobStatusRequest,
  options?: QueryHookOptions<VideosGetJobStatusQueryData>,
): UseQueryResult<VideosGetJobStatusQueryData, Error> {
  const client = useBlueskyContext();
  return useQuery({
    ...buildVideosGetJobStatusQuery(
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
 * Get status details for a video processing job.
 */
export function useVideosGetJobStatusSuspense(
  request: operations.AppBskyVideoGetJobStatusRequest,
  options?: SuspenseQueryHookOptions<VideosGetJobStatusQueryData>,
): UseSuspenseQueryResult<VideosGetJobStatusQueryData, Error> {
  const client = useBlueskyContext();
  return useSuspenseQuery({
    ...buildVideosGetJobStatusQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchVideosGetJobStatus(
  queryClient: QueryClient,
  client$: BlueskyCore,
  request: operations.AppBskyVideoGetJobStatusRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildVideosGetJobStatusQuery(
      client$,
      request,
    ),
  });
}

export function setVideosGetJobStatusData(
  client: QueryClient,
  queryKeyBase: [parameters: { jobId: string }],
  data: VideosGetJobStatusQueryData,
): VideosGetJobStatusQueryData | undefined {
  const key = queryKeyVideosGetJobStatus(...queryKeyBase);

  return client.setQueryData<VideosGetJobStatusQueryData>(key, data);
}

export function invalidateVideosGetJobStatus(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<[parameters: { jobId: string }]>,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["bluesky", "videos", "getJobStatus", ...queryKeyBase],
  });
}

export function invalidateAllVideosGetJobStatus(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["bluesky", "videos", "getJobStatus"],
  });
}

export function buildVideosGetJobStatusQuery(
  client$: BlueskyCore,
  request: operations.AppBskyVideoGetJobStatusRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<VideosGetJobStatusQueryData>;
} {
  return {
    queryKey: queryKeyVideosGetJobStatus({ jobId: request.jobId }),
    queryFn: async function videosGetJobStatusQueryFn(
      ctx,
    ): Promise<VideosGetJobStatusQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(videosGetJobStatus(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyVideosGetJobStatus(
  parameters: { jobId: string },
): QueryKey {
  return ["bluesky", "videos", "getJobStatus", parameters];
}
