/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type AppBskyVideoUploadVideoVideoResponseBodyData = {
  error: "AuthMissing";
  message: string;
};

/**
 * Unauthorized
 */
export class AppBskyVideoUploadVideoVideoResponseBody extends Error {
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$: AppBskyVideoUploadVideoVideoResponseBodyData;

  constructor(err: AppBskyVideoUploadVideoVideoResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "AppBskyVideoUploadVideoVideoResponseBody";
  }
}

export const AppBskyVideoUploadVideoError = {
  InvalidRequest: "InvalidRequest",
  ExpiredToken: "ExpiredToken",
  InvalidToken: "InvalidToken",
} as const;
export type AppBskyVideoUploadVideoError = ClosedEnum<
  typeof AppBskyVideoUploadVideoError
>;

/**
 * Bad Request
 */
export type AppBskyVideoUploadVideoResponseBodyData = {
  error: AppBskyVideoUploadVideoError;
  message: string;
};

/**
 * Bad Request
 */
export class AppBskyVideoUploadVideoResponseBody extends Error {
  error: AppBskyVideoUploadVideoError;

  /** The original data that was passed to this error instance. */
  data$: AppBskyVideoUploadVideoResponseBodyData;

  constructor(err: AppBskyVideoUploadVideoResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "AppBskyVideoUploadVideoResponseBody";
  }
}

/** @internal */
export const AppBskyVideoUploadVideoVideoResponseBody$inboundSchema: z.ZodType<
  AppBskyVideoUploadVideoVideoResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  error: z.literal("AuthMissing"),
  message: z.string(),
})
  .transform((v) => {
    return new AppBskyVideoUploadVideoVideoResponseBody(v);
  });

/** @internal */
export type AppBskyVideoUploadVideoVideoResponseBody$Outbound = {
  error: "AuthMissing";
  message: string;
};

/** @internal */
export const AppBskyVideoUploadVideoVideoResponseBody$outboundSchema: z.ZodType<
  AppBskyVideoUploadVideoVideoResponseBody$Outbound,
  z.ZodTypeDef,
  AppBskyVideoUploadVideoVideoResponseBody
> = z.instanceof(AppBskyVideoUploadVideoVideoResponseBody)
  .transform(v => v.data$)
  .pipe(z.object({
    error: z.literal("AuthMissing").default("AuthMissing" as const),
    message: z.string(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyVideoUploadVideoVideoResponseBody$ {
  /** @deprecated use `AppBskyVideoUploadVideoVideoResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    AppBskyVideoUploadVideoVideoResponseBody$inboundSchema;
  /** @deprecated use `AppBskyVideoUploadVideoVideoResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    AppBskyVideoUploadVideoVideoResponseBody$outboundSchema;
  /** @deprecated use `AppBskyVideoUploadVideoVideoResponseBody$Outbound` instead. */
  export type Outbound = AppBskyVideoUploadVideoVideoResponseBody$Outbound;
}

/** @internal */
export const AppBskyVideoUploadVideoError$inboundSchema: z.ZodNativeEnum<
  typeof AppBskyVideoUploadVideoError
> = z.nativeEnum(AppBskyVideoUploadVideoError);

/** @internal */
export const AppBskyVideoUploadVideoError$outboundSchema: z.ZodNativeEnum<
  typeof AppBskyVideoUploadVideoError
> = AppBskyVideoUploadVideoError$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyVideoUploadVideoError$ {
  /** @deprecated use `AppBskyVideoUploadVideoError$inboundSchema` instead. */
  export const inboundSchema = AppBskyVideoUploadVideoError$inboundSchema;
  /** @deprecated use `AppBskyVideoUploadVideoError$outboundSchema` instead. */
  export const outboundSchema = AppBskyVideoUploadVideoError$outboundSchema;
}

/** @internal */
export const AppBskyVideoUploadVideoResponseBody$inboundSchema: z.ZodType<
  AppBskyVideoUploadVideoResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  error: AppBskyVideoUploadVideoError$inboundSchema,
  message: z.string(),
})
  .transform((v) => {
    return new AppBskyVideoUploadVideoResponseBody(v);
  });

/** @internal */
export type AppBskyVideoUploadVideoResponseBody$Outbound = {
  error: string;
  message: string;
};

/** @internal */
export const AppBskyVideoUploadVideoResponseBody$outboundSchema: z.ZodType<
  AppBskyVideoUploadVideoResponseBody$Outbound,
  z.ZodTypeDef,
  AppBskyVideoUploadVideoResponseBody
> = z.instanceof(AppBskyVideoUploadVideoResponseBody)
  .transform(v => v.data$)
  .pipe(z.object({
    error: AppBskyVideoUploadVideoError$outboundSchema,
    message: z.string(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyVideoUploadVideoResponseBody$ {
  /** @deprecated use `AppBskyVideoUploadVideoResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    AppBskyVideoUploadVideoResponseBody$inboundSchema;
  /** @deprecated use `AppBskyVideoUploadVideoResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    AppBskyVideoUploadVideoResponseBody$outboundSchema;
  /** @deprecated use `AppBskyVideoUploadVideoResponseBody$Outbound` instead. */
  export type Outbound = AppBskyVideoUploadVideoResponseBody$Outbound;
}
