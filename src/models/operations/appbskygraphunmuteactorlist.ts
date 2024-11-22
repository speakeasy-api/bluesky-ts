/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AppBskyGraphUnmuteActorListRequestBody = {
  list: string;
};

/** @internal */
export const AppBskyGraphUnmuteActorListRequestBody$inboundSchema: z.ZodType<
  AppBskyGraphUnmuteActorListRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  list: z.string(),
});

/** @internal */
export type AppBskyGraphUnmuteActorListRequestBody$Outbound = {
  list: string;
};

/** @internal */
export const AppBskyGraphUnmuteActorListRequestBody$outboundSchema: z.ZodType<
  AppBskyGraphUnmuteActorListRequestBody$Outbound,
  z.ZodTypeDef,
  AppBskyGraphUnmuteActorListRequestBody
> = z.object({
  list: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyGraphUnmuteActorListRequestBody$ {
  /** @deprecated use `AppBskyGraphUnmuteActorListRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    AppBskyGraphUnmuteActorListRequestBody$inboundSchema;
  /** @deprecated use `AppBskyGraphUnmuteActorListRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    AppBskyGraphUnmuteActorListRequestBody$outboundSchema;
  /** @deprecated use `AppBskyGraphUnmuteActorListRequestBody$Outbound` instead. */
  export type Outbound = AppBskyGraphUnmuteActorListRequestBody$Outbound;
}

export function appBskyGraphUnmuteActorListRequestBodyToJSON(
  appBskyGraphUnmuteActorListRequestBody:
    AppBskyGraphUnmuteActorListRequestBody,
): string {
  return JSON.stringify(
    AppBskyGraphUnmuteActorListRequestBody$outboundSchema.parse(
      appBskyGraphUnmuteActorListRequestBody,
    ),
  );
}

export function appBskyGraphUnmuteActorListRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<AppBskyGraphUnmuteActorListRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AppBskyGraphUnmuteActorListRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AppBskyGraphUnmuteActorListRequestBody' from JSON`,
  );
}
