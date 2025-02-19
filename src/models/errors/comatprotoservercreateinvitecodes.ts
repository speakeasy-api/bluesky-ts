/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type UnauthorizedComAtprotoServerCreateInviteCodesResponseBodyErrorData =
  {
    error: "AuthMissing";
    message: string;
  };

/**
 * Unauthorized
 */
export class UnauthorizedComAtprotoServerCreateInviteCodesResponseBodyError
  extends Error
{
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$: UnauthorizedComAtprotoServerCreateInviteCodesResponseBodyErrorData;

  constructor(
    err: UnauthorizedComAtprotoServerCreateInviteCodesResponseBodyErrorData,
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name =
      "UnauthorizedComAtprotoServerCreateInviteCodesResponseBodyError";
  }
}

export const ComAtprotoServerCreateInviteCodesError = {
  InvalidRequest: "InvalidRequest",
  ExpiredToken: "ExpiredToken",
  InvalidToken: "InvalidToken",
} as const;
export type ComAtprotoServerCreateInviteCodesError = ClosedEnum<
  typeof ComAtprotoServerCreateInviteCodesError
>;

/**
 * Bad Request
 */
export type BadRequestComAtprotoServerCreateInviteCodesResponseBodyErrorData = {
  error: ComAtprotoServerCreateInviteCodesError;
  message: string;
};

/**
 * Bad Request
 */
export class BadRequestComAtprotoServerCreateInviteCodesResponseBodyError
  extends Error
{
  error: ComAtprotoServerCreateInviteCodesError;

  /** The original data that was passed to this error instance. */
  data$: BadRequestComAtprotoServerCreateInviteCodesResponseBodyErrorData;

  constructor(
    err: BadRequestComAtprotoServerCreateInviteCodesResponseBodyErrorData,
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "BadRequestComAtprotoServerCreateInviteCodesResponseBodyError";
  }
}

/** @internal */
export const UnauthorizedComAtprotoServerCreateInviteCodesResponseBodyError$inboundSchema:
  z.ZodType<
    UnauthorizedComAtprotoServerCreateInviteCodesResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.literal("AuthMissing"),
    message: z.string(),
  })
    .transform((v) => {
      return new UnauthorizedComAtprotoServerCreateInviteCodesResponseBodyError(
        v,
      );
    });

/** @internal */
export type UnauthorizedComAtprotoServerCreateInviteCodesResponseBodyError$Outbound =
  {
    error: "AuthMissing";
    message: string;
  };

/** @internal */
export const UnauthorizedComAtprotoServerCreateInviteCodesResponseBodyError$outboundSchema:
  z.ZodType<
    UnauthorizedComAtprotoServerCreateInviteCodesResponseBodyError$Outbound,
    z.ZodTypeDef,
    UnauthorizedComAtprotoServerCreateInviteCodesResponseBodyError
  > = z.instanceof(
    UnauthorizedComAtprotoServerCreateInviteCodesResponseBodyError,
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
export namespace UnauthorizedComAtprotoServerCreateInviteCodesResponseBodyError$ {
  /** @deprecated use `UnauthorizedComAtprotoServerCreateInviteCodesResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    UnauthorizedComAtprotoServerCreateInviteCodesResponseBodyError$inboundSchema;
  /** @deprecated use `UnauthorizedComAtprotoServerCreateInviteCodesResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    UnauthorizedComAtprotoServerCreateInviteCodesResponseBodyError$outboundSchema;
  /** @deprecated use `UnauthorizedComAtprotoServerCreateInviteCodesResponseBodyError$Outbound` instead. */
  export type Outbound =
    UnauthorizedComAtprotoServerCreateInviteCodesResponseBodyError$Outbound;
}

/** @internal */
export const ComAtprotoServerCreateInviteCodesError$inboundSchema:
  z.ZodNativeEnum<typeof ComAtprotoServerCreateInviteCodesError> = z.nativeEnum(
    ComAtprotoServerCreateInviteCodesError,
  );

/** @internal */
export const ComAtprotoServerCreateInviteCodesError$outboundSchema:
  z.ZodNativeEnum<typeof ComAtprotoServerCreateInviteCodesError> =
    ComAtprotoServerCreateInviteCodesError$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoServerCreateInviteCodesError$ {
  /** @deprecated use `ComAtprotoServerCreateInviteCodesError$inboundSchema` instead. */
  export const inboundSchema =
    ComAtprotoServerCreateInviteCodesError$inboundSchema;
  /** @deprecated use `ComAtprotoServerCreateInviteCodesError$outboundSchema` instead. */
  export const outboundSchema =
    ComAtprotoServerCreateInviteCodesError$outboundSchema;
}

/** @internal */
export const BadRequestComAtprotoServerCreateInviteCodesResponseBodyError$inboundSchema:
  z.ZodType<
    BadRequestComAtprotoServerCreateInviteCodesResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: ComAtprotoServerCreateInviteCodesError$inboundSchema,
    message: z.string(),
  })
    .transform((v) => {
      return new BadRequestComAtprotoServerCreateInviteCodesResponseBodyError(
        v,
      );
    });

/** @internal */
export type BadRequestComAtprotoServerCreateInviteCodesResponseBodyError$Outbound =
  {
    error: string;
    message: string;
  };

/** @internal */
export const BadRequestComAtprotoServerCreateInviteCodesResponseBodyError$outboundSchema:
  z.ZodType<
    BadRequestComAtprotoServerCreateInviteCodesResponseBodyError$Outbound,
    z.ZodTypeDef,
    BadRequestComAtprotoServerCreateInviteCodesResponseBodyError
  > = z.instanceof(BadRequestComAtprotoServerCreateInviteCodesResponseBodyError)
    .transform(v => v.data$)
    .pipe(z.object({
      error: ComAtprotoServerCreateInviteCodesError$outboundSchema,
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BadRequestComAtprotoServerCreateInviteCodesResponseBodyError$ {
  /** @deprecated use `BadRequestComAtprotoServerCreateInviteCodesResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    BadRequestComAtprotoServerCreateInviteCodesResponseBodyError$inboundSchema;
  /** @deprecated use `BadRequestComAtprotoServerCreateInviteCodesResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    BadRequestComAtprotoServerCreateInviteCodesResponseBodyError$outboundSchema;
  /** @deprecated use `BadRequestComAtprotoServerCreateInviteCodesResponseBodyError$Outbound` instead. */
  export type Outbound =
    BadRequestComAtprotoServerCreateInviteCodesResponseBodyError$Outbound;
}
