/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const ToolsOzoneTeamAddMemberRole = {
  ToolsOzoneTeamDefsNumberRoleAdmin: "tools.ozone.team.defs#roleAdmin",
  ToolsOzoneTeamDefsNumberRoleModerator: "tools.ozone.team.defs#roleModerator",
  ToolsOzoneTeamDefsNumberRoleTriage: "tools.ozone.team.defs#roleTriage",
} as const;
export type ToolsOzoneTeamAddMemberRole = ClosedEnum<
  typeof ToolsOzoneTeamAddMemberRole
>;

export type ToolsOzoneTeamAddMemberBody = {
  did: string;
  role: ToolsOzoneTeamAddMemberRole;
};

/** @internal */
export const ToolsOzoneTeamAddMemberRole$inboundSchema: z.ZodNativeEnum<
  typeof ToolsOzoneTeamAddMemberRole
> = z.nativeEnum(ToolsOzoneTeamAddMemberRole);

/** @internal */
export const ToolsOzoneTeamAddMemberRole$outboundSchema: z.ZodNativeEnum<
  typeof ToolsOzoneTeamAddMemberRole
> = ToolsOzoneTeamAddMemberRole$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolsOzoneTeamAddMemberRole$ {
  /** @deprecated use `ToolsOzoneTeamAddMemberRole$inboundSchema` instead. */
  export const inboundSchema = ToolsOzoneTeamAddMemberRole$inboundSchema;
  /** @deprecated use `ToolsOzoneTeamAddMemberRole$outboundSchema` instead. */
  export const outboundSchema = ToolsOzoneTeamAddMemberRole$outboundSchema;
}

/** @internal */
export const ToolsOzoneTeamAddMemberBody$inboundSchema: z.ZodType<
  ToolsOzoneTeamAddMemberBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  did: z.string(),
  role: ToolsOzoneTeamAddMemberRole$inboundSchema,
});

/** @internal */
export type ToolsOzoneTeamAddMemberBody$Outbound = {
  did: string;
  role: string;
};

/** @internal */
export const ToolsOzoneTeamAddMemberBody$outboundSchema: z.ZodType<
  ToolsOzoneTeamAddMemberBody$Outbound,
  z.ZodTypeDef,
  ToolsOzoneTeamAddMemberBody
> = z.object({
  did: z.string(),
  role: ToolsOzoneTeamAddMemberRole$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolsOzoneTeamAddMemberBody$ {
  /** @deprecated use `ToolsOzoneTeamAddMemberBody$inboundSchema` instead. */
  export const inboundSchema = ToolsOzoneTeamAddMemberBody$inboundSchema;
  /** @deprecated use `ToolsOzoneTeamAddMemberBody$outboundSchema` instead. */
  export const outboundSchema = ToolsOzoneTeamAddMemberBody$outboundSchema;
  /** @deprecated use `ToolsOzoneTeamAddMemberBody$Outbound` instead. */
  export type Outbound = ToolsOzoneTeamAddMemberBody$Outbound;
}

export function toolsOzoneTeamAddMemberBodyToJSON(
  toolsOzoneTeamAddMemberBody: ToolsOzoneTeamAddMemberBody,
): string {
  return JSON.stringify(
    ToolsOzoneTeamAddMemberBody$outboundSchema.parse(
      toolsOzoneTeamAddMemberBody,
    ),
  );
}

export function toolsOzoneTeamAddMemberBodyFromJSON(
  jsonString: string,
): SafeParseResult<ToolsOzoneTeamAddMemberBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ToolsOzoneTeamAddMemberBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ToolsOzoneTeamAddMemberBody' from JSON`,
  );
}
