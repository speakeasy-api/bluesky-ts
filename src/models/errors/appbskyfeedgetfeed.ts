/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type AppBskyFeedGetFeedFeedResponseBodyData = {
  error: "AuthMissing";
  message: string;
};

/**
 * Unauthorized
 */
export class AppBskyFeedGetFeedFeedResponseBody extends Error {
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$: AppBskyFeedGetFeedFeedResponseBodyData;

  constructor(err: AppBskyFeedGetFeedFeedResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "AppBskyFeedGetFeedFeedResponseBody";
  }
}

export const AppBskyFeedGetFeedError = {
  InvalidRequest: "InvalidRequest",
  ExpiredToken: "ExpiredToken",
  InvalidToken: "InvalidToken",
  UnknownFeed: "UnknownFeed",
} as const;
export type AppBskyFeedGetFeedError = ClosedEnum<
  typeof AppBskyFeedGetFeedError
>;

/**
 * Bad Request
 */
export type AppBskyFeedGetFeedResponseBodyData = {
  error: AppBskyFeedGetFeedError;
  message: string;
};

/**
 * Bad Request
 */
export class AppBskyFeedGetFeedResponseBody extends Error {
  error: AppBskyFeedGetFeedError;

  /** The original data that was passed to this error instance. */
  data$: AppBskyFeedGetFeedResponseBodyData;

  constructor(err: AppBskyFeedGetFeedResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "AppBskyFeedGetFeedResponseBody";
  }
}

/** @internal */
export const AppBskyFeedGetFeedFeedResponseBody$inboundSchema: z.ZodType<
  AppBskyFeedGetFeedFeedResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  error: z.literal("AuthMissing"),
  message: z.string(),
})
  .transform((v) => {
    return new AppBskyFeedGetFeedFeedResponseBody(v);
  });

/** @internal */
export type AppBskyFeedGetFeedFeedResponseBody$Outbound = {
  error: "AuthMissing";
  message: string;
};

/** @internal */
export const AppBskyFeedGetFeedFeedResponseBody$outboundSchema: z.ZodType<
  AppBskyFeedGetFeedFeedResponseBody$Outbound,
  z.ZodTypeDef,
  AppBskyFeedGetFeedFeedResponseBody
> = z.instanceof(AppBskyFeedGetFeedFeedResponseBody)
  .transform(v => v.data$)
  .pipe(z.object({
    error: z.literal("AuthMissing").default("AuthMissing" as const),
    message: z.string(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyFeedGetFeedFeedResponseBody$ {
  /** @deprecated use `AppBskyFeedGetFeedFeedResponseBody$inboundSchema` instead. */
  export const inboundSchema = AppBskyFeedGetFeedFeedResponseBody$inboundSchema;
  /** @deprecated use `AppBskyFeedGetFeedFeedResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    AppBskyFeedGetFeedFeedResponseBody$outboundSchema;
  /** @deprecated use `AppBskyFeedGetFeedFeedResponseBody$Outbound` instead. */
  export type Outbound = AppBskyFeedGetFeedFeedResponseBody$Outbound;
}

/** @internal */
export const AppBskyFeedGetFeedError$inboundSchema: z.ZodNativeEnum<
  typeof AppBskyFeedGetFeedError
> = z.nativeEnum(AppBskyFeedGetFeedError);

/** @internal */
export const AppBskyFeedGetFeedError$outboundSchema: z.ZodNativeEnum<
  typeof AppBskyFeedGetFeedError
> = AppBskyFeedGetFeedError$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyFeedGetFeedError$ {
  /** @deprecated use `AppBskyFeedGetFeedError$inboundSchema` instead. */
  export const inboundSchema = AppBskyFeedGetFeedError$inboundSchema;
  /** @deprecated use `AppBskyFeedGetFeedError$outboundSchema` instead. */
  export const outboundSchema = AppBskyFeedGetFeedError$outboundSchema;
}

/** @internal */
export const AppBskyFeedGetFeedResponseBody$inboundSchema: z.ZodType<
  AppBskyFeedGetFeedResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  error: AppBskyFeedGetFeedError$inboundSchema,
  message: z.string(),
})
  .transform((v) => {
    return new AppBskyFeedGetFeedResponseBody(v);
  });

/** @internal */
export type AppBskyFeedGetFeedResponseBody$Outbound = {
  error: string;
  message: string;
};

/** @internal */
export const AppBskyFeedGetFeedResponseBody$outboundSchema: z.ZodType<
  AppBskyFeedGetFeedResponseBody$Outbound,
  z.ZodTypeDef,
  AppBskyFeedGetFeedResponseBody
> = z.instanceof(AppBskyFeedGetFeedResponseBody)
  .transform(v => v.data$)
  .pipe(z.object({
    error: AppBskyFeedGetFeedError$outboundSchema,
    message: z.string(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyFeedGetFeedResponseBody$ {
  /** @deprecated use `AppBskyFeedGetFeedResponseBody$inboundSchema` instead. */
  export const inboundSchema = AppBskyFeedGetFeedResponseBody$inboundSchema;
  /** @deprecated use `AppBskyFeedGetFeedResponseBody$outboundSchema` instead. */
  export const outboundSchema = AppBskyFeedGetFeedResponseBody$outboundSchema;
  /** @deprecated use `AppBskyFeedGetFeedResponseBody$Outbound` instead. */
  export type Outbound = AppBskyFeedGetFeedResponseBody$Outbound;
}
