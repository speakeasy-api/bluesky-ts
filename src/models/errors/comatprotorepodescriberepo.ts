/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type UnauthorizedComAtprotoRepoDescribeRepoResponseBodyErrorData = {
  error: "AuthMissing";
  message: string;
};

/**
 * Unauthorized
 */
export class UnauthorizedComAtprotoRepoDescribeRepoResponseBodyError
  extends Error
{
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$: UnauthorizedComAtprotoRepoDescribeRepoResponseBodyErrorData;

  constructor(
    err: UnauthorizedComAtprotoRepoDescribeRepoResponseBodyErrorData,
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "UnauthorizedComAtprotoRepoDescribeRepoResponseBodyError";
  }
}

export const ComAtprotoRepoDescribeRepoError = {
  InvalidRequest: "InvalidRequest",
  ExpiredToken: "ExpiredToken",
  InvalidToken: "InvalidToken",
} as const;
export type ComAtprotoRepoDescribeRepoError = ClosedEnum<
  typeof ComAtprotoRepoDescribeRepoError
>;

/**
 * Bad Request
 */
export type BadRequestComAtprotoRepoDescribeRepoResponseBodyErrorData = {
  error: ComAtprotoRepoDescribeRepoError;
  message: string;
};

/**
 * Bad Request
 */
export class BadRequestComAtprotoRepoDescribeRepoResponseBodyError
  extends Error
{
  error: ComAtprotoRepoDescribeRepoError;

  /** The original data that was passed to this error instance. */
  data$: BadRequestComAtprotoRepoDescribeRepoResponseBodyErrorData;

  constructor(err: BadRequestComAtprotoRepoDescribeRepoResponseBodyErrorData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "BadRequestComAtprotoRepoDescribeRepoResponseBodyError";
  }
}

/** @internal */
export const UnauthorizedComAtprotoRepoDescribeRepoResponseBodyError$inboundSchema:
  z.ZodType<
    UnauthorizedComAtprotoRepoDescribeRepoResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.literal("AuthMissing"),
    message: z.string(),
  })
    .transform((v) => {
      return new UnauthorizedComAtprotoRepoDescribeRepoResponseBodyError(v);
    });

/** @internal */
export type UnauthorizedComAtprotoRepoDescribeRepoResponseBodyError$Outbound = {
  error: "AuthMissing";
  message: string;
};

/** @internal */
export const UnauthorizedComAtprotoRepoDescribeRepoResponseBodyError$outboundSchema:
  z.ZodType<
    UnauthorizedComAtprotoRepoDescribeRepoResponseBodyError$Outbound,
    z.ZodTypeDef,
    UnauthorizedComAtprotoRepoDescribeRepoResponseBodyError
  > = z.instanceof(UnauthorizedComAtprotoRepoDescribeRepoResponseBodyError)
    .transform(v => v.data$)
    .pipe(z.object({
      error: z.literal("AuthMissing").default("AuthMissing" as const),
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnauthorizedComAtprotoRepoDescribeRepoResponseBodyError$ {
  /** @deprecated use `UnauthorizedComAtprotoRepoDescribeRepoResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    UnauthorizedComAtprotoRepoDescribeRepoResponseBodyError$inboundSchema;
  /** @deprecated use `UnauthorizedComAtprotoRepoDescribeRepoResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    UnauthorizedComAtprotoRepoDescribeRepoResponseBodyError$outboundSchema;
  /** @deprecated use `UnauthorizedComAtprotoRepoDescribeRepoResponseBodyError$Outbound` instead. */
  export type Outbound =
    UnauthorizedComAtprotoRepoDescribeRepoResponseBodyError$Outbound;
}

/** @internal */
export const ComAtprotoRepoDescribeRepoError$inboundSchema: z.ZodNativeEnum<
  typeof ComAtprotoRepoDescribeRepoError
> = z.nativeEnum(ComAtprotoRepoDescribeRepoError);

/** @internal */
export const ComAtprotoRepoDescribeRepoError$outboundSchema: z.ZodNativeEnum<
  typeof ComAtprotoRepoDescribeRepoError
> = ComAtprotoRepoDescribeRepoError$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoRepoDescribeRepoError$ {
  /** @deprecated use `ComAtprotoRepoDescribeRepoError$inboundSchema` instead. */
  export const inboundSchema = ComAtprotoRepoDescribeRepoError$inboundSchema;
  /** @deprecated use `ComAtprotoRepoDescribeRepoError$outboundSchema` instead. */
  export const outboundSchema = ComAtprotoRepoDescribeRepoError$outboundSchema;
}

/** @internal */
export const BadRequestComAtprotoRepoDescribeRepoResponseBodyError$inboundSchema:
  z.ZodType<
    BadRequestComAtprotoRepoDescribeRepoResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: ComAtprotoRepoDescribeRepoError$inboundSchema,
    message: z.string(),
  })
    .transform((v) => {
      return new BadRequestComAtprotoRepoDescribeRepoResponseBodyError(v);
    });

/** @internal */
export type BadRequestComAtprotoRepoDescribeRepoResponseBodyError$Outbound = {
  error: string;
  message: string;
};

/** @internal */
export const BadRequestComAtprotoRepoDescribeRepoResponseBodyError$outboundSchema:
  z.ZodType<
    BadRequestComAtprotoRepoDescribeRepoResponseBodyError$Outbound,
    z.ZodTypeDef,
    BadRequestComAtprotoRepoDescribeRepoResponseBodyError
  > = z.instanceof(BadRequestComAtprotoRepoDescribeRepoResponseBodyError)
    .transform(v => v.data$)
    .pipe(z.object({
      error: ComAtprotoRepoDescribeRepoError$outboundSchema,
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BadRequestComAtprotoRepoDescribeRepoResponseBodyError$ {
  /** @deprecated use `BadRequestComAtprotoRepoDescribeRepoResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    BadRequestComAtprotoRepoDescribeRepoResponseBodyError$inboundSchema;
  /** @deprecated use `BadRequestComAtprotoRepoDescribeRepoResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    BadRequestComAtprotoRepoDescribeRepoResponseBodyError$outboundSchema;
  /** @deprecated use `BadRequestComAtprotoRepoDescribeRepoResponseBodyError$Outbound` instead. */
  export type Outbound =
    BadRequestComAtprotoRepoDescribeRepoResponseBodyError$Outbound;
}
