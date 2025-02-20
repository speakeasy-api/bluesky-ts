/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { BlueskyCore } from "../core.js";
import { identitiesUpdateHandle } from "../funcs/identitiesUpdateHandle.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useBlueskyContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type IdentitiesUpdateHandleMutationVariables = {
  request: operations.ComAtprotoIdentityUpdateHandleBody;
  options?: RequestOptions;
};

export type IdentitiesUpdateHandleMutationData = void;

/**
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Updates the current account's handle. Verifies handle validity, and updates did:plc document if necessary. Implemented by PDS, and requires auth.
 */
export function useIdentitiesUpdateHandleMutation(
  options?: MutationHookOptions<
    IdentitiesUpdateHandleMutationData,
    Error,
    IdentitiesUpdateHandleMutationVariables
  >,
): UseMutationResult<
  IdentitiesUpdateHandleMutationData,
  Error,
  IdentitiesUpdateHandleMutationVariables
> {
  const client = useBlueskyContext();
  return useMutation({
    ...buildIdentitiesUpdateHandleMutation(client, options),
    ...options,
  });
}

export function mutationKeyIdentitiesUpdateHandle(): MutationKey {
  return ["@speakeasy-sdks/bluesky", "identities", "updateHandle"];
}

export function buildIdentitiesUpdateHandleMutation(
  client$: BlueskyCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: IdentitiesUpdateHandleMutationVariables,
  ) => Promise<IdentitiesUpdateHandleMutationData>;
} {
  return {
    mutationKey: mutationKeyIdentitiesUpdateHandle(),
    mutationFn: function identitiesUpdateHandleMutationFn({
      request,
      options,
    }): Promise<IdentitiesUpdateHandleMutationData> {
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
      return unwrapAsync(identitiesUpdateHandle(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
