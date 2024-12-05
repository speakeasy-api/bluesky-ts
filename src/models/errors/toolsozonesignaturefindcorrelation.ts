/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type ToolsOzoneSignatureFindCorrelationSignatureResponseBodyData = {
  error: "AuthMissing";
  message: string;
};

/**
 * Unauthorized
 */
export class ToolsOzoneSignatureFindCorrelationSignatureResponseBody
  extends Error
{
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$: ToolsOzoneSignatureFindCorrelationSignatureResponseBodyData;

  constructor(
    err: ToolsOzoneSignatureFindCorrelationSignatureResponseBodyData,
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "ToolsOzoneSignatureFindCorrelationSignatureResponseBody";
  }
}

export const ToolsOzoneSignatureFindCorrelationError = {
  InvalidRequest: "InvalidRequest",
  ExpiredToken: "ExpiredToken",
  InvalidToken: "InvalidToken",
} as const;
export type ToolsOzoneSignatureFindCorrelationError = ClosedEnum<
  typeof ToolsOzoneSignatureFindCorrelationError
>;

/**
 * Bad Request
 */
export type ToolsOzoneSignatureFindCorrelationResponseBodyData = {
  error: ToolsOzoneSignatureFindCorrelationError;
  message: string;
};

/**
 * Bad Request
 */
export class ToolsOzoneSignatureFindCorrelationResponseBody extends Error {
  error: ToolsOzoneSignatureFindCorrelationError;

  /** The original data that was passed to this error instance. */
  data$: ToolsOzoneSignatureFindCorrelationResponseBodyData;

  constructor(err: ToolsOzoneSignatureFindCorrelationResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "ToolsOzoneSignatureFindCorrelationResponseBody";
  }
}

/** @internal */
export const ToolsOzoneSignatureFindCorrelationSignatureResponseBody$inboundSchema:
  z.ZodType<
    ToolsOzoneSignatureFindCorrelationSignatureResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.literal("AuthMissing"),
    message: z.string(),
  })
    .transform((v) => {
      return new ToolsOzoneSignatureFindCorrelationSignatureResponseBody(v);
    });

/** @internal */
export type ToolsOzoneSignatureFindCorrelationSignatureResponseBody$Outbound = {
  error: "AuthMissing";
  message: string;
};

/** @internal */
export const ToolsOzoneSignatureFindCorrelationSignatureResponseBody$outboundSchema:
  z.ZodType<
    ToolsOzoneSignatureFindCorrelationSignatureResponseBody$Outbound,
    z.ZodTypeDef,
    ToolsOzoneSignatureFindCorrelationSignatureResponseBody
  > = z.instanceof(ToolsOzoneSignatureFindCorrelationSignatureResponseBody)
    .transform(v => v.data$)
    .pipe(z.object({
      error: z.literal("AuthMissing").default("AuthMissing" as const),
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolsOzoneSignatureFindCorrelationSignatureResponseBody$ {
  /** @deprecated use `ToolsOzoneSignatureFindCorrelationSignatureResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ToolsOzoneSignatureFindCorrelationSignatureResponseBody$inboundSchema;
  /** @deprecated use `ToolsOzoneSignatureFindCorrelationSignatureResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ToolsOzoneSignatureFindCorrelationSignatureResponseBody$outboundSchema;
  /** @deprecated use `ToolsOzoneSignatureFindCorrelationSignatureResponseBody$Outbound` instead. */
  export type Outbound =
    ToolsOzoneSignatureFindCorrelationSignatureResponseBody$Outbound;
}

/** @internal */
export const ToolsOzoneSignatureFindCorrelationError$inboundSchema:
  z.ZodNativeEnum<typeof ToolsOzoneSignatureFindCorrelationError> = z
    .nativeEnum(ToolsOzoneSignatureFindCorrelationError);

/** @internal */
export const ToolsOzoneSignatureFindCorrelationError$outboundSchema:
  z.ZodNativeEnum<typeof ToolsOzoneSignatureFindCorrelationError> =
    ToolsOzoneSignatureFindCorrelationError$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolsOzoneSignatureFindCorrelationError$ {
  /** @deprecated use `ToolsOzoneSignatureFindCorrelationError$inboundSchema` instead. */
  export const inboundSchema =
    ToolsOzoneSignatureFindCorrelationError$inboundSchema;
  /** @deprecated use `ToolsOzoneSignatureFindCorrelationError$outboundSchema` instead. */
  export const outboundSchema =
    ToolsOzoneSignatureFindCorrelationError$outboundSchema;
}

/** @internal */
export const ToolsOzoneSignatureFindCorrelationResponseBody$inboundSchema:
  z.ZodType<
    ToolsOzoneSignatureFindCorrelationResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: ToolsOzoneSignatureFindCorrelationError$inboundSchema,
    message: z.string(),
  })
    .transform((v) => {
      return new ToolsOzoneSignatureFindCorrelationResponseBody(v);
    });

/** @internal */
export type ToolsOzoneSignatureFindCorrelationResponseBody$Outbound = {
  error: string;
  message: string;
};

/** @internal */
export const ToolsOzoneSignatureFindCorrelationResponseBody$outboundSchema:
  z.ZodType<
    ToolsOzoneSignatureFindCorrelationResponseBody$Outbound,
    z.ZodTypeDef,
    ToolsOzoneSignatureFindCorrelationResponseBody
  > = z.instanceof(ToolsOzoneSignatureFindCorrelationResponseBody)
    .transform(v => v.data$)
    .pipe(z.object({
      error: ToolsOzoneSignatureFindCorrelationError$outboundSchema,
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolsOzoneSignatureFindCorrelationResponseBody$ {
  /** @deprecated use `ToolsOzoneSignatureFindCorrelationResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ToolsOzoneSignatureFindCorrelationResponseBody$inboundSchema;
  /** @deprecated use `ToolsOzoneSignatureFindCorrelationResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ToolsOzoneSignatureFindCorrelationResponseBody$outboundSchema;
  /** @deprecated use `ToolsOzoneSignatureFindCorrelationResponseBody$Outbound` instead. */
  export type Outbound =
    ToolsOzoneSignatureFindCorrelationResponseBody$Outbound;
}
