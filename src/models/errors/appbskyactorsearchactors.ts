/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type AppBskyActorSearchActorsAppBskyActorResponseBodyData = {
  error: "AuthMissing";
  message: string;
};

/**
 * Unauthorized
 */
export class AppBskyActorSearchActorsAppBskyActorResponseBody extends Error {
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$: AppBskyActorSearchActorsAppBskyActorResponseBodyData;

  constructor(err: AppBskyActorSearchActorsAppBskyActorResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "AppBskyActorSearchActorsAppBskyActorResponseBody";
  }
}

export const AppBskyActorSearchActorsError = {
  InvalidRequest: "InvalidRequest",
  ExpiredToken: "ExpiredToken",
  InvalidToken: "InvalidToken",
} as const;
export type AppBskyActorSearchActorsError = ClosedEnum<
  typeof AppBskyActorSearchActorsError
>;

/**
 * Bad Request
 */
export type AppBskyActorSearchActorsResponseBodyData = {
  error: AppBskyActorSearchActorsError;
  message: string;
};

/**
 * Bad Request
 */
export class AppBskyActorSearchActorsResponseBody extends Error {
  error: AppBskyActorSearchActorsError;

  /** The original data that was passed to this error instance. */
  data$: AppBskyActorSearchActorsResponseBodyData;

  constructor(err: AppBskyActorSearchActorsResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "AppBskyActorSearchActorsResponseBody";
  }
}

/** @internal */
export const AppBskyActorSearchActorsAppBskyActorResponseBody$inboundSchema:
  z.ZodType<
    AppBskyActorSearchActorsAppBskyActorResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.literal("AuthMissing"),
    message: z.string(),
  })
    .transform((v) => {
      return new AppBskyActorSearchActorsAppBskyActorResponseBody(v);
    });

/** @internal */
export type AppBskyActorSearchActorsAppBskyActorResponseBody$Outbound = {
  error: "AuthMissing";
  message: string;
};

/** @internal */
export const AppBskyActorSearchActorsAppBskyActorResponseBody$outboundSchema:
  z.ZodType<
    AppBskyActorSearchActorsAppBskyActorResponseBody$Outbound,
    z.ZodTypeDef,
    AppBskyActorSearchActorsAppBskyActorResponseBody
  > = z.instanceof(AppBskyActorSearchActorsAppBskyActorResponseBody)
    .transform(v => v.data$)
    .pipe(z.object({
      error: z.literal("AuthMissing").default("AuthMissing" as const),
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyActorSearchActorsAppBskyActorResponseBody$ {
  /** @deprecated use `AppBskyActorSearchActorsAppBskyActorResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    AppBskyActorSearchActorsAppBskyActorResponseBody$inboundSchema;
  /** @deprecated use `AppBskyActorSearchActorsAppBskyActorResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    AppBskyActorSearchActorsAppBskyActorResponseBody$outboundSchema;
  /** @deprecated use `AppBskyActorSearchActorsAppBskyActorResponseBody$Outbound` instead. */
  export type Outbound =
    AppBskyActorSearchActorsAppBskyActorResponseBody$Outbound;
}

/** @internal */
export const AppBskyActorSearchActorsError$inboundSchema: z.ZodNativeEnum<
  typeof AppBskyActorSearchActorsError
> = z.nativeEnum(AppBskyActorSearchActorsError);

/** @internal */
export const AppBskyActorSearchActorsError$outboundSchema: z.ZodNativeEnum<
  typeof AppBskyActorSearchActorsError
> = AppBskyActorSearchActorsError$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyActorSearchActorsError$ {
  /** @deprecated use `AppBskyActorSearchActorsError$inboundSchema` instead. */
  export const inboundSchema = AppBskyActorSearchActorsError$inboundSchema;
  /** @deprecated use `AppBskyActorSearchActorsError$outboundSchema` instead. */
  export const outboundSchema = AppBskyActorSearchActorsError$outboundSchema;
}

/** @internal */
export const AppBskyActorSearchActorsResponseBody$inboundSchema: z.ZodType<
  AppBskyActorSearchActorsResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  error: AppBskyActorSearchActorsError$inboundSchema,
  message: z.string(),
})
  .transform((v) => {
    return new AppBskyActorSearchActorsResponseBody(v);
  });

/** @internal */
export type AppBskyActorSearchActorsResponseBody$Outbound = {
  error: string;
  message: string;
};

/** @internal */
export const AppBskyActorSearchActorsResponseBody$outboundSchema: z.ZodType<
  AppBskyActorSearchActorsResponseBody$Outbound,
  z.ZodTypeDef,
  AppBskyActorSearchActorsResponseBody
> = z.instanceof(AppBskyActorSearchActorsResponseBody)
  .transform(v => v.data$)
  .pipe(z.object({
    error: AppBskyActorSearchActorsError$outboundSchema,
    message: z.string(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyActorSearchActorsResponseBody$ {
  /** @deprecated use `AppBskyActorSearchActorsResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    AppBskyActorSearchActorsResponseBody$inboundSchema;
  /** @deprecated use `AppBskyActorSearchActorsResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    AppBskyActorSearchActorsResponseBody$outboundSchema;
  /** @deprecated use `AppBskyActorSearchActorsResponseBody$Outbound` instead. */
  export type Outbound = AppBskyActorSearchActorsResponseBody$Outbound;
}
