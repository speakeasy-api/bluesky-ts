/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { BlueskyCore } from "../core.js";
import { adminSendEmail } from "../funcs/adminSendEmail.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useBlueskyContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type AdminSendEmailMutationVariables = {
  request: operations.ComAtprotoAdminSendEmailBody;
  options?: RequestOptions;
};

export type AdminSendEmailMutationData =
  operations.ComAtprotoAdminSendEmailResponseBody;

/**
 * *This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Send email to a user's account email address.
 */
export function useAdminSendEmailMutation(
  options?: MutationHookOptions<
    AdminSendEmailMutationData,
    Error,
    AdminSendEmailMutationVariables
  >,
): UseMutationResult<
  AdminSendEmailMutationData,
  Error,
  AdminSendEmailMutationVariables
> {
  const client = useBlueskyContext();
  return useMutation({
    ...buildAdminSendEmailMutation(client, options),
    ...options,
  });
}

export function mutationKeyAdminSendEmail(): MutationKey {
  return ["@speakeasy-api/bluesky", "admin", "sendEmail"];
}

export function buildAdminSendEmailMutation(
  client$: BlueskyCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: AdminSendEmailMutationVariables,
  ) => Promise<AdminSendEmailMutationData>;
} {
  return {
    mutationKey: mutationKeyAdminSendEmail(),
    mutationFn: function adminSendEmailMutationFn({
      request,
      options,
    }): Promise<AdminSendEmailMutationData> {
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
      return unwrapAsync(adminSendEmail(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
