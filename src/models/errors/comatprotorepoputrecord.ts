/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type ComAtprotoRepoPutRecordComAtprotoRepoResponseBodyData = {
  error: "AuthMissing";
  message: string;
};

/**
 * Unauthorized
 */
export class ComAtprotoRepoPutRecordComAtprotoRepoResponseBody extends Error {
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$: ComAtprotoRepoPutRecordComAtprotoRepoResponseBodyData;

  constructor(err: ComAtprotoRepoPutRecordComAtprotoRepoResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "ComAtprotoRepoPutRecordComAtprotoRepoResponseBody";
  }
}

export const ComAtprotoRepoPutRecordError = {
  InvalidRequest: "InvalidRequest",
  ExpiredToken: "ExpiredToken",
  InvalidToken: "InvalidToken",
  InvalidSwap: "InvalidSwap",
} as const;
export type ComAtprotoRepoPutRecordError = ClosedEnum<
  typeof ComAtprotoRepoPutRecordError
>;

/**
 * Bad Request
 */
export type ComAtprotoRepoPutRecordResponseBodyData = {
  error: ComAtprotoRepoPutRecordError;
  message: string;
};

/**
 * Bad Request
 */
export class ComAtprotoRepoPutRecordResponseBody extends Error {
  error: ComAtprotoRepoPutRecordError;

  /** The original data that was passed to this error instance. */
  data$: ComAtprotoRepoPutRecordResponseBodyData;

  constructor(err: ComAtprotoRepoPutRecordResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "ComAtprotoRepoPutRecordResponseBody";
  }
}

/** @internal */
export const ComAtprotoRepoPutRecordComAtprotoRepoResponseBody$inboundSchema:
  z.ZodType<
    ComAtprotoRepoPutRecordComAtprotoRepoResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.literal("AuthMissing"),
    message: z.string(),
  })
    .transform((v) => {
      return new ComAtprotoRepoPutRecordComAtprotoRepoResponseBody(v);
    });

/** @internal */
export type ComAtprotoRepoPutRecordComAtprotoRepoResponseBody$Outbound = {
  error: "AuthMissing";
  message: string;
};

/** @internal */
export const ComAtprotoRepoPutRecordComAtprotoRepoResponseBody$outboundSchema:
  z.ZodType<
    ComAtprotoRepoPutRecordComAtprotoRepoResponseBody$Outbound,
    z.ZodTypeDef,
    ComAtprotoRepoPutRecordComAtprotoRepoResponseBody
  > = z.instanceof(ComAtprotoRepoPutRecordComAtprotoRepoResponseBody)
    .transform(v => v.data$)
    .pipe(z.object({
      error: z.literal("AuthMissing").default("AuthMissing" as const),
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoRepoPutRecordComAtprotoRepoResponseBody$ {
  /** @deprecated use `ComAtprotoRepoPutRecordComAtprotoRepoResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ComAtprotoRepoPutRecordComAtprotoRepoResponseBody$inboundSchema;
  /** @deprecated use `ComAtprotoRepoPutRecordComAtprotoRepoResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ComAtprotoRepoPutRecordComAtprotoRepoResponseBody$outboundSchema;
  /** @deprecated use `ComAtprotoRepoPutRecordComAtprotoRepoResponseBody$Outbound` instead. */
  export type Outbound =
    ComAtprotoRepoPutRecordComAtprotoRepoResponseBody$Outbound;
}

/** @internal */
export const ComAtprotoRepoPutRecordError$inboundSchema: z.ZodNativeEnum<
  typeof ComAtprotoRepoPutRecordError
> = z.nativeEnum(ComAtprotoRepoPutRecordError);

/** @internal */
export const ComAtprotoRepoPutRecordError$outboundSchema: z.ZodNativeEnum<
  typeof ComAtprotoRepoPutRecordError
> = ComAtprotoRepoPutRecordError$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoRepoPutRecordError$ {
  /** @deprecated use `ComAtprotoRepoPutRecordError$inboundSchema` instead. */
  export const inboundSchema = ComAtprotoRepoPutRecordError$inboundSchema;
  /** @deprecated use `ComAtprotoRepoPutRecordError$outboundSchema` instead. */
  export const outboundSchema = ComAtprotoRepoPutRecordError$outboundSchema;
}

/** @internal */
export const ComAtprotoRepoPutRecordResponseBody$inboundSchema: z.ZodType<
  ComAtprotoRepoPutRecordResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  error: ComAtprotoRepoPutRecordError$inboundSchema,
  message: z.string(),
})
  .transform((v) => {
    return new ComAtprotoRepoPutRecordResponseBody(v);
  });

/** @internal */
export type ComAtprotoRepoPutRecordResponseBody$Outbound = {
  error: string;
  message: string;
};

/** @internal */
export const ComAtprotoRepoPutRecordResponseBody$outboundSchema: z.ZodType<
  ComAtprotoRepoPutRecordResponseBody$Outbound,
  z.ZodTypeDef,
  ComAtprotoRepoPutRecordResponseBody
> = z.instanceof(ComAtprotoRepoPutRecordResponseBody)
  .transform(v => v.data$)
  .pipe(z.object({
    error: ComAtprotoRepoPutRecordError$outboundSchema,
    message: z.string(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoRepoPutRecordResponseBody$ {
  /** @deprecated use `ComAtprotoRepoPutRecordResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ComAtprotoRepoPutRecordResponseBody$inboundSchema;
  /** @deprecated use `ComAtprotoRepoPutRecordResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ComAtprotoRepoPutRecordResponseBody$outboundSchema;
  /** @deprecated use `ComAtprotoRepoPutRecordResponseBody$Outbound` instead. */
  export type Outbound = ComAtprotoRepoPutRecordResponseBody$Outbound;
}
