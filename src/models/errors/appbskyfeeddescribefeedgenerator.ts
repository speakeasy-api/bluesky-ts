/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type AppBskyFeedDescribeFeedGeneratorAppBskyFeedResponseBodyData = {
  error: "AuthMissing";
  message: string;
};

/**
 * Unauthorized
 */
export class AppBskyFeedDescribeFeedGeneratorAppBskyFeedResponseBody
  extends Error
{
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$: AppBskyFeedDescribeFeedGeneratorAppBskyFeedResponseBodyData;

  constructor(
    err: AppBskyFeedDescribeFeedGeneratorAppBskyFeedResponseBodyData,
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "AppBskyFeedDescribeFeedGeneratorAppBskyFeedResponseBody";
  }
}

export const AppBskyFeedDescribeFeedGeneratorError = {
  InvalidRequest: "InvalidRequest",
  ExpiredToken: "ExpiredToken",
  InvalidToken: "InvalidToken",
} as const;
export type AppBskyFeedDescribeFeedGeneratorError = ClosedEnum<
  typeof AppBskyFeedDescribeFeedGeneratorError
>;

/**
 * Bad Request
 */
export type AppBskyFeedDescribeFeedGeneratorResponseBodyData = {
  error: AppBskyFeedDescribeFeedGeneratorError;
  message: string;
};

/**
 * Bad Request
 */
export class AppBskyFeedDescribeFeedGeneratorResponseBody extends Error {
  error: AppBskyFeedDescribeFeedGeneratorError;

  /** The original data that was passed to this error instance. */
  data$: AppBskyFeedDescribeFeedGeneratorResponseBodyData;

  constructor(err: AppBskyFeedDescribeFeedGeneratorResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "AppBskyFeedDescribeFeedGeneratorResponseBody";
  }
}

/** @internal */
export const AppBskyFeedDescribeFeedGeneratorAppBskyFeedResponseBody$inboundSchema:
  z.ZodType<
    AppBskyFeedDescribeFeedGeneratorAppBskyFeedResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.literal("AuthMissing"),
    message: z.string(),
  })
    .transform((v) => {
      return new AppBskyFeedDescribeFeedGeneratorAppBskyFeedResponseBody(v);
    });

/** @internal */
export type AppBskyFeedDescribeFeedGeneratorAppBskyFeedResponseBody$Outbound = {
  error: "AuthMissing";
  message: string;
};

/** @internal */
export const AppBskyFeedDescribeFeedGeneratorAppBskyFeedResponseBody$outboundSchema:
  z.ZodType<
    AppBskyFeedDescribeFeedGeneratorAppBskyFeedResponseBody$Outbound,
    z.ZodTypeDef,
    AppBskyFeedDescribeFeedGeneratorAppBskyFeedResponseBody
  > = z.instanceof(AppBskyFeedDescribeFeedGeneratorAppBskyFeedResponseBody)
    .transform(v => v.data$)
    .pipe(z.object({
      error: z.literal("AuthMissing").default("AuthMissing" as const),
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyFeedDescribeFeedGeneratorAppBskyFeedResponseBody$ {
  /** @deprecated use `AppBskyFeedDescribeFeedGeneratorAppBskyFeedResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    AppBskyFeedDescribeFeedGeneratorAppBskyFeedResponseBody$inboundSchema;
  /** @deprecated use `AppBskyFeedDescribeFeedGeneratorAppBskyFeedResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    AppBskyFeedDescribeFeedGeneratorAppBskyFeedResponseBody$outboundSchema;
  /** @deprecated use `AppBskyFeedDescribeFeedGeneratorAppBskyFeedResponseBody$Outbound` instead. */
  export type Outbound =
    AppBskyFeedDescribeFeedGeneratorAppBskyFeedResponseBody$Outbound;
}

/** @internal */
export const AppBskyFeedDescribeFeedGeneratorError$inboundSchema:
  z.ZodNativeEnum<typeof AppBskyFeedDescribeFeedGeneratorError> = z.nativeEnum(
    AppBskyFeedDescribeFeedGeneratorError,
  );

/** @internal */
export const AppBskyFeedDescribeFeedGeneratorError$outboundSchema:
  z.ZodNativeEnum<typeof AppBskyFeedDescribeFeedGeneratorError> =
    AppBskyFeedDescribeFeedGeneratorError$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyFeedDescribeFeedGeneratorError$ {
  /** @deprecated use `AppBskyFeedDescribeFeedGeneratorError$inboundSchema` instead. */
  export const inboundSchema =
    AppBskyFeedDescribeFeedGeneratorError$inboundSchema;
  /** @deprecated use `AppBskyFeedDescribeFeedGeneratorError$outboundSchema` instead. */
  export const outboundSchema =
    AppBskyFeedDescribeFeedGeneratorError$outboundSchema;
}

/** @internal */
export const AppBskyFeedDescribeFeedGeneratorResponseBody$inboundSchema:
  z.ZodType<
    AppBskyFeedDescribeFeedGeneratorResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: AppBskyFeedDescribeFeedGeneratorError$inboundSchema,
    message: z.string(),
  })
    .transform((v) => {
      return new AppBskyFeedDescribeFeedGeneratorResponseBody(v);
    });

/** @internal */
export type AppBskyFeedDescribeFeedGeneratorResponseBody$Outbound = {
  error: string;
  message: string;
};

/** @internal */
export const AppBskyFeedDescribeFeedGeneratorResponseBody$outboundSchema:
  z.ZodType<
    AppBskyFeedDescribeFeedGeneratorResponseBody$Outbound,
    z.ZodTypeDef,
    AppBskyFeedDescribeFeedGeneratorResponseBody
  > = z.instanceof(AppBskyFeedDescribeFeedGeneratorResponseBody)
    .transform(v => v.data$)
    .pipe(z.object({
      error: AppBskyFeedDescribeFeedGeneratorError$outboundSchema,
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyFeedDescribeFeedGeneratorResponseBody$ {
  /** @deprecated use `AppBskyFeedDescribeFeedGeneratorResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    AppBskyFeedDescribeFeedGeneratorResponseBody$inboundSchema;
  /** @deprecated use `AppBskyFeedDescribeFeedGeneratorResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    AppBskyFeedDescribeFeedGeneratorResponseBody$outboundSchema;
  /** @deprecated use `AppBskyFeedDescribeFeedGeneratorResponseBody$Outbound` instead. */
  export type Outbound = AppBskyFeedDescribeFeedGeneratorResponseBody$Outbound;
}
