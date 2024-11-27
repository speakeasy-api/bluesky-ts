/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from "@tanstack/react-query";
import { BlueskyCore } from "../core.js";
import { ozoneCommunicationDeleteTemplate } from "../funcs/ozoneCommunicationDeleteTemplate.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useBlueskyContext } from "./_context.js";

export type OzoneCommunicationDeleteTemplateMutationVariables = {
  request: operations.ToolsOzoneCommunicationDeleteTemplateRequestBody;
  options?: RequestOptions;
};

/**
 * *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Delete a communication template.
 */
export function useOzoneCommunicationDeleteTemplateMutation(
  options?: UseMutationOptions<
    void,
    Error,
    OzoneCommunicationDeleteTemplateMutationVariables
  >,
): UseMutationResult<
  void,
  Error,
  OzoneCommunicationDeleteTemplateMutationVariables
> {
  const client = useBlueskyContext();
  return useMutation({
    ...buildOzoneCommunicationDeleteTemplateMutation(client),
    ...options,
  });
}

export function mutationKeyOzoneCommunicationDeleteTemplate(): MutationKey {
  return ["bluesky", "communication", "deleteTemplate"];
}

export function buildOzoneCommunicationDeleteTemplateMutation(
  client$: BlueskyCore,
): {
  retry: boolean;
  mutationKey: MutationKey;
  mutationFn: (
    variables: OzoneCommunicationDeleteTemplateMutationVariables,
  ) => Promise<void>;
} {
  return {
    retry: false,
    mutationKey: mutationKeyOzoneCommunicationDeleteTemplate(),
    mutationFn: function ozoneCommunicationDeleteTemplateQuery({
      request,
      options,
    }): Promise<void> {
      return unwrapAsync(ozoneCommunicationDeleteTemplate(
        client$,
        request,
        options,
      ));
    },
  };
}
