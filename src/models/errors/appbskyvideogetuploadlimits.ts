/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type UnauthorizedAppBskyVideoGetUploadLimitsResponseBodyErrorData = {
  error: "AuthMissing";
  message: string;
};

/**
 * Unauthorized
 */
export class UnauthorizedAppBskyVideoGetUploadLimitsResponseBodyError
  extends Error
{
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$: UnauthorizedAppBskyVideoGetUploadLimitsResponseBodyErrorData;

  constructor(
    err: UnauthorizedAppBskyVideoGetUploadLimitsResponseBodyErrorData,
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "UnauthorizedAppBskyVideoGetUploadLimitsResponseBodyError";
  }
}

export const AppBskyVideoGetUploadLimitsError = {
  InvalidRequest: "InvalidRequest",
  ExpiredToken: "ExpiredToken",
  InvalidToken: "InvalidToken",
} as const;
export type AppBskyVideoGetUploadLimitsError = ClosedEnum<
  typeof AppBskyVideoGetUploadLimitsError
>;

/**
 * Bad Request
 */
export type BadRequestAppBskyVideoGetUploadLimitsResponseBodyErrorData = {
  error: AppBskyVideoGetUploadLimitsError;
  message: string;
};

/**
 * Bad Request
 */
export class BadRequestAppBskyVideoGetUploadLimitsResponseBodyError
  extends Error
{
  error: AppBskyVideoGetUploadLimitsError;

  /** The original data that was passed to this error instance. */
  data$: BadRequestAppBskyVideoGetUploadLimitsResponseBodyErrorData;

  constructor(err: BadRequestAppBskyVideoGetUploadLimitsResponseBodyErrorData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "BadRequestAppBskyVideoGetUploadLimitsResponseBodyError";
  }
}

/** @internal */
export const UnauthorizedAppBskyVideoGetUploadLimitsResponseBodyError$inboundSchema:
  z.ZodType<
    UnauthorizedAppBskyVideoGetUploadLimitsResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.literal("AuthMissing"),
    message: z.string(),
  })
    .transform((v) => {
      return new UnauthorizedAppBskyVideoGetUploadLimitsResponseBodyError(v);
    });

/** @internal */
export type UnauthorizedAppBskyVideoGetUploadLimitsResponseBodyError$Outbound =
  {
    error: "AuthMissing";
    message: string;
  };

/** @internal */
export const UnauthorizedAppBskyVideoGetUploadLimitsResponseBodyError$outboundSchema:
  z.ZodType<
    UnauthorizedAppBskyVideoGetUploadLimitsResponseBodyError$Outbound,
    z.ZodTypeDef,
    UnauthorizedAppBskyVideoGetUploadLimitsResponseBodyError
  > = z.instanceof(UnauthorizedAppBskyVideoGetUploadLimitsResponseBodyError)
    .transform(v => v.data$)
    .pipe(z.object({
      error: z.literal("AuthMissing").default("AuthMissing" as const),
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnauthorizedAppBskyVideoGetUploadLimitsResponseBodyError$ {
  /** @deprecated use `UnauthorizedAppBskyVideoGetUploadLimitsResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    UnauthorizedAppBskyVideoGetUploadLimitsResponseBodyError$inboundSchema;
  /** @deprecated use `UnauthorizedAppBskyVideoGetUploadLimitsResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    UnauthorizedAppBskyVideoGetUploadLimitsResponseBodyError$outboundSchema;
  /** @deprecated use `UnauthorizedAppBskyVideoGetUploadLimitsResponseBodyError$Outbound` instead. */
  export type Outbound =
    UnauthorizedAppBskyVideoGetUploadLimitsResponseBodyError$Outbound;
}

/** @internal */
export const AppBskyVideoGetUploadLimitsError$inboundSchema: z.ZodNativeEnum<
  typeof AppBskyVideoGetUploadLimitsError
> = z.nativeEnum(AppBskyVideoGetUploadLimitsError);

/** @internal */
export const AppBskyVideoGetUploadLimitsError$outboundSchema: z.ZodNativeEnum<
  typeof AppBskyVideoGetUploadLimitsError
> = AppBskyVideoGetUploadLimitsError$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyVideoGetUploadLimitsError$ {
  /** @deprecated use `AppBskyVideoGetUploadLimitsError$inboundSchema` instead. */
  export const inboundSchema = AppBskyVideoGetUploadLimitsError$inboundSchema;
  /** @deprecated use `AppBskyVideoGetUploadLimitsError$outboundSchema` instead. */
  export const outboundSchema = AppBskyVideoGetUploadLimitsError$outboundSchema;
}

/** @internal */
export const BadRequestAppBskyVideoGetUploadLimitsResponseBodyError$inboundSchema:
  z.ZodType<
    BadRequestAppBskyVideoGetUploadLimitsResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: AppBskyVideoGetUploadLimitsError$inboundSchema,
    message: z.string(),
  })
    .transform((v) => {
      return new BadRequestAppBskyVideoGetUploadLimitsResponseBodyError(v);
    });

/** @internal */
export type BadRequestAppBskyVideoGetUploadLimitsResponseBodyError$Outbound = {
  error: string;
  message: string;
};

/** @internal */
export const BadRequestAppBskyVideoGetUploadLimitsResponseBodyError$outboundSchema:
  z.ZodType<
    BadRequestAppBskyVideoGetUploadLimitsResponseBodyError$Outbound,
    z.ZodTypeDef,
    BadRequestAppBskyVideoGetUploadLimitsResponseBodyError
  > = z.instanceof(BadRequestAppBskyVideoGetUploadLimitsResponseBodyError)
    .transform(v => v.data$)
    .pipe(z.object({
      error: AppBskyVideoGetUploadLimitsError$outboundSchema,
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BadRequestAppBskyVideoGetUploadLimitsResponseBodyError$ {
  /** @deprecated use `BadRequestAppBskyVideoGetUploadLimitsResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    BadRequestAppBskyVideoGetUploadLimitsResponseBodyError$inboundSchema;
  /** @deprecated use `BadRequestAppBskyVideoGetUploadLimitsResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    BadRequestAppBskyVideoGetUploadLimitsResponseBodyError$outboundSchema;
  /** @deprecated use `BadRequestAppBskyVideoGetUploadLimitsResponseBodyError$Outbound` instead. */
  export type Outbound =
    BadRequestAppBskyVideoGetUploadLimitsResponseBodyError$Outbound;
}
