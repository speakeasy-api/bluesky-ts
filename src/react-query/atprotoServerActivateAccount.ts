/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from "@tanstack/react-query";
import { BlueskyCore } from "../core.js";
import { atprotoServerActivateAccount } from "../funcs/atprotoServerActivateAccount.js";
import { RequestOptions } from "../lib/sdks.js";
import { unwrapAsync } from "../types/fp.js";
import { useBlueskyContext } from "./_context.js";

export type AtprotoServerActivateAccountMutationVariables = {
  options?: RequestOptions;
};

/**
 * *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Activates a currently deactivated account. Used to finalize account migration after the account's repo is imported and identity is setup.
 */
export function useAtprotoServerActivateAccountMutation(
  options?: UseMutationOptions<
    void,
    Error,
    AtprotoServerActivateAccountMutationVariables
  >,
): UseMutationResult<
  void,
  Error,
  AtprotoServerActivateAccountMutationVariables
> {
  const client = useBlueskyContext();
  return useMutation({
    ...buildAtprotoServerActivateAccountMutation(client),
    ...options,
  });
}

export function mutationKeyAtprotoServerActivateAccount(): MutationKey {
  return ["bluesky", "server", "activateAccount"];
}

export function buildAtprotoServerActivateAccountMutation(
  client$: BlueskyCore,
): {
  retry: boolean;
  mutationKey: MutationKey;
  mutationFn: (
    variables: AtprotoServerActivateAccountMutationVariables,
  ) => Promise<void>;
} {
  return {
    retry: false,
    mutationKey: mutationKeyAtprotoServerActivateAccount(),
    mutationFn: function atprotoServerActivateAccountQuery({
      options,
    }): Promise<void> {
      return unwrapAsync(atprotoServerActivateAccount(
        client$,
        options,
      ));
    },
  };
}
