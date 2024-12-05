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
import { ozoneCommunicationListTemplates } from "../funcs/ozoneCommunicationListTemplates.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useBlueskyContext } from "./_context.js";
import { QueryHookOptions, SuspenseQueryHookOptions } from "./_types.js";

export type OzoneCommunicationListTemplatesQueryData =
  operations.ToolsOzoneCommunicationListTemplatesResponseBody;

/**
 * *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Get list of all communication templates.
 */
export function useOzoneCommunicationListTemplates(
  options?: QueryHookOptions<OzoneCommunicationListTemplatesQueryData>,
): UseQueryResult<OzoneCommunicationListTemplatesQueryData, Error> {
  const client = useBlueskyContext();
  return useQuery({
    ...buildOzoneCommunicationListTemplatesQuery(
      client,
      options,
    ),
    ...options,
  });
}

/**
 * *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Get list of all communication templates.
 */
export function useOzoneCommunicationListTemplatesSuspense(
  options?: SuspenseQueryHookOptions<OzoneCommunicationListTemplatesQueryData>,
): UseSuspenseQueryResult<OzoneCommunicationListTemplatesQueryData, Error> {
  const client = useBlueskyContext();
  return useSuspenseQuery({
    ...buildOzoneCommunicationListTemplatesQuery(
      client,
      options,
    ),
    ...options,
  });
}

export function prefetchOzoneCommunicationListTemplates(
  queryClient: QueryClient,
  client$: BlueskyCore,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildOzoneCommunicationListTemplatesQuery(
      client$,
    ),
  });
}

export function setOzoneCommunicationListTemplatesData(
  client: QueryClient,
  data: OzoneCommunicationListTemplatesQueryData,
): OzoneCommunicationListTemplatesQueryData | undefined {
  const key = queryKeyOzoneCommunicationListTemplates();

  return client.setQueryData<OzoneCommunicationListTemplatesQueryData>(
    key,
    data,
  );
}

export function invalidateAllOzoneCommunicationListTemplates(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["bluesky", "ozoneCommunication", "listTemplates"],
  });
}

export function buildOzoneCommunicationListTemplatesQuery(
  client$: BlueskyCore,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<OzoneCommunicationListTemplatesQueryData>;
} {
  return {
    queryKey: queryKeyOzoneCommunicationListTemplates(),
    queryFn: async function ozoneCommunicationListTemplatesQueryFn(
      ctx,
    ): Promise<OzoneCommunicationListTemplatesQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(ozoneCommunicationListTemplates(
        client$,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyOzoneCommunicationListTemplates(): QueryKey {
  return ["bluesky", "ozoneCommunication", "listTemplates"];
}
