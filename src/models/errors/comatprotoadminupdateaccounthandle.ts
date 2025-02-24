/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type UnauthorizedComAtprotoAdminUpdateAccountHandleResponseBodyErrorData =
  {
    error: "AuthMissing";
    message: string;
  };

/**
 * Unauthorized
 */
export class UnauthorizedComAtprotoAdminUpdateAccountHandleResponseBodyError
  extends Error
{
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$: UnauthorizedComAtprotoAdminUpdateAccountHandleResponseBodyErrorData;

  constructor(
    err: UnauthorizedComAtprotoAdminUpdateAccountHandleResponseBodyErrorData,
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name =
      "UnauthorizedComAtprotoAdminUpdateAccountHandleResponseBodyError";
  }
}

export const ComAtprotoAdminUpdateAccountHandleError = {
  InvalidRequest: "InvalidRequest",
  ExpiredToken: "ExpiredToken",
  InvalidToken: "InvalidToken",
} as const;
export type ComAtprotoAdminUpdateAccountHandleError = ClosedEnum<
  typeof ComAtprotoAdminUpdateAccountHandleError
>;

/**
 * Bad Request
 */
export type BadRequestComAtprotoAdminUpdateAccountHandleResponseBodyErrorData =
  {
    error: ComAtprotoAdminUpdateAccountHandleError;
    message: string;
  };

/**
 * Bad Request
 */
export class BadRequestComAtprotoAdminUpdateAccountHandleResponseBodyError
  extends Error
{
  error: ComAtprotoAdminUpdateAccountHandleError;

  /** The original data that was passed to this error instance. */
  data$: BadRequestComAtprotoAdminUpdateAccountHandleResponseBodyErrorData;

  constructor(
    err: BadRequestComAtprotoAdminUpdateAccountHandleResponseBodyErrorData,
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "BadRequestComAtprotoAdminUpdateAccountHandleResponseBodyError";
  }
}

/** @internal */
export const UnauthorizedComAtprotoAdminUpdateAccountHandleResponseBodyError$inboundSchema:
  z.ZodType<
    UnauthorizedComAtprotoAdminUpdateAccountHandleResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.literal("AuthMissing"),
    message: z.string(),
  })
    .transform((v) => {
      return new UnauthorizedComAtprotoAdminUpdateAccountHandleResponseBodyError(
        v,
      );
    });

/** @internal */
export type UnauthorizedComAtprotoAdminUpdateAccountHandleResponseBodyError$Outbound =
  {
    error: "AuthMissing";
    message: string;
  };

/** @internal */
export const UnauthorizedComAtprotoAdminUpdateAccountHandleResponseBodyError$outboundSchema:
  z.ZodType<
    UnauthorizedComAtprotoAdminUpdateAccountHandleResponseBodyError$Outbound,
    z.ZodTypeDef,
    UnauthorizedComAtprotoAdminUpdateAccountHandleResponseBodyError
  > = z.instanceof(
    UnauthorizedComAtprotoAdminUpdateAccountHandleResponseBodyError,
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
export namespace UnauthorizedComAtprotoAdminUpdateAccountHandleResponseBodyError$ {
  /** @deprecated use `UnauthorizedComAtprotoAdminUpdateAccountHandleResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    UnauthorizedComAtprotoAdminUpdateAccountHandleResponseBodyError$inboundSchema;
  /** @deprecated use `UnauthorizedComAtprotoAdminUpdateAccountHandleResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    UnauthorizedComAtprotoAdminUpdateAccountHandleResponseBodyError$outboundSchema;
  /** @deprecated use `UnauthorizedComAtprotoAdminUpdateAccountHandleResponseBodyError$Outbound` instead. */
  export type Outbound =
    UnauthorizedComAtprotoAdminUpdateAccountHandleResponseBodyError$Outbound;
}

/** @internal */
export const ComAtprotoAdminUpdateAccountHandleError$inboundSchema:
  z.ZodNativeEnum<typeof ComAtprotoAdminUpdateAccountHandleError> = z
    .nativeEnum(ComAtprotoAdminUpdateAccountHandleError);

/** @internal */
export const ComAtprotoAdminUpdateAccountHandleError$outboundSchema:
  z.ZodNativeEnum<typeof ComAtprotoAdminUpdateAccountHandleError> =
    ComAtprotoAdminUpdateAccountHandleError$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoAdminUpdateAccountHandleError$ {
  /** @deprecated use `ComAtprotoAdminUpdateAccountHandleError$inboundSchema` instead. */
  export const inboundSchema =
    ComAtprotoAdminUpdateAccountHandleError$inboundSchema;
  /** @deprecated use `ComAtprotoAdminUpdateAccountHandleError$outboundSchema` instead. */
  export const outboundSchema =
    ComAtprotoAdminUpdateAccountHandleError$outboundSchema;
}

/** @internal */
export const BadRequestComAtprotoAdminUpdateAccountHandleResponseBodyError$inboundSchema:
  z.ZodType<
    BadRequestComAtprotoAdminUpdateAccountHandleResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: ComAtprotoAdminUpdateAccountHandleError$inboundSchema,
    message: z.string(),
  })
    .transform((v) => {
      return new BadRequestComAtprotoAdminUpdateAccountHandleResponseBodyError(
        v,
      );
    });

/** @internal */
export type BadRequestComAtprotoAdminUpdateAccountHandleResponseBodyError$Outbound =
  {
    error: string;
    message: string;
  };

/** @internal */
export const BadRequestComAtprotoAdminUpdateAccountHandleResponseBodyError$outboundSchema:
  z.ZodType<
    BadRequestComAtprotoAdminUpdateAccountHandleResponseBodyError$Outbound,
    z.ZodTypeDef,
    BadRequestComAtprotoAdminUpdateAccountHandleResponseBodyError
  > = z.instanceof(
    BadRequestComAtprotoAdminUpdateAccountHandleResponseBodyError,
  )
    .transform(v => v.data$)
    .pipe(z.object({
      error: ComAtprotoAdminUpdateAccountHandleError$outboundSchema,
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BadRequestComAtprotoAdminUpdateAccountHandleResponseBodyError$ {
  /** @deprecated use `BadRequestComAtprotoAdminUpdateAccountHandleResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    BadRequestComAtprotoAdminUpdateAccountHandleResponseBodyError$inboundSchema;
  /** @deprecated use `BadRequestComAtprotoAdminUpdateAccountHandleResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    BadRequestComAtprotoAdminUpdateAccountHandleResponseBodyError$outboundSchema;
  /** @deprecated use `BadRequestComAtprotoAdminUpdateAccountHandleResponseBodyError$Outbound` instead. */
  export type Outbound =
    BadRequestComAtprotoAdminUpdateAccountHandleResponseBodyError$Outbound;
}
