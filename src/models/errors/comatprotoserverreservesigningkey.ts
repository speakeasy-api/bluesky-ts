/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type UnauthorizedComAtprotoServerReserveSigningKeyResponseBodyErrorData =
  {
    error: "AuthMissing";
    message: string;
  };

/**
 * Unauthorized
 */
export class UnauthorizedComAtprotoServerReserveSigningKeyResponseBodyError
  extends Error
{
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$: UnauthorizedComAtprotoServerReserveSigningKeyResponseBodyErrorData;

  constructor(
    err: UnauthorizedComAtprotoServerReserveSigningKeyResponseBodyErrorData,
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name =
      "UnauthorizedComAtprotoServerReserveSigningKeyResponseBodyError";
  }
}

export const ComAtprotoServerReserveSigningKeyError = {
  InvalidRequest: "InvalidRequest",
  ExpiredToken: "ExpiredToken",
  InvalidToken: "InvalidToken",
} as const;
export type ComAtprotoServerReserveSigningKeyError = ClosedEnum<
  typeof ComAtprotoServerReserveSigningKeyError
>;

/**
 * Bad Request
 */
export type BadRequestComAtprotoServerReserveSigningKeyResponseBodyErrorData = {
  error: ComAtprotoServerReserveSigningKeyError;
  message: string;
};

/**
 * Bad Request
 */
export class BadRequestComAtprotoServerReserveSigningKeyResponseBodyError
  extends Error
{
  error: ComAtprotoServerReserveSigningKeyError;

  /** The original data that was passed to this error instance. */
  data$: BadRequestComAtprotoServerReserveSigningKeyResponseBodyErrorData;

  constructor(
    err: BadRequestComAtprotoServerReserveSigningKeyResponseBodyErrorData,
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "BadRequestComAtprotoServerReserveSigningKeyResponseBodyError";
  }
}

/** @internal */
export const UnauthorizedComAtprotoServerReserveSigningKeyResponseBodyError$inboundSchema:
  z.ZodType<
    UnauthorizedComAtprotoServerReserveSigningKeyResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.literal("AuthMissing"),
    message: z.string(),
  })
    .transform((v) => {
      return new UnauthorizedComAtprotoServerReserveSigningKeyResponseBodyError(
        v,
      );
    });

/** @internal */
export type UnauthorizedComAtprotoServerReserveSigningKeyResponseBodyError$Outbound =
  {
    error: "AuthMissing";
    message: string;
  };

/** @internal */
export const UnauthorizedComAtprotoServerReserveSigningKeyResponseBodyError$outboundSchema:
  z.ZodType<
    UnauthorizedComAtprotoServerReserveSigningKeyResponseBodyError$Outbound,
    z.ZodTypeDef,
    UnauthorizedComAtprotoServerReserveSigningKeyResponseBodyError
  > = z.instanceof(
    UnauthorizedComAtprotoServerReserveSigningKeyResponseBodyError,
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
export namespace UnauthorizedComAtprotoServerReserveSigningKeyResponseBodyError$ {
  /** @deprecated use `UnauthorizedComAtprotoServerReserveSigningKeyResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    UnauthorizedComAtprotoServerReserveSigningKeyResponseBodyError$inboundSchema;
  /** @deprecated use `UnauthorizedComAtprotoServerReserveSigningKeyResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    UnauthorizedComAtprotoServerReserveSigningKeyResponseBodyError$outboundSchema;
  /** @deprecated use `UnauthorizedComAtprotoServerReserveSigningKeyResponseBodyError$Outbound` instead. */
  export type Outbound =
    UnauthorizedComAtprotoServerReserveSigningKeyResponseBodyError$Outbound;
}

/** @internal */
export const ComAtprotoServerReserveSigningKeyError$inboundSchema:
  z.ZodNativeEnum<typeof ComAtprotoServerReserveSigningKeyError> = z.nativeEnum(
    ComAtprotoServerReserveSigningKeyError,
  );

/** @internal */
export const ComAtprotoServerReserveSigningKeyError$outboundSchema:
  z.ZodNativeEnum<typeof ComAtprotoServerReserveSigningKeyError> =
    ComAtprotoServerReserveSigningKeyError$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoServerReserveSigningKeyError$ {
  /** @deprecated use `ComAtprotoServerReserveSigningKeyError$inboundSchema` instead. */
  export const inboundSchema =
    ComAtprotoServerReserveSigningKeyError$inboundSchema;
  /** @deprecated use `ComAtprotoServerReserveSigningKeyError$outboundSchema` instead. */
  export const outboundSchema =
    ComAtprotoServerReserveSigningKeyError$outboundSchema;
}

/** @internal */
export const BadRequestComAtprotoServerReserveSigningKeyResponseBodyError$inboundSchema:
  z.ZodType<
    BadRequestComAtprotoServerReserveSigningKeyResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: ComAtprotoServerReserveSigningKeyError$inboundSchema,
    message: z.string(),
  })
    .transform((v) => {
      return new BadRequestComAtprotoServerReserveSigningKeyResponseBodyError(
        v,
      );
    });

/** @internal */
export type BadRequestComAtprotoServerReserveSigningKeyResponseBodyError$Outbound =
  {
    error: string;
    message: string;
  };

/** @internal */
export const BadRequestComAtprotoServerReserveSigningKeyResponseBodyError$outboundSchema:
  z.ZodType<
    BadRequestComAtprotoServerReserveSigningKeyResponseBodyError$Outbound,
    z.ZodTypeDef,
    BadRequestComAtprotoServerReserveSigningKeyResponseBodyError
  > = z.instanceof(BadRequestComAtprotoServerReserveSigningKeyResponseBodyError)
    .transform(v => v.data$)
    .pipe(z.object({
      error: ComAtprotoServerReserveSigningKeyError$outboundSchema,
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BadRequestComAtprotoServerReserveSigningKeyResponseBodyError$ {
  /** @deprecated use `BadRequestComAtprotoServerReserveSigningKeyResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    BadRequestComAtprotoServerReserveSigningKeyResponseBodyError$inboundSchema;
  /** @deprecated use `BadRequestComAtprotoServerReserveSigningKeyResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    BadRequestComAtprotoServerReserveSigningKeyResponseBodyError$outboundSchema;
  /** @deprecated use `BadRequestComAtprotoServerReserveSigningKeyResponseBodyError$Outbound` instead. */
  export type Outbound =
    BadRequestComAtprotoServerReserveSigningKeyResponseBodyError$Outbound;
}
