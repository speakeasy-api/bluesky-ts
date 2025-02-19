/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type UnauthorizedComAtprotoServerGetAccountInviteCodesResponseBodyErrorData =
  {
    error: "AuthMissing";
    message: string;
  };

/**
 * Unauthorized
 */
export class UnauthorizedComAtprotoServerGetAccountInviteCodesResponseBodyError
  extends Error
{
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$: UnauthorizedComAtprotoServerGetAccountInviteCodesResponseBodyErrorData;

  constructor(
    err: UnauthorizedComAtprotoServerGetAccountInviteCodesResponseBodyErrorData,
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name =
      "UnauthorizedComAtprotoServerGetAccountInviteCodesResponseBodyError";
  }
}

export const ComAtprotoServerGetAccountInviteCodesError = {
  InvalidRequest: "InvalidRequest",
  ExpiredToken: "ExpiredToken",
  InvalidToken: "InvalidToken",
  DuplicateCreate: "DuplicateCreate",
} as const;
export type ComAtprotoServerGetAccountInviteCodesError = ClosedEnum<
  typeof ComAtprotoServerGetAccountInviteCodesError
>;

/**
 * Bad Request
 */
export type BadRequestComAtprotoServerGetAccountInviteCodesResponseBodyErrorData =
  {
    error: ComAtprotoServerGetAccountInviteCodesError;
    message: string;
  };

/**
 * Bad Request
 */
export class BadRequestComAtprotoServerGetAccountInviteCodesResponseBodyError
  extends Error
{
  error: ComAtprotoServerGetAccountInviteCodesError;

  /** The original data that was passed to this error instance. */
  data$: BadRequestComAtprotoServerGetAccountInviteCodesResponseBodyErrorData;

  constructor(
    err: BadRequestComAtprotoServerGetAccountInviteCodesResponseBodyErrorData,
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name =
      "BadRequestComAtprotoServerGetAccountInviteCodesResponseBodyError";
  }
}

/** @internal */
export const UnauthorizedComAtprotoServerGetAccountInviteCodesResponseBodyError$inboundSchema:
  z.ZodType<
    UnauthorizedComAtprotoServerGetAccountInviteCodesResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.literal("AuthMissing"),
    message: z.string(),
  })
    .transform((v) => {
      return new UnauthorizedComAtprotoServerGetAccountInviteCodesResponseBodyError(
        v,
      );
    });

/** @internal */
export type UnauthorizedComAtprotoServerGetAccountInviteCodesResponseBodyError$Outbound =
  {
    error: "AuthMissing";
    message: string;
  };

/** @internal */
export const UnauthorizedComAtprotoServerGetAccountInviteCodesResponseBodyError$outboundSchema:
  z.ZodType<
    UnauthorizedComAtprotoServerGetAccountInviteCodesResponseBodyError$Outbound,
    z.ZodTypeDef,
    UnauthorizedComAtprotoServerGetAccountInviteCodesResponseBodyError
  > = z.instanceof(
    UnauthorizedComAtprotoServerGetAccountInviteCodesResponseBodyError,
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
export namespace UnauthorizedComAtprotoServerGetAccountInviteCodesResponseBodyError$ {
  /** @deprecated use `UnauthorizedComAtprotoServerGetAccountInviteCodesResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    UnauthorizedComAtprotoServerGetAccountInviteCodesResponseBodyError$inboundSchema;
  /** @deprecated use `UnauthorizedComAtprotoServerGetAccountInviteCodesResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    UnauthorizedComAtprotoServerGetAccountInviteCodesResponseBodyError$outboundSchema;
  /** @deprecated use `UnauthorizedComAtprotoServerGetAccountInviteCodesResponseBodyError$Outbound` instead. */
  export type Outbound =
    UnauthorizedComAtprotoServerGetAccountInviteCodesResponseBodyError$Outbound;
}

/** @internal */
export const ComAtprotoServerGetAccountInviteCodesError$inboundSchema:
  z.ZodNativeEnum<typeof ComAtprotoServerGetAccountInviteCodesError> = z
    .nativeEnum(ComAtprotoServerGetAccountInviteCodesError);

/** @internal */
export const ComAtprotoServerGetAccountInviteCodesError$outboundSchema:
  z.ZodNativeEnum<typeof ComAtprotoServerGetAccountInviteCodesError> =
    ComAtprotoServerGetAccountInviteCodesError$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoServerGetAccountInviteCodesError$ {
  /** @deprecated use `ComAtprotoServerGetAccountInviteCodesError$inboundSchema` instead. */
  export const inboundSchema =
    ComAtprotoServerGetAccountInviteCodesError$inboundSchema;
  /** @deprecated use `ComAtprotoServerGetAccountInviteCodesError$outboundSchema` instead. */
  export const outboundSchema =
    ComAtprotoServerGetAccountInviteCodesError$outboundSchema;
}

/** @internal */
export const BadRequestComAtprotoServerGetAccountInviteCodesResponseBodyError$inboundSchema:
  z.ZodType<
    BadRequestComAtprotoServerGetAccountInviteCodesResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: ComAtprotoServerGetAccountInviteCodesError$inboundSchema,
    message: z.string(),
  })
    .transform((v) => {
      return new BadRequestComAtprotoServerGetAccountInviteCodesResponseBodyError(
        v,
      );
    });

/** @internal */
export type BadRequestComAtprotoServerGetAccountInviteCodesResponseBodyError$Outbound =
  {
    error: string;
    message: string;
  };

/** @internal */
export const BadRequestComAtprotoServerGetAccountInviteCodesResponseBodyError$outboundSchema:
  z.ZodType<
    BadRequestComAtprotoServerGetAccountInviteCodesResponseBodyError$Outbound,
    z.ZodTypeDef,
    BadRequestComAtprotoServerGetAccountInviteCodesResponseBodyError
  > = z.instanceof(
    BadRequestComAtprotoServerGetAccountInviteCodesResponseBodyError,
  )
    .transform(v => v.data$)
    .pipe(z.object({
      error: ComAtprotoServerGetAccountInviteCodesError$outboundSchema,
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BadRequestComAtprotoServerGetAccountInviteCodesResponseBodyError$ {
  /** @deprecated use `BadRequestComAtprotoServerGetAccountInviteCodesResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    BadRequestComAtprotoServerGetAccountInviteCodesResponseBodyError$inboundSchema;
  /** @deprecated use `BadRequestComAtprotoServerGetAccountInviteCodesResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    BadRequestComAtprotoServerGetAccountInviteCodesResponseBodyError$outboundSchema;
  /** @deprecated use `BadRequestComAtprotoServerGetAccountInviteCodesResponseBodyError$Outbound` instead. */
  export type Outbound =
    BadRequestComAtprotoServerGetAccountInviteCodesResponseBodyError$Outbound;
}
