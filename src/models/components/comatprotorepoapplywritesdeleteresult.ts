/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ComAtprotoRepoApplyWritesDeleteResult = {};

/** @internal */
export const ComAtprotoRepoApplyWritesDeleteResult$inboundSchema: z.ZodType<
  ComAtprotoRepoApplyWritesDeleteResult,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type ComAtprotoRepoApplyWritesDeleteResult$Outbound = {};

/** @internal */
export const ComAtprotoRepoApplyWritesDeleteResult$outboundSchema: z.ZodType<
  ComAtprotoRepoApplyWritesDeleteResult$Outbound,
  z.ZodTypeDef,
  ComAtprotoRepoApplyWritesDeleteResult
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoRepoApplyWritesDeleteResult$ {
  /** @deprecated use `ComAtprotoRepoApplyWritesDeleteResult$inboundSchema` instead. */
  export const inboundSchema =
    ComAtprotoRepoApplyWritesDeleteResult$inboundSchema;
  /** @deprecated use `ComAtprotoRepoApplyWritesDeleteResult$outboundSchema` instead. */
  export const outboundSchema =
    ComAtprotoRepoApplyWritesDeleteResult$outboundSchema;
  /** @deprecated use `ComAtprotoRepoApplyWritesDeleteResult$Outbound` instead. */
  export type Outbound = ComAtprotoRepoApplyWritesDeleteResult$Outbound;
}

export function comAtprotoRepoApplyWritesDeleteResultToJSON(
  comAtprotoRepoApplyWritesDeleteResult: ComAtprotoRepoApplyWritesDeleteResult,
): string {
  return JSON.stringify(
    ComAtprotoRepoApplyWritesDeleteResult$outboundSchema.parse(
      comAtprotoRepoApplyWritesDeleteResult,
    ),
  );
}

export function comAtprotoRepoApplyWritesDeleteResultFromJSON(
  jsonString: string,
): SafeParseResult<ComAtprotoRepoApplyWritesDeleteResult, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      ComAtprotoRepoApplyWritesDeleteResult$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ComAtprotoRepoApplyWritesDeleteResult' from JSON`,
  );
}
