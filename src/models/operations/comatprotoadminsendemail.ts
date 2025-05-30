/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ComAtprotoAdminSendEmailBody = {
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
export const ComAtprotoAdminSendEmailBody$inboundSchema: z.ZodType<
  ComAtprotoAdminSendEmailBody,
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
export type ComAtprotoAdminSendEmailBody$Outbound = {
  recipientDid: string;
  content: string;
  subject?: string | undefined;
  senderDid: string;
  comment?: string | undefined;
};

/** @internal */
export const ComAtprotoAdminSendEmailBody$outboundSchema: z.ZodType<
  ComAtprotoAdminSendEmailBody$Outbound,
  z.ZodTypeDef,
  ComAtprotoAdminSendEmailBody
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
export namespace ComAtprotoAdminSendEmailBody$ {
  /** @deprecated use `ComAtprotoAdminSendEmailBody$inboundSchema` instead. */
  export const inboundSchema = ComAtprotoAdminSendEmailBody$inboundSchema;
  /** @deprecated use `ComAtprotoAdminSendEmailBody$outboundSchema` instead. */
  export const outboundSchema = ComAtprotoAdminSendEmailBody$outboundSchema;
  /** @deprecated use `ComAtprotoAdminSendEmailBody$Outbound` instead. */
  export type Outbound = ComAtprotoAdminSendEmailBody$Outbound;
}

export function comAtprotoAdminSendEmailBodyToJSON(
  comAtprotoAdminSendEmailBody: ComAtprotoAdminSendEmailBody,
): string {
  return JSON.stringify(
    ComAtprotoAdminSendEmailBody$outboundSchema.parse(
      comAtprotoAdminSendEmailBody,
    ),
  );
}

export function comAtprotoAdminSendEmailBodyFromJSON(
  jsonString: string,
): SafeParseResult<ComAtprotoAdminSendEmailBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ComAtprotoAdminSendEmailBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ComAtprotoAdminSendEmailBody' from JSON`,
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
