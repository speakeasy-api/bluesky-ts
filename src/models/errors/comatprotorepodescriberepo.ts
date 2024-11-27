/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type ComAtprotoRepoDescribeRepoAtprotoRepoResponseBodyData = {
  error: "AuthMissing";
  message: string;
};

/**
 * Unauthorized
 */
export class ComAtprotoRepoDescribeRepoAtprotoRepoResponseBody extends Error {
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$: ComAtprotoRepoDescribeRepoAtprotoRepoResponseBodyData;

  constructor(err: ComAtprotoRepoDescribeRepoAtprotoRepoResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "ComAtprotoRepoDescribeRepoAtprotoRepoResponseBody";
  }
}

export const ComAtprotoRepoDescribeRepoError = {
  InvalidRequest: "InvalidRequest",
  ExpiredToken: "ExpiredToken",
  InvalidToken: "InvalidToken",
} as const;
export type ComAtprotoRepoDescribeRepoError = ClosedEnum<
  typeof ComAtprotoRepoDescribeRepoError
>;

/**
 * Bad Request
 */
export type ComAtprotoRepoDescribeRepoResponseBodyData = {
  error: ComAtprotoRepoDescribeRepoError;
  message: string;
};

/**
 * Bad Request
 */
export class ComAtprotoRepoDescribeRepoResponseBody extends Error {
  error: ComAtprotoRepoDescribeRepoError;

  /** The original data that was passed to this error instance. */
  data$: ComAtprotoRepoDescribeRepoResponseBodyData;

  constructor(err: ComAtprotoRepoDescribeRepoResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "ComAtprotoRepoDescribeRepoResponseBody";
  }
}

/** @internal */
export const ComAtprotoRepoDescribeRepoAtprotoRepoResponseBody$inboundSchema:
  z.ZodType<
    ComAtprotoRepoDescribeRepoAtprotoRepoResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.literal("AuthMissing"),
    message: z.string(),
  })
    .transform((v) => {
      return new ComAtprotoRepoDescribeRepoAtprotoRepoResponseBody(v);
    });

/** @internal */
export type ComAtprotoRepoDescribeRepoAtprotoRepoResponseBody$Outbound = {
  error: "AuthMissing";
  message: string;
};

/** @internal */
export const ComAtprotoRepoDescribeRepoAtprotoRepoResponseBody$outboundSchema:
  z.ZodType<
    ComAtprotoRepoDescribeRepoAtprotoRepoResponseBody$Outbound,
    z.ZodTypeDef,
    ComAtprotoRepoDescribeRepoAtprotoRepoResponseBody
  > = z.instanceof(ComAtprotoRepoDescribeRepoAtprotoRepoResponseBody)
    .transform(v => v.data$)
    .pipe(z.object({
      error: z.literal("AuthMissing").default("AuthMissing" as const),
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoRepoDescribeRepoAtprotoRepoResponseBody$ {
  /** @deprecated use `ComAtprotoRepoDescribeRepoAtprotoRepoResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ComAtprotoRepoDescribeRepoAtprotoRepoResponseBody$inboundSchema;
  /** @deprecated use `ComAtprotoRepoDescribeRepoAtprotoRepoResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ComAtprotoRepoDescribeRepoAtprotoRepoResponseBody$outboundSchema;
  /** @deprecated use `ComAtprotoRepoDescribeRepoAtprotoRepoResponseBody$Outbound` instead. */
  export type Outbound =
    ComAtprotoRepoDescribeRepoAtprotoRepoResponseBody$Outbound;
}

/** @internal */
export const ComAtprotoRepoDescribeRepoError$inboundSchema: z.ZodNativeEnum<
  typeof ComAtprotoRepoDescribeRepoError
> = z.nativeEnum(ComAtprotoRepoDescribeRepoError);

/** @internal */
export const ComAtprotoRepoDescribeRepoError$outboundSchema: z.ZodNativeEnum<
  typeof ComAtprotoRepoDescribeRepoError
> = ComAtprotoRepoDescribeRepoError$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoRepoDescribeRepoError$ {
  /** @deprecated use `ComAtprotoRepoDescribeRepoError$inboundSchema` instead. */
  export const inboundSchema = ComAtprotoRepoDescribeRepoError$inboundSchema;
  /** @deprecated use `ComAtprotoRepoDescribeRepoError$outboundSchema` instead. */
  export const outboundSchema = ComAtprotoRepoDescribeRepoError$outboundSchema;
}

/** @internal */
export const ComAtprotoRepoDescribeRepoResponseBody$inboundSchema: z.ZodType<
  ComAtprotoRepoDescribeRepoResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  error: ComAtprotoRepoDescribeRepoError$inboundSchema,
  message: z.string(),
})
  .transform((v) => {
    return new ComAtprotoRepoDescribeRepoResponseBody(v);
  });

/** @internal */
export type ComAtprotoRepoDescribeRepoResponseBody$Outbound = {
  error: string;
  message: string;
};

/** @internal */
export const ComAtprotoRepoDescribeRepoResponseBody$outboundSchema: z.ZodType<
  ComAtprotoRepoDescribeRepoResponseBody$Outbound,
  z.ZodTypeDef,
  ComAtprotoRepoDescribeRepoResponseBody
> = z.instanceof(ComAtprotoRepoDescribeRepoResponseBody)
  .transform(v => v.data$)
  .pipe(z.object({
    error: ComAtprotoRepoDescribeRepoError$outboundSchema,
    message: z.string(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoRepoDescribeRepoResponseBody$ {
  /** @deprecated use `ComAtprotoRepoDescribeRepoResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ComAtprotoRepoDescribeRepoResponseBody$inboundSchema;
  /** @deprecated use `ComAtprotoRepoDescribeRepoResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ComAtprotoRepoDescribeRepoResponseBody$outboundSchema;
  /** @deprecated use `ComAtprotoRepoDescribeRepoResponseBody$Outbound` instead. */
  export type Outbound = ComAtprotoRepoDescribeRepoResponseBody$Outbound;
}
