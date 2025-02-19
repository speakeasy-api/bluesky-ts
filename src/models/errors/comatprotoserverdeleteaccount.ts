/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type UnauthorizedComAtprotoServerDeleteAccountResponseBodyErrorData = {
  error: "AuthMissing";
  message: string;
};

/**
 * Unauthorized
 */
export class UnauthorizedComAtprotoServerDeleteAccountResponseBodyError
  extends Error
{
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$: UnauthorizedComAtprotoServerDeleteAccountResponseBodyErrorData;

  constructor(
    err: UnauthorizedComAtprotoServerDeleteAccountResponseBodyErrorData,
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "UnauthorizedComAtprotoServerDeleteAccountResponseBodyError";
  }
}

export const ComAtprotoServerDeleteAccountError = {
  ExpiredToken: "ExpiredToken",
  InvalidRequest: "InvalidRequest",
  InvalidToken: "InvalidToken",
} as const;
export type ComAtprotoServerDeleteAccountError = ClosedEnum<
  typeof ComAtprotoServerDeleteAccountError
>;

/**
 * Bad Request
 */
export type BadRequestComAtprotoServerDeleteAccountResponseBodyErrorData = {
  error: ComAtprotoServerDeleteAccountError;
  message: string;
};

/**
 * Bad Request
 */
export class BadRequestComAtprotoServerDeleteAccountResponseBodyError
  extends Error
{
  error: ComAtprotoServerDeleteAccountError;

  /** The original data that was passed to this error instance. */
  data$: BadRequestComAtprotoServerDeleteAccountResponseBodyErrorData;

  constructor(
    err: BadRequestComAtprotoServerDeleteAccountResponseBodyErrorData,
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "BadRequestComAtprotoServerDeleteAccountResponseBodyError";
  }
}

/** @internal */
export const UnauthorizedComAtprotoServerDeleteAccountResponseBodyError$inboundSchema:
  z.ZodType<
    UnauthorizedComAtprotoServerDeleteAccountResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.literal("AuthMissing"),
    message: z.string(),
  })
    .transform((v) => {
      return new UnauthorizedComAtprotoServerDeleteAccountResponseBodyError(v);
    });

/** @internal */
export type UnauthorizedComAtprotoServerDeleteAccountResponseBodyError$Outbound =
  {
    error: "AuthMissing";
    message: string;
  };

/** @internal */
export const UnauthorizedComAtprotoServerDeleteAccountResponseBodyError$outboundSchema:
  z.ZodType<
    UnauthorizedComAtprotoServerDeleteAccountResponseBodyError$Outbound,
    z.ZodTypeDef,
    UnauthorizedComAtprotoServerDeleteAccountResponseBodyError
  > = z.instanceof(UnauthorizedComAtprotoServerDeleteAccountResponseBodyError)
    .transform(v => v.data$)
    .pipe(z.object({
      error: z.literal("AuthMissing").default("AuthMissing" as const),
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnauthorizedComAtprotoServerDeleteAccountResponseBodyError$ {
  /** @deprecated use `UnauthorizedComAtprotoServerDeleteAccountResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    UnauthorizedComAtprotoServerDeleteAccountResponseBodyError$inboundSchema;
  /** @deprecated use `UnauthorizedComAtprotoServerDeleteAccountResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    UnauthorizedComAtprotoServerDeleteAccountResponseBodyError$outboundSchema;
  /** @deprecated use `UnauthorizedComAtprotoServerDeleteAccountResponseBodyError$Outbound` instead. */
  export type Outbound =
    UnauthorizedComAtprotoServerDeleteAccountResponseBodyError$Outbound;
}

/** @internal */
export const ComAtprotoServerDeleteAccountError$inboundSchema: z.ZodNativeEnum<
  typeof ComAtprotoServerDeleteAccountError
> = z.nativeEnum(ComAtprotoServerDeleteAccountError);

/** @internal */
export const ComAtprotoServerDeleteAccountError$outboundSchema: z.ZodNativeEnum<
  typeof ComAtprotoServerDeleteAccountError
> = ComAtprotoServerDeleteAccountError$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoServerDeleteAccountError$ {
  /** @deprecated use `ComAtprotoServerDeleteAccountError$inboundSchema` instead. */
  export const inboundSchema = ComAtprotoServerDeleteAccountError$inboundSchema;
  /** @deprecated use `ComAtprotoServerDeleteAccountError$outboundSchema` instead. */
  export const outboundSchema =
    ComAtprotoServerDeleteAccountError$outboundSchema;
}

/** @internal */
export const BadRequestComAtprotoServerDeleteAccountResponseBodyError$inboundSchema:
  z.ZodType<
    BadRequestComAtprotoServerDeleteAccountResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: ComAtprotoServerDeleteAccountError$inboundSchema,
    message: z.string(),
  })
    .transform((v) => {
      return new BadRequestComAtprotoServerDeleteAccountResponseBodyError(v);
    });

/** @internal */
export type BadRequestComAtprotoServerDeleteAccountResponseBodyError$Outbound =
  {
    error: string;
    message: string;
  };

/** @internal */
export const BadRequestComAtprotoServerDeleteAccountResponseBodyError$outboundSchema:
  z.ZodType<
    BadRequestComAtprotoServerDeleteAccountResponseBodyError$Outbound,
    z.ZodTypeDef,
    BadRequestComAtprotoServerDeleteAccountResponseBodyError
  > = z.instanceof(BadRequestComAtprotoServerDeleteAccountResponseBodyError)
    .transform(v => v.data$)
    .pipe(z.object({
      error: ComAtprotoServerDeleteAccountError$outboundSchema,
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BadRequestComAtprotoServerDeleteAccountResponseBodyError$ {
  /** @deprecated use `BadRequestComAtprotoServerDeleteAccountResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    BadRequestComAtprotoServerDeleteAccountResponseBodyError$inboundSchema;
  /** @deprecated use `BadRequestComAtprotoServerDeleteAccountResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    BadRequestComAtprotoServerDeleteAccountResponseBodyError$outboundSchema;
  /** @deprecated use `BadRequestComAtprotoServerDeleteAccountResponseBodyError$Outbound` instead. */
  export type Outbound =
    BadRequestComAtprotoServerDeleteAccountResponseBodyError$Outbound;
}
