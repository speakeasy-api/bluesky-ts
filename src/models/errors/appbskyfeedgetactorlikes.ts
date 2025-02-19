/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type UnauthorizedAppBskyFeedGetActorLikesResponseBodyErrorData = {
  error: "AuthMissing";
  message: string;
};

/**
 * Unauthorized
 */
export class UnauthorizedAppBskyFeedGetActorLikesResponseBodyError
  extends Error
{
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$: UnauthorizedAppBskyFeedGetActorLikesResponseBodyErrorData;

  constructor(err: UnauthorizedAppBskyFeedGetActorLikesResponseBodyErrorData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "UnauthorizedAppBskyFeedGetActorLikesResponseBodyError";
  }
}

export const AppBskyFeedGetActorLikesError = {
  InvalidRequest: "InvalidRequest",
  ExpiredToken: "ExpiredToken",
  InvalidToken: "InvalidToken",
  BlockedActor: "BlockedActor",
  BlockedByActor: "BlockedByActor",
} as const;
export type AppBskyFeedGetActorLikesError = ClosedEnum<
  typeof AppBskyFeedGetActorLikesError
>;

/**
 * Bad Request
 */
export type BadRequestAppBskyFeedGetActorLikesResponseBodyErrorData = {
  error: AppBskyFeedGetActorLikesError;
  message: string;
};

/**
 * Bad Request
 */
export class BadRequestAppBskyFeedGetActorLikesResponseBodyError extends Error {
  error: AppBskyFeedGetActorLikesError;

  /** The original data that was passed to this error instance. */
  data$: BadRequestAppBskyFeedGetActorLikesResponseBodyErrorData;

  constructor(err: BadRequestAppBskyFeedGetActorLikesResponseBodyErrorData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "BadRequestAppBskyFeedGetActorLikesResponseBodyError";
  }
}

/** @internal */
export const UnauthorizedAppBskyFeedGetActorLikesResponseBodyError$inboundSchema:
  z.ZodType<
    UnauthorizedAppBskyFeedGetActorLikesResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.literal("AuthMissing"),
    message: z.string(),
  })
    .transform((v) => {
      return new UnauthorizedAppBskyFeedGetActorLikesResponseBodyError(v);
    });

/** @internal */
export type UnauthorizedAppBskyFeedGetActorLikesResponseBodyError$Outbound = {
  error: "AuthMissing";
  message: string;
};

/** @internal */
export const UnauthorizedAppBskyFeedGetActorLikesResponseBodyError$outboundSchema:
  z.ZodType<
    UnauthorizedAppBskyFeedGetActorLikesResponseBodyError$Outbound,
    z.ZodTypeDef,
    UnauthorizedAppBskyFeedGetActorLikesResponseBodyError
  > = z.instanceof(UnauthorizedAppBskyFeedGetActorLikesResponseBodyError)
    .transform(v => v.data$)
    .pipe(z.object({
      error: z.literal("AuthMissing").default("AuthMissing" as const),
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnauthorizedAppBskyFeedGetActorLikesResponseBodyError$ {
  /** @deprecated use `UnauthorizedAppBskyFeedGetActorLikesResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    UnauthorizedAppBskyFeedGetActorLikesResponseBodyError$inboundSchema;
  /** @deprecated use `UnauthorizedAppBskyFeedGetActorLikesResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    UnauthorizedAppBskyFeedGetActorLikesResponseBodyError$outboundSchema;
  /** @deprecated use `UnauthorizedAppBskyFeedGetActorLikesResponseBodyError$Outbound` instead. */
  export type Outbound =
    UnauthorizedAppBskyFeedGetActorLikesResponseBodyError$Outbound;
}

/** @internal */
export const AppBskyFeedGetActorLikesError$inboundSchema: z.ZodNativeEnum<
  typeof AppBskyFeedGetActorLikesError
> = z.nativeEnum(AppBskyFeedGetActorLikesError);

/** @internal */
export const AppBskyFeedGetActorLikesError$outboundSchema: z.ZodNativeEnum<
  typeof AppBskyFeedGetActorLikesError
> = AppBskyFeedGetActorLikesError$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyFeedGetActorLikesError$ {
  /** @deprecated use `AppBskyFeedGetActorLikesError$inboundSchema` instead. */
  export const inboundSchema = AppBskyFeedGetActorLikesError$inboundSchema;
  /** @deprecated use `AppBskyFeedGetActorLikesError$outboundSchema` instead. */
  export const outboundSchema = AppBskyFeedGetActorLikesError$outboundSchema;
}

/** @internal */
export const BadRequestAppBskyFeedGetActorLikesResponseBodyError$inboundSchema:
  z.ZodType<
    BadRequestAppBskyFeedGetActorLikesResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: AppBskyFeedGetActorLikesError$inboundSchema,
    message: z.string(),
  })
    .transform((v) => {
      return new BadRequestAppBskyFeedGetActorLikesResponseBodyError(v);
    });

/** @internal */
export type BadRequestAppBskyFeedGetActorLikesResponseBodyError$Outbound = {
  error: string;
  message: string;
};

/** @internal */
export const BadRequestAppBskyFeedGetActorLikesResponseBodyError$outboundSchema:
  z.ZodType<
    BadRequestAppBskyFeedGetActorLikesResponseBodyError$Outbound,
    z.ZodTypeDef,
    BadRequestAppBskyFeedGetActorLikesResponseBodyError
  > = z.instanceof(BadRequestAppBskyFeedGetActorLikesResponseBodyError)
    .transform(v => v.data$)
    .pipe(z.object({
      error: AppBskyFeedGetActorLikesError$outboundSchema,
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BadRequestAppBskyFeedGetActorLikesResponseBodyError$ {
  /** @deprecated use `BadRequestAppBskyFeedGetActorLikesResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    BadRequestAppBskyFeedGetActorLikesResponseBodyError$inboundSchema;
  /** @deprecated use `BadRequestAppBskyFeedGetActorLikesResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    BadRequestAppBskyFeedGetActorLikesResponseBodyError$outboundSchema;
  /** @deprecated use `BadRequestAppBskyFeedGetActorLikesResponseBodyError$Outbound` instead. */
  export type Outbound =
    BadRequestAppBskyFeedGetActorLikesResponseBodyError$Outbound;
}
