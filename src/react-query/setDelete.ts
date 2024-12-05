/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { BlueskyCore } from "../core.js";
import { setDelete } from "../funcs/setDelete.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useBlueskyContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type SetDeleteMutationVariables = {
  request: operations.ToolsOzoneSetDeleteSetRequestBody;
  options?: RequestOptions;
};

export type SetDeleteMutationData =
  operations.ToolsOzoneSetDeleteSetResponseBody;

/**
 * *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Delete an entire set. Attempting to delete a set that does not exist will result in an error.
 */
export function useSetDeleteMutation(
  options?: MutationHookOptions<
    SetDeleteMutationData,
    Error,
    SetDeleteMutationVariables
  >,
): UseMutationResult<SetDeleteMutationData, Error, SetDeleteMutationVariables> {
  const client = useBlueskyContext();
  return useMutation({
    ...buildSetDeleteMutation(client, options),
    ...options,
  });
}

export function mutationKeySetDelete(): MutationKey {
  return ["bluesky", "set", "delete"];
}

export function buildSetDeleteMutation(
  client$: BlueskyCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: SetDeleteMutationVariables,
  ) => Promise<SetDeleteMutationData>;
} {
  return {
    mutationKey: mutationKeySetDelete(),
    mutationFn: function setDeleteMutationFn({
      request,
      options,
    }): Promise<SetDeleteMutationData> {
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
      return unwrapAsync(setDelete(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
