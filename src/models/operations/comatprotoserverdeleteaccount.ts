/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ComAtprotoServerDeleteAccountBody = {
  did: string;
  password: string;
  token: string;
};

/** @internal */
export const ComAtprotoServerDeleteAccountBody$inboundSchema: z.ZodType<
  ComAtprotoServerDeleteAccountBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  did: z.string(),
  password: z.string(),
  token: z.string(),
});

/** @internal */
export type ComAtprotoServerDeleteAccountBody$Outbound = {
  did: string;
  password: string;
  token: string;
};

/** @internal */
export const ComAtprotoServerDeleteAccountBody$outboundSchema: z.ZodType<
  ComAtprotoServerDeleteAccountBody$Outbound,
  z.ZodTypeDef,
  ComAtprotoServerDeleteAccountBody
> = z.object({
  did: z.string(),
  password: z.string(),
  token: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoServerDeleteAccountBody$ {
  /** @deprecated use `ComAtprotoServerDeleteAccountBody$inboundSchema` instead. */
  export const inboundSchema = ComAtprotoServerDeleteAccountBody$inboundSchema;
  /** @deprecated use `ComAtprotoServerDeleteAccountBody$outboundSchema` instead. */
  export const outboundSchema =
    ComAtprotoServerDeleteAccountBody$outboundSchema;
  /** @deprecated use `ComAtprotoServerDeleteAccountBody$Outbound` instead. */
  export type Outbound = ComAtprotoServerDeleteAccountBody$Outbound;
}

export function comAtprotoServerDeleteAccountBodyToJSON(
  comAtprotoServerDeleteAccountBody: ComAtprotoServerDeleteAccountBody,
): string {
  return JSON.stringify(
    ComAtprotoServerDeleteAccountBody$outboundSchema.parse(
      comAtprotoServerDeleteAccountBody,
    ),
  );
}

export function comAtprotoServerDeleteAccountBodyFromJSON(
  jsonString: string,
): SafeParseResult<ComAtprotoServerDeleteAccountBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ComAtprotoServerDeleteAccountBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ComAtprotoServerDeleteAccountBody' from JSON`,
  );
}
