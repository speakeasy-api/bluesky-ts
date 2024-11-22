/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type ToolsOzoneSetQuerySetsToolsOzoneSetResponseBodyData = {
  error: "AuthMissing";
  message: string;
};

/**
 * Unauthorized
 */
export class ToolsOzoneSetQuerySetsToolsOzoneSetResponseBody extends Error {
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$: ToolsOzoneSetQuerySetsToolsOzoneSetResponseBodyData;

  constructor(err: ToolsOzoneSetQuerySetsToolsOzoneSetResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "ToolsOzoneSetQuerySetsToolsOzoneSetResponseBody";
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
export type ToolsOzoneSetQuerySetsResponseBodyData = {
  error: ToolsOzoneSetQuerySetsError;
  message: string;
};

/**
 * Bad Request
 */
export class ToolsOzoneSetQuerySetsResponseBody extends Error {
  error: ToolsOzoneSetQuerySetsError;

  /** The original data that was passed to this error instance. */
  data$: ToolsOzoneSetQuerySetsResponseBodyData;

  constructor(err: ToolsOzoneSetQuerySetsResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "ToolsOzoneSetQuerySetsResponseBody";
  }
}

/** @internal */
export const ToolsOzoneSetQuerySetsToolsOzoneSetResponseBody$inboundSchema:
  z.ZodType<
    ToolsOzoneSetQuerySetsToolsOzoneSetResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.literal("AuthMissing"),
    message: z.string(),
  })
    .transform((v) => {
      return new ToolsOzoneSetQuerySetsToolsOzoneSetResponseBody(v);
    });

/** @internal */
export type ToolsOzoneSetQuerySetsToolsOzoneSetResponseBody$Outbound = {
  error: "AuthMissing";
  message: string;
};

/** @internal */
export const ToolsOzoneSetQuerySetsToolsOzoneSetResponseBody$outboundSchema:
  z.ZodType<
    ToolsOzoneSetQuerySetsToolsOzoneSetResponseBody$Outbound,
    z.ZodTypeDef,
    ToolsOzoneSetQuerySetsToolsOzoneSetResponseBody
  > = z.instanceof(ToolsOzoneSetQuerySetsToolsOzoneSetResponseBody)
    .transform(v => v.data$)
    .pipe(z.object({
      error: z.literal("AuthMissing").default("AuthMissing" as const),
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolsOzoneSetQuerySetsToolsOzoneSetResponseBody$ {
  /** @deprecated use `ToolsOzoneSetQuerySetsToolsOzoneSetResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ToolsOzoneSetQuerySetsToolsOzoneSetResponseBody$inboundSchema;
  /** @deprecated use `ToolsOzoneSetQuerySetsToolsOzoneSetResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ToolsOzoneSetQuerySetsToolsOzoneSetResponseBody$outboundSchema;
  /** @deprecated use `ToolsOzoneSetQuerySetsToolsOzoneSetResponseBody$Outbound` instead. */
  export type Outbound =
    ToolsOzoneSetQuerySetsToolsOzoneSetResponseBody$Outbound;
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
export const ToolsOzoneSetQuerySetsResponseBody$inboundSchema: z.ZodType<
  ToolsOzoneSetQuerySetsResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  error: ToolsOzoneSetQuerySetsError$inboundSchema,
  message: z.string(),
})
  .transform((v) => {
    return new ToolsOzoneSetQuerySetsResponseBody(v);
  });

/** @internal */
export type ToolsOzoneSetQuerySetsResponseBody$Outbound = {
  error: string;
  message: string;
};

/** @internal */
export const ToolsOzoneSetQuerySetsResponseBody$outboundSchema: z.ZodType<
  ToolsOzoneSetQuerySetsResponseBody$Outbound,
  z.ZodTypeDef,
  ToolsOzoneSetQuerySetsResponseBody
> = z.instanceof(ToolsOzoneSetQuerySetsResponseBody)
  .transform(v => v.data$)
  .pipe(z.object({
    error: ToolsOzoneSetQuerySetsError$outboundSchema,
    message: z.string(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolsOzoneSetQuerySetsResponseBody$ {
  /** @deprecated use `ToolsOzoneSetQuerySetsResponseBody$inboundSchema` instead. */
  export const inboundSchema = ToolsOzoneSetQuerySetsResponseBody$inboundSchema;
  /** @deprecated use `ToolsOzoneSetQuerySetsResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ToolsOzoneSetQuerySetsResponseBody$outboundSchema;
  /** @deprecated use `ToolsOzoneSetQuerySetsResponseBody$Outbound` instead. */
  export type Outbound = ToolsOzoneSetQuerySetsResponseBody$Outbound;
}
