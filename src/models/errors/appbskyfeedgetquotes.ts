/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type UnauthorizedAppBskyFeedGetQuotesResponseBodyErrorData = {
  error: "AuthMissing";
  message: string;
};

/**
 * Unauthorized
 */
export class UnauthorizedAppBskyFeedGetQuotesResponseBodyError extends Error {
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$: UnauthorizedAppBskyFeedGetQuotesResponseBodyErrorData;

  constructor(err: UnauthorizedAppBskyFeedGetQuotesResponseBodyErrorData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "UnauthorizedAppBskyFeedGetQuotesResponseBodyError";
  }
}

export const AppBskyFeedGetQuotesError = {
  InvalidRequest: "InvalidRequest",
  ExpiredToken: "ExpiredToken",
  InvalidToken: "InvalidToken",
} as const;
export type AppBskyFeedGetQuotesError = ClosedEnum<
  typeof AppBskyFeedGetQuotesError
>;

/**
 * Bad Request
 */
export type BadRequestAppBskyFeedGetQuotesResponseBodyErrorData = {
  error: AppBskyFeedGetQuotesError;
  message: string;
};

/**
 * Bad Request
 */
export class BadRequestAppBskyFeedGetQuotesResponseBodyError extends Error {
  error: AppBskyFeedGetQuotesError;

  /** The original data that was passed to this error instance. */
  data$: BadRequestAppBskyFeedGetQuotesResponseBodyErrorData;

  constructor(err: BadRequestAppBskyFeedGetQuotesResponseBodyErrorData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "BadRequestAppBskyFeedGetQuotesResponseBodyError";
  }
}

/** @internal */
export const UnauthorizedAppBskyFeedGetQuotesResponseBodyError$inboundSchema:
  z.ZodType<
    UnauthorizedAppBskyFeedGetQuotesResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.literal("AuthMissing"),
    message: z.string(),
  })
    .transform((v) => {
      return new UnauthorizedAppBskyFeedGetQuotesResponseBodyError(v);
    });

/** @internal */
export type UnauthorizedAppBskyFeedGetQuotesResponseBodyError$Outbound = {
  error: "AuthMissing";
  message: string;
};

/** @internal */
export const UnauthorizedAppBskyFeedGetQuotesResponseBodyError$outboundSchema:
  z.ZodType<
    UnauthorizedAppBskyFeedGetQuotesResponseBodyError$Outbound,
    z.ZodTypeDef,
    UnauthorizedAppBskyFeedGetQuotesResponseBodyError
  > = z.instanceof(UnauthorizedAppBskyFeedGetQuotesResponseBodyError)
    .transform(v => v.data$)
    .pipe(z.object({
      error: z.literal("AuthMissing").default("AuthMissing" as const),
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnauthorizedAppBskyFeedGetQuotesResponseBodyError$ {
  /** @deprecated use `UnauthorizedAppBskyFeedGetQuotesResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    UnauthorizedAppBskyFeedGetQuotesResponseBodyError$inboundSchema;
  /** @deprecated use `UnauthorizedAppBskyFeedGetQuotesResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    UnauthorizedAppBskyFeedGetQuotesResponseBodyError$outboundSchema;
  /** @deprecated use `UnauthorizedAppBskyFeedGetQuotesResponseBodyError$Outbound` instead. */
  export type Outbound =
    UnauthorizedAppBskyFeedGetQuotesResponseBodyError$Outbound;
}

/** @internal */
export const AppBskyFeedGetQuotesError$inboundSchema: z.ZodNativeEnum<
  typeof AppBskyFeedGetQuotesError
> = z.nativeEnum(AppBskyFeedGetQuotesError);

/** @internal */
export const AppBskyFeedGetQuotesError$outboundSchema: z.ZodNativeEnum<
  typeof AppBskyFeedGetQuotesError
> = AppBskyFeedGetQuotesError$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyFeedGetQuotesError$ {
  /** @deprecated use `AppBskyFeedGetQuotesError$inboundSchema` instead. */
  export const inboundSchema = AppBskyFeedGetQuotesError$inboundSchema;
  /** @deprecated use `AppBskyFeedGetQuotesError$outboundSchema` instead. */
  export const outboundSchema = AppBskyFeedGetQuotesError$outboundSchema;
}

/** @internal */
export const BadRequestAppBskyFeedGetQuotesResponseBodyError$inboundSchema:
  z.ZodType<
    BadRequestAppBskyFeedGetQuotesResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: AppBskyFeedGetQuotesError$inboundSchema,
    message: z.string(),
  })
    .transform((v) => {
      return new BadRequestAppBskyFeedGetQuotesResponseBodyError(v);
    });

/** @internal */
export type BadRequestAppBskyFeedGetQuotesResponseBodyError$Outbound = {
  error: string;
  message: string;
};

/** @internal */
export const BadRequestAppBskyFeedGetQuotesResponseBodyError$outboundSchema:
  z.ZodType<
    BadRequestAppBskyFeedGetQuotesResponseBodyError$Outbound,
    z.ZodTypeDef,
    BadRequestAppBskyFeedGetQuotesResponseBodyError
  > = z.instanceof(BadRequestAppBskyFeedGetQuotesResponseBodyError)
    .transform(v => v.data$)
    .pipe(z.object({
      error: AppBskyFeedGetQuotesError$outboundSchema,
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BadRequestAppBskyFeedGetQuotesResponseBodyError$ {
  /** @deprecated use `BadRequestAppBskyFeedGetQuotesResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    BadRequestAppBskyFeedGetQuotesResponseBodyError$inboundSchema;
  /** @deprecated use `BadRequestAppBskyFeedGetQuotesResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    BadRequestAppBskyFeedGetQuotesResponseBodyError$outboundSchema;
  /** @deprecated use `BadRequestAppBskyFeedGetQuotesResponseBodyError$Outbound` instead. */
  export type Outbound =
    BadRequestAppBskyFeedGetQuotesResponseBodyError$Outbound;
}
