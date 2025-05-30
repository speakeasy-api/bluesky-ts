/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type UnauthorizedChatBskyConvoListConvosResponseBodyErrorData = {
  error: "AuthMissing";
  message: string;
};

/**
 * Unauthorized
 */
export class UnauthorizedChatBskyConvoListConvosResponseBodyError
  extends Error
{
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$: UnauthorizedChatBskyConvoListConvosResponseBodyErrorData;

  constructor(err: UnauthorizedChatBskyConvoListConvosResponseBodyErrorData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "UnauthorizedChatBskyConvoListConvosResponseBodyError";
  }
}

export const ChatBskyConvoListConvosError = {
  InvalidRequest: "InvalidRequest",
  ExpiredToken: "ExpiredToken",
  InvalidToken: "InvalidToken",
} as const;
export type ChatBskyConvoListConvosError = ClosedEnum<
  typeof ChatBskyConvoListConvosError
>;

/**
 * Bad Request
 */
export type BadRequestChatBskyConvoListConvosResponseBodyErrorData = {
  error: ChatBskyConvoListConvosError;
  message: string;
};

/**
 * Bad Request
 */
export class BadRequestChatBskyConvoListConvosResponseBodyError extends Error {
  error: ChatBskyConvoListConvosError;

  /** The original data that was passed to this error instance. */
  data$: BadRequestChatBskyConvoListConvosResponseBodyErrorData;

  constructor(err: BadRequestChatBskyConvoListConvosResponseBodyErrorData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "BadRequestChatBskyConvoListConvosResponseBodyError";
  }
}

/** @internal */
export const UnauthorizedChatBskyConvoListConvosResponseBodyError$inboundSchema:
  z.ZodType<
    UnauthorizedChatBskyConvoListConvosResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.literal("AuthMissing"),
    message: z.string(),
  })
    .transform((v) => {
      return new UnauthorizedChatBskyConvoListConvosResponseBodyError(v);
    });

/** @internal */
export type UnauthorizedChatBskyConvoListConvosResponseBodyError$Outbound = {
  error: "AuthMissing";
  message: string;
};

/** @internal */
export const UnauthorizedChatBskyConvoListConvosResponseBodyError$outboundSchema:
  z.ZodType<
    UnauthorizedChatBskyConvoListConvosResponseBodyError$Outbound,
    z.ZodTypeDef,
    UnauthorizedChatBskyConvoListConvosResponseBodyError
  > = z.instanceof(UnauthorizedChatBskyConvoListConvosResponseBodyError)
    .transform(v => v.data$)
    .pipe(z.object({
      error: z.literal("AuthMissing").default("AuthMissing" as const),
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnauthorizedChatBskyConvoListConvosResponseBodyError$ {
  /** @deprecated use `UnauthorizedChatBskyConvoListConvosResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    UnauthorizedChatBskyConvoListConvosResponseBodyError$inboundSchema;
  /** @deprecated use `UnauthorizedChatBskyConvoListConvosResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    UnauthorizedChatBskyConvoListConvosResponseBodyError$outboundSchema;
  /** @deprecated use `UnauthorizedChatBskyConvoListConvosResponseBodyError$Outbound` instead. */
  export type Outbound =
    UnauthorizedChatBskyConvoListConvosResponseBodyError$Outbound;
}

/** @internal */
export const ChatBskyConvoListConvosError$inboundSchema: z.ZodNativeEnum<
  typeof ChatBskyConvoListConvosError
> = z.nativeEnum(ChatBskyConvoListConvosError);

/** @internal */
export const ChatBskyConvoListConvosError$outboundSchema: z.ZodNativeEnum<
  typeof ChatBskyConvoListConvosError
> = ChatBskyConvoListConvosError$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatBskyConvoListConvosError$ {
  /** @deprecated use `ChatBskyConvoListConvosError$inboundSchema` instead. */
  export const inboundSchema = ChatBskyConvoListConvosError$inboundSchema;
  /** @deprecated use `ChatBskyConvoListConvosError$outboundSchema` instead. */
  export const outboundSchema = ChatBskyConvoListConvosError$outboundSchema;
}

/** @internal */
export const BadRequestChatBskyConvoListConvosResponseBodyError$inboundSchema:
  z.ZodType<
    BadRequestChatBskyConvoListConvosResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: ChatBskyConvoListConvosError$inboundSchema,
    message: z.string(),
  })
    .transform((v) => {
      return new BadRequestChatBskyConvoListConvosResponseBodyError(v);
    });

/** @internal */
export type BadRequestChatBskyConvoListConvosResponseBodyError$Outbound = {
  error: string;
  message: string;
};

/** @internal */
export const BadRequestChatBskyConvoListConvosResponseBodyError$outboundSchema:
  z.ZodType<
    BadRequestChatBskyConvoListConvosResponseBodyError$Outbound,
    z.ZodTypeDef,
    BadRequestChatBskyConvoListConvosResponseBodyError
  > = z.instanceof(BadRequestChatBskyConvoListConvosResponseBodyError)
    .transform(v => v.data$)
    .pipe(z.object({
      error: ChatBskyConvoListConvosError$outboundSchema,
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BadRequestChatBskyConvoListConvosResponseBodyError$ {
  /** @deprecated use `BadRequestChatBskyConvoListConvosResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    BadRequestChatBskyConvoListConvosResponseBodyError$inboundSchema;
  /** @deprecated use `BadRequestChatBskyConvoListConvosResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    BadRequestChatBskyConvoListConvosResponseBodyError$outboundSchema;
  /** @deprecated use `BadRequestChatBskyConvoListConvosResponseBodyError$Outbound` instead. */
  export type Outbound =
    BadRequestChatBskyConvoListConvosResponseBodyError$Outbound;
}
