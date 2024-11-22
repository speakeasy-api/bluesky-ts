/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ComAtprotoRepoDeleteRecordRequestBody = {
  /**
   * The handle or DID of the repo (aka, current account).
   */
  repo: string;
  /**
   * The NSID of the record collection.
   */
  collection: string;
  /**
   * The Record Key.
   */
  rkey: string;
  /**
   * Compare and swap with the previous record by CID.
   */
  swapRecord?: string | undefined;
  /**
   * Compare and swap with the previous commit by CID.
   */
  swapCommit?: string | undefined;
};

/**
 * OK
 */
export type ComAtprotoRepoDeleteRecordResponseBody = {
  commit?: components.ComAtprotoRepoDefsCommitMeta | undefined;
};

/** @internal */
export const ComAtprotoRepoDeleteRecordRequestBody$inboundSchema: z.ZodType<
  ComAtprotoRepoDeleteRecordRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  repo: z.string(),
  collection: z.string(),
  rkey: z.string(),
  swapRecord: z.string().optional(),
  swapCommit: z.string().optional(),
});

/** @internal */
export type ComAtprotoRepoDeleteRecordRequestBody$Outbound = {
  repo: string;
  collection: string;
  rkey: string;
  swapRecord?: string | undefined;
  swapCommit?: string | undefined;
};

/** @internal */
export const ComAtprotoRepoDeleteRecordRequestBody$outboundSchema: z.ZodType<
  ComAtprotoRepoDeleteRecordRequestBody$Outbound,
  z.ZodTypeDef,
  ComAtprotoRepoDeleteRecordRequestBody
> = z.object({
  repo: z.string(),
  collection: z.string(),
  rkey: z.string(),
  swapRecord: z.string().optional(),
  swapCommit: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoRepoDeleteRecordRequestBody$ {
  /** @deprecated use `ComAtprotoRepoDeleteRecordRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    ComAtprotoRepoDeleteRecordRequestBody$inboundSchema;
  /** @deprecated use `ComAtprotoRepoDeleteRecordRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    ComAtprotoRepoDeleteRecordRequestBody$outboundSchema;
  /** @deprecated use `ComAtprotoRepoDeleteRecordRequestBody$Outbound` instead. */
  export type Outbound = ComAtprotoRepoDeleteRecordRequestBody$Outbound;
}

export function comAtprotoRepoDeleteRecordRequestBodyToJSON(
  comAtprotoRepoDeleteRecordRequestBody: ComAtprotoRepoDeleteRecordRequestBody,
): string {
  return JSON.stringify(
    ComAtprotoRepoDeleteRecordRequestBody$outboundSchema.parse(
      comAtprotoRepoDeleteRecordRequestBody,
    ),
  );
}

export function comAtprotoRepoDeleteRecordRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<ComAtprotoRepoDeleteRecordRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      ComAtprotoRepoDeleteRecordRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ComAtprotoRepoDeleteRecordRequestBody' from JSON`,
  );
}

/** @internal */
export const ComAtprotoRepoDeleteRecordResponseBody$inboundSchema: z.ZodType<
  ComAtprotoRepoDeleteRecordResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  commit: components.ComAtprotoRepoDefsCommitMeta$inboundSchema.optional(),
});

/** @internal */
export type ComAtprotoRepoDeleteRecordResponseBody$Outbound = {
  commit?: components.ComAtprotoRepoDefsCommitMeta$Outbound | undefined;
};

/** @internal */
export const ComAtprotoRepoDeleteRecordResponseBody$outboundSchema: z.ZodType<
  ComAtprotoRepoDeleteRecordResponseBody$Outbound,
  z.ZodTypeDef,
  ComAtprotoRepoDeleteRecordResponseBody
> = z.object({
  commit: components.ComAtprotoRepoDefsCommitMeta$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoRepoDeleteRecordResponseBody$ {
  /** @deprecated use `ComAtprotoRepoDeleteRecordResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ComAtprotoRepoDeleteRecordResponseBody$inboundSchema;
  /** @deprecated use `ComAtprotoRepoDeleteRecordResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ComAtprotoRepoDeleteRecordResponseBody$outboundSchema;
  /** @deprecated use `ComAtprotoRepoDeleteRecordResponseBody$Outbound` instead. */
  export type Outbound = ComAtprotoRepoDeleteRecordResponseBody$Outbound;
}

export function comAtprotoRepoDeleteRecordResponseBodyToJSON(
  comAtprotoRepoDeleteRecordResponseBody:
    ComAtprotoRepoDeleteRecordResponseBody,
): string {
  return JSON.stringify(
    ComAtprotoRepoDeleteRecordResponseBody$outboundSchema.parse(
      comAtprotoRepoDeleteRecordResponseBody,
    ),
  );
}

export function comAtprotoRepoDeleteRecordResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<ComAtprotoRepoDeleteRecordResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      ComAtprotoRepoDeleteRecordResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ComAtprotoRepoDeleteRecordResponseBody' from JSON`,
  );
}
