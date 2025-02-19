/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type UnauthorizedComAtprotoAdminGetInviteCodesResponseBodyErrorData = {
  error: "AuthMissing";
  message: string;
};

/**
 * Unauthorized
 */
export class UnauthorizedComAtprotoAdminGetInviteCodesResponseBodyError
  extends Error
{
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$: UnauthorizedComAtprotoAdminGetInviteCodesResponseBodyErrorData;

  constructor(
    err: UnauthorizedComAtprotoAdminGetInviteCodesResponseBodyErrorData,
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "UnauthorizedComAtprotoAdminGetInviteCodesResponseBodyError";
  }
}

export const ComAtprotoAdminGetInviteCodesError = {
  InvalidRequest: "InvalidRequest",
  ExpiredToken: "ExpiredToken",
  InvalidToken: "InvalidToken",
} as const;
export type ComAtprotoAdminGetInviteCodesError = ClosedEnum<
  typeof ComAtprotoAdminGetInviteCodesError
>;

/**
 * Bad Request
 */
export type BadRequestComAtprotoAdminGetInviteCodesResponseBodyErrorData = {
  error: ComAtprotoAdminGetInviteCodesError;
  message: string;
};

/**
 * Bad Request
 */
export class BadRequestComAtprotoAdminGetInviteCodesResponseBodyError
  extends Error
{
  error: ComAtprotoAdminGetInviteCodesError;

  /** The original data that was passed to this error instance. */
  data$: BadRequestComAtprotoAdminGetInviteCodesResponseBodyErrorData;

  constructor(
    err: BadRequestComAtprotoAdminGetInviteCodesResponseBodyErrorData,
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "BadRequestComAtprotoAdminGetInviteCodesResponseBodyError";
  }
}

/** @internal */
export const UnauthorizedComAtprotoAdminGetInviteCodesResponseBodyError$inboundSchema:
  z.ZodType<
    UnauthorizedComAtprotoAdminGetInviteCodesResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.literal("AuthMissing"),
    message: z.string(),
  })
    .transform((v) => {
      return new UnauthorizedComAtprotoAdminGetInviteCodesResponseBodyError(v);
    });

/** @internal */
export type UnauthorizedComAtprotoAdminGetInviteCodesResponseBodyError$Outbound =
  {
    error: "AuthMissing";
    message: string;
  };

/** @internal */
export const UnauthorizedComAtprotoAdminGetInviteCodesResponseBodyError$outboundSchema:
  z.ZodType<
    UnauthorizedComAtprotoAdminGetInviteCodesResponseBodyError$Outbound,
    z.ZodTypeDef,
    UnauthorizedComAtprotoAdminGetInviteCodesResponseBodyError
  > = z.instanceof(UnauthorizedComAtprotoAdminGetInviteCodesResponseBodyError)
    .transform(v => v.data$)
    .pipe(z.object({
      error: z.literal("AuthMissing").default("AuthMissing" as const),
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnauthorizedComAtprotoAdminGetInviteCodesResponseBodyError$ {
  /** @deprecated use `UnauthorizedComAtprotoAdminGetInviteCodesResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    UnauthorizedComAtprotoAdminGetInviteCodesResponseBodyError$inboundSchema;
  /** @deprecated use `UnauthorizedComAtprotoAdminGetInviteCodesResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    UnauthorizedComAtprotoAdminGetInviteCodesResponseBodyError$outboundSchema;
  /** @deprecated use `UnauthorizedComAtprotoAdminGetInviteCodesResponseBodyError$Outbound` instead. */
  export type Outbound =
    UnauthorizedComAtprotoAdminGetInviteCodesResponseBodyError$Outbound;
}

/** @internal */
export const ComAtprotoAdminGetInviteCodesError$inboundSchema: z.ZodNativeEnum<
  typeof ComAtprotoAdminGetInviteCodesError
> = z.nativeEnum(ComAtprotoAdminGetInviteCodesError);

/** @internal */
export const ComAtprotoAdminGetInviteCodesError$outboundSchema: z.ZodNativeEnum<
  typeof ComAtprotoAdminGetInviteCodesError
> = ComAtprotoAdminGetInviteCodesError$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoAdminGetInviteCodesError$ {
  /** @deprecated use `ComAtprotoAdminGetInviteCodesError$inboundSchema` instead. */
  export const inboundSchema = ComAtprotoAdminGetInviteCodesError$inboundSchema;
  /** @deprecated use `ComAtprotoAdminGetInviteCodesError$outboundSchema` instead. */
  export const outboundSchema =
    ComAtprotoAdminGetInviteCodesError$outboundSchema;
}

/** @internal */
export const BadRequestComAtprotoAdminGetInviteCodesResponseBodyError$inboundSchema:
  z.ZodType<
    BadRequestComAtprotoAdminGetInviteCodesResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: ComAtprotoAdminGetInviteCodesError$inboundSchema,
    message: z.string(),
  })
    .transform((v) => {
      return new BadRequestComAtprotoAdminGetInviteCodesResponseBodyError(v);
    });

/** @internal */
export type BadRequestComAtprotoAdminGetInviteCodesResponseBodyError$Outbound =
  {
    error: string;
    message: string;
  };

/** @internal */
export const BadRequestComAtprotoAdminGetInviteCodesResponseBodyError$outboundSchema:
  z.ZodType<
    BadRequestComAtprotoAdminGetInviteCodesResponseBodyError$Outbound,
    z.ZodTypeDef,
    BadRequestComAtprotoAdminGetInviteCodesResponseBodyError
  > = z.instanceof(BadRequestComAtprotoAdminGetInviteCodesResponseBodyError)
    .transform(v => v.data$)
    .pipe(z.object({
      error: ComAtprotoAdminGetInviteCodesError$outboundSchema,
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BadRequestComAtprotoAdminGetInviteCodesResponseBodyError$ {
  /** @deprecated use `BadRequestComAtprotoAdminGetInviteCodesResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    BadRequestComAtprotoAdminGetInviteCodesResponseBodyError$inboundSchema;
  /** @deprecated use `BadRequestComAtprotoAdminGetInviteCodesResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    BadRequestComAtprotoAdminGetInviteCodesResponseBodyError$outboundSchema;
  /** @deprecated use `BadRequestComAtprotoAdminGetInviteCodesResponseBodyError$Outbound` instead. */
  export type Outbound =
    BadRequestComAtprotoAdminGetInviteCodesResponseBodyError$Outbound;
}
