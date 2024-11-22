/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ComAtprotoServerDefsInviteCodeUse = {
  usedBy: string;
  usedAt: Date;
};

/** @internal */
export const ComAtprotoServerDefsInviteCodeUse$inboundSchema: z.ZodType<
  ComAtprotoServerDefsInviteCodeUse,
  z.ZodTypeDef,
  unknown
> = z.object({
  usedBy: z.string(),
  usedAt: z.string().datetime({ offset: true }).transform(v => new Date(v)),
});

/** @internal */
export type ComAtprotoServerDefsInviteCodeUse$Outbound = {
  usedBy: string;
  usedAt: string;
};

/** @internal */
export const ComAtprotoServerDefsInviteCodeUse$outboundSchema: z.ZodType<
  ComAtprotoServerDefsInviteCodeUse$Outbound,
  z.ZodTypeDef,
  ComAtprotoServerDefsInviteCodeUse
> = z.object({
  usedBy: z.string(),
  usedAt: z.date().transform(v => v.toISOString()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoServerDefsInviteCodeUse$ {
  /** @deprecated use `ComAtprotoServerDefsInviteCodeUse$inboundSchema` instead. */
  export const inboundSchema = ComAtprotoServerDefsInviteCodeUse$inboundSchema;
  /** @deprecated use `ComAtprotoServerDefsInviteCodeUse$outboundSchema` instead. */
  export const outboundSchema =
    ComAtprotoServerDefsInviteCodeUse$outboundSchema;
  /** @deprecated use `ComAtprotoServerDefsInviteCodeUse$Outbound` instead. */
  export type Outbound = ComAtprotoServerDefsInviteCodeUse$Outbound;
}

export function comAtprotoServerDefsInviteCodeUseToJSON(
  comAtprotoServerDefsInviteCodeUse: ComAtprotoServerDefsInviteCodeUse,
): string {
  return JSON.stringify(
    ComAtprotoServerDefsInviteCodeUse$outboundSchema.parse(
      comAtprotoServerDefsInviteCodeUse,
    ),
  );
}

export function comAtprotoServerDefsInviteCodeUseFromJSON(
  jsonString: string,
): SafeParseResult<ComAtprotoServerDefsInviteCodeUse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ComAtprotoServerDefsInviteCodeUse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ComAtprotoServerDefsInviteCodeUse' from JSON`,
  );
}
