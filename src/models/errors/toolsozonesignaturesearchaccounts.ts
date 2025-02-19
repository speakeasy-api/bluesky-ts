/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type UnauthorizedToolsOzoneSignatureSearchAccountsResponseBodyErrorData =
  {
    error: "AuthMissing";
    message: string;
  };

/**
 * Unauthorized
 */
export class UnauthorizedToolsOzoneSignatureSearchAccountsResponseBodyError
  extends Error
{
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$: UnauthorizedToolsOzoneSignatureSearchAccountsResponseBodyErrorData;

  constructor(
    err: UnauthorizedToolsOzoneSignatureSearchAccountsResponseBodyErrorData,
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name =
      "UnauthorizedToolsOzoneSignatureSearchAccountsResponseBodyError";
  }
}

export const ToolsOzoneSignatureSearchAccountsError = {
  InvalidRequest: "InvalidRequest",
  ExpiredToken: "ExpiredToken",
  InvalidToken: "InvalidToken",
} as const;
export type ToolsOzoneSignatureSearchAccountsError = ClosedEnum<
  typeof ToolsOzoneSignatureSearchAccountsError
>;

/**
 * Bad Request
 */
export type BadRequestToolsOzoneSignatureSearchAccountsResponseBodyErrorData = {
  error: ToolsOzoneSignatureSearchAccountsError;
  message: string;
};

/**
 * Bad Request
 */
export class BadRequestToolsOzoneSignatureSearchAccountsResponseBodyError
  extends Error
{
  error: ToolsOzoneSignatureSearchAccountsError;

  /** The original data that was passed to this error instance. */
  data$: BadRequestToolsOzoneSignatureSearchAccountsResponseBodyErrorData;

  constructor(
    err: BadRequestToolsOzoneSignatureSearchAccountsResponseBodyErrorData,
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "BadRequestToolsOzoneSignatureSearchAccountsResponseBodyError";
  }
}

/** @internal */
export const UnauthorizedToolsOzoneSignatureSearchAccountsResponseBodyError$inboundSchema:
  z.ZodType<
    UnauthorizedToolsOzoneSignatureSearchAccountsResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.literal("AuthMissing"),
    message: z.string(),
  })
    .transform((v) => {
      return new UnauthorizedToolsOzoneSignatureSearchAccountsResponseBodyError(
        v,
      );
    });

/** @internal */
export type UnauthorizedToolsOzoneSignatureSearchAccountsResponseBodyError$Outbound =
  {
    error: "AuthMissing";
    message: string;
  };

/** @internal */
export const UnauthorizedToolsOzoneSignatureSearchAccountsResponseBodyError$outboundSchema:
  z.ZodType<
    UnauthorizedToolsOzoneSignatureSearchAccountsResponseBodyError$Outbound,
    z.ZodTypeDef,
    UnauthorizedToolsOzoneSignatureSearchAccountsResponseBodyError
  > = z.instanceof(
    UnauthorizedToolsOzoneSignatureSearchAccountsResponseBodyError,
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
export namespace UnauthorizedToolsOzoneSignatureSearchAccountsResponseBodyError$ {
  /** @deprecated use `UnauthorizedToolsOzoneSignatureSearchAccountsResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    UnauthorizedToolsOzoneSignatureSearchAccountsResponseBodyError$inboundSchema;
  /** @deprecated use `UnauthorizedToolsOzoneSignatureSearchAccountsResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    UnauthorizedToolsOzoneSignatureSearchAccountsResponseBodyError$outboundSchema;
  /** @deprecated use `UnauthorizedToolsOzoneSignatureSearchAccountsResponseBodyError$Outbound` instead. */
  export type Outbound =
    UnauthorizedToolsOzoneSignatureSearchAccountsResponseBodyError$Outbound;
}

/** @internal */
export const ToolsOzoneSignatureSearchAccountsError$inboundSchema:
  z.ZodNativeEnum<typeof ToolsOzoneSignatureSearchAccountsError> = z.nativeEnum(
    ToolsOzoneSignatureSearchAccountsError,
  );

/** @internal */
export const ToolsOzoneSignatureSearchAccountsError$outboundSchema:
  z.ZodNativeEnum<typeof ToolsOzoneSignatureSearchAccountsError> =
    ToolsOzoneSignatureSearchAccountsError$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolsOzoneSignatureSearchAccountsError$ {
  /** @deprecated use `ToolsOzoneSignatureSearchAccountsError$inboundSchema` instead. */
  export const inboundSchema =
    ToolsOzoneSignatureSearchAccountsError$inboundSchema;
  /** @deprecated use `ToolsOzoneSignatureSearchAccountsError$outboundSchema` instead. */
  export const outboundSchema =
    ToolsOzoneSignatureSearchAccountsError$outboundSchema;
}

/** @internal */
export const BadRequestToolsOzoneSignatureSearchAccountsResponseBodyError$inboundSchema:
  z.ZodType<
    BadRequestToolsOzoneSignatureSearchAccountsResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: ToolsOzoneSignatureSearchAccountsError$inboundSchema,
    message: z.string(),
  })
    .transform((v) => {
      return new BadRequestToolsOzoneSignatureSearchAccountsResponseBodyError(
        v,
      );
    });

/** @internal */
export type BadRequestToolsOzoneSignatureSearchAccountsResponseBodyError$Outbound =
  {
    error: string;
    message: string;
  };

/** @internal */
export const BadRequestToolsOzoneSignatureSearchAccountsResponseBodyError$outboundSchema:
  z.ZodType<
    BadRequestToolsOzoneSignatureSearchAccountsResponseBodyError$Outbound,
    z.ZodTypeDef,
    BadRequestToolsOzoneSignatureSearchAccountsResponseBodyError
  > = z.instanceof(BadRequestToolsOzoneSignatureSearchAccountsResponseBodyError)
    .transform(v => v.data$)
    .pipe(z.object({
      error: ToolsOzoneSignatureSearchAccountsError$outboundSchema,
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BadRequestToolsOzoneSignatureSearchAccountsResponseBodyError$ {
  /** @deprecated use `BadRequestToolsOzoneSignatureSearchAccountsResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    BadRequestToolsOzoneSignatureSearchAccountsResponseBodyError$inboundSchema;
  /** @deprecated use `BadRequestToolsOzoneSignatureSearchAccountsResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    BadRequestToolsOzoneSignatureSearchAccountsResponseBodyError$outboundSchema;
  /** @deprecated use `BadRequestToolsOzoneSignatureSearchAccountsResponseBodyError$Outbound` instead. */
  export type Outbound =
    BadRequestToolsOzoneSignatureSearchAccountsResponseBodyError$Outbound;
}
