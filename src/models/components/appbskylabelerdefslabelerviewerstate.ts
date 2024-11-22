/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AppBskyLabelerDefsLabelerViewerState = {
  like?: string | undefined;
};

/** @internal */
export const AppBskyLabelerDefsLabelerViewerState$inboundSchema: z.ZodType<
  AppBskyLabelerDefsLabelerViewerState,
  z.ZodTypeDef,
  unknown
> = z.object({
  like: z.string().optional(),
});

/** @internal */
export type AppBskyLabelerDefsLabelerViewerState$Outbound = {
  like?: string | undefined;
};

/** @internal */
export const AppBskyLabelerDefsLabelerViewerState$outboundSchema: z.ZodType<
  AppBskyLabelerDefsLabelerViewerState$Outbound,
  z.ZodTypeDef,
  AppBskyLabelerDefsLabelerViewerState
> = z.object({
  like: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyLabelerDefsLabelerViewerState$ {
  /** @deprecated use `AppBskyLabelerDefsLabelerViewerState$inboundSchema` instead. */
  export const inboundSchema =
    AppBskyLabelerDefsLabelerViewerState$inboundSchema;
  /** @deprecated use `AppBskyLabelerDefsLabelerViewerState$outboundSchema` instead. */
  export const outboundSchema =
    AppBskyLabelerDefsLabelerViewerState$outboundSchema;
  /** @deprecated use `AppBskyLabelerDefsLabelerViewerState$Outbound` instead. */
  export type Outbound = AppBskyLabelerDefsLabelerViewerState$Outbound;
}

export function appBskyLabelerDefsLabelerViewerStateToJSON(
  appBskyLabelerDefsLabelerViewerState: AppBskyLabelerDefsLabelerViewerState,
): string {
  return JSON.stringify(
    AppBskyLabelerDefsLabelerViewerState$outboundSchema.parse(
      appBskyLabelerDefsLabelerViewerState,
    ),
  );
}

export function appBskyLabelerDefsLabelerViewerStateFromJSON(
  jsonString: string,
): SafeParseResult<AppBskyLabelerDefsLabelerViewerState, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AppBskyLabelerDefsLabelerViewerState$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AppBskyLabelerDefsLabelerViewerState' from JSON`,
  );
}
