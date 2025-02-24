/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type UnauthorizedComAtprotoServerConfirmEmailResponseBodyErrorData = {
  error: "AuthMissing";
  message: string;
};

/**
 * Unauthorized
 */
export class UnauthorizedComAtprotoServerConfirmEmailResponseBodyError
  extends Error
{
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$: UnauthorizedComAtprotoServerConfirmEmailResponseBodyErrorData;

  constructor(
    err: UnauthorizedComAtprotoServerConfirmEmailResponseBodyErrorData,
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "UnauthorizedComAtprotoServerConfirmEmailResponseBodyError";
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
export type BadRequestComAtprotoServerConfirmEmailResponseBodyErrorData = {
  error: ComAtprotoServerConfirmEmailError;
  message: string;
};

/**
 * Bad Request
 */
export class BadRequestComAtprotoServerConfirmEmailResponseBodyError
  extends Error
{
  error: ComAtprotoServerConfirmEmailError;

  /** The original data that was passed to this error instance. */
  data$: BadRequestComAtprotoServerConfirmEmailResponseBodyErrorData;

  constructor(
    err: BadRequestComAtprotoServerConfirmEmailResponseBodyErrorData,
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "BadRequestComAtprotoServerConfirmEmailResponseBodyError";
  }
}

/** @internal */
export const UnauthorizedComAtprotoServerConfirmEmailResponseBodyError$inboundSchema:
  z.ZodType<
    UnauthorizedComAtprotoServerConfirmEmailResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.literal("AuthMissing"),
    message: z.string(),
  })
    .transform((v) => {
      return new UnauthorizedComAtprotoServerConfirmEmailResponseBodyError(v);
    });

/** @internal */
export type UnauthorizedComAtprotoServerConfirmEmailResponseBodyError$Outbound =
  {
    error: "AuthMissing";
    message: string;
  };

/** @internal */
export const UnauthorizedComAtprotoServerConfirmEmailResponseBodyError$outboundSchema:
  z.ZodType<
    UnauthorizedComAtprotoServerConfirmEmailResponseBodyError$Outbound,
    z.ZodTypeDef,
    UnauthorizedComAtprotoServerConfirmEmailResponseBodyError
  > = z.instanceof(UnauthorizedComAtprotoServerConfirmEmailResponseBodyError)
    .transform(v => v.data$)
    .pipe(z.object({
      error: z.literal("AuthMissing").default("AuthMissing" as const),
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnauthorizedComAtprotoServerConfirmEmailResponseBodyError$ {
  /** @deprecated use `UnauthorizedComAtprotoServerConfirmEmailResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    UnauthorizedComAtprotoServerConfirmEmailResponseBodyError$inboundSchema;
  /** @deprecated use `UnauthorizedComAtprotoServerConfirmEmailResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    UnauthorizedComAtprotoServerConfirmEmailResponseBodyError$outboundSchema;
  /** @deprecated use `UnauthorizedComAtprotoServerConfirmEmailResponseBodyError$Outbound` instead. */
  export type Outbound =
    UnauthorizedComAtprotoServerConfirmEmailResponseBodyError$Outbound;
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
export const BadRequestComAtprotoServerConfirmEmailResponseBodyError$inboundSchema:
  z.ZodType<
    BadRequestComAtprotoServerConfirmEmailResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: ComAtprotoServerConfirmEmailError$inboundSchema,
    message: z.string(),
  })
    .transform((v) => {
      return new BadRequestComAtprotoServerConfirmEmailResponseBodyError(v);
    });

/** @internal */
export type BadRequestComAtprotoServerConfirmEmailResponseBodyError$Outbound = {
  error: string;
  message: string;
};

/** @internal */
export const BadRequestComAtprotoServerConfirmEmailResponseBodyError$outboundSchema:
  z.ZodType<
    BadRequestComAtprotoServerConfirmEmailResponseBodyError$Outbound,
    z.ZodTypeDef,
    BadRequestComAtprotoServerConfirmEmailResponseBodyError
  > = z.instanceof(BadRequestComAtprotoServerConfirmEmailResponseBodyError)
    .transform(v => v.data$)
    .pipe(z.object({
      error: ComAtprotoServerConfirmEmailError$outboundSchema,
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BadRequestComAtprotoServerConfirmEmailResponseBodyError$ {
  /** @deprecated use `BadRequestComAtprotoServerConfirmEmailResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    BadRequestComAtprotoServerConfirmEmailResponseBodyError$inboundSchema;
  /** @deprecated use `BadRequestComAtprotoServerConfirmEmailResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    BadRequestComAtprotoServerConfirmEmailResponseBodyError$outboundSchema;
  /** @deprecated use `BadRequestComAtprotoServerConfirmEmailResponseBodyError$Outbound` instead. */
  export type Outbound =
    BadRequestComAtprotoServerConfirmEmailResponseBodyError$Outbound;
}
