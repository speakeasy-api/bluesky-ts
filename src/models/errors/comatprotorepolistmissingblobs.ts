/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type ComAtprotoRepoListMissingBlobsComAtprotoRepoResponseBodyData = {
  error: "AuthMissing";
  message: string;
};

/**
 * Unauthorized
 */
export class ComAtprotoRepoListMissingBlobsComAtprotoRepoResponseBody
  extends Error
{
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$: ComAtprotoRepoListMissingBlobsComAtprotoRepoResponseBodyData;

  constructor(
    err: ComAtprotoRepoListMissingBlobsComAtprotoRepoResponseBodyData,
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "ComAtprotoRepoListMissingBlobsComAtprotoRepoResponseBody";
  }
}

export const ComAtprotoRepoListMissingBlobsError = {
  InvalidRequest: "InvalidRequest",
  ExpiredToken: "ExpiredToken",
  InvalidToken: "InvalidToken",
} as const;
export type ComAtprotoRepoListMissingBlobsError = ClosedEnum<
  typeof ComAtprotoRepoListMissingBlobsError
>;

/**
 * Bad Request
 */
export type ComAtprotoRepoListMissingBlobsResponseBodyData = {
  error: ComAtprotoRepoListMissingBlobsError;
  message: string;
};

/**
 * Bad Request
 */
export class ComAtprotoRepoListMissingBlobsResponseBody extends Error {
  error: ComAtprotoRepoListMissingBlobsError;

  /** The original data that was passed to this error instance. */
  data$: ComAtprotoRepoListMissingBlobsResponseBodyData;

  constructor(err: ComAtprotoRepoListMissingBlobsResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "ComAtprotoRepoListMissingBlobsResponseBody";
  }
}

/** @internal */
export const ComAtprotoRepoListMissingBlobsComAtprotoRepoResponseBody$inboundSchema:
  z.ZodType<
    ComAtprotoRepoListMissingBlobsComAtprotoRepoResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.literal("AuthMissing"),
    message: z.string(),
  })
    .transform((v) => {
      return new ComAtprotoRepoListMissingBlobsComAtprotoRepoResponseBody(v);
    });

/** @internal */
export type ComAtprotoRepoListMissingBlobsComAtprotoRepoResponseBody$Outbound =
  {
    error: "AuthMissing";
    message: string;
  };

/** @internal */
export const ComAtprotoRepoListMissingBlobsComAtprotoRepoResponseBody$outboundSchema:
  z.ZodType<
    ComAtprotoRepoListMissingBlobsComAtprotoRepoResponseBody$Outbound,
    z.ZodTypeDef,
    ComAtprotoRepoListMissingBlobsComAtprotoRepoResponseBody
  > = z.instanceof(ComAtprotoRepoListMissingBlobsComAtprotoRepoResponseBody)
    .transform(v => v.data$)
    .pipe(z.object({
      error: z.literal("AuthMissing").default("AuthMissing" as const),
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoRepoListMissingBlobsComAtprotoRepoResponseBody$ {
  /** @deprecated use `ComAtprotoRepoListMissingBlobsComAtprotoRepoResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ComAtprotoRepoListMissingBlobsComAtprotoRepoResponseBody$inboundSchema;
  /** @deprecated use `ComAtprotoRepoListMissingBlobsComAtprotoRepoResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ComAtprotoRepoListMissingBlobsComAtprotoRepoResponseBody$outboundSchema;
  /** @deprecated use `ComAtprotoRepoListMissingBlobsComAtprotoRepoResponseBody$Outbound` instead. */
  export type Outbound =
    ComAtprotoRepoListMissingBlobsComAtprotoRepoResponseBody$Outbound;
}

/** @internal */
export const ComAtprotoRepoListMissingBlobsError$inboundSchema: z.ZodNativeEnum<
  typeof ComAtprotoRepoListMissingBlobsError
> = z.nativeEnum(ComAtprotoRepoListMissingBlobsError);

/** @internal */
export const ComAtprotoRepoListMissingBlobsError$outboundSchema:
  z.ZodNativeEnum<typeof ComAtprotoRepoListMissingBlobsError> =
    ComAtprotoRepoListMissingBlobsError$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoRepoListMissingBlobsError$ {
  /** @deprecated use `ComAtprotoRepoListMissingBlobsError$inboundSchema` instead. */
  export const inboundSchema =
    ComAtprotoRepoListMissingBlobsError$inboundSchema;
  /** @deprecated use `ComAtprotoRepoListMissingBlobsError$outboundSchema` instead. */
  export const outboundSchema =
    ComAtprotoRepoListMissingBlobsError$outboundSchema;
}

/** @internal */
export const ComAtprotoRepoListMissingBlobsResponseBody$inboundSchema:
  z.ZodType<ComAtprotoRepoListMissingBlobsResponseBody, z.ZodTypeDef, unknown> =
    z.object({
      error: ComAtprotoRepoListMissingBlobsError$inboundSchema,
      message: z.string(),
    })
      .transform((v) => {
        return new ComAtprotoRepoListMissingBlobsResponseBody(v);
      });

/** @internal */
export type ComAtprotoRepoListMissingBlobsResponseBody$Outbound = {
  error: string;
  message: string;
};

/** @internal */
export const ComAtprotoRepoListMissingBlobsResponseBody$outboundSchema:
  z.ZodType<
    ComAtprotoRepoListMissingBlobsResponseBody$Outbound,
    z.ZodTypeDef,
    ComAtprotoRepoListMissingBlobsResponseBody
  > = z.instanceof(ComAtprotoRepoListMissingBlobsResponseBody)
    .transform(v => v.data$)
    .pipe(z.object({
      error: ComAtprotoRepoListMissingBlobsError$outboundSchema,
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoRepoListMissingBlobsResponseBody$ {
  /** @deprecated use `ComAtprotoRepoListMissingBlobsResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ComAtprotoRepoListMissingBlobsResponseBody$inboundSchema;
  /** @deprecated use `ComAtprotoRepoListMissingBlobsResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ComAtprotoRepoListMissingBlobsResponseBody$outboundSchema;
  /** @deprecated use `ComAtprotoRepoListMissingBlobsResponseBody$Outbound` instead. */
  export type Outbound = ComAtprotoRepoListMissingBlobsResponseBody$Outbound;
}
