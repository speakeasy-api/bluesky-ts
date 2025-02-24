/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ToolsOzoneModerationDefsSubjectStatusView,
  ToolsOzoneModerationDefsSubjectStatusView$inboundSchema,
  ToolsOzoneModerationDefsSubjectStatusView$Outbound,
  ToolsOzoneModerationDefsSubjectStatusView$outboundSchema,
} from "./toolsozonemoderationdefssubjectstatusview.js";

export type ToolsOzoneModerationDefsModeration = {
  subjectStatus?: ToolsOzoneModerationDefsSubjectStatusView | undefined;
};

/** @internal */
export const ToolsOzoneModerationDefsModeration$inboundSchema: z.ZodType<
  ToolsOzoneModerationDefsModeration,
  z.ZodTypeDef,
  unknown
> = z.object({
  subjectStatus: ToolsOzoneModerationDefsSubjectStatusView$inboundSchema
    .optional(),
});

/** @internal */
export type ToolsOzoneModerationDefsModeration$Outbound = {
  subjectStatus?:
    | ToolsOzoneModerationDefsSubjectStatusView$Outbound
    | undefined;
};

/** @internal */
export const ToolsOzoneModerationDefsModeration$outboundSchema: z.ZodType<
  ToolsOzoneModerationDefsModeration$Outbound,
  z.ZodTypeDef,
  ToolsOzoneModerationDefsModeration
> = z.object({
  subjectStatus: ToolsOzoneModerationDefsSubjectStatusView$outboundSchema
    .optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolsOzoneModerationDefsModeration$ {
  /** @deprecated use `ToolsOzoneModerationDefsModeration$inboundSchema` instead. */
  export const inboundSchema = ToolsOzoneModerationDefsModeration$inboundSchema;
  /** @deprecated use `ToolsOzoneModerationDefsModeration$outboundSchema` instead. */
  export const outboundSchema =
    ToolsOzoneModerationDefsModeration$outboundSchema;
  /** @deprecated use `ToolsOzoneModerationDefsModeration$Outbound` instead. */
  export type Outbound = ToolsOzoneModerationDefsModeration$Outbound;
}

export function toolsOzoneModerationDefsModerationToJSON(
  toolsOzoneModerationDefsModeration: ToolsOzoneModerationDefsModeration,
): string {
  return JSON.stringify(
    ToolsOzoneModerationDefsModeration$outboundSchema.parse(
      toolsOzoneModerationDefsModeration,
    ),
  );
}

export function toolsOzoneModerationDefsModerationFromJSON(
  jsonString: string,
): SafeParseResult<ToolsOzoneModerationDefsModeration, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      ToolsOzoneModerationDefsModeration$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ToolsOzoneModerationDefsModeration' from JSON`,
  );
}
