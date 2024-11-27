/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type ToolsOzoneSetAddValuesOzoneSetResponseBodyData = {
  error: "AuthMissing";
  message: string;
};

/**
 * Unauthorized
 */
export class ToolsOzoneSetAddValuesOzoneSetResponseBody extends Error {
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$: ToolsOzoneSetAddValuesOzoneSetResponseBodyData;

  constructor(err: ToolsOzoneSetAddValuesOzoneSetResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "ToolsOzoneSetAddValuesOzoneSetResponseBody";
  }
}

export const ToolsOzoneSetAddValuesError = {
  InvalidRequest: "InvalidRequest",
  ExpiredToken: "ExpiredToken",
  InvalidToken: "InvalidToken",
} as const;
export type ToolsOzoneSetAddValuesError = ClosedEnum<
  typeof ToolsOzoneSetAddValuesError
>;

/**
 * Bad Request
 */
export type ToolsOzoneSetAddValuesResponseBodyData = {
  error: ToolsOzoneSetAddValuesError;
  message: string;
};

/**
 * Bad Request
 */
export class ToolsOzoneSetAddValuesResponseBody extends Error {
  error: ToolsOzoneSetAddValuesError;

  /** The original data that was passed to this error instance. */
  data$: ToolsOzoneSetAddValuesResponseBodyData;

  constructor(err: ToolsOzoneSetAddValuesResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "ToolsOzoneSetAddValuesResponseBody";
  }
}

/** @internal */
export const ToolsOzoneSetAddValuesOzoneSetResponseBody$inboundSchema:
  z.ZodType<ToolsOzoneSetAddValuesOzoneSetResponseBody, z.ZodTypeDef, unknown> =
    z.object({
      error: z.literal("AuthMissing"),
      message: z.string(),
    })
      .transform((v) => {
        return new ToolsOzoneSetAddValuesOzoneSetResponseBody(v);
      });

/** @internal */
export type ToolsOzoneSetAddValuesOzoneSetResponseBody$Outbound = {
  error: "AuthMissing";
  message: string;
};

/** @internal */
export const ToolsOzoneSetAddValuesOzoneSetResponseBody$outboundSchema:
  z.ZodType<
    ToolsOzoneSetAddValuesOzoneSetResponseBody$Outbound,
    z.ZodTypeDef,
    ToolsOzoneSetAddValuesOzoneSetResponseBody
  > = z.instanceof(ToolsOzoneSetAddValuesOzoneSetResponseBody)
    .transform(v => v.data$)
    .pipe(z.object({
      error: z.literal("AuthMissing").default("AuthMissing" as const),
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolsOzoneSetAddValuesOzoneSetResponseBody$ {
  /** @deprecated use `ToolsOzoneSetAddValuesOzoneSetResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ToolsOzoneSetAddValuesOzoneSetResponseBody$inboundSchema;
  /** @deprecated use `ToolsOzoneSetAddValuesOzoneSetResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ToolsOzoneSetAddValuesOzoneSetResponseBody$outboundSchema;
  /** @deprecated use `ToolsOzoneSetAddValuesOzoneSetResponseBody$Outbound` instead. */
  export type Outbound = ToolsOzoneSetAddValuesOzoneSetResponseBody$Outbound;
}

/** @internal */
export const ToolsOzoneSetAddValuesError$inboundSchema: z.ZodNativeEnum<
  typeof ToolsOzoneSetAddValuesError
> = z.nativeEnum(ToolsOzoneSetAddValuesError);

/** @internal */
export const ToolsOzoneSetAddValuesError$outboundSchema: z.ZodNativeEnum<
  typeof ToolsOzoneSetAddValuesError
> = ToolsOzoneSetAddValuesError$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolsOzoneSetAddValuesError$ {
  /** @deprecated use `ToolsOzoneSetAddValuesError$inboundSchema` instead. */
  export const inboundSchema = ToolsOzoneSetAddValuesError$inboundSchema;
  /** @deprecated use `ToolsOzoneSetAddValuesError$outboundSchema` instead. */
  export const outboundSchema = ToolsOzoneSetAddValuesError$outboundSchema;
}

/** @internal */
export const ToolsOzoneSetAddValuesResponseBody$inboundSchema: z.ZodType<
  ToolsOzoneSetAddValuesResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  error: ToolsOzoneSetAddValuesError$inboundSchema,
  message: z.string(),
})
  .transform((v) => {
    return new ToolsOzoneSetAddValuesResponseBody(v);
  });

/** @internal */
export type ToolsOzoneSetAddValuesResponseBody$Outbound = {
  error: string;
  message: string;
};

/** @internal */
export const ToolsOzoneSetAddValuesResponseBody$outboundSchema: z.ZodType<
  ToolsOzoneSetAddValuesResponseBody$Outbound,
  z.ZodTypeDef,
  ToolsOzoneSetAddValuesResponseBody
> = z.instanceof(ToolsOzoneSetAddValuesResponseBody)
  .transform(v => v.data$)
  .pipe(z.object({
    error: ToolsOzoneSetAddValuesError$outboundSchema,
    message: z.string(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolsOzoneSetAddValuesResponseBody$ {
  /** @deprecated use `ToolsOzoneSetAddValuesResponseBody$inboundSchema` instead. */
  export const inboundSchema = ToolsOzoneSetAddValuesResponseBody$inboundSchema;
  /** @deprecated use `ToolsOzoneSetAddValuesResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ToolsOzoneSetAddValuesResponseBody$outboundSchema;
  /** @deprecated use `ToolsOzoneSetAddValuesResponseBody$Outbound` instead. */
  export type Outbound = ToolsOzoneSetAddValuesResponseBody$Outbound;
}
