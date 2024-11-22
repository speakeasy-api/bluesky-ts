/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Mute incoming reports on a subject
 */
export type ToolsOzoneModerationDefsModEventMute = {
  comment?: string | undefined;
  durationInHours: number;
};

/** @internal */
export const ToolsOzoneModerationDefsModEventMute$inboundSchema: z.ZodType<
  ToolsOzoneModerationDefsModEventMute,
  z.ZodTypeDef,
  unknown
> = z.object({
  comment: z.string().optional(),
  durationInHours: z.number().int(),
});

/** @internal */
export type ToolsOzoneModerationDefsModEventMute$Outbound = {
  comment?: string | undefined;
  durationInHours: number;
};

/** @internal */
export const ToolsOzoneModerationDefsModEventMute$outboundSchema: z.ZodType<
  ToolsOzoneModerationDefsModEventMute$Outbound,
  z.ZodTypeDef,
  ToolsOzoneModerationDefsModEventMute
> = z.object({
  comment: z.string().optional(),
  durationInHours: z.number().int(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolsOzoneModerationDefsModEventMute$ {
  /** @deprecated use `ToolsOzoneModerationDefsModEventMute$inboundSchema` instead. */
  export const inboundSchema =
    ToolsOzoneModerationDefsModEventMute$inboundSchema;
  /** @deprecated use `ToolsOzoneModerationDefsModEventMute$outboundSchema` instead. */
  export const outboundSchema =
    ToolsOzoneModerationDefsModEventMute$outboundSchema;
  /** @deprecated use `ToolsOzoneModerationDefsModEventMute$Outbound` instead. */
  export type Outbound = ToolsOzoneModerationDefsModEventMute$Outbound;
}

export function toolsOzoneModerationDefsModEventMuteToJSON(
  toolsOzoneModerationDefsModEventMute: ToolsOzoneModerationDefsModEventMute,
): string {
  return JSON.stringify(
    ToolsOzoneModerationDefsModEventMute$outboundSchema.parse(
      toolsOzoneModerationDefsModEventMute,
    ),
  );
}

export function toolsOzoneModerationDefsModEventMuteFromJSON(
  jsonString: string,
): SafeParseResult<ToolsOzoneModerationDefsModEventMute, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      ToolsOzoneModerationDefsModEventMute$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ToolsOzoneModerationDefsModEventMute' from JSON`,
  );
}
