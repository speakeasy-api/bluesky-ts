/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Unauthorized
 */
export type ToolsOzoneTeamDeleteMemberTeamsResponseBodyData = {
  error: "AuthMissing";
  message: string;
};

/**
 * Unauthorized
 */
export class ToolsOzoneTeamDeleteMemberTeamsResponseBody extends Error {
  error: "AuthMissing";

  /** The original data that was passed to this error instance. */
  data$: ToolsOzoneTeamDeleteMemberTeamsResponseBodyData;

  constructor(err: ToolsOzoneTeamDeleteMemberTeamsResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "ToolsOzoneTeamDeleteMemberTeamsResponseBody";
  }
}

export const ToolsOzoneTeamDeleteMemberError = {
  InvalidRequest: "InvalidRequest",
  ExpiredToken: "ExpiredToken",
  InvalidToken: "InvalidToken",
  MemberNotFound: "MemberNotFound",
  CannotDeleteSelf: "CannotDeleteSelf",
} as const;
export type ToolsOzoneTeamDeleteMemberError = ClosedEnum<
  typeof ToolsOzoneTeamDeleteMemberError
>;

/**
 * Bad Request
 */
export type ToolsOzoneTeamDeleteMemberResponseBodyData = {
  error: ToolsOzoneTeamDeleteMemberError;
  message: string;
};

/**
 * Bad Request
 */
export class ToolsOzoneTeamDeleteMemberResponseBody extends Error {
  error: ToolsOzoneTeamDeleteMemberError;

  /** The original data that was passed to this error instance. */
  data$: ToolsOzoneTeamDeleteMemberResponseBodyData;

  constructor(err: ToolsOzoneTeamDeleteMemberResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "ToolsOzoneTeamDeleteMemberResponseBody";
  }
}

/** @internal */
export const ToolsOzoneTeamDeleteMemberTeamsResponseBody$inboundSchema:
  z.ZodType<
    ToolsOzoneTeamDeleteMemberTeamsResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.literal("AuthMissing"),
    message: z.string(),
  })
    .transform((v) => {
      return new ToolsOzoneTeamDeleteMemberTeamsResponseBody(v);
    });

/** @internal */
export type ToolsOzoneTeamDeleteMemberTeamsResponseBody$Outbound = {
  error: "AuthMissing";
  message: string;
};

/** @internal */
export const ToolsOzoneTeamDeleteMemberTeamsResponseBody$outboundSchema:
  z.ZodType<
    ToolsOzoneTeamDeleteMemberTeamsResponseBody$Outbound,
    z.ZodTypeDef,
    ToolsOzoneTeamDeleteMemberTeamsResponseBody
  > = z.instanceof(ToolsOzoneTeamDeleteMemberTeamsResponseBody)
    .transform(v => v.data$)
    .pipe(z.object({
      error: z.literal("AuthMissing").default("AuthMissing" as const),
      message: z.string(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolsOzoneTeamDeleteMemberTeamsResponseBody$ {
  /** @deprecated use `ToolsOzoneTeamDeleteMemberTeamsResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ToolsOzoneTeamDeleteMemberTeamsResponseBody$inboundSchema;
  /** @deprecated use `ToolsOzoneTeamDeleteMemberTeamsResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ToolsOzoneTeamDeleteMemberTeamsResponseBody$outboundSchema;
  /** @deprecated use `ToolsOzoneTeamDeleteMemberTeamsResponseBody$Outbound` instead. */
  export type Outbound = ToolsOzoneTeamDeleteMemberTeamsResponseBody$Outbound;
}

/** @internal */
export const ToolsOzoneTeamDeleteMemberError$inboundSchema: z.ZodNativeEnum<
  typeof ToolsOzoneTeamDeleteMemberError
> = z.nativeEnum(ToolsOzoneTeamDeleteMemberError);

/** @internal */
export const ToolsOzoneTeamDeleteMemberError$outboundSchema: z.ZodNativeEnum<
  typeof ToolsOzoneTeamDeleteMemberError
> = ToolsOzoneTeamDeleteMemberError$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolsOzoneTeamDeleteMemberError$ {
  /** @deprecated use `ToolsOzoneTeamDeleteMemberError$inboundSchema` instead. */
  export const inboundSchema = ToolsOzoneTeamDeleteMemberError$inboundSchema;
  /** @deprecated use `ToolsOzoneTeamDeleteMemberError$outboundSchema` instead. */
  export const outboundSchema = ToolsOzoneTeamDeleteMemberError$outboundSchema;
}

/** @internal */
export const ToolsOzoneTeamDeleteMemberResponseBody$inboundSchema: z.ZodType<
  ToolsOzoneTeamDeleteMemberResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  error: ToolsOzoneTeamDeleteMemberError$inboundSchema,
  message: z.string(),
})
  .transform((v) => {
    return new ToolsOzoneTeamDeleteMemberResponseBody(v);
  });

/** @internal */
export type ToolsOzoneTeamDeleteMemberResponseBody$Outbound = {
  error: string;
  message: string;
};

/** @internal */
export const ToolsOzoneTeamDeleteMemberResponseBody$outboundSchema: z.ZodType<
  ToolsOzoneTeamDeleteMemberResponseBody$Outbound,
  z.ZodTypeDef,
  ToolsOzoneTeamDeleteMemberResponseBody
> = z.instanceof(ToolsOzoneTeamDeleteMemberResponseBody)
  .transform(v => v.data$)
  .pipe(z.object({
    error: ToolsOzoneTeamDeleteMemberError$outboundSchema,
    message: z.string(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolsOzoneTeamDeleteMemberResponseBody$ {
  /** @deprecated use `ToolsOzoneTeamDeleteMemberResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ToolsOzoneTeamDeleteMemberResponseBody$inboundSchema;
  /** @deprecated use `ToolsOzoneTeamDeleteMemberResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ToolsOzoneTeamDeleteMemberResponseBody$outboundSchema;
  /** @deprecated use `ToolsOzoneTeamDeleteMemberResponseBody$Outbound` instead. */
  export type Outbound = ToolsOzoneTeamDeleteMemberResponseBody$Outbound;
}
