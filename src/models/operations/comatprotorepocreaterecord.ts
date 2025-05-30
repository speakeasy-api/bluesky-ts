/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ComAtprotoRepoCreateRecordBody = {
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
  rkey?: string | undefined;
  /**
   * Can be set to 'false' to skip Lexicon schema validation of record data, 'true' to require it, or leave unset to validate only for known Lexicons.
   */
  validate?: boolean | undefined;
  record?: any | undefined;
  /**
   * Compare and swap with the previous commit by CID.
   */
  swapCommit?: string | undefined;
};

export const ComAtprotoRepoCreateRecordValidationStatus = {
  Valid: "valid",
  Unknown: "unknown",
} as const;
export type ComAtprotoRepoCreateRecordValidationStatus = ClosedEnum<
  typeof ComAtprotoRepoCreateRecordValidationStatus
>;

/**
 * OK
 */
export type ComAtprotoRepoCreateRecordResponseBody = {
  uri: string;
  cid: string;
  commit?: components.ComAtprotoRepoDefsCommitMeta | undefined;
  validationStatus?: ComAtprotoRepoCreateRecordValidationStatus | undefined;
};

/** @internal */
export const ComAtprotoRepoCreateRecordBody$inboundSchema: z.ZodType<
  ComAtprotoRepoCreateRecordBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  repo: z.string(),
  collection: z.string(),
  rkey: z.string().optional(),
  validate: z.boolean().optional(),
  record: z.any().optional(),
  swapCommit: z.string().optional(),
});

/** @internal */
export type ComAtprotoRepoCreateRecordBody$Outbound = {
  repo: string;
  collection: string;
  rkey?: string | undefined;
  validate?: boolean | undefined;
  record?: any | undefined;
  swapCommit?: string | undefined;
};

/** @internal */
export const ComAtprotoRepoCreateRecordBody$outboundSchema: z.ZodType<
  ComAtprotoRepoCreateRecordBody$Outbound,
  z.ZodTypeDef,
  ComAtprotoRepoCreateRecordBody
> = z.object({
  repo: z.string(),
  collection: z.string(),
  rkey: z.string().optional(),
  validate: z.boolean().optional(),
  record: z.any().optional(),
  swapCommit: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoRepoCreateRecordBody$ {
  /** @deprecated use `ComAtprotoRepoCreateRecordBody$inboundSchema` instead. */
  export const inboundSchema = ComAtprotoRepoCreateRecordBody$inboundSchema;
  /** @deprecated use `ComAtprotoRepoCreateRecordBody$outboundSchema` instead. */
  export const outboundSchema = ComAtprotoRepoCreateRecordBody$outboundSchema;
  /** @deprecated use `ComAtprotoRepoCreateRecordBody$Outbound` instead. */
  export type Outbound = ComAtprotoRepoCreateRecordBody$Outbound;
}

export function comAtprotoRepoCreateRecordBodyToJSON(
  comAtprotoRepoCreateRecordBody: ComAtprotoRepoCreateRecordBody,
): string {
  return JSON.stringify(
    ComAtprotoRepoCreateRecordBody$outboundSchema.parse(
      comAtprotoRepoCreateRecordBody,
    ),
  );
}

export function comAtprotoRepoCreateRecordBodyFromJSON(
  jsonString: string,
): SafeParseResult<ComAtprotoRepoCreateRecordBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ComAtprotoRepoCreateRecordBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ComAtprotoRepoCreateRecordBody' from JSON`,
  );
}

/** @internal */
export const ComAtprotoRepoCreateRecordValidationStatus$inboundSchema:
  z.ZodNativeEnum<typeof ComAtprotoRepoCreateRecordValidationStatus> = z
    .nativeEnum(ComAtprotoRepoCreateRecordValidationStatus);

/** @internal */
export const ComAtprotoRepoCreateRecordValidationStatus$outboundSchema:
  z.ZodNativeEnum<typeof ComAtprotoRepoCreateRecordValidationStatus> =
    ComAtprotoRepoCreateRecordValidationStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoRepoCreateRecordValidationStatus$ {
  /** @deprecated use `ComAtprotoRepoCreateRecordValidationStatus$inboundSchema` instead. */
  export const inboundSchema =
    ComAtprotoRepoCreateRecordValidationStatus$inboundSchema;
  /** @deprecated use `ComAtprotoRepoCreateRecordValidationStatus$outboundSchema` instead. */
  export const outboundSchema =
    ComAtprotoRepoCreateRecordValidationStatus$outboundSchema;
}

/** @internal */
export const ComAtprotoRepoCreateRecordResponseBody$inboundSchema: z.ZodType<
  ComAtprotoRepoCreateRecordResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  uri: z.string(),
  cid: z.string(),
  commit: components.ComAtprotoRepoDefsCommitMeta$inboundSchema.optional(),
  validationStatus: ComAtprotoRepoCreateRecordValidationStatus$inboundSchema
    .optional(),
});

/** @internal */
export type ComAtprotoRepoCreateRecordResponseBody$Outbound = {
  uri: string;
  cid: string;
  commit?: components.ComAtprotoRepoDefsCommitMeta$Outbound | undefined;
  validationStatus?: string | undefined;
};

/** @internal */
export const ComAtprotoRepoCreateRecordResponseBody$outboundSchema: z.ZodType<
  ComAtprotoRepoCreateRecordResponseBody$Outbound,
  z.ZodTypeDef,
  ComAtprotoRepoCreateRecordResponseBody
> = z.object({
  uri: z.string(),
  cid: z.string(),
  commit: components.ComAtprotoRepoDefsCommitMeta$outboundSchema.optional(),
  validationStatus: ComAtprotoRepoCreateRecordValidationStatus$outboundSchema
    .optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoRepoCreateRecordResponseBody$ {
  /** @deprecated use `ComAtprotoRepoCreateRecordResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ComAtprotoRepoCreateRecordResponseBody$inboundSchema;
  /** @deprecated use `ComAtprotoRepoCreateRecordResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ComAtprotoRepoCreateRecordResponseBody$outboundSchema;
  /** @deprecated use `ComAtprotoRepoCreateRecordResponseBody$Outbound` instead. */
  export type Outbound = ComAtprotoRepoCreateRecordResponseBody$Outbound;
}

export function comAtprotoRepoCreateRecordResponseBodyToJSON(
  comAtprotoRepoCreateRecordResponseBody:
    ComAtprotoRepoCreateRecordResponseBody,
): string {
  return JSON.stringify(
    ComAtprotoRepoCreateRecordResponseBody$outboundSchema.parse(
      comAtprotoRepoCreateRecordResponseBody,
    ),
  );
}

export function comAtprotoRepoCreateRecordResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<ComAtprotoRepoCreateRecordResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      ComAtprotoRepoCreateRecordResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ComAtprotoRepoCreateRecordResponseBody' from JSON`,
  );
}
