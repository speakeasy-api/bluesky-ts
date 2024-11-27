/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type ToolsOzoneSettingListOptionsOzoneSettingResponseBodyData = {
  error: "AuthMissing";
  message: string;
};

/**
 * Unauthorized
 */
export class ToolsOzoneSettingListOptionsOzoneSettingResponseBody
  extends Error
{
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$: ToolsOzoneSettingListOptionsOzoneSettingResponseBodyData;

  constructor(err: ToolsOzoneSettingListOptionsOzoneSettingResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "ToolsOzoneSettingListOptionsOzoneSettingResponseBody";
  }
}

export const ToolsOzoneSettingListOptionsError = {
  InvalidRequest: "InvalidRequest",
  ExpiredToken: "ExpiredToken",
  InvalidToken: "InvalidToken",
} as const;
export type ToolsOzoneSettingListOptionsError = ClosedEnum<
  typeof ToolsOzoneSettingListOptionsError
>;

/**
 * Bad Request
 */
export type ToolsOzoneSettingListOptionsResponseBodyData = {
  error: ToolsOzoneSettingListOptionsError;
  message: string;
};

/**
 * Bad Request
 */
export class ToolsOzoneSettingListOptionsResponseBody extends Error {
  error: ToolsOzoneSettingListOptionsError;

  /** The original data that was passed to this error instance. */
  data$: ToolsOzoneSettingListOptionsResponseBodyData;

  constructor(err: ToolsOzoneSettingListOptionsResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "ToolsOzoneSettingListOptionsResponseBody";
  }
}

/** @internal */
export const ToolsOzoneSettingListOptionsOzoneSettingResponseBody$inboundSchema:
  z.ZodType<
    ToolsOzoneSettingListOptionsOzoneSettingResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.literal("AuthMissing"),
    message: z.string(),
  })
    .transform((v) => {
      return new ToolsOzoneSettingListOptionsOzoneSettingResponseBody(v);
    });

/** @internal */
export type ToolsOzoneSettingListOptionsOzoneSettingResponseBody$Outbound = {
  error: "AuthMissing";
  message: string;
};

/** @internal */
export const ToolsOzoneSettingListOptionsOzoneSettingResponseBody$outboundSchema:
  z.ZodType<
    ToolsOzoneSettingListOptionsOzoneSettingResponseBody$Outbound,
    z.ZodTypeDef,
    ToolsOzoneSettingListOptionsOzoneSettingResponseBody
  > = z.instanceof(ToolsOzoneSettingListOptionsOzoneSettingResponseBody)
    .transform(v => v.data$)
    .pipe(z.object({
      error: z.literal("AuthMissing").default("AuthMissing" as const),
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolsOzoneSettingListOptionsOzoneSettingResponseBody$ {
  /** @deprecated use `ToolsOzoneSettingListOptionsOzoneSettingResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ToolsOzoneSettingListOptionsOzoneSettingResponseBody$inboundSchema;
  /** @deprecated use `ToolsOzoneSettingListOptionsOzoneSettingResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ToolsOzoneSettingListOptionsOzoneSettingResponseBody$outboundSchema;
  /** @deprecated use `ToolsOzoneSettingListOptionsOzoneSettingResponseBody$Outbound` instead. */
  export type Outbound =
    ToolsOzoneSettingListOptionsOzoneSettingResponseBody$Outbound;
}

/** @internal */
export const ToolsOzoneSettingListOptionsError$inboundSchema: z.ZodNativeEnum<
  typeof ToolsOzoneSettingListOptionsError
> = z.nativeEnum(ToolsOzoneSettingListOptionsError);

/** @internal */
export const ToolsOzoneSettingListOptionsError$outboundSchema: z.ZodNativeEnum<
  typeof ToolsOzoneSettingListOptionsError
> = ToolsOzoneSettingListOptionsError$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolsOzoneSettingListOptionsError$ {
  /** @deprecated use `ToolsOzoneSettingListOptionsError$inboundSchema` instead. */
  export const inboundSchema = ToolsOzoneSettingListOptionsError$inboundSchema;
  /** @deprecated use `ToolsOzoneSettingListOptionsError$outboundSchema` instead. */
  export const outboundSchema =
    ToolsOzoneSettingListOptionsError$outboundSchema;
}

/** @internal */
export const ToolsOzoneSettingListOptionsResponseBody$inboundSchema: z.ZodType<
  ToolsOzoneSettingListOptionsResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  error: ToolsOzoneSettingListOptionsError$inboundSchema,
  message: z.string(),
})
  .transform((v) => {
    return new ToolsOzoneSettingListOptionsResponseBody(v);
  });

/** @internal */
export type ToolsOzoneSettingListOptionsResponseBody$Outbound = {
  error: string;
  message: string;
};

/** @internal */
export const ToolsOzoneSettingListOptionsResponseBody$outboundSchema: z.ZodType<
  ToolsOzoneSettingListOptionsResponseBody$Outbound,
  z.ZodTypeDef,
  ToolsOzoneSettingListOptionsResponseBody
> = z.instanceof(ToolsOzoneSettingListOptionsResponseBody)
  .transform(v => v.data$)
  .pipe(z.object({
    error: ToolsOzoneSettingListOptionsError$outboundSchema,
    message: z.string(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolsOzoneSettingListOptionsResponseBody$ {
  /** @deprecated use `ToolsOzoneSettingListOptionsResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ToolsOzoneSettingListOptionsResponseBody$inboundSchema;
  /** @deprecated use `ToolsOzoneSettingListOptionsResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ToolsOzoneSettingListOptionsResponseBody$outboundSchema;
  /** @deprecated use `ToolsOzoneSettingListOptionsResponseBody$Outbound` instead. */
  export type Outbound = ToolsOzoneSettingListOptionsResponseBody$Outbound;
}
