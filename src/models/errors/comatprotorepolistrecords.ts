/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type ComAtprotoRepoListRecordsAtprotoRepoResponseBodyData = {
  error: "AuthMissing";
  message: string;
};

/**
 * Unauthorized
 */
export class ComAtprotoRepoListRecordsAtprotoRepoResponseBody extends Error {
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$: ComAtprotoRepoListRecordsAtprotoRepoResponseBodyData;

  constructor(err: ComAtprotoRepoListRecordsAtprotoRepoResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "ComAtprotoRepoListRecordsAtprotoRepoResponseBody";
  }
}

export const ComAtprotoRepoListRecordsError = {
  InvalidRequest: "InvalidRequest",
  ExpiredToken: "ExpiredToken",
  InvalidToken: "InvalidToken",
} as const;
export type ComAtprotoRepoListRecordsError = ClosedEnum<
  typeof ComAtprotoRepoListRecordsError
>;

/**
 * Bad Request
 */
export type ComAtprotoRepoListRecordsResponseBodyData = {
  error: ComAtprotoRepoListRecordsError;
  message: string;
};

/**
 * Bad Request
 */
export class ComAtprotoRepoListRecordsResponseBody extends Error {
  error: ComAtprotoRepoListRecordsError;

  /** The original data that was passed to this error instance. */
  data$: ComAtprotoRepoListRecordsResponseBodyData;

  constructor(err: ComAtprotoRepoListRecordsResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "ComAtprotoRepoListRecordsResponseBody";
  }
}

/** @internal */
export const ComAtprotoRepoListRecordsAtprotoRepoResponseBody$inboundSchema:
  z.ZodType<
    ComAtprotoRepoListRecordsAtprotoRepoResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.literal("AuthMissing"),
    message: z.string(),
  })
    .transform((v) => {
      return new ComAtprotoRepoListRecordsAtprotoRepoResponseBody(v);
    });

/** @internal */
export type ComAtprotoRepoListRecordsAtprotoRepoResponseBody$Outbound = {
  error: "AuthMissing";
  message: string;
};

/** @internal */
export const ComAtprotoRepoListRecordsAtprotoRepoResponseBody$outboundSchema:
  z.ZodType<
    ComAtprotoRepoListRecordsAtprotoRepoResponseBody$Outbound,
    z.ZodTypeDef,
    ComAtprotoRepoListRecordsAtprotoRepoResponseBody
  > = z.instanceof(ComAtprotoRepoListRecordsAtprotoRepoResponseBody)
    .transform(v => v.data$)
    .pipe(z.object({
      error: z.literal("AuthMissing").default("AuthMissing" as const),
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoRepoListRecordsAtprotoRepoResponseBody$ {
  /** @deprecated use `ComAtprotoRepoListRecordsAtprotoRepoResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ComAtprotoRepoListRecordsAtprotoRepoResponseBody$inboundSchema;
  /** @deprecated use `ComAtprotoRepoListRecordsAtprotoRepoResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ComAtprotoRepoListRecordsAtprotoRepoResponseBody$outboundSchema;
  /** @deprecated use `ComAtprotoRepoListRecordsAtprotoRepoResponseBody$Outbound` instead. */
  export type Outbound =
    ComAtprotoRepoListRecordsAtprotoRepoResponseBody$Outbound;
}

/** @internal */
export const ComAtprotoRepoListRecordsError$inboundSchema: z.ZodNativeEnum<
  typeof ComAtprotoRepoListRecordsError
> = z.nativeEnum(ComAtprotoRepoListRecordsError);

/** @internal */
export const ComAtprotoRepoListRecordsError$outboundSchema: z.ZodNativeEnum<
  typeof ComAtprotoRepoListRecordsError
> = ComAtprotoRepoListRecordsError$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoRepoListRecordsError$ {
  /** @deprecated use `ComAtprotoRepoListRecordsError$inboundSchema` instead. */
  export const inboundSchema = ComAtprotoRepoListRecordsError$inboundSchema;
  /** @deprecated use `ComAtprotoRepoListRecordsError$outboundSchema` instead. */
  export const outboundSchema = ComAtprotoRepoListRecordsError$outboundSchema;
}

/** @internal */
export const ComAtprotoRepoListRecordsResponseBody$inboundSchema: z.ZodType<
  ComAtprotoRepoListRecordsResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  error: ComAtprotoRepoListRecordsError$inboundSchema,
  message: z.string(),
})
  .transform((v) => {
    return new ComAtprotoRepoListRecordsResponseBody(v);
  });

/** @internal */
export type ComAtprotoRepoListRecordsResponseBody$Outbound = {
  error: string;
  message: string;
};

/** @internal */
export const ComAtprotoRepoListRecordsResponseBody$outboundSchema: z.ZodType<
  ComAtprotoRepoListRecordsResponseBody$Outbound,
  z.ZodTypeDef,
  ComAtprotoRepoListRecordsResponseBody
> = z.instanceof(ComAtprotoRepoListRecordsResponseBody)
  .transform(v => v.data$)
  .pipe(z.object({
    error: ComAtprotoRepoListRecordsError$outboundSchema,
    message: z.string(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoRepoListRecordsResponseBody$ {
  /** @deprecated use `ComAtprotoRepoListRecordsResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ComAtprotoRepoListRecordsResponseBody$inboundSchema;
  /** @deprecated use `ComAtprotoRepoListRecordsResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ComAtprotoRepoListRecordsResponseBody$outboundSchema;
  /** @deprecated use `ComAtprotoRepoListRecordsResponseBody$Outbound` instead. */
  export type Outbound = ComAtprotoRepoListRecordsResponseBody$Outbound;
}
