/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { BlueskyCore } from "../core.js";
import { adminsDeleteAccount } from "../funcs/adminsDeleteAccount.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useBlueskyContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type AdminsDeleteAccountMutationVariables = {
  request: operations.ComAtprotoAdminDeleteAccountBody;
  options?: RequestOptions;
};

export type AdminsDeleteAccountMutationData = void;

/**
 * *This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Delete a user account as an administrator.
 */
export function useAdminsDeleteAccountMutation(
  options?: MutationHookOptions<
    AdminsDeleteAccountMutationData,
    Error,
    AdminsDeleteAccountMutationVariables
  >,
): UseMutationResult<
  AdminsDeleteAccountMutationData,
  Error,
  AdminsDeleteAccountMutationVariables
> {
  const client = useBlueskyContext();
  return useMutation({
    ...buildAdminsDeleteAccountMutation(client, options),
    ...options,
  });
}

export function mutationKeyAdminsDeleteAccount(): MutationKey {
  return ["@speakeasy-sdks/bluesky", "admins", "deleteAccount"];
}

export function buildAdminsDeleteAccountMutation(
  client$: BlueskyCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: AdminsDeleteAccountMutationVariables,
  ) => Promise<AdminsDeleteAccountMutationData>;
} {
  return {
    mutationKey: mutationKeyAdminsDeleteAccount(),
    mutationFn: function adminsDeleteAccountMutationFn({
      request,
      options,
    }): Promise<AdminsDeleteAccountMutationData> {
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
      return unwrapAsync(adminsDeleteAccount(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
