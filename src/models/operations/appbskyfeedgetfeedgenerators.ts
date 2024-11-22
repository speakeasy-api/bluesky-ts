/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AppBskyFeedGetFeedGeneratorsRequest = {
  feeds: Array<string>;
};

/**
 * OK
 */
export type AppBskyFeedGetFeedGeneratorsResponseBody = {
  feeds: Array<components.AppBskyFeedDefsGeneratorView>;
};

/** @internal */
export const AppBskyFeedGetFeedGeneratorsRequest$inboundSchema: z.ZodType<
  AppBskyFeedGetFeedGeneratorsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  feeds: z.array(z.string()),
});

/** @internal */
export type AppBskyFeedGetFeedGeneratorsRequest$Outbound = {
  feeds: Array<string>;
};

/** @internal */
export const AppBskyFeedGetFeedGeneratorsRequest$outboundSchema: z.ZodType<
  AppBskyFeedGetFeedGeneratorsRequest$Outbound,
  z.ZodTypeDef,
  AppBskyFeedGetFeedGeneratorsRequest
> = z.object({
  feeds: z.array(z.string()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyFeedGetFeedGeneratorsRequest$ {
  /** @deprecated use `AppBskyFeedGetFeedGeneratorsRequest$inboundSchema` instead. */
  export const inboundSchema =
    AppBskyFeedGetFeedGeneratorsRequest$inboundSchema;
  /** @deprecated use `AppBskyFeedGetFeedGeneratorsRequest$outboundSchema` instead. */
  export const outboundSchema =
    AppBskyFeedGetFeedGeneratorsRequest$outboundSchema;
  /** @deprecated use `AppBskyFeedGetFeedGeneratorsRequest$Outbound` instead. */
  export type Outbound = AppBskyFeedGetFeedGeneratorsRequest$Outbound;
}

export function appBskyFeedGetFeedGeneratorsRequestToJSON(
  appBskyFeedGetFeedGeneratorsRequest: AppBskyFeedGetFeedGeneratorsRequest,
): string {
  return JSON.stringify(
    AppBskyFeedGetFeedGeneratorsRequest$outboundSchema.parse(
      appBskyFeedGetFeedGeneratorsRequest,
    ),
  );
}

export function appBskyFeedGetFeedGeneratorsRequestFromJSON(
  jsonString: string,
): SafeParseResult<AppBskyFeedGetFeedGeneratorsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AppBskyFeedGetFeedGeneratorsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AppBskyFeedGetFeedGeneratorsRequest' from JSON`,
  );
}

/** @internal */
export const AppBskyFeedGetFeedGeneratorsResponseBody$inboundSchema: z.ZodType<
  AppBskyFeedGetFeedGeneratorsResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  feeds: z.array(components.AppBskyFeedDefsGeneratorView$inboundSchema),
});

/** @internal */
export type AppBskyFeedGetFeedGeneratorsResponseBody$Outbound = {
  feeds: Array<components.AppBskyFeedDefsGeneratorView$Outbound>;
};

/** @internal */
export const AppBskyFeedGetFeedGeneratorsResponseBody$outboundSchema: z.ZodType<
  AppBskyFeedGetFeedGeneratorsResponseBody$Outbound,
  z.ZodTypeDef,
  AppBskyFeedGetFeedGeneratorsResponseBody
> = z.object({
  feeds: z.array(components.AppBskyFeedDefsGeneratorView$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyFeedGetFeedGeneratorsResponseBody$ {
  /** @deprecated use `AppBskyFeedGetFeedGeneratorsResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    AppBskyFeedGetFeedGeneratorsResponseBody$inboundSchema;
  /** @deprecated use `AppBskyFeedGetFeedGeneratorsResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    AppBskyFeedGetFeedGeneratorsResponseBody$outboundSchema;
  /** @deprecated use `AppBskyFeedGetFeedGeneratorsResponseBody$Outbound` instead. */
  export type Outbound = AppBskyFeedGetFeedGeneratorsResponseBody$Outbound;
}

export function appBskyFeedGetFeedGeneratorsResponseBodyToJSON(
  appBskyFeedGetFeedGeneratorsResponseBody:
    AppBskyFeedGetFeedGeneratorsResponseBody,
): string {
  return JSON.stringify(
    AppBskyFeedGetFeedGeneratorsResponseBody$outboundSchema.parse(
      appBskyFeedGetFeedGeneratorsResponseBody,
    ),
  );
}

export function appBskyFeedGetFeedGeneratorsResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  AppBskyFeedGetFeedGeneratorsResponseBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      AppBskyFeedGetFeedGeneratorsResponseBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'AppBskyFeedGetFeedGeneratorsResponseBody' from JSON`,
  );
}
