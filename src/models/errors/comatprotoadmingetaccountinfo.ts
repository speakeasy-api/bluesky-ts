/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type UnauthorizedComAtprotoAdminGetAccountInfoResponseBodyErrorData = {
  error: "AuthMissing";
  message: string;
};

/**
 * Unauthorized
 */
export class UnauthorizedComAtprotoAdminGetAccountInfoResponseBodyError
  extends Error
{
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$: UnauthorizedComAtprotoAdminGetAccountInfoResponseBodyErrorData;

  constructor(
    err: UnauthorizedComAtprotoAdminGetAccountInfoResponseBodyErrorData,
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "UnauthorizedComAtprotoAdminGetAccountInfoResponseBodyError";
  }
}

export const ComAtprotoAdminGetAccountInfoError = {
  InvalidRequest: "InvalidRequest",
  ExpiredToken: "ExpiredToken",
  InvalidToken: "InvalidToken",
} as const;
export type ComAtprotoAdminGetAccountInfoError = ClosedEnum<
  typeof ComAtprotoAdminGetAccountInfoError
>;

/**
 * Bad Request
 */
export type BadRequestComAtprotoAdminGetAccountInfoResponseBodyErrorData = {
  error: ComAtprotoAdminGetAccountInfoError;
  message: string;
};

/**
 * Bad Request
 */
export class BadRequestComAtprotoAdminGetAccountInfoResponseBodyError
  extends Error
{
  error: ComAtprotoAdminGetAccountInfoError;

  /** The original data that was passed to this error instance. */
  data$: BadRequestComAtprotoAdminGetAccountInfoResponseBodyErrorData;

  constructor(
    err: BadRequestComAtprotoAdminGetAccountInfoResponseBodyErrorData,
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "BadRequestComAtprotoAdminGetAccountInfoResponseBodyError";
  }
}

/** @internal */
export const UnauthorizedComAtprotoAdminGetAccountInfoResponseBodyError$inboundSchema:
  z.ZodType<
    UnauthorizedComAtprotoAdminGetAccountInfoResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.literal("AuthMissing"),
    message: z.string(),
  })
    .transform((v) => {
      return new UnauthorizedComAtprotoAdminGetAccountInfoResponseBodyError(v);
    });

/** @internal */
export type UnauthorizedComAtprotoAdminGetAccountInfoResponseBodyError$Outbound =
  {
    error: "AuthMissing";
    message: string;
  };

/** @internal */
export const UnauthorizedComAtprotoAdminGetAccountInfoResponseBodyError$outboundSchema:
  z.ZodType<
    UnauthorizedComAtprotoAdminGetAccountInfoResponseBodyError$Outbound,
    z.ZodTypeDef,
    UnauthorizedComAtprotoAdminGetAccountInfoResponseBodyError
  > = z.instanceof(UnauthorizedComAtprotoAdminGetAccountInfoResponseBodyError)
    .transform(v => v.data$)
    .pipe(z.object({
      error: z.literal("AuthMissing").default("AuthMissing" as const),
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnauthorizedComAtprotoAdminGetAccountInfoResponseBodyError$ {
  /** @deprecated use `UnauthorizedComAtprotoAdminGetAccountInfoResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    UnauthorizedComAtprotoAdminGetAccountInfoResponseBodyError$inboundSchema;
  /** @deprecated use `UnauthorizedComAtprotoAdminGetAccountInfoResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    UnauthorizedComAtprotoAdminGetAccountInfoResponseBodyError$outboundSchema;
  /** @deprecated use `UnauthorizedComAtprotoAdminGetAccountInfoResponseBodyError$Outbound` instead. */
  export type Outbound =
    UnauthorizedComAtprotoAdminGetAccountInfoResponseBodyError$Outbound;
}

/** @internal */
export const ComAtprotoAdminGetAccountInfoError$inboundSchema: z.ZodNativeEnum<
  typeof ComAtprotoAdminGetAccountInfoError
> = z.nativeEnum(ComAtprotoAdminGetAccountInfoError);

/** @internal */
export const ComAtprotoAdminGetAccountInfoError$outboundSchema: z.ZodNativeEnum<
  typeof ComAtprotoAdminGetAccountInfoError
> = ComAtprotoAdminGetAccountInfoError$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoAdminGetAccountInfoError$ {
  /** @deprecated use `ComAtprotoAdminGetAccountInfoError$inboundSchema` instead. */
  export const inboundSchema = ComAtprotoAdminGetAccountInfoError$inboundSchema;
  /** @deprecated use `ComAtprotoAdminGetAccountInfoError$outboundSchema` instead. */
  export const outboundSchema =
    ComAtprotoAdminGetAccountInfoError$outboundSchema;
}

/** @internal */
export const BadRequestComAtprotoAdminGetAccountInfoResponseBodyError$inboundSchema:
  z.ZodType<
    BadRequestComAtprotoAdminGetAccountInfoResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: ComAtprotoAdminGetAccountInfoError$inboundSchema,
    message: z.string(),
  })
    .transform((v) => {
      return new BadRequestComAtprotoAdminGetAccountInfoResponseBodyError(v);
    });

/** @internal */
export type BadRequestComAtprotoAdminGetAccountInfoResponseBodyError$Outbound =
  {
    error: string;
    message: string;
  };

/** @internal */
export const BadRequestComAtprotoAdminGetAccountInfoResponseBodyError$outboundSchema:
  z.ZodType<
    BadRequestComAtprotoAdminGetAccountInfoResponseBodyError$Outbound,
    z.ZodTypeDef,
    BadRequestComAtprotoAdminGetAccountInfoResponseBodyError
  > = z.instanceof(BadRequestComAtprotoAdminGetAccountInfoResponseBodyError)
    .transform(v => v.data$)
    .pipe(z.object({
      error: ComAtprotoAdminGetAccountInfoError$outboundSchema,
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BadRequestComAtprotoAdminGetAccountInfoResponseBodyError$ {
  /** @deprecated use `BadRequestComAtprotoAdminGetAccountInfoResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    BadRequestComAtprotoAdminGetAccountInfoResponseBodyError$inboundSchema;
  /** @deprecated use `BadRequestComAtprotoAdminGetAccountInfoResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    BadRequestComAtprotoAdminGetAccountInfoResponseBodyError$outboundSchema;
  /** @deprecated use `BadRequestComAtprotoAdminGetAccountInfoResponseBodyError$Outbound` instead. */
  export type Outbound =
    BadRequestComAtprotoAdminGetAccountInfoResponseBodyError$Outbound;
}
