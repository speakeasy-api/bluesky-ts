/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AppBskyNotificationPutPreferencesBody = {
  priority: boolean;
};

/** @internal */
export const AppBskyNotificationPutPreferencesBody$inboundSchema: z.ZodType<
  AppBskyNotificationPutPreferencesBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  priority: z.boolean(),
});

/** @internal */
export type AppBskyNotificationPutPreferencesBody$Outbound = {
  priority: boolean;
};

/** @internal */
export const AppBskyNotificationPutPreferencesBody$outboundSchema: z.ZodType<
  AppBskyNotificationPutPreferencesBody$Outbound,
  z.ZodTypeDef,
  AppBskyNotificationPutPreferencesBody
> = z.object({
  priority: z.boolean(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyNotificationPutPreferencesBody$ {
  /** @deprecated use `AppBskyNotificationPutPreferencesBody$inboundSchema` instead. */
  export const inboundSchema =
    AppBskyNotificationPutPreferencesBody$inboundSchema;
  /** @deprecated use `AppBskyNotificationPutPreferencesBody$outboundSchema` instead. */
  export const outboundSchema =
    AppBskyNotificationPutPreferencesBody$outboundSchema;
  /** @deprecated use `AppBskyNotificationPutPreferencesBody$Outbound` instead. */
  export type Outbound = AppBskyNotificationPutPreferencesBody$Outbound;
}

export function appBskyNotificationPutPreferencesBodyToJSON(
  appBskyNotificationPutPreferencesBody: AppBskyNotificationPutPreferencesBody,
): string {
  return JSON.stringify(
    AppBskyNotificationPutPreferencesBody$outboundSchema.parse(
      appBskyNotificationPutPreferencesBody,
    ),
  );
}

export function appBskyNotificationPutPreferencesBodyFromJSON(
  jsonString: string,
): SafeParseResult<AppBskyNotificationPutPreferencesBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AppBskyNotificationPutPreferencesBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AppBskyNotificationPutPreferencesBody' from JSON`,
  );
}
