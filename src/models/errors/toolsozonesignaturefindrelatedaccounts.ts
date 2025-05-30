/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type UnauthorizedToolsOzoneSignatureFindRelatedAccountsResponseBodyErrorData =
  {
    error: "AuthMissing";
    message: string;
  };

/**
 * Unauthorized
 */
export class UnauthorizedToolsOzoneSignatureFindRelatedAccountsResponseBodyError
  extends Error
{
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$:
    UnauthorizedToolsOzoneSignatureFindRelatedAccountsResponseBodyErrorData;

  constructor(
    err:
      UnauthorizedToolsOzoneSignatureFindRelatedAccountsResponseBodyErrorData,
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name =
      "UnauthorizedToolsOzoneSignatureFindRelatedAccountsResponseBodyError";
  }
}

export const ToolsOzoneSignatureFindRelatedAccountsError = {
  InvalidRequest: "InvalidRequest",
  ExpiredToken: "ExpiredToken",
  InvalidToken: "InvalidToken",
} as const;
export type ToolsOzoneSignatureFindRelatedAccountsError = ClosedEnum<
  typeof ToolsOzoneSignatureFindRelatedAccountsError
>;

/**
 * Bad Request
 */
export type BadRequestToolsOzoneSignatureFindRelatedAccountsResponseBodyErrorData =
  {
    error: ToolsOzoneSignatureFindRelatedAccountsError;
    message: string;
  };

/**
 * Bad Request
 */
export class BadRequestToolsOzoneSignatureFindRelatedAccountsResponseBodyError
  extends Error
{
  error: ToolsOzoneSignatureFindRelatedAccountsError;

  /** The original data that was passed to this error instance. */
  data$: BadRequestToolsOzoneSignatureFindRelatedAccountsResponseBodyErrorData;

  constructor(
    err: BadRequestToolsOzoneSignatureFindRelatedAccountsResponseBodyErrorData,
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name =
      "BadRequestToolsOzoneSignatureFindRelatedAccountsResponseBodyError";
  }
}

/** @internal */
export const UnauthorizedToolsOzoneSignatureFindRelatedAccountsResponseBodyError$inboundSchema:
  z.ZodType<
    UnauthorizedToolsOzoneSignatureFindRelatedAccountsResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.literal("AuthMissing"),
    message: z.string(),
  })
    .transform((v) => {
      return new UnauthorizedToolsOzoneSignatureFindRelatedAccountsResponseBodyError(
        v,
      );
    });

/** @internal */
export type UnauthorizedToolsOzoneSignatureFindRelatedAccountsResponseBodyError$Outbound =
  {
    error: "AuthMissing";
    message: string;
  };

/** @internal */
export const UnauthorizedToolsOzoneSignatureFindRelatedAccountsResponseBodyError$outboundSchema:
  z.ZodType<
    UnauthorizedToolsOzoneSignatureFindRelatedAccountsResponseBodyError$Outbound,
    z.ZodTypeDef,
    UnauthorizedToolsOzoneSignatureFindRelatedAccountsResponseBodyError
  > = z.instanceof(
    UnauthorizedToolsOzoneSignatureFindRelatedAccountsResponseBodyError,
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
export namespace UnauthorizedToolsOzoneSignatureFindRelatedAccountsResponseBodyError$ {
  /** @deprecated use `UnauthorizedToolsOzoneSignatureFindRelatedAccountsResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    UnauthorizedToolsOzoneSignatureFindRelatedAccountsResponseBodyError$inboundSchema;
  /** @deprecated use `UnauthorizedToolsOzoneSignatureFindRelatedAccountsResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    UnauthorizedToolsOzoneSignatureFindRelatedAccountsResponseBodyError$outboundSchema;
  /** @deprecated use `UnauthorizedToolsOzoneSignatureFindRelatedAccountsResponseBodyError$Outbound` instead. */
  export type Outbound =
    UnauthorizedToolsOzoneSignatureFindRelatedAccountsResponseBodyError$Outbound;
}

/** @internal */
export const ToolsOzoneSignatureFindRelatedAccountsError$inboundSchema:
  z.ZodNativeEnum<typeof ToolsOzoneSignatureFindRelatedAccountsError> = z
    .nativeEnum(ToolsOzoneSignatureFindRelatedAccountsError);

/** @internal */
export const ToolsOzoneSignatureFindRelatedAccountsError$outboundSchema:
  z.ZodNativeEnum<typeof ToolsOzoneSignatureFindRelatedAccountsError> =
    ToolsOzoneSignatureFindRelatedAccountsError$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolsOzoneSignatureFindRelatedAccountsError$ {
  /** @deprecated use `ToolsOzoneSignatureFindRelatedAccountsError$inboundSchema` instead. */
  export const inboundSchema =
    ToolsOzoneSignatureFindRelatedAccountsError$inboundSchema;
  /** @deprecated use `ToolsOzoneSignatureFindRelatedAccountsError$outboundSchema` instead. */
  export const outboundSchema =
    ToolsOzoneSignatureFindRelatedAccountsError$outboundSchema;
}

/** @internal */
export const BadRequestToolsOzoneSignatureFindRelatedAccountsResponseBodyError$inboundSchema:
  z.ZodType<
    BadRequestToolsOzoneSignatureFindRelatedAccountsResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: ToolsOzoneSignatureFindRelatedAccountsError$inboundSchema,
    message: z.string(),
  })
    .transform((v) => {
      return new BadRequestToolsOzoneSignatureFindRelatedAccountsResponseBodyError(
        v,
      );
    });

/** @internal */
export type BadRequestToolsOzoneSignatureFindRelatedAccountsResponseBodyError$Outbound =
  {
    error: string;
    message: string;
  };

/** @internal */
export const BadRequestToolsOzoneSignatureFindRelatedAccountsResponseBodyError$outboundSchema:
  z.ZodType<
    BadRequestToolsOzoneSignatureFindRelatedAccountsResponseBodyError$Outbound,
    z.ZodTypeDef,
    BadRequestToolsOzoneSignatureFindRelatedAccountsResponseBodyError
  > = z.instanceof(
    BadRequestToolsOzoneSignatureFindRelatedAccountsResponseBodyError,
  )
    .transform(v => v.data$)
    .pipe(z.object({
      error: ToolsOzoneSignatureFindRelatedAccountsError$outboundSchema,
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BadRequestToolsOzoneSignatureFindRelatedAccountsResponseBodyError$ {
  /** @deprecated use `BadRequestToolsOzoneSignatureFindRelatedAccountsResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    BadRequestToolsOzoneSignatureFindRelatedAccountsResponseBodyError$inboundSchema;
  /** @deprecated use `BadRequestToolsOzoneSignatureFindRelatedAccountsResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    BadRequestToolsOzoneSignatureFindRelatedAccountsResponseBodyError$outboundSchema;
  /** @deprecated use `BadRequestToolsOzoneSignatureFindRelatedAccountsResponseBodyError$Outbound` instead. */
  export type Outbound =
    BadRequestToolsOzoneSignatureFindRelatedAccountsResponseBodyError$Outbound;
}
