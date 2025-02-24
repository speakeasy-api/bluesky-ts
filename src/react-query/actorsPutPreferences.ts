/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { BlueskyCore } from "../core.js";
import { actorsPutPreferences } from "../funcs/actorsPutPreferences.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useBlueskyContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type ActorsPutPreferencesMutationVariables = {
  request: operations.AppBskyActorPutPreferencesBody;
  options?: RequestOptions;
};

export type ActorsPutPreferencesMutationData = void;

/**
 * *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Set the private preferences attached to the account.
 */
export function useActorsPutPreferencesMutation(
  options?: MutationHookOptions<
    ActorsPutPreferencesMutationData,
    Error,
    ActorsPutPreferencesMutationVariables
  >,
): UseMutationResult<
  ActorsPutPreferencesMutationData,
  Error,
  ActorsPutPreferencesMutationVariables
> {
  const client = useBlueskyContext();
  return useMutation({
    ...buildActorsPutPreferencesMutation(client, options),
    ...options,
  });
}

export function mutationKeyActorsPutPreferences(): MutationKey {
  return ["@speakeasy-sdks/bluesky", "actors", "putPreferences"];
}

export function buildActorsPutPreferencesMutation(
  client$: BlueskyCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: ActorsPutPreferencesMutationVariables,
  ) => Promise<ActorsPutPreferencesMutationData>;
} {
  return {
    mutationKey: mutationKeyActorsPutPreferences(),
    mutationFn: function actorsPutPreferencesMutationFn({
      request,
      options,
    }): Promise<ActorsPutPreferencesMutationData> {
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
      return unwrapAsync(actorsPutPreferences(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
