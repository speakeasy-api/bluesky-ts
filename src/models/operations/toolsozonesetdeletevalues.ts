/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ToolsOzoneSetDeleteValuesBody = {
  /**
   * Name of the set to delete values from
   */
  name: string;
  values: Array<string>;
};

/** @internal */
export const ToolsOzoneSetDeleteValuesBody$inboundSchema: z.ZodType<
  ToolsOzoneSetDeleteValuesBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  values: z.array(z.string()),
});

/** @internal */
export type ToolsOzoneSetDeleteValuesBody$Outbound = {
  name: string;
  values: Array<string>;
};

/** @internal */
export const ToolsOzoneSetDeleteValuesBody$outboundSchema: z.ZodType<
  ToolsOzoneSetDeleteValuesBody$Outbound,
  z.ZodTypeDef,
  ToolsOzoneSetDeleteValuesBody
> = z.object({
  name: z.string(),
  values: z.array(z.string()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolsOzoneSetDeleteValuesBody$ {
  /** @deprecated use `ToolsOzoneSetDeleteValuesBody$inboundSchema` instead. */
  export const inboundSchema = ToolsOzoneSetDeleteValuesBody$inboundSchema;
  /** @deprecated use `ToolsOzoneSetDeleteValuesBody$outboundSchema` instead. */
  export const outboundSchema = ToolsOzoneSetDeleteValuesBody$outboundSchema;
  /** @deprecated use `ToolsOzoneSetDeleteValuesBody$Outbound` instead. */
  export type Outbound = ToolsOzoneSetDeleteValuesBody$Outbound;
}

export function toolsOzoneSetDeleteValuesBodyToJSON(
  toolsOzoneSetDeleteValuesBody: ToolsOzoneSetDeleteValuesBody,
): string {
  return JSON.stringify(
    ToolsOzoneSetDeleteValuesBody$outboundSchema.parse(
      toolsOzoneSetDeleteValuesBody,
    ),
  );
}

export function toolsOzoneSetDeleteValuesBodyFromJSON(
  jsonString: string,
): SafeParseResult<ToolsOzoneSetDeleteValuesBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ToolsOzoneSetDeleteValuesBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ToolsOzoneSetDeleteValuesBody' from JSON`,
  );
}
