/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type ToolsOzoneSetUpsertSetToolsOzoneSetResponseBodyData = {
  error: "AuthMissing";
  message: string;
};

/**
 * Unauthorized
 */
export class ToolsOzoneSetUpsertSetToolsOzoneSetResponseBody extends Error {
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$: ToolsOzoneSetUpsertSetToolsOzoneSetResponseBodyData;

  constructor(err: ToolsOzoneSetUpsertSetToolsOzoneSetResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "ToolsOzoneSetUpsertSetToolsOzoneSetResponseBody";
  }
}

export const ToolsOzoneSetUpsertSetError = {
  InvalidRequest: "InvalidRequest",
  ExpiredToken: "ExpiredToken",
  InvalidToken: "InvalidToken",
} as const;
export type ToolsOzoneSetUpsertSetError = ClosedEnum<
  typeof ToolsOzoneSetUpsertSetError
>;

/**
 * Bad Request
 */
export type ToolsOzoneSetUpsertSetResponseBodyData = {
  error: ToolsOzoneSetUpsertSetError;
  message: string;
};

/**
 * Bad Request
 */
export class ToolsOzoneSetUpsertSetResponseBody extends Error {
  error: ToolsOzoneSetUpsertSetError;

  /** The original data that was passed to this error instance. */
  data$: ToolsOzoneSetUpsertSetResponseBodyData;

  constructor(err: ToolsOzoneSetUpsertSetResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "ToolsOzoneSetUpsertSetResponseBody";
  }
}

/** @internal */
export const ToolsOzoneSetUpsertSetToolsOzoneSetResponseBody$inboundSchema:
  z.ZodType<
    ToolsOzoneSetUpsertSetToolsOzoneSetResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.literal("AuthMissing"),
    message: z.string(),
  })
    .transform((v) => {
      return new ToolsOzoneSetUpsertSetToolsOzoneSetResponseBody(v);
    });

/** @internal */
export type ToolsOzoneSetUpsertSetToolsOzoneSetResponseBody$Outbound = {
  error: "AuthMissing";
  message: string;
};

/** @internal */
export const ToolsOzoneSetUpsertSetToolsOzoneSetResponseBody$outboundSchema:
  z.ZodType<
    ToolsOzoneSetUpsertSetToolsOzoneSetResponseBody$Outbound,
    z.ZodTypeDef,
    ToolsOzoneSetUpsertSetToolsOzoneSetResponseBody
  > = z.instanceof(ToolsOzoneSetUpsertSetToolsOzoneSetResponseBody)
    .transform(v => v.data$)
    .pipe(z.object({
      error: z.literal("AuthMissing").default("AuthMissing" as const),
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolsOzoneSetUpsertSetToolsOzoneSetResponseBody$ {
  /** @deprecated use `ToolsOzoneSetUpsertSetToolsOzoneSetResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ToolsOzoneSetUpsertSetToolsOzoneSetResponseBody$inboundSchema;
  /** @deprecated use `ToolsOzoneSetUpsertSetToolsOzoneSetResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ToolsOzoneSetUpsertSetToolsOzoneSetResponseBody$outboundSchema;
  /** @deprecated use `ToolsOzoneSetUpsertSetToolsOzoneSetResponseBody$Outbound` instead. */
  export type Outbound =
    ToolsOzoneSetUpsertSetToolsOzoneSetResponseBody$Outbound;
}

/** @internal */
export const ToolsOzoneSetUpsertSetError$inboundSchema: z.ZodNativeEnum<
  typeof ToolsOzoneSetUpsertSetError
> = z.nativeEnum(ToolsOzoneSetUpsertSetError);

/** @internal */
export const ToolsOzoneSetUpsertSetError$outboundSchema: z.ZodNativeEnum<
  typeof ToolsOzoneSetUpsertSetError
> = ToolsOzoneSetUpsertSetError$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolsOzoneSetUpsertSetError$ {
  /** @deprecated use `ToolsOzoneSetUpsertSetError$inboundSchema` instead. */
  export const inboundSchema = ToolsOzoneSetUpsertSetError$inboundSchema;
  /** @deprecated use `ToolsOzoneSetUpsertSetError$outboundSchema` instead. */
  export const outboundSchema = ToolsOzoneSetUpsertSetError$outboundSchema;
}

/** @internal */
export const ToolsOzoneSetUpsertSetResponseBody$inboundSchema: z.ZodType<
  ToolsOzoneSetUpsertSetResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  error: ToolsOzoneSetUpsertSetError$inboundSchema,
  message: z.string(),
})
  .transform((v) => {
    return new ToolsOzoneSetUpsertSetResponseBody(v);
  });

/** @internal */
export type ToolsOzoneSetUpsertSetResponseBody$Outbound = {
  error: string;
  message: string;
};

/** @internal */
export const ToolsOzoneSetUpsertSetResponseBody$outboundSchema: z.ZodType<
  ToolsOzoneSetUpsertSetResponseBody$Outbound,
  z.ZodTypeDef,
  ToolsOzoneSetUpsertSetResponseBody
> = z.instanceof(ToolsOzoneSetUpsertSetResponseBody)
  .transform(v => v.data$)
  .pipe(z.object({
    error: ToolsOzoneSetUpsertSetError$outboundSchema,
    message: z.string(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolsOzoneSetUpsertSetResponseBody$ {
  /** @deprecated use `ToolsOzoneSetUpsertSetResponseBody$inboundSchema` instead. */
  export const inboundSchema = ToolsOzoneSetUpsertSetResponseBody$inboundSchema;
  /** @deprecated use `ToolsOzoneSetUpsertSetResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ToolsOzoneSetUpsertSetResponseBody$outboundSchema;
  /** @deprecated use `ToolsOzoneSetUpsertSetResponseBody$Outbound` instead. */
  export type Outbound = ToolsOzoneSetUpsertSetResponseBody$Outbound;
}
