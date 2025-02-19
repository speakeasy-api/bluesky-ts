/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { BlueskyCore } from "../core.js";
import { atprotoServerRevokeAppPassword } from "../funcs/atprotoServerRevokeAppPassword.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useBlueskyContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type AtprotoServerRevokeAppPasswordMutationVariables = {
  request: operations.ComAtprotoServerRevokeAppPasswordBody;
  options?: RequestOptions;
};

export type AtprotoServerRevokeAppPasswordMutationData = void;

/**
 * *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Revoke an App Password by name.
 */
export function useAtprotoServerRevokeAppPasswordMutation(
  options?: MutationHookOptions<
    AtprotoServerRevokeAppPasswordMutationData,
    Error,
    AtprotoServerRevokeAppPasswordMutationVariables
  >,
): UseMutationResult<
  AtprotoServerRevokeAppPasswordMutationData,
  Error,
  AtprotoServerRevokeAppPasswordMutationVariables
> {
  const client = useBlueskyContext();
  return useMutation({
    ...buildAtprotoServerRevokeAppPasswordMutation(client, options),
    ...options,
  });
}

export function mutationKeyAtprotoServerRevokeAppPassword(): MutationKey {
  return ["@speakeasy-api/bluesky", "atprotoServer", "revokeAppPassword"];
}

export function buildAtprotoServerRevokeAppPasswordMutation(
  client$: BlueskyCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: AtprotoServerRevokeAppPasswordMutationVariables,
  ) => Promise<AtprotoServerRevokeAppPasswordMutationData>;
} {
  return {
    mutationKey: mutationKeyAtprotoServerRevokeAppPassword(),
    mutationFn: function atprotoServerRevokeAppPasswordMutationFn({
      request,
      options,
    }): Promise<AtprotoServerRevokeAppPasswordMutationData> {
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
      return unwrapAsync(atprotoServerRevokeAppPassword(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
