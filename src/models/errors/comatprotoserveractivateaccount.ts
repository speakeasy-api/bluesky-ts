/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type ComAtprotoServerActivateAccountAtprotoServerResponseBodyData = {
  error: "AuthMissing";
  message: string;
};

/**
 * Unauthorized
 */
export class ComAtprotoServerActivateAccountAtprotoServerResponseBody
  extends Error
{
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$: ComAtprotoServerActivateAccountAtprotoServerResponseBodyData;

  constructor(
    err: ComAtprotoServerActivateAccountAtprotoServerResponseBodyData,
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "ComAtprotoServerActivateAccountAtprotoServerResponseBody";
  }
}

export const ComAtprotoServerActivateAccountError = {
  InvalidRequest: "InvalidRequest",
  ExpiredToken: "ExpiredToken",
  InvalidToken: "InvalidToken",
} as const;
export type ComAtprotoServerActivateAccountError = ClosedEnum<
  typeof ComAtprotoServerActivateAccountError
>;

/**
 * Bad Request
 */
export type ComAtprotoServerActivateAccountResponseBodyData = {
  error: ComAtprotoServerActivateAccountError;
  message: string;
};

/**
 * Bad Request
 */
export class ComAtprotoServerActivateAccountResponseBody extends Error {
  error: ComAtprotoServerActivateAccountError;

  /** The original data that was passed to this error instance. */
  data$: ComAtprotoServerActivateAccountResponseBodyData;

  constructor(err: ComAtprotoServerActivateAccountResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "ComAtprotoServerActivateAccountResponseBody";
  }
}

/** @internal */
export const ComAtprotoServerActivateAccountAtprotoServerResponseBody$inboundSchema:
  z.ZodType<
    ComAtprotoServerActivateAccountAtprotoServerResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.literal("AuthMissing"),
    message: z.string(),
  })
    .transform((v) => {
      return new ComAtprotoServerActivateAccountAtprotoServerResponseBody(v);
    });

/** @internal */
export type ComAtprotoServerActivateAccountAtprotoServerResponseBody$Outbound =
  {
    error: "AuthMissing";
    message: string;
  };

/** @internal */
export const ComAtprotoServerActivateAccountAtprotoServerResponseBody$outboundSchema:
  z.ZodType<
    ComAtprotoServerActivateAccountAtprotoServerResponseBody$Outbound,
    z.ZodTypeDef,
    ComAtprotoServerActivateAccountAtprotoServerResponseBody
  > = z.instanceof(ComAtprotoServerActivateAccountAtprotoServerResponseBody)
    .transform(v => v.data$)
    .pipe(z.object({
      error: z.literal("AuthMissing").default("AuthMissing" as const),
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoServerActivateAccountAtprotoServerResponseBody$ {
  /** @deprecated use `ComAtprotoServerActivateAccountAtprotoServerResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ComAtprotoServerActivateAccountAtprotoServerResponseBody$inboundSchema;
  /** @deprecated use `ComAtprotoServerActivateAccountAtprotoServerResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ComAtprotoServerActivateAccountAtprotoServerResponseBody$outboundSchema;
  /** @deprecated use `ComAtprotoServerActivateAccountAtprotoServerResponseBody$Outbound` instead. */
  export type Outbound =
    ComAtprotoServerActivateAccountAtprotoServerResponseBody$Outbound;
}

/** @internal */
export const ComAtprotoServerActivateAccountError$inboundSchema:
  z.ZodNativeEnum<typeof ComAtprotoServerActivateAccountError> = z.nativeEnum(
    ComAtprotoServerActivateAccountError,
  );

/** @internal */
export const ComAtprotoServerActivateAccountError$outboundSchema:
  z.ZodNativeEnum<typeof ComAtprotoServerActivateAccountError> =
    ComAtprotoServerActivateAccountError$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoServerActivateAccountError$ {
  /** @deprecated use `ComAtprotoServerActivateAccountError$inboundSchema` instead. */
  export const inboundSchema =
    ComAtprotoServerActivateAccountError$inboundSchema;
  /** @deprecated use `ComAtprotoServerActivateAccountError$outboundSchema` instead. */
  export const outboundSchema =
    ComAtprotoServerActivateAccountError$outboundSchema;
}

/** @internal */
export const ComAtprotoServerActivateAccountResponseBody$inboundSchema:
  z.ZodType<
    ComAtprotoServerActivateAccountResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: ComAtprotoServerActivateAccountError$inboundSchema,
    message: z.string(),
  })
    .transform((v) => {
      return new ComAtprotoServerActivateAccountResponseBody(v);
    });

/** @internal */
export type ComAtprotoServerActivateAccountResponseBody$Outbound = {
  error: string;
  message: string;
};

/** @internal */
export const ComAtprotoServerActivateAccountResponseBody$outboundSchema:
  z.ZodType<
    ComAtprotoServerActivateAccountResponseBody$Outbound,
    z.ZodTypeDef,
    ComAtprotoServerActivateAccountResponseBody
  > = z.instanceof(ComAtprotoServerActivateAccountResponseBody)
    .transform(v => v.data$)
    .pipe(z.object({
      error: ComAtprotoServerActivateAccountError$outboundSchema,
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoServerActivateAccountResponseBody$ {
  /** @deprecated use `ComAtprotoServerActivateAccountResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ComAtprotoServerActivateAccountResponseBody$inboundSchema;
  /** @deprecated use `ComAtprotoServerActivateAccountResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ComAtprotoServerActivateAccountResponseBody$outboundSchema;
  /** @deprecated use `ComAtprotoServerActivateAccountResponseBody$Outbound` instead. */
  export type Outbound = ComAtprotoServerActivateAccountResponseBody$Outbound;
}
