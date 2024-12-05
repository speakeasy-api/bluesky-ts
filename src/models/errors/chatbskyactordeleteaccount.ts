/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type ChatBskyActorDeleteAccountAccountResponseBodyData = {
  error: "AuthMissing";
  message: string;
};

/**
 * Unauthorized
 */
export class ChatBskyActorDeleteAccountAccountResponseBody extends Error {
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$: ChatBskyActorDeleteAccountAccountResponseBodyData;

  constructor(err: ChatBskyActorDeleteAccountAccountResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "ChatBskyActorDeleteAccountAccountResponseBody";
  }
}

export const ChatBskyActorDeleteAccountError = {
  InvalidRequest: "InvalidRequest",
  ExpiredToken: "ExpiredToken",
  InvalidToken: "InvalidToken",
} as const;
export type ChatBskyActorDeleteAccountError = ClosedEnum<
  typeof ChatBskyActorDeleteAccountError
>;

/**
 * Bad Request
 */
export type ChatBskyActorDeleteAccountResponseBodyData = {
  error: ChatBskyActorDeleteAccountError;
  message: string;
};

/**
 * Bad Request
 */
export class ChatBskyActorDeleteAccountResponseBody extends Error {
  error: ChatBskyActorDeleteAccountError;

  /** The original data that was passed to this error instance. */
  data$: ChatBskyActorDeleteAccountResponseBodyData;

  constructor(err: ChatBskyActorDeleteAccountResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "ChatBskyActorDeleteAccountResponseBody";
  }
}

/** @internal */
export const ChatBskyActorDeleteAccountAccountResponseBody$inboundSchema:
  z.ZodType<
    ChatBskyActorDeleteAccountAccountResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.literal("AuthMissing"),
    message: z.string(),
  })
    .transform((v) => {
      return new ChatBskyActorDeleteAccountAccountResponseBody(v);
    });

/** @internal */
export type ChatBskyActorDeleteAccountAccountResponseBody$Outbound = {
  error: "AuthMissing";
  message: string;
};

/** @internal */
export const ChatBskyActorDeleteAccountAccountResponseBody$outboundSchema:
  z.ZodType<
    ChatBskyActorDeleteAccountAccountResponseBody$Outbound,
    z.ZodTypeDef,
    ChatBskyActorDeleteAccountAccountResponseBody
  > = z.instanceof(ChatBskyActorDeleteAccountAccountResponseBody)
    .transform(v => v.data$)
    .pipe(z.object({
      error: z.literal("AuthMissing").default("AuthMissing" as const),
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatBskyActorDeleteAccountAccountResponseBody$ {
  /** @deprecated use `ChatBskyActorDeleteAccountAccountResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ChatBskyActorDeleteAccountAccountResponseBody$inboundSchema;
  /** @deprecated use `ChatBskyActorDeleteAccountAccountResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ChatBskyActorDeleteAccountAccountResponseBody$outboundSchema;
  /** @deprecated use `ChatBskyActorDeleteAccountAccountResponseBody$Outbound` instead. */
  export type Outbound = ChatBskyActorDeleteAccountAccountResponseBody$Outbound;
}

/** @internal */
export const ChatBskyActorDeleteAccountError$inboundSchema: z.ZodNativeEnum<
  typeof ChatBskyActorDeleteAccountError
> = z.nativeEnum(ChatBskyActorDeleteAccountError);

/** @internal */
export const ChatBskyActorDeleteAccountError$outboundSchema: z.ZodNativeEnum<
  typeof ChatBskyActorDeleteAccountError
> = ChatBskyActorDeleteAccountError$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatBskyActorDeleteAccountError$ {
  /** @deprecated use `ChatBskyActorDeleteAccountError$inboundSchema` instead. */
  export const inboundSchema = ChatBskyActorDeleteAccountError$inboundSchema;
  /** @deprecated use `ChatBskyActorDeleteAccountError$outboundSchema` instead. */
  export const outboundSchema = ChatBskyActorDeleteAccountError$outboundSchema;
}

/** @internal */
export const ChatBskyActorDeleteAccountResponseBody$inboundSchema: z.ZodType<
  ChatBskyActorDeleteAccountResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  error: ChatBskyActorDeleteAccountError$inboundSchema,
  message: z.string(),
})
  .transform((v) => {
    return new ChatBskyActorDeleteAccountResponseBody(v);
  });

/** @internal */
export type ChatBskyActorDeleteAccountResponseBody$Outbound = {
  error: string;
  message: string;
};

/** @internal */
export const ChatBskyActorDeleteAccountResponseBody$outboundSchema: z.ZodType<
  ChatBskyActorDeleteAccountResponseBody$Outbound,
  z.ZodTypeDef,
  ChatBskyActorDeleteAccountResponseBody
> = z.instanceof(ChatBskyActorDeleteAccountResponseBody)
  .transform(v => v.data$)
  .pipe(z.object({
    error: ChatBskyActorDeleteAccountError$outboundSchema,
    message: z.string(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatBskyActorDeleteAccountResponseBody$ {
  /** @deprecated use `ChatBskyActorDeleteAccountResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ChatBskyActorDeleteAccountResponseBody$inboundSchema;
  /** @deprecated use `ChatBskyActorDeleteAccountResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ChatBskyActorDeleteAccountResponseBody$outboundSchema;
  /** @deprecated use `ChatBskyActorDeleteAccountResponseBody$Outbound` instead. */
  export type Outbound = ChatBskyActorDeleteAccountResponseBody$Outbound;
}
