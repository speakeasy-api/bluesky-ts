/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ComAtprotoAdminGetAccountInfoRequest = {
  did: string;
};

/** @internal */
export const ComAtprotoAdminGetAccountInfoRequest$inboundSchema: z.ZodType<
  ComAtprotoAdminGetAccountInfoRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  did: z.string(),
});

/** @internal */
export type ComAtprotoAdminGetAccountInfoRequest$Outbound = {
  did: string;
};

/** @internal */
export const ComAtprotoAdminGetAccountInfoRequest$outboundSchema: z.ZodType<
  ComAtprotoAdminGetAccountInfoRequest$Outbound,
  z.ZodTypeDef,
  ComAtprotoAdminGetAccountInfoRequest
> = z.object({
  did: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoAdminGetAccountInfoRequest$ {
  /** @deprecated use `ComAtprotoAdminGetAccountInfoRequest$inboundSchema` instead. */
  export const inboundSchema =
    ComAtprotoAdminGetAccountInfoRequest$inboundSchema;
  /** @deprecated use `ComAtprotoAdminGetAccountInfoRequest$outboundSchema` instead. */
  export const outboundSchema =
    ComAtprotoAdminGetAccountInfoRequest$outboundSchema;
  /** @deprecated use `ComAtprotoAdminGetAccountInfoRequest$Outbound` instead. */
  export type Outbound = ComAtprotoAdminGetAccountInfoRequest$Outbound;
}

export function comAtprotoAdminGetAccountInfoRequestToJSON(
  comAtprotoAdminGetAccountInfoRequest: ComAtprotoAdminGetAccountInfoRequest,
): string {
  return JSON.stringify(
    ComAtprotoAdminGetAccountInfoRequest$outboundSchema.parse(
      comAtprotoAdminGetAccountInfoRequest,
    ),
  );
}

export function comAtprotoAdminGetAccountInfoRequestFromJSON(
  jsonString: string,
): SafeParseResult<ComAtprotoAdminGetAccountInfoRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      ComAtprotoAdminGetAccountInfoRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ComAtprotoAdminGetAccountInfoRequest' from JSON`,
  );
}
