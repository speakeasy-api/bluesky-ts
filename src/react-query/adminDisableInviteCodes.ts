/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { BlueskyCore } from "../core.js";
import { adminDisableInviteCodes } from "../funcs/adminDisableInviteCodes.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useBlueskyContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type AdminDisableInviteCodesMutationVariables = {
  request?: operations.ComAtprotoAdminDisableInviteCodesRequestBody | undefined;
  options?: RequestOptions;
};

export type AdminDisableInviteCodesMutationData = void;

/**
 * *This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Disable some set of codes and/or all codes associated with a set of users.
 */
export function useAdminDisableInviteCodesMutation(
  options?: MutationHookOptions<
    AdminDisableInviteCodesMutationData,
    Error,
    AdminDisableInviteCodesMutationVariables
  >,
): UseMutationResult<
  AdminDisableInviteCodesMutationData,
  Error,
  AdminDisableInviteCodesMutationVariables
> {
  const client = useBlueskyContext();
  return useMutation({
    ...buildAdminDisableInviteCodesMutation(client, options),
    ...options,
  });
}

export function mutationKeyAdminDisableInviteCodes(): MutationKey {
  return ["@speakeasy-api/bluesky", "admin", "disableInviteCodes"];
}

export function buildAdminDisableInviteCodesMutation(
  client$: BlueskyCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: AdminDisableInviteCodesMutationVariables,
  ) => Promise<AdminDisableInviteCodesMutationData>;
} {
  return {
    mutationKey: mutationKeyAdminDisableInviteCodes(),
    mutationFn: function adminDisableInviteCodesMutationFn({
      request,
      options,
    }): Promise<AdminDisableInviteCodesMutationData> {
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
      return unwrapAsync(adminDisableInviteCodes(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
