/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ChatBskyConvoUnmuteConvoBody = {
  convoId: string;
};

/**
 * OK
 */
export type ChatBskyConvoUnmuteConvoResponseBody = {
  convo: components.ChatBskyConvoDefsConvoView;
};

/** @internal */
export const ChatBskyConvoUnmuteConvoBody$inboundSchema: z.ZodType<
  ChatBskyConvoUnmuteConvoBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  convoId: z.string(),
});

/** @internal */
export type ChatBskyConvoUnmuteConvoBody$Outbound = {
  convoId: string;
};

/** @internal */
export const ChatBskyConvoUnmuteConvoBody$outboundSchema: z.ZodType<
  ChatBskyConvoUnmuteConvoBody$Outbound,
  z.ZodTypeDef,
  ChatBskyConvoUnmuteConvoBody
> = z.object({
  convoId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatBskyConvoUnmuteConvoBody$ {
  /** @deprecated use `ChatBskyConvoUnmuteConvoBody$inboundSchema` instead. */
  export const inboundSchema = ChatBskyConvoUnmuteConvoBody$inboundSchema;
  /** @deprecated use `ChatBskyConvoUnmuteConvoBody$outboundSchema` instead. */
  export const outboundSchema = ChatBskyConvoUnmuteConvoBody$outboundSchema;
  /** @deprecated use `ChatBskyConvoUnmuteConvoBody$Outbound` instead. */
  export type Outbound = ChatBskyConvoUnmuteConvoBody$Outbound;
}

export function chatBskyConvoUnmuteConvoBodyToJSON(
  chatBskyConvoUnmuteConvoBody: ChatBskyConvoUnmuteConvoBody,
): string {
  return JSON.stringify(
    ChatBskyConvoUnmuteConvoBody$outboundSchema.parse(
      chatBskyConvoUnmuteConvoBody,
    ),
  );
}

export function chatBskyConvoUnmuteConvoBodyFromJSON(
  jsonString: string,
): SafeParseResult<ChatBskyConvoUnmuteConvoBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ChatBskyConvoUnmuteConvoBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ChatBskyConvoUnmuteConvoBody' from JSON`,
  );
}

/** @internal */
export const ChatBskyConvoUnmuteConvoResponseBody$inboundSchema: z.ZodType<
  ChatBskyConvoUnmuteConvoResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  convo: components.ChatBskyConvoDefsConvoView$inboundSchema,
});

/** @internal */
export type ChatBskyConvoUnmuteConvoResponseBody$Outbound = {
  convo: components.ChatBskyConvoDefsConvoView$Outbound;
};

/** @internal */
export const ChatBskyConvoUnmuteConvoResponseBody$outboundSchema: z.ZodType<
  ChatBskyConvoUnmuteConvoResponseBody$Outbound,
  z.ZodTypeDef,
  ChatBskyConvoUnmuteConvoResponseBody
> = z.object({
  convo: components.ChatBskyConvoDefsConvoView$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatBskyConvoUnmuteConvoResponseBody$ {
  /** @deprecated use `ChatBskyConvoUnmuteConvoResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ChatBskyConvoUnmuteConvoResponseBody$inboundSchema;
  /** @deprecated use `ChatBskyConvoUnmuteConvoResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ChatBskyConvoUnmuteConvoResponseBody$outboundSchema;
  /** @deprecated use `ChatBskyConvoUnmuteConvoResponseBody$Outbound` instead. */
  export type Outbound = ChatBskyConvoUnmuteConvoResponseBody$Outbound;
}

export function chatBskyConvoUnmuteConvoResponseBodyToJSON(
  chatBskyConvoUnmuteConvoResponseBody: ChatBskyConvoUnmuteConvoResponseBody,
): string {
  return JSON.stringify(
    ChatBskyConvoUnmuteConvoResponseBody$outboundSchema.parse(
      chatBskyConvoUnmuteConvoResponseBody,
    ),
  );
}

export function chatBskyConvoUnmuteConvoResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<ChatBskyConvoUnmuteConvoResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      ChatBskyConvoUnmuteConvoResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ChatBskyConvoUnmuteConvoResponseBody' from JSON`,
  );
}
