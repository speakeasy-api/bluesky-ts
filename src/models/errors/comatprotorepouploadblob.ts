/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type ComAtprotoRepoUploadBlobAtprotoRepoResponseBodyData = {
  error: "AuthMissing";
  message: string;
};

/**
 * Unauthorized
 */
export class ComAtprotoRepoUploadBlobAtprotoRepoResponseBody extends Error {
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$: ComAtprotoRepoUploadBlobAtprotoRepoResponseBodyData;

  constructor(err: ComAtprotoRepoUploadBlobAtprotoRepoResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "ComAtprotoRepoUploadBlobAtprotoRepoResponseBody";
  }
}

export const ComAtprotoRepoUploadBlobError = {
  InvalidRequest: "InvalidRequest",
  ExpiredToken: "ExpiredToken",
  InvalidToken: "InvalidToken",
} as const;
export type ComAtprotoRepoUploadBlobError = ClosedEnum<
  typeof ComAtprotoRepoUploadBlobError
>;

/**
 * Bad Request
 */
export type ComAtprotoRepoUploadBlobResponseBodyData = {
  error: ComAtprotoRepoUploadBlobError;
  message: string;
};

/**
 * Bad Request
 */
export class ComAtprotoRepoUploadBlobResponseBody extends Error {
  error: ComAtprotoRepoUploadBlobError;

  /** The original data that was passed to this error instance. */
  data$: ComAtprotoRepoUploadBlobResponseBodyData;

  constructor(err: ComAtprotoRepoUploadBlobResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "ComAtprotoRepoUploadBlobResponseBody";
  }
}

/** @internal */
export const ComAtprotoRepoUploadBlobAtprotoRepoResponseBody$inboundSchema:
  z.ZodType<
    ComAtprotoRepoUploadBlobAtprotoRepoResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.literal("AuthMissing"),
    message: z.string(),
  })
    .transform((v) => {
      return new ComAtprotoRepoUploadBlobAtprotoRepoResponseBody(v);
    });

/** @internal */
export type ComAtprotoRepoUploadBlobAtprotoRepoResponseBody$Outbound = {
  error: "AuthMissing";
  message: string;
};

/** @internal */
export const ComAtprotoRepoUploadBlobAtprotoRepoResponseBody$outboundSchema:
  z.ZodType<
    ComAtprotoRepoUploadBlobAtprotoRepoResponseBody$Outbound,
    z.ZodTypeDef,
    ComAtprotoRepoUploadBlobAtprotoRepoResponseBody
  > = z.instanceof(ComAtprotoRepoUploadBlobAtprotoRepoResponseBody)
    .transform(v => v.data$)
    .pipe(z.object({
      error: z.literal("AuthMissing").default("AuthMissing" as const),
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoRepoUploadBlobAtprotoRepoResponseBody$ {
  /** @deprecated use `ComAtprotoRepoUploadBlobAtprotoRepoResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ComAtprotoRepoUploadBlobAtprotoRepoResponseBody$inboundSchema;
  /** @deprecated use `ComAtprotoRepoUploadBlobAtprotoRepoResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ComAtprotoRepoUploadBlobAtprotoRepoResponseBody$outboundSchema;
  /** @deprecated use `ComAtprotoRepoUploadBlobAtprotoRepoResponseBody$Outbound` instead. */
  export type Outbound =
    ComAtprotoRepoUploadBlobAtprotoRepoResponseBody$Outbound;
}

/** @internal */
export const ComAtprotoRepoUploadBlobError$inboundSchema: z.ZodNativeEnum<
  typeof ComAtprotoRepoUploadBlobError
> = z.nativeEnum(ComAtprotoRepoUploadBlobError);

/** @internal */
export const ComAtprotoRepoUploadBlobError$outboundSchema: z.ZodNativeEnum<
  typeof ComAtprotoRepoUploadBlobError
> = ComAtprotoRepoUploadBlobError$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoRepoUploadBlobError$ {
  /** @deprecated use `ComAtprotoRepoUploadBlobError$inboundSchema` instead. */
  export const inboundSchema = ComAtprotoRepoUploadBlobError$inboundSchema;
  /** @deprecated use `ComAtprotoRepoUploadBlobError$outboundSchema` instead. */
  export const outboundSchema = ComAtprotoRepoUploadBlobError$outboundSchema;
}

/** @internal */
export const ComAtprotoRepoUploadBlobResponseBody$inboundSchema: z.ZodType<
  ComAtprotoRepoUploadBlobResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  error: ComAtprotoRepoUploadBlobError$inboundSchema,
  message: z.string(),
})
  .transform((v) => {
    return new ComAtprotoRepoUploadBlobResponseBody(v);
  });

/** @internal */
export type ComAtprotoRepoUploadBlobResponseBody$Outbound = {
  error: string;
  message: string;
};

/** @internal */
export const ComAtprotoRepoUploadBlobResponseBody$outboundSchema: z.ZodType<
  ComAtprotoRepoUploadBlobResponseBody$Outbound,
  z.ZodTypeDef,
  ComAtprotoRepoUploadBlobResponseBody
> = z.instanceof(ComAtprotoRepoUploadBlobResponseBody)
  .transform(v => v.data$)
  .pipe(z.object({
    error: ComAtprotoRepoUploadBlobError$outboundSchema,
    message: z.string(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoRepoUploadBlobResponseBody$ {
  /** @deprecated use `ComAtprotoRepoUploadBlobResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ComAtprotoRepoUploadBlobResponseBody$inboundSchema;
  /** @deprecated use `ComAtprotoRepoUploadBlobResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ComAtprotoRepoUploadBlobResponseBody$outboundSchema;
  /** @deprecated use `ComAtprotoRepoUploadBlobResponseBody$Outbound` instead. */
  export type Outbound = ComAtprotoRepoUploadBlobResponseBody$Outbound;
}
