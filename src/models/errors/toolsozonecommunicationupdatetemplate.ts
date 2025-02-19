/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type UnauthorizedToolsOzoneCommunicationUpdateTemplateResponseBodyErrorData =
  {
    error: "AuthMissing";
    message: string;
  };

/**
 * Unauthorized
 */
export class UnauthorizedToolsOzoneCommunicationUpdateTemplateResponseBodyError
  extends Error
{
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$: UnauthorizedToolsOzoneCommunicationUpdateTemplateResponseBodyErrorData;

  constructor(
    err: UnauthorizedToolsOzoneCommunicationUpdateTemplateResponseBodyErrorData,
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name =
      "UnauthorizedToolsOzoneCommunicationUpdateTemplateResponseBodyError";
  }
}

export const ToolsOzoneCommunicationUpdateTemplateError = {
  InvalidRequest: "InvalidRequest",
  ExpiredToken: "ExpiredToken",
  InvalidToken: "InvalidToken",
  DuplicateTemplateName: "DuplicateTemplateName",
} as const;
export type ToolsOzoneCommunicationUpdateTemplateError = ClosedEnum<
  typeof ToolsOzoneCommunicationUpdateTemplateError
>;

/**
 * Bad Request
 */
export type BadRequestToolsOzoneCommunicationUpdateTemplateResponseBodyErrorData =
  {
    error: ToolsOzoneCommunicationUpdateTemplateError;
    message: string;
  };

/**
 * Bad Request
 */
export class BadRequestToolsOzoneCommunicationUpdateTemplateResponseBodyError
  extends Error
{
  error: ToolsOzoneCommunicationUpdateTemplateError;

  /** The original data that was passed to this error instance. */
  data$: BadRequestToolsOzoneCommunicationUpdateTemplateResponseBodyErrorData;

  constructor(
    err: BadRequestToolsOzoneCommunicationUpdateTemplateResponseBodyErrorData,
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name =
      "BadRequestToolsOzoneCommunicationUpdateTemplateResponseBodyError";
  }
}

/** @internal */
export const UnauthorizedToolsOzoneCommunicationUpdateTemplateResponseBodyError$inboundSchema:
  z.ZodType<
    UnauthorizedToolsOzoneCommunicationUpdateTemplateResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.literal("AuthMissing"),
    message: z.string(),
  })
    .transform((v) => {
      return new UnauthorizedToolsOzoneCommunicationUpdateTemplateResponseBodyError(
        v,
      );
    });

/** @internal */
export type UnauthorizedToolsOzoneCommunicationUpdateTemplateResponseBodyError$Outbound =
  {
    error: "AuthMissing";
    message: string;
  };

/** @internal */
export const UnauthorizedToolsOzoneCommunicationUpdateTemplateResponseBodyError$outboundSchema:
  z.ZodType<
    UnauthorizedToolsOzoneCommunicationUpdateTemplateResponseBodyError$Outbound,
    z.ZodTypeDef,
    UnauthorizedToolsOzoneCommunicationUpdateTemplateResponseBodyError
  > = z.instanceof(
    UnauthorizedToolsOzoneCommunicationUpdateTemplateResponseBodyError,
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
export namespace UnauthorizedToolsOzoneCommunicationUpdateTemplateResponseBodyError$ {
  /** @deprecated use `UnauthorizedToolsOzoneCommunicationUpdateTemplateResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    UnauthorizedToolsOzoneCommunicationUpdateTemplateResponseBodyError$inboundSchema;
  /** @deprecated use `UnauthorizedToolsOzoneCommunicationUpdateTemplateResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    UnauthorizedToolsOzoneCommunicationUpdateTemplateResponseBodyError$outboundSchema;
  /** @deprecated use `UnauthorizedToolsOzoneCommunicationUpdateTemplateResponseBodyError$Outbound` instead. */
  export type Outbound =
    UnauthorizedToolsOzoneCommunicationUpdateTemplateResponseBodyError$Outbound;
}

/** @internal */
export const ToolsOzoneCommunicationUpdateTemplateError$inboundSchema:
  z.ZodNativeEnum<typeof ToolsOzoneCommunicationUpdateTemplateError> = z
    .nativeEnum(ToolsOzoneCommunicationUpdateTemplateError);

/** @internal */
export const ToolsOzoneCommunicationUpdateTemplateError$outboundSchema:
  z.ZodNativeEnum<typeof ToolsOzoneCommunicationUpdateTemplateError> =
    ToolsOzoneCommunicationUpdateTemplateError$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolsOzoneCommunicationUpdateTemplateError$ {
  /** @deprecated use `ToolsOzoneCommunicationUpdateTemplateError$inboundSchema` instead. */
  export const inboundSchema =
    ToolsOzoneCommunicationUpdateTemplateError$inboundSchema;
  /** @deprecated use `ToolsOzoneCommunicationUpdateTemplateError$outboundSchema` instead. */
  export const outboundSchema =
    ToolsOzoneCommunicationUpdateTemplateError$outboundSchema;
}

/** @internal */
export const BadRequestToolsOzoneCommunicationUpdateTemplateResponseBodyError$inboundSchema:
  z.ZodType<
    BadRequestToolsOzoneCommunicationUpdateTemplateResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: ToolsOzoneCommunicationUpdateTemplateError$inboundSchema,
    message: z.string(),
  })
    .transform((v) => {
      return new BadRequestToolsOzoneCommunicationUpdateTemplateResponseBodyError(
        v,
      );
    });

/** @internal */
export type BadRequestToolsOzoneCommunicationUpdateTemplateResponseBodyError$Outbound =
  {
    error: string;
    message: string;
  };

/** @internal */
export const BadRequestToolsOzoneCommunicationUpdateTemplateResponseBodyError$outboundSchema:
  z.ZodType<
    BadRequestToolsOzoneCommunicationUpdateTemplateResponseBodyError$Outbound,
    z.ZodTypeDef,
    BadRequestToolsOzoneCommunicationUpdateTemplateResponseBodyError
  > = z.instanceof(
    BadRequestToolsOzoneCommunicationUpdateTemplateResponseBodyError,
  )
    .transform(v => v.data$)
    .pipe(z.object({
      error: ToolsOzoneCommunicationUpdateTemplateError$outboundSchema,
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BadRequestToolsOzoneCommunicationUpdateTemplateResponseBodyError$ {
  /** @deprecated use `BadRequestToolsOzoneCommunicationUpdateTemplateResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    BadRequestToolsOzoneCommunicationUpdateTemplateResponseBodyError$inboundSchema;
  /** @deprecated use `BadRequestToolsOzoneCommunicationUpdateTemplateResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    BadRequestToolsOzoneCommunicationUpdateTemplateResponseBodyError$outboundSchema;
  /** @deprecated use `BadRequestToolsOzoneCommunicationUpdateTemplateResponseBodyError$Outbound` instead. */
  export type Outbound =
    BadRequestToolsOzoneCommunicationUpdateTemplateResponseBodyError$Outbound;
}
