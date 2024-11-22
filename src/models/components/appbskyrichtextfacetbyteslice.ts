/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Specifies the sub-string range a facet feature applies to. Start index is inclusive, end index is exclusive. Indices are zero-indexed, counting bytes of the UTF-8 encoded text. NOTE: some languages, like Javascript, use UTF-16 or Unicode codepoints for string slice indexing; in these languages, convert to byte arrays before working with facets.
 */
export type AppBskyRichtextFacetByteSlice = {
  byteStart: number;
  byteEnd: number;
};

/** @internal */
export const AppBskyRichtextFacetByteSlice$inboundSchema: z.ZodType<
  AppBskyRichtextFacetByteSlice,
  z.ZodTypeDef,
  unknown
> = z.object({
  byteStart: z.number().int(),
  byteEnd: z.number().int(),
});

/** @internal */
export type AppBskyRichtextFacetByteSlice$Outbound = {
  byteStart: number;
  byteEnd: number;
};

/** @internal */
export const AppBskyRichtextFacetByteSlice$outboundSchema: z.ZodType<
  AppBskyRichtextFacetByteSlice$Outbound,
  z.ZodTypeDef,
  AppBskyRichtextFacetByteSlice
> = z.object({
  byteStart: z.number().int(),
  byteEnd: z.number().int(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyRichtextFacetByteSlice$ {
  /** @deprecated use `AppBskyRichtextFacetByteSlice$inboundSchema` instead. */
  export const inboundSchema = AppBskyRichtextFacetByteSlice$inboundSchema;
  /** @deprecated use `AppBskyRichtextFacetByteSlice$outboundSchema` instead. */
  export const outboundSchema = AppBskyRichtextFacetByteSlice$outboundSchema;
  /** @deprecated use `AppBskyRichtextFacetByteSlice$Outbound` instead. */
  export type Outbound = AppBskyRichtextFacetByteSlice$Outbound;
}

export function appBskyRichtextFacetByteSliceToJSON(
  appBskyRichtextFacetByteSlice: AppBskyRichtextFacetByteSlice,
): string {
  return JSON.stringify(
    AppBskyRichtextFacetByteSlice$outboundSchema.parse(
      appBskyRichtextFacetByteSlice,
    ),
  );
}

export function appBskyRichtextFacetByteSliceFromJSON(
  jsonString: string,
): SafeParseResult<AppBskyRichtextFacetByteSlice, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AppBskyRichtextFacetByteSlice$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AppBskyRichtextFacetByteSlice' from JSON`,
  );
}
