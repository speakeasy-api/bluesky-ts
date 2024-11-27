/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type AppBskyFeedSearchPostsFeedResponseBodyData = {
  error: "AuthMissing";
  message: string;
};

/**
 * Unauthorized
 */
export class AppBskyFeedSearchPostsFeedResponseBody extends Error {
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$: AppBskyFeedSearchPostsFeedResponseBodyData;

  constructor(err: AppBskyFeedSearchPostsFeedResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "AppBskyFeedSearchPostsFeedResponseBody";
  }
}

export const AppBskyFeedSearchPostsError = {
  InvalidRequest: "InvalidRequest",
  ExpiredToken: "ExpiredToken",
  InvalidToken: "InvalidToken",
  BadQueryString: "BadQueryString",
} as const;
export type AppBskyFeedSearchPostsError = ClosedEnum<
  typeof AppBskyFeedSearchPostsError
>;

/**
 * Bad Request
 */
export type AppBskyFeedSearchPostsResponseBodyData = {
  error: AppBskyFeedSearchPostsError;
  message: string;
};

/**
 * Bad Request
 */
export class AppBskyFeedSearchPostsResponseBody extends Error {
  error: AppBskyFeedSearchPostsError;

  /** The original data that was passed to this error instance. */
  data$: AppBskyFeedSearchPostsResponseBodyData;

  constructor(err: AppBskyFeedSearchPostsResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "AppBskyFeedSearchPostsResponseBody";
  }
}

/** @internal */
export const AppBskyFeedSearchPostsFeedResponseBody$inboundSchema: z.ZodType<
  AppBskyFeedSearchPostsFeedResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  error: z.literal("AuthMissing"),
  message: z.string(),
})
  .transform((v) => {
    return new AppBskyFeedSearchPostsFeedResponseBody(v);
  });

/** @internal */
export type AppBskyFeedSearchPostsFeedResponseBody$Outbound = {
  error: "AuthMissing";
  message: string;
};

/** @internal */
export const AppBskyFeedSearchPostsFeedResponseBody$outboundSchema: z.ZodType<
  AppBskyFeedSearchPostsFeedResponseBody$Outbound,
  z.ZodTypeDef,
  AppBskyFeedSearchPostsFeedResponseBody
> = z.instanceof(AppBskyFeedSearchPostsFeedResponseBody)
  .transform(v => v.data$)
  .pipe(z.object({
    error: z.literal("AuthMissing").default("AuthMissing" as const),
    message: z.string(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyFeedSearchPostsFeedResponseBody$ {
  /** @deprecated use `AppBskyFeedSearchPostsFeedResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    AppBskyFeedSearchPostsFeedResponseBody$inboundSchema;
  /** @deprecated use `AppBskyFeedSearchPostsFeedResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    AppBskyFeedSearchPostsFeedResponseBody$outboundSchema;
  /** @deprecated use `AppBskyFeedSearchPostsFeedResponseBody$Outbound` instead. */
  export type Outbound = AppBskyFeedSearchPostsFeedResponseBody$Outbound;
}

/** @internal */
export const AppBskyFeedSearchPostsError$inboundSchema: z.ZodNativeEnum<
  typeof AppBskyFeedSearchPostsError
> = z.nativeEnum(AppBskyFeedSearchPostsError);

/** @internal */
export const AppBskyFeedSearchPostsError$outboundSchema: z.ZodNativeEnum<
  typeof AppBskyFeedSearchPostsError
> = AppBskyFeedSearchPostsError$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyFeedSearchPostsError$ {
  /** @deprecated use `AppBskyFeedSearchPostsError$inboundSchema` instead. */
  export const inboundSchema = AppBskyFeedSearchPostsError$inboundSchema;
  /** @deprecated use `AppBskyFeedSearchPostsError$outboundSchema` instead. */
  export const outboundSchema = AppBskyFeedSearchPostsError$outboundSchema;
}

/** @internal */
export const AppBskyFeedSearchPostsResponseBody$inboundSchema: z.ZodType<
  AppBskyFeedSearchPostsResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  error: AppBskyFeedSearchPostsError$inboundSchema,
  message: z.string(),
})
  .transform((v) => {
    return new AppBskyFeedSearchPostsResponseBody(v);
  });

/** @internal */
export type AppBskyFeedSearchPostsResponseBody$Outbound = {
  error: string;
  message: string;
};

/** @internal */
export const AppBskyFeedSearchPostsResponseBody$outboundSchema: z.ZodType<
  AppBskyFeedSearchPostsResponseBody$Outbound,
  z.ZodTypeDef,
  AppBskyFeedSearchPostsResponseBody
> = z.instanceof(AppBskyFeedSearchPostsResponseBody)
  .transform(v => v.data$)
  .pipe(z.object({
    error: AppBskyFeedSearchPostsError$outboundSchema,
    message: z.string(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyFeedSearchPostsResponseBody$ {
  /** @deprecated use `AppBskyFeedSearchPostsResponseBody$inboundSchema` instead. */
  export const inboundSchema = AppBskyFeedSearchPostsResponseBody$inboundSchema;
  /** @deprecated use `AppBskyFeedSearchPostsResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    AppBskyFeedSearchPostsResponseBody$outboundSchema;
  /** @deprecated use `AppBskyFeedSearchPostsResponseBody$Outbound` instead. */
  export type Outbound = AppBskyFeedSearchPostsResponseBody$Outbound;
}
