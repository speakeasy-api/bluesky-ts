/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ToolsOzoneModerationGetRepoRequest = {
  did: string;
};

/** @internal */
export const ToolsOzoneModerationGetRepoRequest$inboundSchema: z.ZodType<
  ToolsOzoneModerationGetRepoRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  did: z.string(),
});

/** @internal */
export type ToolsOzoneModerationGetRepoRequest$Outbound = {
  did: string;
};

/** @internal */
export const ToolsOzoneModerationGetRepoRequest$outboundSchema: z.ZodType<
  ToolsOzoneModerationGetRepoRequest$Outbound,
  z.ZodTypeDef,
  ToolsOzoneModerationGetRepoRequest
> = z.object({
  did: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolsOzoneModerationGetRepoRequest$ {
  /** @deprecated use `ToolsOzoneModerationGetRepoRequest$inboundSchema` instead. */
  export const inboundSchema = ToolsOzoneModerationGetRepoRequest$inboundSchema;
  /** @deprecated use `ToolsOzoneModerationGetRepoRequest$outboundSchema` instead. */
  export const outboundSchema =
    ToolsOzoneModerationGetRepoRequest$outboundSchema;
  /** @deprecated use `ToolsOzoneModerationGetRepoRequest$Outbound` instead. */
  export type Outbound = ToolsOzoneModerationGetRepoRequest$Outbound;
}

export function toolsOzoneModerationGetRepoRequestToJSON(
  toolsOzoneModerationGetRepoRequest: ToolsOzoneModerationGetRepoRequest,
): string {
  return JSON.stringify(
    ToolsOzoneModerationGetRepoRequest$outboundSchema.parse(
      toolsOzoneModerationGetRepoRequest,
    ),
  );
}

export function toolsOzoneModerationGetRepoRequestFromJSON(
  jsonString: string,
): SafeParseResult<ToolsOzoneModerationGetRepoRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      ToolsOzoneModerationGetRepoRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ToolsOzoneModerationGetRepoRequest' from JSON`,
  );
}
