/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type AppBskyGraphGetBlocksGraphResponseBodyData = {
  error: "AuthMissing";
  message: string;
};

/**
 * Unauthorized
 */
export class AppBskyGraphGetBlocksGraphResponseBody extends Error {
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$: AppBskyGraphGetBlocksGraphResponseBodyData;

  constructor(err: AppBskyGraphGetBlocksGraphResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "AppBskyGraphGetBlocksGraphResponseBody";
  }
}

export const AppBskyGraphGetBlocksError = {
  InvalidRequest: "InvalidRequest",
  ExpiredToken: "ExpiredToken",
  InvalidToken: "InvalidToken",
} as const;
export type AppBskyGraphGetBlocksError = ClosedEnum<
  typeof AppBskyGraphGetBlocksError
>;

/**
 * Bad Request
 */
export type AppBskyGraphGetBlocksResponseBodyData = {
  error: AppBskyGraphGetBlocksError;
  message: string;
};

/**
 * Bad Request
 */
export class AppBskyGraphGetBlocksResponseBody extends Error {
  error: AppBskyGraphGetBlocksError;

  /** The original data that was passed to this error instance. */
  data$: AppBskyGraphGetBlocksResponseBodyData;

  constructor(err: AppBskyGraphGetBlocksResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "AppBskyGraphGetBlocksResponseBody";
  }
}

/** @internal */
export const AppBskyGraphGetBlocksGraphResponseBody$inboundSchema: z.ZodType<
  AppBskyGraphGetBlocksGraphResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  error: z.literal("AuthMissing"),
  message: z.string(),
})
  .transform((v) => {
    return new AppBskyGraphGetBlocksGraphResponseBody(v);
  });

/** @internal */
export type AppBskyGraphGetBlocksGraphResponseBody$Outbound = {
  error: "AuthMissing";
  message: string;
};

/** @internal */
export const AppBskyGraphGetBlocksGraphResponseBody$outboundSchema: z.ZodType<
  AppBskyGraphGetBlocksGraphResponseBody$Outbound,
  z.ZodTypeDef,
  AppBskyGraphGetBlocksGraphResponseBody
> = z.instanceof(AppBskyGraphGetBlocksGraphResponseBody)
  .transform(v => v.data$)
  .pipe(z.object({
    error: z.literal("AuthMissing").default("AuthMissing" as const),
    message: z.string(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyGraphGetBlocksGraphResponseBody$ {
  /** @deprecated use `AppBskyGraphGetBlocksGraphResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    AppBskyGraphGetBlocksGraphResponseBody$inboundSchema;
  /** @deprecated use `AppBskyGraphGetBlocksGraphResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    AppBskyGraphGetBlocksGraphResponseBody$outboundSchema;
  /** @deprecated use `AppBskyGraphGetBlocksGraphResponseBody$Outbound` instead. */
  export type Outbound = AppBskyGraphGetBlocksGraphResponseBody$Outbound;
}

/** @internal */
export const AppBskyGraphGetBlocksError$inboundSchema: z.ZodNativeEnum<
  typeof AppBskyGraphGetBlocksError
> = z.nativeEnum(AppBskyGraphGetBlocksError);

/** @internal */
export const AppBskyGraphGetBlocksError$outboundSchema: z.ZodNativeEnum<
  typeof AppBskyGraphGetBlocksError
> = AppBskyGraphGetBlocksError$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyGraphGetBlocksError$ {
  /** @deprecated use `AppBskyGraphGetBlocksError$inboundSchema` instead. */
  export const inboundSchema = AppBskyGraphGetBlocksError$inboundSchema;
  /** @deprecated use `AppBskyGraphGetBlocksError$outboundSchema` instead. */
  export const outboundSchema = AppBskyGraphGetBlocksError$outboundSchema;
}

/** @internal */
export const AppBskyGraphGetBlocksResponseBody$inboundSchema: z.ZodType<
  AppBskyGraphGetBlocksResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  error: AppBskyGraphGetBlocksError$inboundSchema,
  message: z.string(),
})
  .transform((v) => {
    return new AppBskyGraphGetBlocksResponseBody(v);
  });

/** @internal */
export type AppBskyGraphGetBlocksResponseBody$Outbound = {
  error: string;
  message: string;
};

/** @internal */
export const AppBskyGraphGetBlocksResponseBody$outboundSchema: z.ZodType<
  AppBskyGraphGetBlocksResponseBody$Outbound,
  z.ZodTypeDef,
  AppBskyGraphGetBlocksResponseBody
> = z.instanceof(AppBskyGraphGetBlocksResponseBody)
  .transform(v => v.data$)
  .pipe(z.object({
    error: AppBskyGraphGetBlocksError$outboundSchema,
    message: z.string(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyGraphGetBlocksResponseBody$ {
  /** @deprecated use `AppBskyGraphGetBlocksResponseBody$inboundSchema` instead. */
  export const inboundSchema = AppBskyGraphGetBlocksResponseBody$inboundSchema;
  /** @deprecated use `AppBskyGraphGetBlocksResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    AppBskyGraphGetBlocksResponseBody$outboundSchema;
  /** @deprecated use `AppBskyGraphGetBlocksResponseBody$Outbound` instead. */
  export type Outbound = AppBskyGraphGetBlocksResponseBody$Outbound;
}
