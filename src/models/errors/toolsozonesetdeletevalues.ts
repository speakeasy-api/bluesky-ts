/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type UnauthorizedToolsOzoneSetDeleteValuesResponseBodyErrorData = {
  error: "AuthMissing";
  message: string;
};

/**
 * Unauthorized
 */
export class UnauthorizedToolsOzoneSetDeleteValuesResponseBodyError
  extends Error
{
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$: UnauthorizedToolsOzoneSetDeleteValuesResponseBodyErrorData;

  constructor(err: UnauthorizedToolsOzoneSetDeleteValuesResponseBodyErrorData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "UnauthorizedToolsOzoneSetDeleteValuesResponseBodyError";
  }
}

export const ToolsOzoneSetDeleteValuesError = {
  InvalidRequest: "InvalidRequest",
  ExpiredToken: "ExpiredToken",
  InvalidToken: "InvalidToken",
  SetNotFound: "SetNotFound",
} as const;
export type ToolsOzoneSetDeleteValuesError = ClosedEnum<
  typeof ToolsOzoneSetDeleteValuesError
>;

/**
 * Bad Request
 */
export type BadRequestToolsOzoneSetDeleteValuesResponseBodyErrorData = {
  error: ToolsOzoneSetDeleteValuesError;
  message: string;
};

/**
 * Bad Request
 */
export class BadRequestToolsOzoneSetDeleteValuesResponseBodyError
  extends Error
{
  error: ToolsOzoneSetDeleteValuesError;

  /** The original data that was passed to this error instance. */
  data$: BadRequestToolsOzoneSetDeleteValuesResponseBodyErrorData;

  constructor(err: BadRequestToolsOzoneSetDeleteValuesResponseBodyErrorData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "BadRequestToolsOzoneSetDeleteValuesResponseBodyError";
  }
}

/** @internal */
export const UnauthorizedToolsOzoneSetDeleteValuesResponseBodyError$inboundSchema:
  z.ZodType<
    UnauthorizedToolsOzoneSetDeleteValuesResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.literal("AuthMissing"),
    message: z.string(),
  })
    .transform((v) => {
      return new UnauthorizedToolsOzoneSetDeleteValuesResponseBodyError(v);
    });

/** @internal */
export type UnauthorizedToolsOzoneSetDeleteValuesResponseBodyError$Outbound = {
  error: "AuthMissing";
  message: string;
};

/** @internal */
export const UnauthorizedToolsOzoneSetDeleteValuesResponseBodyError$outboundSchema:
  z.ZodType<
    UnauthorizedToolsOzoneSetDeleteValuesResponseBodyError$Outbound,
    z.ZodTypeDef,
    UnauthorizedToolsOzoneSetDeleteValuesResponseBodyError
  > = z.instanceof(UnauthorizedToolsOzoneSetDeleteValuesResponseBodyError)
    .transform(v => v.data$)
    .pipe(z.object({
      error: z.literal("AuthMissing").default("AuthMissing" as const),
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnauthorizedToolsOzoneSetDeleteValuesResponseBodyError$ {
  /** @deprecated use `UnauthorizedToolsOzoneSetDeleteValuesResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    UnauthorizedToolsOzoneSetDeleteValuesResponseBodyError$inboundSchema;
  /** @deprecated use `UnauthorizedToolsOzoneSetDeleteValuesResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    UnauthorizedToolsOzoneSetDeleteValuesResponseBodyError$outboundSchema;
  /** @deprecated use `UnauthorizedToolsOzoneSetDeleteValuesResponseBodyError$Outbound` instead. */
  export type Outbound =
    UnauthorizedToolsOzoneSetDeleteValuesResponseBodyError$Outbound;
}

/** @internal */
export const ToolsOzoneSetDeleteValuesError$inboundSchema: z.ZodNativeEnum<
  typeof ToolsOzoneSetDeleteValuesError
> = z.nativeEnum(ToolsOzoneSetDeleteValuesError);

/** @internal */
export const ToolsOzoneSetDeleteValuesError$outboundSchema: z.ZodNativeEnum<
  typeof ToolsOzoneSetDeleteValuesError
> = ToolsOzoneSetDeleteValuesError$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolsOzoneSetDeleteValuesError$ {
  /** @deprecated use `ToolsOzoneSetDeleteValuesError$inboundSchema` instead. */
  export const inboundSchema = ToolsOzoneSetDeleteValuesError$inboundSchema;
  /** @deprecated use `ToolsOzoneSetDeleteValuesError$outboundSchema` instead. */
  export const outboundSchema = ToolsOzoneSetDeleteValuesError$outboundSchema;
}

/** @internal */
export const BadRequestToolsOzoneSetDeleteValuesResponseBodyError$inboundSchema:
  z.ZodType<
    BadRequestToolsOzoneSetDeleteValuesResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: ToolsOzoneSetDeleteValuesError$inboundSchema,
    message: z.string(),
  })
    .transform((v) => {
      return new BadRequestToolsOzoneSetDeleteValuesResponseBodyError(v);
    });

/** @internal */
export type BadRequestToolsOzoneSetDeleteValuesResponseBodyError$Outbound = {
  error: string;
  message: string;
};

/** @internal */
export const BadRequestToolsOzoneSetDeleteValuesResponseBodyError$outboundSchema:
  z.ZodType<
    BadRequestToolsOzoneSetDeleteValuesResponseBodyError$Outbound,
    z.ZodTypeDef,
    BadRequestToolsOzoneSetDeleteValuesResponseBodyError
  > = z.instanceof(BadRequestToolsOzoneSetDeleteValuesResponseBodyError)
    .transform(v => v.data$)
    .pipe(z.object({
      error: ToolsOzoneSetDeleteValuesError$outboundSchema,
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BadRequestToolsOzoneSetDeleteValuesResponseBodyError$ {
  /** @deprecated use `BadRequestToolsOzoneSetDeleteValuesResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    BadRequestToolsOzoneSetDeleteValuesResponseBodyError$inboundSchema;
  /** @deprecated use `BadRequestToolsOzoneSetDeleteValuesResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    BadRequestToolsOzoneSetDeleteValuesResponseBodyError$outboundSchema;
  /** @deprecated use `BadRequestToolsOzoneSetDeleteValuesResponseBodyError$Outbound` instead. */
  export type Outbound =
    BadRequestToolsOzoneSetDeleteValuesResponseBodyError$Outbound;
}
