/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type ComAtprotoRepoListRecordsReposResponseBodyData = {
  error: "AuthMissing";
  message: string;
};

/**
 * Unauthorized
 */
export class ComAtprotoRepoListRecordsReposResponseBody extends Error {
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$: ComAtprotoRepoListRecordsReposResponseBodyData;

  constructor(err: ComAtprotoRepoListRecordsReposResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "ComAtprotoRepoListRecordsReposResponseBody";
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
export const ComAtprotoRepoListRecordsReposResponseBody$inboundSchema:
  z.ZodType<ComAtprotoRepoListRecordsReposResponseBody, z.ZodTypeDef, unknown> =
    z.object({
      error: z.literal("AuthMissing"),
      message: z.string(),
    })
      .transform((v) => {
        return new ComAtprotoRepoListRecordsReposResponseBody(v);
      });

/** @internal */
export type ComAtprotoRepoListRecordsReposResponseBody$Outbound = {
  error: "AuthMissing";
  message: string;
};

/** @internal */
export const ComAtprotoRepoListRecordsReposResponseBody$outboundSchema:
  z.ZodType<
    ComAtprotoRepoListRecordsReposResponseBody$Outbound,
    z.ZodTypeDef,
    ComAtprotoRepoListRecordsReposResponseBody
  > = z.instanceof(ComAtprotoRepoListRecordsReposResponseBody)
    .transform(v => v.data$)
    .pipe(z.object({
      error: z.literal("AuthMissing").default("AuthMissing" as const),
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoRepoListRecordsReposResponseBody$ {
  /** @deprecated use `ComAtprotoRepoListRecordsReposResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ComAtprotoRepoListRecordsReposResponseBody$inboundSchema;
  /** @deprecated use `ComAtprotoRepoListRecordsReposResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ComAtprotoRepoListRecordsReposResponseBody$outboundSchema;
  /** @deprecated use `ComAtprotoRepoListRecordsReposResponseBody$Outbound` instead. */
  export type Outbound = ComAtprotoRepoListRecordsReposResponseBody$Outbound;
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
