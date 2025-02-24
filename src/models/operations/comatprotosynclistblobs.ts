/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ComAtprotoSyncListBlobsRequest = {
  /**
   * The DID of the repo.
   */
  did: string;
  /**
   * Optional revision of the repo to list blobs since.
   */
  since?: string | undefined;
  limit?: number | undefined;
  cursor?: string | undefined;
};

/**
 * OK
 */
export type ComAtprotoSyncListBlobsResponseBody = {
  cursor?: string | undefined;
  cids: Array<string>;
};

export type ComAtprotoSyncListBlobsResponse = {
  result: ComAtprotoSyncListBlobsResponseBody;
};

/** @internal */
export const ComAtprotoSyncListBlobsRequest$inboundSchema: z.ZodType<
  ComAtprotoSyncListBlobsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  did: z.string(),
  since: z.string().optional(),
  limit: z.number().int().default(500),
  cursor: z.string().optional(),
});

/** @internal */
export type ComAtprotoSyncListBlobsRequest$Outbound = {
  did: string;
  since?: string | undefined;
  limit: number;
  cursor?: string | undefined;
};

/** @internal */
export const ComAtprotoSyncListBlobsRequest$outboundSchema: z.ZodType<
  ComAtprotoSyncListBlobsRequest$Outbound,
  z.ZodTypeDef,
  ComAtprotoSyncListBlobsRequest
> = z.object({
  did: z.string(),
  since: z.string().optional(),
  limit: z.number().int().default(500),
  cursor: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoSyncListBlobsRequest$ {
  /** @deprecated use `ComAtprotoSyncListBlobsRequest$inboundSchema` instead. */
  export const inboundSchema = ComAtprotoSyncListBlobsRequest$inboundSchema;
  /** @deprecated use `ComAtprotoSyncListBlobsRequest$outboundSchema` instead. */
  export const outboundSchema = ComAtprotoSyncListBlobsRequest$outboundSchema;
  /** @deprecated use `ComAtprotoSyncListBlobsRequest$Outbound` instead. */
  export type Outbound = ComAtprotoSyncListBlobsRequest$Outbound;
}

export function comAtprotoSyncListBlobsRequestToJSON(
  comAtprotoSyncListBlobsRequest: ComAtprotoSyncListBlobsRequest,
): string {
  return JSON.stringify(
    ComAtprotoSyncListBlobsRequest$outboundSchema.parse(
      comAtprotoSyncListBlobsRequest,
    ),
  );
}

export function comAtprotoSyncListBlobsRequestFromJSON(
  jsonString: string,
): SafeParseResult<ComAtprotoSyncListBlobsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ComAtprotoSyncListBlobsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ComAtprotoSyncListBlobsRequest' from JSON`,
  );
}

/** @internal */
export const ComAtprotoSyncListBlobsResponseBody$inboundSchema: z.ZodType<
  ComAtprotoSyncListBlobsResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  cursor: z.string().optional(),
  cids: z.array(z.string()),
});

/** @internal */
export type ComAtprotoSyncListBlobsResponseBody$Outbound = {
  cursor?: string | undefined;
  cids: Array<string>;
};

/** @internal */
export const ComAtprotoSyncListBlobsResponseBody$outboundSchema: z.ZodType<
  ComAtprotoSyncListBlobsResponseBody$Outbound,
  z.ZodTypeDef,
  ComAtprotoSyncListBlobsResponseBody
> = z.object({
  cursor: z.string().optional(),
  cids: z.array(z.string()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoSyncListBlobsResponseBody$ {
  /** @deprecated use `ComAtprotoSyncListBlobsResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ComAtprotoSyncListBlobsResponseBody$inboundSchema;
  /** @deprecated use `ComAtprotoSyncListBlobsResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ComAtprotoSyncListBlobsResponseBody$outboundSchema;
  /** @deprecated use `ComAtprotoSyncListBlobsResponseBody$Outbound` instead. */
  export type Outbound = ComAtprotoSyncListBlobsResponseBody$Outbound;
}

export function comAtprotoSyncListBlobsResponseBodyToJSON(
  comAtprotoSyncListBlobsResponseBody: ComAtprotoSyncListBlobsResponseBody,
): string {
  return JSON.stringify(
    ComAtprotoSyncListBlobsResponseBody$outboundSchema.parse(
      comAtprotoSyncListBlobsResponseBody,
    ),
  );
}

export function comAtprotoSyncListBlobsResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<ComAtprotoSyncListBlobsResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      ComAtprotoSyncListBlobsResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ComAtprotoSyncListBlobsResponseBody' from JSON`,
  );
}

/** @internal */
export const ComAtprotoSyncListBlobsResponse$inboundSchema: z.ZodType<
  ComAtprotoSyncListBlobsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: z.lazy(() => ComAtprotoSyncListBlobsResponseBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type ComAtprotoSyncListBlobsResponse$Outbound = {
  Result: ComAtprotoSyncListBlobsResponseBody$Outbound;
};

/** @internal */
export const ComAtprotoSyncListBlobsResponse$outboundSchema: z.ZodType<
  ComAtprotoSyncListBlobsResponse$Outbound,
  z.ZodTypeDef,
  ComAtprotoSyncListBlobsResponse
> = z.object({
  result: z.lazy(() => ComAtprotoSyncListBlobsResponseBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoSyncListBlobsResponse$ {
  /** @deprecated use `ComAtprotoSyncListBlobsResponse$inboundSchema` instead. */
  export const inboundSchema = ComAtprotoSyncListBlobsResponse$inboundSchema;
  /** @deprecated use `ComAtprotoSyncListBlobsResponse$outboundSchema` instead. */
  export const outboundSchema = ComAtprotoSyncListBlobsResponse$outboundSchema;
  /** @deprecated use `ComAtprotoSyncListBlobsResponse$Outbound` instead. */
  export type Outbound = ComAtprotoSyncListBlobsResponse$Outbound;
}

export function comAtprotoSyncListBlobsResponseToJSON(
  comAtprotoSyncListBlobsResponse: ComAtprotoSyncListBlobsResponse,
): string {
  return JSON.stringify(
    ComAtprotoSyncListBlobsResponse$outboundSchema.parse(
      comAtprotoSyncListBlobsResponse,
    ),
  );
}

export function comAtprotoSyncListBlobsResponseFromJSON(
  jsonString: string,
): SafeParseResult<ComAtprotoSyncListBlobsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ComAtprotoSyncListBlobsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ComAtprotoSyncListBlobsResponse' from JSON`,
  );
}
