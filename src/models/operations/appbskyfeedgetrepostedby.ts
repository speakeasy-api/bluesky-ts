/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AppBskyFeedGetRepostedByRequest = {
  /**
   * Reference (AT-URI) of post record
   */
  uri: string;
  /**
   * If supplied, filters to reposts of specific version (by CID) of the post record.
   */
  cid?: string | undefined;
  limit?: number | undefined;
  cursor?: string | undefined;
};

/**
 * OK
 */
export type AppBskyFeedGetRepostedByResponseBody = {
  uri: string;
  cid?: string | undefined;
  cursor?: string | undefined;
  repostedBy: Array<components.AppBskyActorDefsProfileView>;
};

export type AppBskyFeedGetRepostedByResponse = {
  result: AppBskyFeedGetRepostedByResponseBody;
};

/** @internal */
export const AppBskyFeedGetRepostedByRequest$inboundSchema: z.ZodType<
  AppBskyFeedGetRepostedByRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  uri: z.string(),
  cid: z.string().optional(),
  limit: z.number().int().default(50),
  cursor: z.string().optional(),
});

/** @internal */
export type AppBskyFeedGetRepostedByRequest$Outbound = {
  uri: string;
  cid?: string | undefined;
  limit: number;
  cursor?: string | undefined;
};

/** @internal */
export const AppBskyFeedGetRepostedByRequest$outboundSchema: z.ZodType<
  AppBskyFeedGetRepostedByRequest$Outbound,
  z.ZodTypeDef,
  AppBskyFeedGetRepostedByRequest
> = z.object({
  uri: z.string(),
  cid: z.string().optional(),
  limit: z.number().int().default(50),
  cursor: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyFeedGetRepostedByRequest$ {
  /** @deprecated use `AppBskyFeedGetRepostedByRequest$inboundSchema` instead. */
  export const inboundSchema = AppBskyFeedGetRepostedByRequest$inboundSchema;
  /** @deprecated use `AppBskyFeedGetRepostedByRequest$outboundSchema` instead. */
  export const outboundSchema = AppBskyFeedGetRepostedByRequest$outboundSchema;
  /** @deprecated use `AppBskyFeedGetRepostedByRequest$Outbound` instead. */
  export type Outbound = AppBskyFeedGetRepostedByRequest$Outbound;
}

export function appBskyFeedGetRepostedByRequestToJSON(
  appBskyFeedGetRepostedByRequest: AppBskyFeedGetRepostedByRequest,
): string {
  return JSON.stringify(
    AppBskyFeedGetRepostedByRequest$outboundSchema.parse(
      appBskyFeedGetRepostedByRequest,
    ),
  );
}

export function appBskyFeedGetRepostedByRequestFromJSON(
  jsonString: string,
): SafeParseResult<AppBskyFeedGetRepostedByRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AppBskyFeedGetRepostedByRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AppBskyFeedGetRepostedByRequest' from JSON`,
  );
}

/** @internal */
export const AppBskyFeedGetRepostedByResponseBody$inboundSchema: z.ZodType<
  AppBskyFeedGetRepostedByResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  uri: z.string(),
  cid: z.string().optional(),
  cursor: z.string().optional(),
  repostedBy: z.array(components.AppBskyActorDefsProfileView$inboundSchema),
});

/** @internal */
export type AppBskyFeedGetRepostedByResponseBody$Outbound = {
  uri: string;
  cid?: string | undefined;
  cursor?: string | undefined;
  repostedBy: Array<components.AppBskyActorDefsProfileView$Outbound>;
};

/** @internal */
export const AppBskyFeedGetRepostedByResponseBody$outboundSchema: z.ZodType<
  AppBskyFeedGetRepostedByResponseBody$Outbound,
  z.ZodTypeDef,
  AppBskyFeedGetRepostedByResponseBody
> = z.object({
  uri: z.string(),
  cid: z.string().optional(),
  cursor: z.string().optional(),
  repostedBy: z.array(components.AppBskyActorDefsProfileView$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyFeedGetRepostedByResponseBody$ {
  /** @deprecated use `AppBskyFeedGetRepostedByResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    AppBskyFeedGetRepostedByResponseBody$inboundSchema;
  /** @deprecated use `AppBskyFeedGetRepostedByResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    AppBskyFeedGetRepostedByResponseBody$outboundSchema;
  /** @deprecated use `AppBskyFeedGetRepostedByResponseBody$Outbound` instead. */
  export type Outbound = AppBskyFeedGetRepostedByResponseBody$Outbound;
}

export function appBskyFeedGetRepostedByResponseBodyToJSON(
  appBskyFeedGetRepostedByResponseBody: AppBskyFeedGetRepostedByResponseBody,
): string {
  return JSON.stringify(
    AppBskyFeedGetRepostedByResponseBody$outboundSchema.parse(
      appBskyFeedGetRepostedByResponseBody,
    ),
  );
}

export function appBskyFeedGetRepostedByResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<AppBskyFeedGetRepostedByResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AppBskyFeedGetRepostedByResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AppBskyFeedGetRepostedByResponseBody' from JSON`,
  );
}

/** @internal */
export const AppBskyFeedGetRepostedByResponse$inboundSchema: z.ZodType<
  AppBskyFeedGetRepostedByResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: z.lazy(() => AppBskyFeedGetRepostedByResponseBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type AppBskyFeedGetRepostedByResponse$Outbound = {
  Result: AppBskyFeedGetRepostedByResponseBody$Outbound;
};

/** @internal */
export const AppBskyFeedGetRepostedByResponse$outboundSchema: z.ZodType<
  AppBskyFeedGetRepostedByResponse$Outbound,
  z.ZodTypeDef,
  AppBskyFeedGetRepostedByResponse
> = z.object({
  result: z.lazy(() => AppBskyFeedGetRepostedByResponseBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyFeedGetRepostedByResponse$ {
  /** @deprecated use `AppBskyFeedGetRepostedByResponse$inboundSchema` instead. */
  export const inboundSchema = AppBskyFeedGetRepostedByResponse$inboundSchema;
  /** @deprecated use `AppBskyFeedGetRepostedByResponse$outboundSchema` instead. */
  export const outboundSchema = AppBskyFeedGetRepostedByResponse$outboundSchema;
  /** @deprecated use `AppBskyFeedGetRepostedByResponse$Outbound` instead. */
  export type Outbound = AppBskyFeedGetRepostedByResponse$Outbound;
}

export function appBskyFeedGetRepostedByResponseToJSON(
  appBskyFeedGetRepostedByResponse: AppBskyFeedGetRepostedByResponse,
): string {
  return JSON.stringify(
    AppBskyFeedGetRepostedByResponse$outboundSchema.parse(
      appBskyFeedGetRepostedByResponse,
    ),
  );
}

export function appBskyFeedGetRepostedByResponseFromJSON(
  jsonString: string,
): SafeParseResult<AppBskyFeedGetRepostedByResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AppBskyFeedGetRepostedByResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AppBskyFeedGetRepostedByResponse' from JSON`,
  );
}
