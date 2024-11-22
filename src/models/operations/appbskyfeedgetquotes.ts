/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AppBskyFeedGetQuotesRequest = {
  /**
   * Reference (AT-URI) of post record
   */
  uri: string;
  /**
   * If supplied, filters to quotes of specific version (by CID) of the post record.
   */
  cid?: string | undefined;
  limit?: number | undefined;
  cursor?: string | undefined;
};

/**
 * OK
 */
export type AppBskyFeedGetQuotesResponseBody = {
  uri: string;
  cid?: string | undefined;
  cursor?: string | undefined;
  posts: Array<components.AppBskyFeedDefsPostView>;
};

/** @internal */
export const AppBskyFeedGetQuotesRequest$inboundSchema: z.ZodType<
  AppBskyFeedGetQuotesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  uri: z.string(),
  cid: z.string().optional(),
  limit: z.number().int().default(50),
  cursor: z.string().optional(),
});

/** @internal */
export type AppBskyFeedGetQuotesRequest$Outbound = {
  uri: string;
  cid?: string | undefined;
  limit: number;
  cursor?: string | undefined;
};

/** @internal */
export const AppBskyFeedGetQuotesRequest$outboundSchema: z.ZodType<
  AppBskyFeedGetQuotesRequest$Outbound,
  z.ZodTypeDef,
  AppBskyFeedGetQuotesRequest
> = z.object({
  uri: z.string(),
  cid: z.string().optional(),
  limit: z.number().int().default(50),
  cursor: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyFeedGetQuotesRequest$ {
  /** @deprecated use `AppBskyFeedGetQuotesRequest$inboundSchema` instead. */
  export const inboundSchema = AppBskyFeedGetQuotesRequest$inboundSchema;
  /** @deprecated use `AppBskyFeedGetQuotesRequest$outboundSchema` instead. */
  export const outboundSchema = AppBskyFeedGetQuotesRequest$outboundSchema;
  /** @deprecated use `AppBskyFeedGetQuotesRequest$Outbound` instead. */
  export type Outbound = AppBskyFeedGetQuotesRequest$Outbound;
}

export function appBskyFeedGetQuotesRequestToJSON(
  appBskyFeedGetQuotesRequest: AppBskyFeedGetQuotesRequest,
): string {
  return JSON.stringify(
    AppBskyFeedGetQuotesRequest$outboundSchema.parse(
      appBskyFeedGetQuotesRequest,
    ),
  );
}

export function appBskyFeedGetQuotesRequestFromJSON(
  jsonString: string,
): SafeParseResult<AppBskyFeedGetQuotesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AppBskyFeedGetQuotesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AppBskyFeedGetQuotesRequest' from JSON`,
  );
}

/** @internal */
export const AppBskyFeedGetQuotesResponseBody$inboundSchema: z.ZodType<
  AppBskyFeedGetQuotesResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  uri: z.string(),
  cid: z.string().optional(),
  cursor: z.string().optional(),
  posts: z.array(components.AppBskyFeedDefsPostView$inboundSchema),
});

/** @internal */
export type AppBskyFeedGetQuotesResponseBody$Outbound = {
  uri: string;
  cid?: string | undefined;
  cursor?: string | undefined;
  posts: Array<components.AppBskyFeedDefsPostView$Outbound>;
};

/** @internal */
export const AppBskyFeedGetQuotesResponseBody$outboundSchema: z.ZodType<
  AppBskyFeedGetQuotesResponseBody$Outbound,
  z.ZodTypeDef,
  AppBskyFeedGetQuotesResponseBody
> = z.object({
  uri: z.string(),
  cid: z.string().optional(),
  cursor: z.string().optional(),
  posts: z.array(components.AppBskyFeedDefsPostView$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyFeedGetQuotesResponseBody$ {
  /** @deprecated use `AppBskyFeedGetQuotesResponseBody$inboundSchema` instead. */
  export const inboundSchema = AppBskyFeedGetQuotesResponseBody$inboundSchema;
  /** @deprecated use `AppBskyFeedGetQuotesResponseBody$outboundSchema` instead. */
  export const outboundSchema = AppBskyFeedGetQuotesResponseBody$outboundSchema;
  /** @deprecated use `AppBskyFeedGetQuotesResponseBody$Outbound` instead. */
  export type Outbound = AppBskyFeedGetQuotesResponseBody$Outbound;
}

export function appBskyFeedGetQuotesResponseBodyToJSON(
  appBskyFeedGetQuotesResponseBody: AppBskyFeedGetQuotesResponseBody,
): string {
  return JSON.stringify(
    AppBskyFeedGetQuotesResponseBody$outboundSchema.parse(
      appBskyFeedGetQuotesResponseBody,
    ),
  );
}

export function appBskyFeedGetQuotesResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<AppBskyFeedGetQuotesResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AppBskyFeedGetQuotesResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AppBskyFeedGetQuotesResponseBody' from JSON`,
  );
}
