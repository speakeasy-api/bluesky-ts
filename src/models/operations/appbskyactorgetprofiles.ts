/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AppBskyActorGetProfilesRequest = {
  actors: Array<string>;
};

/**
 * OK
 */
export type AppBskyActorGetProfilesResponseBody = {
  profiles: Array<components.AppBskyActorDefsProfileViewDetailed>;
};

/** @internal */
export const AppBskyActorGetProfilesRequest$inboundSchema: z.ZodType<
  AppBskyActorGetProfilesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  actors: z.array(z.string()),
});

/** @internal */
export type AppBskyActorGetProfilesRequest$Outbound = {
  actors: Array<string>;
};

/** @internal */
export const AppBskyActorGetProfilesRequest$outboundSchema: z.ZodType<
  AppBskyActorGetProfilesRequest$Outbound,
  z.ZodTypeDef,
  AppBskyActorGetProfilesRequest
> = z.object({
  actors: z.array(z.string()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyActorGetProfilesRequest$ {
  /** @deprecated use `AppBskyActorGetProfilesRequest$inboundSchema` instead. */
  export const inboundSchema = AppBskyActorGetProfilesRequest$inboundSchema;
  /** @deprecated use `AppBskyActorGetProfilesRequest$outboundSchema` instead. */
  export const outboundSchema = AppBskyActorGetProfilesRequest$outboundSchema;
  /** @deprecated use `AppBskyActorGetProfilesRequest$Outbound` instead. */
  export type Outbound = AppBskyActorGetProfilesRequest$Outbound;
}

export function appBskyActorGetProfilesRequestToJSON(
  appBskyActorGetProfilesRequest: AppBskyActorGetProfilesRequest,
): string {
  return JSON.stringify(
    AppBskyActorGetProfilesRequest$outboundSchema.parse(
      appBskyActorGetProfilesRequest,
    ),
  );
}

export function appBskyActorGetProfilesRequestFromJSON(
  jsonString: string,
): SafeParseResult<AppBskyActorGetProfilesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AppBskyActorGetProfilesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AppBskyActorGetProfilesRequest' from JSON`,
  );
}

/** @internal */
export const AppBskyActorGetProfilesResponseBody$inboundSchema: z.ZodType<
  AppBskyActorGetProfilesResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  profiles: z.array(
    components.AppBskyActorDefsProfileViewDetailed$inboundSchema,
  ),
});

/** @internal */
export type AppBskyActorGetProfilesResponseBody$Outbound = {
  profiles: Array<components.AppBskyActorDefsProfileViewDetailed$Outbound>;
};

/** @internal */
export const AppBskyActorGetProfilesResponseBody$outboundSchema: z.ZodType<
  AppBskyActorGetProfilesResponseBody$Outbound,
  z.ZodTypeDef,
  AppBskyActorGetProfilesResponseBody
> = z.object({
  profiles: z.array(
    components.AppBskyActorDefsProfileViewDetailed$outboundSchema,
  ),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyActorGetProfilesResponseBody$ {
  /** @deprecated use `AppBskyActorGetProfilesResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    AppBskyActorGetProfilesResponseBody$inboundSchema;
  /** @deprecated use `AppBskyActorGetProfilesResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    AppBskyActorGetProfilesResponseBody$outboundSchema;
  /** @deprecated use `AppBskyActorGetProfilesResponseBody$Outbound` instead. */
  export type Outbound = AppBskyActorGetProfilesResponseBody$Outbound;
}

export function appBskyActorGetProfilesResponseBodyToJSON(
  appBskyActorGetProfilesResponseBody: AppBskyActorGetProfilesResponseBody,
): string {
  return JSON.stringify(
    AppBskyActorGetProfilesResponseBody$outboundSchema.parse(
      appBskyActorGetProfilesResponseBody,
    ),
  );
}

export function appBskyActorGetProfilesResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<AppBskyActorGetProfilesResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AppBskyActorGetProfilesResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AppBskyActorGetProfilesResponseBody' from JSON`,
  );
}
