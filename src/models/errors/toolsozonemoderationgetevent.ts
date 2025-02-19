/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type UnauthorizedToolsOzoneModerationGetEventResponseBodyErrorData = {
  error: "AuthMissing";
  message: string;
};

/**
 * Unauthorized
 */
export class UnauthorizedToolsOzoneModerationGetEventResponseBodyError
  extends Error
{
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$: UnauthorizedToolsOzoneModerationGetEventResponseBodyErrorData;

  constructor(
    err: UnauthorizedToolsOzoneModerationGetEventResponseBodyErrorData,
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "UnauthorizedToolsOzoneModerationGetEventResponseBodyError";
  }
}

export const ToolsOzoneModerationGetEventError = {
  InvalidRequest: "InvalidRequest",
  ExpiredToken: "ExpiredToken",
  InvalidToken: "InvalidToken",
} as const;
export type ToolsOzoneModerationGetEventError = ClosedEnum<
  typeof ToolsOzoneModerationGetEventError
>;

/**
 * Bad Request
 */
export type BadRequestToolsOzoneModerationGetEventResponseBodyErrorData = {
  error: ToolsOzoneModerationGetEventError;
  message: string;
};

/**
 * Bad Request
 */
export class BadRequestToolsOzoneModerationGetEventResponseBodyError
  extends Error
{
  error: ToolsOzoneModerationGetEventError;

  /** The original data that was passed to this error instance. */
  data$: BadRequestToolsOzoneModerationGetEventResponseBodyErrorData;

  constructor(
    err: BadRequestToolsOzoneModerationGetEventResponseBodyErrorData,
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "BadRequestToolsOzoneModerationGetEventResponseBodyError";
  }
}

/** @internal */
export const UnauthorizedToolsOzoneModerationGetEventResponseBodyError$inboundSchema:
  z.ZodType<
    UnauthorizedToolsOzoneModerationGetEventResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.literal("AuthMissing"),
    message: z.string(),
  })
    .transform((v) => {
      return new UnauthorizedToolsOzoneModerationGetEventResponseBodyError(v);
    });

/** @internal */
export type UnauthorizedToolsOzoneModerationGetEventResponseBodyError$Outbound =
  {
    error: "AuthMissing";
    message: string;
  };

/** @internal */
export const UnauthorizedToolsOzoneModerationGetEventResponseBodyError$outboundSchema:
  z.ZodType<
    UnauthorizedToolsOzoneModerationGetEventResponseBodyError$Outbound,
    z.ZodTypeDef,
    UnauthorizedToolsOzoneModerationGetEventResponseBodyError
  > = z.instanceof(UnauthorizedToolsOzoneModerationGetEventResponseBodyError)
    .transform(v => v.data$)
    .pipe(z.object({
      error: z.literal("AuthMissing").default("AuthMissing" as const),
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnauthorizedToolsOzoneModerationGetEventResponseBodyError$ {
  /** @deprecated use `UnauthorizedToolsOzoneModerationGetEventResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    UnauthorizedToolsOzoneModerationGetEventResponseBodyError$inboundSchema;
  /** @deprecated use `UnauthorizedToolsOzoneModerationGetEventResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    UnauthorizedToolsOzoneModerationGetEventResponseBodyError$outboundSchema;
  /** @deprecated use `UnauthorizedToolsOzoneModerationGetEventResponseBodyError$Outbound` instead. */
  export type Outbound =
    UnauthorizedToolsOzoneModerationGetEventResponseBodyError$Outbound;
}

/** @internal */
export const ToolsOzoneModerationGetEventError$inboundSchema: z.ZodNativeEnum<
  typeof ToolsOzoneModerationGetEventError
> = z.nativeEnum(ToolsOzoneModerationGetEventError);

/** @internal */
export const ToolsOzoneModerationGetEventError$outboundSchema: z.ZodNativeEnum<
  typeof ToolsOzoneModerationGetEventError
> = ToolsOzoneModerationGetEventError$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolsOzoneModerationGetEventError$ {
  /** @deprecated use `ToolsOzoneModerationGetEventError$inboundSchema` instead. */
  export const inboundSchema = ToolsOzoneModerationGetEventError$inboundSchema;
  /** @deprecated use `ToolsOzoneModerationGetEventError$outboundSchema` instead. */
  export const outboundSchema =
    ToolsOzoneModerationGetEventError$outboundSchema;
}

/** @internal */
export const BadRequestToolsOzoneModerationGetEventResponseBodyError$inboundSchema:
  z.ZodType<
    BadRequestToolsOzoneModerationGetEventResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: ToolsOzoneModerationGetEventError$inboundSchema,
    message: z.string(),
  })
    .transform((v) => {
      return new BadRequestToolsOzoneModerationGetEventResponseBodyError(v);
    });

/** @internal */
export type BadRequestToolsOzoneModerationGetEventResponseBodyError$Outbound = {
  error: string;
  message: string;
};

/** @internal */
export const BadRequestToolsOzoneModerationGetEventResponseBodyError$outboundSchema:
  z.ZodType<
    BadRequestToolsOzoneModerationGetEventResponseBodyError$Outbound,
    z.ZodTypeDef,
    BadRequestToolsOzoneModerationGetEventResponseBodyError
  > = z.instanceof(BadRequestToolsOzoneModerationGetEventResponseBodyError)
    .transform(v => v.data$)
    .pipe(z.object({
      error: ToolsOzoneModerationGetEventError$outboundSchema,
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BadRequestToolsOzoneModerationGetEventResponseBodyError$ {
  /** @deprecated use `BadRequestToolsOzoneModerationGetEventResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    BadRequestToolsOzoneModerationGetEventResponseBodyError$inboundSchema;
  /** @deprecated use `BadRequestToolsOzoneModerationGetEventResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    BadRequestToolsOzoneModerationGetEventResponseBodyError$outboundSchema;
  /** @deprecated use `BadRequestToolsOzoneModerationGetEventResponseBodyError$Outbound` instead. */
  export type Outbound =
    BadRequestToolsOzoneModerationGetEventResponseBodyError$Outbound;
}
