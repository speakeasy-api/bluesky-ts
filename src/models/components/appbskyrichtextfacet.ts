/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  AppBskyRichtextFacetByteSlice,
  AppBskyRichtextFacetByteSlice$inboundSchema,
  AppBskyRichtextFacetByteSlice$Outbound,
  AppBskyRichtextFacetByteSlice$outboundSchema,
} from "./appbskyrichtextfacetbyteslice.js";
import {
  AppBskyRichtextFacetLink,
  AppBskyRichtextFacetLink$inboundSchema,
  AppBskyRichtextFacetLink$Outbound,
  AppBskyRichtextFacetLink$outboundSchema,
} from "./appbskyrichtextfacetlink.js";
import {
  AppBskyRichtextFacetMention,
  AppBskyRichtextFacetMention$inboundSchema,
  AppBskyRichtextFacetMention$Outbound,
  AppBskyRichtextFacetMention$outboundSchema,
} from "./appbskyrichtextfacetmention.js";
import {
  AppBskyRichtextFacetTag,
  AppBskyRichtextFacetTag$inboundSchema,
  AppBskyRichtextFacetTag$Outbound,
  AppBskyRichtextFacetTag$outboundSchema,
} from "./appbskyrichtextfacettag.js";

export type Features =
  | AppBskyRichtextFacetMention
  | AppBskyRichtextFacetLink
  | AppBskyRichtextFacetTag;

/**
 * Annotation of a sub-string within rich text.
 */
export type AppBskyRichtextFacet = {
  /**
   * Specifies the sub-string range a facet feature applies to. Start index is inclusive, end index is exclusive. Indices are zero-indexed, counting bytes of the UTF-8 encoded text. NOTE: some languages, like Javascript, use UTF-16 or Unicode codepoints for string slice indexing; in these languages, convert to byte arrays before working with facets.
   */
  index: AppBskyRichtextFacetByteSlice;
  features: Array<
    | AppBskyRichtextFacetMention
    | AppBskyRichtextFacetLink
    | AppBskyRichtextFacetTag
  >;
};

/** @internal */
export const Features$inboundSchema: z.ZodType<
  Features,
  z.ZodTypeDef,
  unknown
> = z.union([
  AppBskyRichtextFacetMention$inboundSchema,
  AppBskyRichtextFacetLink$inboundSchema,
  AppBskyRichtextFacetTag$inboundSchema,
]);

/** @internal */
export type Features$Outbound =
  | AppBskyRichtextFacetMention$Outbound
  | AppBskyRichtextFacetLink$Outbound
  | AppBskyRichtextFacetTag$Outbound;

/** @internal */
export const Features$outboundSchema: z.ZodType<
  Features$Outbound,
  z.ZodTypeDef,
  Features
> = z.union([
  AppBskyRichtextFacetMention$outboundSchema,
  AppBskyRichtextFacetLink$outboundSchema,
  AppBskyRichtextFacetTag$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Features$ {
  /** @deprecated use `Features$inboundSchema` instead. */
  export const inboundSchema = Features$inboundSchema;
  /** @deprecated use `Features$outboundSchema` instead. */
  export const outboundSchema = Features$outboundSchema;
  /** @deprecated use `Features$Outbound` instead. */
  export type Outbound = Features$Outbound;
}

export function featuresToJSON(features: Features): string {
  return JSON.stringify(Features$outboundSchema.parse(features));
}

export function featuresFromJSON(
  jsonString: string,
): SafeParseResult<Features, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Features$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Features' from JSON`,
  );
}

/** @internal */
export const AppBskyRichtextFacet$inboundSchema: z.ZodType<
  AppBskyRichtextFacet,
  z.ZodTypeDef,
  unknown
> = z.object({
  index: AppBskyRichtextFacetByteSlice$inboundSchema,
  features: z.array(
    z.union([
      AppBskyRichtextFacetMention$inboundSchema,
      AppBskyRichtextFacetLink$inboundSchema,
      AppBskyRichtextFacetTag$inboundSchema,
    ]),
  ),
});

/** @internal */
export type AppBskyRichtextFacet$Outbound = {
  index: AppBskyRichtextFacetByteSlice$Outbound;
  features: Array<
    | AppBskyRichtextFacetMention$Outbound
    | AppBskyRichtextFacetLink$Outbound
    | AppBskyRichtextFacetTag$Outbound
  >;
};

/** @internal */
export const AppBskyRichtextFacet$outboundSchema: z.ZodType<
  AppBskyRichtextFacet$Outbound,
  z.ZodTypeDef,
  AppBskyRichtextFacet
> = z.object({
  index: AppBskyRichtextFacetByteSlice$outboundSchema,
  features: z.array(
    z.union([
      AppBskyRichtextFacetMention$outboundSchema,
      AppBskyRichtextFacetLink$outboundSchema,
      AppBskyRichtextFacetTag$outboundSchema,
    ]),
  ),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyRichtextFacet$ {
  /** @deprecated use `AppBskyRichtextFacet$inboundSchema` instead. */
  export const inboundSchema = AppBskyRichtextFacet$inboundSchema;
  /** @deprecated use `AppBskyRichtextFacet$outboundSchema` instead. */
  export const outboundSchema = AppBskyRichtextFacet$outboundSchema;
  /** @deprecated use `AppBskyRichtextFacet$Outbound` instead. */
  export type Outbound = AppBskyRichtextFacet$Outbound;
}

export function appBskyRichtextFacetToJSON(
  appBskyRichtextFacet: AppBskyRichtextFacet,
): string {
  return JSON.stringify(
    AppBskyRichtextFacet$outboundSchema.parse(appBskyRichtextFacet),
  );
}

export function appBskyRichtextFacetFromJSON(
  jsonString: string,
): SafeParseResult<AppBskyRichtextFacet, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AppBskyRichtextFacet$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AppBskyRichtextFacet' from JSON`,
  );
}
