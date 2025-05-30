/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type UnauthorizedChatBskyConvoGetConvoResponseBodyErrorData = {
  error: "AuthMissing";
  message: string;
};

/**
 * Unauthorized
 */
export class UnauthorizedChatBskyConvoGetConvoResponseBodyError extends Error {
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$: UnauthorizedChatBskyConvoGetConvoResponseBodyErrorData;

  constructor(err: UnauthorizedChatBskyConvoGetConvoResponseBodyErrorData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "UnauthorizedChatBskyConvoGetConvoResponseBodyError";
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
export type BadRequestChatBskyConvoGetConvoResponseBodyErrorData = {
  error: ChatBskyConvoGetConvoError;
  message: string;
};

/**
 * Bad Request
 */
export class BadRequestChatBskyConvoGetConvoResponseBodyError extends Error {
  error: ChatBskyConvoGetConvoError;

  /** The original data that was passed to this error instance. */
  data$: BadRequestChatBskyConvoGetConvoResponseBodyErrorData;

  constructor(err: BadRequestChatBskyConvoGetConvoResponseBodyErrorData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "BadRequestChatBskyConvoGetConvoResponseBodyError";
  }
}

/** @internal */
export const UnauthorizedChatBskyConvoGetConvoResponseBodyError$inboundSchema:
  z.ZodType<
    UnauthorizedChatBskyConvoGetConvoResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.literal("AuthMissing"),
    message: z.string(),
  })
    .transform((v) => {
      return new UnauthorizedChatBskyConvoGetConvoResponseBodyError(v);
    });

/** @internal */
export type UnauthorizedChatBskyConvoGetConvoResponseBodyError$Outbound = {
  error: "AuthMissing";
  message: string;
};

/** @internal */
export const UnauthorizedChatBskyConvoGetConvoResponseBodyError$outboundSchema:
  z.ZodType<
    UnauthorizedChatBskyConvoGetConvoResponseBodyError$Outbound,
    z.ZodTypeDef,
    UnauthorizedChatBskyConvoGetConvoResponseBodyError
  > = z.instanceof(UnauthorizedChatBskyConvoGetConvoResponseBodyError)
    .transform(v => v.data$)
    .pipe(z.object({
      error: z.literal("AuthMissing").default("AuthMissing" as const),
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnauthorizedChatBskyConvoGetConvoResponseBodyError$ {
  /** @deprecated use `UnauthorizedChatBskyConvoGetConvoResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    UnauthorizedChatBskyConvoGetConvoResponseBodyError$inboundSchema;
  /** @deprecated use `UnauthorizedChatBskyConvoGetConvoResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    UnauthorizedChatBskyConvoGetConvoResponseBodyError$outboundSchema;
  /** @deprecated use `UnauthorizedChatBskyConvoGetConvoResponseBodyError$Outbound` instead. */
  export type Outbound =
    UnauthorizedChatBskyConvoGetConvoResponseBodyError$Outbound;
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
export const BadRequestChatBskyConvoGetConvoResponseBodyError$inboundSchema:
  z.ZodType<
    BadRequestChatBskyConvoGetConvoResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: ChatBskyConvoGetConvoError$inboundSchema,
    message: z.string(),
  })
    .transform((v) => {
      return new BadRequestChatBskyConvoGetConvoResponseBodyError(v);
    });

/** @internal */
export type BadRequestChatBskyConvoGetConvoResponseBodyError$Outbound = {
  error: string;
  message: string;
};

/** @internal */
export const BadRequestChatBskyConvoGetConvoResponseBodyError$outboundSchema:
  z.ZodType<
    BadRequestChatBskyConvoGetConvoResponseBodyError$Outbound,
    z.ZodTypeDef,
    BadRequestChatBskyConvoGetConvoResponseBodyError
  > = z.instanceof(BadRequestChatBskyConvoGetConvoResponseBodyError)
    .transform(v => v.data$)
    .pipe(z.object({
      error: ChatBskyConvoGetConvoError$outboundSchema,
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BadRequestChatBskyConvoGetConvoResponseBodyError$ {
  /** @deprecated use `BadRequestChatBskyConvoGetConvoResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    BadRequestChatBskyConvoGetConvoResponseBodyError$inboundSchema;
  /** @deprecated use `BadRequestChatBskyConvoGetConvoResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    BadRequestChatBskyConvoGetConvoResponseBodyError$outboundSchema;
  /** @deprecated use `BadRequestChatBskyConvoGetConvoResponseBodyError$Outbound` instead. */
  export type Outbound =
    BadRequestChatBskyConvoGetConvoResponseBodyError$Outbound;
}
