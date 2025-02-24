/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const Op = {
  Create: "create",
  Update: "update",
  Delete: "delete",
} as const;
export type Op = ClosedEnum<typeof Op>;

/**
 * Logs lifecycle event on a record subject. Normally captured by automod from the firehose and emitted to ozone for historical tracking.
 */
export type ToolsOzoneModerationDefsRecordEvent = {
  comment?: string | undefined;
  op: Op;
  cid?: string | undefined;
  timestamp: Date;
};

/** @internal */
export const Op$inboundSchema: z.ZodNativeEnum<typeof Op> = z.nativeEnum(Op);

/** @internal */
export const Op$outboundSchema: z.ZodNativeEnum<typeof Op> = Op$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Op$ {
  /** @deprecated use `Op$inboundSchema` instead. */
  export const inboundSchema = Op$inboundSchema;
  /** @deprecated use `Op$outboundSchema` instead. */
  export const outboundSchema = Op$outboundSchema;
}

/** @internal */
export const ToolsOzoneModerationDefsRecordEvent$inboundSchema: z.ZodType<
  ToolsOzoneModerationDefsRecordEvent,
  z.ZodTypeDef,
  unknown
> = z.object({
  comment: z.string().optional(),
  op: Op$inboundSchema,
  cid: z.string().optional(),
  timestamp: z.string().datetime({ offset: true }).transform(v => new Date(v)),
});

/** @internal */
export type ToolsOzoneModerationDefsRecordEvent$Outbound = {
  comment?: string | undefined;
  op: string;
  cid?: string | undefined;
  timestamp: string;
};

/** @internal */
export const ToolsOzoneModerationDefsRecordEvent$outboundSchema: z.ZodType<
  ToolsOzoneModerationDefsRecordEvent$Outbound,
  z.ZodTypeDef,
  ToolsOzoneModerationDefsRecordEvent
> = z.object({
  comment: z.string().optional(),
  op: Op$outboundSchema,
  cid: z.string().optional(),
  timestamp: z.date().transform(v => v.toISOString()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolsOzoneModerationDefsRecordEvent$ {
  /** @deprecated use `ToolsOzoneModerationDefsRecordEvent$inboundSchema` instead. */
  export const inboundSchema =
    ToolsOzoneModerationDefsRecordEvent$inboundSchema;
  /** @deprecated use `ToolsOzoneModerationDefsRecordEvent$outboundSchema` instead. */
  export const outboundSchema =
    ToolsOzoneModerationDefsRecordEvent$outboundSchema;
  /** @deprecated use `ToolsOzoneModerationDefsRecordEvent$Outbound` instead. */
  export type Outbound = ToolsOzoneModerationDefsRecordEvent$Outbound;
}

export function toolsOzoneModerationDefsRecordEventToJSON(
  toolsOzoneModerationDefsRecordEvent: ToolsOzoneModerationDefsRecordEvent,
): string {
  return JSON.stringify(
    ToolsOzoneModerationDefsRecordEvent$outboundSchema.parse(
      toolsOzoneModerationDefsRecordEvent,
    ),
  );
}

export function toolsOzoneModerationDefsRecordEventFromJSON(
  jsonString: string,
): SafeParseResult<ToolsOzoneModerationDefsRecordEvent, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      ToolsOzoneModerationDefsRecordEvent$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ToolsOzoneModerationDefsRecordEvent' from JSON`,
  );
}
