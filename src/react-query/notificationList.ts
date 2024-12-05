/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  InfiniteData,
  InvalidateQueryFilters,
  QueryClient,
  QueryFunctionContext,
  QueryKey,
  useInfiniteQuery,
  UseInfiniteQueryResult,
  useQuery,
  UseQueryResult,
  useSuspenseInfiniteQuery,
  UseSuspenseInfiniteQueryResult,
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";
import { BlueskyCore } from "../core.js";
import { notificationList } from "../funcs/notificationList.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";
import { useBlueskyContext } from "./_context.js";
import {
  InfiniteQueryHookOptions,
  QueryHookOptions,
  SuspenseInfiniteQueryHookOptions,
  SuspenseQueryHookOptions,
  TupleToPrefixes,
} from "./_types.js";

export type NotificationListQueryData =
  operations.AppBskyNotificationListNotificationsResponse;

export type NotificationListInfiniteQueryData = PageIterator<
  operations.AppBskyNotificationListNotificationsResponse,
  { cursor: string }
>;

export type NotificationListPageParams = PageIterator<
  operations.AppBskyNotificationListNotificationsResponse,
  { cursor: string }
>["~next"];

/**
 * *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Enumerate notifications for the requesting account. Requires auth.
 */
export function useNotificationList(
  request?: operations.AppBskyNotificationListNotificationsRequest | undefined,
  options?: QueryHookOptions<NotificationListQueryData>,
): UseQueryResult<NotificationListQueryData, Error> {
  const client = useBlueskyContext();
  return useQuery({
    ...buildNotificationListQuery(
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
 * Enumerate notifications for the requesting account. Requires auth.
 */
export function useNotificationListSuspense(
  request?: operations.AppBskyNotificationListNotificationsRequest | undefined,
  options?: SuspenseQueryHookOptions<NotificationListQueryData>,
): UseSuspenseQueryResult<NotificationListQueryData, Error> {
  const client = useBlueskyContext();
  return useSuspenseQuery({
    ...buildNotificationListQuery(
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
 * Enumerate notifications for the requesting account. Requires auth.
 */
export function useNotificationListInfinite(
  request?: operations.AppBskyNotificationListNotificationsRequest | undefined,
  options?: InfiniteQueryHookOptions<NotificationListInfiniteQueryData>,
): UseInfiniteQueryResult<
  InfiniteData<NotificationListInfiniteQueryData, NotificationListPageParams>,
  Error
> {
  const client = useBlueskyContext();
  return useInfiniteQuery<
    NotificationListInfiniteQueryData,
    Error,
    InfiniteData<NotificationListInfiniteQueryData, NotificationListPageParams>,
    QueryKey,
    NotificationListPageParams
  >({
    ...buildNotificationListInfiniteQuery(
      client,
      request,
      options,
    ),
    initialPageParam: options?.initialPageParam,
    getNextPageParam: (previousPage) => previousPage["~next"],
    ...options,
  });
}

/**
 * *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Enumerate notifications for the requesting account. Requires auth.
 */
export function useNotificationListInfiniteSuspense(
  request?: operations.AppBskyNotificationListNotificationsRequest | undefined,
  options?: SuspenseInfiniteQueryHookOptions<NotificationListInfiniteQueryData>,
): UseSuspenseInfiniteQueryResult<
  InfiniteData<NotificationListInfiniteQueryData, NotificationListPageParams>,
  Error
> {
  const client = useBlueskyContext();
  return useSuspenseInfiniteQuery<
    NotificationListInfiniteQueryData,
    Error,
    InfiniteData<NotificationListInfiniteQueryData, NotificationListPageParams>,
    QueryKey,
    NotificationListPageParams
  >({
    ...buildNotificationListInfiniteQuery(
      client,
      request,
      options,
    ),
    initialPageParam: options?.initialPageParam,
    getNextPageParam: (previousPage) => previousPage["~next"],
    ...options,
  });
}

export function prefetchNotificationList(
  queryClient: QueryClient,
  client$: BlueskyCore,
  request?: operations.AppBskyNotificationListNotificationsRequest | undefined,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildNotificationListQuery(
      client$,
      request,
    ),
  });
}

export function setNotificationListData(
  client: QueryClient,
  queryKeyBase: [
    parameters: {
      limit?: number | undefined;
      priority?: boolean | undefined;
      cursor?: string | undefined;
      seenAt?: Date | undefined;
    },
  ],
  data: NotificationListQueryData,
): NotificationListQueryData | undefined {
  const key = queryKeyNotificationList(...queryKeyBase);

  return client.setQueryData<NotificationListQueryData>(key, data);
}

export function invalidateNotificationList(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<
    [parameters: {
      limit?: number | undefined;
      priority?: boolean | undefined;
      cursor?: string | undefined;
      seenAt?: Date | undefined;
    }]
  >,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: [
      "@speakeasy-api/bluesky",
      "notification",
      "list",
      ...queryKeyBase,
    ],
  });
}

export function invalidateAllNotificationList(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@speakeasy-api/bluesky", "notification", "list"],
  });
}

export function buildNotificationListQuery(
  client$: BlueskyCore,
  request?: operations.AppBskyNotificationListNotificationsRequest | undefined,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<NotificationListQueryData>;
} {
  return {
    queryKey: queryKeyNotificationList({
      limit: request?.limit,
      priority: request?.priority,
      cursor: request?.cursor,
      seenAt: request?.seenAt,
    }),
    queryFn: async function notificationListQueryFn(
      ctx,
    ): Promise<NotificationListQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(notificationList(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function buildNotificationListInfiniteQuery(
  client$: BlueskyCore,
  request?: operations.AppBskyNotificationListNotificationsRequest | undefined,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext<QueryKey, NotificationListPageParams>,
  ) => Promise<NotificationListInfiniteQueryData>;
} {
  return {
    queryKey: queryKeyNotificationList({
      limit: request?.limit,
      priority: request?.priority,
      cursor: request?.cursor,
      seenAt: request?.seenAt,
    }),
    queryFn: async function notificationListQuery(
      ctx,
    ): Promise<NotificationListInfiniteQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      if (!ctx.pageParam) {
        return unwrapResultIterator(notificationList(
          client$,
          request,
          mergedOptions,
        ));
      }

      return unwrapResultIterator(notificationList(
        client$,
        {
          ...request,
          cursor: ctx.pageParam.cursor,
        },
        mergedOptions,
      ));
    },
  };
}

export function queryKeyNotificationList(
  parameters: {
    limit?: number | undefined;
    priority?: boolean | undefined;
    cursor?: string | undefined;
    seenAt?: Date | undefined;
  },
): QueryKey {
  return ["@speakeasy-api/bluesky", "notification", "list", parameters];
}
