/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ComAtprotoServerReserveSigningKeyBody = {
  /**
   * The DID to reserve a key for.
   */
  did?: string | undefined;
};

/**
 * OK
 */
export type ComAtprotoServerReserveSigningKeyResponseBody = {
  /**
   * The public key for the reserved signing key, in did:key serialization.
   */
  signingKey: string;
};

/** @internal */
export const ComAtprotoServerReserveSigningKeyBody$inboundSchema: z.ZodType<
  ComAtprotoServerReserveSigningKeyBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  did: z.string().optional(),
});

/** @internal */
export type ComAtprotoServerReserveSigningKeyBody$Outbound = {
  did?: string | undefined;
};

/** @internal */
export const ComAtprotoServerReserveSigningKeyBody$outboundSchema: z.ZodType<
  ComAtprotoServerReserveSigningKeyBody$Outbound,
  z.ZodTypeDef,
  ComAtprotoServerReserveSigningKeyBody
> = z.object({
  did: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoServerReserveSigningKeyBody$ {
  /** @deprecated use `ComAtprotoServerReserveSigningKeyBody$inboundSchema` instead. */
  export const inboundSchema =
    ComAtprotoServerReserveSigningKeyBody$inboundSchema;
  /** @deprecated use `ComAtprotoServerReserveSigningKeyBody$outboundSchema` instead. */
  export const outboundSchema =
    ComAtprotoServerReserveSigningKeyBody$outboundSchema;
  /** @deprecated use `ComAtprotoServerReserveSigningKeyBody$Outbound` instead. */
  export type Outbound = ComAtprotoServerReserveSigningKeyBody$Outbound;
}

export function comAtprotoServerReserveSigningKeyBodyToJSON(
  comAtprotoServerReserveSigningKeyBody: ComAtprotoServerReserveSigningKeyBody,
): string {
  return JSON.stringify(
    ComAtprotoServerReserveSigningKeyBody$outboundSchema.parse(
      comAtprotoServerReserveSigningKeyBody,
    ),
  );
}

export function comAtprotoServerReserveSigningKeyBodyFromJSON(
  jsonString: string,
): SafeParseResult<ComAtprotoServerReserveSigningKeyBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      ComAtprotoServerReserveSigningKeyBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ComAtprotoServerReserveSigningKeyBody' from JSON`,
  );
}

/** @internal */
export const ComAtprotoServerReserveSigningKeyResponseBody$inboundSchema:
  z.ZodType<
    ComAtprotoServerReserveSigningKeyResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    signingKey: z.string(),
  });

/** @internal */
export type ComAtprotoServerReserveSigningKeyResponseBody$Outbound = {
  signingKey: string;
};

/** @internal */
export const ComAtprotoServerReserveSigningKeyResponseBody$outboundSchema:
  z.ZodType<
    ComAtprotoServerReserveSigningKeyResponseBody$Outbound,
    z.ZodTypeDef,
    ComAtprotoServerReserveSigningKeyResponseBody
  > = z.object({
    signingKey: z.string(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoServerReserveSigningKeyResponseBody$ {
  /** @deprecated use `ComAtprotoServerReserveSigningKeyResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ComAtprotoServerReserveSigningKeyResponseBody$inboundSchema;
  /** @deprecated use `ComAtprotoServerReserveSigningKeyResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ComAtprotoServerReserveSigningKeyResponseBody$outboundSchema;
  /** @deprecated use `ComAtprotoServerReserveSigningKeyResponseBody$Outbound` instead. */
  export type Outbound = ComAtprotoServerReserveSigningKeyResponseBody$Outbound;
}

export function comAtprotoServerReserveSigningKeyResponseBodyToJSON(
  comAtprotoServerReserveSigningKeyResponseBody:
    ComAtprotoServerReserveSigningKeyResponseBody,
): string {
  return JSON.stringify(
    ComAtprotoServerReserveSigningKeyResponseBody$outboundSchema.parse(
      comAtprotoServerReserveSigningKeyResponseBody,
    ),
  );
}

export function comAtprotoServerReserveSigningKeyResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  ComAtprotoServerReserveSigningKeyResponseBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      ComAtprotoServerReserveSigningKeyResponseBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'ComAtprotoServerReserveSigningKeyResponseBody' from JSON`,
  );
}
