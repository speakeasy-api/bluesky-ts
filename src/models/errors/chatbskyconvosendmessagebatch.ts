/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type ChatBskyConvoSendMessageBatchChatBskyConvoResponseBodyData = {
  error: "AuthMissing";
  message: string;
};

/**
 * Unauthorized
 */
export class ChatBskyConvoSendMessageBatchChatBskyConvoResponseBody
  extends Error
{
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$: ChatBskyConvoSendMessageBatchChatBskyConvoResponseBodyData;

  constructor(err: ChatBskyConvoSendMessageBatchChatBskyConvoResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "ChatBskyConvoSendMessageBatchChatBskyConvoResponseBody";
  }
}

export const ChatBskyConvoSendMessageBatchError = {
  InvalidRequest: "InvalidRequest",
  ExpiredToken: "ExpiredToken",
  InvalidToken: "InvalidToken",
} as const;
export type ChatBskyConvoSendMessageBatchError = ClosedEnum<
  typeof ChatBskyConvoSendMessageBatchError
>;

/**
 * Bad Request
 */
export type ChatBskyConvoSendMessageBatchResponseBodyData = {
  error: ChatBskyConvoSendMessageBatchError;
  message: string;
};

/**
 * Bad Request
 */
export class ChatBskyConvoSendMessageBatchResponseBody extends Error {
  error: ChatBskyConvoSendMessageBatchError;

  /** The original data that was passed to this error instance. */
  data$: ChatBskyConvoSendMessageBatchResponseBodyData;

  constructor(err: ChatBskyConvoSendMessageBatchResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "ChatBskyConvoSendMessageBatchResponseBody";
  }
}

/** @internal */
export const ChatBskyConvoSendMessageBatchChatBskyConvoResponseBody$inboundSchema:
  z.ZodType<
    ChatBskyConvoSendMessageBatchChatBskyConvoResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.literal("AuthMissing"),
    message: z.string(),
  })
    .transform((v) => {
      return new ChatBskyConvoSendMessageBatchChatBskyConvoResponseBody(v);
    });

/** @internal */
export type ChatBskyConvoSendMessageBatchChatBskyConvoResponseBody$Outbound = {
  error: "AuthMissing";
  message: string;
};

/** @internal */
export const ChatBskyConvoSendMessageBatchChatBskyConvoResponseBody$outboundSchema:
  z.ZodType<
    ChatBskyConvoSendMessageBatchChatBskyConvoResponseBody$Outbound,
    z.ZodTypeDef,
    ChatBskyConvoSendMessageBatchChatBskyConvoResponseBody
  > = z.instanceof(ChatBskyConvoSendMessageBatchChatBskyConvoResponseBody)
    .transform(v => v.data$)
    .pipe(z.object({
      error: z.literal("AuthMissing").default("AuthMissing" as const),
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatBskyConvoSendMessageBatchChatBskyConvoResponseBody$ {
  /** @deprecated use `ChatBskyConvoSendMessageBatchChatBskyConvoResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ChatBskyConvoSendMessageBatchChatBskyConvoResponseBody$inboundSchema;
  /** @deprecated use `ChatBskyConvoSendMessageBatchChatBskyConvoResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ChatBskyConvoSendMessageBatchChatBskyConvoResponseBody$outboundSchema;
  /** @deprecated use `ChatBskyConvoSendMessageBatchChatBskyConvoResponseBody$Outbound` instead. */
  export type Outbound =
    ChatBskyConvoSendMessageBatchChatBskyConvoResponseBody$Outbound;
}

/** @internal */
export const ChatBskyConvoSendMessageBatchError$inboundSchema: z.ZodNativeEnum<
  typeof ChatBskyConvoSendMessageBatchError
> = z.nativeEnum(ChatBskyConvoSendMessageBatchError);

/** @internal */
export const ChatBskyConvoSendMessageBatchError$outboundSchema: z.ZodNativeEnum<
  typeof ChatBskyConvoSendMessageBatchError
> = ChatBskyConvoSendMessageBatchError$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatBskyConvoSendMessageBatchError$ {
  /** @deprecated use `ChatBskyConvoSendMessageBatchError$inboundSchema` instead. */
  export const inboundSchema = ChatBskyConvoSendMessageBatchError$inboundSchema;
  /** @deprecated use `ChatBskyConvoSendMessageBatchError$outboundSchema` instead. */
  export const outboundSchema =
    ChatBskyConvoSendMessageBatchError$outboundSchema;
}

/** @internal */
export const ChatBskyConvoSendMessageBatchResponseBody$inboundSchema: z.ZodType<
  ChatBskyConvoSendMessageBatchResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  error: ChatBskyConvoSendMessageBatchError$inboundSchema,
  message: z.string(),
})
  .transform((v) => {
    return new ChatBskyConvoSendMessageBatchResponseBody(v);
  });

/** @internal */
export type ChatBskyConvoSendMessageBatchResponseBody$Outbound = {
  error: string;
  message: string;
};

/** @internal */
export const ChatBskyConvoSendMessageBatchResponseBody$outboundSchema:
  z.ZodType<
    ChatBskyConvoSendMessageBatchResponseBody$Outbound,
    z.ZodTypeDef,
    ChatBskyConvoSendMessageBatchResponseBody
  > = z.instanceof(ChatBskyConvoSendMessageBatchResponseBody)
    .transform(v => v.data$)
    .pipe(z.object({
      error: ChatBskyConvoSendMessageBatchError$outboundSchema,
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatBskyConvoSendMessageBatchResponseBody$ {
  /** @deprecated use `ChatBskyConvoSendMessageBatchResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ChatBskyConvoSendMessageBatchResponseBody$inboundSchema;
  /** @deprecated use `ChatBskyConvoSendMessageBatchResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ChatBskyConvoSendMessageBatchResponseBody$outboundSchema;
  /** @deprecated use `ChatBskyConvoSendMessageBatchResponseBody$Outbound` instead. */
  export type Outbound = ChatBskyConvoSendMessageBatchResponseBody$Outbound;
}
