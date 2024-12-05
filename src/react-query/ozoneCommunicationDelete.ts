/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { BlueskyCore } from "../core.js";
import { ozoneCommunicationDelete } from "../funcs/ozoneCommunicationDelete.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useBlueskyContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type OzoneCommunicationDeleteMutationVariables = {
  request: operations.ToolsOzoneCommunicationDeleteTemplateRequestBody;
  options?: RequestOptions;
};

export type OzoneCommunicationDeleteMutationData = void;

/**
 * *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Delete a communication template.
 */
export function useOzoneCommunicationDeleteMutation(
  options?: MutationHookOptions<
    OzoneCommunicationDeleteMutationData,
    Error,
    OzoneCommunicationDeleteMutationVariables
  >,
): UseMutationResult<
  OzoneCommunicationDeleteMutationData,
  Error,
  OzoneCommunicationDeleteMutationVariables
> {
  const client = useBlueskyContext();
  return useMutation({
    ...buildOzoneCommunicationDeleteMutation(client, options),
    ...options,
  });
}

export function mutationKeyOzoneCommunicationDelete(): MutationKey {
  return ["@speakeasy-api/bluesky", "ozoneCommunication", "delete"];
}

export function buildOzoneCommunicationDeleteMutation(
  client$: BlueskyCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: OzoneCommunicationDeleteMutationVariables,
  ) => Promise<OzoneCommunicationDeleteMutationData>;
} {
  return {
    mutationKey: mutationKeyOzoneCommunicationDelete(),
    mutationFn: function ozoneCommunicationDeleteMutationFn({
      request,
      options,
    }): Promise<OzoneCommunicationDeleteMutationData> {
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
      return unwrapAsync(ozoneCommunicationDelete(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
