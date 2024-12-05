/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type ComAtprotoAdminUpdateAccountHandleAdminResponseBodyData = {
  error: "AuthMissing";
  message: string;
};

/**
 * Unauthorized
 */
export class ComAtprotoAdminUpdateAccountHandleAdminResponseBody extends Error {
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$: ComAtprotoAdminUpdateAccountHandleAdminResponseBodyData;

  constructor(err: ComAtprotoAdminUpdateAccountHandleAdminResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "ComAtprotoAdminUpdateAccountHandleAdminResponseBody";
  }
}

export const ComAtprotoAdminUpdateAccountHandleError = {
  InvalidRequest: "InvalidRequest",
  ExpiredToken: "ExpiredToken",
  InvalidToken: "InvalidToken",
} as const;
export type ComAtprotoAdminUpdateAccountHandleError = ClosedEnum<
  typeof ComAtprotoAdminUpdateAccountHandleError
>;

/**
 * Bad Request
 */
export type ComAtprotoAdminUpdateAccountHandleResponseBodyData = {
  error: ComAtprotoAdminUpdateAccountHandleError;
  message: string;
};

/**
 * Bad Request
 */
export class ComAtprotoAdminUpdateAccountHandleResponseBody extends Error {
  error: ComAtprotoAdminUpdateAccountHandleError;

  /** The original data that was passed to this error instance. */
  data$: ComAtprotoAdminUpdateAccountHandleResponseBodyData;

  constructor(err: ComAtprotoAdminUpdateAccountHandleResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "ComAtprotoAdminUpdateAccountHandleResponseBody";
  }
}

/** @internal */
export const ComAtprotoAdminUpdateAccountHandleAdminResponseBody$inboundSchema:
  z.ZodType<
    ComAtprotoAdminUpdateAccountHandleAdminResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.literal("AuthMissing"),
    message: z.string(),
  })
    .transform((v) => {
      return new ComAtprotoAdminUpdateAccountHandleAdminResponseBody(v);
    });

/** @internal */
export type ComAtprotoAdminUpdateAccountHandleAdminResponseBody$Outbound = {
  error: "AuthMissing";
  message: string;
};

/** @internal */
export const ComAtprotoAdminUpdateAccountHandleAdminResponseBody$outboundSchema:
  z.ZodType<
    ComAtprotoAdminUpdateAccountHandleAdminResponseBody$Outbound,
    z.ZodTypeDef,
    ComAtprotoAdminUpdateAccountHandleAdminResponseBody
  > = z.instanceof(ComAtprotoAdminUpdateAccountHandleAdminResponseBody)
    .transform(v => v.data$)
    .pipe(z.object({
      error: z.literal("AuthMissing").default("AuthMissing" as const),
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoAdminUpdateAccountHandleAdminResponseBody$ {
  /** @deprecated use `ComAtprotoAdminUpdateAccountHandleAdminResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ComAtprotoAdminUpdateAccountHandleAdminResponseBody$inboundSchema;
  /** @deprecated use `ComAtprotoAdminUpdateAccountHandleAdminResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ComAtprotoAdminUpdateAccountHandleAdminResponseBody$outboundSchema;
  /** @deprecated use `ComAtprotoAdminUpdateAccountHandleAdminResponseBody$Outbound` instead. */
  export type Outbound =
    ComAtprotoAdminUpdateAccountHandleAdminResponseBody$Outbound;
}

/** @internal */
export const ComAtprotoAdminUpdateAccountHandleError$inboundSchema:
  z.ZodNativeEnum<typeof ComAtprotoAdminUpdateAccountHandleError> = z
    .nativeEnum(ComAtprotoAdminUpdateAccountHandleError);

/** @internal */
export const ComAtprotoAdminUpdateAccountHandleError$outboundSchema:
  z.ZodNativeEnum<typeof ComAtprotoAdminUpdateAccountHandleError> =
    ComAtprotoAdminUpdateAccountHandleError$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoAdminUpdateAccountHandleError$ {
  /** @deprecated use `ComAtprotoAdminUpdateAccountHandleError$inboundSchema` instead. */
  export const inboundSchema =
    ComAtprotoAdminUpdateAccountHandleError$inboundSchema;
  /** @deprecated use `ComAtprotoAdminUpdateAccountHandleError$outboundSchema` instead. */
  export const outboundSchema =
    ComAtprotoAdminUpdateAccountHandleError$outboundSchema;
}

/** @internal */
export const ComAtprotoAdminUpdateAccountHandleResponseBody$inboundSchema:
  z.ZodType<
    ComAtprotoAdminUpdateAccountHandleResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: ComAtprotoAdminUpdateAccountHandleError$inboundSchema,
    message: z.string(),
  })
    .transform((v) => {
      return new ComAtprotoAdminUpdateAccountHandleResponseBody(v);
    });

/** @internal */
export type ComAtprotoAdminUpdateAccountHandleResponseBody$Outbound = {
  error: string;
  message: string;
};

/** @internal */
export const ComAtprotoAdminUpdateAccountHandleResponseBody$outboundSchema:
  z.ZodType<
    ComAtprotoAdminUpdateAccountHandleResponseBody$Outbound,
    z.ZodTypeDef,
    ComAtprotoAdminUpdateAccountHandleResponseBody
  > = z.instanceof(ComAtprotoAdminUpdateAccountHandleResponseBody)
    .transform(v => v.data$)
    .pipe(z.object({
      error: ComAtprotoAdminUpdateAccountHandleError$outboundSchema,
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoAdminUpdateAccountHandleResponseBody$ {
  /** @deprecated use `ComAtprotoAdminUpdateAccountHandleResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ComAtprotoAdminUpdateAccountHandleResponseBody$inboundSchema;
  /** @deprecated use `ComAtprotoAdminUpdateAccountHandleResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ComAtprotoAdminUpdateAccountHandleResponseBody$outboundSchema;
  /** @deprecated use `ComAtprotoAdminUpdateAccountHandleResponseBody$Outbound` instead. */
  export type Outbound =
    ComAtprotoAdminUpdateAccountHandleResponseBody$Outbound;
}
