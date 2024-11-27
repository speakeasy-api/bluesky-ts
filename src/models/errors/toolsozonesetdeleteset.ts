/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type ToolsOzoneSetDeleteSetOzoneSetResponseBodyData = {
  error: "AuthMissing";
  message: string;
};

/**
 * Unauthorized
 */
export class ToolsOzoneSetDeleteSetOzoneSetResponseBody extends Error {
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$: ToolsOzoneSetDeleteSetOzoneSetResponseBodyData;

  constructor(err: ToolsOzoneSetDeleteSetOzoneSetResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "ToolsOzoneSetDeleteSetOzoneSetResponseBody";
  }
}

export const ToolsOzoneSetDeleteSetError = {
  InvalidRequest: "InvalidRequest",
  ExpiredToken: "ExpiredToken",
  InvalidToken: "InvalidToken",
  SetNotFound: "SetNotFound",
} as const;
export type ToolsOzoneSetDeleteSetError = ClosedEnum<
  typeof ToolsOzoneSetDeleteSetError
>;

/**
 * Bad Request
 */
export type ToolsOzoneSetDeleteSetResponseBodyData = {
  error: ToolsOzoneSetDeleteSetError;
  message: string;
};

/**
 * Bad Request
 */
export class ToolsOzoneSetDeleteSetResponseBody extends Error {
  error: ToolsOzoneSetDeleteSetError;

  /** The original data that was passed to this error instance. */
  data$: ToolsOzoneSetDeleteSetResponseBodyData;

  constructor(err: ToolsOzoneSetDeleteSetResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "ToolsOzoneSetDeleteSetResponseBody";
  }
}

/** @internal */
export const ToolsOzoneSetDeleteSetOzoneSetResponseBody$inboundSchema:
  z.ZodType<ToolsOzoneSetDeleteSetOzoneSetResponseBody, z.ZodTypeDef, unknown> =
    z.object({
      error: z.literal("AuthMissing"),
      message: z.string(),
    })
      .transform((v) => {
        return new ToolsOzoneSetDeleteSetOzoneSetResponseBody(v);
      });

/** @internal */
export type ToolsOzoneSetDeleteSetOzoneSetResponseBody$Outbound = {
  error: "AuthMissing";
  message: string;
};

/** @internal */
export const ToolsOzoneSetDeleteSetOzoneSetResponseBody$outboundSchema:
  z.ZodType<
    ToolsOzoneSetDeleteSetOzoneSetResponseBody$Outbound,
    z.ZodTypeDef,
    ToolsOzoneSetDeleteSetOzoneSetResponseBody
  > = z.instanceof(ToolsOzoneSetDeleteSetOzoneSetResponseBody)
    .transform(v => v.data$)
    .pipe(z.object({
      error: z.literal("AuthMissing").default("AuthMissing" as const),
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolsOzoneSetDeleteSetOzoneSetResponseBody$ {
  /** @deprecated use `ToolsOzoneSetDeleteSetOzoneSetResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ToolsOzoneSetDeleteSetOzoneSetResponseBody$inboundSchema;
  /** @deprecated use `ToolsOzoneSetDeleteSetOzoneSetResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ToolsOzoneSetDeleteSetOzoneSetResponseBody$outboundSchema;
  /** @deprecated use `ToolsOzoneSetDeleteSetOzoneSetResponseBody$Outbound` instead. */
  export type Outbound = ToolsOzoneSetDeleteSetOzoneSetResponseBody$Outbound;
}

/** @internal */
export const ToolsOzoneSetDeleteSetError$inboundSchema: z.ZodNativeEnum<
  typeof ToolsOzoneSetDeleteSetError
> = z.nativeEnum(ToolsOzoneSetDeleteSetError);

/** @internal */
export const ToolsOzoneSetDeleteSetError$outboundSchema: z.ZodNativeEnum<
  typeof ToolsOzoneSetDeleteSetError
> = ToolsOzoneSetDeleteSetError$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolsOzoneSetDeleteSetError$ {
  /** @deprecated use `ToolsOzoneSetDeleteSetError$inboundSchema` instead. */
  export const inboundSchema = ToolsOzoneSetDeleteSetError$inboundSchema;
  /** @deprecated use `ToolsOzoneSetDeleteSetError$outboundSchema` instead. */
  export const outboundSchema = ToolsOzoneSetDeleteSetError$outboundSchema;
}

/** @internal */
export const ToolsOzoneSetDeleteSetResponseBody$inboundSchema: z.ZodType<
  ToolsOzoneSetDeleteSetResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  error: ToolsOzoneSetDeleteSetError$inboundSchema,
  message: z.string(),
})
  .transform((v) => {
    return new ToolsOzoneSetDeleteSetResponseBody(v);
  });

/** @internal */
export type ToolsOzoneSetDeleteSetResponseBody$Outbound = {
  error: string;
  message: string;
};

/** @internal */
export const ToolsOzoneSetDeleteSetResponseBody$outboundSchema: z.ZodType<
  ToolsOzoneSetDeleteSetResponseBody$Outbound,
  z.ZodTypeDef,
  ToolsOzoneSetDeleteSetResponseBody
> = z.instanceof(ToolsOzoneSetDeleteSetResponseBody)
  .transform(v => v.data$)
  .pipe(z.object({
    error: ToolsOzoneSetDeleteSetError$outboundSchema,
    message: z.string(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolsOzoneSetDeleteSetResponseBody$ {
  /** @deprecated use `ToolsOzoneSetDeleteSetResponseBody$inboundSchema` instead. */
  export const inboundSchema = ToolsOzoneSetDeleteSetResponseBody$inboundSchema;
  /** @deprecated use `ToolsOzoneSetDeleteSetResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ToolsOzoneSetDeleteSetResponseBody$outboundSchema;
  /** @deprecated use `ToolsOzoneSetDeleteSetResponseBody$Outbound` instead. */
  export type Outbound = ToolsOzoneSetDeleteSetResponseBody$Outbound;
}
