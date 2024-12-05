/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { BlueskyCore } from "../core.js";
import { atprotoIdentitySignPlcOperation } from "../funcs/atprotoIdentitySignPlcOperation.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useBlueskyContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type AtprotoIdentitySignPlcOperationMutationVariables = {
  request?:
    | operations.ComAtprotoIdentitySignPlcOperationRequestBody
    | undefined;
  options?: RequestOptions;
};

export type AtprotoIdentitySignPlcOperationMutationData =
  operations.ComAtprotoIdentitySignPlcOperationResponseBody;

/**
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Signs a PLC operation to update some value(s) in the requesting DID's document.
 */
export function useAtprotoIdentitySignPlcOperationMutation(
  options?: MutationHookOptions<
    AtprotoIdentitySignPlcOperationMutationData,
    Error,
    AtprotoIdentitySignPlcOperationMutationVariables
  >,
): UseMutationResult<
  AtprotoIdentitySignPlcOperationMutationData,
  Error,
  AtprotoIdentitySignPlcOperationMutationVariables
> {
  const client = useBlueskyContext();
  return useMutation({
    ...buildAtprotoIdentitySignPlcOperationMutation(client, options),
    ...options,
  });
}

export function mutationKeyAtprotoIdentitySignPlcOperation(): MutationKey {
  return ["bluesky", "atprotoIdentity", "signPlcOperation"];
}

export function buildAtprotoIdentitySignPlcOperationMutation(
  client$: BlueskyCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: AtprotoIdentitySignPlcOperationMutationVariables,
  ) => Promise<AtprotoIdentitySignPlcOperationMutationData>;
} {
  return {
    mutationKey: mutationKeyAtprotoIdentitySignPlcOperation(),
    mutationFn: function atprotoIdentitySignPlcOperationMutationFn({
      request,
      options,
    }): Promise<AtprotoIdentitySignPlcOperationMutationData> {
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
      return unwrapAsync(atprotoIdentitySignPlcOperation(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
