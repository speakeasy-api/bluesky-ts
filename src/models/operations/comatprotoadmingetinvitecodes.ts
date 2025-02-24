/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const ComAtprotoAdminGetInviteCodesSort = {
  Recent: "recent",
  Usage: "usage",
} as const;
export type ComAtprotoAdminGetInviteCodesSort = ClosedEnum<
  typeof ComAtprotoAdminGetInviteCodesSort
>;

export type ComAtprotoAdminGetInviteCodesRequest = {
  sort?: ComAtprotoAdminGetInviteCodesSort | undefined;
  limit?: number | undefined;
  cursor?: string | undefined;
};

/**
 * OK
 */
export type ComAtprotoAdminGetInviteCodesResponseBody = {
  cursor?: string | undefined;
  codes: Array<components.ComAtprotoServerDefsInviteCode>;
};

export type ComAtprotoAdminGetInviteCodesResponse = {
  result: ComAtprotoAdminGetInviteCodesResponseBody;
};

/** @internal */
export const ComAtprotoAdminGetInviteCodesSort$inboundSchema: z.ZodNativeEnum<
  typeof ComAtprotoAdminGetInviteCodesSort
> = z.nativeEnum(ComAtprotoAdminGetInviteCodesSort);

/** @internal */
export const ComAtprotoAdminGetInviteCodesSort$outboundSchema: z.ZodNativeEnum<
  typeof ComAtprotoAdminGetInviteCodesSort
> = ComAtprotoAdminGetInviteCodesSort$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoAdminGetInviteCodesSort$ {
  /** @deprecated use `ComAtprotoAdminGetInviteCodesSort$inboundSchema` instead. */
  export const inboundSchema = ComAtprotoAdminGetInviteCodesSort$inboundSchema;
  /** @deprecated use `ComAtprotoAdminGetInviteCodesSort$outboundSchema` instead. */
  export const outboundSchema =
    ComAtprotoAdminGetInviteCodesSort$outboundSchema;
}

/** @internal */
export const ComAtprotoAdminGetInviteCodesRequest$inboundSchema: z.ZodType<
  ComAtprotoAdminGetInviteCodesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  sort: ComAtprotoAdminGetInviteCodesSort$inboundSchema.default("recent"),
  limit: z.number().int().default(100),
  cursor: z.string().optional(),
});

/** @internal */
export type ComAtprotoAdminGetInviteCodesRequest$Outbound = {
  sort: string;
  limit: number;
  cursor?: string | undefined;
};

/** @internal */
export const ComAtprotoAdminGetInviteCodesRequest$outboundSchema: z.ZodType<
  ComAtprotoAdminGetInviteCodesRequest$Outbound,
  z.ZodTypeDef,
  ComAtprotoAdminGetInviteCodesRequest
> = z.object({
  sort: ComAtprotoAdminGetInviteCodesSort$outboundSchema.default("recent"),
  limit: z.number().int().default(100),
  cursor: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoAdminGetInviteCodesRequest$ {
  /** @deprecated use `ComAtprotoAdminGetInviteCodesRequest$inboundSchema` instead. */
  export const inboundSchema =
    ComAtprotoAdminGetInviteCodesRequest$inboundSchema;
  /** @deprecated use `ComAtprotoAdminGetInviteCodesRequest$outboundSchema` instead. */
  export const outboundSchema =
    ComAtprotoAdminGetInviteCodesRequest$outboundSchema;
  /** @deprecated use `ComAtprotoAdminGetInviteCodesRequest$Outbound` instead. */
  export type Outbound = ComAtprotoAdminGetInviteCodesRequest$Outbound;
}

export function comAtprotoAdminGetInviteCodesRequestToJSON(
  comAtprotoAdminGetInviteCodesRequest: ComAtprotoAdminGetInviteCodesRequest,
): string {
  return JSON.stringify(
    ComAtprotoAdminGetInviteCodesRequest$outboundSchema.parse(
      comAtprotoAdminGetInviteCodesRequest,
    ),
  );
}

export function comAtprotoAdminGetInviteCodesRequestFromJSON(
  jsonString: string,
): SafeParseResult<ComAtprotoAdminGetInviteCodesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      ComAtprotoAdminGetInviteCodesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ComAtprotoAdminGetInviteCodesRequest' from JSON`,
  );
}

