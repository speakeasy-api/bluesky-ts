/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type UnauthorizedComAtprotoRepoListRecordsResponseBodyErrorData = {
  error: "AuthMissing";
  message: string;
};

/**
 * Unauthorized
 */
export class UnauthorizedComAtprotoRepoListRecordsResponseBodyError
  extends Error
{
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$: UnauthorizedComAtprotoRepoListRecordsResponseBodyErrorData;

  constructor(err: UnauthorizedComAtprotoRepoListRecordsResponseBodyErrorData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "UnauthorizedComAtprotoRepoListRecordsResponseBodyError";
  }
}

export const ComAtprotoRepoListRecordsError = {
  InvalidRequest: "InvalidRequest",
  ExpiredToken: "ExpiredToken",
  InvalidToken: "InvalidToken",
} as const;
export type ComAtprotoRepoListRecordsError = ClosedEnum<
  typeof ComAtprotoRepoListRecordsError
>;

/**
 * Bad Request
 */
export type BadRequestComAtprotoRepoListRecordsResponseBodyErrorData = {
  error: ComAtprotoRepoListRecordsError;
  message: string;
};

/**
 * Bad Request
 */
export class BadRequestComAtprotoRepoListRecordsResponseBodyError
  extends Error
{
  error: ComAtprotoRepoListRecordsError;

  /** The original data that was passed to this error instance. */
  data$: BadRequestComAtprotoRepoListRecordsResponseBodyErrorData;

  constructor(err: BadRequestComAtprotoRepoListRecordsResponseBodyErrorData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "BadRequestComAtprotoRepoListRecordsResponseBodyError";
  }
}

/** @internal */
export const UnauthorizedComAtprotoRepoListRecordsResponseBodyError$inboundSchema:
  z.ZodType<
    UnauthorizedComAtprotoRepoListRecordsResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.literal("AuthMissing"),
    message: z.string(),
  })
    .transform((v) => {
      return new UnauthorizedComAtprotoRepoListRecordsResponseBodyError(v);
    });

/** @internal */
export type UnauthorizedComAtprotoRepoListRecordsResponseBodyError$Outbound = {
  error: "AuthMissing";
  message: string;
};

/** @internal */
export const UnauthorizedComAtprotoRepoListRecordsResponseBodyError$outboundSchema:
  z.ZodType<
    UnauthorizedComAtprotoRepoListRecordsResponseBodyError$Outbound,
    z.ZodTypeDef,
    UnauthorizedComAtprotoRepoListRecordsResponseBodyError
  > = z.instanceof(UnauthorizedComAtprotoRepoListRecordsResponseBodyError)
    .transform(v => v.data$)
    .pipe(z.object({
      error: z.literal("AuthMissing").default("AuthMissing" as const),
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnauthorizedComAtprotoRepoListRecordsResponseBodyError$ {
  /** @deprecated use `UnauthorizedComAtprotoRepoListRecordsResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    UnauthorizedComAtprotoRepoListRecordsResponseBodyError$inboundSchema;
  /** @deprecated use `UnauthorizedComAtprotoRepoListRecordsResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    UnauthorizedComAtprotoRepoListRecordsResponseBodyError$outboundSchema;
  /** @deprecated use `UnauthorizedComAtprotoRepoListRecordsResponseBodyError$Outbound` instead. */
  export type Outbound =
    UnauthorizedComAtprotoRepoListRecordsResponseBodyError$Outbound;
}

/** @internal */
export const ComAtprotoRepoListRecordsError$inboundSchema: z.ZodNativeEnum<
  typeof ComAtprotoRepoListRecordsError
> = z.nativeEnum(ComAtprotoRepoListRecordsError);

/** @internal */
export const ComAtprotoRepoListRecordsError$outboundSchema: z.ZodNativeEnum<
  typeof ComAtprotoRepoListRecordsError
> = ComAtprotoRepoListRecordsError$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoRepoListRecordsError$ {
  /** @deprecated use `ComAtprotoRepoListRecordsError$inboundSchema` instead. */
  export const inboundSchema = ComAtprotoRepoListRecordsError$inboundSchema;
  /** @deprecated use `ComAtprotoRepoListRecordsError$outboundSchema` instead. */
  export const outboundSchema = ComAtprotoRepoListRecordsError$outboundSchema;
}

/** @internal */
export const BadRequestComAtprotoRepoListRecordsResponseBodyError$inboundSchema:
  z.ZodType<
    BadRequestComAtprotoRepoListRecordsResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: ComAtprotoRepoListRecordsError$inboundSchema,
    message: z.string(),
  })
    .transform((v) => {
      return new BadRequestComAtprotoRepoListRecordsResponseBodyError(v);
    });

/** @internal */
export type BadRequestComAtprotoRepoListRecordsResponseBodyError$Outbound = {
  error: string;
  message: string;
};

/** @internal */
export const BadRequestComAtprotoRepoListRecordsResponseBodyError$outboundSchema:
  z.ZodType<
    BadRequestComAtprotoRepoListRecordsResponseBodyError$Outbound,
    z.ZodTypeDef,
    BadRequestComAtprotoRepoListRecordsResponseBodyError
  > = z.instanceof(BadRequestComAtprotoRepoListRecordsResponseBodyError)
    .transform(v => v.data$)
    .pipe(z.object({
      error: ComAtprotoRepoListRecordsError$outboundSchema,
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BadRequestComAtprotoRepoListRecordsResponseBodyError$ {
  /** @deprecated use `BadRequestComAtprotoRepoListRecordsResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    BadRequestComAtprotoRepoListRecordsResponseBodyError$inboundSchema;
  /** @deprecated use `BadRequestComAtprotoRepoListRecordsResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    BadRequestComAtprotoRepoListRecordsResponseBodyError$outboundSchema;
  /** @deprecated use `BadRequestComAtprotoRepoListRecordsResponseBodyError$Outbound` instead. */
  export type Outbound =
    BadRequestComAtprotoRepoListRecordsResponseBodyError$Outbound;
}
