/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ChatBskyConvoListConvosRequest = {
  limit?: number | undefined;
  cursor?: string | undefined;
};

/**
 * OK
 */
export type ChatBskyConvoListConvosResponseBody = {
  cursor?: string | undefined;
  convos: Array<components.ChatBskyConvoDefsConvoView>;
};

/** @internal */
export const ChatBskyConvoListConvosRequest$inboundSchema: z.ZodType<
  ChatBskyConvoListConvosRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  limit: z.number().int().default(50),
  cursor: z.string().optional(),
});

/** @internal */
export type ChatBskyConvoListConvosRequest$Outbound = {
  limit: number;
  cursor?: string | undefined;
};

/** @internal */
export const ChatBskyConvoListConvosRequest$outboundSchema: z.ZodType<
  ChatBskyConvoListConvosRequest$Outbound,
  z.ZodTypeDef,
  ChatBskyConvoListConvosRequest
> = z.object({
  limit: z.number().int().default(50),
  cursor: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatBskyConvoListConvosRequest$ {
  /** @deprecated use `ChatBskyConvoListConvosRequest$inboundSchema` instead. */
  export const inboundSchema = ChatBskyConvoListConvosRequest$inboundSchema;
  /** @deprecated use `ChatBskyConvoListConvosRequest$outboundSchema` instead. */
  export const outboundSchema = ChatBskyConvoListConvosRequest$outboundSchema;
  /** @deprecated use `ChatBskyConvoListConvosRequest$Outbound` instead. */
  export type Outbound = ChatBskyConvoListConvosRequest$Outbound;
}

export function chatBskyConvoListConvosRequestToJSON(
  chatBskyConvoListConvosRequest: ChatBskyConvoListConvosRequest,
): string {
  return JSON.stringify(
    ChatBskyConvoListConvosRequest$outboundSchema.parse(
      chatBskyConvoListConvosRequest,
    ),
  );
}

export function chatBskyConvoListConvosRequestFromJSON(
  jsonString: string,
): SafeParseResult<ChatBskyConvoListConvosRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ChatBskyConvoListConvosRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ChatBskyConvoListConvosRequest' from JSON`,
  );
}

/** @internal */
export const ChatBskyConvoListConvosResponseBody$inboundSchema: z.ZodType<
  ChatBskyConvoListConvosResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  cursor: z.string().optional(),
  convos: z.array(components.ChatBskyConvoDefsConvoView$inboundSchema),
});

/** @internal */
export type ChatBskyConvoListConvosResponseBody$Outbound = {
  cursor?: string | undefined;
  convos: Array<components.ChatBskyConvoDefsConvoView$Outbound>;
};

/** @internal */
export const ChatBskyConvoListConvosResponseBody$outboundSchema: z.ZodType<
  ChatBskyConvoListConvosResponseBody$Outbound,
  z.ZodTypeDef,
  ChatBskyConvoListConvosResponseBody
> = z.object({
  cursor: z.string().optional(),
  convos: z.array(components.ChatBskyConvoDefsConvoView$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatBskyConvoListConvosResponseBody$ {
  /** @deprecated use `ChatBskyConvoListConvosResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ChatBskyConvoListConvosResponseBody$inboundSchema;
  /** @deprecated use `ChatBskyConvoListConvosResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ChatBskyConvoListConvosResponseBody$outboundSchema;
  /** @deprecated use `ChatBskyConvoListConvosResponseBody$Outbound` instead. */
  export type Outbound = ChatBskyConvoListConvosResponseBody$Outbound;
}

export function chatBskyConvoListConvosResponseBodyToJSON(
  chatBskyConvoListConvosResponseBody: ChatBskyConvoListConvosResponseBody,
): string {
  return JSON.stringify(
    ChatBskyConvoListConvosResponseBody$outboundSchema.parse(
      chatBskyConvoListConvosResponseBody,
    ),
  );
}

export function chatBskyConvoListConvosResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<ChatBskyConvoListConvosResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      ChatBskyConvoListConvosResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ChatBskyConvoListConvosResponseBody' from JSON`,
  );
}
