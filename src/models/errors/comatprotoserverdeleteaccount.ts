/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type ComAtprotoServerDeleteAccountAtprotoServerResponseBodyData = {
  error: "AuthMissing";
  message: string;
};

/**
 * Unauthorized
 */
export class ComAtprotoServerDeleteAccountAtprotoServerResponseBody
  extends Error
{
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$: ComAtprotoServerDeleteAccountAtprotoServerResponseBodyData;

  constructor(err: ComAtprotoServerDeleteAccountAtprotoServerResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "ComAtprotoServerDeleteAccountAtprotoServerResponseBody";
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
export type ComAtprotoServerDeleteAccountResponseBodyData = {
  error: ComAtprotoServerDeleteAccountError;
  message: string;
};

/**
 * Bad Request
 */
export class ComAtprotoServerDeleteAccountResponseBody extends Error {
  error: ComAtprotoServerDeleteAccountError;

  /** The original data that was passed to this error instance. */
  data$: ComAtprotoServerDeleteAccountResponseBodyData;

  constructor(err: ComAtprotoServerDeleteAccountResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "ComAtprotoServerDeleteAccountResponseBody";
  }
}

/** @internal */
export const ComAtprotoServerDeleteAccountAtprotoServerResponseBody$inboundSchema:
  z.ZodType<
    ComAtprotoServerDeleteAccountAtprotoServerResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.literal("AuthMissing"),
    message: z.string(),
  })
    .transform((v) => {
      return new ComAtprotoServerDeleteAccountAtprotoServerResponseBody(v);
    });

/** @internal */
export type ComAtprotoServerDeleteAccountAtprotoServerResponseBody$Outbound = {
  error: "AuthMissing";
  message: string;
};

/** @internal */
export const ComAtprotoServerDeleteAccountAtprotoServerResponseBody$outboundSchema:
  z.ZodType<
    ComAtprotoServerDeleteAccountAtprotoServerResponseBody$Outbound,
    z.ZodTypeDef,
    ComAtprotoServerDeleteAccountAtprotoServerResponseBody
  > = z.instanceof(ComAtprotoServerDeleteAccountAtprotoServerResponseBody)
    .transform(v => v.data$)
    .pipe(z.object({
      error: z.literal("AuthMissing").default("AuthMissing" as const),
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoServerDeleteAccountAtprotoServerResponseBody$ {
  /** @deprecated use `ComAtprotoServerDeleteAccountAtprotoServerResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ComAtprotoServerDeleteAccountAtprotoServerResponseBody$inboundSchema;
  /** @deprecated use `ComAtprotoServerDeleteAccountAtprotoServerResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ComAtprotoServerDeleteAccountAtprotoServerResponseBody$outboundSchema;
  /** @deprecated use `ComAtprotoServerDeleteAccountAtprotoServerResponseBody$Outbound` instead. */
  export type Outbound =
    ComAtprotoServerDeleteAccountAtprotoServerResponseBody$Outbound;
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
export const ComAtprotoServerDeleteAccountResponseBody$inboundSchema: z.ZodType<
  ComAtprotoServerDeleteAccountResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  error: ComAtprotoServerDeleteAccountError$inboundSchema,
  message: z.string(),
})
  .transform((v) => {
    return new ComAtprotoServerDeleteAccountResponseBody(v);
  });

/** @internal */
export type ComAtprotoServerDeleteAccountResponseBody$Outbound = {
  error: string;
  message: string;
};

/** @internal */
export const ComAtprotoServerDeleteAccountResponseBody$outboundSchema:
  z.ZodType<
    ComAtprotoServerDeleteAccountResponseBody$Outbound,
    z.ZodTypeDef,
    ComAtprotoServerDeleteAccountResponseBody
  > = z.instanceof(ComAtprotoServerDeleteAccountResponseBody)
    .transform(v => v.data$)
    .pipe(z.object({
      error: ComAtprotoServerDeleteAccountError$outboundSchema,
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoServerDeleteAccountResponseBody$ {
  /** @deprecated use `ComAtprotoServerDeleteAccountResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ComAtprotoServerDeleteAccountResponseBody$inboundSchema;
  /** @deprecated use `ComAtprotoServerDeleteAccountResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ComAtprotoServerDeleteAccountResponseBody$outboundSchema;
  /** @deprecated use `ComAtprotoServerDeleteAccountResponseBody$Outbound` instead. */
  export type Outbound = ComAtprotoServerDeleteAccountResponseBody$Outbound;
}
