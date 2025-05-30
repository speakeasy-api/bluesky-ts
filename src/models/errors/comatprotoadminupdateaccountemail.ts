/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type UnauthorizedComAtprotoAdminUpdateAccountEmailResponseBodyErrorData =
  {
    error: "AuthMissing";
    message: string;
  };

/**
 * Unauthorized
 */
export class UnauthorizedComAtprotoAdminUpdateAccountEmailResponseBodyError
  extends Error
{
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$: UnauthorizedComAtprotoAdminUpdateAccountEmailResponseBodyErrorData;

  constructor(
    err: UnauthorizedComAtprotoAdminUpdateAccountEmailResponseBodyErrorData,
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name =
      "UnauthorizedComAtprotoAdminUpdateAccountEmailResponseBodyError";
  }
}

export const ComAtprotoAdminUpdateAccountEmailError = {
  InvalidRequest: "InvalidRequest",
  ExpiredToken: "ExpiredToken",
  InvalidToken: "InvalidToken",
} as const;
export type ComAtprotoAdminUpdateAccountEmailError = ClosedEnum<
  typeof ComAtprotoAdminUpdateAccountEmailError
>;

/**
 * Bad Request
 */
export type BadRequestComAtprotoAdminUpdateAccountEmailResponseBodyErrorData = {
  error: ComAtprotoAdminUpdateAccountEmailError;
  message: string;
};

/**
 * Bad Request
 */
export class BadRequestComAtprotoAdminUpdateAccountEmailResponseBodyError
  extends Error
{
  error: ComAtprotoAdminUpdateAccountEmailError;

  /** The original data that was passed to this error instance. */
  data$: BadRequestComAtprotoAdminUpdateAccountEmailResponseBodyErrorData;

  constructor(
    err: BadRequestComAtprotoAdminUpdateAccountEmailResponseBodyErrorData,
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "BadRequestComAtprotoAdminUpdateAccountEmailResponseBodyError";
  }
}

/** @internal */
export const UnauthorizedComAtprotoAdminUpdateAccountEmailResponseBodyError$inboundSchema:
  z.ZodType<
    UnauthorizedComAtprotoAdminUpdateAccountEmailResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.literal("AuthMissing"),
    message: z.string(),
  })
    .transform((v) => {
      return new UnauthorizedComAtprotoAdminUpdateAccountEmailResponseBodyError(
        v,
      );
    });

/** @internal */
export type UnauthorizedComAtprotoAdminUpdateAccountEmailResponseBodyError$Outbound =
  {
    error: "AuthMissing";
    message: string;
  };

/** @internal */
export const UnauthorizedComAtprotoAdminUpdateAccountEmailResponseBodyError$outboundSchema:
  z.ZodType<
    UnauthorizedComAtprotoAdminUpdateAccountEmailResponseBodyError$Outbound,
    z.ZodTypeDef,
    UnauthorizedComAtprotoAdminUpdateAccountEmailResponseBodyError
  > = z.instanceof(
    UnauthorizedComAtprotoAdminUpdateAccountEmailResponseBodyError,
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
export namespace UnauthorizedComAtprotoAdminUpdateAccountEmailResponseBodyError$ {
  /** @deprecated use `UnauthorizedComAtprotoAdminUpdateAccountEmailResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    UnauthorizedComAtprotoAdminUpdateAccountEmailResponseBodyError$inboundSchema;
  /** @deprecated use `UnauthorizedComAtprotoAdminUpdateAccountEmailResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    UnauthorizedComAtprotoAdminUpdateAccountEmailResponseBodyError$outboundSchema;
  /** @deprecated use `UnauthorizedComAtprotoAdminUpdateAccountEmailResponseBodyError$Outbound` instead. */
  export type Outbound =
    UnauthorizedComAtprotoAdminUpdateAccountEmailResponseBodyError$Outbound;
}

/** @internal */
export const ComAtprotoAdminUpdateAccountEmailError$inboundSchema:
  z.ZodNativeEnum<typeof ComAtprotoAdminUpdateAccountEmailError> = z.nativeEnum(
    ComAtprotoAdminUpdateAccountEmailError,
  );

/** @internal */
export const ComAtprotoAdminUpdateAccountEmailError$outboundSchema:
  z.ZodNativeEnum<typeof ComAtprotoAdminUpdateAccountEmailError> =
    ComAtprotoAdminUpdateAccountEmailError$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoAdminUpdateAccountEmailError$ {
  /** @deprecated use `ComAtprotoAdminUpdateAccountEmailError$inboundSchema` instead. */
  export const inboundSchema =
    ComAtprotoAdminUpdateAccountEmailError$inboundSchema;
  /** @deprecated use `ComAtprotoAdminUpdateAccountEmailError$outboundSchema` instead. */
  export const outboundSchema =
    ComAtprotoAdminUpdateAccountEmailError$outboundSchema;
}

/** @internal */
export const BadRequestComAtprotoAdminUpdateAccountEmailResponseBodyError$inboundSchema:
  z.ZodType<
    BadRequestComAtprotoAdminUpdateAccountEmailResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: ComAtprotoAdminUpdateAccountEmailError$inboundSchema,
    message: z.string(),
  })
    .transform((v) => {
      return new BadRequestComAtprotoAdminUpdateAccountEmailResponseBodyError(
        v,
      );
    });

/** @internal */
export type BadRequestComAtprotoAdminUpdateAccountEmailResponseBodyError$Outbound =
  {
    error: string;
    message: string;
  };

/** @internal */
export const BadRequestComAtprotoAdminUpdateAccountEmailResponseBodyError$outboundSchema:
  z.ZodType<
    BadRequestComAtprotoAdminUpdateAccountEmailResponseBodyError$Outbound,
    z.ZodTypeDef,
    BadRequestComAtprotoAdminUpdateAccountEmailResponseBodyError
  > = z.instanceof(BadRequestComAtprotoAdminUpdateAccountEmailResponseBodyError)
    .transform(v => v.data$)
    .pipe(z.object({
      error: ComAtprotoAdminUpdateAccountEmailError$outboundSchema,
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BadRequestComAtprotoAdminUpdateAccountEmailResponseBodyError$ {
  /** @deprecated use `BadRequestComAtprotoAdminUpdateAccountEmailResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    BadRequestComAtprotoAdminUpdateAccountEmailResponseBodyError$inboundSchema;
  /** @deprecated use `BadRequestComAtprotoAdminUpdateAccountEmailResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    BadRequestComAtprotoAdminUpdateAccountEmailResponseBodyError$outboundSchema;
  /** @deprecated use `BadRequestComAtprotoAdminUpdateAccountEmailResponseBodyError$Outbound` instead. */
  export type Outbound =
    BadRequestComAtprotoAdminUpdateAccountEmailResponseBodyError$Outbound;
}
