/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type UnauthorizedComAtprotoServerRequestAccountDeleteResponseBodyErrorData =
  {
    error: "AuthMissing";
    message: string;
  };

/**
 * Unauthorized
 */
export class UnauthorizedComAtprotoServerRequestAccountDeleteResponseBodyError
  extends Error
{
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$: UnauthorizedComAtprotoServerRequestAccountDeleteResponseBodyErrorData;

  constructor(
    err: UnauthorizedComAtprotoServerRequestAccountDeleteResponseBodyErrorData,
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name =
      "UnauthorizedComAtprotoServerRequestAccountDeleteResponseBodyError";
  }
}

export const ComAtprotoServerRequestAccountDeleteError = {
  InvalidRequest: "InvalidRequest",
  ExpiredToken: "ExpiredToken",
  InvalidToken: "InvalidToken",
} as const;
export type ComAtprotoServerRequestAccountDeleteError = ClosedEnum<
  typeof ComAtprotoServerRequestAccountDeleteError
>;

/**
 * Bad Request
 */
export type BadRequestComAtprotoServerRequestAccountDeleteResponseBodyErrorData =
  {
    error: ComAtprotoServerRequestAccountDeleteError;
    message: string;
  };

/**
 * Bad Request
 */
export class BadRequestComAtprotoServerRequestAccountDeleteResponseBodyError
  extends Error
{
  error: ComAtprotoServerRequestAccountDeleteError;

  /** The original data that was passed to this error instance. */
  data$: BadRequestComAtprotoServerRequestAccountDeleteResponseBodyErrorData;

  constructor(
    err: BadRequestComAtprotoServerRequestAccountDeleteResponseBodyErrorData,
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name =
      "BadRequestComAtprotoServerRequestAccountDeleteResponseBodyError";
  }
}

/** @internal */
export const UnauthorizedComAtprotoServerRequestAccountDeleteResponseBodyError$inboundSchema:
  z.ZodType<
    UnauthorizedComAtprotoServerRequestAccountDeleteResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.literal("AuthMissing"),
    message: z.string(),
  })
    .transform((v) => {
      return new UnauthorizedComAtprotoServerRequestAccountDeleteResponseBodyError(
        v,
      );
    });

/** @internal */
export type UnauthorizedComAtprotoServerRequestAccountDeleteResponseBodyError$Outbound =
  {
    error: "AuthMissing";
    message: string;
  };

/** @internal */
export const UnauthorizedComAtprotoServerRequestAccountDeleteResponseBodyError$outboundSchema:
  z.ZodType<
    UnauthorizedComAtprotoServerRequestAccountDeleteResponseBodyError$Outbound,
    z.ZodTypeDef,
    UnauthorizedComAtprotoServerRequestAccountDeleteResponseBodyError
  > = z.instanceof(
    UnauthorizedComAtprotoServerRequestAccountDeleteResponseBodyError,
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
export namespace UnauthorizedComAtprotoServerRequestAccountDeleteResponseBodyError$ {
  /** @deprecated use `UnauthorizedComAtprotoServerRequestAccountDeleteResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    UnauthorizedComAtprotoServerRequestAccountDeleteResponseBodyError$inboundSchema;
  /** @deprecated use `UnauthorizedComAtprotoServerRequestAccountDeleteResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    UnauthorizedComAtprotoServerRequestAccountDeleteResponseBodyError$outboundSchema;
  /** @deprecated use `UnauthorizedComAtprotoServerRequestAccountDeleteResponseBodyError$Outbound` instead. */
  export type Outbound =
    UnauthorizedComAtprotoServerRequestAccountDeleteResponseBodyError$Outbound;
}

/** @internal */
export const ComAtprotoServerRequestAccountDeleteError$inboundSchema:
  z.ZodNativeEnum<typeof ComAtprotoServerRequestAccountDeleteError> = z
    .nativeEnum(ComAtprotoServerRequestAccountDeleteError);

/** @internal */
export const ComAtprotoServerRequestAccountDeleteError$outboundSchema:
  z.ZodNativeEnum<typeof ComAtprotoServerRequestAccountDeleteError> =
    ComAtprotoServerRequestAccountDeleteError$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoServerRequestAccountDeleteError$ {
  /** @deprecated use `ComAtprotoServerRequestAccountDeleteError$inboundSchema` instead. */
  export const inboundSchema =
    ComAtprotoServerRequestAccountDeleteError$inboundSchema;
  /** @deprecated use `ComAtprotoServerRequestAccountDeleteError$outboundSchema` instead. */
  export const outboundSchema =
    ComAtprotoServerRequestAccountDeleteError$outboundSchema;
}

/** @internal */
export const BadRequestComAtprotoServerRequestAccountDeleteResponseBodyError$inboundSchema:
  z.ZodType<
    BadRequestComAtprotoServerRequestAccountDeleteResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: ComAtprotoServerRequestAccountDeleteError$inboundSchema,
    message: z.string(),
  })
    .transform((v) => {
      return new BadRequestComAtprotoServerRequestAccountDeleteResponseBodyError(
        v,
      );
    });

/** @internal */
export type BadRequestComAtprotoServerRequestAccountDeleteResponseBodyError$Outbound =
  {
    error: string;
    message: string;
  };

/** @internal */
export const BadRequestComAtprotoServerRequestAccountDeleteResponseBodyError$outboundSchema:
  z.ZodType<
    BadRequestComAtprotoServerRequestAccountDeleteResponseBodyError$Outbound,
    z.ZodTypeDef,
    BadRequestComAtprotoServerRequestAccountDeleteResponseBodyError
  > = z.instanceof(
    BadRequestComAtprotoServerRequestAccountDeleteResponseBodyError,
  )
    .transform(v => v.data$)
    .pipe(z.object({
      error: ComAtprotoServerRequestAccountDeleteError$outboundSchema,
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BadRequestComAtprotoServerRequestAccountDeleteResponseBodyError$ {
  /** @deprecated use `BadRequestComAtprotoServerRequestAccountDeleteResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    BadRequestComAtprotoServerRequestAccountDeleteResponseBodyError$inboundSchema;
  /** @deprecated use `BadRequestComAtprotoServerRequestAccountDeleteResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    BadRequestComAtprotoServerRequestAccountDeleteResponseBodyError$outboundSchema;
  /** @deprecated use `BadRequestComAtprotoServerRequestAccountDeleteResponseBodyError$Outbound` instead. */
  export type Outbound =
    BadRequestComAtprotoServerRequestAccountDeleteResponseBodyError$Outbound;
}
