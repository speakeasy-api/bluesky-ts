/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ComAtprotoServerCreateInviteCodesBody = {
  codeCount?: number | undefined;
  useCount: number;
  forAccounts?: Array<string> | undefined;
};

/**
 * OK
 */
export type ComAtprotoServerCreateInviteCodesResponseBody = {
  codes: Array<components.ComAtprotoServerCreateInviteCodesAccountCodes>;
};

/** @internal */
export const ComAtprotoServerCreateInviteCodesBody$inboundSchema: z.ZodType<
  ComAtprotoServerCreateInviteCodesBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  codeCount: z.number().int().default(1),
  useCount: z.number().int(),
  forAccounts: z.array(z.string()).optional(),
});

/** @internal */
export type ComAtprotoServerCreateInviteCodesBody$Outbound = {
  codeCount: number;
  useCount: number;
  forAccounts?: Array<string> | undefined;
};

/** @internal */
export const ComAtprotoServerCreateInviteCodesBody$outboundSchema: z.ZodType<
  ComAtprotoServerCreateInviteCodesBody$Outbound,
  z.ZodTypeDef,
  ComAtprotoServerCreateInviteCodesBody
> = z.object({
  codeCount: z.number().int().default(1),
  useCount: z.number().int(),
  forAccounts: z.array(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoServerCreateInviteCodesBody$ {
  /** @deprecated use `ComAtprotoServerCreateInviteCodesBody$inboundSchema` instead. */
  export const inboundSchema =
    ComAtprotoServerCreateInviteCodesBody$inboundSchema;
  /** @deprecated use `ComAtprotoServerCreateInviteCodesBody$outboundSchema` instead. */
  export const outboundSchema =
    ComAtprotoServerCreateInviteCodesBody$outboundSchema;
  /** @deprecated use `ComAtprotoServerCreateInviteCodesBody$Outbound` instead. */
  export type Outbound = ComAtprotoServerCreateInviteCodesBody$Outbound;
}

export function comAtprotoServerCreateInviteCodesBodyToJSON(
  comAtprotoServerCreateInviteCodesBody: ComAtprotoServerCreateInviteCodesBody,
): string {
  return JSON.stringify(
    ComAtprotoServerCreateInviteCodesBody$outboundSchema.parse(
      comAtprotoServerCreateInviteCodesBody,
    ),
  );
}

export function comAtprotoServerCreateInviteCodesBodyFromJSON(
  jsonString: string,
): SafeParseResult<ComAtprotoServerCreateInviteCodesBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      ComAtprotoServerCreateInviteCodesBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ComAtprotoServerCreateInviteCodesBody' from JSON`,
  );
}

/** @internal */
export const ComAtprotoServerCreateInviteCodesResponseBody$inboundSchema:
  z.ZodType<
    ComAtprotoServerCreateInviteCodesResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    codes: z.array(
      components.ComAtprotoServerCreateInviteCodesAccountCodes$inboundSchema,
    ),
  });

/** @internal */
export type ComAtprotoServerCreateInviteCodesResponseBody$Outbound = {
  codes: Array<
    components.ComAtprotoServerCreateInviteCodesAccountCodes$Outbound
  >;
};

/** @internal */
export const ComAtprotoServerCreateInviteCodesResponseBody$outboundSchema:
  z.ZodType<
    ComAtprotoServerCreateInviteCodesResponseBody$Outbound,
    z.ZodTypeDef,
    ComAtprotoServerCreateInviteCodesResponseBody
  > = z.object({
    codes: z.array(
      components.ComAtprotoServerCreateInviteCodesAccountCodes$outboundSchema,
    ),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoServerCreateInviteCodesResponseBody$ {
  /** @deprecated use `ComAtprotoServerCreateInviteCodesResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ComAtprotoServerCreateInviteCodesResponseBody$inboundSchema;
  /** @deprecated use `ComAtprotoServerCreateInviteCodesResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ComAtprotoServerCreateInviteCodesResponseBody$outboundSchema;
  /** @deprecated use `ComAtprotoServerCreateInviteCodesResponseBody$Outbound` instead. */
  export type Outbound = ComAtprotoServerCreateInviteCodesResponseBody$Outbound;
}

export function comAtprotoServerCreateInviteCodesResponseBodyToJSON(
  comAtprotoServerCreateInviteCodesResponseBody:
    ComAtprotoServerCreateInviteCodesResponseBody,
): string {
  return JSON.stringify(
    ComAtprotoServerCreateInviteCodesResponseBody$outboundSchema.parse(
      comAtprotoServerCreateInviteCodesResponseBody,
    ),
  );
}

export function comAtprotoServerCreateInviteCodesResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  ComAtprotoServerCreateInviteCodesResponseBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      ComAtprotoServerCreateInviteCodesResponseBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'ComAtprotoServerCreateInviteCodesResponseBody' from JSON`,
  );
}
