/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type UnauthorizedAppBskyFeedGetPostsResponseBodyErrorData = {
  error: "AuthMissing";
  message: string;
};

/**
 * Unauthorized
 */
export class UnauthorizedAppBskyFeedGetPostsResponseBodyError extends Error {
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$: UnauthorizedAppBskyFeedGetPostsResponseBodyErrorData;

  constructor(err: UnauthorizedAppBskyFeedGetPostsResponseBodyErrorData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "UnauthorizedAppBskyFeedGetPostsResponseBodyError";
  }
}

export const AppBskyFeedGetPostsError = {
  InvalidRequest: "InvalidRequest",
  ExpiredToken: "ExpiredToken",
  InvalidToken: "InvalidToken",
} as const;
export type AppBskyFeedGetPostsError = ClosedEnum<
  typeof AppBskyFeedGetPostsError
>;

/**
 * Bad Request
 */
export type BadRequestAppBskyFeedGetPostsResponseBodyErrorData = {
  error: AppBskyFeedGetPostsError;
  message: string;
};

/**
 * Bad Request
 */
export class BadRequestAppBskyFeedGetPostsResponseBodyError extends Error {
  error: AppBskyFeedGetPostsError;

  /** The original data that was passed to this error instance. */
  data$: BadRequestAppBskyFeedGetPostsResponseBodyErrorData;

  constructor(err: BadRequestAppBskyFeedGetPostsResponseBodyErrorData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "BadRequestAppBskyFeedGetPostsResponseBodyError";
  }
}

/** @internal */
export const UnauthorizedAppBskyFeedGetPostsResponseBodyError$inboundSchema:
  z.ZodType<
    UnauthorizedAppBskyFeedGetPostsResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.literal("AuthMissing"),
    message: z.string(),
  })
    .transform((v) => {
      return new UnauthorizedAppBskyFeedGetPostsResponseBodyError(v);
    });

/** @internal */
export type UnauthorizedAppBskyFeedGetPostsResponseBodyError$Outbound = {
  error: "AuthMissing";
  message: string;
};

/** @internal */
export const UnauthorizedAppBskyFeedGetPostsResponseBodyError$outboundSchema:
  z.ZodType<
    UnauthorizedAppBskyFeedGetPostsResponseBodyError$Outbound,
    z.ZodTypeDef,
    UnauthorizedAppBskyFeedGetPostsResponseBodyError
  > = z.instanceof(UnauthorizedAppBskyFeedGetPostsResponseBodyError)
    .transform(v => v.data$)
    .pipe(z.object({
      error: z.literal("AuthMissing").default("AuthMissing" as const),
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnauthorizedAppBskyFeedGetPostsResponseBodyError$ {
  /** @deprecated use `UnauthorizedAppBskyFeedGetPostsResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    UnauthorizedAppBskyFeedGetPostsResponseBodyError$inboundSchema;
  /** @deprecated use `UnauthorizedAppBskyFeedGetPostsResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    UnauthorizedAppBskyFeedGetPostsResponseBodyError$outboundSchema;
  /** @deprecated use `UnauthorizedAppBskyFeedGetPostsResponseBodyError$Outbound` instead. */
  export type Outbound =
    UnauthorizedAppBskyFeedGetPostsResponseBodyError$Outbound;
}

/** @internal */
export const AppBskyFeedGetPostsError$inboundSchema: z.ZodNativeEnum<
  typeof AppBskyFeedGetPostsError
> = z.nativeEnum(AppBskyFeedGetPostsError);

/** @internal */
export const AppBskyFeedGetPostsError$outboundSchema: z.ZodNativeEnum<
  typeof AppBskyFeedGetPostsError
> = AppBskyFeedGetPostsError$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyFeedGetPostsError$ {
  /** @deprecated use `AppBskyFeedGetPostsError$inboundSchema` instead. */
  export const inboundSchema = AppBskyFeedGetPostsError$inboundSchema;
  /** @deprecated use `AppBskyFeedGetPostsError$outboundSchema` instead. */
  export const outboundSchema = AppBskyFeedGetPostsError$outboundSchema;
}

/** @internal */
export const BadRequestAppBskyFeedGetPostsResponseBodyError$inboundSchema:
  z.ZodType<
    BadRequestAppBskyFeedGetPostsResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: AppBskyFeedGetPostsError$inboundSchema,
    message: z.string(),
  })
    .transform((v) => {
      return new BadRequestAppBskyFeedGetPostsResponseBodyError(v);
    });

/** @internal */
export type BadRequestAppBskyFeedGetPostsResponseBodyError$Outbound = {
  error: string;
  message: string;
};

/** @internal */
export const BadRequestAppBskyFeedGetPostsResponseBodyError$outboundSchema:
  z.ZodType<
    BadRequestAppBskyFeedGetPostsResponseBodyError$Outbound,
    z.ZodTypeDef,
    BadRequestAppBskyFeedGetPostsResponseBodyError
  > = z.instanceof(BadRequestAppBskyFeedGetPostsResponseBodyError)
    .transform(v => v.data$)
    .pipe(z.object({
      error: AppBskyFeedGetPostsError$outboundSchema,
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BadRequestAppBskyFeedGetPostsResponseBodyError$ {
  /** @deprecated use `BadRequestAppBskyFeedGetPostsResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    BadRequestAppBskyFeedGetPostsResponseBodyError$inboundSchema;
  /** @deprecated use `BadRequestAppBskyFeedGetPostsResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    BadRequestAppBskyFeedGetPostsResponseBodyError$outboundSchema;
  /** @deprecated use `BadRequestAppBskyFeedGetPostsResponseBodyError$Outbound` instead. */
  export type Outbound =
    BadRequestAppBskyFeedGetPostsResponseBodyError$Outbound;
}
