/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type ChatBskyModerationUpdateActorAccessChatModerationResponseBodyData =
  {
    error: "AuthMissing";
    message: string;
  };

/**
 * Unauthorized
 */
export class ChatBskyModerationUpdateActorAccessChatModerationResponseBody
  extends Error
{
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$: ChatBskyModerationUpdateActorAccessChatModerationResponseBodyData;

  constructor(
    err: ChatBskyModerationUpdateActorAccessChatModerationResponseBodyData,
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "ChatBskyModerationUpdateActorAccessChatModerationResponseBody";
  }
}

export const ChatBskyModerationUpdateActorAccessError = {
  InvalidRequest: "InvalidRequest",
  ExpiredToken: "ExpiredToken",
  InvalidToken: "InvalidToken",
} as const;
export type ChatBskyModerationUpdateActorAccessError = ClosedEnum<
  typeof ChatBskyModerationUpdateActorAccessError
>;

/**
 * Bad Request
 */
export type ChatBskyModerationUpdateActorAccessResponseBodyData = {
  error: ChatBskyModerationUpdateActorAccessError;
  message: string;
};

/**
 * Bad Request
 */
export class ChatBskyModerationUpdateActorAccessResponseBody extends Error {
  error: ChatBskyModerationUpdateActorAccessError;

  /** The original data that was passed to this error instance. */
  data$: ChatBskyModerationUpdateActorAccessResponseBodyData;

  constructor(err: ChatBskyModerationUpdateActorAccessResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "ChatBskyModerationUpdateActorAccessResponseBody";
  }
}

/** @internal */
export const ChatBskyModerationUpdateActorAccessChatModerationResponseBody$inboundSchema:
  z.ZodType<
    ChatBskyModerationUpdateActorAccessChatModerationResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.literal("AuthMissing"),
    message: z.string(),
  })
    .transform((v) => {
      return new ChatBskyModerationUpdateActorAccessChatModerationResponseBody(
        v,
      );
    });

/** @internal */
export type ChatBskyModerationUpdateActorAccessChatModerationResponseBody$Outbound =
  {
    error: "AuthMissing";
    message: string;
  };

/** @internal */
export const ChatBskyModerationUpdateActorAccessChatModerationResponseBody$outboundSchema:
  z.ZodType<
    ChatBskyModerationUpdateActorAccessChatModerationResponseBody$Outbound,
    z.ZodTypeDef,
    ChatBskyModerationUpdateActorAccessChatModerationResponseBody
  > = z.instanceof(
    ChatBskyModerationUpdateActorAccessChatModerationResponseBody,
  )
    .transform(v => v.data$)
    .pipe(z.object({
      error: z.literal("AuthMissing").default("AuthMissing" as const),
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatBskyModerationUpdateActorAccessChatModerationResponseBody$ {
  /** @deprecated use `ChatBskyModerationUpdateActorAccessChatModerationResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ChatBskyModerationUpdateActorAccessChatModerationResponseBody$inboundSchema;
  /** @deprecated use `ChatBskyModerationUpdateActorAccessChatModerationResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ChatBskyModerationUpdateActorAccessChatModerationResponseBody$outboundSchema;
  /** @deprecated use `ChatBskyModerationUpdateActorAccessChatModerationResponseBody$Outbound` instead. */
  export type Outbound =
    ChatBskyModerationUpdateActorAccessChatModerationResponseBody$Outbound;
}

/** @internal */
export const ChatBskyModerationUpdateActorAccessError$inboundSchema:
  z.ZodNativeEnum<typeof ChatBskyModerationUpdateActorAccessError> = z
    .nativeEnum(ChatBskyModerationUpdateActorAccessError);

/** @internal */
export const ChatBskyModerationUpdateActorAccessError$outboundSchema:
  z.ZodNativeEnum<typeof ChatBskyModerationUpdateActorAccessError> =
    ChatBskyModerationUpdateActorAccessError$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatBskyModerationUpdateActorAccessError$ {
  /** @deprecated use `ChatBskyModerationUpdateActorAccessError$inboundSchema` instead. */
  export const inboundSchema =
    ChatBskyModerationUpdateActorAccessError$inboundSchema;
  /** @deprecated use `ChatBskyModerationUpdateActorAccessError$outboundSchema` instead. */
  export const outboundSchema =
    ChatBskyModerationUpdateActorAccessError$outboundSchema;
}

/** @internal */
export const ChatBskyModerationUpdateActorAccessResponseBody$inboundSchema:
  z.ZodType<
    ChatBskyModerationUpdateActorAccessResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: ChatBskyModerationUpdateActorAccessError$inboundSchema,
    message: z.string(),
  })
    .transform((v) => {
      return new ChatBskyModerationUpdateActorAccessResponseBody(v);
    });

/** @internal */
export type ChatBskyModerationUpdateActorAccessResponseBody$Outbound = {
  error: string;
  message: string;
};

/** @internal */
export const ChatBskyModerationUpdateActorAccessResponseBody$outboundSchema:
  z.ZodType<
    ChatBskyModerationUpdateActorAccessResponseBody$Outbound,
    z.ZodTypeDef,
    ChatBskyModerationUpdateActorAccessResponseBody
  > = z.instanceof(ChatBskyModerationUpdateActorAccessResponseBody)
    .transform(v => v.data$)
    .pipe(z.object({
      error: ChatBskyModerationUpdateActorAccessError$outboundSchema,
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatBskyModerationUpdateActorAccessResponseBody$ {
  /** @deprecated use `ChatBskyModerationUpdateActorAccessResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ChatBskyModerationUpdateActorAccessResponseBody$inboundSchema;
  /** @deprecated use `ChatBskyModerationUpdateActorAccessResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ChatBskyModerationUpdateActorAccessResponseBody$outboundSchema;
  /** @deprecated use `ChatBskyModerationUpdateActorAccessResponseBody$Outbound` instead. */
  export type Outbound =
    ChatBskyModerationUpdateActorAccessResponseBody$Outbound;
}
