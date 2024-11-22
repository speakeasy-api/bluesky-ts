/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type ToolsOzoneSettingUpsertOptionToolsOzoneSettingResponseBodyData = {
  error: "AuthMissing";
  message: string;
};

/**
 * Unauthorized
 */
export class ToolsOzoneSettingUpsertOptionToolsOzoneSettingResponseBody
  extends Error
{
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$: ToolsOzoneSettingUpsertOptionToolsOzoneSettingResponseBodyData;

  constructor(
    err: ToolsOzoneSettingUpsertOptionToolsOzoneSettingResponseBodyData,
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "ToolsOzoneSettingUpsertOptionToolsOzoneSettingResponseBody";
  }
}

export const ToolsOzoneSettingUpsertOptionError = {
  InvalidRequest: "InvalidRequest",
  ExpiredToken: "ExpiredToken",
  InvalidToken: "InvalidToken",
} as const;
export type ToolsOzoneSettingUpsertOptionError = ClosedEnum<
  typeof ToolsOzoneSettingUpsertOptionError
>;

/**
 * Bad Request
 */
export type ToolsOzoneSettingUpsertOptionResponseBodyData = {
  error: ToolsOzoneSettingUpsertOptionError;
  message: string;
};

/**
 * Bad Request
 */
export class ToolsOzoneSettingUpsertOptionResponseBody extends Error {
  error: ToolsOzoneSettingUpsertOptionError;

  /** The original data that was passed to this error instance. */
  data$: ToolsOzoneSettingUpsertOptionResponseBodyData;

  constructor(err: ToolsOzoneSettingUpsertOptionResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "ToolsOzoneSettingUpsertOptionResponseBody";
  }
}

/** @internal */
export const ToolsOzoneSettingUpsertOptionToolsOzoneSettingResponseBody$inboundSchema:
  z.ZodType<
    ToolsOzoneSettingUpsertOptionToolsOzoneSettingResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.literal("AuthMissing"),
    message: z.string(),
  })
    .transform((v) => {
      return new ToolsOzoneSettingUpsertOptionToolsOzoneSettingResponseBody(v);
    });

/** @internal */
export type ToolsOzoneSettingUpsertOptionToolsOzoneSettingResponseBody$Outbound =
  {
    error: "AuthMissing";
    message: string;
  };

/** @internal */
export const ToolsOzoneSettingUpsertOptionToolsOzoneSettingResponseBody$outboundSchema:
  z.ZodType<
    ToolsOzoneSettingUpsertOptionToolsOzoneSettingResponseBody$Outbound,
    z.ZodTypeDef,
    ToolsOzoneSettingUpsertOptionToolsOzoneSettingResponseBody
  > = z.instanceof(ToolsOzoneSettingUpsertOptionToolsOzoneSettingResponseBody)
    .transform(v => v.data$)
    .pipe(z.object({
      error: z.literal("AuthMissing").default("AuthMissing" as const),
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolsOzoneSettingUpsertOptionToolsOzoneSettingResponseBody$ {
  /** @deprecated use `ToolsOzoneSettingUpsertOptionToolsOzoneSettingResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ToolsOzoneSettingUpsertOptionToolsOzoneSettingResponseBody$inboundSchema;
  /** @deprecated use `ToolsOzoneSettingUpsertOptionToolsOzoneSettingResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ToolsOzoneSettingUpsertOptionToolsOzoneSettingResponseBody$outboundSchema;
  /** @deprecated use `ToolsOzoneSettingUpsertOptionToolsOzoneSettingResponseBody$Outbound` instead. */
  export type Outbound =
    ToolsOzoneSettingUpsertOptionToolsOzoneSettingResponseBody$Outbound;
}

/** @internal */
export const ToolsOzoneSettingUpsertOptionError$inboundSchema: z.ZodNativeEnum<
  typeof ToolsOzoneSettingUpsertOptionError
> = z.nativeEnum(ToolsOzoneSettingUpsertOptionError);

/** @internal */
export const ToolsOzoneSettingUpsertOptionError$outboundSchema: z.ZodNativeEnum<
  typeof ToolsOzoneSettingUpsertOptionError
> = ToolsOzoneSettingUpsertOptionError$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolsOzoneSettingUpsertOptionError$ {
  /** @deprecated use `ToolsOzoneSettingUpsertOptionError$inboundSchema` instead. */
  export const inboundSchema = ToolsOzoneSettingUpsertOptionError$inboundSchema;
  /** @deprecated use `ToolsOzoneSettingUpsertOptionError$outboundSchema` instead. */
  export const outboundSchema =
    ToolsOzoneSettingUpsertOptionError$outboundSchema;
}

/** @internal */
export const ToolsOzoneSettingUpsertOptionResponseBody$inboundSchema: z.ZodType<
  ToolsOzoneSettingUpsertOptionResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  error: ToolsOzoneSettingUpsertOptionError$inboundSchema,
  message: z.string(),
})
  .transform((v) => {
    return new ToolsOzoneSettingUpsertOptionResponseBody(v);
  });

/** @internal */
export type ToolsOzoneSettingUpsertOptionResponseBody$Outbound = {
  error: string;
  message: string;
};

/** @internal */
export const ToolsOzoneSettingUpsertOptionResponseBody$outboundSchema:
  z.ZodType<
    ToolsOzoneSettingUpsertOptionResponseBody$Outbound,
    z.ZodTypeDef,
    ToolsOzoneSettingUpsertOptionResponseBody
  > = z.instanceof(ToolsOzoneSettingUpsertOptionResponseBody)
    .transform(v => v.data$)
    .pipe(z.object({
      error: ToolsOzoneSettingUpsertOptionError$outboundSchema,
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolsOzoneSettingUpsertOptionResponseBody$ {
  /** @deprecated use `ToolsOzoneSettingUpsertOptionResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ToolsOzoneSettingUpsertOptionResponseBody$inboundSchema;
  /** @deprecated use `ToolsOzoneSettingUpsertOptionResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ToolsOzoneSettingUpsertOptionResponseBody$outboundSchema;
  /** @deprecated use `ToolsOzoneSettingUpsertOptionResponseBody$Outbound` instead. */
  export type Outbound = ToolsOzoneSettingUpsertOptionResponseBody$Outbound;
}
