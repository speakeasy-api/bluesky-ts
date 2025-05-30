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
import { ozoneModerationsSearchRepos } from "../funcs/ozoneModerationsSearchRepos.js";
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

export type OzoneModerationsSearchReposQueryData =
  operations.ToolsOzoneModerationSearchReposResponse;

export type OzoneModerationsSearchReposInfiniteQueryData = PageIterator<
  operations.ToolsOzoneModerationSearchReposResponse,
  { cursor: string }
>;

export type OzoneModerationsSearchReposPageParams = PageIterator<
  operations.ToolsOzoneModerationSearchReposResponse,
  { cursor: string }
>["~next"];

/**
 * *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Find repositories based on a search term.
 */
export function useOzoneModerationsSearchRepos(
  request?: operations.ToolsOzoneModerationSearchReposRequest | undefined,
  options?: QueryHookOptions<OzoneModerationsSearchReposQueryData>,
): UseQueryResult<OzoneModerationsSearchReposQueryData, Error> {
  const client = useBlueskyContext();
  return useQuery({
    ...buildOzoneModerationsSearchReposQuery(
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
 * Find repositories based on a search term.
 */
export function useOzoneModerationsSearchReposSuspense(
  request?: operations.ToolsOzoneModerationSearchReposRequest | undefined,
  options?: SuspenseQueryHookOptions<OzoneModerationsSearchReposQueryData>,
): UseSuspenseQueryResult<OzoneModerationsSearchReposQueryData, Error> {
  const client = useBlueskyContext();
  return useSuspenseQuery({
    ...buildOzoneModerationsSearchReposQuery(
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
 * Find repositories based on a search term.
 */
export function useOzoneModerationsSearchReposInfinite(
  request?: operations.ToolsOzoneModerationSearchReposRequest | undefined,
  options?: InfiniteQueryHookOptions<
    OzoneModerationsSearchReposInfiniteQueryData
  >,
): UseInfiniteQueryResult<
  InfiniteData<
    OzoneModerationsSearchReposInfiniteQueryData,
    OzoneModerationsSearchReposPageParams
  >,
  Error
> {
  const client = useBlueskyContext();
  return useInfiniteQuery<
    OzoneModerationsSearchReposInfiniteQueryData,
    Error,
    InfiniteData<
      OzoneModerationsSearchReposInfiniteQueryData,
      OzoneModerationsSearchReposPageParams
    >,
    QueryKey,
    OzoneModerationsSearchReposPageParams
  >({
    ...buildOzoneModerationsSearchReposInfiniteQuery(
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
 * Find repositories based on a search term.
 */
export function useOzoneModerationsSearchReposInfiniteSuspense(
  request?: operations.ToolsOzoneModerationSearchReposRequest | undefined,
  options?: SuspenseInfiniteQueryHookOptions<
    OzoneModerationsSearchReposInfiniteQueryData
  >,
): UseSuspenseInfiniteQueryResult<
  InfiniteData<
    OzoneModerationsSearchReposInfiniteQueryData,
    OzoneModerationsSearchReposPageParams
  >,
  Error
> {
  const client = useBlueskyContext();
  return useSuspenseInfiniteQuery<
    OzoneModerationsSearchReposInfiniteQueryData,
    Error,
    InfiniteData<
      OzoneModerationsSearchReposInfiniteQueryData,
      OzoneModerationsSearchReposPageParams
    >,
    QueryKey,
    OzoneModerationsSearchReposPageParams
  >({
    ...buildOzoneModerationsSearchReposInfiniteQuery(
      client,
      request,
      options,
    ),
    initialPageParam: options?.initialPageParam,
    getNextPageParam: (previousPage) => previousPage["~next"],
    ...options,
  });
}

export function prefetchOzoneModerationsSearchRepos(
  queryClient: QueryClient,
  client$: BlueskyCore,
  request?: operations.ToolsOzoneModerationSearchReposRequest | undefined,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildOzoneModerationsSearchReposQuery(
      client$,
      request,
    ),
  });
}

export function setOzoneModerationsSearchReposData(
  client: QueryClient,
  queryKeyBase: [
    parameters: {
      q?: string | undefined;
      limit?: number | undefined;
      cursor?: string | undefined;
    },
  ],
  data: OzoneModerationsSearchReposQueryData,
): OzoneModerationsSearchReposQueryData | undefined {
  const key = queryKeyOzoneModerationsSearchRepos(...queryKeyBase);

  return client.setQueryData<OzoneModerationsSearchReposQueryData>(key, data);
}

export function invalidateOzoneModerationsSearchRepos(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<
    [parameters: {
      q?: string | undefined;
      limit?: number | undefined;
      cursor?: string | undefined;
    }]
  >,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: [
      "@speakeasy-sdks/bluesky",
      "ozoneModerations",
      "searchRepos",
      ...queryKeyBase,
    ],
  });
}

export function invalidateAllOzoneModerationsSearchRepos(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@speakeasy-sdks/bluesky", "ozoneModerations", "searchRepos"],
  });
}

export function buildOzoneModerationsSearchReposQuery(
  client$: BlueskyCore,
  request?: operations.ToolsOzoneModerationSearchReposRequest | undefined,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<OzoneModerationsSearchReposQueryData>;
} {
  return {
    queryKey: queryKeyOzoneModerationsSearchRepos({
      q: request?.q,
      limit: request?.limit,
      cursor: request?.cursor,
    }),
    queryFn: async function ozoneModerationsSearchReposQueryFn(
      ctx,
    ): Promise<OzoneModerationsSearchReposQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(ozoneModerationsSearchRepos(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function buildOzoneModerationsSearchReposInfiniteQuery(
  client$: BlueskyCore,
  request?: operations.ToolsOzoneModerationSearchReposRequest | undefined,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext<
      QueryKey,
      OzoneModerationsSearchReposPageParams
    >,
  ) => Promise<OzoneModerationsSearchReposInfiniteQueryData>;
} {
  return {
    queryKey: queryKeyOzoneModerationsSearchRepos({
      q: request?.q,
      limit: request?.limit,
      cursor: request?.cursor,
    }),
    queryFn: async function ozoneModerationsSearchReposQuery(
      ctx,
    ): Promise<OzoneModerationsSearchReposInfiniteQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      if (!ctx.pageParam) {
        return unwrapResultIterator(ozoneModerationsSearchRepos(
          client$,
          request,
          mergedOptions,
        ));
      }

      return unwrapResultIterator(ozoneModerationsSearchRepos(
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

export function queryKeyOzoneModerationsSearchRepos(
  parameters: {
    q?: string | undefined;
    limit?: number | undefined;
    cursor?: string | undefined;
  },
): QueryKey {
  return [
    "@speakeasy-sdks/bluesky",
    "ozoneModerations",
    "searchRepos",
    parameters,
  ];
}
