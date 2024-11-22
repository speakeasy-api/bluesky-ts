/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type ComAtprotoIdentityResolveHandleComAtprotoIdentityResponseBodyData =
  {
    error: "AuthMissing";
    message: string;
  };

/**
 * Unauthorized
 */
export class ComAtprotoIdentityResolveHandleComAtprotoIdentityResponseBody
  extends Error
{
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$: ComAtprotoIdentityResolveHandleComAtprotoIdentityResponseBodyData;

  constructor(
    err: ComAtprotoIdentityResolveHandleComAtprotoIdentityResponseBodyData,
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "ComAtprotoIdentityResolveHandleComAtprotoIdentityResponseBody";
  }
}

export const ComAtprotoIdentityResolveHandleError = {
  InvalidRequest: "InvalidRequest",
  ExpiredToken: "ExpiredToken",
  InvalidToken: "InvalidToken",
} as const;
export type ComAtprotoIdentityResolveHandleError = ClosedEnum<
  typeof ComAtprotoIdentityResolveHandleError
>;

/**
 * Bad Request
 */
export type ComAtprotoIdentityResolveHandleResponseBodyData = {
  error: ComAtprotoIdentityResolveHandleError;
  message: string;
};

/**
 * Bad Request
 */
export class ComAtprotoIdentityResolveHandleResponseBody extends Error {
  error: ComAtprotoIdentityResolveHandleError;

  /** The original data that was passed to this error instance. */
  data$: ComAtprotoIdentityResolveHandleResponseBodyData;

  constructor(err: ComAtprotoIdentityResolveHandleResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "ComAtprotoIdentityResolveHandleResponseBody";
  }
}

/** @internal */
export const ComAtprotoIdentityResolveHandleComAtprotoIdentityResponseBody$inboundSchema:
  z.ZodType<
    ComAtprotoIdentityResolveHandleComAtprotoIdentityResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.literal("AuthMissing"),
    message: z.string(),
  })
    .transform((v) => {
      return new ComAtprotoIdentityResolveHandleComAtprotoIdentityResponseBody(
        v,
      );
    });

/** @internal */
export type ComAtprotoIdentityResolveHandleComAtprotoIdentityResponseBody$Outbound =
  {
    error: "AuthMissing";
    message: string;
  };

/** @internal */
export const ComAtprotoIdentityResolveHandleComAtprotoIdentityResponseBody$outboundSchema:
  z.ZodType<
    ComAtprotoIdentityResolveHandleComAtprotoIdentityResponseBody$Outbound,
    z.ZodTypeDef,
    ComAtprotoIdentityResolveHandleComAtprotoIdentityResponseBody
  > = z.instanceof(
    ComAtprotoIdentityResolveHandleComAtprotoIdentityResponseBody,
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
export namespace ComAtprotoIdentityResolveHandleComAtprotoIdentityResponseBody$ {
  /** @deprecated use `ComAtprotoIdentityResolveHandleComAtprotoIdentityResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ComAtprotoIdentityResolveHandleComAtprotoIdentityResponseBody$inboundSchema;
  /** @deprecated use `ComAtprotoIdentityResolveHandleComAtprotoIdentityResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ComAtprotoIdentityResolveHandleComAtprotoIdentityResponseBody$outboundSchema;
  /** @deprecated use `ComAtprotoIdentityResolveHandleComAtprotoIdentityResponseBody$Outbound` instead. */
  export type Outbound =
    ComAtprotoIdentityResolveHandleComAtprotoIdentityResponseBody$Outbound;
}

/** @internal */
export const ComAtprotoIdentityResolveHandleError$inboundSchema:
  z.ZodNativeEnum<typeof ComAtprotoIdentityResolveHandleError> = z.nativeEnum(
    ComAtprotoIdentityResolveHandleError,
  );

/** @internal */
export const ComAtprotoIdentityResolveHandleError$outboundSchema:
  z.ZodNativeEnum<typeof ComAtprotoIdentityResolveHandleError> =
    ComAtprotoIdentityResolveHandleError$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoIdentityResolveHandleError$ {
  /** @deprecated use `ComAtprotoIdentityResolveHandleError$inboundSchema` instead. */
  export const inboundSchema =
    ComAtprotoIdentityResolveHandleError$inboundSchema;
  /** @deprecated use `ComAtprotoIdentityResolveHandleError$outboundSchema` instead. */
  export const outboundSchema =
    ComAtprotoIdentityResolveHandleError$outboundSchema;
}

/** @internal */
export const ComAtprotoIdentityResolveHandleResponseBody$inboundSchema:
  z.ZodType<
    ComAtprotoIdentityResolveHandleResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: ComAtprotoIdentityResolveHandleError$inboundSchema,
    message: z.string(),
  })
    .transform((v) => {
      return new ComAtprotoIdentityResolveHandleResponseBody(v);
    });

/** @internal */
export type ComAtprotoIdentityResolveHandleResponseBody$Outbound = {
  error: string;
  message: string;
};

/** @internal */
export const ComAtprotoIdentityResolveHandleResponseBody$outboundSchema:
  z.ZodType<
    ComAtprotoIdentityResolveHandleResponseBody$Outbound,
    z.ZodTypeDef,
    ComAtprotoIdentityResolveHandleResponseBody
  > = z.instanceof(ComAtprotoIdentityResolveHandleResponseBody)
    .transform(v => v.data$)
    .pipe(z.object({
      error: ComAtprotoIdentityResolveHandleError$outboundSchema,
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoIdentityResolveHandleResponseBody$ {
  /** @deprecated use `ComAtprotoIdentityResolveHandleResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ComAtprotoIdentityResolveHandleResponseBody$inboundSchema;
  /** @deprecated use `ComAtprotoIdentityResolveHandleResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ComAtprotoIdentityResolveHandleResponseBody$outboundSchema;
  /** @deprecated use `ComAtprotoIdentityResolveHandleResponseBody$Outbound` instead. */
  export type Outbound = ComAtprotoIdentityResolveHandleResponseBody$Outbound;
}
