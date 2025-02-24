/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Facet feature for mention of another account. The text is usually a handle, including a '@' prefix, but the facet reference is a DID.
 */
export type AppBskyRichtextFacetMention = {
  did: string;
};

/** @internal */
export const AppBskyRichtextFacetMention$inboundSchema: z.ZodType<
  AppBskyRichtextFacetMention,
  z.ZodTypeDef,
  unknown
> = z.object({
  did: z.string(),
});

/** @internal */
export type AppBskyRichtextFacetMention$Outbound = {
  did: string;
};

/** @internal */
export const AppBskyRichtextFacetMention$outboundSchema: z.ZodType<
  AppBskyRichtextFacetMention$Outbound,
  z.ZodTypeDef,
  AppBskyRichtextFacetMention
> = z.object({
  did: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyRichtextFacetMention$ {
  /** @deprecated use `AppBskyRichtextFacetMention$inboundSchema` instead. */
  export const inboundSchema = AppBskyRichtextFacetMention$inboundSchema;
  /** @deprecated use `AppBskyRichtextFacetMention$outboundSchema` instead. */
  export const outboundSchema = AppBskyRichtextFacetMention$outboundSchema;
  /** @deprecated use `AppBskyRichtextFacetMention$Outbound` instead. */
  export type Outbound = AppBskyRichtextFacetMention$Outbound;
}

export function appBskyRichtextFacetMentionToJSON(
  appBskyRichtextFacetMention: AppBskyRichtextFacetMention,
): string {
  return JSON.stringify(
    AppBskyRichtextFacetMention$outboundSchema.parse(
      appBskyRichtextFacetMention,
    ),
  );
}

export function appBskyRichtextFacetMentionFromJSON(
  jsonString: string,
): SafeParseResult<AppBskyRichtextFacetMention, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AppBskyRichtextFacetMention$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AppBskyRichtextFacetMention' from JSON`,
  );
}
