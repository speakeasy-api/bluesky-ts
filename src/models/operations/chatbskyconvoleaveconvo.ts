/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ChatBskyConvoLeaveConvoRequestBody = {
  convoId: string;
};

/**
 * OK
 */
export type ChatBskyConvoLeaveConvoResponseBody = {
  convoId: string;
  rev: string;
};

/** @internal */
export const ChatBskyConvoLeaveConvoRequestBody$inboundSchema: z.ZodType<
  ChatBskyConvoLeaveConvoRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  convoId: z.string(),
});

/** @internal */
export type ChatBskyConvoLeaveConvoRequestBody$Outbound = {
  convoId: string;
};

/** @internal */
export const ChatBskyConvoLeaveConvoRequestBody$outboundSchema: z.ZodType<
  ChatBskyConvoLeaveConvoRequestBody$Outbound,
  z.ZodTypeDef,
  ChatBskyConvoLeaveConvoRequestBody
> = z.object({
  convoId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatBskyConvoLeaveConvoRequestBody$ {
  /** @deprecated use `ChatBskyConvoLeaveConvoRequestBody$inboundSchema` instead. */
  export const inboundSchema = ChatBskyConvoLeaveConvoRequestBody$inboundSchema;
  /** @deprecated use `ChatBskyConvoLeaveConvoRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    ChatBskyConvoLeaveConvoRequestBody$outboundSchema;
  /** @deprecated use `ChatBskyConvoLeaveConvoRequestBody$Outbound` instead. */
  export type Outbound = ChatBskyConvoLeaveConvoRequestBody$Outbound;
}

export function chatBskyConvoLeaveConvoRequestBodyToJSON(
  chatBskyConvoLeaveConvoRequestBody: ChatBskyConvoLeaveConvoRequestBody,
): string {
  return JSON.stringify(
    ChatBskyConvoLeaveConvoRequestBody$outboundSchema.parse(
      chatBskyConvoLeaveConvoRequestBody,
    ),
  );
}

export function chatBskyConvoLeaveConvoRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<ChatBskyConvoLeaveConvoRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      ChatBskyConvoLeaveConvoRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ChatBskyConvoLeaveConvoRequestBody' from JSON`,
  );
}

/** @internal */
export const ChatBskyConvoLeaveConvoResponseBody$inboundSchema: z.ZodType<
  ChatBskyConvoLeaveConvoResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  convoId: z.string(),
  rev: z.string(),
});

/** @internal */
export type ChatBskyConvoLeaveConvoResponseBody$Outbound = {
  convoId: string;
  rev: string;
};

/** @internal */
export const ChatBskyConvoLeaveConvoResponseBody$outboundSchema: z.ZodType<
  ChatBskyConvoLeaveConvoResponseBody$Outbound,
  z.ZodTypeDef,
  ChatBskyConvoLeaveConvoResponseBody
> = z.object({
  convoId: z.string(),
  rev: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatBskyConvoLeaveConvoResponseBody$ {
  /** @deprecated use `ChatBskyConvoLeaveConvoResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ChatBskyConvoLeaveConvoResponseBody$inboundSchema;
  /** @deprecated use `ChatBskyConvoLeaveConvoResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ChatBskyConvoLeaveConvoResponseBody$outboundSchema;
  /** @deprecated use `ChatBskyConvoLeaveConvoResponseBody$Outbound` instead. */
  export type Outbound = ChatBskyConvoLeaveConvoResponseBody$Outbound;
}

export function chatBskyConvoLeaveConvoResponseBodyToJSON(
  chatBskyConvoLeaveConvoResponseBody: ChatBskyConvoLeaveConvoResponseBody,
): string {
  return JSON.stringify(
    ChatBskyConvoLeaveConvoResponseBody$outboundSchema.parse(
      chatBskyConvoLeaveConvoResponseBody,
    ),
  );
}

export function chatBskyConvoLeaveConvoResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<ChatBskyConvoLeaveConvoResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      ChatBskyConvoLeaveConvoResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ChatBskyConvoLeaveConvoResponseBody' from JSON`,
  );
}