/** @internal */
export const ComAtprotoAdminGetInviteCodesResponseBody$inboundSchema: z.ZodType<
  ComAtprotoAdminGetInviteCodesResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  cursor: z.string().optional(),
  codes: z.array(components.ComAtprotoServerDefsInviteCode$inboundSchema),
});

/** @internal */
export type ComAtprotoAdminGetInviteCodesResponseBody$Outbound = {
  cursor?: string | undefined;
  codes: Array<components.ComAtprotoServerDefsInviteCode$Outbound>;
};

/** @internal */
export const ComAtprotoAdminGetInviteCodesResponseBody$outboundSchema:
  z.ZodType<
    ComAtprotoAdminGetInviteCodesResponseBody$Outbound,
    z.ZodTypeDef,
    ComAtprotoAdminGetInviteCodesResponseBody
  > = z.object({
    cursor: z.string().optional(),
    codes: z.array(components.ComAtprotoServerDefsInviteCode$outboundSchema),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoAdminGetInviteCodesResponseBody$ {
  /** @deprecated use `ComAtprotoAdminGetInviteCodesResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ComAtprotoAdminGetInviteCodesResponseBody$inboundSchema;
  /** @deprecated use `ComAtprotoAdminGetInviteCodesResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ComAtprotoAdminGetInviteCodesResponseBody$outboundSchema;
  /** @deprecated use `ComAtprotoAdminGetInviteCodesResponseBody$Outbound` instead. */
  export type Outbound = ComAtprotoAdminGetInviteCodesResponseBody$Outbound;
}

export function comAtprotoAdminGetInviteCodesResponseBodyToJSON(
  comAtprotoAdminGetInviteCodesResponseBody:
    ComAtprotoAdminGetInviteCodesResponseBody,
): string {
  return JSON.stringify(
    ComAtprotoAdminGetInviteCodesResponseBody$outboundSchema.parse(
      comAtprotoAdminGetInviteCodesResponseBody,
    ),
  );
}

export function comAtprotoAdminGetInviteCodesResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  ComAtprotoAdminGetInviteCodesResponseBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      ComAtprotoAdminGetInviteCodesResponseBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'ComAtprotoAdminGetInviteCodesResponseBody' from JSON`,
  );
}

/** @internal */
export const ComAtprotoAdminGetInviteCodesResponse$inboundSchema: z.ZodType<
  ComAtprotoAdminGetInviteCodesResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: z.lazy(() => ComAtprotoAdminGetInviteCodesResponseBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type ComAtprotoAdminGetInviteCodesResponse$Outbound = {
  Result: ComAtprotoAdminGetInviteCodesResponseBody$Outbound;
};

/** @internal */
export const ComAtprotoAdminGetInviteCodesResponse$outboundSchema: z.ZodType<
  ComAtprotoAdminGetInviteCodesResponse$Outbound,
  z.ZodTypeDef,
  ComAtprotoAdminGetInviteCodesResponse
> = z.object({
  result: z.lazy(() =>
    ComAtprotoAdminGetInviteCodesResponseBody$outboundSchema
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
export namespace ComAtprotoAdminGetInviteCodesResponse$ {
  /** @deprecated use `ComAtprotoAdminGetInviteCodesResponse$inboundSchema` instead. */
  export const inboundSchema =
    ComAtprotoAdminGetInviteCodesResponse$inboundSchema;
  /** @deprecated use `ComAtprotoAdminGetInviteCodesResponse$outboundSchema` instead. */
  export const outboundSchema =
    ComAtprotoAdminGetInviteCodesResponse$outboundSchema;
  /** @deprecated use `ComAtprotoAdminGetInviteCodesResponse$Outbound` instead. */
  export type Outbound = ComAtprotoAdminGetInviteCodesResponse$Outbound;
}

export function comAtprotoAdminGetInviteCodesResponseToJSON(
  comAtprotoAdminGetInviteCodesResponse: ComAtprotoAdminGetInviteCodesResponse,
): string {
  return JSON.stringify(
    ComAtprotoAdminGetInviteCodesResponse$outboundSchema.parse(
      comAtprotoAdminGetInviteCodesResponse,
    ),
  );
}

export function comAtprotoAdminGetInviteCodesResponseFromJSON(
  jsonString: string,
): SafeParseResult<ComAtprotoAdminGetInviteCodesResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      ComAtprotoAdminGetInviteCodesResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ComAtprotoAdminGetInviteCodesResponse' from JSON`,
  );
}
