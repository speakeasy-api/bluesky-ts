/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type ToolsOzoneModerationGetRecordsToolsOzoneModerationResponseBodyData =
  {
    error: "AuthMissing";
    message: string;
  };

/**
 * Unauthorized
 */
export class ToolsOzoneModerationGetRecordsToolsOzoneModerationResponseBody
  extends Error
{
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$: ToolsOzoneModerationGetRecordsToolsOzoneModerationResponseBodyData;

  constructor(
    err: ToolsOzoneModerationGetRecordsToolsOzoneModerationResponseBodyData,
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name =
      "ToolsOzoneModerationGetRecordsToolsOzoneModerationResponseBody";
  }
}

export const ToolsOzoneModerationGetRecordsError = {
  InvalidRequest: "InvalidRequest",
  ExpiredToken: "ExpiredToken",
  InvalidToken: "InvalidToken",
} as const;
export type ToolsOzoneModerationGetRecordsError = ClosedEnum<
  typeof ToolsOzoneModerationGetRecordsError
>;

/**
 * Bad Request
 */
export type ToolsOzoneModerationGetRecordsResponseBodyData = {
  error: ToolsOzoneModerationGetRecordsError;
  message: string;
};

/**
 * Bad Request
 */
export class ToolsOzoneModerationGetRecordsResponseBody extends Error {
  error: ToolsOzoneModerationGetRecordsError;

  /** The original data that was passed to this error instance. */
  data$: ToolsOzoneModerationGetRecordsResponseBodyData;

  constructor(err: ToolsOzoneModerationGetRecordsResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "ToolsOzoneModerationGetRecordsResponseBody";
  }
}

/** @internal */
export const ToolsOzoneModerationGetRecordsToolsOzoneModerationResponseBody$inboundSchema:
  z.ZodType<
    ToolsOzoneModerationGetRecordsToolsOzoneModerationResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.literal("AuthMissing"),
    message: z.string(),
  })
    .transform((v) => {
      return new ToolsOzoneModerationGetRecordsToolsOzoneModerationResponseBody(
        v,
      );
    });

/** @internal */
export type ToolsOzoneModerationGetRecordsToolsOzoneModerationResponseBody$Outbound =
  {
    error: "AuthMissing";
    message: string;
  };

/** @internal */
export const ToolsOzoneModerationGetRecordsToolsOzoneModerationResponseBody$outboundSchema:
  z.ZodType<
    ToolsOzoneModerationGetRecordsToolsOzoneModerationResponseBody$Outbound,
    z.ZodTypeDef,
    ToolsOzoneModerationGetRecordsToolsOzoneModerationResponseBody
  > = z.instanceof(
    ToolsOzoneModerationGetRecordsToolsOzoneModerationResponseBody,
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
export namespace ToolsOzoneModerationGetRecordsToolsOzoneModerationResponseBody$ {
  /** @deprecated use `ToolsOzoneModerationGetRecordsToolsOzoneModerationResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ToolsOzoneModerationGetRecordsToolsOzoneModerationResponseBody$inboundSchema;
  /** @deprecated use `ToolsOzoneModerationGetRecordsToolsOzoneModerationResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ToolsOzoneModerationGetRecordsToolsOzoneModerationResponseBody$outboundSchema;
  /** @deprecated use `ToolsOzoneModerationGetRecordsToolsOzoneModerationResponseBody$Outbound` instead. */
  export type Outbound =
    ToolsOzoneModerationGetRecordsToolsOzoneModerationResponseBody$Outbound;
}

/** @internal */
export const ToolsOzoneModerationGetRecordsError$inboundSchema: z.ZodNativeEnum<
  typeof ToolsOzoneModerationGetRecordsError
> = z.nativeEnum(ToolsOzoneModerationGetRecordsError);

/** @internal */
export const ToolsOzoneModerationGetRecordsError$outboundSchema:
  z.ZodNativeEnum<typeof ToolsOzoneModerationGetRecordsError> =
    ToolsOzoneModerationGetRecordsError$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolsOzoneModerationGetRecordsError$ {
  /** @deprecated use `ToolsOzoneModerationGetRecordsError$inboundSchema` instead. */
  export const inboundSchema =
    ToolsOzoneModerationGetRecordsError$inboundSchema;
  /** @deprecated use `ToolsOzoneModerationGetRecordsError$outboundSchema` instead. */
  export const outboundSchema =
    ToolsOzoneModerationGetRecordsError$outboundSchema;
}

/** @internal */
export const ToolsOzoneModerationGetRecordsResponseBody$inboundSchema:
  z.ZodType<ToolsOzoneModerationGetRecordsResponseBody, z.ZodTypeDef, unknown> =
    z.object({
      error: ToolsOzoneModerationGetRecordsError$inboundSchema,
      message: z.string(),
    })
      .transform((v) => {
        return new ToolsOzoneModerationGetRecordsResponseBody(v);
      });

/** @internal */
export type ToolsOzoneModerationGetRecordsResponseBody$Outbound = {
  error: string;
  message: string;
};

/** @internal */
export const ToolsOzoneModerationGetRecordsResponseBody$outboundSchema:
  z.ZodType<
    ToolsOzoneModerationGetRecordsResponseBody$Outbound,
    z.ZodTypeDef,
    ToolsOzoneModerationGetRecordsResponseBody
  > = z.instanceof(ToolsOzoneModerationGetRecordsResponseBody)
    .transform(v => v.data$)
    .pipe(z.object({
      error: ToolsOzoneModerationGetRecordsError$outboundSchema,
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolsOzoneModerationGetRecordsResponseBody$ {
  /** @deprecated use `ToolsOzoneModerationGetRecordsResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ToolsOzoneModerationGetRecordsResponseBody$inboundSchema;
  /** @deprecated use `ToolsOzoneModerationGetRecordsResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ToolsOzoneModerationGetRecordsResponseBody$outboundSchema;
  /** @deprecated use `ToolsOzoneModerationGetRecordsResponseBody$Outbound` instead. */
  export type Outbound = ToolsOzoneModerationGetRecordsResponseBody$Outbound;
}
