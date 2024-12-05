/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { BlueskyCore } from "../core.js";
import { communicationsCreateTemplate } from "../funcs/communicationsCreateTemplate.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useBlueskyContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type CommunicationsCreateTemplateMutationVariables = {
  request: operations.ToolsOzoneCommunicationCreateTemplateRequestBody;
  options?: RequestOptions;
};

export type CommunicationsCreateTemplateMutationData =
  components.ToolsOzoneCommunicationDefsTemplateView;

/**
 * *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Administrative action to create a new, re-usable communication (email for now) template.
 */
export function useCommunicationsCreateTemplateMutation(
  options?: MutationHookOptions<
    CommunicationsCreateTemplateMutationData,
    Error,
    CommunicationsCreateTemplateMutationVariables
  >,
): UseMutationResult<
  CommunicationsCreateTemplateMutationData,
  Error,
  CommunicationsCreateTemplateMutationVariables
> {
  const client = useBlueskyContext();
  return useMutation({
    ...buildCommunicationsCreateTemplateMutation(client, options),
    ...options,
  });
}

export function mutationKeyCommunicationsCreateTemplate(): MutationKey {
  return ["@speakeasy-api/bluesky", "communications", "createTemplate"];
}

export function buildCommunicationsCreateTemplateMutation(
  client$: BlueskyCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: CommunicationsCreateTemplateMutationVariables,
  ) => Promise<CommunicationsCreateTemplateMutationData>;
} {
  return {
    mutationKey: mutationKeyCommunicationsCreateTemplate(),
    mutationFn: function communicationsCreateTemplateMutationFn({
      request,
      options,
    }): Promise<CommunicationsCreateTemplateMutationData> {
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
      return unwrapAsync(communicationsCreateTemplate(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
