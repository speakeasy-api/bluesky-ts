/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { BlueskyCore } from "../core.js";
import { adminUpdateAccountEmail } from "../funcs/adminUpdateAccountEmail.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useBlueskyContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type AdminUpdateAccountEmailMutationVariables = {
  request: operations.ComAtprotoAdminUpdateAccountEmailBody;
  options?: RequestOptions;
};

export type AdminUpdateAccountEmailMutationData = void;

/**
 * *This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Administrative action to update an account's email.
 */
export function useAdminUpdateAccountEmailMutation(
  options?: MutationHookOptions<
    AdminUpdateAccountEmailMutationData,
    Error,
    AdminUpdateAccountEmailMutationVariables
  >,
): UseMutationResult<
  AdminUpdateAccountEmailMutationData,
  Error,
  AdminUpdateAccountEmailMutationVariables
> {
  const client = useBlueskyContext();
  return useMutation({
    ...buildAdminUpdateAccountEmailMutation(client, options),
    ...options,
  });
}

export function mutationKeyAdminUpdateAccountEmail(): MutationKey {
  return ["@speakeasy-sdks/bluesky", "admin", "updateAccountEmail"];
}

export function buildAdminUpdateAccountEmailMutation(
  client$: BlueskyCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: AdminUpdateAccountEmailMutationVariables,
  ) => Promise<AdminUpdateAccountEmailMutationData>;
} {
  return {
    mutationKey: mutationKeyAdminUpdateAccountEmail(),
    mutationFn: function adminUpdateAccountEmailMutationFn({
      request,
      options,
    }): Promise<AdminUpdateAccountEmailMutationData> {
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
      return unwrapAsync(adminUpdateAccountEmail(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
