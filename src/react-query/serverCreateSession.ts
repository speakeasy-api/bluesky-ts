/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { BlueskyCore } from "../core.js";
import { serverCreateSession } from "../funcs/serverCreateSession.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useBlueskyContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type ServerCreateSessionMutationVariables = {
  request: operations.ComAtprotoServerCreateSessionRequestBody;
  options?: RequestOptions;
};

export type ServerCreateSessionMutationData =
  operations.ComAtprotoServerCreateSessionResponseBody;

/**
 * *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Create an authentication session.
 */
export function useServerCreateSessionMutation(
  options?: MutationHookOptions<
    ServerCreateSessionMutationData,
    Error,
    ServerCreateSessionMutationVariables
  >,
): UseMutationResult<
  ServerCreateSessionMutationData,
  Error,
  ServerCreateSessionMutationVariables
> {
  const client = useBlueskyContext();
  return useMutation({
    ...buildServerCreateSessionMutation(client, options),
    ...options,
  });
}

export function mutationKeyServerCreateSession(): MutationKey {
  return ["@speakeasy-api/bluesky", "server", "createSession"];
}

export function buildServerCreateSessionMutation(
  client$: BlueskyCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: ServerCreateSessionMutationVariables,
  ) => Promise<ServerCreateSessionMutationData>;
} {
  return {
    mutationKey: mutationKeyServerCreateSession(),
    mutationFn: function serverCreateSessionMutationFn({
      request,
      options,
    }): Promise<ServerCreateSessionMutationData> {
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
      return unwrapAsync(serverCreateSession(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
