/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { BlueskyCore } from "../core.js";
import { ozoneCommunicationUpdateTemplate } from "../funcs/ozoneCommunicationUpdateTemplate.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useBlueskyContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type OzoneCommunicationUpdateTemplateMutationVariables = {
  request: operations.ToolsOzoneCommunicationUpdateTemplateBody;
  options?: RequestOptions;
};

export type OzoneCommunicationUpdateTemplateMutationData =
  components.ToolsOzoneCommunicationDefsTemplateView;

/**
 * *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Administrative action to update an existing communication template. Allows passing partial fields to patch specific fields only.
 */
export function useOzoneCommunicationUpdateTemplateMutation(
  options?: MutationHookOptions<
    OzoneCommunicationUpdateTemplateMutationData,
    Error,
    OzoneCommunicationUpdateTemplateMutationVariables
  >,
): UseMutationResult<
  OzoneCommunicationUpdateTemplateMutationData,
  Error,
  OzoneCommunicationUpdateTemplateMutationVariables
> {
  const client = useBlueskyContext();
  return useMutation({
    ...buildOzoneCommunicationUpdateTemplateMutation(client, options),
    ...options,
  });
}

export function mutationKeyOzoneCommunicationUpdateTemplate(): MutationKey {
  return ["@speakeasy-sdks/bluesky", "ozoneCommunication", "updateTemplate"];
}

export function buildOzoneCommunicationUpdateTemplateMutation(
  client$: BlueskyCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: OzoneCommunicationUpdateTemplateMutationVariables,
  ) => Promise<OzoneCommunicationUpdateTemplateMutationData>;
} {
  return {
    mutationKey: mutationKeyOzoneCommunicationUpdateTemplate(),
    mutationFn: function ozoneCommunicationUpdateTemplateMutationFn({
      request,
      options,
    }): Promise<OzoneCommunicationUpdateTemplateMutationData> {
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
      return unwrapAsync(ozoneCommunicationUpdateTemplate(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
