/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AppBskyGraphUnmuteActorRequestBody = {
  actor: string;
};

/** @internal */
export const AppBskyGraphUnmuteActorRequestBody$inboundSchema: z.ZodType<
  AppBskyGraphUnmuteActorRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  actor: z.string(),
});

/** @internal */
export type AppBskyGraphUnmuteActorRequestBody$Outbound = {
  actor: string;
};

/** @internal */
export const AppBskyGraphUnmuteActorRequestBody$outboundSchema: z.ZodType<
  AppBskyGraphUnmuteActorRequestBody$Outbound,
  z.ZodTypeDef,
  AppBskyGraphUnmuteActorRequestBody
> = z.object({
  actor: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyGraphUnmuteActorRequestBody$ {
  /** @deprecated use `AppBskyGraphUnmuteActorRequestBody$inboundSchema` instead. */
  export const inboundSchema = AppBskyGraphUnmuteActorRequestBody$inboundSchema;
  /** @deprecated use `AppBskyGraphUnmuteActorRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    AppBskyGraphUnmuteActorRequestBody$outboundSchema;
  /** @deprecated use `AppBskyGraphUnmuteActorRequestBody$Outbound` instead. */
  export type Outbound = AppBskyGraphUnmuteActorRequestBody$Outbound;
}

export function appBskyGraphUnmuteActorRequestBodyToJSON(
  appBskyGraphUnmuteActorRequestBody: AppBskyGraphUnmuteActorRequestBody,
): string {
  return JSON.stringify(
    AppBskyGraphUnmuteActorRequestBody$outboundSchema.parse(
      appBskyGraphUnmuteActorRequestBody,
    ),
  );
}

export function appBskyGraphUnmuteActorRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<AppBskyGraphUnmuteActorRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AppBskyGraphUnmuteActorRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AppBskyGraphUnmuteActorRequestBody' from JSON`,
  );
}
