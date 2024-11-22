/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  AppBskyGraphDefsListViewBasic,
  AppBskyGraphDefsListViewBasic$inboundSchema,
  AppBskyGraphDefsListViewBasic$Outbound,
  AppBskyGraphDefsListViewBasic$outboundSchema,
} from "./appbskygraphdefslistviewbasic.js";

export type AppBskyFeedDefsThreadgateView = {
  uri?: string | undefined;
  cid?: string | undefined;
  record?: any | undefined;
  lists?: Array<AppBskyGraphDefsListViewBasic> | undefined;
};

/** @internal */
export const AppBskyFeedDefsThreadgateView$inboundSchema: z.ZodType<
  AppBskyFeedDefsThreadgateView,
  z.ZodTypeDef,
  unknown
> = z.object({
  uri: z.string().optional(),
  cid: z.string().optional(),
  record: z.any().optional(),
  lists: z.array(AppBskyGraphDefsListViewBasic$inboundSchema).optional(),
});

/** @internal */
export type AppBskyFeedDefsThreadgateView$Outbound = {
  uri?: string | undefined;
  cid?: string | undefined;
  record?: any | undefined;
  lists?: Array<AppBskyGraphDefsListViewBasic$Outbound> | undefined;
};

/** @internal */
export const AppBskyFeedDefsThreadgateView$outboundSchema: z.ZodType<
  AppBskyFeedDefsThreadgateView$Outbound,
  z.ZodTypeDef,
  AppBskyFeedDefsThreadgateView
> = z.object({
  uri: z.string().optional(),
  cid: z.string().optional(),
  record: z.any().optional(),
  lists: z.array(AppBskyGraphDefsListViewBasic$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyFeedDefsThreadgateView$ {
  /** @deprecated use `AppBskyFeedDefsThreadgateView$inboundSchema` instead. */
  export const inboundSchema = AppBskyFeedDefsThreadgateView$inboundSchema;
  /** @deprecated use `AppBskyFeedDefsThreadgateView$outboundSchema` instead. */
  export const outboundSchema = AppBskyFeedDefsThreadgateView$outboundSchema;
  /** @deprecated use `AppBskyFeedDefsThreadgateView$Outbound` instead. */
  export type Outbound = AppBskyFeedDefsThreadgateView$Outbound;
}

export function appBskyFeedDefsThreadgateViewToJSON(
  appBskyFeedDefsThreadgateView: AppBskyFeedDefsThreadgateView,
): string {
  return JSON.stringify(
    AppBskyFeedDefsThreadgateView$outboundSchema.parse(
      appBskyFeedDefsThreadgateView,
    ),
  );
}

export function appBskyFeedDefsThreadgateViewFromJSON(
  jsonString: string,
): SafeParseResult<AppBskyFeedDefsThreadgateView, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AppBskyFeedDefsThreadgateView$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AppBskyFeedDefsThreadgateView' from JSON`,
  );
}
