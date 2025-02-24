/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type UnauthorizedComAtprotoAdminDisableAccountInvitesResponseBodyErrorData =
  {
    error: "AuthMissing";
    message: string;
  };

/**
 * Unauthorized
 */
export class UnauthorizedComAtprotoAdminDisableAccountInvitesResponseBodyError
  extends Error
{
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$: UnauthorizedComAtprotoAdminDisableAccountInvitesResponseBodyErrorData;

  constructor(
    err: UnauthorizedComAtprotoAdminDisableAccountInvitesResponseBodyErrorData,
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name =
      "UnauthorizedComAtprotoAdminDisableAccountInvitesResponseBodyError";
  }
}

export const ComAtprotoAdminDisableAccountInvitesError = {
  InvalidRequest: "InvalidRequest",
  ExpiredToken: "ExpiredToken",
  InvalidToken: "InvalidToken",
} as const;
export type ComAtprotoAdminDisableAccountInvitesError = ClosedEnum<
  typeof ComAtprotoAdminDisableAccountInvitesError
>;

/**
 * Bad Request
 */
export type BadRequestComAtprotoAdminDisableAccountInvitesResponseBodyErrorData =
  {
    error: ComAtprotoAdminDisableAccountInvitesError;
    message: string;
  };

/**
 * Bad Request
 */
export class BadRequestComAtprotoAdminDisableAccountInvitesResponseBodyError
  extends Error
{
  error: ComAtprotoAdminDisableAccountInvitesError;

  /** The original data that was passed to this error instance. */
  data$: BadRequestComAtprotoAdminDisableAccountInvitesResponseBodyErrorData;

  constructor(
    err: BadRequestComAtprotoAdminDisableAccountInvitesResponseBodyErrorData,
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name =
      "BadRequestComAtprotoAdminDisableAccountInvitesResponseBodyError";
  }
}

/** @internal */
export const UnauthorizedComAtprotoAdminDisableAccountInvitesResponseBodyError$inboundSchema:
  z.ZodType<
    UnauthorizedComAtprotoAdminDisableAccountInvitesResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.literal("AuthMissing"),
    message: z.string(),
  })
    .transform((v) => {
      return new UnauthorizedComAtprotoAdminDisableAccountInvitesResponseBodyError(
        v,
      );
    });

/** @internal */
export type UnauthorizedComAtprotoAdminDisableAccountInvitesResponseBodyError$Outbound =
  {
    error: "AuthMissing";
    message: string;
  };

/** @internal */
export const UnauthorizedComAtprotoAdminDisableAccountInvitesResponseBodyError$outboundSchema:
  z.ZodType<
    UnauthorizedComAtprotoAdminDisableAccountInvitesResponseBodyError$Outbound,
    z.ZodTypeDef,
    UnauthorizedComAtprotoAdminDisableAccountInvitesResponseBodyError
  > = z.instanceof(
    UnauthorizedComAtprotoAdminDisableAccountInvitesResponseBodyError,
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
export namespace UnauthorizedComAtprotoAdminDisableAccountInvitesResponseBodyError$ {
  /** @deprecated use `UnauthorizedComAtprotoAdminDisableAccountInvitesResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    UnauthorizedComAtprotoAdminDisableAccountInvitesResponseBodyError$inboundSchema;
  /** @deprecated use `UnauthorizedComAtprotoAdminDisableAccountInvitesResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    UnauthorizedComAtprotoAdminDisableAccountInvitesResponseBodyError$outboundSchema;
  /** @deprecated use `UnauthorizedComAtprotoAdminDisableAccountInvitesResponseBodyError$Outbound` instead. */
  export type Outbound =
    UnauthorizedComAtprotoAdminDisableAccountInvitesResponseBodyError$Outbound;
}

/** @internal */
export const ComAtprotoAdminDisableAccountInvitesError$inboundSchema:
  z.ZodNativeEnum<typeof ComAtprotoAdminDisableAccountInvitesError> = z
    .nativeEnum(ComAtprotoAdminDisableAccountInvitesError);

/** @internal */
export const ComAtprotoAdminDisableAccountInvitesError$outboundSchema:
  z.ZodNativeEnum<typeof ComAtprotoAdminDisableAccountInvitesError> =
    ComAtprotoAdminDisableAccountInvitesError$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoAdminDisableAccountInvitesError$ {
  /** @deprecated use `ComAtprotoAdminDisableAccountInvitesError$inboundSchema` instead. */
  export const inboundSchema =
    ComAtprotoAdminDisableAccountInvitesError$inboundSchema;
  /** @deprecated use `ComAtprotoAdminDisableAccountInvitesError$outboundSchema` instead. */
  export const outboundSchema =
    ComAtprotoAdminDisableAccountInvitesError$outboundSchema;
}

/** @internal */
export const BadRequestComAtprotoAdminDisableAccountInvitesResponseBodyError$inboundSchema:
  z.ZodType<
    BadRequestComAtprotoAdminDisableAccountInvitesResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: ComAtprotoAdminDisableAccountInvitesError$inboundSchema,
    message: z.string(),
  })
    .transform((v) => {
      return new BadRequestComAtprotoAdminDisableAccountInvitesResponseBodyError(
        v,
      );
    });

/** @internal */
export type BadRequestComAtprotoAdminDisableAccountInvitesResponseBodyError$Outbound =
  {
    error: string;
    message: string;
  };

/** @internal */
export const BadRequestComAtprotoAdminDisableAccountInvitesResponseBodyError$outboundSchema:
  z.ZodType<
    BadRequestComAtprotoAdminDisableAccountInvitesResponseBodyError$Outbound,
    z.ZodTypeDef,
    BadRequestComAtprotoAdminDisableAccountInvitesResponseBodyError
  > = z.instanceof(
    BadRequestComAtprotoAdminDisableAccountInvitesResponseBodyError,
  )
    .transform(v => v.data$)
    .pipe(z.object({
      error: ComAtprotoAdminDisableAccountInvitesError$outboundSchema,
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BadRequestComAtprotoAdminDisableAccountInvitesResponseBodyError$ {
  /** @deprecated use `BadRequestComAtprotoAdminDisableAccountInvitesResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    BadRequestComAtprotoAdminDisableAccountInvitesResponseBodyError$inboundSchema;
  /** @deprecated use `BadRequestComAtprotoAdminDisableAccountInvitesResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    BadRequestComAtprotoAdminDisableAccountInvitesResponseBodyError$outboundSchema;
  /** @deprecated use `BadRequestComAtprotoAdminDisableAccountInvitesResponseBodyError$Outbound` instead. */
  export type Outbound =
    BadRequestComAtprotoAdminDisableAccountInvitesResponseBodyError$Outbound;
}
