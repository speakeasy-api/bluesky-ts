/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AppBskyNotificationListNotificationsRequest = {
  limit?: number | undefined;
  priority?: boolean | undefined;
  cursor?: string | undefined;
  seenAt?: Date | undefined;
};

/**
 * OK
 */
export type AppBskyNotificationListNotificationsResponseBody = {
  cursor?: string | undefined;
  notifications: Array<
    components.AppBskyNotificationListNotificationsNotification
  >;
  priority?: boolean | undefined;
  seenAt?: Date | undefined;
};

export type AppBskyNotificationListNotificationsResponse = {
  result: AppBskyNotificationListNotificationsResponseBody;
};

/** @internal */
export const AppBskyNotificationListNotificationsRequest$inboundSchema:
  z.ZodType<
    AppBskyNotificationListNotificationsRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    limit: z.number().int().default(50),
    priority: z.boolean().optional(),
    cursor: z.string().optional(),
    seenAt: z.string().datetime({ offset: true }).transform(v => new Date(v))
      .optional(),
  });

/** @internal */
export type AppBskyNotificationListNotificationsRequest$Outbound = {
  limit: number;
  priority?: boolean | undefined;
  cursor?: string | undefined;
  seenAt?: string | undefined;
};

/** @internal */
export const AppBskyNotificationListNotificationsRequest$outboundSchema:
  z.ZodType<
    AppBskyNotificationListNotificationsRequest$Outbound,
    z.ZodTypeDef,
    AppBskyNotificationListNotificationsRequest
  > = z.object({
    limit: z.number().int().default(50),
    priority: z.boolean().optional(),
    cursor: z.string().optional(),
    seenAt: z.date().transform(v => v.toISOString()).optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyNotificationListNotificationsRequest$ {
  /** @deprecated use `AppBskyNotificationListNotificationsRequest$inboundSchema` instead. */
  export const inboundSchema =
    AppBskyNotificationListNotificationsRequest$inboundSchema;
  /** @deprecated use `AppBskyNotificationListNotificationsRequest$outboundSchema` instead. */
  export const outboundSchema =
    AppBskyNotificationListNotificationsRequest$outboundSchema;
  /** @deprecated use `AppBskyNotificationListNotificationsRequest$Outbound` instead. */
  export type Outbound = AppBskyNotificationListNotificationsRequest$Outbound;
}

export function appBskyNotificationListNotificationsRequestToJSON(
  appBskyNotificationListNotificationsRequest:
    AppBskyNotificationListNotificationsRequest,
): string {
  return JSON.stringify(
    AppBskyNotificationListNotificationsRequest$outboundSchema.parse(
      appBskyNotificationListNotificationsRequest,
    ),
  );
}

export function appBskyNotificationListNotificationsRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  AppBskyNotificationListNotificationsRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      AppBskyNotificationListNotificationsRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'AppBskyNotificationListNotificationsRequest' from JSON`,
  );
}

/** @internal */
export const AppBskyNotificationListNotificationsResponseBody$inboundSchema:
  z.ZodType<
    AppBskyNotificationListNotificationsResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    cursor: z.string().optional(),
    notifications: z.array(
      components.AppBskyNotificationListNotificationsNotification$inboundSchema,
    ),
    priority: z.boolean().optional(),
    seenAt: z.string().datetime({ offset: true }).transform(v => new Date(v))
      .optional(),
  });

/** @internal */
export type AppBskyNotificationListNotificationsResponseBody$Outbound = {
  cursor?: string | undefined;
  notifications: Array<
    components.AppBskyNotificationListNotificationsNotification$Outbound
  >;
  priority?: boolean | undefined;
  seenAt?: string | undefined;
};

/** @internal */
export const AppBskyNotificationListNotificationsResponseBody$outboundSchema:
  z.ZodType<
    AppBskyNotificationListNotificationsResponseBody$Outbound,
    z.ZodTypeDef,
    AppBskyNotificationListNotificationsResponseBody
  > = z.object({
    cursor: z.string().optional(),
    notifications: z.array(
      components
        .AppBskyNotificationListNotificationsNotification$outboundSchema,
    ),
    priority: z.boolean().optional(),
    seenAt: z.date().transform(v => v.toISOString()).optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyNotificationListNotificationsResponseBody$ {
  /** @deprecated use `AppBskyNotificationListNotificationsResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    AppBskyNotificationListNotificationsResponseBody$inboundSchema;
  /** @deprecated use `AppBskyNotificationListNotificationsResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    AppBskyNotificationListNotificationsResponseBody$outboundSchema;
  /** @deprecated use `AppBskyNotificationListNotificationsResponseBody$Outbound` instead. */
  export type Outbound =
    AppBskyNotificationListNotificationsResponseBody$Outbound;
}

export function appBskyNotificationListNotificationsResponseBodyToJSON(
  appBskyNotificationListNotificationsResponseBody:
    AppBskyNotificationListNotificationsResponseBody,
): string {
  return JSON.stringify(
    AppBskyNotificationListNotificationsResponseBody$outboundSchema.parse(
      appBskyNotificationListNotificationsResponseBody,
    ),
  );
}

export function appBskyNotificationListNotificationsResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  AppBskyNotificationListNotificationsResponseBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      AppBskyNotificationListNotificationsResponseBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'AppBskyNotificationListNotificationsResponseBody' from JSON`,
  );
}

/** @internal */
export const AppBskyNotificationListNotificationsResponse$inboundSchema:
  z.ZodType<
    AppBskyNotificationListNotificationsResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    Result: z.lazy(() =>
      AppBskyNotificationListNotificationsResponseBody$inboundSchema
    ),
  }).transform((v) => {
    return remap$(v, {
      "Result": "result",
    });
  });

/** @internal */
export type AppBskyNotificationListNotificationsResponse$Outbound = {
  Result: AppBskyNotificationListNotificationsResponseBody$Outbound;
};

/** @internal */
export const AppBskyNotificationListNotificationsResponse$outboundSchema:
  z.ZodType<
    AppBskyNotificationListNotificationsResponse$Outbound,
    z.ZodTypeDef,
    AppBskyNotificationListNotificationsResponse
  > = z.object({
    result: z.lazy(() =>
      AppBskyNotificationListNotificationsResponseBody$outboundSchema
    ),
  }).transform((v) => {
    return remap$(v, {
      result: "Result",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyNotificationListNotificationsResponse$ {
  /** @deprecated use `AppBskyNotificationListNotificationsResponse$inboundSchema` instead. */
  export const inboundSchema =
    AppBskyNotificationListNotificationsResponse$inboundSchema;
  /** @deprecated use `AppBskyNotificationListNotificationsResponse$outboundSchema` instead. */
  export const outboundSchema =
    AppBskyNotificationListNotificationsResponse$outboundSchema;
  /** @deprecated use `AppBskyNotificationListNotificationsResponse$Outbound` instead. */
  export type Outbound = AppBskyNotificationListNotificationsResponse$Outbound;
}

export function appBskyNotificationListNotificationsResponseToJSON(
  appBskyNotificationListNotificationsResponse:
    AppBskyNotificationListNotificationsResponse,
): string {
  return JSON.stringify(
    AppBskyNotificationListNotificationsResponse$outboundSchema.parse(
      appBskyNotificationListNotificationsResponse,
    ),
  );
}

export function appBskyNotificationListNotificationsResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  AppBskyNotificationListNotificationsResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      AppBskyNotificationListNotificationsResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'AppBskyNotificationListNotificationsResponse' from JSON`,
  );
}
