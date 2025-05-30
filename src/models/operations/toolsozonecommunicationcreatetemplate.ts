/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ToolsOzoneCommunicationCreateTemplateBody = {
  /**
   * Name of the template.
   */
  name: string;
  /**
   * Content of the template, markdown supported, can contain variable placeholders.
   */
  contentMarkdown: string;
  /**
   * Subject of the message, used in emails.
   */
  subject: string;
  /**
   * Message language.
   */
  lang?: string | undefined;
  /**
   * DID of the user who is creating the template.
   */
  createdBy?: string | undefined;
};

/** @internal */
export const ToolsOzoneCommunicationCreateTemplateBody$inboundSchema: z.ZodType<
  ToolsOzoneCommunicationCreateTemplateBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  contentMarkdown: z.string(),
  subject: z.string(),
  lang: z.string().optional(),
  createdBy: z.string().optional(),
});

/** @internal */
export type ToolsOzoneCommunicationCreateTemplateBody$Outbound = {
  name: string;
  contentMarkdown: string;
  subject: string;
  lang?: string | undefined;
  createdBy?: string | undefined;
};

/** @internal */
export const ToolsOzoneCommunicationCreateTemplateBody$outboundSchema:
  z.ZodType<
    ToolsOzoneCommunicationCreateTemplateBody$Outbound,
    z.ZodTypeDef,
    ToolsOzoneCommunicationCreateTemplateBody
  > = z.object({
    name: z.string(),
    contentMarkdown: z.string(),
    subject: z.string(),
    lang: z.string().optional(),
    createdBy: z.string().optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolsOzoneCommunicationCreateTemplateBody$ {
  /** @deprecated use `ToolsOzoneCommunicationCreateTemplateBody$inboundSchema` instead. */
  export const inboundSchema =
    ToolsOzoneCommunicationCreateTemplateBody$inboundSchema;
  /** @deprecated use `ToolsOzoneCommunicationCreateTemplateBody$outboundSchema` instead. */
  export const outboundSchema =
    ToolsOzoneCommunicationCreateTemplateBody$outboundSchema;
  /** @deprecated use `ToolsOzoneCommunicationCreateTemplateBody$Outbound` instead. */
  export type Outbound = ToolsOzoneCommunicationCreateTemplateBody$Outbound;
}

export function toolsOzoneCommunicationCreateTemplateBodyToJSON(
  toolsOzoneCommunicationCreateTemplateBody:
    ToolsOzoneCommunicationCreateTemplateBody,
): string {
  return JSON.stringify(
    ToolsOzoneCommunicationCreateTemplateBody$outboundSchema.parse(
      toolsOzoneCommunicationCreateTemplateBody,
    ),
  );
}

export function toolsOzoneCommunicationCreateTemplateBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  ToolsOzoneCommunicationCreateTemplateBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      ToolsOzoneCommunicationCreateTemplateBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'ToolsOzoneCommunicationCreateTemplateBody' from JSON`,
  );
}
