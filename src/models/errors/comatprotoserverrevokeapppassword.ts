/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type UnauthorizedComAtprotoServerRevokeAppPasswordResponseBodyErrorData =
  {
    error: "AuthMissing";
    message: string;
  };

/**
 * Unauthorized
 */
export class UnauthorizedComAtprotoServerRevokeAppPasswordResponseBodyError
  extends Error
{
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$: UnauthorizedComAtprotoServerRevokeAppPasswordResponseBodyErrorData;

  constructor(
    err: UnauthorizedComAtprotoServerRevokeAppPasswordResponseBodyErrorData,
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name =
      "UnauthorizedComAtprotoServerRevokeAppPasswordResponseBodyError";
  }
}

export const ComAtprotoServerRevokeAppPasswordError = {
  InvalidRequest: "InvalidRequest",
  ExpiredToken: "ExpiredToken",
  InvalidToken: "InvalidToken",
} as const;
export type ComAtprotoServerRevokeAppPasswordError = ClosedEnum<
  typeof ComAtprotoServerRevokeAppPasswordError
>;

/**
 * Bad Request
 */
export type BadRequestComAtprotoServerRevokeAppPasswordResponseBodyErrorData = {
  error: ComAtprotoServerRevokeAppPasswordError;
  message: string;
};

/**
 * Bad Request
 */
export class BadRequestComAtprotoServerRevokeAppPasswordResponseBodyError
  extends Error
{
  error: ComAtprotoServerRevokeAppPasswordError;

  /** The original data that was passed to this error instance. */
  data$: BadRequestComAtprotoServerRevokeAppPasswordResponseBodyErrorData;

  constructor(
    err: BadRequestComAtprotoServerRevokeAppPasswordResponseBodyErrorData,
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "BadRequestComAtprotoServerRevokeAppPasswordResponseBodyError";
  }
}

/** @internal */
export const UnauthorizedComAtprotoServerRevokeAppPasswordResponseBodyError$inboundSchema:
  z.ZodType<
    UnauthorizedComAtprotoServerRevokeAppPasswordResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.literal("AuthMissing"),
    message: z.string(),
  })
    .transform((v) => {
      return new UnauthorizedComAtprotoServerRevokeAppPasswordResponseBodyError(
        v,
      );
    });

/** @internal */
export type UnauthorizedComAtprotoServerRevokeAppPasswordResponseBodyError$Outbound =
  {
    error: "AuthMissing";
    message: string;
  };

/** @internal */
export const UnauthorizedComAtprotoServerRevokeAppPasswordResponseBodyError$outboundSchema:
  z.ZodType<
    UnauthorizedComAtprotoServerRevokeAppPasswordResponseBodyError$Outbound,
    z.ZodTypeDef,
    UnauthorizedComAtprotoServerRevokeAppPasswordResponseBodyError
  > = z.instanceof(
    UnauthorizedComAtprotoServerRevokeAppPasswordResponseBodyError,
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
export namespace UnauthorizedComAtprotoServerRevokeAppPasswordResponseBodyError$ {
  /** @deprecated use `UnauthorizedComAtprotoServerRevokeAppPasswordResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    UnauthorizedComAtprotoServerRevokeAppPasswordResponseBodyError$inboundSchema;
  /** @deprecated use `UnauthorizedComAtprotoServerRevokeAppPasswordResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    UnauthorizedComAtprotoServerRevokeAppPasswordResponseBodyError$outboundSchema;
  /** @deprecated use `UnauthorizedComAtprotoServerRevokeAppPasswordResponseBodyError$Outbound` instead. */
  export type Outbound =
    UnauthorizedComAtprotoServerRevokeAppPasswordResponseBodyError$Outbound;
}

/** @internal */
export const ComAtprotoServerRevokeAppPasswordError$inboundSchema:
  z.ZodNativeEnum<typeof ComAtprotoServerRevokeAppPasswordError> = z.nativeEnum(
    ComAtprotoServerRevokeAppPasswordError,
  );

/** @internal */
export const ComAtprotoServerRevokeAppPasswordError$outboundSchema:
  z.ZodNativeEnum<typeof ComAtprotoServerRevokeAppPasswordError> =
    ComAtprotoServerRevokeAppPasswordError$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoServerRevokeAppPasswordError$ {
  /** @deprecated use `ComAtprotoServerRevokeAppPasswordError$inboundSchema` instead. */
  export const inboundSchema =
    ComAtprotoServerRevokeAppPasswordError$inboundSchema;
  /** @deprecated use `ComAtprotoServerRevokeAppPasswordError$outboundSchema` instead. */
  export const outboundSchema =
    ComAtprotoServerRevokeAppPasswordError$outboundSchema;
}

/** @internal */
export const BadRequestComAtprotoServerRevokeAppPasswordResponseBodyError$inboundSchema:
  z.ZodType<
    BadRequestComAtprotoServerRevokeAppPasswordResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: ComAtprotoServerRevokeAppPasswordError$inboundSchema,
    message: z.string(),
  })
    .transform((v) => {
      return new BadRequestComAtprotoServerRevokeAppPasswordResponseBodyError(
        v,
      );
    });

/** @internal */
export type BadRequestComAtprotoServerRevokeAppPasswordResponseBodyError$Outbound =
  {
    error: string;
    message: string;
  };

/** @internal */
export const BadRequestComAtprotoServerRevokeAppPasswordResponseBodyError$outboundSchema:
  z.ZodType<
    BadRequestComAtprotoServerRevokeAppPasswordResponseBodyError$Outbound,
    z.ZodTypeDef,
    BadRequestComAtprotoServerRevokeAppPasswordResponseBodyError
  > = z.instanceof(BadRequestComAtprotoServerRevokeAppPasswordResponseBodyError)
    .transform(v => v.data$)
    .pipe(z.object({
      error: ComAtprotoServerRevokeAppPasswordError$outboundSchema,
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BadRequestComAtprotoServerRevokeAppPasswordResponseBodyError$ {
  /** @deprecated use `BadRequestComAtprotoServerRevokeAppPasswordResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    BadRequestComAtprotoServerRevokeAppPasswordResponseBodyError$inboundSchema;
  /** @deprecated use `BadRequestComAtprotoServerRevokeAppPasswordResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    BadRequestComAtprotoServerRevokeAppPasswordResponseBodyError$outboundSchema;
  /** @deprecated use `BadRequestComAtprotoServerRevokeAppPasswordResponseBodyError$Outbound` instead. */
  export type Outbound =
    BadRequestComAtprotoServerRevokeAppPasswordResponseBodyError$Outbound;
}
