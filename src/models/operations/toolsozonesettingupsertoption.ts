/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const ToolsOzoneSettingUpsertOptionScope = {
  Instance: "instance",
  Personal: "personal",
} as const;
export type ToolsOzoneSettingUpsertOptionScope = ClosedEnum<
  typeof ToolsOzoneSettingUpsertOptionScope
>;

export const ManagerRole = {
  ToolsOzoneTeamDefsNumberRoleModerator: "tools.ozone.team.defs#roleModerator",
  ToolsOzoneTeamDefsNumberRoleTriage: "tools.ozone.team.defs#roleTriage",
  ToolsOzoneTeamDefsNumberRoleAdmin: "tools.ozone.team.defs#roleAdmin",
} as const;
export type ManagerRole = ClosedEnum<typeof ManagerRole>;

export type ToolsOzoneSettingUpsertOptionBody = {
  key: string;
  scope: ToolsOzoneSettingUpsertOptionScope;
  value?: any | undefined;
  description?: string | undefined;
  managerRole?: ManagerRole | undefined;
};

/**
 * OK
 */
export type ToolsOzoneSettingUpsertOptionResponseBody = {
  option: components.ToolsOzoneSettingDefsOption;
};

/** @internal */
export const ToolsOzoneSettingUpsertOptionScope$inboundSchema: z.ZodNativeEnum<
  typeof ToolsOzoneSettingUpsertOptionScope
> = z.nativeEnum(ToolsOzoneSettingUpsertOptionScope);

/** @internal */
export const ToolsOzoneSettingUpsertOptionScope$outboundSchema: z.ZodNativeEnum<
  typeof ToolsOzoneSettingUpsertOptionScope
> = ToolsOzoneSettingUpsertOptionScope$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolsOzoneSettingUpsertOptionScope$ {
  /** @deprecated use `ToolsOzoneSettingUpsertOptionScope$inboundSchema` instead. */
  export const inboundSchema = ToolsOzoneSettingUpsertOptionScope$inboundSchema;
  /** @deprecated use `ToolsOzoneSettingUpsertOptionScope$outboundSchema` instead. */
  export const outboundSchema =
    ToolsOzoneSettingUpsertOptionScope$outboundSchema;
}

/** @internal */
export const ManagerRole$inboundSchema: z.ZodNativeEnum<typeof ManagerRole> = z
  .nativeEnum(ManagerRole);

/** @internal */
export const ManagerRole$outboundSchema: z.ZodNativeEnum<typeof ManagerRole> =
  ManagerRole$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ManagerRole$ {
  /** @deprecated use `ManagerRole$inboundSchema` instead. */
  export const inboundSchema = ManagerRole$inboundSchema;
  /** @deprecated use `ManagerRole$outboundSchema` instead. */
  export const outboundSchema = ManagerRole$outboundSchema;
}

/** @internal */
export const ToolsOzoneSettingUpsertOptionBody$inboundSchema: z.ZodType<
  ToolsOzoneSettingUpsertOptionBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  key: z.string(),
  scope: ToolsOzoneSettingUpsertOptionScope$inboundSchema,
  value: z.any().optional(),
  description: z.string().optional(),
  managerRole: ManagerRole$inboundSchema.optional(),
});

/** @internal */
export type ToolsOzoneSettingUpsertOptionBody$Outbound = {
  key: string;
  scope: string;
  value?: any | undefined;
  description?: string | undefined;
  managerRole?: string | undefined;
};

/** @internal */
export const ToolsOzoneSettingUpsertOptionBody$outboundSchema: z.ZodType<
  ToolsOzoneSettingUpsertOptionBody$Outbound,
  z.ZodTypeDef,
  ToolsOzoneSettingUpsertOptionBody
> = z.object({
  key: z.string(),
  scope: ToolsOzoneSettingUpsertOptionScope$outboundSchema,
  value: z.any().optional(),
  description: z.string().optional(),
  managerRole: ManagerRole$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolsOzoneSettingUpsertOptionBody$ {
  /** @deprecated use `ToolsOzoneSettingUpsertOptionBody$inboundSchema` instead. */
  export const inboundSchema = ToolsOzoneSettingUpsertOptionBody$inboundSchema;
  /** @deprecated use `ToolsOzoneSettingUpsertOptionBody$outboundSchema` instead. */
  export const outboundSchema =
    ToolsOzoneSettingUpsertOptionBody$outboundSchema;
  /** @deprecated use `ToolsOzoneSettingUpsertOptionBody$Outbound` instead. */
  export type Outbound = ToolsOzoneSettingUpsertOptionBody$Outbound;
}

export function toolsOzoneSettingUpsertOptionBodyToJSON(
  toolsOzoneSettingUpsertOptionBody: ToolsOzoneSettingUpsertOptionBody,
): string {
  return JSON.stringify(
    ToolsOzoneSettingUpsertOptionBody$outboundSchema.parse(
      toolsOzoneSettingUpsertOptionBody,
    ),
  );
}

export function toolsOzoneSettingUpsertOptionBodyFromJSON(
  jsonString: string,
): SafeParseResult<ToolsOzoneSettingUpsertOptionBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ToolsOzoneSettingUpsertOptionBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ToolsOzoneSettingUpsertOptionBody' from JSON`,
  );
}

/** @internal */
export const ToolsOzoneSettingUpsertOptionResponseBody$inboundSchema: z.ZodType<
  ToolsOzoneSettingUpsertOptionResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  option: components.ToolsOzoneSettingDefsOption$inboundSchema,
});

/** @internal */
export type ToolsOzoneSettingUpsertOptionResponseBody$Outbound = {
  option: components.ToolsOzoneSettingDefsOption$Outbound;
};

/** @internal */
export const ToolsOzoneSettingUpsertOptionResponseBody$outboundSchema:
  z.ZodType<
    ToolsOzoneSettingUpsertOptionResponseBody$Outbound,
    z.ZodTypeDef,
    ToolsOzoneSettingUpsertOptionResponseBody
  > = z.object({
    option: components.ToolsOzoneSettingDefsOption$outboundSchema,
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolsOzoneSettingUpsertOptionResponseBody$ {
  /** @deprecated use `ToolsOzoneSettingUpsertOptionResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ToolsOzoneSettingUpsertOptionResponseBody$inboundSchema;
  /** @deprecated use `ToolsOzoneSettingUpsertOptionResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ToolsOzoneSettingUpsertOptionResponseBody$outboundSchema;
  /** @deprecated use `ToolsOzoneSettingUpsertOptionResponseBody$Outbound` instead. */
  export type Outbound = ToolsOzoneSettingUpsertOptionResponseBody$Outbound;
}

export function toolsOzoneSettingUpsertOptionResponseBodyToJSON(
  toolsOzoneSettingUpsertOptionResponseBody:
    ToolsOzoneSettingUpsertOptionResponseBody,
): string {
  return JSON.stringify(
    ToolsOzoneSettingUpsertOptionResponseBody$outboundSchema.parse(
      toolsOzoneSettingUpsertOptionResponseBody,
    ),
  );
}

export function toolsOzoneSettingUpsertOptionResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  ToolsOzoneSettingUpsertOptionResponseBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      ToolsOzoneSettingUpsertOptionResponseBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'ToolsOzoneSettingUpsertOptionResponseBody' from JSON`,
  );
}
