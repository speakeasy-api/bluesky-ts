/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * OK
 */
export type ComAtprotoServerRequestEmailUpdateResponseBody = {
  tokenRequired: boolean;
};

/** @internal */
export const ComAtprotoServerRequestEmailUpdateResponseBody$inboundSchema:
  z.ZodType<
    ComAtprotoServerRequestEmailUpdateResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    tokenRequired: z.boolean(),
  });

/** @internal */
export type ComAtprotoServerRequestEmailUpdateResponseBody$Outbound = {
  tokenRequired: boolean;
};

/** @internal */
export const ComAtprotoServerRequestEmailUpdateResponseBody$outboundSchema:
  z.ZodType<
    ComAtprotoServerRequestEmailUpdateResponseBody$Outbound,
    z.ZodTypeDef,
    ComAtprotoServerRequestEmailUpdateResponseBody
  > = z.object({
    tokenRequired: z.boolean(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoServerRequestEmailUpdateResponseBody$ {
  /** @deprecated use `ComAtprotoServerRequestEmailUpdateResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ComAtprotoServerRequestEmailUpdateResponseBody$inboundSchema;
  /** @deprecated use `ComAtprotoServerRequestEmailUpdateResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ComAtprotoServerRequestEmailUpdateResponseBody$outboundSchema;
  /** @deprecated use `ComAtprotoServerRequestEmailUpdateResponseBody$Outbound` instead. */
  export type Outbound =
    ComAtprotoServerRequestEmailUpdateResponseBody$Outbound;
}

export function comAtprotoServerRequestEmailUpdateResponseBodyToJSON(
  comAtprotoServerRequestEmailUpdateResponseBody:
    ComAtprotoServerRequestEmailUpdateResponseBody,
): string {
  return JSON.stringify(
    ComAtprotoServerRequestEmailUpdateResponseBody$outboundSchema.parse(
      comAtprotoServerRequestEmailUpdateResponseBody,
    ),
  );
}

export function comAtprotoServerRequestEmailUpdateResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  ComAtprotoServerRequestEmailUpdateResponseBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      ComAtprotoServerRequestEmailUpdateResponseBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'ComAtprotoServerRequestEmailUpdateResponseBody' from JSON`,
  );
}
