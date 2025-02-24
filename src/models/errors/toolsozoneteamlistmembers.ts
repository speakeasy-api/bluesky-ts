/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type UnauthorizedToolsOzoneTeamListMembersResponseBodyErrorData = {
  error: "AuthMissing";
  message: string;
};

/**
 * Unauthorized
 */
export class UnauthorizedToolsOzoneTeamListMembersResponseBodyError
  extends Error
{
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$: UnauthorizedToolsOzoneTeamListMembersResponseBodyErrorData;

  constructor(err: UnauthorizedToolsOzoneTeamListMembersResponseBodyErrorData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "UnauthorizedToolsOzoneTeamListMembersResponseBodyError";
  }
}

export const ToolsOzoneTeamListMembersError = {
  InvalidRequest: "InvalidRequest",
  ExpiredToken: "ExpiredToken",
  InvalidToken: "InvalidToken",
} as const;
export type ToolsOzoneTeamListMembersError = ClosedEnum<
  typeof ToolsOzoneTeamListMembersError
>;

/**
 * Bad Request
 */
export type BadRequestToolsOzoneTeamListMembersResponseBodyErrorData = {
  error: ToolsOzoneTeamListMembersError;
  message: string;
};

/**
 * Bad Request
 */
export class BadRequestToolsOzoneTeamListMembersResponseBodyError
  extends Error
{
  error: ToolsOzoneTeamListMembersError;

  /** The original data that was passed to this error instance. */
  data$: BadRequestToolsOzoneTeamListMembersResponseBodyErrorData;

  constructor(err: BadRequestToolsOzoneTeamListMembersResponseBodyErrorData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "BadRequestToolsOzoneTeamListMembersResponseBodyError";
  }
}

/** @internal */
export const UnauthorizedToolsOzoneTeamListMembersResponseBodyError$inboundSchema:
  z.ZodType<
    UnauthorizedToolsOzoneTeamListMembersResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.literal("AuthMissing"),
    message: z.string(),
  })
    .transform((v) => {
      return new UnauthorizedToolsOzoneTeamListMembersResponseBodyError(v);
    });

/** @internal */
export type UnauthorizedToolsOzoneTeamListMembersResponseBodyError$Outbound = {
  error: "AuthMissing";
  message: string;
};

/** @internal */
export const UnauthorizedToolsOzoneTeamListMembersResponseBodyError$outboundSchema:
  z.ZodType<
    UnauthorizedToolsOzoneTeamListMembersResponseBodyError$Outbound,
    z.ZodTypeDef,
    UnauthorizedToolsOzoneTeamListMembersResponseBodyError
  > = z.instanceof(UnauthorizedToolsOzoneTeamListMembersResponseBodyError)
    .transform(v => v.data$)
    .pipe(z.object({
      error: z.literal("AuthMissing").default("AuthMissing" as const),
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnauthorizedToolsOzoneTeamListMembersResponseBodyError$ {
  /** @deprecated use `UnauthorizedToolsOzoneTeamListMembersResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    UnauthorizedToolsOzoneTeamListMembersResponseBodyError$inboundSchema;
  /** @deprecated use `UnauthorizedToolsOzoneTeamListMembersResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    UnauthorizedToolsOzoneTeamListMembersResponseBodyError$outboundSchema;
  /** @deprecated use `UnauthorizedToolsOzoneTeamListMembersResponseBodyError$Outbound` instead. */
  export type Outbound =
    UnauthorizedToolsOzoneTeamListMembersResponseBodyError$Outbound;
}

/** @internal */
export const ToolsOzoneTeamListMembersError$inboundSchema: z.ZodNativeEnum<
  typeof ToolsOzoneTeamListMembersError
> = z.nativeEnum(ToolsOzoneTeamListMembersError);

/** @internal */
export const ToolsOzoneTeamListMembersError$outboundSchema: z.ZodNativeEnum<
  typeof ToolsOzoneTeamListMembersError
> = ToolsOzoneTeamListMembersError$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolsOzoneTeamListMembersError$ {
  /** @deprecated use `ToolsOzoneTeamListMembersError$inboundSchema` instead. */
  export const inboundSchema = ToolsOzoneTeamListMembersError$inboundSchema;
  /** @deprecated use `ToolsOzoneTeamListMembersError$outboundSchema` instead. */
  export const outboundSchema = ToolsOzoneTeamListMembersError$outboundSchema;
}

/** @internal */
export const BadRequestToolsOzoneTeamListMembersResponseBodyError$inboundSchema:
  z.ZodType<
    BadRequestToolsOzoneTeamListMembersResponseBodyError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: ToolsOzoneTeamListMembersError$inboundSchema,
    message: z.string(),
  })
    .transform((v) => {
      return new BadRequestToolsOzoneTeamListMembersResponseBodyError(v);
    });

/** @internal */
export type BadRequestToolsOzoneTeamListMembersResponseBodyError$Outbound = {
  error: string;
  message: string;
};

/** @internal */
export const BadRequestToolsOzoneTeamListMembersResponseBodyError$outboundSchema:
  z.ZodType<
    BadRequestToolsOzoneTeamListMembersResponseBodyError$Outbound,
    z.ZodTypeDef,
    BadRequestToolsOzoneTeamListMembersResponseBodyError
  > = z.instanceof(BadRequestToolsOzoneTeamListMembersResponseBodyError)
    .transform(v => v.data$)
    .pipe(z.object({
      error: ToolsOzoneTeamListMembersError$outboundSchema,
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BadRequestToolsOzoneTeamListMembersResponseBodyError$ {
  /** @deprecated use `BadRequestToolsOzoneTeamListMembersResponseBodyError$inboundSchema` instead. */
  export const inboundSchema =
    BadRequestToolsOzoneTeamListMembersResponseBodyError$inboundSchema;
  /** @deprecated use `BadRequestToolsOzoneTeamListMembersResponseBodyError$outboundSchema` instead. */
  export const outboundSchema =
    BadRequestToolsOzoneTeamListMembersResponseBodyError$outboundSchema;
  /** @deprecated use `BadRequestToolsOzoneTeamListMembersResponseBodyError$Outbound` instead. */
  export type Outbound =
    BadRequestToolsOzoneTeamListMembersResponseBodyError$Outbound;
}
