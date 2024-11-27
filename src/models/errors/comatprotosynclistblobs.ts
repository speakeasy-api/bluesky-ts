/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type ComAtprotoSyncListBlobsAtprotoSyncResponseBodyData = {
  error: "AuthMissing";
  message: string;
};

/**
 * Unauthorized
 */
export class ComAtprotoSyncListBlobsAtprotoSyncResponseBody extends Error {
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$: ComAtprotoSyncListBlobsAtprotoSyncResponseBodyData;

  constructor(err: ComAtprotoSyncListBlobsAtprotoSyncResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "ComAtprotoSyncListBlobsAtprotoSyncResponseBody";
  }
}

export const ComAtprotoSyncListBlobsError = {
  InvalidRequest: "InvalidRequest",
  ExpiredToken: "ExpiredToken",
  InvalidToken: "InvalidToken",
  RepoNotFound: "RepoNotFound",
  RepoTakendown: "RepoTakendown",
  RepoSuspended: "RepoSuspended",
  RepoDeactivated: "RepoDeactivated",
} as const;
export type ComAtprotoSyncListBlobsError = ClosedEnum<
  typeof ComAtprotoSyncListBlobsError
>;

/**
 * Bad Request
 */
export type ComAtprotoSyncListBlobsResponseBodyData = {
  error: ComAtprotoSyncListBlobsError;
  message: string;
};

/**
 * Bad Request
 */
export class ComAtprotoSyncListBlobsResponseBody extends Error {
  error: ComAtprotoSyncListBlobsError;

  /** The original data that was passed to this error instance. */
  data$: ComAtprotoSyncListBlobsResponseBodyData;

  constructor(err: ComAtprotoSyncListBlobsResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "ComAtprotoSyncListBlobsResponseBody";
  }
}

/** @internal */
export const ComAtprotoSyncListBlobsAtprotoSyncResponseBody$inboundSchema:
  z.ZodType<
    ComAtprotoSyncListBlobsAtprotoSyncResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.literal("AuthMissing"),
    message: z.string(),
  })
    .transform((v) => {
      return new ComAtprotoSyncListBlobsAtprotoSyncResponseBody(v);
    });

/** @internal */
export type ComAtprotoSyncListBlobsAtprotoSyncResponseBody$Outbound = {
  error: "AuthMissing";
  message: string;
};

/** @internal */
export const ComAtprotoSyncListBlobsAtprotoSyncResponseBody$outboundSchema:
  z.ZodType<
    ComAtprotoSyncListBlobsAtprotoSyncResponseBody$Outbound,
    z.ZodTypeDef,
    ComAtprotoSyncListBlobsAtprotoSyncResponseBody
  > = z.instanceof(ComAtprotoSyncListBlobsAtprotoSyncResponseBody)
    .transform(v => v.data$)
    .pipe(z.object({
      error: z.literal("AuthMissing").default("AuthMissing" as const),
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoSyncListBlobsAtprotoSyncResponseBody$ {
  /** @deprecated use `ComAtprotoSyncListBlobsAtprotoSyncResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ComAtprotoSyncListBlobsAtprotoSyncResponseBody$inboundSchema;
  /** @deprecated use `ComAtprotoSyncListBlobsAtprotoSyncResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ComAtprotoSyncListBlobsAtprotoSyncResponseBody$outboundSchema;
  /** @deprecated use `ComAtprotoSyncListBlobsAtprotoSyncResponseBody$Outbound` instead. */
  export type Outbound =
    ComAtprotoSyncListBlobsAtprotoSyncResponseBody$Outbound;
}

/** @internal */
export const ComAtprotoSyncListBlobsError$inboundSchema: z.ZodNativeEnum<
  typeof ComAtprotoSyncListBlobsError
> = z.nativeEnum(ComAtprotoSyncListBlobsError);

/** @internal */
export const ComAtprotoSyncListBlobsError$outboundSchema: z.ZodNativeEnum<
  typeof ComAtprotoSyncListBlobsError
> = ComAtprotoSyncListBlobsError$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoSyncListBlobsError$ {
  /** @deprecated use `ComAtprotoSyncListBlobsError$inboundSchema` instead. */
  export const inboundSchema = ComAtprotoSyncListBlobsError$inboundSchema;
  /** @deprecated use `ComAtprotoSyncListBlobsError$outboundSchema` instead. */
  export const outboundSchema = ComAtprotoSyncListBlobsError$outboundSchema;
}

/** @internal */
export const ComAtprotoSyncListBlobsResponseBody$inboundSchema: z.ZodType<
  ComAtprotoSyncListBlobsResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  error: ComAtprotoSyncListBlobsError$inboundSchema,
  message: z.string(),
})
  .transform((v) => {
    return new ComAtprotoSyncListBlobsResponseBody(v);
  });

/** @internal */
export type ComAtprotoSyncListBlobsResponseBody$Outbound = {
  error: string;
  message: string;
};

/** @internal */
export const ComAtprotoSyncListBlobsResponseBody$outboundSchema: z.ZodType<
  ComAtprotoSyncListBlobsResponseBody$Outbound,
  z.ZodTypeDef,
  ComAtprotoSyncListBlobsResponseBody
> = z.instanceof(ComAtprotoSyncListBlobsResponseBody)
  .transform(v => v.data$)
  .pipe(z.object({
    error: ComAtprotoSyncListBlobsError$outboundSchema,
    message: z.string(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoSyncListBlobsResponseBody$ {
  /** @deprecated use `ComAtprotoSyncListBlobsResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ComAtprotoSyncListBlobsResponseBody$inboundSchema;
  /** @deprecated use `ComAtprotoSyncListBlobsResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ComAtprotoSyncListBlobsResponseBody$outboundSchema;
  /** @deprecated use `ComAtprotoSyncListBlobsResponseBody$Outbound` instead. */
  export type Outbound = ComAtprotoSyncListBlobsResponseBody$Outbound;
}
