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
import { atprotoServerResetPassword } from "../funcs/atprotoServerResetPassword.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useBlueskyContext } from "./_context.js";

export type AtprotoServerResetPasswordMutationVariables = {
  request: operations.ComAtprotoServerResetPasswordRequestBody;
  options?: RequestOptions;
};

/**
 * *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Reset a user account password using a token.
 */
export function useAtprotoServerResetPasswordMutation(
  options?: UseMutationOptions<
    void,
    Error,
    AtprotoServerResetPasswordMutationVariables
  >,
): UseMutationResult<void, Error, AtprotoServerResetPasswordMutationVariables> {
  const client = useBlueskyContext();
  return useMutation({
    ...buildAtprotoServerResetPasswordMutation(client),
    ...options,
  });
}

export function mutationKeyAtprotoServerResetPassword(): MutationKey {
  return ["bluesky", "server", "resetPassword"];
}

export function buildAtprotoServerResetPasswordMutation(
  client$: BlueskyCore,
): {
  retry: boolean;
  mutationKey: MutationKey;
  mutationFn: (
    variables: AtprotoServerResetPasswordMutationVariables,
  ) => Promise<void>;
} {
  return {
    retry: false,
    mutationKey: mutationKeyAtprotoServerResetPassword(),
    mutationFn: function atprotoServerResetPasswordQuery({
      request,
      options,
    }): Promise<void> {
      return unwrapAsync(atprotoServerResetPassword(
        client$,
        request,
        options,
      ));
    },
  };
}
