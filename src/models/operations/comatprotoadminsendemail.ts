/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ComAtprotoAdminSendEmailRequestBody = {
  recipientDid: string;
  content: string;
  subject?: string | undefined;
  senderDid: string;
  /**
   * Additional comment by the sender that won't be used in the email itself but helpful to provide more context for moderators/reviewers
   */
  comment?: string | undefined;
};

/**
 * OK
 */
export type ComAtprotoAdminSendEmailResponseBody = {
  sent: boolean;
};

/** @internal */
export const ComAtprotoAdminSendEmailRequestBody$inboundSchema: z.ZodType<
  ComAtprotoAdminSendEmailRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  recipientDid: z.string(),
  content: z.string(),
  subject: z.string().optional(),
  senderDid: z.string(),
  comment: z.string().optional(),
});

/** @internal */
export type ComAtprotoAdminSendEmailRequestBody$Outbound = {
  recipientDid: string;
  content: string;
  subject?: string | undefined;
  senderDid: string;
  comment?: string | undefined;
};

/** @internal */
export const ComAtprotoAdminSendEmailRequestBody$outboundSchema: z.ZodType<
  ComAtprotoAdminSendEmailRequestBody$Outbound,
  z.ZodTypeDef,
  ComAtprotoAdminSendEmailRequestBody
> = z.object({
  recipientDid: z.string(),
  content: z.string(),
  subject: z.string().optional(),
  senderDid: z.string(),
  comment: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoAdminSendEmailRequestBody$ {
  /** @deprecated use `ComAtprotoAdminSendEmailRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    ComAtprotoAdminSendEmailRequestBody$inboundSchema;
  /** @deprecated use `ComAtprotoAdminSendEmailRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    ComAtprotoAdminSendEmailRequestBody$outboundSchema;
  /** @deprecated use `ComAtprotoAdminSendEmailRequestBody$Outbound` instead. */
  export type Outbound = ComAtprotoAdminSendEmailRequestBody$Outbound;
}

export function comAtprotoAdminSendEmailRequestBodyToJSON(
  comAtprotoAdminSendEmailRequestBody: ComAtprotoAdminSendEmailRequestBody,
): string {
  return JSON.stringify(
    ComAtprotoAdminSendEmailRequestBody$outboundSchema.parse(
      comAtprotoAdminSendEmailRequestBody,
    ),
  );
}

export function comAtprotoAdminSendEmailRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<ComAtprotoAdminSendEmailRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      ComAtprotoAdminSendEmailRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ComAtprotoAdminSendEmailRequestBody' from JSON`,
  );
}

/** @internal */
export const ComAtprotoAdminSendEmailResponseBody$inboundSchema: z.ZodType<
  ComAtprotoAdminSendEmailResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  sent: z.boolean(),
});

/** @internal */
export type ComAtprotoAdminSendEmailResponseBody$Outbound = {
  sent: boolean;
};

/** @internal */
export const ComAtprotoAdminSendEmailResponseBody$outboundSchema: z.ZodType<
  ComAtprotoAdminSendEmailResponseBody$Outbound,
  z.ZodTypeDef,
  ComAtprotoAdminSendEmailResponseBody
> = z.object({
  sent: z.boolean(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoAdminSendEmailResponseBody$ {
  /** @deprecated use `ComAtprotoAdminSendEmailResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ComAtprotoAdminSendEmailResponseBody$inboundSchema;
  /** @deprecated use `ComAtprotoAdminSendEmailResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ComAtprotoAdminSendEmailResponseBody$outboundSchema;
  /** @deprecated use `ComAtprotoAdminSendEmailResponseBody$Outbound` instead. */
  export type Outbound = ComAtprotoAdminSendEmailResponseBody$Outbound;
}

export function comAtprotoAdminSendEmailResponseBodyToJSON(
  comAtprotoAdminSendEmailResponseBody: ComAtprotoAdminSendEmailResponseBody,
): string {
  return JSON.stringify(
    ComAtprotoAdminSendEmailResponseBody$outboundSchema.parse(
      comAtprotoAdminSendEmailResponseBody,
    ),
  );
}

export function comAtprotoAdminSendEmailResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<ComAtprotoAdminSendEmailResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      ComAtprotoAdminSendEmailResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ComAtprotoAdminSendEmailResponseBody' from JSON`,
  );
}
