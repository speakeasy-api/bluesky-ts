/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type AppBskyGraphGetFollowersGraphResponseBodyData = {
  error: "AuthMissing";
  message: string;
};

/**
 * Unauthorized
 */
export class AppBskyGraphGetFollowersGraphResponseBody extends Error {
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$: AppBskyGraphGetFollowersGraphResponseBodyData;

  constructor(err: AppBskyGraphGetFollowersGraphResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "AppBskyGraphGetFollowersGraphResponseBody";
  }
}

export const AppBskyGraphGetFollowersError = {
  InvalidRequest: "InvalidRequest",
  ExpiredToken: "ExpiredToken",
  InvalidToken: "InvalidToken",
} as const;
export type AppBskyGraphGetFollowersError = ClosedEnum<
  typeof AppBskyGraphGetFollowersError
>;

/**
 * Bad Request
 */
export type AppBskyGraphGetFollowersResponseBodyData = {
  error: AppBskyGraphGetFollowersError;
  message: string;
};

/**
 * Bad Request
 */
export class AppBskyGraphGetFollowersResponseBody extends Error {
  error: AppBskyGraphGetFollowersError;

  /** The original data that was passed to this error instance. */
  data$: AppBskyGraphGetFollowersResponseBodyData;

  constructor(err: AppBskyGraphGetFollowersResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "AppBskyGraphGetFollowersResponseBody";
  }
}

/** @internal */
export const AppBskyGraphGetFollowersGraphResponseBody$inboundSchema: z.ZodType<
  AppBskyGraphGetFollowersGraphResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  error: z.literal("AuthMissing"),
  message: z.string(),
})
  .transform((v) => {
    return new AppBskyGraphGetFollowersGraphResponseBody(v);
  });

/** @internal */
export type AppBskyGraphGetFollowersGraphResponseBody$Outbound = {
  error: "AuthMissing";
  message: string;
};

/** @internal */
export const AppBskyGraphGetFollowersGraphResponseBody$outboundSchema:
  z.ZodType<
    AppBskyGraphGetFollowersGraphResponseBody$Outbound,
    z.ZodTypeDef,
    AppBskyGraphGetFollowersGraphResponseBody
  > = z.instanceof(AppBskyGraphGetFollowersGraphResponseBody)
    .transform(v => v.data$)
    .pipe(z.object({
      error: z.literal("AuthMissing").default("AuthMissing" as const),
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyGraphGetFollowersGraphResponseBody$ {
  /** @deprecated use `AppBskyGraphGetFollowersGraphResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    AppBskyGraphGetFollowersGraphResponseBody$inboundSchema;
  /** @deprecated use `AppBskyGraphGetFollowersGraphResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    AppBskyGraphGetFollowersGraphResponseBody$outboundSchema;
  /** @deprecated use `AppBskyGraphGetFollowersGraphResponseBody$Outbound` instead. */
  export type Outbound = AppBskyGraphGetFollowersGraphResponseBody$Outbound;
}

/** @internal */
export const AppBskyGraphGetFollowersError$inboundSchema: z.ZodNativeEnum<
  typeof AppBskyGraphGetFollowersError
> = z.nativeEnum(AppBskyGraphGetFollowersError);

/** @internal */
export const AppBskyGraphGetFollowersError$outboundSchema: z.ZodNativeEnum<
  typeof AppBskyGraphGetFollowersError
> = AppBskyGraphGetFollowersError$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyGraphGetFollowersError$ {
  /** @deprecated use `AppBskyGraphGetFollowersError$inboundSchema` instead. */
  export const inboundSchema = AppBskyGraphGetFollowersError$inboundSchema;
  /** @deprecated use `AppBskyGraphGetFollowersError$outboundSchema` instead. */
  export const outboundSchema = AppBskyGraphGetFollowersError$outboundSchema;
}

/** @internal */
export const AppBskyGraphGetFollowersResponseBody$inboundSchema: z.ZodType<
  AppBskyGraphGetFollowersResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  error: AppBskyGraphGetFollowersError$inboundSchema,
  message: z.string(),
})
  .transform((v) => {
    return new AppBskyGraphGetFollowersResponseBody(v);
  });

/** @internal */
export type AppBskyGraphGetFollowersResponseBody$Outbound = {
  error: string;
  message: string;
};

/** @internal */
export const AppBskyGraphGetFollowersResponseBody$outboundSchema: z.ZodType<
  AppBskyGraphGetFollowersResponseBody$Outbound,
  z.ZodTypeDef,
  AppBskyGraphGetFollowersResponseBody
> = z.instanceof(AppBskyGraphGetFollowersResponseBody)
  .transform(v => v.data$)
  .pipe(z.object({
    error: AppBskyGraphGetFollowersError$outboundSchema,
    message: z.string(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyGraphGetFollowersResponseBody$ {
  /** @deprecated use `AppBskyGraphGetFollowersResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    AppBskyGraphGetFollowersResponseBody$inboundSchema;
  /** @deprecated use `AppBskyGraphGetFollowersResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    AppBskyGraphGetFollowersResponseBody$outboundSchema;
  /** @deprecated use `AppBskyGraphGetFollowersResponseBody$Outbound` instead. */
  export type Outbound = AppBskyGraphGetFollowersResponseBody$Outbound;
}
