/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { BlueskyCore } from "../core.js";
import { syncsRequestCrawl } from "../funcs/syncsRequestCrawl.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useBlueskyContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type SyncsRequestCrawlMutationVariables = {
  request: operations.ComAtprotoSyncRequestCrawlBody;
  options?: RequestOptions;
};

export type SyncsRequestCrawlMutationData = void;

/**
 * This endpoint is part of the atproto repository synchronization APIs. Requests usually do not require authentication, and can be made to PDS intances or Relay instances.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Request a service to persistently crawl hosted repos. Expected use is new PDS instances declaring their existence to Relays. Does not require auth.
 */
export function useSyncsRequestCrawlMutation(
  options?: MutationHookOptions<
    SyncsRequestCrawlMutationData,
    Error,
    SyncsRequestCrawlMutationVariables
  >,
): UseMutationResult<
  SyncsRequestCrawlMutationData,
  Error,
  SyncsRequestCrawlMutationVariables
> {
  const client = useBlueskyContext();
  return useMutation({
    ...buildSyncsRequestCrawlMutation(client, options),
    ...options,
  });
}

export function mutationKeySyncsRequestCrawl(): MutationKey {
  return ["@speakeasy-api/bluesky", "syncs", "requestCrawl"];
}

export function buildSyncsRequestCrawlMutation(
  client$: BlueskyCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: SyncsRequestCrawlMutationVariables,
  ) => Promise<SyncsRequestCrawlMutationData>;
} {
  return {
    mutationKey: mutationKeySyncsRequestCrawl(),
    mutationFn: function syncsRequestCrawlMutationFn({
      request,
      options,
    }): Promise<SyncsRequestCrawlMutationData> {
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
      return unwrapAsync(syncsRequestCrawl(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
