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
import { atprotoServerDeactivateAccount } from "../funcs/atprotoServerDeactivateAccount.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useBlueskyContext } from "./_context.js";

export type AtprotoServerDeactivateAccountMutationVariables = {
  request?: operations.ComAtprotoServerDeactivateAccountRequestBody | undefined;
  options?: RequestOptions;
};

/**
 * *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Deactivates a currently active account. Stops serving of repo, and future writes to repo until reactivated. Used to finalize account migration with the old host after the account has been activated on the new host.
 */
export function useAtprotoServerDeactivateAccountMutation(
  options?: UseMutationOptions<
    void,
    Error,
    AtprotoServerDeactivateAccountMutationVariables
  >,
): UseMutationResult<
  void,
  Error,
  AtprotoServerDeactivateAccountMutationVariables
> {
  const client = useBlueskyContext();
  return useMutation({
    ...buildAtprotoServerDeactivateAccountMutation(client),
    ...options,
  });
}

export function mutationKeyAtprotoServerDeactivateAccount(): MutationKey {
  return ["bluesky", "server", "deactivateAccount"];
}

export function buildAtprotoServerDeactivateAccountMutation(
  client$: BlueskyCore,
): {
  retry: boolean;
  mutationKey: MutationKey;
  mutationFn: (
    variables: AtprotoServerDeactivateAccountMutationVariables,
  ) => Promise<void>;
} {
  return {
    retry: false,
    mutationKey: mutationKeyAtprotoServerDeactivateAccount(),
    mutationFn: function atprotoServerDeactivateAccountQuery({
      request,
      options,
    }): Promise<void> {
      return unwrapAsync(atprotoServerDeactivateAccount(
        client$,
        request,
        options,
      ));
    },
  };
}
