/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AppBskyFeedGetFeedGeneratorRequest = {
  /**
   * AT-URI of the feed generator record.
   */
  feed: string;
};

/**
 * OK
 */
export type AppBskyFeedGetFeedGeneratorResponseBody = {
  view: components.AppBskyFeedDefsGeneratorView;
  /**
   * Indicates whether the feed generator service has been online recently, or else seems to be inactive.
   */
  isOnline: boolean;
  /**
   * Indicates whether the feed generator service is compatible with the record declaration.
   */
  isValid: boolean;
};

/** @internal */
export const AppBskyFeedGetFeedGeneratorRequest$inboundSchema: z.ZodType<
  AppBskyFeedGetFeedGeneratorRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  feed: z.string(),
});

/** @internal */
export type AppBskyFeedGetFeedGeneratorRequest$Outbound = {
  feed: string;
};

/** @internal */
export const AppBskyFeedGetFeedGeneratorRequest$outboundSchema: z.ZodType<
  AppBskyFeedGetFeedGeneratorRequest$Outbound,
  z.ZodTypeDef,
  AppBskyFeedGetFeedGeneratorRequest
> = z.object({
  feed: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyFeedGetFeedGeneratorRequest$ {
  /** @deprecated use `AppBskyFeedGetFeedGeneratorRequest$inboundSchema` instead. */
  export const inboundSchema = AppBskyFeedGetFeedGeneratorRequest$inboundSchema;
  /** @deprecated use `AppBskyFeedGetFeedGeneratorRequest$outboundSchema` instead. */
  export const outboundSchema =
    AppBskyFeedGetFeedGeneratorRequest$outboundSchema;
  /** @deprecated use `AppBskyFeedGetFeedGeneratorRequest$Outbound` instead. */
  export type Outbound = AppBskyFeedGetFeedGeneratorRequest$Outbound;
}

export function appBskyFeedGetFeedGeneratorRequestToJSON(
  appBskyFeedGetFeedGeneratorRequest: AppBskyFeedGetFeedGeneratorRequest,
): string {
  return JSON.stringify(
    AppBskyFeedGetFeedGeneratorRequest$outboundSchema.parse(
      appBskyFeedGetFeedGeneratorRequest,
    ),
  );
}

export function appBskyFeedGetFeedGeneratorRequestFromJSON(
  jsonString: string,
): SafeParseResult<AppBskyFeedGetFeedGeneratorRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AppBskyFeedGetFeedGeneratorRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AppBskyFeedGetFeedGeneratorRequest' from JSON`,
  );
}

/** @internal */
export const AppBskyFeedGetFeedGeneratorResponseBody$inboundSchema: z.ZodType<
  AppBskyFeedGetFeedGeneratorResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  view: components.AppBskyFeedDefsGeneratorView$inboundSchema,
  isOnline: z.boolean(),
  isValid: z.boolean(),
});

/** @internal */
export type AppBskyFeedGetFeedGeneratorResponseBody$Outbound = {
  view: components.AppBskyFeedDefsGeneratorView$Outbound;
  isOnline: boolean;
  isValid: boolean;
};

/** @internal */
export const AppBskyFeedGetFeedGeneratorResponseBody$outboundSchema: z.ZodType<
  AppBskyFeedGetFeedGeneratorResponseBody$Outbound,
  z.ZodTypeDef,
  AppBskyFeedGetFeedGeneratorResponseBody
> = z.object({
  view: components.AppBskyFeedDefsGeneratorView$outboundSchema,
  isOnline: z.boolean(),
  isValid: z.boolean(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyFeedGetFeedGeneratorResponseBody$ {
  /** @deprecated use `AppBskyFeedGetFeedGeneratorResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    AppBskyFeedGetFeedGeneratorResponseBody$inboundSchema;
  /** @deprecated use `AppBskyFeedGetFeedGeneratorResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    AppBskyFeedGetFeedGeneratorResponseBody$outboundSchema;
  /** @deprecated use `AppBskyFeedGetFeedGeneratorResponseBody$Outbound` instead. */
  export type Outbound = AppBskyFeedGetFeedGeneratorResponseBody$Outbound;
}

export function appBskyFeedGetFeedGeneratorResponseBodyToJSON(
  appBskyFeedGetFeedGeneratorResponseBody:
    AppBskyFeedGetFeedGeneratorResponseBody,
): string {
  return JSON.stringify(
    AppBskyFeedGetFeedGeneratorResponseBody$outboundSchema.parse(
      appBskyFeedGetFeedGeneratorResponseBody,
    ),
  );
}

export function appBskyFeedGetFeedGeneratorResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  AppBskyFeedGetFeedGeneratorResponseBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      AppBskyFeedGetFeedGeneratorResponseBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'AppBskyFeedGetFeedGeneratorResponseBody' from JSON`,
  );
}
