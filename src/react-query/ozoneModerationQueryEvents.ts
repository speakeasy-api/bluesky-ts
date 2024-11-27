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
import { ozoneModerationQueryEvents } from "../funcs/ozoneModerationQueryEvents.js";
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

export type OzoneModerationQueryEventsQueryData = PageIterator<
  operations.ToolsOzoneModerationQueryEventsResponse,
  { cursor: string }
>;
export type OzoneModerationQueryEventsPageParams = PageIterator<
  operations.ToolsOzoneModerationQueryEventsResponse,
  { cursor: string }
>["~next"];

/**
 * *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * List moderation events related to a subject.
 */
export function useOzoneModerationQueryEvents(
  request?: operations.ToolsOzoneModerationQueryEventsRequest | undefined,
  options?: QueryHookOptions<
    operations.ToolsOzoneModerationQueryEventsResponse
  >,
): UseQueryResult<operations.ToolsOzoneModerationQueryEventsResponse, Error> {
  const client = useBlueskyContext();
  return useQuery({
    ...buildOzoneModerationQueryEventsQuery(
      client,
      request,
      options?.request,
    ),
    ...options,
  });
}

/**
 * *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * List moderation events related to a subject.
 */
export function useOzoneModerationQueryEventsSuspense(
  request?: operations.ToolsOzoneModerationQueryEventsRequest | undefined,
  options?: SuspenseQueryHookOptions<
    operations.ToolsOzoneModerationQueryEventsResponse
  >,
): UseSuspenseQueryResult<
  operations.ToolsOzoneModerationQueryEventsResponse,
  Error
> {
  const client = useBlueskyContext();
  return useSuspenseQuery({
    ...buildOzoneModerationQueryEventsQuery(
      client,
      request,
      options?.request,
    ),
    ...options,
  });
}

/**
 * *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * List moderation events related to a subject.
 */
export function useOzoneModerationQueryEventsInfinite(
  request?: operations.ToolsOzoneModerationQueryEventsRequest | undefined,
  options?: InfiniteQueryHookOptions<
    PageIterator<
      operations.ToolsOzoneModerationQueryEventsResponse,
      { cursor: string }
    >
  >,
): UseInfiniteQueryResult<
  InfiniteData<
    OzoneModerationQueryEventsQueryData,
    OzoneModerationQueryEventsPageParams
  >,
  Error
> {
  const client = useBlueskyContext();
  return useInfiniteQuery<
    OzoneModerationQueryEventsQueryData,
    Error,
    InfiniteData<
      OzoneModerationQueryEventsQueryData,
      OzoneModerationQueryEventsPageParams
    >,
    QueryKey,
    OzoneModerationQueryEventsPageParams
  >({
    ...buildOzoneModerationQueryEventsInfiniteQuery(
      client,
      request,
      options?.request,
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
 * List moderation events related to a subject.
 */
export function useOzoneModerationQueryEventsInfiniteSuspense(
  request?: operations.ToolsOzoneModerationQueryEventsRequest | undefined,
  options?: SuspenseInfiniteQueryHookOptions<
    PageIterator<
      operations.ToolsOzoneModerationQueryEventsResponse,
      { cursor: string }
    >
  >,
): UseSuspenseInfiniteQueryResult<
  InfiniteData<
    OzoneModerationQueryEventsQueryData,
    OzoneModerationQueryEventsPageParams
  >,
  Error
> {
  const client = useBlueskyContext();
  return useSuspenseInfiniteQuery<
    OzoneModerationQueryEventsQueryData,
    Error,
    InfiniteData<
      OzoneModerationQueryEventsQueryData,
      OzoneModerationQueryEventsPageParams
    >,
    QueryKey,
    OzoneModerationQueryEventsPageParams
  >({
    ...buildOzoneModerationQueryEventsInfiniteQuery(
      client,
      request,
      options?.request,
    ),
    initialPageParam: options?.initialPageParam,
    getNextPageParam: (previousPage) => previousPage["~next"],
    ...options,
  });
}

export function prefetchOzoneModerationQueryEvents(
  queryClient: QueryClient,
  client$: BlueskyCore,
  request?: operations.ToolsOzoneModerationQueryEventsRequest | undefined,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildOzoneModerationQueryEventsQuery(
      client$,
      request,
    ),
  });
}

export function setOzoneModerationQueryEventsData(
  client: QueryClient,
  queryKeyBase: [
    parameters: {
      types?: Array<string> | undefined;
      createdBy?: string | undefined;
      sortDirection?: string | undefined;
      createdAfter?: Date | undefined;
      createdBefore?: Date | undefined;
      subject?: string | undefined;
      collections?: Array<string> | undefined;
      subjectType?: operations.SubjectType | undefined;
      includeAllUserRecords?: boolean | undefined;
      limit?: number | undefined;
      hasComment?: boolean | undefined;
      comment?: string | undefined;
      addedLabels?: Array<string> | undefined;
      removedLabels?: Array<string> | undefined;
      addedTags?: Array<string> | undefined;
      removedTags?: Array<string> | undefined;
      reportTypes?: Array<string> | undefined;
      cursor?: string | undefined;
    },
  ],
  data: operations.ToolsOzoneModerationQueryEventsResponse,
): operations.ToolsOzoneModerationQueryEventsResponse | undefined {
  const key = queryKeyOzoneModerationQueryEvents(...queryKeyBase);

  return client.setQueryData<
    operations.ToolsOzoneModerationQueryEventsResponse
  >(key, data);
}

export function invalidateOzoneModerationQueryEvents(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<
    [parameters: {
      types?: Array<string> | undefined;
      createdBy?: string | undefined;
      sortDirection?: string | undefined;
      createdAfter?: Date | undefined;
      createdBefore?: Date | undefined;
      subject?: string | undefined;
      collections?: Array<string> | undefined;
      subjectType?: operations.SubjectType | undefined;
      includeAllUserRecords?: boolean | undefined;
      limit?: number | undefined;
      hasComment?: boolean | undefined;
      comment?: string | undefined;
      addedLabels?: Array<string> | undefined;
      removedLabels?: Array<string> | undefined;
      addedTags?: Array<string> | undefined;
      removedTags?: Array<string> | undefined;
      reportTypes?: Array<string> | undefined;
      cursor?: string | undefined;
    }]
  >,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["bluesky", "moderation", "queryEvents", ...queryKeyBase],
  });
}

