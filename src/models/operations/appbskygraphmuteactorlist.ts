/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AppBskyGraphMuteActorListBody = {
  list: string;
};

/** @internal */
export const AppBskyGraphMuteActorListBody$inboundSchema: z.ZodType<
  AppBskyGraphMuteActorListBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  list: z.string(),
});

/** @internal */
export type AppBskyGraphMuteActorListBody$Outbound = {
  list: string;
};

/** @internal */
export const AppBskyGraphMuteActorListBody$outboundSchema: z.ZodType<
  AppBskyGraphMuteActorListBody$Outbound,
  z.ZodTypeDef,
  AppBskyGraphMuteActorListBody
> = z.object({
  list: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyGraphMuteActorListBody$ {
  /** @deprecated use `AppBskyGraphMuteActorListBody$inboundSchema` instead. */
  export const inboundSchema = AppBskyGraphMuteActorListBody$inboundSchema;
  /** @deprecated use `AppBskyGraphMuteActorListBody$outboundSchema` instead. */
  export const outboundSchema = AppBskyGraphMuteActorListBody$outboundSchema;
  /** @deprecated use `AppBskyGraphMuteActorListBody$Outbound` instead. */
  export type Outbound = AppBskyGraphMuteActorListBody$Outbound;
}

export function appBskyGraphMuteActorListBodyToJSON(
  appBskyGraphMuteActorListBody: AppBskyGraphMuteActorListBody,
): string {
  return JSON.stringify(
    AppBskyGraphMuteActorListBody$outboundSchema.parse(
      appBskyGraphMuteActorListBody,
    ),
  );
}

export function appBskyGraphMuteActorListBodyFromJSON(
  jsonString: string,
): SafeParseResult<AppBskyGraphMuteActorListBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AppBskyGraphMuteActorListBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AppBskyGraphMuteActorListBody' from JSON`,
  );
}
