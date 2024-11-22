/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const Role = {
  ToolsOzoneTeamDefsNumberRoleAdmin: "tools.ozone.team.defs#roleAdmin",
  ToolsOzoneTeamDefsNumberRoleModerator: "tools.ozone.team.defs#roleModerator",
  ToolsOzoneTeamDefsNumberRoleTriage: "tools.ozone.team.defs#roleTriage",
} as const;
export type Role = ClosedEnum<typeof Role>;

export type ToolsOzoneTeamAddMemberRequestBody = {
  did: string;
  role: Role;
};

/** @internal */
export const Role$inboundSchema: z.ZodNativeEnum<typeof Role> = z.nativeEnum(
  Role,
);

/** @internal */
export const Role$outboundSchema: z.ZodNativeEnum<typeof Role> =
  Role$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Role$ {
  /** @deprecated use `Role$inboundSchema` instead. */
  export const inboundSchema = Role$inboundSchema;
  /** @deprecated use `Role$outboundSchema` instead. */
  export const outboundSchema = Role$outboundSchema;
}

/** @internal */
export const ToolsOzoneTeamAddMemberRequestBody$inboundSchema: z.ZodType<
  ToolsOzoneTeamAddMemberRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  did: z.string(),
  role: Role$inboundSchema,
});

/** @internal */
export type ToolsOzoneTeamAddMemberRequestBody$Outbound = {
  did: string;
  role: string;
};

/** @internal */
export const ToolsOzoneTeamAddMemberRequestBody$outboundSchema: z.ZodType<
  ToolsOzoneTeamAddMemberRequestBody$Outbound,
  z.ZodTypeDef,
  ToolsOzoneTeamAddMemberRequestBody
> = z.object({
  did: z.string(),
  role: Role$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolsOzoneTeamAddMemberRequestBody$ {
  /** @deprecated use `ToolsOzoneTeamAddMemberRequestBody$inboundSchema` instead. */
  export const inboundSchema = ToolsOzoneTeamAddMemberRequestBody$inboundSchema;
  /** @deprecated use `ToolsOzoneTeamAddMemberRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    ToolsOzoneTeamAddMemberRequestBody$outboundSchema;
  /** @deprecated use `ToolsOzoneTeamAddMemberRequestBody$Outbound` instead. */
  export type Outbound = ToolsOzoneTeamAddMemberRequestBody$Outbound;
}

export function toolsOzoneTeamAddMemberRequestBodyToJSON(
  toolsOzoneTeamAddMemberRequestBody: ToolsOzoneTeamAddMemberRequestBody,
): string {
  return JSON.stringify(
    ToolsOzoneTeamAddMemberRequestBody$outboundSchema.parse(
      toolsOzoneTeamAddMemberRequestBody,
    ),
  );
}

export function toolsOzoneTeamAddMemberRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<ToolsOzoneTeamAddMemberRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      ToolsOzoneTeamAddMemberRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ToolsOzoneTeamAddMemberRequestBody' from JSON`,
  );
}
