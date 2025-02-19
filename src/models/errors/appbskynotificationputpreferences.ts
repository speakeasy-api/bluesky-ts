/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type UnauthorizedAppBskyNotificationPutPreferencesResponseBodyErrorData =
  {
    error: "AuthMissing";
    message: string;
  };

/**
 * Unauthorized
 */
export class UnauthorizedAppBskyNotificationPutPreferencesResponseBodyError
  extends Error
{
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$: UnauthorizedAppBskyNotificationPutPreferencesResponseBodyErrorData;

  constructor(
    err: UnauthorizedAppBskyNotificationPutPreferencesResponseBodyErrorData,
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name =
      "UnauthorizedAppBskyNotificationPutPreferencesResponseBodyError";
  }
}

export const AppBskyNotificationPutPreferencesError = {
  InvalidRequest: "InvalidRequest",
  ExpiredToken: "ExpiredToken",
  InvalidToken: "InvalidToken",
} as const;
export type AppBskyNotificationPutPreferencesError = ClosedEnum<
  typeof AppBskyNotificationPutPreferencesError
>;

/**
 * Bad Request
 */
export type BadRequestAppBskyNotificationPutPreferencesResponseBodyErrorData = {
  error: AppBskyNotificationPutPreferencesError;
  message: string;
};

/**
 * Bad Request
 */
export class BadRequestAppBskyNotificationPutPreferencesResponseBodyError
  extends Error
{
  error: AppBskyNotificationPutPreferencesError;

  /** The original data that was passed to this error instance. */
  data$: BadRequestAppBskyNotificationPutPreferencesResponseBodyErrorData;

  constructor(
    err: BadRequestAppBskyNotificationPutPreferencesResponseBodyErrorData,
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "BadRequestAppBskyNotificationPutPreferencesResponseBodyError";
  }
}

/** @internal */
export const UnauthorizedAppBskyNotificationPutPreferencesResponseBodyError$inboundSchema:
  z.ZodType<
    UnauthorizedAppBskyNotificationPutPreferencesResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.literal("AuthMissing"),
    message: z.string(),
  })
    .transform((v) => {
      return new UnauthorizedAppBskyNotificationPutPreferencesResponseBodyError(
        v,
      );
    });

/** @internal */
export type UnauthorizedAppBskyNotificationPutPreferencesResponseBodyError$Outbound =
  {
    error: "AuthMissing";
    message: string;
  };

/** @internal */
export const UnauthorizedAppBskyNotificationPutPreferencesResponseBodyError$outboundSchema:
  z.ZodType<
    UnauthorizedAppBskyNotificationPutPreferencesResponseBodyError$Outbound,
    z.ZodTypeDef,
    UnauthorizedAppBskyNotificationPutPreferencesResponseBodyError
  > = z.instanceof(
    UnauthorizedAppBskyNotificationPutPreferencesResponseBodyError,
  )
    .transform(v => v.data$)
    .pipe(z.object({
      error: z.literal("AuthMissing").default("AuthMissing" as const),
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnauthorizedAppBskyNotificationPutPreferencesResponseBodyError$ {
  /** @deprecated use `UnauthorizedAppBskyNotificationPutPreferencesResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    UnauthorizedAppBskyNotificationPutPreferencesResponseBodyError$inboundSchema;
  /** @deprecated use `UnauthorizedAppBskyNotificationPutPreferencesResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    UnauthorizedAppBskyNotificationPutPreferencesResponseBodyError$outboundSchema;
  /** @deprecated use `UnauthorizedAppBskyNotificationPutPreferencesResponseBodyError$Outbound` instead. */
  export type Outbound =
    UnauthorizedAppBskyNotificationPutPreferencesResponseBodyError$Outbound;
}

/** @internal */
export const AppBskyNotificationPutPreferencesError$inboundSchema:
  z.ZodNativeEnum<typeof AppBskyNotificationPutPreferencesError> = z.nativeEnum(
    AppBskyNotificationPutPreferencesError,
  );

/** @internal */
export const AppBskyNotificationPutPreferencesError$outboundSchema:
  z.ZodNativeEnum<typeof AppBskyNotificationPutPreferencesError> =
    AppBskyNotificationPutPreferencesError$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyNotificationPutPreferencesError$ {
  /** @deprecated use `AppBskyNotificationPutPreferencesError$inboundSchema` instead. */
  export const inboundSchema =
    AppBskyNotificationPutPreferencesError$inboundSchema;
  /** @deprecated use `AppBskyNotificationPutPreferencesError$outboundSchema` instead. */
  export const outboundSchema =
    AppBskyNotificationPutPreferencesError$outboundSchema;
}

/** @internal */
export const BadRequestAppBskyNotificationPutPreferencesResponseBodyError$inboundSchema:
  z.ZodType<
    BadRequestAppBskyNotificationPutPreferencesResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: AppBskyNotificationPutPreferencesError$inboundSchema,
    message: z.string(),
  })
    .transform((v) => {
      return new BadRequestAppBskyNotificationPutPreferencesResponseBodyError(
        v,
      );
    });

/** @internal */
export type BadRequestAppBskyNotificationPutPreferencesResponseBodyError$Outbound =
  {
    error: string;
    message: string;
  };

/** @internal */
export const BadRequestAppBskyNotificationPutPreferencesResponseBodyError$outboundSchema:
  z.ZodType<
    BadRequestAppBskyNotificationPutPreferencesResponseBodyError$Outbound,
    z.ZodTypeDef,
    BadRequestAppBskyNotificationPutPreferencesResponseBodyError
  > = z.instanceof(BadRequestAppBskyNotificationPutPreferencesResponseBodyError)
    .transform(v => v.data$)
    .pipe(z.object({
      error: AppBskyNotificationPutPreferencesError$outboundSchema,
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BadRequestAppBskyNotificationPutPreferencesResponseBodyError$ {
  /** @deprecated use `BadRequestAppBskyNotificationPutPreferencesResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    BadRequestAppBskyNotificationPutPreferencesResponseBodyError$inboundSchema;
  /** @deprecated use `BadRequestAppBskyNotificationPutPreferencesResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    BadRequestAppBskyNotificationPutPreferencesResponseBodyError$outboundSchema;
  /** @deprecated use `BadRequestAppBskyNotificationPutPreferencesResponseBodyError$Outbound` instead. */
  export type Outbound =
    BadRequestAppBskyNotificationPutPreferencesResponseBodyError$Outbound;
}
