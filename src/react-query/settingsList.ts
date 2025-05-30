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
import { settingsList } from "../funcs/settingsList.js";
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

export type SettingsListQueryData =
  operations.ToolsOzoneSettingListOptionsResponse;

export type SettingsListInfiniteQueryData = PageIterator<
  operations.ToolsOzoneSettingListOptionsResponse,
  { cursor: string }
>;

export type SettingsListPageParams = PageIterator<
  operations.ToolsOzoneSettingListOptionsResponse,
  { cursor: string }
>["~next"];

/**
 * *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * List settings with optional filtering
 */
export function useSettingsList(
  request?: operations.ToolsOzoneSettingListOptionsRequest | undefined,
  options?: QueryHookOptions<SettingsListQueryData>,
): UseQueryResult<SettingsListQueryData, Error> {
  const client = useBlueskyContext();
  return useQuery({
    ...buildSettingsListQuery(
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
 * List settings with optional filtering
 */
export function useSettingsListSuspense(
  request?: operations.ToolsOzoneSettingListOptionsRequest | undefined,
  options?: SuspenseQueryHookOptions<SettingsListQueryData>,
): UseSuspenseQueryResult<SettingsListQueryData, Error> {
  const client = useBlueskyContext();
  return useSuspenseQuery({
    ...buildSettingsListQuery(
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
 * List settings with optional filtering
 */
export function useSettingsListInfinite(
  request?: operations.ToolsOzoneSettingListOptionsRequest | undefined,
  options?: InfiniteQueryHookOptions<SettingsListInfiniteQueryData>,
): UseInfiniteQueryResult<
  InfiniteData<SettingsListInfiniteQueryData, SettingsListPageParams>,
  Error
> {
  const client = useBlueskyContext();
  return useInfiniteQuery<
    SettingsListInfiniteQueryData,
    Error,
    InfiniteData<SettingsListInfiniteQueryData, SettingsListPageParams>,
    QueryKey,
    SettingsListPageParams
  >({
    ...buildSettingsListInfiniteQuery(
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
 * List settings with optional filtering
 */
export function useSettingsListInfiniteSuspense(
  request?: operations.ToolsOzoneSettingListOptionsRequest | undefined,
  options?: SuspenseInfiniteQueryHookOptions<SettingsListInfiniteQueryData>,
): UseSuspenseInfiniteQueryResult<
  InfiniteData<SettingsListInfiniteQueryData, SettingsListPageParams>,
  Error
> {
  const client = useBlueskyContext();
  return useSuspenseInfiniteQuery<
    SettingsListInfiniteQueryData,
    Error,
    InfiniteData<SettingsListInfiniteQueryData, SettingsListPageParams>,
    QueryKey,
    SettingsListPageParams
  >({
    ...buildSettingsListInfiniteQuery(
      client,
      request,
      options,
    ),
    initialPageParam: options?.initialPageParam,
    getNextPageParam: (previousPage) => previousPage["~next"],
    ...options,
  });
}

export function prefetchSettingsList(
  queryClient: QueryClient,
  client$: BlueskyCore,
  request?: operations.ToolsOzoneSettingListOptionsRequest | undefined,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildSettingsListQuery(
      client$,
      request,
    ),
  });
}

export function setSettingsListData(
  client: QueryClient,
  queryKeyBase: [
    parameters: {
      limit?: number | undefined;
      cursor?: string | undefined;
      scope?: operations.ToolsOzoneSettingListOptionsScope | undefined;
      prefix?: string | undefined;
      keys?: Array<string> | undefined;
    },
  ],
  data: SettingsListQueryData,
): SettingsListQueryData | undefined {
  const key = queryKeySettingsList(...queryKeyBase);

  return client.setQueryData<SettingsListQueryData>(key, data);
}

export function invalidateSettingsList(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<
    [parameters: {
      limit?: number | undefined;
      cursor?: string | undefined;
      scope?: operations.ToolsOzoneSettingListOptionsScope | undefined;
      prefix?: string | undefined;
      keys?: Array<string> | undefined;
    }]
  >,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@speakeasy-sdks/bluesky", "settings", "list", ...queryKeyBase],
  });
}

export function invalidateAllSettingsList(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@speakeasy-sdks/bluesky", "settings", "list"],
  });
}

export function buildSettingsListQuery(
  client$: BlueskyCore,
  request?: operations.ToolsOzoneSettingListOptionsRequest | undefined,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (context: QueryFunctionContext) => Promise<SettingsListQueryData>;
} {
  return {
    queryKey: queryKeySettingsList({
      limit: request?.limit,
      cursor: request?.cursor,
      scope: request?.scope,
      prefix: request?.prefix,
      keys: request?.keys,
    }),
    queryFn: async function settingsListQueryFn(
      ctx,
    ): Promise<SettingsListQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(settingsList(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function buildSettingsListInfiniteQuery(
  client$: BlueskyCore,
  request?: operations.ToolsOzoneSettingListOptionsRequest | undefined,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext<QueryKey, SettingsListPageParams>,
  ) => Promise<SettingsListInfiniteQueryData>;
} {
  return {
    queryKey: queryKeySettingsList({
      limit: request?.limit,
      cursor: request?.cursor,
      scope: request?.scope,
      prefix: request?.prefix,
      keys: request?.keys,
    }),
    queryFn: async function settingsListQuery(
      ctx,
    ): Promise<SettingsListInfiniteQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      if (!ctx.pageParam) {
        return unwrapResultIterator(settingsList(
          client$,
          request,
          mergedOptions,
        ));
      }

      return unwrapResultIterator(settingsList(
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

export function queryKeySettingsList(
  parameters: {
    limit?: number | undefined;
    cursor?: string | undefined;
    scope?: operations.ToolsOzoneSettingListOptionsScope | undefined;
    prefix?: string | undefined;
    keys?: Array<string> | undefined;
  },
): QueryKey {
  return ["@speakeasy-sdks/bluesky", "settings", "list", parameters];
}
