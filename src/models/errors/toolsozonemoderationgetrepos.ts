/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type UnauthorizedToolsOzoneModerationGetReposResponseBodyErrorData = {
  error: "AuthMissing";
  message: string;
};

/**
 * Unauthorized
 */
export class UnauthorizedToolsOzoneModerationGetReposResponseBodyError
  extends Error
{
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$: UnauthorizedToolsOzoneModerationGetReposResponseBodyErrorData;

  constructor(
    err: UnauthorizedToolsOzoneModerationGetReposResponseBodyErrorData,
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "UnauthorizedToolsOzoneModerationGetReposResponseBodyError";
  }
}

export const ToolsOzoneModerationGetReposError = {
  InvalidRequest: "InvalidRequest",
  ExpiredToken: "ExpiredToken",
  InvalidToken: "InvalidToken",
} as const;
export type ToolsOzoneModerationGetReposError = ClosedEnum<
  typeof ToolsOzoneModerationGetReposError
>;

/**
 * Bad Request
 */
export type BadRequestToolsOzoneModerationGetReposResponseBodyErrorData = {
  error: ToolsOzoneModerationGetReposError;
  message: string;
};

/**
 * Bad Request
 */
export class BadRequestToolsOzoneModerationGetReposResponseBodyError
  extends Error
{
  error: ToolsOzoneModerationGetReposError;

  /** The original data that was passed to this error instance. */
  data$: BadRequestToolsOzoneModerationGetReposResponseBodyErrorData;

  constructor(
    err: BadRequestToolsOzoneModerationGetReposResponseBodyErrorData,
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "BadRequestToolsOzoneModerationGetReposResponseBodyError";
  }
}

/** @internal */
export const UnauthorizedToolsOzoneModerationGetReposResponseBodyError$inboundSchema:
  z.ZodType<
    UnauthorizedToolsOzoneModerationGetReposResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.literal("AuthMissing"),
    message: z.string(),
  })
    .transform((v) => {
      return new UnauthorizedToolsOzoneModerationGetReposResponseBodyError(v);
    });

/** @internal */
export type UnauthorizedToolsOzoneModerationGetReposResponseBodyError$Outbound =
  {
    error: "AuthMissing";
    message: string;
  };

/** @internal */
export const UnauthorizedToolsOzoneModerationGetReposResponseBodyError$outboundSchema:
  z.ZodType<
    UnauthorizedToolsOzoneModerationGetReposResponseBodyError$Outbound,
    z.ZodTypeDef,
    UnauthorizedToolsOzoneModerationGetReposResponseBodyError
  > = z.instanceof(UnauthorizedToolsOzoneModerationGetReposResponseBodyError)
    .transform(v => v.data$)
    .pipe(z.object({
      error: z.literal("AuthMissing").default("AuthMissing" as const),
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnauthorizedToolsOzoneModerationGetReposResponseBodyError$ {
  /** @deprecated use `UnauthorizedToolsOzoneModerationGetReposResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    UnauthorizedToolsOzoneModerationGetReposResponseBodyError$inboundSchema;
  /** @deprecated use `UnauthorizedToolsOzoneModerationGetReposResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    UnauthorizedToolsOzoneModerationGetReposResponseBodyError$outboundSchema;
  /** @deprecated use `UnauthorizedToolsOzoneModerationGetReposResponseBodyError$Outbound` instead. */
  export type Outbound =
    UnauthorizedToolsOzoneModerationGetReposResponseBodyError$Outbound;
}

/** @internal */
export const ToolsOzoneModerationGetReposError$inboundSchema: z.ZodNativeEnum<
  typeof ToolsOzoneModerationGetReposError
> = z.nativeEnum(ToolsOzoneModerationGetReposError);

/** @internal */
export const ToolsOzoneModerationGetReposError$outboundSchema: z.ZodNativeEnum<
  typeof ToolsOzoneModerationGetReposError
> = ToolsOzoneModerationGetReposError$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolsOzoneModerationGetReposError$ {
  /** @deprecated use `ToolsOzoneModerationGetReposError$inboundSchema` instead. */
  export const inboundSchema = ToolsOzoneModerationGetReposError$inboundSchema;
  /** @deprecated use `ToolsOzoneModerationGetReposError$outboundSchema` instead. */
  export const outboundSchema =
    ToolsOzoneModerationGetReposError$outboundSchema;
}

/** @internal */
export const BadRequestToolsOzoneModerationGetReposResponseBodyError$inboundSchema:
  z.ZodType<
    BadRequestToolsOzoneModerationGetReposResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: ToolsOzoneModerationGetReposError$inboundSchema,
    message: z.string(),
  })
    .transform((v) => {
      return new BadRequestToolsOzoneModerationGetReposResponseBodyError(v);
    });

/** @internal */
export type BadRequestToolsOzoneModerationGetReposResponseBodyError$Outbound = {
  error: string;
  message: string;
};

/** @internal */
export const BadRequestToolsOzoneModerationGetReposResponseBodyError$outboundSchema:
  z.ZodType<
    BadRequestToolsOzoneModerationGetReposResponseBodyError$Outbound,
    z.ZodTypeDef,
    BadRequestToolsOzoneModerationGetReposResponseBodyError
  > = z.instanceof(BadRequestToolsOzoneModerationGetReposResponseBodyError)
    .transform(v => v.data$)
    .pipe(z.object({
      error: ToolsOzoneModerationGetReposError$outboundSchema,
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BadRequestToolsOzoneModerationGetReposResponseBodyError$ {
  /** @deprecated use `BadRequestToolsOzoneModerationGetReposResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    BadRequestToolsOzoneModerationGetReposResponseBodyError$inboundSchema;
  /** @deprecated use `BadRequestToolsOzoneModerationGetReposResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    BadRequestToolsOzoneModerationGetReposResponseBodyError$outboundSchema;
  /** @deprecated use `BadRequestToolsOzoneModerationGetReposResponseBodyError$Outbound` instead. */
  export type Outbound =
    BadRequestToolsOzoneModerationGetReposResponseBodyError$Outbound;
}
