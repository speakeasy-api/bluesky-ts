/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { BlueskyCore } from "../core.js";
import { adminUpdateSubjectStatus } from "../funcs/adminUpdateSubjectStatus.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useBlueskyContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type AdminUpdateSubjectStatusMutationVariables = {
  request: operations.ComAtprotoAdminUpdateSubjectStatusBody;
  options?: RequestOptions;
};

export type AdminUpdateSubjectStatusMutationData =
  operations.ComAtprotoAdminUpdateSubjectStatusResponseBody;

/**
 * *This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Update the service-specific admin status of a subject (account, record, or blob).
 */
export function useAdminUpdateSubjectStatusMutation(
  options?: MutationHookOptions<
    AdminUpdateSubjectStatusMutationData,
    Error,
    AdminUpdateSubjectStatusMutationVariables
  >,
): UseMutationResult<
  AdminUpdateSubjectStatusMutationData,
  Error,
  AdminUpdateSubjectStatusMutationVariables
> {
  const client = useBlueskyContext();
  return useMutation({
    ...buildAdminUpdateSubjectStatusMutation(client, options),
    ...options,
  });
}

export function mutationKeyAdminUpdateSubjectStatus(): MutationKey {
  return ["@speakeasy-sdks/bluesky", "admin", "updateSubjectStatus"];
}

export function buildAdminUpdateSubjectStatusMutation(
  client$: BlueskyCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: AdminUpdateSubjectStatusMutationVariables,
  ) => Promise<AdminUpdateSubjectStatusMutationData>;
} {
  return {
    mutationKey: mutationKeyAdminUpdateSubjectStatus(),
    mutationFn: function adminUpdateSubjectStatusMutationFn({
      request,
      options,
    }): Promise<AdminUpdateSubjectStatusMutationData> {
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
      return unwrapAsync(adminUpdateSubjectStatus(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
