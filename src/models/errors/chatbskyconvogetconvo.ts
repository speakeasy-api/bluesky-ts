/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type ChatBskyConvoGetConvoChatBskyConvoResponseBodyData = {
  error: "AuthMissing";
  message: string;
};

/**
 * Unauthorized
 */
export class ChatBskyConvoGetConvoChatBskyConvoResponseBody extends Error {
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$: ChatBskyConvoGetConvoChatBskyConvoResponseBodyData;

  constructor(err: ChatBskyConvoGetConvoChatBskyConvoResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "ChatBskyConvoGetConvoChatBskyConvoResponseBody";
  }
}

export const ChatBskyConvoGetConvoError = {
  InvalidRequest: "InvalidRequest",
  ExpiredToken: "ExpiredToken",
  InvalidToken: "InvalidToken",
} as const;
export type ChatBskyConvoGetConvoError = ClosedEnum<
  typeof ChatBskyConvoGetConvoError
>;

/**
 * Bad Request
 */
export type ChatBskyConvoGetConvoResponseBodyData = {
  error: ChatBskyConvoGetConvoError;
  message: string;
};

/**
 * Bad Request
 */
export class ChatBskyConvoGetConvoResponseBody extends Error {
  error: ChatBskyConvoGetConvoError;

  /** The original data that was passed to this error instance. */
  data$: ChatBskyConvoGetConvoResponseBodyData;

  constructor(err: ChatBskyConvoGetConvoResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "ChatBskyConvoGetConvoResponseBody";
  }
}

/** @internal */
export const ChatBskyConvoGetConvoChatBskyConvoResponseBody$inboundSchema:
  z.ZodType<
    ChatBskyConvoGetConvoChatBskyConvoResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.literal("AuthMissing"),
    message: z.string(),
  })
    .transform((v) => {
      return new ChatBskyConvoGetConvoChatBskyConvoResponseBody(v);
    });

/** @internal */
export type ChatBskyConvoGetConvoChatBskyConvoResponseBody$Outbound = {
  error: "AuthMissing";
  message: string;
};

/** @internal */
export const ChatBskyConvoGetConvoChatBskyConvoResponseBody$outboundSchema:
  z.ZodType<
    ChatBskyConvoGetConvoChatBskyConvoResponseBody$Outbound,
    z.ZodTypeDef,
    ChatBskyConvoGetConvoChatBskyConvoResponseBody
  > = z.instanceof(ChatBskyConvoGetConvoChatBskyConvoResponseBody)
    .transform(v => v.data$)
    .pipe(z.object({
      error: z.literal("AuthMissing").default("AuthMissing" as const),
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatBskyConvoGetConvoChatBskyConvoResponseBody$ {
  /** @deprecated use `ChatBskyConvoGetConvoChatBskyConvoResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ChatBskyConvoGetConvoChatBskyConvoResponseBody$inboundSchema;
  /** @deprecated use `ChatBskyConvoGetConvoChatBskyConvoResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ChatBskyConvoGetConvoChatBskyConvoResponseBody$outboundSchema;
  /** @deprecated use `ChatBskyConvoGetConvoChatBskyConvoResponseBody$Outbound` instead. */
  export type Outbound =
    ChatBskyConvoGetConvoChatBskyConvoResponseBody$Outbound;
}

/** @internal */
export const ChatBskyConvoGetConvoError$inboundSchema: z.ZodNativeEnum<
  typeof ChatBskyConvoGetConvoError
> = z.nativeEnum(ChatBskyConvoGetConvoError);

/** @internal */
export const ChatBskyConvoGetConvoError$outboundSchema: z.ZodNativeEnum<
  typeof ChatBskyConvoGetConvoError
> = ChatBskyConvoGetConvoError$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatBskyConvoGetConvoError$ {
  /** @deprecated use `ChatBskyConvoGetConvoError$inboundSchema` instead. */
  export const inboundSchema = ChatBskyConvoGetConvoError$inboundSchema;
  /** @deprecated use `ChatBskyConvoGetConvoError$outboundSchema` instead. */
  export const outboundSchema = ChatBskyConvoGetConvoError$outboundSchema;
}

/** @internal */
export const ChatBskyConvoGetConvoResponseBody$inboundSchema: z.ZodType<
  ChatBskyConvoGetConvoResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  error: ChatBskyConvoGetConvoError$inboundSchema,
  message: z.string(),
})
  .transform((v) => {
    return new ChatBskyConvoGetConvoResponseBody(v);
  });

/** @internal */
export type ChatBskyConvoGetConvoResponseBody$Outbound = {
  error: string;
  message: string;
};

/** @internal */
export const ChatBskyConvoGetConvoResponseBody$outboundSchema: z.ZodType<
  ChatBskyConvoGetConvoResponseBody$Outbound,
  z.ZodTypeDef,
  ChatBskyConvoGetConvoResponseBody
> = z.instanceof(ChatBskyConvoGetConvoResponseBody)
  .transform(v => v.data$)
  .pipe(z.object({
    error: ChatBskyConvoGetConvoError$outboundSchema,
    message: z.string(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatBskyConvoGetConvoResponseBody$ {
  /** @deprecated use `ChatBskyConvoGetConvoResponseBody$inboundSchema` instead. */
  export const inboundSchema = ChatBskyConvoGetConvoResponseBody$inboundSchema;
  /** @deprecated use `ChatBskyConvoGetConvoResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ChatBskyConvoGetConvoResponseBody$outboundSchema;
  /** @deprecated use `ChatBskyConvoGetConvoResponseBody$Outbound` instead. */
  export type Outbound = ChatBskyConvoGetConvoResponseBody$Outbound;
}
