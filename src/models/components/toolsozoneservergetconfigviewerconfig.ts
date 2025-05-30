/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const ToolsOzoneServerGetConfigViewerConfigRole = {
  ToolsOzoneTeamDefsNumberRoleAdmin: "tools.ozone.team.defs#roleAdmin",
  ToolsOzoneTeamDefsNumberRoleModerator: "tools.ozone.team.defs#roleModerator",
  ToolsOzoneTeamDefsNumberRoleTriage: "tools.ozone.team.defs#roleTriage",
} as const;
export type ToolsOzoneServerGetConfigViewerConfigRole = ClosedEnum<
  typeof ToolsOzoneServerGetConfigViewerConfigRole
>;

export type ToolsOzoneServerGetConfigViewerConfig = {
  role?: ToolsOzoneServerGetConfigViewerConfigRole | undefined;
};

/** @internal */
export const ToolsOzoneServerGetConfigViewerConfigRole$inboundSchema:
  z.ZodNativeEnum<typeof ToolsOzoneServerGetConfigViewerConfigRole> = z
    .nativeEnum(ToolsOzoneServerGetConfigViewerConfigRole);

/** @internal */
export const ToolsOzoneServerGetConfigViewerConfigRole$outboundSchema:
  z.ZodNativeEnum<typeof ToolsOzoneServerGetConfigViewerConfigRole> =
    ToolsOzoneServerGetConfigViewerConfigRole$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolsOzoneServerGetConfigViewerConfigRole$ {
  /** @deprecated use `ToolsOzoneServerGetConfigViewerConfigRole$inboundSchema` instead. */
  export const inboundSchema =
    ToolsOzoneServerGetConfigViewerConfigRole$inboundSchema;
  /** @deprecated use `ToolsOzoneServerGetConfigViewerConfigRole$outboundSchema` instead. */
  export const outboundSchema =
    ToolsOzoneServerGetConfigViewerConfigRole$outboundSchema;
}

/** @internal */
export const ToolsOzoneServerGetConfigViewerConfig$inboundSchema: z.ZodType<
  ToolsOzoneServerGetConfigViewerConfig,
  z.ZodTypeDef,
  unknown
> = z.object({
  role: ToolsOzoneServerGetConfigViewerConfigRole$inboundSchema.optional(),
});

/** @internal */
export type ToolsOzoneServerGetConfigViewerConfig$Outbound = {
  role?: string | undefined;
};

/** @internal */
export const ToolsOzoneServerGetConfigViewerConfig$outboundSchema: z.ZodType<
  ToolsOzoneServerGetConfigViewerConfig$Outbound,
  z.ZodTypeDef,
  ToolsOzoneServerGetConfigViewerConfig
> = z.object({
  role: ToolsOzoneServerGetConfigViewerConfigRole$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolsOzoneServerGetConfigViewerConfig$ {
  /** @deprecated use `ToolsOzoneServerGetConfigViewerConfig$inboundSchema` instead. */
  export const inboundSchema =
    ToolsOzoneServerGetConfigViewerConfig$inboundSchema;
  /** @deprecated use `ToolsOzoneServerGetConfigViewerConfig$outboundSchema` instead. */
  export const outboundSchema =
    ToolsOzoneServerGetConfigViewerConfig$outboundSchema;
  /** @deprecated use `ToolsOzoneServerGetConfigViewerConfig$Outbound` instead. */
  export type Outbound = ToolsOzoneServerGetConfigViewerConfig$Outbound;
}

export function toolsOzoneServerGetConfigViewerConfigToJSON(
  toolsOzoneServerGetConfigViewerConfig: ToolsOzoneServerGetConfigViewerConfig,
): string {
  return JSON.stringify(
    ToolsOzoneServerGetConfigViewerConfig$outboundSchema.parse(
      toolsOzoneServerGetConfigViewerConfig,
    ),
  );
}

export function toolsOzoneServerGetConfigViewerConfigFromJSON(
  jsonString: string,
): SafeParseResult<ToolsOzoneServerGetConfigViewerConfig, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      ToolsOzoneServerGetConfigViewerConfig$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ToolsOzoneServerGetConfigViewerConfig' from JSON`,
  );
}
