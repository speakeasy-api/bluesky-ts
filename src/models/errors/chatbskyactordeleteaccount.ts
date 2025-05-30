/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type UnauthorizedChatBskyActorDeleteAccountResponseBodyErrorData = {
  error: "AuthMissing";
  message: string;
};

/**
 * Unauthorized
 */
export class UnauthorizedChatBskyActorDeleteAccountResponseBodyError
  extends Error
{
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$: UnauthorizedChatBskyActorDeleteAccountResponseBodyErrorData;

  constructor(
    err: UnauthorizedChatBskyActorDeleteAccountResponseBodyErrorData,
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "UnauthorizedChatBskyActorDeleteAccountResponseBodyError";
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
export type BadRequestChatBskyActorDeleteAccountResponseBodyErrorData = {
  error: ChatBskyActorDeleteAccountError;
  message: string;
};

/**
 * Bad Request
 */
export class BadRequestChatBskyActorDeleteAccountResponseBodyError
  extends Error
{
  error: ChatBskyActorDeleteAccountError;

  /** The original data that was passed to this error instance. */
  data$: BadRequestChatBskyActorDeleteAccountResponseBodyErrorData;

  constructor(err: BadRequestChatBskyActorDeleteAccountResponseBodyErrorData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "BadRequestChatBskyActorDeleteAccountResponseBodyError";
  }
}

/** @internal */
export const UnauthorizedChatBskyActorDeleteAccountResponseBodyError$inboundSchema:
  z.ZodType<
    UnauthorizedChatBskyActorDeleteAccountResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.literal("AuthMissing"),
    message: z.string(),
  })
    .transform((v) => {
      return new UnauthorizedChatBskyActorDeleteAccountResponseBodyError(v);
    });

/** @internal */
export type UnauthorizedChatBskyActorDeleteAccountResponseBodyError$Outbound = {
  error: "AuthMissing";
  message: string;
};

/** @internal */
export const UnauthorizedChatBskyActorDeleteAccountResponseBodyError$outboundSchema:
  z.ZodType<
    UnauthorizedChatBskyActorDeleteAccountResponseBodyError$Outbound,
    z.ZodTypeDef,
    UnauthorizedChatBskyActorDeleteAccountResponseBodyError
  > = z.instanceof(UnauthorizedChatBskyActorDeleteAccountResponseBodyError)
    .transform(v => v.data$)
    .pipe(z.object({
      error: z.literal("AuthMissing").default("AuthMissing" as const),
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnauthorizedChatBskyActorDeleteAccountResponseBodyError$ {
  /** @deprecated use `UnauthorizedChatBskyActorDeleteAccountResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    UnauthorizedChatBskyActorDeleteAccountResponseBodyError$inboundSchema;
  /** @deprecated use `UnauthorizedChatBskyActorDeleteAccountResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    UnauthorizedChatBskyActorDeleteAccountResponseBodyError$outboundSchema;
  /** @deprecated use `UnauthorizedChatBskyActorDeleteAccountResponseBodyError$Outbound` instead. */
  export type Outbound =
    UnauthorizedChatBskyActorDeleteAccountResponseBodyError$Outbound;
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
export const BadRequestChatBskyActorDeleteAccountResponseBodyError$inboundSchema:
  z.ZodType<
    BadRequestChatBskyActorDeleteAccountResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: ChatBskyActorDeleteAccountError$inboundSchema,
    message: z.string(),
  })
    .transform((v) => {
      return new BadRequestChatBskyActorDeleteAccountResponseBodyError(v);
    });

/** @internal */
export type BadRequestChatBskyActorDeleteAccountResponseBodyError$Outbound = {
  error: string;
  message: string;
};

/** @internal */
export const BadRequestChatBskyActorDeleteAccountResponseBodyError$outboundSchema:
  z.ZodType<
    BadRequestChatBskyActorDeleteAccountResponseBodyError$Outbound,
    z.ZodTypeDef,
    BadRequestChatBskyActorDeleteAccountResponseBodyError
  > = z.instanceof(BadRequestChatBskyActorDeleteAccountResponseBodyError)
    .transform(v => v.data$)
    .pipe(z.object({
      error: ChatBskyActorDeleteAccountError$outboundSchema,
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BadRequestChatBskyActorDeleteAccountResponseBodyError$ {
  /** @deprecated use `BadRequestChatBskyActorDeleteAccountResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    BadRequestChatBskyActorDeleteAccountResponseBodyError$inboundSchema;
  /** @deprecated use `BadRequestChatBskyActorDeleteAccountResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    BadRequestChatBskyActorDeleteAccountResponseBodyError$outboundSchema;
  /** @deprecated use `BadRequestChatBskyActorDeleteAccountResponseBodyError$Outbound` instead. */
  export type Outbound =
    BadRequestChatBskyActorDeleteAccountResponseBodyError$Outbound;
}
