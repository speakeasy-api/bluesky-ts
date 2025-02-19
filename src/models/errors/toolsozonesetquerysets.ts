/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type UnauthorizedToolsOzoneSetQuerySetsResponseBodyErrorData = {
  error: "AuthMissing";
  message: string;
};

/**
 * Unauthorized
 */
export class UnauthorizedToolsOzoneSetQuerySetsResponseBodyError extends Error {
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$: UnauthorizedToolsOzoneSetQuerySetsResponseBodyErrorData;

  constructor(err: UnauthorizedToolsOzoneSetQuerySetsResponseBodyErrorData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "UnauthorizedToolsOzoneSetQuerySetsResponseBodyError";
  }
}

export const ToolsOzoneSetQuerySetsError = {
  InvalidRequest: "InvalidRequest",
  ExpiredToken: "ExpiredToken",
  InvalidToken: "InvalidToken",
} as const;
export type ToolsOzoneSetQuerySetsError = ClosedEnum<
  typeof ToolsOzoneSetQuerySetsError
>;

/**
 * Bad Request
 */
export type BadRequestToolsOzoneSetQuerySetsResponseBodyErrorData = {
  error: ToolsOzoneSetQuerySetsError;
  message: string;
};

/**
 * Bad Request
 */
export class BadRequestToolsOzoneSetQuerySetsResponseBodyError extends Error {
  error: ToolsOzoneSetQuerySetsError;

  /** The original data that was passed to this error instance. */
  data$: BadRequestToolsOzoneSetQuerySetsResponseBodyErrorData;

  constructor(err: BadRequestToolsOzoneSetQuerySetsResponseBodyErrorData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "BadRequestToolsOzoneSetQuerySetsResponseBodyError";
  }
}

/** @internal */
export const UnauthorizedToolsOzoneSetQuerySetsResponseBodyError$inboundSchema:
  z.ZodType<
    UnauthorizedToolsOzoneSetQuerySetsResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.literal("AuthMissing"),
    message: z.string(),
  })
    .transform((v) => {
      return new UnauthorizedToolsOzoneSetQuerySetsResponseBodyError(v);
    });

/** @internal */
export type UnauthorizedToolsOzoneSetQuerySetsResponseBodyError$Outbound = {
  error: "AuthMissing";
  message: string;
};

/** @internal */
export const UnauthorizedToolsOzoneSetQuerySetsResponseBodyError$outboundSchema:
  z.ZodType<
    UnauthorizedToolsOzoneSetQuerySetsResponseBodyError$Outbound,
    z.ZodTypeDef,
    UnauthorizedToolsOzoneSetQuerySetsResponseBodyError
  > = z.instanceof(UnauthorizedToolsOzoneSetQuerySetsResponseBodyError)
    .transform(v => v.data$)
    .pipe(z.object({
      error: z.literal("AuthMissing").default("AuthMissing" as const),
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnauthorizedToolsOzoneSetQuerySetsResponseBodyError$ {
  /** @deprecated use `UnauthorizedToolsOzoneSetQuerySetsResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    UnauthorizedToolsOzoneSetQuerySetsResponseBodyError$inboundSchema;
  /** @deprecated use `UnauthorizedToolsOzoneSetQuerySetsResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    UnauthorizedToolsOzoneSetQuerySetsResponseBodyError$outboundSchema;
  /** @deprecated use `UnauthorizedToolsOzoneSetQuerySetsResponseBodyError$Outbound` instead. */
  export type Outbound =
    UnauthorizedToolsOzoneSetQuerySetsResponseBodyError$Outbound;
}

/** @internal */
export const ToolsOzoneSetQuerySetsError$inboundSchema: z.ZodNativeEnum<
  typeof ToolsOzoneSetQuerySetsError
> = z.nativeEnum(ToolsOzoneSetQuerySetsError);

/** @internal */
export const ToolsOzoneSetQuerySetsError$outboundSchema: z.ZodNativeEnum<
  typeof ToolsOzoneSetQuerySetsError
> = ToolsOzoneSetQuerySetsError$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolsOzoneSetQuerySetsError$ {
  /** @deprecated use `ToolsOzoneSetQuerySetsError$inboundSchema` instead. */
  export const inboundSchema = ToolsOzoneSetQuerySetsError$inboundSchema;
  /** @deprecated use `ToolsOzoneSetQuerySetsError$outboundSchema` instead. */
  export const outboundSchema = ToolsOzoneSetQuerySetsError$outboundSchema;
}

/** @internal */
export const BadRequestToolsOzoneSetQuerySetsResponseBodyError$inboundSchema:
  z.ZodType<
    BadRequestToolsOzoneSetQuerySetsResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: ToolsOzoneSetQuerySetsError$inboundSchema,
    message: z.string(),
  })
    .transform((v) => {
      return new BadRequestToolsOzoneSetQuerySetsResponseBodyError(v);
    });

/** @internal */
export type BadRequestToolsOzoneSetQuerySetsResponseBodyError$Outbound = {
  error: string;
  message: string;
};

/** @internal */
export const BadRequestToolsOzoneSetQuerySetsResponseBodyError$outboundSchema:
  z.ZodType<
    BadRequestToolsOzoneSetQuerySetsResponseBodyError$Outbound,
    z.ZodTypeDef,
    BadRequestToolsOzoneSetQuerySetsResponseBodyError
  > = z.instanceof(BadRequestToolsOzoneSetQuerySetsResponseBodyError)
    .transform(v => v.data$)
    .pipe(z.object({
      error: ToolsOzoneSetQuerySetsError$outboundSchema,
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BadRequestToolsOzoneSetQuerySetsResponseBodyError$ {
  /** @deprecated use `BadRequestToolsOzoneSetQuerySetsResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    BadRequestToolsOzoneSetQuerySetsResponseBodyError$inboundSchema;
  /** @deprecated use `BadRequestToolsOzoneSetQuerySetsResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    BadRequestToolsOzoneSetQuerySetsResponseBodyError$outboundSchema;
  /** @deprecated use `BadRequestToolsOzoneSetQuerySetsResponseBodyError$Outbound` instead. */
  export type Outbound =
    BadRequestToolsOzoneSetQuerySetsResponseBodyError$Outbound;
}
