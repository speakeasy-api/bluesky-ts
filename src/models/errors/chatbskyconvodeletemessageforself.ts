/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type UnauthorizedChatBskyConvoDeleteMessageForSelfResponseBodyErrorData =
  {
    error: "AuthMissing";
    message: string;
  };

/**
 * Unauthorized
 */
export class UnauthorizedChatBskyConvoDeleteMessageForSelfResponseBodyError
  extends Error
{
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$: UnauthorizedChatBskyConvoDeleteMessageForSelfResponseBodyErrorData;

  constructor(
    err: UnauthorizedChatBskyConvoDeleteMessageForSelfResponseBodyErrorData,
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name =
      "UnauthorizedChatBskyConvoDeleteMessageForSelfResponseBodyError";
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
export type BadRequestChatBskyConvoDeleteMessageForSelfResponseBodyErrorData = {
  error: ChatBskyConvoDeleteMessageForSelfError;
  message: string;
};

/**
 * Bad Request
 */
export class BadRequestChatBskyConvoDeleteMessageForSelfResponseBodyError
  extends Error
{
  error: ChatBskyConvoDeleteMessageForSelfError;

  /** The original data that was passed to this error instance. */
  data$: BadRequestChatBskyConvoDeleteMessageForSelfResponseBodyErrorData;

  constructor(
    err: BadRequestChatBskyConvoDeleteMessageForSelfResponseBodyErrorData,
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "BadRequestChatBskyConvoDeleteMessageForSelfResponseBodyError";
  }
}

/** @internal */
export const UnauthorizedChatBskyConvoDeleteMessageForSelfResponseBodyError$inboundSchema:
  z.ZodType<
    UnauthorizedChatBskyConvoDeleteMessageForSelfResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.literal("AuthMissing"),
    message: z.string(),
  })
    .transform((v) => {
      return new UnauthorizedChatBskyConvoDeleteMessageForSelfResponseBodyError(
        v,
      );
    });

/** @internal */
export type UnauthorizedChatBskyConvoDeleteMessageForSelfResponseBodyError$Outbound =
  {
    error: "AuthMissing";
    message: string;
  };

/** @internal */
export const UnauthorizedChatBskyConvoDeleteMessageForSelfResponseBodyError$outboundSchema:
  z.ZodType<
    UnauthorizedChatBskyConvoDeleteMessageForSelfResponseBodyError$Outbound,
    z.ZodTypeDef,
    UnauthorizedChatBskyConvoDeleteMessageForSelfResponseBodyError
  > = z.instanceof(
    UnauthorizedChatBskyConvoDeleteMessageForSelfResponseBodyError,
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
export namespace UnauthorizedChatBskyConvoDeleteMessageForSelfResponseBodyError$ {
  /** @deprecated use `UnauthorizedChatBskyConvoDeleteMessageForSelfResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    UnauthorizedChatBskyConvoDeleteMessageForSelfResponseBodyError$inboundSchema;
  /** @deprecated use `UnauthorizedChatBskyConvoDeleteMessageForSelfResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    UnauthorizedChatBskyConvoDeleteMessageForSelfResponseBodyError$outboundSchema;
  /** @deprecated use `UnauthorizedChatBskyConvoDeleteMessageForSelfResponseBodyError$Outbound` instead. */
  export type Outbound =
    UnauthorizedChatBskyConvoDeleteMessageForSelfResponseBodyError$Outbound;
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
export const BadRequestChatBskyConvoDeleteMessageForSelfResponseBodyError$inboundSchema:
  z.ZodType<
    BadRequestChatBskyConvoDeleteMessageForSelfResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: ChatBskyConvoDeleteMessageForSelfError$inboundSchema,
    message: z.string(),
  })
    .transform((v) => {
      return new BadRequestChatBskyConvoDeleteMessageForSelfResponseBodyError(
        v,
      );
    });

/** @internal */
export type BadRequestChatBskyConvoDeleteMessageForSelfResponseBodyError$Outbound =
  {
    error: string;
    message: string;
  };

/** @internal */
export const BadRequestChatBskyConvoDeleteMessageForSelfResponseBodyError$outboundSchema:
  z.ZodType<
    BadRequestChatBskyConvoDeleteMessageForSelfResponseBodyError$Outbound,
    z.ZodTypeDef,
    BadRequestChatBskyConvoDeleteMessageForSelfResponseBodyError
  > = z.instanceof(BadRequestChatBskyConvoDeleteMessageForSelfResponseBodyError)
    .transform(v => v.data$)
    .pipe(z.object({
      error: ChatBskyConvoDeleteMessageForSelfError$outboundSchema,
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BadRequestChatBskyConvoDeleteMessageForSelfResponseBodyError$ {
  /** @deprecated use `BadRequestChatBskyConvoDeleteMessageForSelfResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    BadRequestChatBskyConvoDeleteMessageForSelfResponseBodyError$inboundSchema;
  /** @deprecated use `BadRequestChatBskyConvoDeleteMessageForSelfResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    BadRequestChatBskyConvoDeleteMessageForSelfResponseBodyError$outboundSchema;
  /** @deprecated use `BadRequestChatBskyConvoDeleteMessageForSelfResponseBodyError$Outbound` instead. */
  export type Outbound =
    BadRequestChatBskyConvoDeleteMessageForSelfResponseBodyError$Outbound;
}
