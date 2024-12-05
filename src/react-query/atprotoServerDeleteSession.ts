/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { BlueskyCore } from "../core.js";
import { atprotoServerDeleteSession } from "../funcs/atprotoServerDeleteSession.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import { unwrapAsync } from "../types/fp.js";
import { useBlueskyContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type AtprotoServerDeleteSessionMutationVariables = {
  options?: RequestOptions;
};

export type AtprotoServerDeleteSessionMutationData = void;

/**
 * *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Delete the current session. Requires auth.
 */
export function useAtprotoServerDeleteSessionMutation(
  options?: MutationHookOptions<
    AtprotoServerDeleteSessionMutationData,
    Error,
    AtprotoServerDeleteSessionMutationVariables
  >,
): UseMutationResult<
  AtprotoServerDeleteSessionMutationData,
  Error,
  AtprotoServerDeleteSessionMutationVariables
> {
  const client = useBlueskyContext();
  return useMutation({
    ...buildAtprotoServerDeleteSessionMutation(client, options),
    ...options,
  });
}

export function mutationKeyAtprotoServerDeleteSession(): MutationKey {
  return ["bluesky", "atprotoServer", "deleteSession"];
}

export function buildAtprotoServerDeleteSessionMutation(
  client$: BlueskyCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: AtprotoServerDeleteSessionMutationVariables,
  ) => Promise<AtprotoServerDeleteSessionMutationData>;
} {
  return {
    mutationKey: mutationKeyAtprotoServerDeleteSession(),
    mutationFn: function atprotoServerDeleteSessionMutationFn({
      options,
    }): Promise<AtprotoServerDeleteSessionMutationData> {
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
      return unwrapAsync(atprotoServerDeleteSession(
        client$,
        mergedOptions,
      ));
    },
  };
}
