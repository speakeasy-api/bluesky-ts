/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type UnauthorizedAppBskyGraphGetListBlocksResponseBodyErrorData = {
  error: "AuthMissing";
  message: string;
};

/**
 * Unauthorized
 */
export class UnauthorizedAppBskyGraphGetListBlocksResponseBodyError
  extends Error
{
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$: UnauthorizedAppBskyGraphGetListBlocksResponseBodyErrorData;

  constructor(err: UnauthorizedAppBskyGraphGetListBlocksResponseBodyErrorData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "UnauthorizedAppBskyGraphGetListBlocksResponseBodyError";
  }
}

export const AppBskyGraphGetListBlocksError = {
  InvalidRequest: "InvalidRequest",
  ExpiredToken: "ExpiredToken",
  InvalidToken: "InvalidToken",
} as const;
export type AppBskyGraphGetListBlocksError = ClosedEnum<
  typeof AppBskyGraphGetListBlocksError
>;

/**
 * Bad Request
 */
export type BadRequestAppBskyGraphGetListBlocksResponseBodyErrorData = {
  error: AppBskyGraphGetListBlocksError;
  message: string;
};

/**
 * Bad Request
 */
export class BadRequestAppBskyGraphGetListBlocksResponseBodyError
  extends Error
{
  error: AppBskyGraphGetListBlocksError;

  /** The original data that was passed to this error instance. */
  data$: BadRequestAppBskyGraphGetListBlocksResponseBodyErrorData;

  constructor(err: BadRequestAppBskyGraphGetListBlocksResponseBodyErrorData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "BadRequestAppBskyGraphGetListBlocksResponseBodyError";
  }
}

/** @internal */
export const UnauthorizedAppBskyGraphGetListBlocksResponseBodyError$inboundSchema:
  z.ZodType<
    UnauthorizedAppBskyGraphGetListBlocksResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.literal("AuthMissing"),
    message: z.string(),
  })
    .transform((v) => {
      return new UnauthorizedAppBskyGraphGetListBlocksResponseBodyError(v);
    });

/** @internal */
export type UnauthorizedAppBskyGraphGetListBlocksResponseBodyError$Outbound = {
  error: "AuthMissing";
  message: string;
};

/** @internal */
export const UnauthorizedAppBskyGraphGetListBlocksResponseBodyError$outboundSchema:
  z.ZodType<
    UnauthorizedAppBskyGraphGetListBlocksResponseBodyError$Outbound,
    z.ZodTypeDef,
    UnauthorizedAppBskyGraphGetListBlocksResponseBodyError
  > = z.instanceof(UnauthorizedAppBskyGraphGetListBlocksResponseBodyError)
    .transform(v => v.data$)
    .pipe(z.object({
      error: z.literal("AuthMissing").default("AuthMissing" as const),
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnauthorizedAppBskyGraphGetListBlocksResponseBodyError$ {
  /** @deprecated use `UnauthorizedAppBskyGraphGetListBlocksResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    UnauthorizedAppBskyGraphGetListBlocksResponseBodyError$inboundSchema;
  /** @deprecated use `UnauthorizedAppBskyGraphGetListBlocksResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    UnauthorizedAppBskyGraphGetListBlocksResponseBodyError$outboundSchema;
  /** @deprecated use `UnauthorizedAppBskyGraphGetListBlocksResponseBodyError$Outbound` instead. */
  export type Outbound =
    UnauthorizedAppBskyGraphGetListBlocksResponseBodyError$Outbound;
}

/** @internal */
export const AppBskyGraphGetListBlocksError$inboundSchema: z.ZodNativeEnum<
  typeof AppBskyGraphGetListBlocksError
> = z.nativeEnum(AppBskyGraphGetListBlocksError);

/** @internal */
export const AppBskyGraphGetListBlocksError$outboundSchema: z.ZodNativeEnum<
  typeof AppBskyGraphGetListBlocksError
> = AppBskyGraphGetListBlocksError$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyGraphGetListBlocksError$ {
  /** @deprecated use `AppBskyGraphGetListBlocksError$inboundSchema` instead. */
  export const inboundSchema = AppBskyGraphGetListBlocksError$inboundSchema;
  /** @deprecated use `AppBskyGraphGetListBlocksError$outboundSchema` instead. */
  export const outboundSchema = AppBskyGraphGetListBlocksError$outboundSchema;
}

/** @internal */
export const BadRequestAppBskyGraphGetListBlocksResponseBodyError$inboundSchema:
  z.ZodType<
    BadRequestAppBskyGraphGetListBlocksResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: AppBskyGraphGetListBlocksError$inboundSchema,
    message: z.string(),
  })
    .transform((v) => {
      return new BadRequestAppBskyGraphGetListBlocksResponseBodyError(v);
    });

/** @internal */
export type BadRequestAppBskyGraphGetListBlocksResponseBodyError$Outbound = {
  error: string;
  message: string;
};

/** @internal */
export const BadRequestAppBskyGraphGetListBlocksResponseBodyError$outboundSchema:
  z.ZodType<
    BadRequestAppBskyGraphGetListBlocksResponseBodyError$Outbound,
    z.ZodTypeDef,
    BadRequestAppBskyGraphGetListBlocksResponseBodyError
  > = z.instanceof(BadRequestAppBskyGraphGetListBlocksResponseBodyError)
    .transform(v => v.data$)
    .pipe(z.object({
      error: AppBskyGraphGetListBlocksError$outboundSchema,
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BadRequestAppBskyGraphGetListBlocksResponseBodyError$ {
  /** @deprecated use `BadRequestAppBskyGraphGetListBlocksResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    BadRequestAppBskyGraphGetListBlocksResponseBodyError$inboundSchema;
  /** @deprecated use `BadRequestAppBskyGraphGetListBlocksResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    BadRequestAppBskyGraphGetListBlocksResponseBodyError$outboundSchema;
  /** @deprecated use `BadRequestAppBskyGraphGetListBlocksResponseBodyError$Outbound` instead. */
  export type Outbound =
    BadRequestAppBskyGraphGetListBlocksResponseBodyError$Outbound;
}
