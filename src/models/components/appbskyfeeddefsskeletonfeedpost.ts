/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  AppBskyFeedDefsSkeletonReasonPin,
  AppBskyFeedDefsSkeletonReasonPin$inboundSchema,
  AppBskyFeedDefsSkeletonReasonPin$Outbound,
  AppBskyFeedDefsSkeletonReasonPin$outboundSchema,
} from "./appbskyfeeddefsskeletonreasonpin.js";
import {
  AppBskyFeedDefsSkeletonReasonRepost,
  AppBskyFeedDefsSkeletonReasonRepost$inboundSchema,
  AppBskyFeedDefsSkeletonReasonRepost$Outbound,
  AppBskyFeedDefsSkeletonReasonRepost$outboundSchema,
} from "./appbskyfeeddefsskeletonreasonrepost.js";

export type AppBskyFeedDefsSkeletonFeedPostReason =
  | AppBskyFeedDefsSkeletonReasonPin
  | AppBskyFeedDefsSkeletonReasonRepost;

export type AppBskyFeedDefsSkeletonFeedPost = {
  post: string;
  reason?:
    | AppBskyFeedDefsSkeletonReasonPin
    | AppBskyFeedDefsSkeletonReasonRepost
    | undefined;
  /**
   * Context that will be passed through to client and may be passed to feed generator back alongside interactions.
   */
  feedContext?: string | undefined;
};

/** @internal */
export const AppBskyFeedDefsSkeletonFeedPostReason$inboundSchema: z.ZodType<
  AppBskyFeedDefsSkeletonFeedPostReason,
  z.ZodTypeDef,
  unknown
> = z.union([
  AppBskyFeedDefsSkeletonReasonPin$inboundSchema,
  AppBskyFeedDefsSkeletonReasonRepost$inboundSchema,
]);

/** @internal */
export type AppBskyFeedDefsSkeletonFeedPostReason$Outbound =
  | AppBskyFeedDefsSkeletonReasonPin$Outbound
  | AppBskyFeedDefsSkeletonReasonRepost$Outbound;

/** @internal */
export const AppBskyFeedDefsSkeletonFeedPostReason$outboundSchema: z.ZodType<
  AppBskyFeedDefsSkeletonFeedPostReason$Outbound,
  z.ZodTypeDef,
  AppBskyFeedDefsSkeletonFeedPostReason
> = z.union([
  AppBskyFeedDefsSkeletonReasonPin$outboundSchema,
  AppBskyFeedDefsSkeletonReasonRepost$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyFeedDefsSkeletonFeedPostReason$ {
  /** @deprecated use `AppBskyFeedDefsSkeletonFeedPostReason$inboundSchema` instead. */
  export const inboundSchema =
    AppBskyFeedDefsSkeletonFeedPostReason$inboundSchema;
  /** @deprecated use `AppBskyFeedDefsSkeletonFeedPostReason$outboundSchema` instead. */
  export const outboundSchema =
    AppBskyFeedDefsSkeletonFeedPostReason$outboundSchema;
  /** @deprecated use `AppBskyFeedDefsSkeletonFeedPostReason$Outbound` instead. */
  export type Outbound = AppBskyFeedDefsSkeletonFeedPostReason$Outbound;
}

export function appBskyFeedDefsSkeletonFeedPostReasonToJSON(
  appBskyFeedDefsSkeletonFeedPostReason: AppBskyFeedDefsSkeletonFeedPostReason,
): string {
  return JSON.stringify(
    AppBskyFeedDefsSkeletonFeedPostReason$outboundSchema.parse(
      appBskyFeedDefsSkeletonFeedPostReason,
    ),
  );
}

export function appBskyFeedDefsSkeletonFeedPostReasonFromJSON(
  jsonString: string,
): SafeParseResult<AppBskyFeedDefsSkeletonFeedPostReason, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AppBskyFeedDefsSkeletonFeedPostReason$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AppBskyFeedDefsSkeletonFeedPostReason' from JSON`,
  );
}

/** @internal */
export const AppBskyFeedDefsSkeletonFeedPost$inboundSchema: z.ZodType<
  AppBskyFeedDefsSkeletonFeedPost,
  z.ZodTypeDef,
  unknown
> = z.object({
  post: z.string(),
  reason: z.union([
    AppBskyFeedDefsSkeletonReasonPin$inboundSchema,
    AppBskyFeedDefsSkeletonReasonRepost$inboundSchema,
  ]).optional(),
  feedContext: z.string().optional(),
});

/** @internal */
export type AppBskyFeedDefsSkeletonFeedPost$Outbound = {
  post: string;
  reason?:
    | AppBskyFeedDefsSkeletonReasonPin$Outbound
    | AppBskyFeedDefsSkeletonReasonRepost$Outbound
    | undefined;
  feedContext?: string | undefined;
};

/** @internal */
export const AppBskyFeedDefsSkeletonFeedPost$outboundSchema: z.ZodType<
  AppBskyFeedDefsSkeletonFeedPost$Outbound,
  z.ZodTypeDef,
  AppBskyFeedDefsSkeletonFeedPost
> = z.object({
  post: z.string(),
  reason: z.union([
    AppBskyFeedDefsSkeletonReasonPin$outboundSchema,
    AppBskyFeedDefsSkeletonReasonRepost$outboundSchema,
  ]).optional(),
  feedContext: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyFeedDefsSkeletonFeedPost$ {
  /** @deprecated use `AppBskyFeedDefsSkeletonFeedPost$inboundSchema` instead. */
  export const inboundSchema = AppBskyFeedDefsSkeletonFeedPost$inboundSchema;
  /** @deprecated use `AppBskyFeedDefsSkeletonFeedPost$outboundSchema` instead. */
  export const outboundSchema = AppBskyFeedDefsSkeletonFeedPost$outboundSchema;
  /** @deprecated use `AppBskyFeedDefsSkeletonFeedPost$Outbound` instead. */
  export type Outbound = AppBskyFeedDefsSkeletonFeedPost$Outbound;
}

export function appBskyFeedDefsSkeletonFeedPostToJSON(
  appBskyFeedDefsSkeletonFeedPost: AppBskyFeedDefsSkeletonFeedPost,
): string {
  return JSON.stringify(
    AppBskyFeedDefsSkeletonFeedPost$outboundSchema.parse(
      appBskyFeedDefsSkeletonFeedPost,
    ),
  );
}

export function appBskyFeedDefsSkeletonFeedPostFromJSON(
  jsonString: string,
): SafeParseResult<AppBskyFeedDefsSkeletonFeedPost, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AppBskyFeedDefsSkeletonFeedPost$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AppBskyFeedDefsSkeletonFeedPost' from JSON`,
  );
}
