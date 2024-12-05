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
import { chatConvosGetMessages } from "../funcs/chatConvosGetMessages.js";
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

export type ChatConvosGetMessagesQueryData =
  operations.ChatBskyConvoGetMessagesResponse;

export type ChatConvosGetMessagesInfiniteQueryData = PageIterator<
  operations.ChatBskyConvoGetMessagesResponse,
  { cursor: string }
>;

export type ChatConvosGetMessagesPageParams = PageIterator<
  operations.ChatBskyConvoGetMessagesResponse,
  { cursor: string }
>["~next"];

/**
 * *This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 */
export function useChatConvosGetMessages(
  request: operations.ChatBskyConvoGetMessagesRequest,
  options?: QueryHookOptions<ChatConvosGetMessagesQueryData>,
): UseQueryResult<ChatConvosGetMessagesQueryData, Error> {
  const client = useBlueskyContext();
  return useQuery({
    ...buildChatConvosGetMessagesQuery(
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
export function useChatConvosGetMessagesSuspense(
  request: operations.ChatBskyConvoGetMessagesRequest,
  options?: SuspenseQueryHookOptions<ChatConvosGetMessagesQueryData>,
): UseSuspenseQueryResult<ChatConvosGetMessagesQueryData, Error> {
  const client = useBlueskyContext();
  return useSuspenseQuery({
    ...buildChatConvosGetMessagesQuery(
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
export function useChatConvosGetMessagesInfinite(
  request: operations.ChatBskyConvoGetMessagesRequest,
  options?: InfiniteQueryHookOptions<ChatConvosGetMessagesInfiniteQueryData>,
): UseInfiniteQueryResult<
  InfiniteData<
    ChatConvosGetMessagesInfiniteQueryData,
    ChatConvosGetMessagesPageParams
  >,
  Error
> {
  const client = useBlueskyContext();
  return useInfiniteQuery<
    ChatConvosGetMessagesInfiniteQueryData,
    Error,
    InfiniteData<
      ChatConvosGetMessagesInfiniteQueryData,
      ChatConvosGetMessagesPageParams
    >,
    QueryKey,
    ChatConvosGetMessagesPageParams
  >({
    ...buildChatConvosGetMessagesInfiniteQuery(
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
export function useChatConvosGetMessagesInfiniteSuspense(
  request: operations.ChatBskyConvoGetMessagesRequest,
  options?: SuspenseInfiniteQueryHookOptions<
    ChatConvosGetMessagesInfiniteQueryData
  >,
): UseSuspenseInfiniteQueryResult<
  InfiniteData<
    ChatConvosGetMessagesInfiniteQueryData,
    ChatConvosGetMessagesPageParams
  >,
  Error
> {
  const client = useBlueskyContext();
  return useSuspenseInfiniteQuery<
    ChatConvosGetMessagesInfiniteQueryData,
    Error,
    InfiniteData<
      ChatConvosGetMessagesInfiniteQueryData,
      ChatConvosGetMessagesPageParams
    >,
    QueryKey,
    ChatConvosGetMessagesPageParams
  >({
    ...buildChatConvosGetMessagesInfiniteQuery(
      client,
      request,
      options,
    ),
    initialPageParam: options?.initialPageParam,
    getNextPageParam: (previousPage) => previousPage["~next"],
    ...options,
  });
}

export function prefetchChatConvosGetMessages(
  queryClient: QueryClient,
  client$: BlueskyCore,
  request: operations.ChatBskyConvoGetMessagesRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildChatConvosGetMessagesQuery(
      client$,
      request,
    ),
  });
}

export function setChatConvosGetMessagesData(
  client: QueryClient,
  queryKeyBase: [
    parameters: {
      convoId: string;
      limit?: number | undefined;
      cursor?: string | undefined;
    },
  ],
  data: ChatConvosGetMessagesQueryData,
): ChatConvosGetMessagesQueryData | undefined {
  const key = queryKeyChatConvosGetMessages(...queryKeyBase);

  return client.setQueryData<ChatConvosGetMessagesQueryData>(key, data);
}

export function invalidateChatConvosGetMessages(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<
    [parameters: {
      convoId: string;
      limit?: number | undefined;
      cursor?: string | undefined;
    }]
  >,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: [
      "@speakeasy-api/bluesky",
      "chatConvos",
      "getMessages",
      ...queryKeyBase,
    ],
  });
}

export function invalidateAllChatConvosGetMessages(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@speakeasy-api/bluesky", "chatConvos", "getMessages"],
  });
}

export function buildChatConvosGetMessagesQuery(
  client$: BlueskyCore,
  request: operations.ChatBskyConvoGetMessagesRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<ChatConvosGetMessagesQueryData>;
} {
  return {
    queryKey: queryKeyChatConvosGetMessages({
      convoId: request.convoId,
      limit: request.limit,
      cursor: request.cursor,
    }),
    queryFn: async function chatConvosGetMessagesQueryFn(
      ctx,
    ): Promise<ChatConvosGetMessagesQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(chatConvosGetMessages(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function buildChatConvosGetMessagesInfiniteQuery(
  client$: BlueskyCore,
  request: operations.ChatBskyConvoGetMessagesRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext<QueryKey, ChatConvosGetMessagesPageParams>,
  ) => Promise<ChatConvosGetMessagesInfiniteQueryData>;
} {
  return {
    queryKey: queryKeyChatConvosGetMessages({
      convoId: request.convoId,
      limit: request.limit,
      cursor: request.cursor,
    }),
    queryFn: async function chatConvosGetMessagesQuery(
      ctx,
    ): Promise<ChatConvosGetMessagesInfiniteQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      if (!ctx.pageParam) {
        return unwrapResultIterator(chatConvosGetMessages(
          client$,
          request,
          mergedOptions,
        ));
      }

      return unwrapResultIterator(chatConvosGetMessages(
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

export function queryKeyChatConvosGetMessages(
  parameters: {
    convoId: string;
    limit?: number | undefined;
    cursor?: string | undefined;
  },
): QueryKey {
  return ["@speakeasy-api/bluesky", "chatConvos", "getMessages", parameters];
}
