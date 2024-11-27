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
import { atprotoServerUpdateEmail } from "../funcs/atprotoServerUpdateEmail.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useBlueskyContext } from "./_context.js";

export type AtprotoServerUpdateEmailMutationVariables = {
  request: operations.ComAtprotoServerUpdateEmailRequestBody;
  options?: RequestOptions;
};

/**
 * *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Update an account's email.
 */
export function useAtprotoServerUpdateEmailMutation(
  options?: UseMutationOptions<
    void,
    Error,
    AtprotoServerUpdateEmailMutationVariables
  >,
): UseMutationResult<void, Error, AtprotoServerUpdateEmailMutationVariables> {
  const client = useBlueskyContext();
  return useMutation({
    ...buildAtprotoServerUpdateEmailMutation(client),
    ...options,
  });
}

export function mutationKeyAtprotoServerUpdateEmail(): MutationKey {
  return ["bluesky", "server", "updateEmail"];
}

export function buildAtprotoServerUpdateEmailMutation(
  client$: BlueskyCore,
): {
  retry: boolean;
  mutationKey: MutationKey;
  mutationFn: (
    variables: AtprotoServerUpdateEmailMutationVariables,
  ) => Promise<void>;
} {
  return {
    retry: false,
    mutationKey: mutationKeyAtprotoServerUpdateEmail(),
    mutationFn: function atprotoServerUpdateEmailQuery({
      request,
      options,
    }): Promise<void> {
      return unwrapAsync(atprotoServerUpdateEmail(
        client$,
        request,
        options,
      ));
    },
  };
}
