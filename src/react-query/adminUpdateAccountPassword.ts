/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { BlueskyCore } from "../core.js";
import { adminUpdateAccountPassword } from "../funcs/adminUpdateAccountPassword.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useBlueskyContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type AdminUpdateAccountPasswordMutationVariables = {
  request: operations.ComAtprotoAdminUpdateAccountPasswordBody;
  options?: RequestOptions;
};

export type AdminUpdateAccountPasswordMutationData = void;

/**
 * *This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Update the password for a user account as an administrator.
 */
export function useAdminUpdateAccountPasswordMutation(
  options?: MutationHookOptions<
    AdminUpdateAccountPasswordMutationData,
    Error,
    AdminUpdateAccountPasswordMutationVariables
  >,
): UseMutationResult<
  AdminUpdateAccountPasswordMutationData,
  Error,
  AdminUpdateAccountPasswordMutationVariables
> {
  const client = useBlueskyContext();
  return useMutation({
    ...buildAdminUpdateAccountPasswordMutation(client, options),
    ...options,
  });
}

export function mutationKeyAdminUpdateAccountPassword(): MutationKey {
  return ["@speakeasy-sdks/bluesky", "admin", "updateAccountPassword"];
}

export function buildAdminUpdateAccountPasswordMutation(
  client$: BlueskyCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: AdminUpdateAccountPasswordMutationVariables,
  ) => Promise<AdminUpdateAccountPasswordMutationData>;
} {
  return {
    mutationKey: mutationKeyAdminUpdateAccountPassword(),
    mutationFn: function adminUpdateAccountPasswordMutationFn({
      request,
      options,
    }): Promise<AdminUpdateAccountPasswordMutationData> {
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
      return unwrapAsync(adminUpdateAccountPassword(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
