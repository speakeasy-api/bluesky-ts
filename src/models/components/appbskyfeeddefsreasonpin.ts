/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AppBskyFeedDefsReasonPin = {};

/** @internal */
export const AppBskyFeedDefsReasonPin$inboundSchema: z.ZodType<
  AppBskyFeedDefsReasonPin,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type AppBskyFeedDefsReasonPin$Outbound = {};

/** @internal */
export const AppBskyFeedDefsReasonPin$outboundSchema: z.ZodType<
  AppBskyFeedDefsReasonPin$Outbound,
  z.ZodTypeDef,
  AppBskyFeedDefsReasonPin
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyFeedDefsReasonPin$ {
  /** @deprecated use `AppBskyFeedDefsReasonPin$inboundSchema` instead. */
  export const inboundSchema = AppBskyFeedDefsReasonPin$inboundSchema;
  /** @deprecated use `AppBskyFeedDefsReasonPin$outboundSchema` instead. */
  export const outboundSchema = AppBskyFeedDefsReasonPin$outboundSchema;
  /** @deprecated use `AppBskyFeedDefsReasonPin$Outbound` instead. */
  export type Outbound = AppBskyFeedDefsReasonPin$Outbound;
}

export function appBskyFeedDefsReasonPinToJSON(
  appBskyFeedDefsReasonPin: AppBskyFeedDefsReasonPin,
): string {
  return JSON.stringify(
    AppBskyFeedDefsReasonPin$outboundSchema.parse(appBskyFeedDefsReasonPin),
  );
}

export function appBskyFeedDefsReasonPinFromJSON(
  jsonString: string,
): SafeParseResult<AppBskyFeedDefsReasonPin, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AppBskyFeedDefsReasonPin$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AppBskyFeedDefsReasonPin' from JSON`,
  );
}
