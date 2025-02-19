/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type UnauthorizedToolsOzoneModerationEmitEventResponseBodyErrorData = {
  error: "AuthMissing";
  message: string;
};

/**
 * Unauthorized
 */
export class UnauthorizedToolsOzoneModerationEmitEventResponseBodyError
  extends Error
{
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$: UnauthorizedToolsOzoneModerationEmitEventResponseBodyErrorData;

  constructor(
    err: UnauthorizedToolsOzoneModerationEmitEventResponseBodyErrorData,
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "UnauthorizedToolsOzoneModerationEmitEventResponseBodyError";
  }
}

export const ToolsOzoneModerationEmitEventError = {
  InvalidRequest: "InvalidRequest",
  ExpiredToken: "ExpiredToken",
  InvalidToken: "InvalidToken",
  SubjectHasAction: "SubjectHasAction",
} as const;
export type ToolsOzoneModerationEmitEventError = ClosedEnum<
  typeof ToolsOzoneModerationEmitEventError
>;

/**
 * Bad Request
 */
export type BadRequestToolsOzoneModerationEmitEventResponseBodyErrorData = {
  error: ToolsOzoneModerationEmitEventError;
  message: string;
};

/**
 * Bad Request
 */
export class BadRequestToolsOzoneModerationEmitEventResponseBodyError
  extends Error
{
  error: ToolsOzoneModerationEmitEventError;

  /** The original data that was passed to this error instance. */
  data$: BadRequestToolsOzoneModerationEmitEventResponseBodyErrorData;

  constructor(
    err: BadRequestToolsOzoneModerationEmitEventResponseBodyErrorData,
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "BadRequestToolsOzoneModerationEmitEventResponseBodyError";
  }
}

/** @internal */
export const UnauthorizedToolsOzoneModerationEmitEventResponseBodyError$inboundSchema:
  z.ZodType<
    UnauthorizedToolsOzoneModerationEmitEventResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.literal("AuthMissing"),
    message: z.string(),
  })
    .transform((v) => {
      return new UnauthorizedToolsOzoneModerationEmitEventResponseBodyError(v);
    });

/** @internal */
export type UnauthorizedToolsOzoneModerationEmitEventResponseBodyError$Outbound =
  {
    error: "AuthMissing";
    message: string;
  };

/** @internal */
export const UnauthorizedToolsOzoneModerationEmitEventResponseBodyError$outboundSchema:
  z.ZodType<
    UnauthorizedToolsOzoneModerationEmitEventResponseBodyError$Outbound,
    z.ZodTypeDef,
    UnauthorizedToolsOzoneModerationEmitEventResponseBodyError
  > = z.instanceof(UnauthorizedToolsOzoneModerationEmitEventResponseBodyError)
    .transform(v => v.data$)
    .pipe(z.object({
      error: z.literal("AuthMissing").default("AuthMissing" as const),
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnauthorizedToolsOzoneModerationEmitEventResponseBodyError$ {
  /** @deprecated use `UnauthorizedToolsOzoneModerationEmitEventResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    UnauthorizedToolsOzoneModerationEmitEventResponseBodyError$inboundSchema;
  /** @deprecated use `UnauthorizedToolsOzoneModerationEmitEventResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    UnauthorizedToolsOzoneModerationEmitEventResponseBodyError$outboundSchema;
  /** @deprecated use `UnauthorizedToolsOzoneModerationEmitEventResponseBodyError$Outbound` instead. */
  export type Outbound =
    UnauthorizedToolsOzoneModerationEmitEventResponseBodyError$Outbound;
}

/** @internal */
export const ToolsOzoneModerationEmitEventError$inboundSchema: z.ZodNativeEnum<
  typeof ToolsOzoneModerationEmitEventError
> = z.nativeEnum(ToolsOzoneModerationEmitEventError);

/** @internal */
export const ToolsOzoneModerationEmitEventError$outboundSchema: z.ZodNativeEnum<
  typeof ToolsOzoneModerationEmitEventError
> = ToolsOzoneModerationEmitEventError$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolsOzoneModerationEmitEventError$ {
  /** @deprecated use `ToolsOzoneModerationEmitEventError$inboundSchema` instead. */
  export const inboundSchema = ToolsOzoneModerationEmitEventError$inboundSchema;
  /** @deprecated use `ToolsOzoneModerationEmitEventError$outboundSchema` instead. */
  export const outboundSchema =
    ToolsOzoneModerationEmitEventError$outboundSchema;
}

/** @internal */
export const BadRequestToolsOzoneModerationEmitEventResponseBodyError$inboundSchema:
  z.ZodType<
    BadRequestToolsOzoneModerationEmitEventResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: ToolsOzoneModerationEmitEventError$inboundSchema,
    message: z.string(),
  })
    .transform((v) => {
      return new BadRequestToolsOzoneModerationEmitEventResponseBodyError(v);
    });

/** @internal */
export type BadRequestToolsOzoneModerationEmitEventResponseBodyError$Outbound =
  {
    error: string;
    message: string;
  };

/** @internal */
export const BadRequestToolsOzoneModerationEmitEventResponseBodyError$outboundSchema:
  z.ZodType<
    BadRequestToolsOzoneModerationEmitEventResponseBodyError$Outbound,
    z.ZodTypeDef,
    BadRequestToolsOzoneModerationEmitEventResponseBodyError
  > = z.instanceof(BadRequestToolsOzoneModerationEmitEventResponseBodyError)
    .transform(v => v.data$)
    .pipe(z.object({
      error: ToolsOzoneModerationEmitEventError$outboundSchema,
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BadRequestToolsOzoneModerationEmitEventResponseBodyError$ {
  /** @deprecated use `BadRequestToolsOzoneModerationEmitEventResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    BadRequestToolsOzoneModerationEmitEventResponseBodyError$inboundSchema;
  /** @deprecated use `BadRequestToolsOzoneModerationEmitEventResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    BadRequestToolsOzoneModerationEmitEventResponseBodyError$outboundSchema;
  /** @deprecated use `BadRequestToolsOzoneModerationEmitEventResponseBodyError$Outbound` instead. */
  export type Outbound =
    BadRequestToolsOzoneModerationEmitEventResponseBodyError$Outbound;
}
