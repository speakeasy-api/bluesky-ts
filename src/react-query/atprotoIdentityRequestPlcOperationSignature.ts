/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { BlueskyCore } from "../core.js";
import { atprotoIdentityRequestPlcOperationSignature } from "../funcs/atprotoIdentityRequestPlcOperationSignature.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import { unwrapAsync } from "../types/fp.js";
import { useBlueskyContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type AtprotoIdentityRequestPlcOperationSignatureMutationVariables = {
  options?: RequestOptions;
};

export type AtprotoIdentityRequestPlcOperationSignatureMutationData = void;

/**
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Request an email with a code to in order to request a signed PLC operation. Requires Auth.
 */
export function useAtprotoIdentityRequestPlcOperationSignatureMutation(
  options?: MutationHookOptions<
    AtprotoIdentityRequestPlcOperationSignatureMutationData,
    Error,
    AtprotoIdentityRequestPlcOperationSignatureMutationVariables
  >,
): UseMutationResult<
  AtprotoIdentityRequestPlcOperationSignatureMutationData,
  Error,
  AtprotoIdentityRequestPlcOperationSignatureMutationVariables
> {
  const client = useBlueskyContext();
  return useMutation({
    ...buildAtprotoIdentityRequestPlcOperationSignatureMutation(
      client,
      options,
    ),
    ...options,
  });
}

export function mutationKeyAtprotoIdentityRequestPlcOperationSignature(): MutationKey {
  return [
    "@speakeasy-sdks/bluesky",
    "atprotoIdentity",
    "requestPlcOperationSignature",
  ];
}

export function buildAtprotoIdentityRequestPlcOperationSignatureMutation(
  client$: BlueskyCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: AtprotoIdentityRequestPlcOperationSignatureMutationVariables,
  ) => Promise<AtprotoIdentityRequestPlcOperationSignatureMutationData>;
} {
  return {
    mutationKey: mutationKeyAtprotoIdentityRequestPlcOperationSignature(),
    mutationFn: function atprotoIdentityRequestPlcOperationSignatureMutationFn({
      options,
    }): Promise<AtprotoIdentityRequestPlcOperationSignatureMutationData> {
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
      return unwrapAsync(atprotoIdentityRequestPlcOperationSignature(
        client$,
        mergedOptions,
      ));
    },
  };
}
