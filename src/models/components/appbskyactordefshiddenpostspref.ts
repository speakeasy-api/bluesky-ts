/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AppBskyActorDefsHiddenPostsPref = {
  items: Array<string>;
};

/** @internal */
export const AppBskyActorDefsHiddenPostsPref$inboundSchema: z.ZodType<
  AppBskyActorDefsHiddenPostsPref,
  z.ZodTypeDef,
  unknown
> = z.object({
  items: z.array(z.string()),
});

/** @internal */
export type AppBskyActorDefsHiddenPostsPref$Outbound = {
  items: Array<string>;
};

/** @internal */
export const AppBskyActorDefsHiddenPostsPref$outboundSchema: z.ZodType<
  AppBskyActorDefsHiddenPostsPref$Outbound,
  z.ZodTypeDef,
  AppBskyActorDefsHiddenPostsPref
> = z.object({
  items: z.array(z.string()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyActorDefsHiddenPostsPref$ {
  /** @deprecated use `AppBskyActorDefsHiddenPostsPref$inboundSchema` instead. */
  export const inboundSchema = AppBskyActorDefsHiddenPostsPref$inboundSchema;
  /** @deprecated use `AppBskyActorDefsHiddenPostsPref$outboundSchema` instead. */
  export const outboundSchema = AppBskyActorDefsHiddenPostsPref$outboundSchema;
  /** @deprecated use `AppBskyActorDefsHiddenPostsPref$Outbound` instead. */
  export type Outbound = AppBskyActorDefsHiddenPostsPref$Outbound;
}

export function appBskyActorDefsHiddenPostsPrefToJSON(
  appBskyActorDefsHiddenPostsPref: AppBskyActorDefsHiddenPostsPref,
): string {
  return JSON.stringify(
    AppBskyActorDefsHiddenPostsPref$outboundSchema.parse(
      appBskyActorDefsHiddenPostsPref,
    ),
  );
}

export function appBskyActorDefsHiddenPostsPrefFromJSON(
  jsonString: string,
): SafeParseResult<AppBskyActorDefsHiddenPostsPref, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AppBskyActorDefsHiddenPostsPref$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AppBskyActorDefsHiddenPostsPref' from JSON`,
  );
}
