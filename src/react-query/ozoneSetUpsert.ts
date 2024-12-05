/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { BlueskyCore } from "../core.js";
import { ozoneSetUpsert } from "../funcs/ozoneSetUpsert.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useBlueskyContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type OzoneSetUpsertMutationVariables = {
  request: components.ToolsOzoneSetDefsSet;
  options?: RequestOptions;
};

export type OzoneSetUpsertMutationData = components.ToolsOzoneSetDefsSetView;

/**
 * *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Create or update set metadata
 */
export function useOzoneSetUpsertMutation(
  options?: MutationHookOptions<
    OzoneSetUpsertMutationData,
    Error,
    OzoneSetUpsertMutationVariables
  >,
): UseMutationResult<
  OzoneSetUpsertMutationData,
  Error,
  OzoneSetUpsertMutationVariables
> {
  const client = useBlueskyContext();
  return useMutation({
    ...buildOzoneSetUpsertMutation(client, options),
    ...options,
  });
}

export function mutationKeyOzoneSetUpsert(): MutationKey {
  return ["bluesky", "ozoneSet", "upsert"];
}

export function buildOzoneSetUpsertMutation(
  client$: BlueskyCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: OzoneSetUpsertMutationVariables,
  ) => Promise<OzoneSetUpsertMutationData>;
} {
  return {
    mutationKey: mutationKeyOzoneSetUpsert(),
    mutationFn: function ozoneSetUpsertMutationFn({
      request,
      options,
    }): Promise<OzoneSetUpsertMutationData> {
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
      return unwrapAsync(ozoneSetUpsert(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
