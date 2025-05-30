/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AppBskyGraphGetKnownFollowersRequest = {
  actor: string;
  limit?: number | undefined;
  cursor?: string | undefined;
};

/**
 * OK
 */
export type AppBskyGraphGetKnownFollowersResponseBody = {
  subject: components.AppBskyActorDefsProfileView;
  cursor?: string | undefined;
  followers: Array<components.AppBskyActorDefsProfileView>;
};

export type AppBskyGraphGetKnownFollowersResponse = {
  result: AppBskyGraphGetKnownFollowersResponseBody;
};

/** @internal */
export const AppBskyGraphGetKnownFollowersRequest$inboundSchema: z.ZodType<
  AppBskyGraphGetKnownFollowersRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  actor: z.string(),
  limit: z.number().int().default(50),
  cursor: z.string().optional(),
});

/** @internal */
export type AppBskyGraphGetKnownFollowersRequest$Outbound = {
  actor: string;
  limit: number;
  cursor?: string | undefined;
};

/** @internal */
export const AppBskyGraphGetKnownFollowersRequest$outboundSchema: z.ZodType<
  AppBskyGraphGetKnownFollowersRequest$Outbound,
  z.ZodTypeDef,
  AppBskyGraphGetKnownFollowersRequest
> = z.object({
  actor: z.string(),
  limit: z.number().int().default(50),
  cursor: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyGraphGetKnownFollowersRequest$ {
  /** @deprecated use `AppBskyGraphGetKnownFollowersRequest$inboundSchema` instead. */
  export const inboundSchema =
    AppBskyGraphGetKnownFollowersRequest$inboundSchema;
  /** @deprecated use `AppBskyGraphGetKnownFollowersRequest$outboundSchema` instead. */
  export const outboundSchema =
    AppBskyGraphGetKnownFollowersRequest$outboundSchema;
  /** @deprecated use `AppBskyGraphGetKnownFollowersRequest$Outbound` instead. */
  export type Outbound = AppBskyGraphGetKnownFollowersRequest$Outbound;
}

export function appBskyGraphGetKnownFollowersRequestToJSON(
  appBskyGraphGetKnownFollowersRequest: AppBskyGraphGetKnownFollowersRequest,
): string {
  return JSON.stringify(
    AppBskyGraphGetKnownFollowersRequest$outboundSchema.parse(
      appBskyGraphGetKnownFollowersRequest,
    ),
  );
}

export function appBskyGraphGetKnownFollowersRequestFromJSON(
  jsonString: string,
): SafeParseResult<AppBskyGraphGetKnownFollowersRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AppBskyGraphGetKnownFollowersRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AppBskyGraphGetKnownFollowersRequest' from JSON`,
  );
}

/** @internal */
export const AppBskyGraphGetKnownFollowersResponseBody$inboundSchema: z.ZodType<
  AppBskyGraphGetKnownFollowersResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  subject: components.AppBskyActorDefsProfileView$inboundSchema,
  cursor: z.string().optional(),
  followers: z.array(components.AppBskyActorDefsProfileView$inboundSchema),
});

/** @internal */
export type AppBskyGraphGetKnownFollowersResponseBody$Outbound = {
  subject: components.AppBskyActorDefsProfileView$Outbound;
  cursor?: string | undefined;
  followers: Array<components.AppBskyActorDefsProfileView$Outbound>;
};

/** @internal */
export const AppBskyGraphGetKnownFollowersResponseBody$outboundSchema:
  z.ZodType<
    AppBskyGraphGetKnownFollowersResponseBody$Outbound,
    z.ZodTypeDef,
    AppBskyGraphGetKnownFollowersResponseBody
  > = z.object({
    subject: components.AppBskyActorDefsProfileView$outboundSchema,
    cursor: z.string().optional(),
    followers: z.array(components.AppBskyActorDefsProfileView$outboundSchema),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyGraphGetKnownFollowersResponseBody$ {
  /** @deprecated use `AppBskyGraphGetKnownFollowersResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    AppBskyGraphGetKnownFollowersResponseBody$inboundSchema;
  /** @deprecated use `AppBskyGraphGetKnownFollowersResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    AppBskyGraphGetKnownFollowersResponseBody$outboundSchema;
  /** @deprecated use `AppBskyGraphGetKnownFollowersResponseBody$Outbound` instead. */
  export type Outbound = AppBskyGraphGetKnownFollowersResponseBody$Outbound;
}

export function appBskyGraphGetKnownFollowersResponseBodyToJSON(
  appBskyGraphGetKnownFollowersResponseBody:
    AppBskyGraphGetKnownFollowersResponseBody,
): string {
  return JSON.stringify(
    AppBskyGraphGetKnownFollowersResponseBody$outboundSchema.parse(
      appBskyGraphGetKnownFollowersResponseBody,
    ),
  );
}

export function appBskyGraphGetKnownFollowersResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  AppBskyGraphGetKnownFollowersResponseBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      AppBskyGraphGetKnownFollowersResponseBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'AppBskyGraphGetKnownFollowersResponseBody' from JSON`,
  );
}

/** @internal */
export const AppBskyGraphGetKnownFollowersResponse$inboundSchema: z.ZodType<
  AppBskyGraphGetKnownFollowersResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: z.lazy(() => AppBskyGraphGetKnownFollowersResponseBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type AppBskyGraphGetKnownFollowersResponse$Outbound = {
  Result: AppBskyGraphGetKnownFollowersResponseBody$Outbound;
};

/** @internal */
export const AppBskyGraphGetKnownFollowersResponse$outboundSchema: z.ZodType<
  AppBskyGraphGetKnownFollowersResponse$Outbound,
  z.ZodTypeDef,
  AppBskyGraphGetKnownFollowersResponse
> = z.object({
  result: z.lazy(() =>
    AppBskyGraphGetKnownFollowersResponseBody$outboundSchema
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
export namespace AppBskyGraphGetKnownFollowersResponse$ {
  /** @deprecated use `AppBskyGraphGetKnownFollowersResponse$inboundSchema` instead. */
  export const inboundSchema =
    AppBskyGraphGetKnownFollowersResponse$inboundSchema;
  /** @deprecated use `AppBskyGraphGetKnownFollowersResponse$outboundSchema` instead. */
  export const outboundSchema =
    AppBskyGraphGetKnownFollowersResponse$outboundSchema;
  /** @deprecated use `AppBskyGraphGetKnownFollowersResponse$Outbound` instead. */
  export type Outbound = AppBskyGraphGetKnownFollowersResponse$Outbound;
}

export function appBskyGraphGetKnownFollowersResponseToJSON(
  appBskyGraphGetKnownFollowersResponse: AppBskyGraphGetKnownFollowersResponse,
): string {
  return JSON.stringify(
    AppBskyGraphGetKnownFollowersResponse$outboundSchema.parse(
      appBskyGraphGetKnownFollowersResponse,
    ),
  );
}

export function appBskyGraphGetKnownFollowersResponseFromJSON(
  jsonString: string,
): SafeParseResult<AppBskyGraphGetKnownFollowersResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AppBskyGraphGetKnownFollowersResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AppBskyGraphGetKnownFollowersResponse' from JSON`,
  );
}
