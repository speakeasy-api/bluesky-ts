/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type AppBskyActorSearchActorsTypeaheadAppBskyActorResponseBodyData = {
  error: "AuthMissing";
  message: string;
};

/**
 * Unauthorized
 */
export class AppBskyActorSearchActorsTypeaheadAppBskyActorResponseBody
  extends Error
{
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$: AppBskyActorSearchActorsTypeaheadAppBskyActorResponseBodyData;

  constructor(
    err: AppBskyActorSearchActorsTypeaheadAppBskyActorResponseBodyData,
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "AppBskyActorSearchActorsTypeaheadAppBskyActorResponseBody";
  }
}

export const AppBskyActorSearchActorsTypeaheadError = {
  InvalidRequest: "InvalidRequest",
  ExpiredToken: "ExpiredToken",
  InvalidToken: "InvalidToken",
} as const;
export type AppBskyActorSearchActorsTypeaheadError = ClosedEnum<
  typeof AppBskyActorSearchActorsTypeaheadError
>;

/**
 * Bad Request
 */
export type AppBskyActorSearchActorsTypeaheadResponseBodyData = {
  error: AppBskyActorSearchActorsTypeaheadError;
  message: string;
};

/**
 * Bad Request
 */
export class AppBskyActorSearchActorsTypeaheadResponseBody extends Error {
  error: AppBskyActorSearchActorsTypeaheadError;

  /** The original data that was passed to this error instance. */
  data$: AppBskyActorSearchActorsTypeaheadResponseBodyData;

  constructor(err: AppBskyActorSearchActorsTypeaheadResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "AppBskyActorSearchActorsTypeaheadResponseBody";
  }
}

/** @internal */
export const AppBskyActorSearchActorsTypeaheadAppBskyActorResponseBody$inboundSchema:
  z.ZodType<
    AppBskyActorSearchActorsTypeaheadAppBskyActorResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.literal("AuthMissing"),
    message: z.string(),
  })
    .transform((v) => {
      return new AppBskyActorSearchActorsTypeaheadAppBskyActorResponseBody(v);
    });

/** @internal */
export type AppBskyActorSearchActorsTypeaheadAppBskyActorResponseBody$Outbound =
  {
    error: "AuthMissing";
    message: string;
  };

/** @internal */
export const AppBskyActorSearchActorsTypeaheadAppBskyActorResponseBody$outboundSchema:
  z.ZodType<
    AppBskyActorSearchActorsTypeaheadAppBskyActorResponseBody$Outbound,
    z.ZodTypeDef,
    AppBskyActorSearchActorsTypeaheadAppBskyActorResponseBody
  > = z.instanceof(AppBskyActorSearchActorsTypeaheadAppBskyActorResponseBody)
    .transform(v => v.data$)
    .pipe(z.object({
      error: z.literal("AuthMissing").default("AuthMissing" as const),
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyActorSearchActorsTypeaheadAppBskyActorResponseBody$ {
  /** @deprecated use `AppBskyActorSearchActorsTypeaheadAppBskyActorResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    AppBskyActorSearchActorsTypeaheadAppBskyActorResponseBody$inboundSchema;
  /** @deprecated use `AppBskyActorSearchActorsTypeaheadAppBskyActorResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    AppBskyActorSearchActorsTypeaheadAppBskyActorResponseBody$outboundSchema;
  /** @deprecated use `AppBskyActorSearchActorsTypeaheadAppBskyActorResponseBody$Outbound` instead. */
  export type Outbound =
    AppBskyActorSearchActorsTypeaheadAppBskyActorResponseBody$Outbound;
}

/** @internal */
export const AppBskyActorSearchActorsTypeaheadError$inboundSchema:
  z.ZodNativeEnum<typeof AppBskyActorSearchActorsTypeaheadError> = z.nativeEnum(
    AppBskyActorSearchActorsTypeaheadError,
  );

/** @internal */
export const AppBskyActorSearchActorsTypeaheadError$outboundSchema:
  z.ZodNativeEnum<typeof AppBskyActorSearchActorsTypeaheadError> =
    AppBskyActorSearchActorsTypeaheadError$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyActorSearchActorsTypeaheadError$ {
  /** @deprecated use `AppBskyActorSearchActorsTypeaheadError$inboundSchema` instead. */
  export const inboundSchema =
    AppBskyActorSearchActorsTypeaheadError$inboundSchema;
  /** @deprecated use `AppBskyActorSearchActorsTypeaheadError$outboundSchema` instead. */
  export const outboundSchema =
    AppBskyActorSearchActorsTypeaheadError$outboundSchema;
}

/** @internal */
export const AppBskyActorSearchActorsTypeaheadResponseBody$inboundSchema:
  z.ZodType<
    AppBskyActorSearchActorsTypeaheadResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: AppBskyActorSearchActorsTypeaheadError$inboundSchema,
    message: z.string(),
  })
    .transform((v) => {
      return new AppBskyActorSearchActorsTypeaheadResponseBody(v);
    });

/** @internal */
export type AppBskyActorSearchActorsTypeaheadResponseBody$Outbound = {
  error: string;
  message: string;
};

/** @internal */
export const AppBskyActorSearchActorsTypeaheadResponseBody$outboundSchema:
  z.ZodType<
    AppBskyActorSearchActorsTypeaheadResponseBody$Outbound,
    z.ZodTypeDef,
    AppBskyActorSearchActorsTypeaheadResponseBody
  > = z.instanceof(AppBskyActorSearchActorsTypeaheadResponseBody)
    .transform(v => v.data$)
    .pipe(z.object({
      error: AppBskyActorSearchActorsTypeaheadError$outboundSchema,
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyActorSearchActorsTypeaheadResponseBody$ {
  /** @deprecated use `AppBskyActorSearchActorsTypeaheadResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    AppBskyActorSearchActorsTypeaheadResponseBody$inboundSchema;
  /** @deprecated use `AppBskyActorSearchActorsTypeaheadResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    AppBskyActorSearchActorsTypeaheadResponseBody$outboundSchema;
  /** @deprecated use `AppBskyActorSearchActorsTypeaheadResponseBody$Outbound` instead. */
  export type Outbound = AppBskyActorSearchActorsTypeaheadResponseBody$Outbound;
}
