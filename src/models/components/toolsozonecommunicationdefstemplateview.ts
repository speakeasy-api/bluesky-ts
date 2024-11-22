/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ToolsOzoneCommunicationDefsTemplateView = {
  id: string;
  /**
   * Name of the template.
   */
  name: string;
  /**
   * Content of the template, can contain markdown and variable placeholders.
   */
  subject?: string | undefined;
  /**
   * Subject of the message, used in emails.
   */
  contentMarkdown: string;
  disabled: boolean;
  /**
   * Message language.
   */
  lang?: string | undefined;
  /**
   * DID of the user who last updated the template.
   */
  lastUpdatedBy: string;
  createdAt: Date;
  updatedAt: Date;
};

/** @internal */
export const ToolsOzoneCommunicationDefsTemplateView$inboundSchema: z.ZodType<
  ToolsOzoneCommunicationDefsTemplateView,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  name: z.string(),
  subject: z.string().optional(),
  contentMarkdown: z.string(),
  disabled: z.boolean(),
  lang: z.string().optional(),
  lastUpdatedBy: z.string(),
  createdAt: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  updatedAt: z.string().datetime({ offset: true }).transform(v => new Date(v)),
});

/** @internal */
export type ToolsOzoneCommunicationDefsTemplateView$Outbound = {
  id: string;
  name: string;
  subject?: string | undefined;
  contentMarkdown: string;
  disabled: boolean;
  lang?: string | undefined;
  lastUpdatedBy: string;
  createdAt: string;
  updatedAt: string;
};

/** @internal */
export const ToolsOzoneCommunicationDefsTemplateView$outboundSchema: z.ZodType<
  ToolsOzoneCommunicationDefsTemplateView$Outbound,
  z.ZodTypeDef,
  ToolsOzoneCommunicationDefsTemplateView
> = z.object({
  id: z.string(),
  name: z.string(),
  subject: z.string().optional(),
  contentMarkdown: z.string(),
  disabled: z.boolean(),
  lang: z.string().optional(),
  lastUpdatedBy: z.string(),
  createdAt: z.date().transform(v => v.toISOString()),
  updatedAt: z.date().transform(v => v.toISOString()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolsOzoneCommunicationDefsTemplateView$ {
  /** @deprecated use `ToolsOzoneCommunicationDefsTemplateView$inboundSchema` instead. */
  export const inboundSchema =
    ToolsOzoneCommunicationDefsTemplateView$inboundSchema;
  /** @deprecated use `ToolsOzoneCommunicationDefsTemplateView$outboundSchema` instead. */
  export const outboundSchema =
    ToolsOzoneCommunicationDefsTemplateView$outboundSchema;
  /** @deprecated use `ToolsOzoneCommunicationDefsTemplateView$Outbound` instead. */
  export type Outbound = ToolsOzoneCommunicationDefsTemplateView$Outbound;
}

export function toolsOzoneCommunicationDefsTemplateViewToJSON(
  toolsOzoneCommunicationDefsTemplateView:
    ToolsOzoneCommunicationDefsTemplateView,
): string {
  return JSON.stringify(
    ToolsOzoneCommunicationDefsTemplateView$outboundSchema.parse(
      toolsOzoneCommunicationDefsTemplateView,
    ),
  );
}

export function toolsOzoneCommunicationDefsTemplateViewFromJSON(
  jsonString: string,
): SafeParseResult<
  ToolsOzoneCommunicationDefsTemplateView,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      ToolsOzoneCommunicationDefsTemplateView$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'ToolsOzoneCommunicationDefsTemplateView' from JSON`,
  );
}
