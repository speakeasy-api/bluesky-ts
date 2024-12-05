/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type ComAtprotoServerConfirmEmailServerResponseBodyData = {
  error: "AuthMissing";
  message: string;
};

/**
 * Unauthorized
 */
export class ComAtprotoServerConfirmEmailServerResponseBody extends Error {
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$: ComAtprotoServerConfirmEmailServerResponseBodyData;

  constructor(err: ComAtprotoServerConfirmEmailServerResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "ComAtprotoServerConfirmEmailServerResponseBody";
  }
}

export const ComAtprotoServerConfirmEmailError = {
  AccountNotFound: "AccountNotFound",
  ExpiredToken: "ExpiredToken",
  InvalidEmail: "InvalidEmail",
  InvalidRequest: "InvalidRequest",
  InvalidToken: "InvalidToken",
} as const;
export type ComAtprotoServerConfirmEmailError = ClosedEnum<
  typeof ComAtprotoServerConfirmEmailError
>;

/**
 * Bad Request
 */
export type ComAtprotoServerConfirmEmailResponseBodyData = {
  error: ComAtprotoServerConfirmEmailError;
  message: string;
};

/**
 * Bad Request
 */
export class ComAtprotoServerConfirmEmailResponseBody extends Error {
  error: ComAtprotoServerConfirmEmailError;

  /** The original data that was passed to this error instance. */
  data$: ComAtprotoServerConfirmEmailResponseBodyData;

  constructor(err: ComAtprotoServerConfirmEmailResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "ComAtprotoServerConfirmEmailResponseBody";
  }
}

/** @internal */
export const ComAtprotoServerConfirmEmailServerResponseBody$inboundSchema:
  z.ZodType<
    ComAtprotoServerConfirmEmailServerResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.literal("AuthMissing"),
    message: z.string(),
  })
    .transform((v) => {
      return new ComAtprotoServerConfirmEmailServerResponseBody(v);
    });

/** @internal */
export type ComAtprotoServerConfirmEmailServerResponseBody$Outbound = {
  error: "AuthMissing";
  message: string;
};

/** @internal */
export const ComAtprotoServerConfirmEmailServerResponseBody$outboundSchema:
  z.ZodType<
    ComAtprotoServerConfirmEmailServerResponseBody$Outbound,
    z.ZodTypeDef,
    ComAtprotoServerConfirmEmailServerResponseBody
  > = z.instanceof(ComAtprotoServerConfirmEmailServerResponseBody)
    .transform(v => v.data$)
    .pipe(z.object({
      error: z.literal("AuthMissing").default("AuthMissing" as const),
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoServerConfirmEmailServerResponseBody$ {
  /** @deprecated use `ComAtprotoServerConfirmEmailServerResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ComAtprotoServerConfirmEmailServerResponseBody$inboundSchema;
  /** @deprecated use `ComAtprotoServerConfirmEmailServerResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ComAtprotoServerConfirmEmailServerResponseBody$outboundSchema;
  /** @deprecated use `ComAtprotoServerConfirmEmailServerResponseBody$Outbound` instead. */
  export type Outbound =
    ComAtprotoServerConfirmEmailServerResponseBody$Outbound;
}

/** @internal */
export const ComAtprotoServerConfirmEmailError$inboundSchema: z.ZodNativeEnum<
  typeof ComAtprotoServerConfirmEmailError
> = z.nativeEnum(ComAtprotoServerConfirmEmailError);

/** @internal */
export const ComAtprotoServerConfirmEmailError$outboundSchema: z.ZodNativeEnum<
  typeof ComAtprotoServerConfirmEmailError
> = ComAtprotoServerConfirmEmailError$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoServerConfirmEmailError$ {
  /** @deprecated use `ComAtprotoServerConfirmEmailError$inboundSchema` instead. */
  export const inboundSchema = ComAtprotoServerConfirmEmailError$inboundSchema;
  /** @deprecated use `ComAtprotoServerConfirmEmailError$outboundSchema` instead. */
  export const outboundSchema =
    ComAtprotoServerConfirmEmailError$outboundSchema;
}

/** @internal */
export const ComAtprotoServerConfirmEmailResponseBody$inboundSchema: z.ZodType<
  ComAtprotoServerConfirmEmailResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  error: ComAtprotoServerConfirmEmailError$inboundSchema,
  message: z.string(),
})
  .transform((v) => {
    return new ComAtprotoServerConfirmEmailResponseBody(v);
  });

/** @internal */
export type ComAtprotoServerConfirmEmailResponseBody$Outbound = {
  error: string;
  message: string;
};

/** @internal */
export const ComAtprotoServerConfirmEmailResponseBody$outboundSchema: z.ZodType<
  ComAtprotoServerConfirmEmailResponseBody$Outbound,
  z.ZodTypeDef,
  ComAtprotoServerConfirmEmailResponseBody
> = z.instanceof(ComAtprotoServerConfirmEmailResponseBody)
  .transform(v => v.data$)
  .pipe(z.object({
    error: ComAtprotoServerConfirmEmailError$outboundSchema,
    message: z.string(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoServerConfirmEmailResponseBody$ {
  /** @deprecated use `ComAtprotoServerConfirmEmailResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ComAtprotoServerConfirmEmailResponseBody$inboundSchema;
  /** @deprecated use `ComAtprotoServerConfirmEmailResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ComAtprotoServerConfirmEmailResponseBody$outboundSchema;
  /** @deprecated use `ComAtprotoServerConfirmEmailResponseBody$Outbound` instead. */
  export type Outbound = ComAtprotoServerConfirmEmailResponseBody$Outbound;
}
