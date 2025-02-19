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
import { moderationsQueryStatuses } from "../funcs/moderationsQueryStatuses.js";
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

export type ModerationsQueryStatusesQueryData =
  operations.ToolsOzoneModerationQueryStatusesResponse;

export type ModerationsQueryStatusesInfiniteQueryData = PageIterator<
  operations.ToolsOzoneModerationQueryStatusesResponse,
  { cursor: string }
>;

export type ModerationsQueryStatusesPageParams = PageIterator<
  operations.ToolsOzoneModerationQueryStatusesResponse,
  { cursor: string }
>["~next"];

/**
 * *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * View moderation statuses of subjects (record or repo).
 */
export function useModerationsQueryStatuses(
  request?: operations.ToolsOzoneModerationQueryStatusesRequest | undefined,
  options?: QueryHookOptions<ModerationsQueryStatusesQueryData>,
): UseQueryResult<ModerationsQueryStatusesQueryData, Error> {
  const client = useBlueskyContext();
  return useQuery({
    ...buildModerationsQueryStatusesQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

/**
 * *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * View moderation statuses of subjects (record or repo).
 */
export function useModerationsQueryStatusesSuspense(
  request?: operations.ToolsOzoneModerationQueryStatusesRequest | undefined,
  options?: SuspenseQueryHookOptions<ModerationsQueryStatusesQueryData>,
): UseSuspenseQueryResult<ModerationsQueryStatusesQueryData, Error> {
  const client = useBlueskyContext();
  return useSuspenseQuery({
    ...buildModerationsQueryStatusesQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

/**
 * *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * View moderation statuses of subjects (record or repo).
 */
export function useModerationsQueryStatusesInfinite(
  request?: operations.ToolsOzoneModerationQueryStatusesRequest | undefined,
  options?: InfiniteQueryHookOptions<ModerationsQueryStatusesInfiniteQueryData>,
): UseInfiniteQueryResult<
  InfiniteData<
    ModerationsQueryStatusesInfiniteQueryData,
    ModerationsQueryStatusesPageParams
  >,
  Error
> {
  const client = useBlueskyContext();
  return useInfiniteQuery<
    ModerationsQueryStatusesInfiniteQueryData,
    Error,
    InfiniteData<
      ModerationsQueryStatusesInfiniteQueryData,
      ModerationsQueryStatusesPageParams
    >,
    QueryKey,
    ModerationsQueryStatusesPageParams
  >({
    ...buildModerationsQueryStatusesInfiniteQuery(
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
 * *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * View moderation statuses of subjects (record or repo).
 */
export function useModerationsQueryStatusesInfiniteSuspense(
  request?: operations.ToolsOzoneModerationQueryStatusesRequest | undefined,
  options?: SuspenseInfiniteQueryHookOptions<
    ModerationsQueryStatusesInfiniteQueryData
  >,
): UseSuspenseInfiniteQueryResult<
  InfiniteData<
    ModerationsQueryStatusesInfiniteQueryData,
    ModerationsQueryStatusesPageParams
  >,
  Error
> {
  const client = useBlueskyContext();
  return useSuspenseInfiniteQuery<
    ModerationsQueryStatusesInfiniteQueryData,
    Error,
    InfiniteData<
      ModerationsQueryStatusesInfiniteQueryData,
      ModerationsQueryStatusesPageParams
    >,
    QueryKey,
    ModerationsQueryStatusesPageParams
  >({
    ...buildModerationsQueryStatusesInfiniteQuery(
      client,
      request,
      options,
    ),
    initialPageParam: options?.initialPageParam,
    getNextPageParam: (previousPage) => previousPage["~next"],
    ...options,
  });
}

export function prefetchModerationsQueryStatuses(
  queryClient: QueryClient,
  client$: BlueskyCore,
  request?: operations.ToolsOzoneModerationQueryStatusesRequest | undefined,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildModerationsQueryStatusesQuery(
      client$,
      request,
    ),
  });
}

export function setModerationsQueryStatusesData(
  client: QueryClient,
  queryKeyBase: [
    parameters: {
      includeAllUserRecords?: boolean | undefined;
      subject?: string | undefined;
      comment?: string | undefined;
      reportedAfter?: Date | undefined;
      reportedBefore?: Date | undefined;
      reviewedAfter?: Date | undefined;
      hostingDeletedAfter?: Date | undefined;
      hostingDeletedBefore?: Date | undefined;
      hostingUpdatedAfter?: Date | undefined;
      hostingUpdatedBefore?: Date | undefined;
      hostingStatuses?: Array<string> | undefined;
      reviewedBefore?: Date | undefined;
      includeMuted?: boolean | undefined;
      onlyMuted?: boolean | undefined;
      reviewState?: string | undefined;
      ignoreSubjects?: Array<string> | undefined;
      lastReviewedBy?: string | undefined;
      sortField?: string | undefined;
      sortDirection?: string | undefined;
      takendown?: boolean | undefined;
      appealed?: boolean | undefined;
      limit?: number | undefined;
      tags?: Array<string> | undefined;
      excludeTags?: Array<string> | undefined;
      cursor?: string | undefined;
      collections?: Array<string> | undefined;
      subjectType?:
        | operations.ToolsOzoneModerationQueryStatusesSubjectType
        | undefined;
    },
  ],
  data: ModerationsQueryStatusesQueryData,
): ModerationsQueryStatusesQueryData | undefined {
  const key = queryKeyModerationsQueryStatuses(...queryKeyBase);

  return client.setQueryData<ModerationsQueryStatusesQueryData>(key, data);
}

export function invalidateModerationsQueryStatuses(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<
    [parameters: {
      includeAllUserRecords?: boolean | undefined;
      subject?: string | undefined;
      comment?: string | undefined;
      reportedAfter?: Date | undefined;
      reportedBefore?: Date | undefined;
      reviewedAfter?: Date | undefined;
      hostingDeletedAfter?: Date | undefined;
      hostingDeletedBefore?: Date | undefined;
      hostingUpdatedAfter?: Date | undefined;
      hostingUpdatedBefore?: Date | undefined;
      hostingStatuses?: Array<string> | undefined;
      reviewedBefore?: Date | undefined;
      includeMuted?: boolean | undefined;
      onlyMuted?: boolean | undefined;
      reviewState?: string | undefined;
      ignoreSubjects?: Array<string> | undefined;
      lastReviewedBy?: string | undefined;
      sortField?: string | undefined;
      sortDirection?: string | undefined;
      takendown?: boolean | undefined;
      appealed?: boolean | undefined;
      limit?: number | undefined;
      tags?: Array<string> | undefined;
      excludeTags?: Array<string> | undefined;
      cursor?: string | undefined;
      collections?: Array<string> | undefined;
      subjectType?:
        | operations.ToolsOzoneModerationQueryStatusesSubjectType
        | undefined;
    }]
  >,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: [
      "@speakeasy-api/bluesky",
      "moderations",
      "queryStatuses",
      ...queryKeyBase,
    ],
  });
}

export function invalidateAllModerationsQueryStatuses(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@speakeasy-api/bluesky", "moderations", "queryStatuses"],
  });
}

export function buildModerationsQueryStatusesQuery(
  client$: BlueskyCore,
  request?: operations.ToolsOzoneModerationQueryStatusesRequest | undefined,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<ModerationsQueryStatusesQueryData>;
} {
  return {
    queryKey: queryKeyModerationsQueryStatuses({
      includeAllUserRecords: request?.includeAllUserRecords,
      subject: request?.subject,
      comment: request?.comment,
      reportedAfter: request?.reportedAfter,
      reportedBefore: request?.reportedBefore,
      reviewedAfter: request?.reviewedAfter,
      hostingDeletedAfter: request?.hostingDeletedAfter,
      hostingDeletedBefore: request?.hostingDeletedBefore,
      hostingUpdatedAfter: request?.hostingUpdatedAfter,
      hostingUpdatedBefore: request?.hostingUpdatedBefore,
      hostingStatuses: request?.hostingStatuses,
      reviewedBefore: request?.reviewedBefore,
      includeMuted: request?.includeMuted,
      onlyMuted: request?.onlyMuted,
      reviewState: request?.reviewState,
      ignoreSubjects: request?.ignoreSubjects,
      lastReviewedBy: request?.lastReviewedBy,
      sortField: request?.sortField,
      sortDirection: request?.sortDirection,
      takendown: request?.takendown,
      appealed: request?.appealed,
      limit: request?.limit,
      tags: request?.tags,
      excludeTags: request?.excludeTags,
      cursor: request?.cursor,
      collections: request?.collections,
      subjectType: request?.subjectType,
    }),
    queryFn: async function moderationsQueryStatusesQueryFn(
      ctx,
    ): Promise<ModerationsQueryStatusesQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(moderationsQueryStatuses(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function buildModerationsQueryStatusesInfiniteQuery(
  client$: BlueskyCore,
  request?: operations.ToolsOzoneModerationQueryStatusesRequest | undefined,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext<QueryKey, ModerationsQueryStatusesPageParams>,
  ) => Promise<ModerationsQueryStatusesInfiniteQueryData>;
} {
  return {
    queryKey: queryKeyModerationsQueryStatuses({
      includeAllUserRecords: request?.includeAllUserRecords,
      subject: request?.subject,
      comment: request?.comment,
      reportedAfter: request?.reportedAfter,
      reportedBefore: request?.reportedBefore,
      reviewedAfter: request?.reviewedAfter,
      hostingDeletedAfter: request?.hostingDeletedAfter,
      hostingDeletedBefore: request?.hostingDeletedBefore,
      hostingUpdatedAfter: request?.hostingUpdatedAfter,
      hostingUpdatedBefore: request?.hostingUpdatedBefore,
      hostingStatuses: request?.hostingStatuses,
      reviewedBefore: request?.reviewedBefore,
      includeMuted: request?.includeMuted,
      onlyMuted: request?.onlyMuted,
      reviewState: request?.reviewState,
      ignoreSubjects: request?.ignoreSubjects,
      lastReviewedBy: request?.lastReviewedBy,
      sortField: request?.sortField,
      sortDirection: request?.sortDirection,
      takendown: request?.takendown,
      appealed: request?.appealed,
      limit: request?.limit,
      tags: request?.tags,
      excludeTags: request?.excludeTags,
      cursor: request?.cursor,
      collections: request?.collections,
      subjectType: request?.subjectType,
    }),
    queryFn: async function moderationsQueryStatusesQuery(
      ctx,
    ): Promise<ModerationsQueryStatusesInfiniteQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      if (!ctx.pageParam) {
        return unwrapResultIterator(moderationsQueryStatuses(
          client$,
          request,
          mergedOptions,
        ));
      }

      return unwrapResultIterator(moderationsQueryStatuses(
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

export function queryKeyModerationsQueryStatuses(
  parameters: {
    includeAllUserRecords?: boolean | undefined;
    subject?: string | undefined;
    comment?: string | undefined;
    reportedAfter?: Date | undefined;
    reportedBefore?: Date | undefined;
    reviewedAfter?: Date | undefined;
    hostingDeletedAfter?: Date | undefined;
    hostingDeletedBefore?: Date | undefined;
    hostingUpdatedAfter?: Date | undefined;
    hostingUpdatedBefore?: Date | undefined;
    hostingStatuses?: Array<string> | undefined;
    reviewedBefore?: Date | undefined;
    includeMuted?: boolean | undefined;
    onlyMuted?: boolean | undefined;
    reviewState?: string | undefined;
    ignoreSubjects?: Array<string> | undefined;
    lastReviewedBy?: string | undefined;
    sortField?: string | undefined;
    sortDirection?: string | undefined;
    takendown?: boolean | undefined;
    appealed?: boolean | undefined;
    limit?: number | undefined;
    tags?: Array<string> | undefined;
    excludeTags?: Array<string> | undefined;
    cursor?: string | undefined;
    collections?: Array<string> | undefined;
    subjectType?:
      | operations.ToolsOzoneModerationQueryStatusesSubjectType
      | undefined;
  },
): QueryKey {
  return ["@speakeasy-api/bluesky", "moderations", "queryStatuses", parameters];
}
