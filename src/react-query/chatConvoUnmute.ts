/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { BlueskyCore } from "../core.js";
import { chatConvoUnmute } from "../funcs/chatConvoUnmute.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useBlueskyContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type ChatConvoUnmuteMutationVariables = {
  request: operations.ChatBskyConvoUnmuteConvoBody;
  options?: RequestOptions;
};

export type ChatConvoUnmuteMutationData =
  operations.ChatBskyConvoUnmuteConvoResponseBody;

/**
 * *This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 */
export function useChatConvoUnmuteMutation(
  options?: MutationHookOptions<
    ChatConvoUnmuteMutationData,
    Error,
    ChatConvoUnmuteMutationVariables
  >,
): UseMutationResult<
  ChatConvoUnmuteMutationData,
  Error,
  ChatConvoUnmuteMutationVariables
> {
  const client = useBlueskyContext();
  return useMutation({
    ...buildChatConvoUnmuteMutation(client, options),
    ...options,
  });
}

export function mutationKeyChatConvoUnmute(): MutationKey {
  return ["@speakeasy-sdks/bluesky", "chatConvo", "unmute"];
}

export function buildChatConvoUnmuteMutation(
  client$: BlueskyCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: ChatConvoUnmuteMutationVariables,
  ) => Promise<ChatConvoUnmuteMutationData>;
} {
  return {
    mutationKey: mutationKeyChatConvoUnmute(),
    mutationFn: function chatConvoUnmuteMutationFn({
      request,
      options,
    }): Promise<ChatConvoUnmuteMutationData> {
      const mergedOptions = {
        ...hookOptions,
        ...options,
        fetchOptions: {
          ...hookOptions?.fetchOptions,
          ...options?.fetchOptions,
          signal: combineSignals(
            hookOptions?.fetchOptions?.signal,
            options?.fetchOptions?.signal,
          ),
        },
      };
      return unwrapAsync(chatConvoUnmute(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
