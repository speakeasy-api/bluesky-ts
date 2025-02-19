/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type UnauthorizedAppBskyFeedGetTimelineResponseBodyErrorData = {
  error: "AuthMissing";
  message: string;
};

/**
 * Unauthorized
 */
export class UnauthorizedAppBskyFeedGetTimelineResponseBodyError extends Error {
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$: UnauthorizedAppBskyFeedGetTimelineResponseBodyErrorData;

  constructor(err: UnauthorizedAppBskyFeedGetTimelineResponseBodyErrorData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "UnauthorizedAppBskyFeedGetTimelineResponseBodyError";
  }
}

export const AppBskyFeedGetTimelineError = {
  InvalidRequest: "InvalidRequest",
  ExpiredToken: "ExpiredToken",
  InvalidToken: "InvalidToken",
} as const;
export type AppBskyFeedGetTimelineError = ClosedEnum<
  typeof AppBskyFeedGetTimelineError
>;

/**
 * Bad Request
 */
export type BadRequestAppBskyFeedGetTimelineResponseBodyErrorData = {
  error: AppBskyFeedGetTimelineError;
  message: string;
};

/**
 * Bad Request
 */
export class BadRequestAppBskyFeedGetTimelineResponseBodyError extends Error {
  error: AppBskyFeedGetTimelineError;

  /** The original data that was passed to this error instance. */
  data$: BadRequestAppBskyFeedGetTimelineResponseBodyErrorData;

  constructor(err: BadRequestAppBskyFeedGetTimelineResponseBodyErrorData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "BadRequestAppBskyFeedGetTimelineResponseBodyError";
  }
}

/** @internal */
export const UnauthorizedAppBskyFeedGetTimelineResponseBodyError$inboundSchema:
  z.ZodType<
    UnauthorizedAppBskyFeedGetTimelineResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.literal("AuthMissing"),
    message: z.string(),
  })
    .transform((v) => {
      return new UnauthorizedAppBskyFeedGetTimelineResponseBodyError(v);
    });

/** @internal */
export type UnauthorizedAppBskyFeedGetTimelineResponseBodyError$Outbound = {
  error: "AuthMissing";
  message: string;
};

/** @internal */
export const UnauthorizedAppBskyFeedGetTimelineResponseBodyError$outboundSchema:
  z.ZodType<
    UnauthorizedAppBskyFeedGetTimelineResponseBodyError$Outbound,
    z.ZodTypeDef,
    UnauthorizedAppBskyFeedGetTimelineResponseBodyError
  > = z.instanceof(UnauthorizedAppBskyFeedGetTimelineResponseBodyError)
    .transform(v => v.data$)
    .pipe(z.object({
      error: z.literal("AuthMissing").default("AuthMissing" as const),
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnauthorizedAppBskyFeedGetTimelineResponseBodyError$ {
  /** @deprecated use `UnauthorizedAppBskyFeedGetTimelineResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    UnauthorizedAppBskyFeedGetTimelineResponseBodyError$inboundSchema;
  /** @deprecated use `UnauthorizedAppBskyFeedGetTimelineResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    UnauthorizedAppBskyFeedGetTimelineResponseBodyError$outboundSchema;
  /** @deprecated use `UnauthorizedAppBskyFeedGetTimelineResponseBodyError$Outbound` instead. */
  export type Outbound =
    UnauthorizedAppBskyFeedGetTimelineResponseBodyError$Outbound;
}

/** @internal */
export const AppBskyFeedGetTimelineError$inboundSchema: z.ZodNativeEnum<
  typeof AppBskyFeedGetTimelineError
> = z.nativeEnum(AppBskyFeedGetTimelineError);

/** @internal */
export const AppBskyFeedGetTimelineError$outboundSchema: z.ZodNativeEnum<
  typeof AppBskyFeedGetTimelineError
> = AppBskyFeedGetTimelineError$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyFeedGetTimelineError$ {
  /** @deprecated use `AppBskyFeedGetTimelineError$inboundSchema` instead. */
  export const inboundSchema = AppBskyFeedGetTimelineError$inboundSchema;
  /** @deprecated use `AppBskyFeedGetTimelineError$outboundSchema` instead. */
  export const outboundSchema = AppBskyFeedGetTimelineError$outboundSchema;
}

/** @internal */
export const BadRequestAppBskyFeedGetTimelineResponseBodyError$inboundSchema:
  z.ZodType<
    BadRequestAppBskyFeedGetTimelineResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: AppBskyFeedGetTimelineError$inboundSchema,
    message: z.string(),
  })
    .transform((v) => {
      return new BadRequestAppBskyFeedGetTimelineResponseBodyError(v);
    });

/** @internal */
export type BadRequestAppBskyFeedGetTimelineResponseBodyError$Outbound = {
  error: string;
  message: string;
};

/** @internal */
export const BadRequestAppBskyFeedGetTimelineResponseBodyError$outboundSchema:
  z.ZodType<
    BadRequestAppBskyFeedGetTimelineResponseBodyError$Outbound,
    z.ZodTypeDef,
    BadRequestAppBskyFeedGetTimelineResponseBodyError
  > = z.instanceof(BadRequestAppBskyFeedGetTimelineResponseBodyError)
    .transform(v => v.data$)
    .pipe(z.object({
      error: AppBskyFeedGetTimelineError$outboundSchema,
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BadRequestAppBskyFeedGetTimelineResponseBodyError$ {
  /** @deprecated use `BadRequestAppBskyFeedGetTimelineResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    BadRequestAppBskyFeedGetTimelineResponseBodyError$inboundSchema;
  /** @deprecated use `BadRequestAppBskyFeedGetTimelineResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    BadRequestAppBskyFeedGetTimelineResponseBodyError$outboundSchema;
  /** @deprecated use `BadRequestAppBskyFeedGetTimelineResponseBodyError$Outbound` instead. */
  export type Outbound =
    BadRequestAppBskyFeedGetTimelineResponseBodyError$Outbound;
}
