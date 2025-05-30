/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { BlueskyCore } from "../core.js";
import { serverConfirmEmail } from "../funcs/serverConfirmEmail.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useBlueskyContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type ServerConfirmEmailMutationVariables = {
  request: operations.ComAtprotoServerConfirmEmailBody;
  options?: RequestOptions;
};

export type ServerConfirmEmailMutationData = void;

/**
 * *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Confirm an email using a token from com.atproto.server.requestEmailConfirmation.
 */
export function useServerConfirmEmailMutation(
  options?: MutationHookOptions<
    ServerConfirmEmailMutationData,
    Error,
    ServerConfirmEmailMutationVariables
  >,
): UseMutationResult<
  ServerConfirmEmailMutationData,
  Error,
  ServerConfirmEmailMutationVariables
> {
  const client = useBlueskyContext();
  return useMutation({
    ...buildServerConfirmEmailMutation(client, options),
    ...options,
  });
}

export function mutationKeyServerConfirmEmail(): MutationKey {
  return ["@speakeasy-sdks/bluesky", "server", "confirmEmail"];
}

export function buildServerConfirmEmailMutation(
  client$: BlueskyCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: ServerConfirmEmailMutationVariables,
  ) => Promise<ServerConfirmEmailMutationData>;
} {
  return {
    mutationKey: mutationKeyServerConfirmEmail(),
    mutationFn: function serverConfirmEmailMutationFn({
      request,
      options,
    }): Promise<ServerConfirmEmailMutationData> {
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
      return unwrapAsync(serverConfirmEmail(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
