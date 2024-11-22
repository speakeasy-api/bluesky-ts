/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AppBskyGraphSearchStarterPacksRequest = {
  /**
   * Search query string. Syntax, phrase, boolean, and faceting is unspecified, but Lucene query syntax is recommended.
   */
  q: string;
  limit?: number | undefined;
  cursor?: string | undefined;
};

/**
 * OK
 */
export type AppBskyGraphSearchStarterPacksResponseBody = {
  cursor?: string | undefined;
  starterPacks: Array<components.AppBskyGraphDefsStarterPackViewBasic>;
};

/** @internal */
export const AppBskyGraphSearchStarterPacksRequest$inboundSchema: z.ZodType<
  AppBskyGraphSearchStarterPacksRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  q: z.string(),
  limit: z.number().int().default(25),
  cursor: z.string().optional(),
});

/** @internal */
export type AppBskyGraphSearchStarterPacksRequest$Outbound = {
  q: string;
  limit: number;
  cursor?: string | undefined;
};

/** @internal */
export const AppBskyGraphSearchStarterPacksRequest$outboundSchema: z.ZodType<
  AppBskyGraphSearchStarterPacksRequest$Outbound,
  z.ZodTypeDef,
  AppBskyGraphSearchStarterPacksRequest
> = z.object({
  q: z.string(),
  limit: z.number().int().default(25),
  cursor: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyGraphSearchStarterPacksRequest$ {
  /** @deprecated use `AppBskyGraphSearchStarterPacksRequest$inboundSchema` instead. */
  export const inboundSchema =
    AppBskyGraphSearchStarterPacksRequest$inboundSchema;
  /** @deprecated use `AppBskyGraphSearchStarterPacksRequest$outboundSchema` instead. */
  export const outboundSchema =
    AppBskyGraphSearchStarterPacksRequest$outboundSchema;
  /** @deprecated use `AppBskyGraphSearchStarterPacksRequest$Outbound` instead. */
  export type Outbound = AppBskyGraphSearchStarterPacksRequest$Outbound;
}

export function appBskyGraphSearchStarterPacksRequestToJSON(
  appBskyGraphSearchStarterPacksRequest: AppBskyGraphSearchStarterPacksRequest,
): string {
  return JSON.stringify(
    AppBskyGraphSearchStarterPacksRequest$outboundSchema.parse(
      appBskyGraphSearchStarterPacksRequest,
    ),
  );
}

export function appBskyGraphSearchStarterPacksRequestFromJSON(
  jsonString: string,
): SafeParseResult<AppBskyGraphSearchStarterPacksRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AppBskyGraphSearchStarterPacksRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AppBskyGraphSearchStarterPacksRequest' from JSON`,
  );
}

/** @internal */
export const AppBskyGraphSearchStarterPacksResponseBody$inboundSchema:
  z.ZodType<AppBskyGraphSearchStarterPacksResponseBody, z.ZodTypeDef, unknown> =
    z.object({
      cursor: z.string().optional(),
      starterPacks: z.array(
        components.AppBskyGraphDefsStarterPackViewBasic$inboundSchema,
      ),
    });

/** @internal */
export type AppBskyGraphSearchStarterPacksResponseBody$Outbound = {
  cursor?: string | undefined;
  starterPacks: Array<components.AppBskyGraphDefsStarterPackViewBasic$Outbound>;
};

/** @internal */
export const AppBskyGraphSearchStarterPacksResponseBody$outboundSchema:
  z.ZodType<
    AppBskyGraphSearchStarterPacksResponseBody$Outbound,
    z.ZodTypeDef,
    AppBskyGraphSearchStarterPacksResponseBody
  > = z.object({
    cursor: z.string().optional(),
    starterPacks: z.array(
      components.AppBskyGraphDefsStarterPackViewBasic$outboundSchema,
    ),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyGraphSearchStarterPacksResponseBody$ {
  /** @deprecated use `AppBskyGraphSearchStarterPacksResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    AppBskyGraphSearchStarterPacksResponseBody$inboundSchema;
  /** @deprecated use `AppBskyGraphSearchStarterPacksResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    AppBskyGraphSearchStarterPacksResponseBody$outboundSchema;
  /** @deprecated use `AppBskyGraphSearchStarterPacksResponseBody$Outbound` instead. */
  export type Outbound = AppBskyGraphSearchStarterPacksResponseBody$Outbound;
}

export function appBskyGraphSearchStarterPacksResponseBodyToJSON(
  appBskyGraphSearchStarterPacksResponseBody:
    AppBskyGraphSearchStarterPacksResponseBody,
): string {
  return JSON.stringify(
    AppBskyGraphSearchStarterPacksResponseBody$outboundSchema.parse(
      appBskyGraphSearchStarterPacksResponseBody,
    ),
  );
}

export function appBskyGraphSearchStarterPacksResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  AppBskyGraphSearchStarterPacksResponseBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      AppBskyGraphSearchStarterPacksResponseBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'AppBskyGraphSearchStarterPacksResponseBody' from JSON`,
  );
}
