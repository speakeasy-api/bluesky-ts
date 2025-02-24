/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type UnauthorizedAppBskyNotificationRegisterPushResponseBodyErrorData = {
  error: "AuthMissing";
  message: string;
};

/**
 * Unauthorized
 */
export class UnauthorizedAppBskyNotificationRegisterPushResponseBodyError
  extends Error
{
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$: UnauthorizedAppBskyNotificationRegisterPushResponseBodyErrorData;

  constructor(
    err: UnauthorizedAppBskyNotificationRegisterPushResponseBodyErrorData,
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "UnauthorizedAppBskyNotificationRegisterPushResponseBodyError";
  }
}

export const AppBskyNotificationRegisterPushError = {
  InvalidRequest: "InvalidRequest",
  ExpiredToken: "ExpiredToken",
  InvalidToken: "InvalidToken",
} as const;
export type AppBskyNotificationRegisterPushError = ClosedEnum<
  typeof AppBskyNotificationRegisterPushError
>;

/**
 * Bad Request
 */
export type BadRequestAppBskyNotificationRegisterPushResponseBodyErrorData = {
  error: AppBskyNotificationRegisterPushError;
  message: string;
};

/**
 * Bad Request
 */
export class BadRequestAppBskyNotificationRegisterPushResponseBodyError
  extends Error
{
  error: AppBskyNotificationRegisterPushError;

  /** The original data that was passed to this error instance. */
  data$: BadRequestAppBskyNotificationRegisterPushResponseBodyErrorData;

  constructor(
    err: BadRequestAppBskyNotificationRegisterPushResponseBodyErrorData,
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "BadRequestAppBskyNotificationRegisterPushResponseBodyError";
  }
}

/** @internal */
export const UnauthorizedAppBskyNotificationRegisterPushResponseBodyError$inboundSchema:
  z.ZodType<
    UnauthorizedAppBskyNotificationRegisterPushResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.literal("AuthMissing"),
    message: z.string(),
  })
    .transform((v) => {
      return new UnauthorizedAppBskyNotificationRegisterPushResponseBodyError(
        v,
      );
    });

/** @internal */
export type UnauthorizedAppBskyNotificationRegisterPushResponseBodyError$Outbound =
  {
    error: "AuthMissing";
    message: string;
  };

/** @internal */
export const UnauthorizedAppBskyNotificationRegisterPushResponseBodyError$outboundSchema:
  z.ZodType<
    UnauthorizedAppBskyNotificationRegisterPushResponseBodyError$Outbound,
    z.ZodTypeDef,
    UnauthorizedAppBskyNotificationRegisterPushResponseBodyError
  > = z.instanceof(UnauthorizedAppBskyNotificationRegisterPushResponseBodyError)
    .transform(v => v.data$)
    .pipe(z.object({
      error: z.literal("AuthMissing").default("AuthMissing" as const),
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnauthorizedAppBskyNotificationRegisterPushResponseBodyError$ {
  /** @deprecated use `UnauthorizedAppBskyNotificationRegisterPushResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    UnauthorizedAppBskyNotificationRegisterPushResponseBodyError$inboundSchema;
  /** @deprecated use `UnauthorizedAppBskyNotificationRegisterPushResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    UnauthorizedAppBskyNotificationRegisterPushResponseBodyError$outboundSchema;
  /** @deprecated use `UnauthorizedAppBskyNotificationRegisterPushResponseBodyError$Outbound` instead. */
  export type Outbound =
    UnauthorizedAppBskyNotificationRegisterPushResponseBodyError$Outbound;
}

/** @internal */
export const AppBskyNotificationRegisterPushError$inboundSchema:
  z.ZodNativeEnum<typeof AppBskyNotificationRegisterPushError> = z.nativeEnum(
    AppBskyNotificationRegisterPushError,
  );

/** @internal */
export const AppBskyNotificationRegisterPushError$outboundSchema:
  z.ZodNativeEnum<typeof AppBskyNotificationRegisterPushError> =
    AppBskyNotificationRegisterPushError$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyNotificationRegisterPushError$ {
  /** @deprecated use `AppBskyNotificationRegisterPushError$inboundSchema` instead. */
  export const inboundSchema =
    AppBskyNotificationRegisterPushError$inboundSchema;
  /** @deprecated use `AppBskyNotificationRegisterPushError$outboundSchema` instead. */
  export const outboundSchema =
    AppBskyNotificationRegisterPushError$outboundSchema;
}

/** @internal */
export const BadRequestAppBskyNotificationRegisterPushResponseBodyError$inboundSchema:
  z.ZodType<
    BadRequestAppBskyNotificationRegisterPushResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: AppBskyNotificationRegisterPushError$inboundSchema,
    message: z.string(),
  })
    .transform((v) => {
      return new BadRequestAppBskyNotificationRegisterPushResponseBodyError(v);
    });

/** @internal */
export type BadRequestAppBskyNotificationRegisterPushResponseBodyError$Outbound =
  {
    error: string;
    message: string;
  };

/** @internal */
export const BadRequestAppBskyNotificationRegisterPushResponseBodyError$outboundSchema:
  z.ZodType<
    BadRequestAppBskyNotificationRegisterPushResponseBodyError$Outbound,
    z.ZodTypeDef,
    BadRequestAppBskyNotificationRegisterPushResponseBodyError
  > = z.instanceof(BadRequestAppBskyNotificationRegisterPushResponseBodyError)
    .transform(v => v.data$)
    .pipe(z.object({
      error: AppBskyNotificationRegisterPushError$outboundSchema,
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BadRequestAppBskyNotificationRegisterPushResponseBodyError$ {
  /** @deprecated use `BadRequestAppBskyNotificationRegisterPushResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    BadRequestAppBskyNotificationRegisterPushResponseBodyError$inboundSchema;
  /** @deprecated use `BadRequestAppBskyNotificationRegisterPushResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    BadRequestAppBskyNotificationRegisterPushResponseBodyError$outboundSchema;
  /** @deprecated use `BadRequestAppBskyNotificationRegisterPushResponseBodyError$Outbound` instead. */
  export type Outbound =
    BadRequestAppBskyNotificationRegisterPushResponseBodyError$Outbound;
}
