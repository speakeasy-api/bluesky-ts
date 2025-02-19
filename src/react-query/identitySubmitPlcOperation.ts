/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { BlueskyCore } from "../core.js";
import { identitySubmitPlcOperation } from "../funcs/identitySubmitPlcOperation.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useBlueskyContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type IdentitySubmitPlcOperationMutationVariables = {
  request: operations.ComAtprotoIdentitySubmitPlcOperationBody;
  options?: RequestOptions;
};

export type IdentitySubmitPlcOperationMutationData = void;

/**
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Validates a PLC operation to ensure that it doesn't violate a service's constraints or get the identity into a bad state, then submits it to the PLC registry
 */
export function useIdentitySubmitPlcOperationMutation(
  options?: MutationHookOptions<
    IdentitySubmitPlcOperationMutationData,
    Error,
    IdentitySubmitPlcOperationMutationVariables
  >,
): UseMutationResult<
  IdentitySubmitPlcOperationMutationData,
  Error,
  IdentitySubmitPlcOperationMutationVariables
> {
  const client = useBlueskyContext();
  return useMutation({
    ...buildIdentitySubmitPlcOperationMutation(client, options),
    ...options,
  });
}

export function mutationKeyIdentitySubmitPlcOperation(): MutationKey {
  return ["@speakeasy-api/bluesky", "identity", "submitPlcOperation"];
}

export function buildIdentitySubmitPlcOperationMutation(
  client$: BlueskyCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: IdentitySubmitPlcOperationMutationVariables,
  ) => Promise<IdentitySubmitPlcOperationMutationData>;
} {
  return {
    mutationKey: mutationKeyIdentitySubmitPlcOperation(),
    mutationFn: function identitySubmitPlcOperationMutationFn({
      request,
      options,
    }): Promise<IdentitySubmitPlcOperationMutationData> {
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
      return unwrapAsync(identitySubmitPlcOperation(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
