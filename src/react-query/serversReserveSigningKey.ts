/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { BlueskyCore } from "../core.js";
import { serversReserveSigningKey } from "../funcs/serversReserveSigningKey.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useBlueskyContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type ServersReserveSigningKeyMutationVariables = {
  request?: operations.ComAtprotoServerReserveSigningKeyRequestBody | undefined;
  options?: RequestOptions;
};

export type ServersReserveSigningKeyMutationData =
  operations.ComAtprotoServerReserveSigningKeyResponseBody;

/**
 * *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Reserve a repo signing key, for use with account creation. Necessary so that a DID PLC update operation can be constructed during an account migraiton. Public and does not require auth; implemented by PDS. NOTE: this endpoint may change when full account migration is implemented.
 */
export function useServersReserveSigningKeyMutation(
  options?: MutationHookOptions<
    ServersReserveSigningKeyMutationData,
    Error,
    ServersReserveSigningKeyMutationVariables
  >,
): UseMutationResult<
  ServersReserveSigningKeyMutationData,
  Error,
  ServersReserveSigningKeyMutationVariables
> {
  const client = useBlueskyContext();
  return useMutation({
    ...buildServersReserveSigningKeyMutation(client, options),
    ...options,
  });
}

export function mutationKeyServersReserveSigningKey(): MutationKey {
  return ["@speakeasy-api/bluesky", "servers", "reserveSigningKey"];
}

export function buildServersReserveSigningKeyMutation(
  client$: BlueskyCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: ServersReserveSigningKeyMutationVariables,
  ) => Promise<ServersReserveSigningKeyMutationData>;
} {
  return {
    mutationKey: mutationKeyServersReserveSigningKey(),
    mutationFn: function serversReserveSigningKeyMutationFn({
      request,
      options,
    }): Promise<ServersReserveSigningKeyMutationData> {
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
      return unwrapAsync(serversReserveSigningKey(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
