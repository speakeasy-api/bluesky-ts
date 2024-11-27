/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AppBskyFeedGetListFeedRequest = {
  /**
   * Reference (AT-URI) to the list record.
   */
  list: string;
  limit?: number | undefined;
  cursor?: string | undefined;
};

/**
 * OK
 */
export type AppBskyFeedGetListFeedResponseBody = {
  cursor?: string | undefined;
  feed: Array<components.AppBskyFeedDefsFeedViewPost>;
};

export type AppBskyFeedGetListFeedResponse = {
  result: AppBskyFeedGetListFeedResponseBody;
};

/** @internal */
export const AppBskyFeedGetListFeedRequest$inboundSchema: z.ZodType<
  AppBskyFeedGetListFeedRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  list: z.string(),
  limit: z.number().int().default(50),
  cursor: z.string().optional(),
});

/** @internal */
export type AppBskyFeedGetListFeedRequest$Outbound = {
  list: string;
  limit: number;
  cursor?: string | undefined;
};

/** @internal */
export const AppBskyFeedGetListFeedRequest$outboundSchema: z.ZodType<
  AppBskyFeedGetListFeedRequest$Outbound,
  z.ZodTypeDef,
  AppBskyFeedGetListFeedRequest
> = z.object({
  list: z.string(),
  limit: z.number().int().default(50),
  cursor: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyFeedGetListFeedRequest$ {
  /** @deprecated use `AppBskyFeedGetListFeedRequest$inboundSchema` instead. */
  export const inboundSchema = AppBskyFeedGetListFeedRequest$inboundSchema;
  /** @deprecated use `AppBskyFeedGetListFeedRequest$outboundSchema` instead. */
  export const outboundSchema = AppBskyFeedGetListFeedRequest$outboundSchema;
  /** @deprecated use `AppBskyFeedGetListFeedRequest$Outbound` instead. */
  export type Outbound = AppBskyFeedGetListFeedRequest$Outbound;
}

export function appBskyFeedGetListFeedRequestToJSON(
  appBskyFeedGetListFeedRequest: AppBskyFeedGetListFeedRequest,
): string {
  return JSON.stringify(
    AppBskyFeedGetListFeedRequest$outboundSchema.parse(
      appBskyFeedGetListFeedRequest,
    ),
  );
}

export function appBskyFeedGetListFeedRequestFromJSON(
  jsonString: string,
): SafeParseResult<AppBskyFeedGetListFeedRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AppBskyFeedGetListFeedRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AppBskyFeedGetListFeedRequest' from JSON`,
  );
}

/** @internal */
export const AppBskyFeedGetListFeedResponseBody$inboundSchema: z.ZodType<
  AppBskyFeedGetListFeedResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  cursor: z.string().optional(),
  feed: z.array(components.AppBskyFeedDefsFeedViewPost$inboundSchema),
});

/** @internal */
export type AppBskyFeedGetListFeedResponseBody$Outbound = {
  cursor?: string | undefined;
  feed: Array<components.AppBskyFeedDefsFeedViewPost$Outbound>;
};

/** @internal */
export const AppBskyFeedGetListFeedResponseBody$outboundSchema: z.ZodType<
  AppBskyFeedGetListFeedResponseBody$Outbound,
  z.ZodTypeDef,
  AppBskyFeedGetListFeedResponseBody
> = z.object({
  cursor: z.string().optional(),
  feed: z.array(components.AppBskyFeedDefsFeedViewPost$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyFeedGetListFeedResponseBody$ {
  /** @deprecated use `AppBskyFeedGetListFeedResponseBody$inboundSchema` instead. */
  export const inboundSchema = AppBskyFeedGetListFeedResponseBody$inboundSchema;
  /** @deprecated use `AppBskyFeedGetListFeedResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    AppBskyFeedGetListFeedResponseBody$outboundSchema;
  /** @deprecated use `AppBskyFeedGetListFeedResponseBody$Outbound` instead. */
  export type Outbound = AppBskyFeedGetListFeedResponseBody$Outbound;
}

export function appBskyFeedGetListFeedResponseBodyToJSON(
  appBskyFeedGetListFeedResponseBody: AppBskyFeedGetListFeedResponseBody,
): string {
  return JSON.stringify(
    AppBskyFeedGetListFeedResponseBody$outboundSchema.parse(
      appBskyFeedGetListFeedResponseBody,
    ),
  );
}

export function appBskyFeedGetListFeedResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<AppBskyFeedGetListFeedResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AppBskyFeedGetListFeedResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AppBskyFeedGetListFeedResponseBody' from JSON`,
  );
}

/** @internal */
export const AppBskyFeedGetListFeedResponse$inboundSchema: z.ZodType<
  AppBskyFeedGetListFeedResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: z.lazy(() => AppBskyFeedGetListFeedResponseBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type AppBskyFeedGetListFeedResponse$Outbound = {
  Result: AppBskyFeedGetListFeedResponseBody$Outbound;
};

/** @internal */
export const AppBskyFeedGetListFeedResponse$outboundSchema: z.ZodType<
  AppBskyFeedGetListFeedResponse$Outbound,
  z.ZodTypeDef,
  AppBskyFeedGetListFeedResponse
> = z.object({
  result: z.lazy(() => AppBskyFeedGetListFeedResponseBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyFeedGetListFeedResponse$ {
  /** @deprecated use `AppBskyFeedGetListFeedResponse$inboundSchema` instead. */
  export const inboundSchema = AppBskyFeedGetListFeedResponse$inboundSchema;
  /** @deprecated use `AppBskyFeedGetListFeedResponse$outboundSchema` instead. */
  export const outboundSchema = AppBskyFeedGetListFeedResponse$outboundSchema;
  /** @deprecated use `AppBskyFeedGetListFeedResponse$Outbound` instead. */
  export type Outbound = AppBskyFeedGetListFeedResponse$Outbound;
}

export function appBskyFeedGetListFeedResponseToJSON(
  appBskyFeedGetListFeedResponse: AppBskyFeedGetListFeedResponse,
): string {
  return JSON.stringify(
    AppBskyFeedGetListFeedResponse$outboundSchema.parse(
      appBskyFeedGetListFeedResponse,
    ),
  );
}

export function appBskyFeedGetListFeedResponseFromJSON(
  jsonString: string,
): SafeParseResult<AppBskyFeedGetListFeedResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AppBskyFeedGetListFeedResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AppBskyFeedGetListFeedResponse' from JSON`,
  );
}
