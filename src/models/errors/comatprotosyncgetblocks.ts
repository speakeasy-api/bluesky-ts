/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type UnauthorizedComAtprotoSyncGetBlocksResponseBodyErrorData = {
  error: "AuthMissing";
  message: string;
};

/**
 * Unauthorized
 */
export class UnauthorizedComAtprotoSyncGetBlocksResponseBodyError
  extends Error
{
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$: UnauthorizedComAtprotoSyncGetBlocksResponseBodyErrorData;

  constructor(err: UnauthorizedComAtprotoSyncGetBlocksResponseBodyErrorData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "UnauthorizedComAtprotoSyncGetBlocksResponseBodyError";
  }
}

export const ComAtprotoSyncGetBlocksError = {
  InvalidRequest: "InvalidRequest",
  ExpiredToken: "ExpiredToken",
  InvalidToken: "InvalidToken",
  BlockNotFound: "BlockNotFound",
  RepoNotFound: "RepoNotFound",
  RepoTakendown: "RepoTakendown",
  RepoSuspended: "RepoSuspended",
  RepoDeactivated: "RepoDeactivated",
} as const;
export type ComAtprotoSyncGetBlocksError = ClosedEnum<
  typeof ComAtprotoSyncGetBlocksError
>;

/**
 * Bad Request
 */
export type BadRequestComAtprotoSyncGetBlocksResponseBodyErrorData = {
  error: ComAtprotoSyncGetBlocksError;
  message: string;
};

/**
 * Bad Request
 */
export class BadRequestComAtprotoSyncGetBlocksResponseBodyError extends Error {
  error: ComAtprotoSyncGetBlocksError;

  /** The original data that was passed to this error instance. */
  data$: BadRequestComAtprotoSyncGetBlocksResponseBodyErrorData;

  constructor(err: BadRequestComAtprotoSyncGetBlocksResponseBodyErrorData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "BadRequestComAtprotoSyncGetBlocksResponseBodyError";
  }
}

/** @internal */
export const UnauthorizedComAtprotoSyncGetBlocksResponseBodyError$inboundSchema:
  z.ZodType<
    UnauthorizedComAtprotoSyncGetBlocksResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.literal("AuthMissing"),
    message: z.string(),
  })
    .transform((v) => {
      return new UnauthorizedComAtprotoSyncGetBlocksResponseBodyError(v);
    });

/** @internal */
export type UnauthorizedComAtprotoSyncGetBlocksResponseBodyError$Outbound = {
  error: "AuthMissing";
  message: string;
};

/** @internal */
export const UnauthorizedComAtprotoSyncGetBlocksResponseBodyError$outboundSchema:
  z.ZodType<
    UnauthorizedComAtprotoSyncGetBlocksResponseBodyError$Outbound,
    z.ZodTypeDef,
    UnauthorizedComAtprotoSyncGetBlocksResponseBodyError
  > = z.instanceof(UnauthorizedComAtprotoSyncGetBlocksResponseBodyError)
    .transform(v => v.data$)
    .pipe(z.object({
      error: z.literal("AuthMissing").default("AuthMissing" as const),
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnauthorizedComAtprotoSyncGetBlocksResponseBodyError$ {
  /** @deprecated use `UnauthorizedComAtprotoSyncGetBlocksResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    UnauthorizedComAtprotoSyncGetBlocksResponseBodyError$inboundSchema;
  /** @deprecated use `UnauthorizedComAtprotoSyncGetBlocksResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    UnauthorizedComAtprotoSyncGetBlocksResponseBodyError$outboundSchema;
  /** @deprecated use `UnauthorizedComAtprotoSyncGetBlocksResponseBodyError$Outbound` instead. */
  export type Outbound =
    UnauthorizedComAtprotoSyncGetBlocksResponseBodyError$Outbound;
}

/** @internal */
export const ComAtprotoSyncGetBlocksError$inboundSchema: z.ZodNativeEnum<
  typeof ComAtprotoSyncGetBlocksError
> = z.nativeEnum(ComAtprotoSyncGetBlocksError);

/** @internal */
export const ComAtprotoSyncGetBlocksError$outboundSchema: z.ZodNativeEnum<
  typeof ComAtprotoSyncGetBlocksError
> = ComAtprotoSyncGetBlocksError$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoSyncGetBlocksError$ {
  /** @deprecated use `ComAtprotoSyncGetBlocksError$inboundSchema` instead. */
  export const inboundSchema = ComAtprotoSyncGetBlocksError$inboundSchema;
  /** @deprecated use `ComAtprotoSyncGetBlocksError$outboundSchema` instead. */
  export const outboundSchema = ComAtprotoSyncGetBlocksError$outboundSchema;
}

/** @internal */
export const BadRequestComAtprotoSyncGetBlocksResponseBodyError$inboundSchema:
  z.ZodType<
    BadRequestComAtprotoSyncGetBlocksResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: ComAtprotoSyncGetBlocksError$inboundSchema,
    message: z.string(),
  })
    .transform((v) => {
      return new BadRequestComAtprotoSyncGetBlocksResponseBodyError(v);
    });

/** @internal */
export type BadRequestComAtprotoSyncGetBlocksResponseBodyError$Outbound = {
  error: string;
  message: string;
};

/** @internal */
export const BadRequestComAtprotoSyncGetBlocksResponseBodyError$outboundSchema:
  z.ZodType<
    BadRequestComAtprotoSyncGetBlocksResponseBodyError$Outbound,
    z.ZodTypeDef,
    BadRequestComAtprotoSyncGetBlocksResponseBodyError
  > = z.instanceof(BadRequestComAtprotoSyncGetBlocksResponseBodyError)
    .transform(v => v.data$)
    .pipe(z.object({
      error: ComAtprotoSyncGetBlocksError$outboundSchema,
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BadRequestComAtprotoSyncGetBlocksResponseBodyError$ {
  /** @deprecated use `BadRequestComAtprotoSyncGetBlocksResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    BadRequestComAtprotoSyncGetBlocksResponseBodyError$inboundSchema;
  /** @deprecated use `BadRequestComAtprotoSyncGetBlocksResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    BadRequestComAtprotoSyncGetBlocksResponseBodyError$outboundSchema;
  /** @deprecated use `BadRequestComAtprotoSyncGetBlocksResponseBodyError$Outbound` instead. */
  export type Outbound =
    BadRequestComAtprotoSyncGetBlocksResponseBodyError$Outbound;
}
