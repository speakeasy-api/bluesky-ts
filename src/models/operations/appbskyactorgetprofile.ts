/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AppBskyActorGetProfileRequest = {
  /**
   * Handle or DID of account to fetch profile of.
   */
  actor: string;
};

/** @internal */
export const AppBskyActorGetProfileRequest$inboundSchema: z.ZodType<
  AppBskyActorGetProfileRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  actor: z.string(),
});

/** @internal */
export type AppBskyActorGetProfileRequest$Outbound = {
  actor: string;
};

/** @internal */
export const AppBskyActorGetProfileRequest$outboundSchema: z.ZodType<
  AppBskyActorGetProfileRequest$Outbound,
  z.ZodTypeDef,
  AppBskyActorGetProfileRequest
> = z.object({
  actor: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyActorGetProfileRequest$ {
  /** @deprecated use `AppBskyActorGetProfileRequest$inboundSchema` instead. */
  export const inboundSchema = AppBskyActorGetProfileRequest$inboundSchema;
  /** @deprecated use `AppBskyActorGetProfileRequest$outboundSchema` instead. */
  export const outboundSchema = AppBskyActorGetProfileRequest$outboundSchema;
  /** @deprecated use `AppBskyActorGetProfileRequest$Outbound` instead. */
  export type Outbound = AppBskyActorGetProfileRequest$Outbound;
}

export function appBskyActorGetProfileRequestToJSON(
  appBskyActorGetProfileRequest: AppBskyActorGetProfileRequest,
): string {
  return JSON.stringify(
    AppBskyActorGetProfileRequest$outboundSchema.parse(
      appBskyActorGetProfileRequest,
    ),
  );
}

export function appBskyActorGetProfileRequestFromJSON(
  jsonString: string,
): SafeParseResult<AppBskyActorGetProfileRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AppBskyActorGetProfileRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AppBskyActorGetProfileRequest' from JSON`,
  );
}
