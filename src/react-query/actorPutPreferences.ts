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
import { actorPutPreferences } from "../funcs/actorPutPreferences.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useBlueskyContext } from "./_context.js";

export type ActorPutPreferencesMutationVariables = {
  request: operations.AppBskyActorPutPreferencesRequestBody;
  options?: RequestOptions;
};

/**
 * *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Set the private preferences attached to the account.
 */
export function useActorPutPreferencesMutation(
  options?: UseMutationOptions<
    void,
    Error,
    ActorPutPreferencesMutationVariables
  >,
): UseMutationResult<void, Error, ActorPutPreferencesMutationVariables> {
  const client = useBlueskyContext();
  return useMutation({
    ...buildActorPutPreferencesMutation(client),
    ...options,
  });
}

export function mutationKeyActorPutPreferences(): MutationKey {
  return ["bluesky", "actor", "putPreferences"];
}

export function buildActorPutPreferencesMutation(
  client$: BlueskyCore,
): {
  retry: boolean;
  mutationKey: MutationKey;
  mutationFn: (
    variables: ActorPutPreferencesMutationVariables,
  ) => Promise<void>;
} {
  return {
    retry: false,
    mutationKey: mutationKeyActorPutPreferences(),
    mutationFn: function actorPutPreferencesQuery({
      request,
      options,
    }): Promise<void> {
      return unwrapAsync(actorPutPreferences(
        client$,
        request,
        options,
      ));
    },
  };
}
