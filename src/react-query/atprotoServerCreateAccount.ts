/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { BlueskyCore } from "../core.js";
import { atprotoServerCreateAccount } from "../funcs/atprotoServerCreateAccount.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useBlueskyContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type AtprotoServerCreateAccountMutationVariables = {
  request: operations.ComAtprotoServerCreateAccountBody;
  options?: RequestOptions;
};

export type AtprotoServerCreateAccountMutationData =
  operations.ComAtprotoServerCreateAccountResponseBody;

/**
 * *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Create an account. Implemented by PDS.
 */
export function useAtprotoServerCreateAccountMutation(
  options?: MutationHookOptions<
    AtprotoServerCreateAccountMutationData,
    Error,
    AtprotoServerCreateAccountMutationVariables
  >,
): UseMutationResult<
  AtprotoServerCreateAccountMutationData,
  Error,
  AtprotoServerCreateAccountMutationVariables
> {
  const client = useBlueskyContext();
  return useMutation({
    ...buildAtprotoServerCreateAccountMutation(client, options),
    ...options,
  });
}

export function mutationKeyAtprotoServerCreateAccount(): MutationKey {
  return ["@speakeasy-sdks/bluesky", "atprotoServer", "createAccount"];
}

export function buildAtprotoServerCreateAccountMutation(
  client$: BlueskyCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: AtprotoServerCreateAccountMutationVariables,
  ) => Promise<AtprotoServerCreateAccountMutationData>;
} {
  return {
    mutationKey: mutationKeyAtprotoServerCreateAccount(),
    mutationFn: function atprotoServerCreateAccountMutationFn({
      request,
      options,
    }): Promise<AtprotoServerCreateAccountMutationData> {
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
      return unwrapAsync(atprotoServerCreateAccount(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
