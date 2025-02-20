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
import { accountsGetInviteCodes } from "../funcs/accountsGetInviteCodes.js";
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

export type AccountsGetInviteCodesQueryData =
  operations.ComAtprotoServerGetAccountInviteCodesResponseBody;

/**
 * *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Get all invite codes for the current account. Requires auth.
 */
export function useAccountsGetInviteCodes(
  request?: operations.ComAtprotoServerGetAccountInviteCodesRequest | undefined,
  options?: QueryHookOptions<AccountsGetInviteCodesQueryData>,
): UseQueryResult<AccountsGetInviteCodesQueryData, Error> {
  const client = useBlueskyContext();
  return useQuery({
    ...buildAccountsGetInviteCodesQuery(
      client,
      request,
      options,
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
export function useAccountsGetInviteCodesSuspense(
  request?: operations.ComAtprotoServerGetAccountInviteCodesRequest | undefined,
  options?: SuspenseQueryHookOptions<AccountsGetInviteCodesQueryData>,
): UseSuspenseQueryResult<AccountsGetInviteCodesQueryData, Error> {
  const client = useBlueskyContext();
  return useSuspenseQuery({
    ...buildAccountsGetInviteCodesQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchAccountsGetInviteCodes(
  queryClient: QueryClient,
  client$: BlueskyCore,
  request?: operations.ComAtprotoServerGetAccountInviteCodesRequest | undefined,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildAccountsGetInviteCodesQuery(
      client$,
      request,
    ),
  });
}

export function setAccountsGetInviteCodesData(
  client: QueryClient,
  queryKeyBase: [
    parameters: {
      includeUsed?: boolean | undefined;
      createAvailable?: boolean | undefined;
    },
  ],
  data: AccountsGetInviteCodesQueryData,
): AccountsGetInviteCodesQueryData | undefined {
  const key = queryKeyAccountsGetInviteCodes(...queryKeyBase);

  return client.setQueryData<AccountsGetInviteCodesQueryData>(key, data);
}

export function invalidateAccountsGetInviteCodes(
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
    queryKey: [
      "@speakeasy-sdks/bluesky",
      "accounts",
      "getInviteCodes",
      ...queryKeyBase,
    ],
  });
}

export function invalidateAllAccountsGetInviteCodes(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@speakeasy-sdks/bluesky", "accounts", "getInviteCodes"],
  });
}

export function buildAccountsGetInviteCodesQuery(
  client$: BlueskyCore,
  request?: operations.ComAtprotoServerGetAccountInviteCodesRequest | undefined,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<AccountsGetInviteCodesQueryData>;
} {
  return {
    queryKey: queryKeyAccountsGetInviteCodes({
      includeUsed: request?.includeUsed,
      createAvailable: request?.createAvailable,
    }),
    queryFn: async function accountsGetInviteCodesQueryFn(
      ctx,
    ): Promise<AccountsGetInviteCodesQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(accountsGetInviteCodes(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyAccountsGetInviteCodes(
  parameters: {
    includeUsed?: boolean | undefined;
    createAvailable?: boolean | undefined;
  },
): QueryKey {
  return ["@speakeasy-sdks/bluesky", "accounts", "getInviteCodes", parameters];
}
