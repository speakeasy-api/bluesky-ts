/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  InvalidateQueryFilters,
  QueryClient,
  QueryFunctionContext,
  QueryKey,
  useQuery,
  UseQueryResult,
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";
import { BlueskyCore } from "../core.js";
import { atprotoServerGetAccountInviteCodes } from "../funcs/atprotoServerGetAccountInviteCodes.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useBlueskyContext } from "./_context.js";
import {
  QueryHookOptions,
  SuspenseQueryHookOptions,
  TupleToPrefixes,
} from "./_types.js";

export type AtprotoServerGetAccountInviteCodesQueryData =
  operations.ComAtprotoServerGetAccountInviteCodesResponseBody;

/**
 * *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Get all invite codes for the current account. Requires auth.
 */
export function useAtprotoServerGetAccountInviteCodes(
  request?: operations.ComAtprotoServerGetAccountInviteCodesRequest | undefined,
  options?: QueryHookOptions<
    operations.ComAtprotoServerGetAccountInviteCodesResponseBody
  >,
): UseQueryResult<
  operations.ComAtprotoServerGetAccountInviteCodesResponseBody,
  Error
> {
  const client = useBlueskyContext();
  return useQuery({
    ...buildAtprotoServerGetAccountInviteCodesQuery(
      client,
      request,
      options?.request,
    ),
    ...options,
  });
}

/**
 * *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Get all invite codes for the current account. Requires auth.
 */
export function useAtprotoServerGetAccountInviteCodesSuspense(
  request?: operations.ComAtprotoServerGetAccountInviteCodesRequest | undefined,
  options?: SuspenseQueryHookOptions<
    operations.ComAtprotoServerGetAccountInviteCodesResponseBody
  >,
): UseSuspenseQueryResult<
  operations.ComAtprotoServerGetAccountInviteCodesResponseBody,
  Error
> {
  const client = useBlueskyContext();
  return useSuspenseQuery({
    ...buildAtprotoServerGetAccountInviteCodesQuery(
      client,
      request,
      options?.request,
    ),
    ...options,
  });
}

export function prefetchAtprotoServerGetAccountInviteCodes(
  queryClient: QueryClient,
  client$: BlueskyCore,
  request?: operations.ComAtprotoServerGetAccountInviteCodesRequest | undefined,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildAtprotoServerGetAccountInviteCodesQuery(
      client$,
      request,
    ),
  });
}

export function setAtprotoServerGetAccountInviteCodesData(
  client: QueryClient,
  queryKeyBase: [
    parameters: {
      includeUsed?: boolean | undefined;
      createAvailable?: boolean | undefined;
    },
  ],
  data: operations.ComAtprotoServerGetAccountInviteCodesResponseBody,
): operations.ComAtprotoServerGetAccountInviteCodesResponseBody | undefined {
  const key = queryKeyAtprotoServerGetAccountInviteCodes(...queryKeyBase);

  return client.setQueryData<
    operations.ComAtprotoServerGetAccountInviteCodesResponseBody
  >(key, data);
}

export function invalidateAtprotoServerGetAccountInviteCodes(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<
    [parameters: {
      includeUsed?: boolean | undefined;
      createAvailable?: boolean | undefined;
    }]
  >,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["bluesky", "server", "getAccountInviteCodes", ...queryKeyBase],
  });
}

export function invalidateAllAtprotoServerGetAccountInviteCodes(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["bluesky", "server", "getAccountInviteCodes"],
  });
}

export function buildAtprotoServerGetAccountInviteCodesQuery(
  client$: BlueskyCore,
  request?: operations.ComAtprotoServerGetAccountInviteCodesRequest | undefined,
  options?: RequestOptions,
): {
  retry: boolean;
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<operations.ComAtprotoServerGetAccountInviteCodesResponseBody>;
} {
  return {
    retry: false,
    queryKey: queryKeyAtprotoServerGetAccountInviteCodes({
      includeUsed: request?.includeUsed,
      createAvailable: request?.createAvailable,
    }),
    queryFn: async function atprotoServerGetAccountInviteCodesQuery(
      ctx,
    ): Promise<operations.ComAtprotoServerGetAccountInviteCodesResponseBody> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(atprotoServerGetAccountInviteCodes(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyAtprotoServerGetAccountInviteCodes(
  parameters: {
    includeUsed?: boolean | undefined;
    createAvailable?: boolean | undefined;
  },
): QueryKey {
  return ["bluesky", "server", "getAccountInviteCodes", parameters];
}
