/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AppBskyGraphGetBlocksRequest = {
  limit?: number | undefined;
  cursor?: string | undefined;
};

/**
 * OK
 */
export type AppBskyGraphGetBlocksResponseBody = {
  cursor?: string | undefined;
  blocks: Array<components.AppBskyActorDefsProfileView>;
};

export type AppBskyGraphGetBlocksResponse = {
  result: AppBskyGraphGetBlocksResponseBody;
};

/** @internal */
export const AppBskyGraphGetBlocksRequest$inboundSchema: z.ZodType<
  AppBskyGraphGetBlocksRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  limit: z.number().int().default(50),
  cursor: z.string().optional(),
});

/** @internal */
export type AppBskyGraphGetBlocksRequest$Outbound = {
  limit: number;
  cursor?: string | undefined;
};

/** @internal */
export const AppBskyGraphGetBlocksRequest$outboundSchema: z.ZodType<
  AppBskyGraphGetBlocksRequest$Outbound,
  z.ZodTypeDef,
  AppBskyGraphGetBlocksRequest
> = z.object({
  limit: z.number().int().default(50),
  cursor: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyGraphGetBlocksRequest$ {
  /** @deprecated use `AppBskyGraphGetBlocksRequest$inboundSchema` instead. */
  export const inboundSchema = AppBskyGraphGetBlocksRequest$inboundSchema;
  /** @deprecated use `AppBskyGraphGetBlocksRequest$outboundSchema` instead. */
  export const outboundSchema = AppBskyGraphGetBlocksRequest$outboundSchema;
  /** @deprecated use `AppBskyGraphGetBlocksRequest$Outbound` instead. */
  export type Outbound = AppBskyGraphGetBlocksRequest$Outbound;
}

export function appBskyGraphGetBlocksRequestToJSON(
  appBskyGraphGetBlocksRequest: AppBskyGraphGetBlocksRequest,
): string {
  return JSON.stringify(
    AppBskyGraphGetBlocksRequest$outboundSchema.parse(
      appBskyGraphGetBlocksRequest,
    ),
  );
}

export function appBskyGraphGetBlocksRequestFromJSON(
  jsonString: string,
): SafeParseResult<AppBskyGraphGetBlocksRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AppBskyGraphGetBlocksRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AppBskyGraphGetBlocksRequest' from JSON`,
  );
}

/** @internal */
export const AppBskyGraphGetBlocksResponseBody$inboundSchema: z.ZodType<
  AppBskyGraphGetBlocksResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  cursor: z.string().optional(),
  blocks: z.array(components.AppBskyActorDefsProfileView$inboundSchema),
});

/** @internal */
export type AppBskyGraphGetBlocksResponseBody$Outbound = {
  cursor?: string | undefined;
  blocks: Array<components.AppBskyActorDefsProfileView$Outbound>;
};

/** @internal */
export const AppBskyGraphGetBlocksResponseBody$outboundSchema: z.ZodType<
  AppBskyGraphGetBlocksResponseBody$Outbound,
  z.ZodTypeDef,
  AppBskyGraphGetBlocksResponseBody
> = z.object({
  cursor: z.string().optional(),
  blocks: z.array(components.AppBskyActorDefsProfileView$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyGraphGetBlocksResponseBody$ {
  /** @deprecated use `AppBskyGraphGetBlocksResponseBody$inboundSchema` instead. */
  export const inboundSchema = AppBskyGraphGetBlocksResponseBody$inboundSchema;
  /** @deprecated use `AppBskyGraphGetBlocksResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    AppBskyGraphGetBlocksResponseBody$outboundSchema;
  /** @deprecated use `AppBskyGraphGetBlocksResponseBody$Outbound` instead. */
  export type Outbound = AppBskyGraphGetBlocksResponseBody$Outbound;
}

export function appBskyGraphGetBlocksResponseBodyToJSON(
  appBskyGraphGetBlocksResponseBody: AppBskyGraphGetBlocksResponseBody,
): string {
  return JSON.stringify(
    AppBskyGraphGetBlocksResponseBody$outboundSchema.parse(
      appBskyGraphGetBlocksResponseBody,
    ),
  );
}

export function appBskyGraphGetBlocksResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<AppBskyGraphGetBlocksResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AppBskyGraphGetBlocksResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AppBskyGraphGetBlocksResponseBody' from JSON`,
  );
}

/** @internal */
export const AppBskyGraphGetBlocksResponse$inboundSchema: z.ZodType<
  AppBskyGraphGetBlocksResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: z.lazy(() => AppBskyGraphGetBlocksResponseBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type AppBskyGraphGetBlocksResponse$Outbound = {
  Result: AppBskyGraphGetBlocksResponseBody$Outbound;
};

/** @internal */
export const AppBskyGraphGetBlocksResponse$outboundSchema: z.ZodType<
  AppBskyGraphGetBlocksResponse$Outbound,
  z.ZodTypeDef,
  AppBskyGraphGetBlocksResponse
> = z.object({
  result: z.lazy(() => AppBskyGraphGetBlocksResponseBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyGraphGetBlocksResponse$ {
  /** @deprecated use `AppBskyGraphGetBlocksResponse$inboundSchema` instead. */
  export const inboundSchema = AppBskyGraphGetBlocksResponse$inboundSchema;
  /** @deprecated use `AppBskyGraphGetBlocksResponse$outboundSchema` instead. */
  export const outboundSchema = AppBskyGraphGetBlocksResponse$outboundSchema;
  /** @deprecated use `AppBskyGraphGetBlocksResponse$Outbound` instead. */
  export type Outbound = AppBskyGraphGetBlocksResponse$Outbound;
}

export function appBskyGraphGetBlocksResponseToJSON(
  appBskyGraphGetBlocksResponse: AppBskyGraphGetBlocksResponse,
): string {
  return JSON.stringify(
    AppBskyGraphGetBlocksResponse$outboundSchema.parse(
      appBskyGraphGetBlocksResponse,
    ),
  );
}

export function appBskyGraphGetBlocksResponseFromJSON(
  jsonString: string,
): SafeParseResult<AppBskyGraphGetBlocksResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AppBskyGraphGetBlocksResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AppBskyGraphGetBlocksResponse' from JSON`,
  );
}
