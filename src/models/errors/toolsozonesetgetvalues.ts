/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type UnauthorizedToolsOzoneSetGetValuesResponseBodyErrorData = {
  error: "AuthMissing";
  message: string;
};

/**
 * Unauthorized
 */
export class UnauthorizedToolsOzoneSetGetValuesResponseBodyError extends Error {
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$: UnauthorizedToolsOzoneSetGetValuesResponseBodyErrorData;

  constructor(err: UnauthorizedToolsOzoneSetGetValuesResponseBodyErrorData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "UnauthorizedToolsOzoneSetGetValuesResponseBodyError";
  }
}

export const ToolsOzoneSetGetValuesError = {
  InvalidRequest: "InvalidRequest",
  ExpiredToken: "ExpiredToken",
  InvalidToken: "InvalidToken",
  SetNotFound: "SetNotFound",
} as const;
export type ToolsOzoneSetGetValuesError = ClosedEnum<
  typeof ToolsOzoneSetGetValuesError
>;

/**
 * Bad Request
 */
export type BadRequestToolsOzoneSetGetValuesResponseBodyErrorData = {
  error: ToolsOzoneSetGetValuesError;
  message: string;
};

/**
 * Bad Request
 */
export class BadRequestToolsOzoneSetGetValuesResponseBodyError extends Error {
  error: ToolsOzoneSetGetValuesError;

  /** The original data that was passed to this error instance. */
  data$: BadRequestToolsOzoneSetGetValuesResponseBodyErrorData;

  constructor(err: BadRequestToolsOzoneSetGetValuesResponseBodyErrorData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "BadRequestToolsOzoneSetGetValuesResponseBodyError";
  }
}

/** @internal */
export const UnauthorizedToolsOzoneSetGetValuesResponseBodyError$inboundSchema:
  z.ZodType<
    UnauthorizedToolsOzoneSetGetValuesResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.literal("AuthMissing"),
    message: z.string(),
  })
    .transform((v) => {
      return new UnauthorizedToolsOzoneSetGetValuesResponseBodyError(v);
    });

/** @internal */
export type UnauthorizedToolsOzoneSetGetValuesResponseBodyError$Outbound = {
  error: "AuthMissing";
  message: string;
};

/** @internal */
export const UnauthorizedToolsOzoneSetGetValuesResponseBodyError$outboundSchema:
  z.ZodType<
    UnauthorizedToolsOzoneSetGetValuesResponseBodyError$Outbound,
    z.ZodTypeDef,
    UnauthorizedToolsOzoneSetGetValuesResponseBodyError
  > = z.instanceof(UnauthorizedToolsOzoneSetGetValuesResponseBodyError)
    .transform(v => v.data$)
    .pipe(z.object({
      error: z.literal("AuthMissing").default("AuthMissing" as const),
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnauthorizedToolsOzoneSetGetValuesResponseBodyError$ {
  /** @deprecated use `UnauthorizedToolsOzoneSetGetValuesResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    UnauthorizedToolsOzoneSetGetValuesResponseBodyError$inboundSchema;
  /** @deprecated use `UnauthorizedToolsOzoneSetGetValuesResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    UnauthorizedToolsOzoneSetGetValuesResponseBodyError$outboundSchema;
  /** @deprecated use `UnauthorizedToolsOzoneSetGetValuesResponseBodyError$Outbound` instead. */
  export type Outbound =
    UnauthorizedToolsOzoneSetGetValuesResponseBodyError$Outbound;
}

/** @internal */
export const ToolsOzoneSetGetValuesError$inboundSchema: z.ZodNativeEnum<
  typeof ToolsOzoneSetGetValuesError
> = z.nativeEnum(ToolsOzoneSetGetValuesError);

/** @internal */
export const ToolsOzoneSetGetValuesError$outboundSchema: z.ZodNativeEnum<
  typeof ToolsOzoneSetGetValuesError
> = ToolsOzoneSetGetValuesError$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolsOzoneSetGetValuesError$ {
  /** @deprecated use `ToolsOzoneSetGetValuesError$inboundSchema` instead. */
  export const inboundSchema = ToolsOzoneSetGetValuesError$inboundSchema;
  /** @deprecated use `ToolsOzoneSetGetValuesError$outboundSchema` instead. */
  export const outboundSchema = ToolsOzoneSetGetValuesError$outboundSchema;
}

/** @internal */
export const BadRequestToolsOzoneSetGetValuesResponseBodyError$inboundSchema:
  z.ZodType<
    BadRequestToolsOzoneSetGetValuesResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: ToolsOzoneSetGetValuesError$inboundSchema,
    message: z.string(),
  })
    .transform((v) => {
      return new BadRequestToolsOzoneSetGetValuesResponseBodyError(v);
    });

/** @internal */
export type BadRequestToolsOzoneSetGetValuesResponseBodyError$Outbound = {
  error: string;
  message: string;
};

/** @internal */
export const BadRequestToolsOzoneSetGetValuesResponseBodyError$outboundSchema:
  z.ZodType<
    BadRequestToolsOzoneSetGetValuesResponseBodyError$Outbound,
    z.ZodTypeDef,
    BadRequestToolsOzoneSetGetValuesResponseBodyError
  > = z.instanceof(BadRequestToolsOzoneSetGetValuesResponseBodyError)
    .transform(v => v.data$)
    .pipe(z.object({
      error: ToolsOzoneSetGetValuesError$outboundSchema,
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BadRequestToolsOzoneSetGetValuesResponseBodyError$ {
  /** @deprecated use `BadRequestToolsOzoneSetGetValuesResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    BadRequestToolsOzoneSetGetValuesResponseBodyError$inboundSchema;
  /** @deprecated use `BadRequestToolsOzoneSetGetValuesResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    BadRequestToolsOzoneSetGetValuesResponseBodyError$outboundSchema;
  /** @deprecated use `BadRequestToolsOzoneSetGetValuesResponseBodyError$Outbound` instead. */
  export type Outbound =
    BadRequestToolsOzoneSetGetValuesResponseBodyError$Outbound;
}
