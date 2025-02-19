/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AppBskyGraphUnmuteThreadBody = {
  root: string;
};

/** @internal */
export const AppBskyGraphUnmuteThreadBody$inboundSchema: z.ZodType<
  AppBskyGraphUnmuteThreadBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  root: z.string(),
});

/** @internal */
export type AppBskyGraphUnmuteThreadBody$Outbound = {
  root: string;
};

/** @internal */
export const AppBskyGraphUnmuteThreadBody$outboundSchema: z.ZodType<
  AppBskyGraphUnmuteThreadBody$Outbound,
  z.ZodTypeDef,
  AppBskyGraphUnmuteThreadBody
> = z.object({
  root: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyGraphUnmuteThreadBody$ {
  /** @deprecated use `AppBskyGraphUnmuteThreadBody$inboundSchema` instead. */
  export const inboundSchema = AppBskyGraphUnmuteThreadBody$inboundSchema;
  /** @deprecated use `AppBskyGraphUnmuteThreadBody$outboundSchema` instead. */
  export const outboundSchema = AppBskyGraphUnmuteThreadBody$outboundSchema;
  /** @deprecated use `AppBskyGraphUnmuteThreadBody$Outbound` instead. */
  export type Outbound = AppBskyGraphUnmuteThreadBody$Outbound;
}

export function appBskyGraphUnmuteThreadBodyToJSON(
  appBskyGraphUnmuteThreadBody: AppBskyGraphUnmuteThreadBody,
): string {
  return JSON.stringify(
    AppBskyGraphUnmuteThreadBody$outboundSchema.parse(
      appBskyGraphUnmuteThreadBody,
    ),
  );
}

export function appBskyGraphUnmuteThreadBodyFromJSON(
  jsonString: string,
): SafeParseResult<AppBskyGraphUnmuteThreadBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AppBskyGraphUnmuteThreadBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AppBskyGraphUnmuteThreadBody' from JSON`,
  );
}
