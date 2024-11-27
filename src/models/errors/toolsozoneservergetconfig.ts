/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type ToolsOzoneServerGetConfigOzoneServerResponseBodyData = {
  error: "AuthMissing";
  message: string;
};

/**
 * Unauthorized
 */
export class ToolsOzoneServerGetConfigOzoneServerResponseBody extends Error {
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$: ToolsOzoneServerGetConfigOzoneServerResponseBodyData;

  constructor(err: ToolsOzoneServerGetConfigOzoneServerResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "ToolsOzoneServerGetConfigOzoneServerResponseBody";
  }
}

export const ToolsOzoneServerGetConfigError = {
  InvalidRequest: "InvalidRequest",
  ExpiredToken: "ExpiredToken",
  InvalidToken: "InvalidToken",
} as const;
export type ToolsOzoneServerGetConfigError = ClosedEnum<
  typeof ToolsOzoneServerGetConfigError
>;

/**
 * Bad Request
 */
export type ToolsOzoneServerGetConfigResponseBodyData = {
  error: ToolsOzoneServerGetConfigError;
  message: string;
};

/**
 * Bad Request
 */
export class ToolsOzoneServerGetConfigResponseBody extends Error {
  error: ToolsOzoneServerGetConfigError;

  /** The original data that was passed to this error instance. */
  data$: ToolsOzoneServerGetConfigResponseBodyData;

  constructor(err: ToolsOzoneServerGetConfigResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "ToolsOzoneServerGetConfigResponseBody";
  }
}

/** @internal */
export const ToolsOzoneServerGetConfigOzoneServerResponseBody$inboundSchema:
  z.ZodType<
    ToolsOzoneServerGetConfigOzoneServerResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.literal("AuthMissing"),
    message: z.string(),
  })
    .transform((v) => {
      return new ToolsOzoneServerGetConfigOzoneServerResponseBody(v);
    });

/** @internal */
export type ToolsOzoneServerGetConfigOzoneServerResponseBody$Outbound = {
  error: "AuthMissing";
  message: string;
};

/** @internal */
export const ToolsOzoneServerGetConfigOzoneServerResponseBody$outboundSchema:
  z.ZodType<
    ToolsOzoneServerGetConfigOzoneServerResponseBody$Outbound,
    z.ZodTypeDef,
    ToolsOzoneServerGetConfigOzoneServerResponseBody
  > = z.instanceof(ToolsOzoneServerGetConfigOzoneServerResponseBody)
    .transform(v => v.data$)
    .pipe(z.object({
      error: z.literal("AuthMissing").default("AuthMissing" as const),
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolsOzoneServerGetConfigOzoneServerResponseBody$ {
  /** @deprecated use `ToolsOzoneServerGetConfigOzoneServerResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ToolsOzoneServerGetConfigOzoneServerResponseBody$inboundSchema;
  /** @deprecated use `ToolsOzoneServerGetConfigOzoneServerResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ToolsOzoneServerGetConfigOzoneServerResponseBody$outboundSchema;
  /** @deprecated use `ToolsOzoneServerGetConfigOzoneServerResponseBody$Outbound` instead. */
  export type Outbound =
    ToolsOzoneServerGetConfigOzoneServerResponseBody$Outbound;
}

/** @internal */
export const ToolsOzoneServerGetConfigError$inboundSchema: z.ZodNativeEnum<
  typeof ToolsOzoneServerGetConfigError
> = z.nativeEnum(ToolsOzoneServerGetConfigError);

/** @internal */
export const ToolsOzoneServerGetConfigError$outboundSchema: z.ZodNativeEnum<
  typeof ToolsOzoneServerGetConfigError
> = ToolsOzoneServerGetConfigError$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolsOzoneServerGetConfigError$ {
  /** @deprecated use `ToolsOzoneServerGetConfigError$inboundSchema` instead. */
  export const inboundSchema = ToolsOzoneServerGetConfigError$inboundSchema;
  /** @deprecated use `ToolsOzoneServerGetConfigError$outboundSchema` instead. */
  export const outboundSchema = ToolsOzoneServerGetConfigError$outboundSchema;
}

/** @internal */
export const ToolsOzoneServerGetConfigResponseBody$inboundSchema: z.ZodType<
  ToolsOzoneServerGetConfigResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  error: ToolsOzoneServerGetConfigError$inboundSchema,
  message: z.string(),
})
  .transform((v) => {
    return new ToolsOzoneServerGetConfigResponseBody(v);
  });

/** @internal */
export type ToolsOzoneServerGetConfigResponseBody$Outbound = {
  error: string;
  message: string;
};

/** @internal */
export const ToolsOzoneServerGetConfigResponseBody$outboundSchema: z.ZodType<
  ToolsOzoneServerGetConfigResponseBody$Outbound,
  z.ZodTypeDef,
  ToolsOzoneServerGetConfigResponseBody
> = z.instanceof(ToolsOzoneServerGetConfigResponseBody)
  .transform(v => v.data$)
  .pipe(z.object({
    error: ToolsOzoneServerGetConfigError$outboundSchema,
    message: z.string(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolsOzoneServerGetConfigResponseBody$ {
  /** @deprecated use `ToolsOzoneServerGetConfigResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ToolsOzoneServerGetConfigResponseBody$inboundSchema;
  /** @deprecated use `ToolsOzoneServerGetConfigResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ToolsOzoneServerGetConfigResponseBody$outboundSchema;
  /** @deprecated use `ToolsOzoneServerGetConfigResponseBody$Outbound` instead. */
  export type Outbound = ToolsOzoneServerGetConfigResponseBody$Outbound;
}
