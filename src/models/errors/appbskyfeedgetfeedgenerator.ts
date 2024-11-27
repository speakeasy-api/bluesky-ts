/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type AppBskyFeedGetFeedGeneratorFeedResponseBodyData = {
  error: "AuthMissing";
  message: string;
};

/**
 * Unauthorized
 */
export class AppBskyFeedGetFeedGeneratorFeedResponseBody extends Error {
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$: AppBskyFeedGetFeedGeneratorFeedResponseBodyData;

  constructor(err: AppBskyFeedGetFeedGeneratorFeedResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "AppBskyFeedGetFeedGeneratorFeedResponseBody";
  }
}

export const AppBskyFeedGetFeedGeneratorError = {
  InvalidRequest: "InvalidRequest",
  ExpiredToken: "ExpiredToken",
  InvalidToken: "InvalidToken",
} as const;
export type AppBskyFeedGetFeedGeneratorError = ClosedEnum<
  typeof AppBskyFeedGetFeedGeneratorError
>;

/**
 * Bad Request
 */
export type AppBskyFeedGetFeedGeneratorResponseBodyData = {
  error: AppBskyFeedGetFeedGeneratorError;
  message: string;
};

/**
 * Bad Request
 */
export class AppBskyFeedGetFeedGeneratorResponseBody extends Error {
  error: AppBskyFeedGetFeedGeneratorError;

  /** The original data that was passed to this error instance. */
  data$: AppBskyFeedGetFeedGeneratorResponseBodyData;

  constructor(err: AppBskyFeedGetFeedGeneratorResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "AppBskyFeedGetFeedGeneratorResponseBody";
  }
}

/** @internal */
export const AppBskyFeedGetFeedGeneratorFeedResponseBody$inboundSchema:
  z.ZodType<
    AppBskyFeedGetFeedGeneratorFeedResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.literal("AuthMissing"),
    message: z.string(),
  })
    .transform((v) => {
      return new AppBskyFeedGetFeedGeneratorFeedResponseBody(v);
    });

/** @internal */
export type AppBskyFeedGetFeedGeneratorFeedResponseBody$Outbound = {
  error: "AuthMissing";
  message: string;
};

/** @internal */
export const AppBskyFeedGetFeedGeneratorFeedResponseBody$outboundSchema:
  z.ZodType<
    AppBskyFeedGetFeedGeneratorFeedResponseBody$Outbound,
    z.ZodTypeDef,
    AppBskyFeedGetFeedGeneratorFeedResponseBody
  > = z.instanceof(AppBskyFeedGetFeedGeneratorFeedResponseBody)
    .transform(v => v.data$)
    .pipe(z.object({
      error: z.literal("AuthMissing").default("AuthMissing" as const),
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyFeedGetFeedGeneratorFeedResponseBody$ {
  /** @deprecated use `AppBskyFeedGetFeedGeneratorFeedResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    AppBskyFeedGetFeedGeneratorFeedResponseBody$inboundSchema;
  /** @deprecated use `AppBskyFeedGetFeedGeneratorFeedResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    AppBskyFeedGetFeedGeneratorFeedResponseBody$outboundSchema;
  /** @deprecated use `AppBskyFeedGetFeedGeneratorFeedResponseBody$Outbound` instead. */
  export type Outbound = AppBskyFeedGetFeedGeneratorFeedResponseBody$Outbound;
}

/** @internal */
export const AppBskyFeedGetFeedGeneratorError$inboundSchema: z.ZodNativeEnum<
  typeof AppBskyFeedGetFeedGeneratorError
> = z.nativeEnum(AppBskyFeedGetFeedGeneratorError);

/** @internal */
export const AppBskyFeedGetFeedGeneratorError$outboundSchema: z.ZodNativeEnum<
  typeof AppBskyFeedGetFeedGeneratorError
> = AppBskyFeedGetFeedGeneratorError$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyFeedGetFeedGeneratorError$ {
  /** @deprecated use `AppBskyFeedGetFeedGeneratorError$inboundSchema` instead. */
  export const inboundSchema = AppBskyFeedGetFeedGeneratorError$inboundSchema;
  /** @deprecated use `AppBskyFeedGetFeedGeneratorError$outboundSchema` instead. */
  export const outboundSchema = AppBskyFeedGetFeedGeneratorError$outboundSchema;
}

/** @internal */
export const AppBskyFeedGetFeedGeneratorResponseBody$inboundSchema: z.ZodType<
  AppBskyFeedGetFeedGeneratorResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  error: AppBskyFeedGetFeedGeneratorError$inboundSchema,
  message: z.string(),
})
  .transform((v) => {
    return new AppBskyFeedGetFeedGeneratorResponseBody(v);
  });

/** @internal */
export type AppBskyFeedGetFeedGeneratorResponseBody$Outbound = {
  error: string;
  message: string;
};

/** @internal */
export const AppBskyFeedGetFeedGeneratorResponseBody$outboundSchema: z.ZodType<
  AppBskyFeedGetFeedGeneratorResponseBody$Outbound,
  z.ZodTypeDef,
  AppBskyFeedGetFeedGeneratorResponseBody
> = z.instanceof(AppBskyFeedGetFeedGeneratorResponseBody)
  .transform(v => v.data$)
  .pipe(z.object({
    error: AppBskyFeedGetFeedGeneratorError$outboundSchema,
    message: z.string(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyFeedGetFeedGeneratorResponseBody$ {
  /** @deprecated use `AppBskyFeedGetFeedGeneratorResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    AppBskyFeedGetFeedGeneratorResponseBody$inboundSchema;
  /** @deprecated use `AppBskyFeedGetFeedGeneratorResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    AppBskyFeedGetFeedGeneratorResponseBody$outboundSchema;
  /** @deprecated use `AppBskyFeedGetFeedGeneratorResponseBody$Outbound` instead. */
  export type Outbound = AppBskyFeedGetFeedGeneratorResponseBody$Outbound;
}
