/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type ToolsOzoneCommunicationCreateTemplateCommunicationsResponseBodyData =
  {
    error: "AuthMissing";
    message: string;
  };

/**
 * Unauthorized
 */
export class ToolsOzoneCommunicationCreateTemplateCommunicationsResponseBody
  extends Error
{
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$: ToolsOzoneCommunicationCreateTemplateCommunicationsResponseBodyData;

  constructor(
    err: ToolsOzoneCommunicationCreateTemplateCommunicationsResponseBodyData,
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name =
      "ToolsOzoneCommunicationCreateTemplateCommunicationsResponseBody";
  }
}

export const ToolsOzoneCommunicationCreateTemplateError = {
  InvalidRequest: "InvalidRequest",
  ExpiredToken: "ExpiredToken",
  InvalidToken: "InvalidToken",
  DuplicateTemplateName: "DuplicateTemplateName",
} as const;
export type ToolsOzoneCommunicationCreateTemplateError = ClosedEnum<
  typeof ToolsOzoneCommunicationCreateTemplateError
>;

/**
 * Bad Request
 */
export type ToolsOzoneCommunicationCreateTemplateResponseBodyData = {
  error: ToolsOzoneCommunicationCreateTemplateError;
  message: string;
};

/**
 * Bad Request
 */
export class ToolsOzoneCommunicationCreateTemplateResponseBody extends Error {
  error: ToolsOzoneCommunicationCreateTemplateError;

  /** The original data that was passed to this error instance. */
  data$: ToolsOzoneCommunicationCreateTemplateResponseBodyData;

  constructor(err: ToolsOzoneCommunicationCreateTemplateResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "ToolsOzoneCommunicationCreateTemplateResponseBody";
  }
}

/** @internal */
export const ToolsOzoneCommunicationCreateTemplateCommunicationsResponseBody$inboundSchema:
  z.ZodType<
    ToolsOzoneCommunicationCreateTemplateCommunicationsResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.literal("AuthMissing"),
    message: z.string(),
  })
    .transform((v) => {
      return new ToolsOzoneCommunicationCreateTemplateCommunicationsResponseBody(
        v,
      );
    });

/** @internal */
export type ToolsOzoneCommunicationCreateTemplateCommunicationsResponseBody$Outbound =
  {
    error: "AuthMissing";
    message: string;
  };

/** @internal */
export const ToolsOzoneCommunicationCreateTemplateCommunicationsResponseBody$outboundSchema:
  z.ZodType<
    ToolsOzoneCommunicationCreateTemplateCommunicationsResponseBody$Outbound,
    z.ZodTypeDef,
    ToolsOzoneCommunicationCreateTemplateCommunicationsResponseBody
  > = z.instanceof(
    ToolsOzoneCommunicationCreateTemplateCommunicationsResponseBody,
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
export namespace ToolsOzoneCommunicationCreateTemplateCommunicationsResponseBody$ {
  /** @deprecated use `ToolsOzoneCommunicationCreateTemplateCommunicationsResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ToolsOzoneCommunicationCreateTemplateCommunicationsResponseBody$inboundSchema;
  /** @deprecated use `ToolsOzoneCommunicationCreateTemplateCommunicationsResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ToolsOzoneCommunicationCreateTemplateCommunicationsResponseBody$outboundSchema;
  /** @deprecated use `ToolsOzoneCommunicationCreateTemplateCommunicationsResponseBody$Outbound` instead. */
  export type Outbound =
    ToolsOzoneCommunicationCreateTemplateCommunicationsResponseBody$Outbound;
}

/** @internal */
export const ToolsOzoneCommunicationCreateTemplateError$inboundSchema:
  z.ZodNativeEnum<typeof ToolsOzoneCommunicationCreateTemplateError> = z
    .nativeEnum(ToolsOzoneCommunicationCreateTemplateError);

/** @internal */
export const ToolsOzoneCommunicationCreateTemplateError$outboundSchema:
  z.ZodNativeEnum<typeof ToolsOzoneCommunicationCreateTemplateError> =
    ToolsOzoneCommunicationCreateTemplateError$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolsOzoneCommunicationCreateTemplateError$ {
  /** @deprecated use `ToolsOzoneCommunicationCreateTemplateError$inboundSchema` instead. */
  export const inboundSchema =
    ToolsOzoneCommunicationCreateTemplateError$inboundSchema;
  /** @deprecated use `ToolsOzoneCommunicationCreateTemplateError$outboundSchema` instead. */
  export const outboundSchema =
    ToolsOzoneCommunicationCreateTemplateError$outboundSchema;
}

/** @internal */
export const ToolsOzoneCommunicationCreateTemplateResponseBody$inboundSchema:
  z.ZodType<
    ToolsOzoneCommunicationCreateTemplateResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: ToolsOzoneCommunicationCreateTemplateError$inboundSchema,
    message: z.string(),
  })
    .transform((v) => {
      return new ToolsOzoneCommunicationCreateTemplateResponseBody(v);
    });

/** @internal */
export type ToolsOzoneCommunicationCreateTemplateResponseBody$Outbound = {
  error: string;
  message: string;
};

/** @internal */
export const ToolsOzoneCommunicationCreateTemplateResponseBody$outboundSchema:
  z.ZodType<
    ToolsOzoneCommunicationCreateTemplateResponseBody$Outbound,
    z.ZodTypeDef,
    ToolsOzoneCommunicationCreateTemplateResponseBody
  > = z.instanceof(ToolsOzoneCommunicationCreateTemplateResponseBody)
    .transform(v => v.data$)
    .pipe(z.object({
      error: ToolsOzoneCommunicationCreateTemplateError$outboundSchema,
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolsOzoneCommunicationCreateTemplateResponseBody$ {
  /** @deprecated use `ToolsOzoneCommunicationCreateTemplateResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ToolsOzoneCommunicationCreateTemplateResponseBody$inboundSchema;
  /** @deprecated use `ToolsOzoneCommunicationCreateTemplateResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ToolsOzoneCommunicationCreateTemplateResponseBody$outboundSchema;
  /** @deprecated use `ToolsOzoneCommunicationCreateTemplateResponseBody$Outbound` instead. */
  export type Outbound =
    ToolsOzoneCommunicationCreateTemplateResponseBody$Outbound;
}
