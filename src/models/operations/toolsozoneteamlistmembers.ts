/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ToolsOzoneTeamListMembersRequest = {
  limit?: number | undefined;
  cursor?: string | undefined;
};

/**
 * OK
 */
export type ToolsOzoneTeamListMembersResponseBody = {
  cursor?: string | undefined;
  members: Array<components.ToolsOzoneTeamDefsMember>;
};

export type ToolsOzoneTeamListMembersResponse = {
  result: ToolsOzoneTeamListMembersResponseBody;
};

/** @internal */
export const ToolsOzoneTeamListMembersRequest$inboundSchema: z.ZodType<
  ToolsOzoneTeamListMembersRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  limit: z.number().int().default(50),
  cursor: z.string().optional(),
});

/** @internal */
export type ToolsOzoneTeamListMembersRequest$Outbound = {
  limit: number;
  cursor?: string | undefined;
};

/** @internal */
export const ToolsOzoneTeamListMembersRequest$outboundSchema: z.ZodType<
  ToolsOzoneTeamListMembersRequest$Outbound,
  z.ZodTypeDef,
  ToolsOzoneTeamListMembersRequest
> = z.object({
  limit: z.number().int().default(50),
  cursor: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolsOzoneTeamListMembersRequest$ {
  /** @deprecated use `ToolsOzoneTeamListMembersRequest$inboundSchema` instead. */
  export const inboundSchema = ToolsOzoneTeamListMembersRequest$inboundSchema;
  /** @deprecated use `ToolsOzoneTeamListMembersRequest$outboundSchema` instead. */
  export const outboundSchema = ToolsOzoneTeamListMembersRequest$outboundSchema;
  /** @deprecated use `ToolsOzoneTeamListMembersRequest$Outbound` instead. */
  export type Outbound = ToolsOzoneTeamListMembersRequest$Outbound;
}

export function toolsOzoneTeamListMembersRequestToJSON(
  toolsOzoneTeamListMembersRequest: ToolsOzoneTeamListMembersRequest,
): string {
  return JSON.stringify(
    ToolsOzoneTeamListMembersRequest$outboundSchema.parse(
      toolsOzoneTeamListMembersRequest,
    ),
  );
}

export function toolsOzoneTeamListMembersRequestFromJSON(
  jsonString: string,
): SafeParseResult<ToolsOzoneTeamListMembersRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ToolsOzoneTeamListMembersRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ToolsOzoneTeamListMembersRequest' from JSON`,
  );
}

/** @internal */
export const ToolsOzoneTeamListMembersResponseBody$inboundSchema: z.ZodType<
  ToolsOzoneTeamListMembersResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  cursor: z.string().optional(),
  members: z.array(components.ToolsOzoneTeamDefsMember$inboundSchema),
});

/** @internal */
export type ToolsOzoneTeamListMembersResponseBody$Outbound = {
  cursor?: string | undefined;
  members: Array<components.ToolsOzoneTeamDefsMember$Outbound>;
};

/** @internal */
export const ToolsOzoneTeamListMembersResponseBody$outboundSchema: z.ZodType<
  ToolsOzoneTeamListMembersResponseBody$Outbound,
  z.ZodTypeDef,
  ToolsOzoneTeamListMembersResponseBody
> = z.object({
  cursor: z.string().optional(),
  members: z.array(components.ToolsOzoneTeamDefsMember$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolsOzoneTeamListMembersResponseBody$ {
  /** @deprecated use `ToolsOzoneTeamListMembersResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ToolsOzoneTeamListMembersResponseBody$inboundSchema;
  /** @deprecated use `ToolsOzoneTeamListMembersResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ToolsOzoneTeamListMembersResponseBody$outboundSchema;
  /** @deprecated use `ToolsOzoneTeamListMembersResponseBody$Outbound` instead. */
  export type Outbound = ToolsOzoneTeamListMembersResponseBody$Outbound;
}

export function toolsOzoneTeamListMembersResponseBodyToJSON(
  toolsOzoneTeamListMembersResponseBody: ToolsOzoneTeamListMembersResponseBody,
): string {
  return JSON.stringify(
    ToolsOzoneTeamListMembersResponseBody$outboundSchema.parse(
      toolsOzoneTeamListMembersResponseBody,
    ),
  );
}

export function toolsOzoneTeamListMembersResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<ToolsOzoneTeamListMembersResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      ToolsOzoneTeamListMembersResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ToolsOzoneTeamListMembersResponseBody' from JSON`,
  );
}

/** @internal */
export const ToolsOzoneTeamListMembersResponse$inboundSchema: z.ZodType<
  ToolsOzoneTeamListMembersResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: z.lazy(() => ToolsOzoneTeamListMembersResponseBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type ToolsOzoneTeamListMembersResponse$Outbound = {
  Result: ToolsOzoneTeamListMembersResponseBody$Outbound;
};

/** @internal */
export const ToolsOzoneTeamListMembersResponse$outboundSchema: z.ZodType<
  ToolsOzoneTeamListMembersResponse$Outbound,
  z.ZodTypeDef,
  ToolsOzoneTeamListMembersResponse
> = z.object({
  result: z.lazy(() => ToolsOzoneTeamListMembersResponseBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolsOzoneTeamListMembersResponse$ {
  /** @deprecated use `ToolsOzoneTeamListMembersResponse$inboundSchema` instead. */
  export const inboundSchema = ToolsOzoneTeamListMembersResponse$inboundSchema;
  /** @deprecated use `ToolsOzoneTeamListMembersResponse$outboundSchema` instead. */
  export const outboundSchema =
    ToolsOzoneTeamListMembersResponse$outboundSchema;
  /** @deprecated use `ToolsOzoneTeamListMembersResponse$Outbound` instead. */
  export type Outbound = ToolsOzoneTeamListMembersResponse$Outbound;
}

export function toolsOzoneTeamListMembersResponseToJSON(
  toolsOzoneTeamListMembersResponse: ToolsOzoneTeamListMembersResponse,
): string {
  return JSON.stringify(
    ToolsOzoneTeamListMembersResponse$outboundSchema.parse(
      toolsOzoneTeamListMembersResponse,
    ),
  );
}

export function toolsOzoneTeamListMembersResponseFromJSON(
  jsonString: string,
): SafeParseResult<ToolsOzoneTeamListMembersResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ToolsOzoneTeamListMembersResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ToolsOzoneTeamListMembersResponse' from JSON`,
  );
}
