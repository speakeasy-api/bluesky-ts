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
import { convoList } from "../funcs/convoList.js";
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

export type ConvoListQueryData = operations.ChatBskyConvoListConvosResponse;

export type ConvoListInfiniteQueryData = PageIterator<
  operations.ChatBskyConvoListConvosResponse,
  { cursor: string }
>;

export type ConvoListPageParams = PageIterator<
  operations.ChatBskyConvoListConvosResponse,
  { cursor: string }
>["~next"];

/**
 * *This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 */
export function useConvoList(
  request?: operations.ChatBskyConvoListConvosRequest | undefined,
  options?: QueryHookOptions<ConvoListQueryData>,
): UseQueryResult<ConvoListQueryData, Error> {
  const client = useBlueskyContext();
  return useQuery({
    ...buildConvoListQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

/**
 * *This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 */
export function useConvoListSuspense(
  request?: operations.ChatBskyConvoListConvosRequest | undefined,
  options?: SuspenseQueryHookOptions<ConvoListQueryData>,
): UseSuspenseQueryResult<ConvoListQueryData, Error> {
  const client = useBlueskyContext();
  return useSuspenseQuery({
    ...buildConvoListQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

/**
 * *This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 */
export function useConvoListInfinite(
  request?: operations.ChatBskyConvoListConvosRequest | undefined,
  options?: InfiniteQueryHookOptions<ConvoListInfiniteQueryData>,
): UseInfiniteQueryResult<
  InfiniteData<ConvoListInfiniteQueryData, ConvoListPageParams>,
  Error
> {
  const client = useBlueskyContext();
  return useInfiniteQuery<
    ConvoListInfiniteQueryData,
    Error,
    InfiniteData<ConvoListInfiniteQueryData, ConvoListPageParams>,
    QueryKey,
    ConvoListPageParams
  >({
    ...buildConvoListInfiniteQuery(
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
 * *This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 */
export function useConvoListInfiniteSuspense(
  request?: operations.ChatBskyConvoListConvosRequest | undefined,
  options?: SuspenseInfiniteQueryHookOptions<ConvoListInfiniteQueryData>,
): UseSuspenseInfiniteQueryResult<
  InfiniteData<ConvoListInfiniteQueryData, ConvoListPageParams>,
  Error
> {
  const client = useBlueskyContext();
  return useSuspenseInfiniteQuery<
    ConvoListInfiniteQueryData,
    Error,
    InfiniteData<ConvoListInfiniteQueryData, ConvoListPageParams>,
    QueryKey,
    ConvoListPageParams
  >({
    ...buildConvoListInfiniteQuery(
      client,
      request,
      options,
    ),
    initialPageParam: options?.initialPageParam,
    getNextPageParam: (previousPage) => previousPage["~next"],
    ...options,
  });
}

export function prefetchConvoList(
  queryClient: QueryClient,
  client$: BlueskyCore,
  request?: operations.ChatBskyConvoListConvosRequest | undefined,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildConvoListQuery(
      client$,
      request,
    ),
  });
}

export function setConvoListData(
  client: QueryClient,
  queryKeyBase: [
    parameters: { limit?: number | undefined; cursor?: string | undefined },
  ],
  data: ConvoListQueryData,
): ConvoListQueryData | undefined {
  const key = queryKeyConvoList(...queryKeyBase);

  return client.setQueryData<ConvoListQueryData>(key, data);
}

export function invalidateConvoList(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<
    [parameters: { limit?: number | undefined; cursor?: string | undefined }]
  >,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@speakeasy-sdks/bluesky", "convo", "list", ...queryKeyBase],
  });
}

export function invalidateAllConvoList(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@speakeasy-sdks/bluesky", "convo", "list"],
  });
}

export function buildConvoListQuery(
  client$: BlueskyCore,
  request?: operations.ChatBskyConvoListConvosRequest | undefined,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (context: QueryFunctionContext) => Promise<ConvoListQueryData>;
} {
  return {
    queryKey: queryKeyConvoList({
      limit: request?.limit,
      cursor: request?.cursor,
    }),
    queryFn: async function convoListQueryFn(ctx): Promise<ConvoListQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(convoList(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function buildConvoListInfiniteQuery(
  client$: BlueskyCore,
  request?: operations.ChatBskyConvoListConvosRequest | undefined,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext<QueryKey, ConvoListPageParams>,
  ) => Promise<ConvoListInfiniteQueryData>;
} {
  return {
    queryKey: queryKeyConvoList({
      limit: request?.limit,
      cursor: request?.cursor,
    }),
    queryFn: async function convoListQuery(
      ctx,
    ): Promise<ConvoListInfiniteQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      if (!ctx.pageParam) {
        return unwrapResultIterator(convoList(
          client$,
          request,
          mergedOptions,
        ));
      }

      return unwrapResultIterator(convoList(
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

export function queryKeyConvoList(
  parameters: { limit?: number | undefined; cursor?: string | undefined },
): QueryKey {
  return ["@speakeasy-sdks/bluesky", "convo", "list", parameters];
}
