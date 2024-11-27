/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type ComAtprotoAdminSearchAccountsAtprotoAdminResponseBodyData = {
  error: "AuthMissing";
  message: string;
};

/**
 * Unauthorized
 */
export class ComAtprotoAdminSearchAccountsAtprotoAdminResponseBody
  extends Error
{
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$: ComAtprotoAdminSearchAccountsAtprotoAdminResponseBodyData;

  constructor(err: ComAtprotoAdminSearchAccountsAtprotoAdminResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "ComAtprotoAdminSearchAccountsAtprotoAdminResponseBody";
  }
}

export const ComAtprotoAdminSearchAccountsError = {
  InvalidRequest: "InvalidRequest",
  ExpiredToken: "ExpiredToken",
  InvalidToken: "InvalidToken",
} as const;
export type ComAtprotoAdminSearchAccountsError = ClosedEnum<
  typeof ComAtprotoAdminSearchAccountsError
>;

/**
 * Bad Request
 */
export type ComAtprotoAdminSearchAccountsResponseBodyData = {
  error: ComAtprotoAdminSearchAccountsError;
  message: string;
};

/**
 * Bad Request
 */
export class ComAtprotoAdminSearchAccountsResponseBody extends Error {
  error: ComAtprotoAdminSearchAccountsError;

  /** The original data that was passed to this error instance. */
  data$: ComAtprotoAdminSearchAccountsResponseBodyData;

  constructor(err: ComAtprotoAdminSearchAccountsResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "ComAtprotoAdminSearchAccountsResponseBody";
  }
}

/** @internal */
export const ComAtprotoAdminSearchAccountsAtprotoAdminResponseBody$inboundSchema:
  z.ZodType<
    ComAtprotoAdminSearchAccountsAtprotoAdminResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.literal("AuthMissing"),
    message: z.string(),
  })
    .transform((v) => {
      return new ComAtprotoAdminSearchAccountsAtprotoAdminResponseBody(v);
    });

/** @internal */
export type ComAtprotoAdminSearchAccountsAtprotoAdminResponseBody$Outbound = {
  error: "AuthMissing";
  message: string;
};

/** @internal */
export const ComAtprotoAdminSearchAccountsAtprotoAdminResponseBody$outboundSchema:
  z.ZodType<
    ComAtprotoAdminSearchAccountsAtprotoAdminResponseBody$Outbound,
    z.ZodTypeDef,
    ComAtprotoAdminSearchAccountsAtprotoAdminResponseBody
  > = z.instanceof(ComAtprotoAdminSearchAccountsAtprotoAdminResponseBody)
    .transform(v => v.data$)
    .pipe(z.object({
      error: z.literal("AuthMissing").default("AuthMissing" as const),
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoAdminSearchAccountsAtprotoAdminResponseBody$ {
  /** @deprecated use `ComAtprotoAdminSearchAccountsAtprotoAdminResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ComAtprotoAdminSearchAccountsAtprotoAdminResponseBody$inboundSchema;
  /** @deprecated use `ComAtprotoAdminSearchAccountsAtprotoAdminResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ComAtprotoAdminSearchAccountsAtprotoAdminResponseBody$outboundSchema;
  /** @deprecated use `ComAtprotoAdminSearchAccountsAtprotoAdminResponseBody$Outbound` instead. */
  export type Outbound =
    ComAtprotoAdminSearchAccountsAtprotoAdminResponseBody$Outbound;
}

/** @internal */
export const ComAtprotoAdminSearchAccountsError$inboundSchema: z.ZodNativeEnum<
  typeof ComAtprotoAdminSearchAccountsError
> = z.nativeEnum(ComAtprotoAdminSearchAccountsError);

/** @internal */
export const ComAtprotoAdminSearchAccountsError$outboundSchema: z.ZodNativeEnum<
  typeof ComAtprotoAdminSearchAccountsError
> = ComAtprotoAdminSearchAccountsError$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoAdminSearchAccountsError$ {
  /** @deprecated use `ComAtprotoAdminSearchAccountsError$inboundSchema` instead. */
  export const inboundSchema = ComAtprotoAdminSearchAccountsError$inboundSchema;
  /** @deprecated use `ComAtprotoAdminSearchAccountsError$outboundSchema` instead. */
  export const outboundSchema =
    ComAtprotoAdminSearchAccountsError$outboundSchema;
}

/** @internal */
export const ComAtprotoAdminSearchAccountsResponseBody$inboundSchema: z.ZodType<
  ComAtprotoAdminSearchAccountsResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  error: ComAtprotoAdminSearchAccountsError$inboundSchema,
  message: z.string(),
})
  .transform((v) => {
    return new ComAtprotoAdminSearchAccountsResponseBody(v);
  });

/** @internal */
export type ComAtprotoAdminSearchAccountsResponseBody$Outbound = {
  error: string;
  message: string;
};

/** @internal */
export const ComAtprotoAdminSearchAccountsResponseBody$outboundSchema:
  z.ZodType<
    ComAtprotoAdminSearchAccountsResponseBody$Outbound,
    z.ZodTypeDef,
    ComAtprotoAdminSearchAccountsResponseBody
  > = z.instanceof(ComAtprotoAdminSearchAccountsResponseBody)
    .transform(v => v.data$)
    .pipe(z.object({
      error: ComAtprotoAdminSearchAccountsError$outboundSchema,
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoAdminSearchAccountsResponseBody$ {
  /** @deprecated use `ComAtprotoAdminSearchAccountsResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ComAtprotoAdminSearchAccountsResponseBody$inboundSchema;
  /** @deprecated use `ComAtprotoAdminSearchAccountsResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ComAtprotoAdminSearchAccountsResponseBody$outboundSchema;
  /** @deprecated use `ComAtprotoAdminSearchAccountsResponseBody$Outbound` instead. */
  export type Outbound = ComAtprotoAdminSearchAccountsResponseBody$Outbound;
}
