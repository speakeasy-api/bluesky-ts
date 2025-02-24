/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { BlueskyCore } from "../core.js";
import { adminsEnableAccountInvites } from "../funcs/adminsEnableAccountInvites.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useBlueskyContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type AdminsEnableAccountInvitesMutationVariables = {
  request: operations.ComAtprotoAdminEnableAccountInvitesBody;
  options?: RequestOptions;
};

export type AdminsEnableAccountInvitesMutationData = void;

/**
 * *This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Re-enable an account's ability to receive invite codes.
 */
export function useAdminsEnableAccountInvitesMutation(
  options?: MutationHookOptions<
    AdminsEnableAccountInvitesMutationData,
    Error,
    AdminsEnableAccountInvitesMutationVariables
  >,
): UseMutationResult<
  AdminsEnableAccountInvitesMutationData,
  Error,
  AdminsEnableAccountInvitesMutationVariables
> {
  const client = useBlueskyContext();
  return useMutation({
    ...buildAdminsEnableAccountInvitesMutation(client, options),
    ...options,
  });
}

export function mutationKeyAdminsEnableAccountInvites(): MutationKey {
  return ["@speakeasy-sdks/bluesky", "admins", "enableAccountInvites"];
}

export function buildAdminsEnableAccountInvitesMutation(
  client$: BlueskyCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: AdminsEnableAccountInvitesMutationVariables,
  ) => Promise<AdminsEnableAccountInvitesMutationData>;
} {
  return {
    mutationKey: mutationKeyAdminsEnableAccountInvites(),
    mutationFn: function adminsEnableAccountInvitesMutationFn({
      request,
      options,
    }): Promise<AdminsEnableAccountInvitesMutationData> {
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
      return unwrapAsync(adminsEnableAccountInvites(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
