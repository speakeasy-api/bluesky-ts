/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  AppBskyEmbedExternalViewExternal,
  AppBskyEmbedExternalViewExternal$inboundSchema,
  AppBskyEmbedExternalViewExternal$Outbound,
  AppBskyEmbedExternalViewExternal$outboundSchema,
} from "./appbskyembedexternalviewexternal.js";

export type AppBskyEmbedExternalView = {
  external: AppBskyEmbedExternalViewExternal;
};

/** @internal */
export const AppBskyEmbedExternalView$inboundSchema: z.ZodType<
  AppBskyEmbedExternalView,
  z.ZodTypeDef,
  unknown
> = z.object({
  external: AppBskyEmbedExternalViewExternal$inboundSchema,
});

/** @internal */
export type AppBskyEmbedExternalView$Outbound = {
  external: AppBskyEmbedExternalViewExternal$Outbound;
};

/** @internal */
export const AppBskyEmbedExternalView$outboundSchema: z.ZodType<
  AppBskyEmbedExternalView$Outbound,
  z.ZodTypeDef,
  AppBskyEmbedExternalView
> = z.object({
  external: AppBskyEmbedExternalViewExternal$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyEmbedExternalView$ {
  /** @deprecated use `AppBskyEmbedExternalView$inboundSchema` instead. */
  export const inboundSchema = AppBskyEmbedExternalView$inboundSchema;
  /** @deprecated use `AppBskyEmbedExternalView$outboundSchema` instead. */
  export const outboundSchema = AppBskyEmbedExternalView$outboundSchema;
  /** @deprecated use `AppBskyEmbedExternalView$Outbound` instead. */
  export type Outbound = AppBskyEmbedExternalView$Outbound;
}

export function appBskyEmbedExternalViewToJSON(
  appBskyEmbedExternalView: AppBskyEmbedExternalView,
): string {
  return JSON.stringify(
    AppBskyEmbedExternalView$outboundSchema.parse(appBskyEmbedExternalView),
  );
}

export function appBskyEmbedExternalViewFromJSON(
  jsonString: string,
): SafeParseResult<AppBskyEmbedExternalView, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AppBskyEmbedExternalView$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AppBskyEmbedExternalView' from JSON`,
  );
}
