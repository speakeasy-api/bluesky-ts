/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ComAtprotoRepoListMissingBlobsRequest = {
  limit?: number | undefined;
  cursor?: string | undefined;
};

/**
 * OK
 */
export type ComAtprotoRepoListMissingBlobsResponseBody = {
  cursor?: string | undefined;
  blobs: Array<components.ComAtprotoRepoListMissingBlobsRecordBlob>;
};

export type ComAtprotoRepoListMissingBlobsResponse = {
  result: ComAtprotoRepoListMissingBlobsResponseBody;
};

/** @internal */
export const ComAtprotoRepoListMissingBlobsRequest$inboundSchema: z.ZodType<
  ComAtprotoRepoListMissingBlobsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  limit: z.number().int().default(500),
  cursor: z.string().optional(),
});

/** @internal */
export type ComAtprotoRepoListMissingBlobsRequest$Outbound = {
  limit: number;
  cursor?: string | undefined;
};

/** @internal */
export const ComAtprotoRepoListMissingBlobsRequest$outboundSchema: z.ZodType<
  ComAtprotoRepoListMissingBlobsRequest$Outbound,
  z.ZodTypeDef,
  ComAtprotoRepoListMissingBlobsRequest
> = z.object({
  limit: z.number().int().default(500),
  cursor: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoRepoListMissingBlobsRequest$ {
  /** @deprecated use `ComAtprotoRepoListMissingBlobsRequest$inboundSchema` instead. */
  export const inboundSchema =
    ComAtprotoRepoListMissingBlobsRequest$inboundSchema;
  /** @deprecated use `ComAtprotoRepoListMissingBlobsRequest$outboundSchema` instead. */
  export const outboundSchema =
    ComAtprotoRepoListMissingBlobsRequest$outboundSchema;
  /** @deprecated use `ComAtprotoRepoListMissingBlobsRequest$Outbound` instead. */
  export type Outbound = ComAtprotoRepoListMissingBlobsRequest$Outbound;
}

export function comAtprotoRepoListMissingBlobsRequestToJSON(
  comAtprotoRepoListMissingBlobsRequest: ComAtprotoRepoListMissingBlobsRequest,
): string {
  return JSON.stringify(
    ComAtprotoRepoListMissingBlobsRequest$outboundSchema.parse(
      comAtprotoRepoListMissingBlobsRequest,
    ),
  );
}

export function comAtprotoRepoListMissingBlobsRequestFromJSON(
  jsonString: string,
): SafeParseResult<ComAtprotoRepoListMissingBlobsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      ComAtprotoRepoListMissingBlobsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ComAtprotoRepoListMissingBlobsRequest' from JSON`,
  );
}

/** @internal */
export const ComAtprotoRepoListMissingBlobsResponseBody$inboundSchema:
  z.ZodType<ComAtprotoRepoListMissingBlobsResponseBody, z.ZodTypeDef, unknown> =
    z.object({
      cursor: z.string().optional(),
      blobs: z.array(
        components.ComAtprotoRepoListMissingBlobsRecordBlob$inboundSchema,
      ),
    });

/** @internal */
export type ComAtprotoRepoListMissingBlobsResponseBody$Outbound = {
  cursor?: string | undefined;
  blobs: Array<components.ComAtprotoRepoListMissingBlobsRecordBlob$Outbound>;
};

/** @internal */
export const ComAtprotoRepoListMissingBlobsResponseBody$outboundSchema:
  z.ZodType<
    ComAtprotoRepoListMissingBlobsResponseBody$Outbound,
    z.ZodTypeDef,
    ComAtprotoRepoListMissingBlobsResponseBody
  > = z.object({
    cursor: z.string().optional(),
    blobs: z.array(
      components.ComAtprotoRepoListMissingBlobsRecordBlob$outboundSchema,
    ),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoRepoListMissingBlobsResponseBody$ {
  /** @deprecated use `ComAtprotoRepoListMissingBlobsResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ComAtprotoRepoListMissingBlobsResponseBody$inboundSchema;
  /** @deprecated use `ComAtprotoRepoListMissingBlobsResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ComAtprotoRepoListMissingBlobsResponseBody$outboundSchema;
  /** @deprecated use `ComAtprotoRepoListMissingBlobsResponseBody$Outbound` instead. */
  export type Outbound = ComAtprotoRepoListMissingBlobsResponseBody$Outbound;
}

export function comAtprotoRepoListMissingBlobsResponseBodyToJSON(
  comAtprotoRepoListMissingBlobsResponseBody:
    ComAtprotoRepoListMissingBlobsResponseBody,
): string {
  return JSON.stringify(
    ComAtprotoRepoListMissingBlobsResponseBody$outboundSchema.parse(
      comAtprotoRepoListMissingBlobsResponseBody,
    ),
  );
}

export function comAtprotoRepoListMissingBlobsResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  ComAtprotoRepoListMissingBlobsResponseBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      ComAtprotoRepoListMissingBlobsResponseBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'ComAtprotoRepoListMissingBlobsResponseBody' from JSON`,
  );
}

/** @internal */
export const ComAtprotoRepoListMissingBlobsResponse$inboundSchema: z.ZodType<
  ComAtprotoRepoListMissingBlobsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: z.lazy(() =>
    ComAtprotoRepoListMissingBlobsResponseBody$inboundSchema
  ),
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type ComAtprotoRepoListMissingBlobsResponse$Outbound = {
  Result: ComAtprotoRepoListMissingBlobsResponseBody$Outbound;
};

/** @internal */
export const ComAtprotoRepoListMissingBlobsResponse$outboundSchema: z.ZodType<
  ComAtprotoRepoListMissingBlobsResponse$Outbound,
  z.ZodTypeDef,
  ComAtprotoRepoListMissingBlobsResponse
> = z.object({
  result: z.lazy(() =>
    ComAtprotoRepoListMissingBlobsResponseBody$outboundSchema
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
export namespace ComAtprotoRepoListMissingBlobsResponse$ {
  /** @deprecated use `ComAtprotoRepoListMissingBlobsResponse$inboundSchema` instead. */
  export const inboundSchema =
    ComAtprotoRepoListMissingBlobsResponse$inboundSchema;
  /** @deprecated use `ComAtprotoRepoListMissingBlobsResponse$outboundSchema` instead. */
  export const outboundSchema =
    ComAtprotoRepoListMissingBlobsResponse$outboundSchema;
  /** @deprecated use `ComAtprotoRepoListMissingBlobsResponse$Outbound` instead. */
  export type Outbound = ComAtprotoRepoListMissingBlobsResponse$Outbound;
}

export function comAtprotoRepoListMissingBlobsResponseToJSON(
  comAtprotoRepoListMissingBlobsResponse:
    ComAtprotoRepoListMissingBlobsResponse,
): string {
  return JSON.stringify(
    ComAtprotoRepoListMissingBlobsResponse$outboundSchema.parse(
      comAtprotoRepoListMissingBlobsResponse,
    ),
  );
}

export function comAtprotoRepoListMissingBlobsResponseFromJSON(
  jsonString: string,
): SafeParseResult<ComAtprotoRepoListMissingBlobsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      ComAtprotoRepoListMissingBlobsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ComAtprotoRepoListMissingBlobsResponse' from JSON`,
  );
}
