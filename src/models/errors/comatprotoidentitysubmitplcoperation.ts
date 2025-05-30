/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type UnauthorizedComAtprotoIdentitySubmitPlcOperationResponseBodyErrorData =
  {
    error: "AuthMissing";
    message: string;
  };

/**
 * Unauthorized
 */
export class UnauthorizedComAtprotoIdentitySubmitPlcOperationResponseBodyError
  extends Error
{
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$: UnauthorizedComAtprotoIdentitySubmitPlcOperationResponseBodyErrorData;

  constructor(
    err: UnauthorizedComAtprotoIdentitySubmitPlcOperationResponseBodyErrorData,
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name =
      "UnauthorizedComAtprotoIdentitySubmitPlcOperationResponseBodyError";
  }
}

export const ComAtprotoIdentitySubmitPlcOperationError = {
  InvalidRequest: "InvalidRequest",
  ExpiredToken: "ExpiredToken",
  InvalidToken: "InvalidToken",
} as const;
export type ComAtprotoIdentitySubmitPlcOperationError = ClosedEnum<
  typeof ComAtprotoIdentitySubmitPlcOperationError
>;

/**
 * Bad Request
 */
export type BadRequestComAtprotoIdentitySubmitPlcOperationResponseBodyErrorData =
  {
    error: ComAtprotoIdentitySubmitPlcOperationError;
    message: string;
  };

/**
 * Bad Request
 */
export class BadRequestComAtprotoIdentitySubmitPlcOperationResponseBodyError
  extends Error
{
  error: ComAtprotoIdentitySubmitPlcOperationError;

  /** The original data that was passed to this error instance. */
  data$: BadRequestComAtprotoIdentitySubmitPlcOperationResponseBodyErrorData;

  constructor(
    err: BadRequestComAtprotoIdentitySubmitPlcOperationResponseBodyErrorData,
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name =
      "BadRequestComAtprotoIdentitySubmitPlcOperationResponseBodyError";
  }
}

/** @internal */
export const UnauthorizedComAtprotoIdentitySubmitPlcOperationResponseBodyError$inboundSchema:
  z.ZodType<
    UnauthorizedComAtprotoIdentitySubmitPlcOperationResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.literal("AuthMissing"),
    message: z.string(),
  })
    .transform((v) => {
      return new UnauthorizedComAtprotoIdentitySubmitPlcOperationResponseBodyError(
        v,
      );
    });

/** @internal */
export type UnauthorizedComAtprotoIdentitySubmitPlcOperationResponseBodyError$Outbound =
  {
    error: "AuthMissing";
    message: string;
  };

/** @internal */
export const UnauthorizedComAtprotoIdentitySubmitPlcOperationResponseBodyError$outboundSchema:
  z.ZodType<
    UnauthorizedComAtprotoIdentitySubmitPlcOperationResponseBodyError$Outbound,
    z.ZodTypeDef,
    UnauthorizedComAtprotoIdentitySubmitPlcOperationResponseBodyError
  > = z.instanceof(
    UnauthorizedComAtprotoIdentitySubmitPlcOperationResponseBodyError,
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
export namespace UnauthorizedComAtprotoIdentitySubmitPlcOperationResponseBodyError$ {
  /** @deprecated use `UnauthorizedComAtprotoIdentitySubmitPlcOperationResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    UnauthorizedComAtprotoIdentitySubmitPlcOperationResponseBodyError$inboundSchema;
  /** @deprecated use `UnauthorizedComAtprotoIdentitySubmitPlcOperationResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    UnauthorizedComAtprotoIdentitySubmitPlcOperationResponseBodyError$outboundSchema;
  /** @deprecated use `UnauthorizedComAtprotoIdentitySubmitPlcOperationResponseBodyError$Outbound` instead. */
  export type Outbound =
    UnauthorizedComAtprotoIdentitySubmitPlcOperationResponseBodyError$Outbound;
}

/** @internal */
export const ComAtprotoIdentitySubmitPlcOperationError$inboundSchema:
  z.ZodNativeEnum<typeof ComAtprotoIdentitySubmitPlcOperationError> = z
    .nativeEnum(ComAtprotoIdentitySubmitPlcOperationError);

/** @internal */
export const ComAtprotoIdentitySubmitPlcOperationError$outboundSchema:
  z.ZodNativeEnum<typeof ComAtprotoIdentitySubmitPlcOperationError> =
    ComAtprotoIdentitySubmitPlcOperationError$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoIdentitySubmitPlcOperationError$ {
  /** @deprecated use `ComAtprotoIdentitySubmitPlcOperationError$inboundSchema` instead. */
  export const inboundSchema =
    ComAtprotoIdentitySubmitPlcOperationError$inboundSchema;
  /** @deprecated use `ComAtprotoIdentitySubmitPlcOperationError$outboundSchema` instead. */
  export const outboundSchema =
    ComAtprotoIdentitySubmitPlcOperationError$outboundSchema;
}

/** @internal */
export const BadRequestComAtprotoIdentitySubmitPlcOperationResponseBodyError$inboundSchema:
  z.ZodType<
    BadRequestComAtprotoIdentitySubmitPlcOperationResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: ComAtprotoIdentitySubmitPlcOperationError$inboundSchema,
    message: z.string(),
  })
    .transform((v) => {
      return new BadRequestComAtprotoIdentitySubmitPlcOperationResponseBodyError(
        v,
      );
    });

/** @internal */
export type BadRequestComAtprotoIdentitySubmitPlcOperationResponseBodyError$Outbound =
  {
    error: string;
    message: string;
  };

/** @internal */
export const BadRequestComAtprotoIdentitySubmitPlcOperationResponseBodyError$outboundSchema:
  z.ZodType<
    BadRequestComAtprotoIdentitySubmitPlcOperationResponseBodyError$Outbound,
    z.ZodTypeDef,
    BadRequestComAtprotoIdentitySubmitPlcOperationResponseBodyError
  > = z.instanceof(
    BadRequestComAtprotoIdentitySubmitPlcOperationResponseBodyError,
  )
    .transform(v => v.data$)
    .pipe(z.object({
      error: ComAtprotoIdentitySubmitPlcOperationError$outboundSchema,
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BadRequestComAtprotoIdentitySubmitPlcOperationResponseBodyError$ {
  /** @deprecated use `BadRequestComAtprotoIdentitySubmitPlcOperationResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    BadRequestComAtprotoIdentitySubmitPlcOperationResponseBodyError$inboundSchema;
  /** @deprecated use `BadRequestComAtprotoIdentitySubmitPlcOperationResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    BadRequestComAtprotoIdentitySubmitPlcOperationResponseBodyError$outboundSchema;
  /** @deprecated use `BadRequestComAtprotoIdentitySubmitPlcOperationResponseBodyError$Outbound` instead. */
  export type Outbound =
    BadRequestComAtprotoIdentitySubmitPlcOperationResponseBodyError$Outbound;
}
