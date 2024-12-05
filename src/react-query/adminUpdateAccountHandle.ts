/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { BlueskyCore } from "../core.js";
import { adminUpdateAccountHandle } from "../funcs/adminUpdateAccountHandle.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useBlueskyContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type AdminUpdateAccountHandleMutationVariables = {
  request: operations.ComAtprotoAdminUpdateAccountHandleRequestBody;
  options?: RequestOptions;
};

export type AdminUpdateAccountHandleMutationData = void;

/**
 * *This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Administrative action to update an account's handle.
 */
export function useAdminUpdateAccountHandleMutation(
  options?: MutationHookOptions<
    AdminUpdateAccountHandleMutationData,
    Error,
    AdminUpdateAccountHandleMutationVariables
  >,
): UseMutationResult<
  AdminUpdateAccountHandleMutationData,
  Error,
  AdminUpdateAccountHandleMutationVariables
> {
  const client = useBlueskyContext();
  return useMutation({
    ...buildAdminUpdateAccountHandleMutation(client, options),
    ...options,
  });
}

export function mutationKeyAdminUpdateAccountHandle(): MutationKey {
  return ["bluesky", "admin", "updateAccountHandle"];
}

export function buildAdminUpdateAccountHandleMutation(
  client$: BlueskyCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: AdminUpdateAccountHandleMutationVariables,
  ) => Promise<AdminUpdateAccountHandleMutationData>;
} {
  return {
    mutationKey: mutationKeyAdminUpdateAccountHandle(),
    mutationFn: function adminUpdateAccountHandleMutationFn({
      request,
      options,
    }): Promise<AdminUpdateAccountHandleMutationData> {
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
      return unwrapAsync(adminUpdateAccountHandle(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
