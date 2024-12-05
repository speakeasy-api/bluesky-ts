/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { BlueskyCore } from "../core.js";
import { teamsDeleteMember } from "../funcs/teamsDeleteMember.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useBlueskyContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type TeamsDeleteMemberMutationVariables = {
  request: operations.ToolsOzoneTeamDeleteMemberRequestBody;
  options?: RequestOptions;
};

export type TeamsDeleteMemberMutationData = void;

/**
 * *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Delete a member from ozone team. Requires admin role.
 */
export function useTeamsDeleteMemberMutation(
  options?: MutationHookOptions<
    TeamsDeleteMemberMutationData,
    Error,
    TeamsDeleteMemberMutationVariables
  >,
): UseMutationResult<
  TeamsDeleteMemberMutationData,
  Error,
  TeamsDeleteMemberMutationVariables
> {
  const client = useBlueskyContext();
  return useMutation({
    ...buildTeamsDeleteMemberMutation(client, options),
    ...options,
  });
}

export function mutationKeyTeamsDeleteMember(): MutationKey {
  return ["@speakeasy-api/bluesky", "teams", "deleteMember"];
}

export function buildTeamsDeleteMemberMutation(
  client$: BlueskyCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: TeamsDeleteMemberMutationVariables,
  ) => Promise<TeamsDeleteMemberMutationData>;
} {
  return {
    mutationKey: mutationKeyTeamsDeleteMember(),
    mutationFn: function teamsDeleteMemberMutationFn({
      request,
      options,
    }): Promise<TeamsDeleteMemberMutationData> {
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
      return unwrapAsync(teamsDeleteMember(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
