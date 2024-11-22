/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AppBskyFeedDefsSkeletonReasonPin = {};

/** @internal */
export const AppBskyFeedDefsSkeletonReasonPin$inboundSchema: z.ZodType<
  AppBskyFeedDefsSkeletonReasonPin,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type AppBskyFeedDefsSkeletonReasonPin$Outbound = {};

/** @internal */
export const AppBskyFeedDefsSkeletonReasonPin$outboundSchema: z.ZodType<
  AppBskyFeedDefsSkeletonReasonPin$Outbound,
  z.ZodTypeDef,
  AppBskyFeedDefsSkeletonReasonPin
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyFeedDefsSkeletonReasonPin$ {
  /** @deprecated use `AppBskyFeedDefsSkeletonReasonPin$inboundSchema` instead. */
  export const inboundSchema = AppBskyFeedDefsSkeletonReasonPin$inboundSchema;
  /** @deprecated use `AppBskyFeedDefsSkeletonReasonPin$outboundSchema` instead. */
  export const outboundSchema = AppBskyFeedDefsSkeletonReasonPin$outboundSchema;
  /** @deprecated use `AppBskyFeedDefsSkeletonReasonPin$Outbound` instead. */
  export type Outbound = AppBskyFeedDefsSkeletonReasonPin$Outbound;
}

export function appBskyFeedDefsSkeletonReasonPinToJSON(
  appBskyFeedDefsSkeletonReasonPin: AppBskyFeedDefsSkeletonReasonPin,
): string {
  return JSON.stringify(
    AppBskyFeedDefsSkeletonReasonPin$outboundSchema.parse(
      appBskyFeedDefsSkeletonReasonPin,
    ),
  );
}

export function appBskyFeedDefsSkeletonReasonPinFromJSON(
  jsonString: string,
): SafeParseResult<AppBskyFeedDefsSkeletonReasonPin, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AppBskyFeedDefsSkeletonReasonPin$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AppBskyFeedDefsSkeletonReasonPin' from JSON`,
  );
}
