/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ChatBskyConvoDeleteMessageForSelfBody = {
  convoId: string;
  messageId: string;
};

/** @internal */
export const ChatBskyConvoDeleteMessageForSelfBody$inboundSchema: z.ZodType<
  ChatBskyConvoDeleteMessageForSelfBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  convoId: z.string(),
  messageId: z.string(),
});

/** @internal */
export type ChatBskyConvoDeleteMessageForSelfBody$Outbound = {
  convoId: string;
  messageId: string;
};

/** @internal */
export const ChatBskyConvoDeleteMessageForSelfBody$outboundSchema: z.ZodType<
  ChatBskyConvoDeleteMessageForSelfBody$Outbound,
  z.ZodTypeDef,
  ChatBskyConvoDeleteMessageForSelfBody
> = z.object({
  convoId: z.string(),
  messageId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatBskyConvoDeleteMessageForSelfBody$ {
  /** @deprecated use `ChatBskyConvoDeleteMessageForSelfBody$inboundSchema` instead. */
  export const inboundSchema =
    ChatBskyConvoDeleteMessageForSelfBody$inboundSchema;
  /** @deprecated use `ChatBskyConvoDeleteMessageForSelfBody$outboundSchema` instead. */
  export const outboundSchema =
    ChatBskyConvoDeleteMessageForSelfBody$outboundSchema;
  /** @deprecated use `ChatBskyConvoDeleteMessageForSelfBody$Outbound` instead. */
  export type Outbound = ChatBskyConvoDeleteMessageForSelfBody$Outbound;
}

export function chatBskyConvoDeleteMessageForSelfBodyToJSON(
  chatBskyConvoDeleteMessageForSelfBody: ChatBskyConvoDeleteMessageForSelfBody,
): string {
  return JSON.stringify(
    ChatBskyConvoDeleteMessageForSelfBody$outboundSchema.parse(
      chatBskyConvoDeleteMessageForSelfBody,
    ),
  );
}

export function chatBskyConvoDeleteMessageForSelfBodyFromJSON(
  jsonString: string,
): SafeParseResult<ChatBskyConvoDeleteMessageForSelfBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      ChatBskyConvoDeleteMessageForSelfBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ChatBskyConvoDeleteMessageForSelfBody' from JSON`,
  );
}