export function invalidateAllOzoneModerationQueryEvents(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["bluesky", "moderation", "queryEvents"],
  });
}

export function buildOzoneModerationQueryEventsQuery(
  client$: BlueskyCore,
  request?: operations.ToolsOzoneModerationQueryEventsRequest | undefined,
  options?: RequestOptions,
): {
  retry: boolean;
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<operations.ToolsOzoneModerationQueryEventsResponse>;
} {
  return {
    retry: false,
    queryKey: queryKeyOzoneModerationQueryEvents({
      types: request?.types,
      createdBy: request?.createdBy,
      sortDirection: request?.sortDirection,
      createdAfter: request?.createdAfter,
      createdBefore: request?.createdBefore,
      subject: request?.subject,
      collections: request?.collections,
      subjectType: request?.subjectType,
      includeAllUserRecords: request?.includeAllUserRecords,
      limit: request?.limit,
      hasComment: request?.hasComment,
      comment: request?.comment,
      addedLabels: request?.addedLabels,
      removedLabels: request?.removedLabels,
      addedTags: request?.addedTags,
      removedTags: request?.removedTags,
      reportTypes: request?.reportTypes,
      cursor: request?.cursor,
    }),
    queryFn: async function ozoneModerationQueryEventsQuery(
      ctx,
    ): Promise<operations.ToolsOzoneModerationQueryEventsResponse> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(ozoneModerationQueryEvents(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function buildOzoneModerationQueryEventsInfiniteQuery(
  client$: BlueskyCore,
  request?: operations.ToolsOzoneModerationQueryEventsRequest | undefined,
  options?: RequestOptions,
): {
  retry: boolean;
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext<
      QueryKey,
      OzoneModerationQueryEventsPageParams
    >,
  ) => Promise<
    PageIterator<
      operations.ToolsOzoneModerationQueryEventsResponse,
      { cursor: string }
    >
  >;
} {
  return {
    retry: false,
    queryKey: queryKeyOzoneModerationQueryEvents({
      types: request?.types,
      createdBy: request?.createdBy,
      sortDirection: request?.sortDirection,
      createdAfter: request?.createdAfter,
      createdBefore: request?.createdBefore,
      subject: request?.subject,
      collections: request?.collections,
      subjectType: request?.subjectType,
      includeAllUserRecords: request?.includeAllUserRecords,
      limit: request?.limit,
      hasComment: request?.hasComment,
      comment: request?.comment,
      addedLabels: request?.addedLabels,
      removedLabels: request?.removedLabels,
      addedTags: request?.addedTags,
      removedTags: request?.removedTags,
      reportTypes: request?.reportTypes,
      cursor: request?.cursor,
    }),
    queryFn: async function ozoneModerationQueryEventsQuery(
      ctx,
    ): Promise<
      PageIterator<
        operations.ToolsOzoneModerationQueryEventsResponse,
        { cursor: string }
      >
    > {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      if (!ctx.pageParam) {
        return unwrapResultIterator(ozoneModerationQueryEvents(
          client$,
          request,
          mergedOptions,
        ));
      }

      return unwrapResultIterator(ozoneModerationQueryEvents(
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

export function queryKeyOzoneModerationQueryEvents(
  parameters: {
    types?: Array<string> | undefined;
    createdBy?: string | undefined;
    sortDirection?: string | undefined;
    createdAfter?: Date | undefined;
    createdBefore?: Date | undefined;
    subject?: string | undefined;
    collections?: Array<string> | undefined;
    subjectType?: operations.SubjectType | undefined;
    includeAllUserRecords?: boolean | undefined;
    limit?: number | undefined;
    hasComment?: boolean | undefined;
    comment?: string | undefined;
    addedLabels?: Array<string> | undefined;
    removedLabels?: Array<string> | undefined;
    addedTags?: Array<string> | undefined;
    removedTags?: Array<string> | undefined;
    reportTypes?: Array<string> | undefined;
    cursor?: string | undefined;
  },
): QueryKey {
  return ["bluesky", "moderation", "queryEvents", parameters];
}
