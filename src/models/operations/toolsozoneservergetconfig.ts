/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * OK
 */
export type ToolsOzoneServerGetConfigResponseBody = {
  appview?: components.ToolsOzoneServerGetConfigServiceConfig | undefined;
  pds?: components.ToolsOzoneServerGetConfigServiceConfig | undefined;
  blobDivert?: components.ToolsOzoneServerGetConfigServiceConfig | undefined;
  chat?: components.ToolsOzoneServerGetConfigServiceConfig | undefined;
  viewer?: components.ToolsOzoneServerGetConfigViewerConfig | undefined;
};

/** @internal */
export const ToolsOzoneServerGetConfigResponseBody$inboundSchema: z.ZodType<
  ToolsOzoneServerGetConfigResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  appview: components.ToolsOzoneServerGetConfigServiceConfig$inboundSchema
    .optional(),
  pds: components.ToolsOzoneServerGetConfigServiceConfig$inboundSchema
    .optional(),
  blobDivert: components.ToolsOzoneServerGetConfigServiceConfig$inboundSchema
    .optional(),
  chat: components.ToolsOzoneServerGetConfigServiceConfig$inboundSchema
    .optional(),
  viewer: components.ToolsOzoneServerGetConfigViewerConfig$inboundSchema
    .optional(),
});

/** @internal */
export type ToolsOzoneServerGetConfigResponseBody$Outbound = {
  appview?:
    | components.ToolsOzoneServerGetConfigServiceConfig$Outbound
    | undefined;
  pds?: components.ToolsOzoneServerGetConfigServiceConfig$Outbound | undefined;
  blobDivert?:
    | components.ToolsOzoneServerGetConfigServiceConfig$Outbound
    | undefined;
  chat?: components.ToolsOzoneServerGetConfigServiceConfig$Outbound | undefined;
  viewer?:
    | components.ToolsOzoneServerGetConfigViewerConfig$Outbound
    | undefined;
};

/** @internal */
export const ToolsOzoneServerGetConfigResponseBody$outboundSchema: z.ZodType<
  ToolsOzoneServerGetConfigResponseBody$Outbound,
  z.ZodTypeDef,
  ToolsOzoneServerGetConfigResponseBody
> = z.object({
  appview: components.ToolsOzoneServerGetConfigServiceConfig$outboundSchema
    .optional(),
  pds: components.ToolsOzoneServerGetConfigServiceConfig$outboundSchema
    .optional(),
  blobDivert: components.ToolsOzoneServerGetConfigServiceConfig$outboundSchema
    .optional(),
  chat: components.ToolsOzoneServerGetConfigServiceConfig$outboundSchema
    .optional(),
  viewer: components.ToolsOzoneServerGetConfigViewerConfig$outboundSchema
    .optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolsOzoneServerGetConfigResponseBody$ {
  /** @deprecated use `ToolsOzoneServerGetConfigResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ToolsOzoneServerGetConfigResponseBody$inboundSchema;
  /** @deprecated use `ToolsOzoneServerGetConfigResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ToolsOzoneServerGetConfigResponseBody$outboundSchema;
  /** @deprecated use `ToolsOzoneServerGetConfigResponseBody$Outbound` instead. */
  export type Outbound = ToolsOzoneServerGetConfigResponseBody$Outbound;
}

export function toolsOzoneServerGetConfigResponseBodyToJSON(
  toolsOzoneServerGetConfigResponseBody: ToolsOzoneServerGetConfigResponseBody,
): string {
  return JSON.stringify(
    ToolsOzoneServerGetConfigResponseBody$outboundSchema.parse(
      toolsOzoneServerGetConfigResponseBody,
    ),
  );
}

export function toolsOzoneServerGetConfigResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<ToolsOzoneServerGetConfigResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      ToolsOzoneServerGetConfigResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ToolsOzoneServerGetConfigResponseBody' from JSON`,
  );
}
