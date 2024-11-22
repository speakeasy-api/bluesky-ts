/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AppBskyLabelerGetServicesRequest = {
  dids: Array<string>;
  detailed?: boolean | undefined;
};

export type Views =
  | components.AppBskyLabelerDefsLabelerView
  | components.AppBskyLabelerDefsLabelerViewDetailed;

/**
 * OK
 */
export type AppBskyLabelerGetServicesResponseBody = {
  views: Array<
    | components.AppBskyLabelerDefsLabelerView
    | components.AppBskyLabelerDefsLabelerViewDetailed
  >;
};

/** @internal */
export const AppBskyLabelerGetServicesRequest$inboundSchema: z.ZodType<
  AppBskyLabelerGetServicesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  dids: z.array(z.string()),
  detailed: z.boolean().optional(),
});

/** @internal */
export type AppBskyLabelerGetServicesRequest$Outbound = {
  dids: Array<string>;
  detailed?: boolean | undefined;
};

/** @internal */
export const AppBskyLabelerGetServicesRequest$outboundSchema: z.ZodType<
  AppBskyLabelerGetServicesRequest$Outbound,
  z.ZodTypeDef,
  AppBskyLabelerGetServicesRequest
> = z.object({
  dids: z.array(z.string()),
  detailed: z.boolean().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyLabelerGetServicesRequest$ {
  /** @deprecated use `AppBskyLabelerGetServicesRequest$inboundSchema` instead. */
  export const inboundSchema = AppBskyLabelerGetServicesRequest$inboundSchema;
  /** @deprecated use `AppBskyLabelerGetServicesRequest$outboundSchema` instead. */
  export const outboundSchema = AppBskyLabelerGetServicesRequest$outboundSchema;
  /** @deprecated use `AppBskyLabelerGetServicesRequest$Outbound` instead. */
  export type Outbound = AppBskyLabelerGetServicesRequest$Outbound;
}

export function appBskyLabelerGetServicesRequestToJSON(
  appBskyLabelerGetServicesRequest: AppBskyLabelerGetServicesRequest,
): string {
  return JSON.stringify(
    AppBskyLabelerGetServicesRequest$outboundSchema.parse(
      appBskyLabelerGetServicesRequest,
    ),
  );
}

export function appBskyLabelerGetServicesRequestFromJSON(
  jsonString: string,
): SafeParseResult<AppBskyLabelerGetServicesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AppBskyLabelerGetServicesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AppBskyLabelerGetServicesRequest' from JSON`,
  );
}

/** @internal */
export const Views$inboundSchema: z.ZodType<Views, z.ZodTypeDef, unknown> = z
  .union([
    components.AppBskyLabelerDefsLabelerView$inboundSchema,
    components.AppBskyLabelerDefsLabelerViewDetailed$inboundSchema,
  ]);

/** @internal */
export type Views$Outbound =
  | components.AppBskyLabelerDefsLabelerView$Outbound
  | components.AppBskyLabelerDefsLabelerViewDetailed$Outbound;

/** @internal */
export const Views$outboundSchema: z.ZodType<
  Views$Outbound,
  z.ZodTypeDef,
  Views
> = z.union([
  components.AppBskyLabelerDefsLabelerView$outboundSchema,
  components.AppBskyLabelerDefsLabelerViewDetailed$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Views$ {
  /** @deprecated use `Views$inboundSchema` instead. */
  export const inboundSchema = Views$inboundSchema;
  /** @deprecated use `Views$outboundSchema` instead. */
  export const outboundSchema = Views$outboundSchema;
  /** @deprecated use `Views$Outbound` instead. */
  export type Outbound = Views$Outbound;
}

export function viewsToJSON(views: Views): string {
  return JSON.stringify(Views$outboundSchema.parse(views));
}

export function viewsFromJSON(
  jsonString: string,
): SafeParseResult<Views, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Views$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Views' from JSON`,
  );
}

/** @internal */
export const AppBskyLabelerGetServicesResponseBody$inboundSchema: z.ZodType<
  AppBskyLabelerGetServicesResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  views: z.array(
    z.union([
      components.AppBskyLabelerDefsLabelerView$inboundSchema,
      components.AppBskyLabelerDefsLabelerViewDetailed$inboundSchema,
    ]),
  ),
});

/** @internal */
export type AppBskyLabelerGetServicesResponseBody$Outbound = {
  views: Array<
    | components.AppBskyLabelerDefsLabelerView$Outbound
    | components.AppBskyLabelerDefsLabelerViewDetailed$Outbound
  >;
};

/** @internal */
export const AppBskyLabelerGetServicesResponseBody$outboundSchema: z.ZodType<
  AppBskyLabelerGetServicesResponseBody$Outbound,
  z.ZodTypeDef,
  AppBskyLabelerGetServicesResponseBody
> = z.object({
  views: z.array(
    z.union([
      components.AppBskyLabelerDefsLabelerView$outboundSchema,
      components.AppBskyLabelerDefsLabelerViewDetailed$outboundSchema,
    ]),
  ),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyLabelerGetServicesResponseBody$ {
  /** @deprecated use `AppBskyLabelerGetServicesResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    AppBskyLabelerGetServicesResponseBody$inboundSchema;
  /** @deprecated use `AppBskyLabelerGetServicesResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    AppBskyLabelerGetServicesResponseBody$outboundSchema;
  /** @deprecated use `AppBskyLabelerGetServicesResponseBody$Outbound` instead. */
  export type Outbound = AppBskyLabelerGetServicesResponseBody$Outbound;
}

export function appBskyLabelerGetServicesResponseBodyToJSON(
  appBskyLabelerGetServicesResponseBody: AppBskyLabelerGetServicesResponseBody,
): string {
  return JSON.stringify(
    AppBskyLabelerGetServicesResponseBody$outboundSchema.parse(
      appBskyLabelerGetServicesResponseBody,
    ),
  );
}

export function appBskyLabelerGetServicesResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<AppBskyLabelerGetServicesResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AppBskyLabelerGetServicesResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AppBskyLabelerGetServicesResponseBody' from JSON`,
  );
}
