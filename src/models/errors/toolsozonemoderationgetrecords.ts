/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type UnauthorizedToolsOzoneModerationGetRecordsResponseBodyErrorData = {
  error: "AuthMissing";
  message: string;
};

/**
 * Unauthorized
 */
export class UnauthorizedToolsOzoneModerationGetRecordsResponseBodyError
  extends Error
{
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$: UnauthorizedToolsOzoneModerationGetRecordsResponseBodyErrorData;

  constructor(
    err: UnauthorizedToolsOzoneModerationGetRecordsResponseBodyErrorData,
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "UnauthorizedToolsOzoneModerationGetRecordsResponseBodyError";
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
export type BadRequestToolsOzoneModerationGetRecordsResponseBodyErrorData = {
  error: ToolsOzoneModerationGetRecordsError;
  message: string;
};

/**
 * Bad Request
 */
export class BadRequestToolsOzoneModerationGetRecordsResponseBodyError
  extends Error
{
  error: ToolsOzoneModerationGetRecordsError;

  /** The original data that was passed to this error instance. */
  data$: BadRequestToolsOzoneModerationGetRecordsResponseBodyErrorData;

  constructor(
    err: BadRequestToolsOzoneModerationGetRecordsResponseBodyErrorData,
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "BadRequestToolsOzoneModerationGetRecordsResponseBodyError";
  }
}

/** @internal */
export const UnauthorizedToolsOzoneModerationGetRecordsResponseBodyError$inboundSchema:
  z.ZodType<
    UnauthorizedToolsOzoneModerationGetRecordsResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.literal("AuthMissing"),
    message: z.string(),
  })
    .transform((v) => {
      return new UnauthorizedToolsOzoneModerationGetRecordsResponseBodyError(v);
    });

/** @internal */
export type UnauthorizedToolsOzoneModerationGetRecordsResponseBodyError$Outbound =
  {
    error: "AuthMissing";
    message: string;
  };

/** @internal */
export const UnauthorizedToolsOzoneModerationGetRecordsResponseBodyError$outboundSchema:
  z.ZodType<
    UnauthorizedToolsOzoneModerationGetRecordsResponseBodyError$Outbound,
    z.ZodTypeDef,
    UnauthorizedToolsOzoneModerationGetRecordsResponseBodyError
  > = z.instanceof(UnauthorizedToolsOzoneModerationGetRecordsResponseBodyError)
    .transform(v => v.data$)
    .pipe(z.object({
      error: z.literal("AuthMissing").default("AuthMissing" as const),
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnauthorizedToolsOzoneModerationGetRecordsResponseBodyError$ {
  /** @deprecated use `UnauthorizedToolsOzoneModerationGetRecordsResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    UnauthorizedToolsOzoneModerationGetRecordsResponseBodyError$inboundSchema;
  /** @deprecated use `UnauthorizedToolsOzoneModerationGetRecordsResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    UnauthorizedToolsOzoneModerationGetRecordsResponseBodyError$outboundSchema;
  /** @deprecated use `UnauthorizedToolsOzoneModerationGetRecordsResponseBodyError$Outbound` instead. */
  export type Outbound =
    UnauthorizedToolsOzoneModerationGetRecordsResponseBodyError$Outbound;
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
export const BadRequestToolsOzoneModerationGetRecordsResponseBodyError$inboundSchema:
  z.ZodType<
    BadRequestToolsOzoneModerationGetRecordsResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: ToolsOzoneModerationGetRecordsError$inboundSchema,
    message: z.string(),
  })
    .transform((v) => {
      return new BadRequestToolsOzoneModerationGetRecordsResponseBodyError(v);
    });

/** @internal */
export type BadRequestToolsOzoneModerationGetRecordsResponseBodyError$Outbound =
  {
    error: string;
    message: string;
  };

/** @internal */
export const BadRequestToolsOzoneModerationGetRecordsResponseBodyError$outboundSchema:
  z.ZodType<
    BadRequestToolsOzoneModerationGetRecordsResponseBodyError$Outbound,
    z.ZodTypeDef,
    BadRequestToolsOzoneModerationGetRecordsResponseBodyError
  > = z.instanceof(BadRequestToolsOzoneModerationGetRecordsResponseBodyError)
    .transform(v => v.data$)
    .pipe(z.object({
      error: ToolsOzoneModerationGetRecordsError$outboundSchema,
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BadRequestToolsOzoneModerationGetRecordsResponseBodyError$ {
  /** @deprecated use `BadRequestToolsOzoneModerationGetRecordsResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    BadRequestToolsOzoneModerationGetRecordsResponseBodyError$inboundSchema;
  /** @deprecated use `BadRequestToolsOzoneModerationGetRecordsResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    BadRequestToolsOzoneModerationGetRecordsResponseBodyError$outboundSchema;
  /** @deprecated use `BadRequestToolsOzoneModerationGetRecordsResponseBodyError$Outbound` instead. */
  export type Outbound =
    BadRequestToolsOzoneModerationGetRecordsResponseBodyError$Outbound;
}
