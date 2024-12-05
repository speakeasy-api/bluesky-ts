/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type ChatBskyConvoDeleteMessageForSelfConvoResponseBodyData = {
  error: "AuthMissing";
  message: string;
};

/**
 * Unauthorized
 */
export class ChatBskyConvoDeleteMessageForSelfConvoResponseBody extends Error {
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$: ChatBskyConvoDeleteMessageForSelfConvoResponseBodyData;

  constructor(err: ChatBskyConvoDeleteMessageForSelfConvoResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "ChatBskyConvoDeleteMessageForSelfConvoResponseBody";
  }
}

export const ChatBskyConvoDeleteMessageForSelfError = {
  InvalidRequest: "InvalidRequest",
  ExpiredToken: "ExpiredToken",
  InvalidToken: "InvalidToken",
} as const;
export type ChatBskyConvoDeleteMessageForSelfError = ClosedEnum<
  typeof ChatBskyConvoDeleteMessageForSelfError
>;

/**
 * Bad Request
 */
export type ChatBskyConvoDeleteMessageForSelfResponseBodyData = {
  error: ChatBskyConvoDeleteMessageForSelfError;
  message: string;
};

/**
 * Bad Request
 */
export class ChatBskyConvoDeleteMessageForSelfResponseBody extends Error {
  error: ChatBskyConvoDeleteMessageForSelfError;

  /** The original data that was passed to this error instance. */
  data$: ChatBskyConvoDeleteMessageForSelfResponseBodyData;

  constructor(err: ChatBskyConvoDeleteMessageForSelfResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "ChatBskyConvoDeleteMessageForSelfResponseBody";
  }
}

/** @internal */
export const ChatBskyConvoDeleteMessageForSelfConvoResponseBody$inboundSchema:
  z.ZodType<
    ChatBskyConvoDeleteMessageForSelfConvoResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.literal("AuthMissing"),
    message: z.string(),
  })
    .transform((v) => {
      return new ChatBskyConvoDeleteMessageForSelfConvoResponseBody(v);
    });

/** @internal */
export type ChatBskyConvoDeleteMessageForSelfConvoResponseBody$Outbound = {
  error: "AuthMissing";
  message: string;
};

/** @internal */
export const ChatBskyConvoDeleteMessageForSelfConvoResponseBody$outboundSchema:
  z.ZodType<
    ChatBskyConvoDeleteMessageForSelfConvoResponseBody$Outbound,
    z.ZodTypeDef,
    ChatBskyConvoDeleteMessageForSelfConvoResponseBody
  > = z.instanceof(ChatBskyConvoDeleteMessageForSelfConvoResponseBody)
    .transform(v => v.data$)
    .pipe(z.object({
      error: z.literal("AuthMissing").default("AuthMissing" as const),
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatBskyConvoDeleteMessageForSelfConvoResponseBody$ {
  /** @deprecated use `ChatBskyConvoDeleteMessageForSelfConvoResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ChatBskyConvoDeleteMessageForSelfConvoResponseBody$inboundSchema;
  /** @deprecated use `ChatBskyConvoDeleteMessageForSelfConvoResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ChatBskyConvoDeleteMessageForSelfConvoResponseBody$outboundSchema;
  /** @deprecated use `ChatBskyConvoDeleteMessageForSelfConvoResponseBody$Outbound` instead. */
  export type Outbound =
    ChatBskyConvoDeleteMessageForSelfConvoResponseBody$Outbound;
}

/** @internal */
export const ChatBskyConvoDeleteMessageForSelfError$inboundSchema:
  z.ZodNativeEnum<typeof ChatBskyConvoDeleteMessageForSelfError> = z.nativeEnum(
    ChatBskyConvoDeleteMessageForSelfError,
  );

/** @internal */
export const ChatBskyConvoDeleteMessageForSelfError$outboundSchema:
  z.ZodNativeEnum<typeof ChatBskyConvoDeleteMessageForSelfError> =
    ChatBskyConvoDeleteMessageForSelfError$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatBskyConvoDeleteMessageForSelfError$ {
  /** @deprecated use `ChatBskyConvoDeleteMessageForSelfError$inboundSchema` instead. */
  export const inboundSchema =
    ChatBskyConvoDeleteMessageForSelfError$inboundSchema;
  /** @deprecated use `ChatBskyConvoDeleteMessageForSelfError$outboundSchema` instead. */
  export const outboundSchema =
    ChatBskyConvoDeleteMessageForSelfError$outboundSchema;
}

/** @internal */
export const ChatBskyConvoDeleteMessageForSelfResponseBody$inboundSchema:
  z.ZodType<
    ChatBskyConvoDeleteMessageForSelfResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: ChatBskyConvoDeleteMessageForSelfError$inboundSchema,
    message: z.string(),
  })
    .transform((v) => {
      return new ChatBskyConvoDeleteMessageForSelfResponseBody(v);
    });

/** @internal */
export type ChatBskyConvoDeleteMessageForSelfResponseBody$Outbound = {
  error: string;
  message: string;
};

/** @internal */
export const ChatBskyConvoDeleteMessageForSelfResponseBody$outboundSchema:
  z.ZodType<
    ChatBskyConvoDeleteMessageForSelfResponseBody$Outbound,
    z.ZodTypeDef,
    ChatBskyConvoDeleteMessageForSelfResponseBody
  > = z.instanceof(ChatBskyConvoDeleteMessageForSelfResponseBody)
    .transform(v => v.data$)
    .pipe(z.object({
      error: ChatBskyConvoDeleteMessageForSelfError$outboundSchema,
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatBskyConvoDeleteMessageForSelfResponseBody$ {
  /** @deprecated use `ChatBskyConvoDeleteMessageForSelfResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ChatBskyConvoDeleteMessageForSelfResponseBody$inboundSchema;
  /** @deprecated use `ChatBskyConvoDeleteMessageForSelfResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ChatBskyConvoDeleteMessageForSelfResponseBody$outboundSchema;
  /** @deprecated use `ChatBskyConvoDeleteMessageForSelfResponseBody$Outbound` instead. */
  export type Outbound = ChatBskyConvoDeleteMessageForSelfResponseBody$Outbound;
}
