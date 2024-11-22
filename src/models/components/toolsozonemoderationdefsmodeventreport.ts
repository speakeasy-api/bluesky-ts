/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Report a subject
 */
export type ToolsOzoneModerationDefsModEventReport = {
  comment?: string | undefined;
  /**
   * Set to true if the reporter was muted from reporting at the time of the event. These reports won't impact the reviewState of the subject.
   */
  isReporterMuted?: boolean | undefined;
  reportType: string;
};

/** @internal */
export const ToolsOzoneModerationDefsModEventReport$inboundSchema: z.ZodType<
  ToolsOzoneModerationDefsModEventReport,
  z.ZodTypeDef,
  unknown
> = z.object({
  comment: z.string().optional(),
  isReporterMuted: z.boolean().optional(),
  reportType: z.string(),
});

/** @internal */
export type ToolsOzoneModerationDefsModEventReport$Outbound = {
  comment?: string | undefined;
  isReporterMuted?: boolean | undefined;
  reportType: string;
};

/** @internal */
export const ToolsOzoneModerationDefsModEventReport$outboundSchema: z.ZodType<
  ToolsOzoneModerationDefsModEventReport$Outbound,
  z.ZodTypeDef,
  ToolsOzoneModerationDefsModEventReport
> = z.object({
  comment: z.string().optional(),
  isReporterMuted: z.boolean().optional(),
  reportType: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolsOzoneModerationDefsModEventReport$ {
  /** @deprecated use `ToolsOzoneModerationDefsModEventReport$inboundSchema` instead. */
  export const inboundSchema =
    ToolsOzoneModerationDefsModEventReport$inboundSchema;
  /** @deprecated use `ToolsOzoneModerationDefsModEventReport$outboundSchema` instead. */
  export const outboundSchema =
    ToolsOzoneModerationDefsModEventReport$outboundSchema;
  /** @deprecated use `ToolsOzoneModerationDefsModEventReport$Outbound` instead. */
  export type Outbound = ToolsOzoneModerationDefsModEventReport$Outbound;
}

export function toolsOzoneModerationDefsModEventReportToJSON(
  toolsOzoneModerationDefsModEventReport:
    ToolsOzoneModerationDefsModEventReport,
): string {
  return JSON.stringify(
    ToolsOzoneModerationDefsModEventReport$outboundSchema.parse(
      toolsOzoneModerationDefsModEventReport,
    ),
  );
}

export function toolsOzoneModerationDefsModEventReportFromJSON(
  jsonString: string,
): SafeParseResult<ToolsOzoneModerationDefsModEventReport, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      ToolsOzoneModerationDefsModEventReport$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ToolsOzoneModerationDefsModEventReport' from JSON`,
  );
}
