/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type UnauthorizedComAtprotoSyncListBlobsResponseBodyErrorData = {
  error: "AuthMissing";
  message: string;
};

/**
 * Unauthorized
 */
export class UnauthorizedComAtprotoSyncListBlobsResponseBodyError
  extends Error
{
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$: UnauthorizedComAtprotoSyncListBlobsResponseBodyErrorData;

  constructor(err: UnauthorizedComAtprotoSyncListBlobsResponseBodyErrorData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "UnauthorizedComAtprotoSyncListBlobsResponseBodyError";
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
export type BadRequestComAtprotoSyncListBlobsResponseBodyErrorData = {
  error: ComAtprotoSyncListBlobsError;
  message: string;
};

/**
 * Bad Request
 */
export class BadRequestComAtprotoSyncListBlobsResponseBodyError extends Error {
  error: ComAtprotoSyncListBlobsError;

  /** The original data that was passed to this error instance. */
  data$: BadRequestComAtprotoSyncListBlobsResponseBodyErrorData;

  constructor(err: BadRequestComAtprotoSyncListBlobsResponseBodyErrorData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "BadRequestComAtprotoSyncListBlobsResponseBodyError";
  }
}

/** @internal */
export const UnauthorizedComAtprotoSyncListBlobsResponseBodyError$inboundSchema:
  z.ZodType<
    UnauthorizedComAtprotoSyncListBlobsResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.literal("AuthMissing"),
    message: z.string(),
  })
    .transform((v) => {
      return new UnauthorizedComAtprotoSyncListBlobsResponseBodyError(v);
    });

/** @internal */
export type UnauthorizedComAtprotoSyncListBlobsResponseBodyError$Outbound = {
  error: "AuthMissing";
  message: string;
};

/** @internal */
export const UnauthorizedComAtprotoSyncListBlobsResponseBodyError$outboundSchema:
  z.ZodType<
    UnauthorizedComAtprotoSyncListBlobsResponseBodyError$Outbound,
    z.ZodTypeDef,
    UnauthorizedComAtprotoSyncListBlobsResponseBodyError
  > = z.instanceof(UnauthorizedComAtprotoSyncListBlobsResponseBodyError)
    .transform(v => v.data$)
    .pipe(z.object({
      error: z.literal("AuthMissing").default("AuthMissing" as const),
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnauthorizedComAtprotoSyncListBlobsResponseBodyError$ {
  /** @deprecated use `UnauthorizedComAtprotoSyncListBlobsResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    UnauthorizedComAtprotoSyncListBlobsResponseBodyError$inboundSchema;
  /** @deprecated use `UnauthorizedComAtprotoSyncListBlobsResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    UnauthorizedComAtprotoSyncListBlobsResponseBodyError$outboundSchema;
  /** @deprecated use `UnauthorizedComAtprotoSyncListBlobsResponseBodyError$Outbound` instead. */
  export type Outbound =
    UnauthorizedComAtprotoSyncListBlobsResponseBodyError$Outbound;
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
export const BadRequestComAtprotoSyncListBlobsResponseBodyError$inboundSchema:
  z.ZodType<
    BadRequestComAtprotoSyncListBlobsResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: ComAtprotoSyncListBlobsError$inboundSchema,
    message: z.string(),
  })
    .transform((v) => {
      return new BadRequestComAtprotoSyncListBlobsResponseBodyError(v);
    });

/** @internal */
export type BadRequestComAtprotoSyncListBlobsResponseBodyError$Outbound = {
  error: string;
  message: string;
};

/** @internal */
export const BadRequestComAtprotoSyncListBlobsResponseBodyError$outboundSchema:
  z.ZodType<
    BadRequestComAtprotoSyncListBlobsResponseBodyError$Outbound,
    z.ZodTypeDef,
    BadRequestComAtprotoSyncListBlobsResponseBodyError
  > = z.instanceof(BadRequestComAtprotoSyncListBlobsResponseBodyError)
    .transform(v => v.data$)
    .pipe(z.object({
      error: ComAtprotoSyncListBlobsError$outboundSchema,
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BadRequestComAtprotoSyncListBlobsResponseBodyError$ {
  /** @deprecated use `BadRequestComAtprotoSyncListBlobsResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    BadRequestComAtprotoSyncListBlobsResponseBodyError$inboundSchema;
  /** @deprecated use `BadRequestComAtprotoSyncListBlobsResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    BadRequestComAtprotoSyncListBlobsResponseBodyError$outboundSchema;
  /** @deprecated use `BadRequestComAtprotoSyncListBlobsResponseBodyError$Outbound` instead. */
  export type Outbound =
    BadRequestComAtprotoSyncListBlobsResponseBodyError$Outbound;
}
