/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type ComAtprotoAdminEnableAccountInvitesAtprotoAdminResponseBodyData = {
  error: "AuthMissing";
  message: string;
};

/**
 * Unauthorized
 */
export class ComAtprotoAdminEnableAccountInvitesAtprotoAdminResponseBody
  extends Error
{
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$: ComAtprotoAdminEnableAccountInvitesAtprotoAdminResponseBodyData;

  constructor(
    err: ComAtprotoAdminEnableAccountInvitesAtprotoAdminResponseBodyData,
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "ComAtprotoAdminEnableAccountInvitesAtprotoAdminResponseBody";
  }
}

export const ComAtprotoAdminEnableAccountInvitesError = {
  InvalidRequest: "InvalidRequest",
  ExpiredToken: "ExpiredToken",
  InvalidToken: "InvalidToken",
} as const;
export type ComAtprotoAdminEnableAccountInvitesError = ClosedEnum<
  typeof ComAtprotoAdminEnableAccountInvitesError
>;

/**
 * Bad Request
 */
export type ComAtprotoAdminEnableAccountInvitesResponseBodyData = {
  error: ComAtprotoAdminEnableAccountInvitesError;
  message: string;
};

/**
 * Bad Request
 */
export class ComAtprotoAdminEnableAccountInvitesResponseBody extends Error {
  error: ComAtprotoAdminEnableAccountInvitesError;

  /** The original data that was passed to this error instance. */
  data$: ComAtprotoAdminEnableAccountInvitesResponseBodyData;

  constructor(err: ComAtprotoAdminEnableAccountInvitesResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "ComAtprotoAdminEnableAccountInvitesResponseBody";
  }
}

/** @internal */
export const ComAtprotoAdminEnableAccountInvitesAtprotoAdminResponseBody$inboundSchema:
  z.ZodType<
    ComAtprotoAdminEnableAccountInvitesAtprotoAdminResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.literal("AuthMissing"),
    message: z.string(),
  })
    .transform((v) => {
      return new ComAtprotoAdminEnableAccountInvitesAtprotoAdminResponseBody(v);
    });

/** @internal */
export type ComAtprotoAdminEnableAccountInvitesAtprotoAdminResponseBody$Outbound =
  {
    error: "AuthMissing";
    message: string;
  };

/** @internal */
export const ComAtprotoAdminEnableAccountInvitesAtprotoAdminResponseBody$outboundSchema:
  z.ZodType<
    ComAtprotoAdminEnableAccountInvitesAtprotoAdminResponseBody$Outbound,
    z.ZodTypeDef,
    ComAtprotoAdminEnableAccountInvitesAtprotoAdminResponseBody
  > = z.instanceof(ComAtprotoAdminEnableAccountInvitesAtprotoAdminResponseBody)
    .transform(v => v.data$)
    .pipe(z.object({
      error: z.literal("AuthMissing").default("AuthMissing" as const),
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoAdminEnableAccountInvitesAtprotoAdminResponseBody$ {
  /** @deprecated use `ComAtprotoAdminEnableAccountInvitesAtprotoAdminResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ComAtprotoAdminEnableAccountInvitesAtprotoAdminResponseBody$inboundSchema;
  /** @deprecated use `ComAtprotoAdminEnableAccountInvitesAtprotoAdminResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ComAtprotoAdminEnableAccountInvitesAtprotoAdminResponseBody$outboundSchema;
  /** @deprecated use `ComAtprotoAdminEnableAccountInvitesAtprotoAdminResponseBody$Outbound` instead. */
  export type Outbound =
    ComAtprotoAdminEnableAccountInvitesAtprotoAdminResponseBody$Outbound;
}

/** @internal */
export const ComAtprotoAdminEnableAccountInvitesError$inboundSchema:
  z.ZodNativeEnum<typeof ComAtprotoAdminEnableAccountInvitesError> = z
    .nativeEnum(ComAtprotoAdminEnableAccountInvitesError);

/** @internal */
export const ComAtprotoAdminEnableAccountInvitesError$outboundSchema:
  z.ZodNativeEnum<typeof ComAtprotoAdminEnableAccountInvitesError> =
    ComAtprotoAdminEnableAccountInvitesError$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoAdminEnableAccountInvitesError$ {
  /** @deprecated use `ComAtprotoAdminEnableAccountInvitesError$inboundSchema` instead. */
  export const inboundSchema =
    ComAtprotoAdminEnableAccountInvitesError$inboundSchema;
  /** @deprecated use `ComAtprotoAdminEnableAccountInvitesError$outboundSchema` instead. */
  export const outboundSchema =
    ComAtprotoAdminEnableAccountInvitesError$outboundSchema;
}

/** @internal */
export const ComAtprotoAdminEnableAccountInvitesResponseBody$inboundSchema:
  z.ZodType<
    ComAtprotoAdminEnableAccountInvitesResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: ComAtprotoAdminEnableAccountInvitesError$inboundSchema,
    message: z.string(),
  })
    .transform((v) => {
      return new ComAtprotoAdminEnableAccountInvitesResponseBody(v);
    });

/** @internal */
export type ComAtprotoAdminEnableAccountInvitesResponseBody$Outbound = {
  error: string;
  message: string;
};

/** @internal */
export const ComAtprotoAdminEnableAccountInvitesResponseBody$outboundSchema:
  z.ZodType<
    ComAtprotoAdminEnableAccountInvitesResponseBody$Outbound,
    z.ZodTypeDef,
    ComAtprotoAdminEnableAccountInvitesResponseBody
  > = z.instanceof(ComAtprotoAdminEnableAccountInvitesResponseBody)
    .transform(v => v.data$)
    .pipe(z.object({
      error: ComAtprotoAdminEnableAccountInvitesError$outboundSchema,
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoAdminEnableAccountInvitesResponseBody$ {
  /** @deprecated use `ComAtprotoAdminEnableAccountInvitesResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ComAtprotoAdminEnableAccountInvitesResponseBody$inboundSchema;
  /** @deprecated use `ComAtprotoAdminEnableAccountInvitesResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ComAtprotoAdminEnableAccountInvitesResponseBody$outboundSchema;
  /** @deprecated use `ComAtprotoAdminEnableAccountInvitesResponseBody$Outbound` instead. */
  export type Outbound =
    ComAtprotoAdminEnableAccountInvitesResponseBody$Outbound;
}
