/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ToolsOzoneModerationDefsImageDetails,
  ToolsOzoneModerationDefsImageDetails$inboundSchema,
  ToolsOzoneModerationDefsImageDetails$Outbound,
  ToolsOzoneModerationDefsImageDetails$outboundSchema,
} from "./toolsozonemoderationdefsimagedetails.js";
import {
  ToolsOzoneModerationDefsModeration,
  ToolsOzoneModerationDefsModeration$inboundSchema,
  ToolsOzoneModerationDefsModeration$Outbound,
  ToolsOzoneModerationDefsModeration$outboundSchema,
} from "./toolsozonemoderationdefsmoderation.js";
import {
  ToolsOzoneModerationDefsVideoDetails,
  ToolsOzoneModerationDefsVideoDetails$inboundSchema,
  ToolsOzoneModerationDefsVideoDetails$Outbound,
  ToolsOzoneModerationDefsVideoDetails$outboundSchema,
} from "./toolsozonemoderationdefsvideodetails.js";

export type Details =
  | ToolsOzoneModerationDefsImageDetails
  | ToolsOzoneModerationDefsVideoDetails;

export type ToolsOzoneModerationDefsBlobView = {
  cid: string;
  mimeType: string;
  size: number;
  createdAt: Date;
  details?:
    | ToolsOzoneModerationDefsImageDetails
    | ToolsOzoneModerationDefsVideoDetails
    | undefined;
  moderation?: ToolsOzoneModerationDefsModeration | undefined;
};

/** @internal */
export const Details$inboundSchema: z.ZodType<Details, z.ZodTypeDef, unknown> =
  z.union([
    ToolsOzoneModerationDefsImageDetails$inboundSchema,
    ToolsOzoneModerationDefsVideoDetails$inboundSchema,
  ]);

/** @internal */
export type Details$Outbound =
  | ToolsOzoneModerationDefsImageDetails$Outbound
  | ToolsOzoneModerationDefsVideoDetails$Outbound;

/** @internal */
export const Details$outboundSchema: z.ZodType<
  Details$Outbound,
  z.ZodTypeDef,
  Details
> = z.union([
  ToolsOzoneModerationDefsImageDetails$outboundSchema,
  ToolsOzoneModerationDefsVideoDetails$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Details$ {
  /** @deprecated use `Details$inboundSchema` instead. */
  export const inboundSchema = Details$inboundSchema;
  /** @deprecated use `Details$outboundSchema` instead. */
  export const outboundSchema = Details$outboundSchema;
  /** @deprecated use `Details$Outbound` instead. */
  export type Outbound = Details$Outbound;
}

export function detailsToJSON(details: Details): string {
  return JSON.stringify(Details$outboundSchema.parse(details));
}

export function detailsFromJSON(
  jsonString: string,
): SafeParseResult<Details, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Details$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Details' from JSON`,
  );
}

/** @internal */
export const ToolsOzoneModerationDefsBlobView$inboundSchema: z.ZodType<
  ToolsOzoneModerationDefsBlobView,
  z.ZodTypeDef,
  unknown
> = z.object({
  cid: z.string(),
  mimeType: z.string(),
  size: z.number().int(),
  createdAt: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  details: z.union([
    ToolsOzoneModerationDefsImageDetails$inboundSchema,
    ToolsOzoneModerationDefsVideoDetails$inboundSchema,
  ]).optional(),
  moderation: ToolsOzoneModerationDefsModeration$inboundSchema.optional(),
});

/** @internal */
export type ToolsOzoneModerationDefsBlobView$Outbound = {
  cid: string;
  mimeType: string;
  size: number;
  createdAt: string;
  details?:
    | ToolsOzoneModerationDefsImageDetails$Outbound
    | ToolsOzoneModerationDefsVideoDetails$Outbound
    | undefined;
  moderation?: ToolsOzoneModerationDefsModeration$Outbound | undefined;
};

/** @internal */
export const ToolsOzoneModerationDefsBlobView$outboundSchema: z.ZodType<
  ToolsOzoneModerationDefsBlobView$Outbound,
  z.ZodTypeDef,
  ToolsOzoneModerationDefsBlobView
> = z.object({
  cid: z.string(),
  mimeType: z.string(),
  size: z.number().int(),
  createdAt: z.date().transform(v => v.toISOString()),
  details: z.union([
    ToolsOzoneModerationDefsImageDetails$outboundSchema,
    ToolsOzoneModerationDefsVideoDetails$outboundSchema,
  ]).optional(),
  moderation: ToolsOzoneModerationDefsModeration$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolsOzoneModerationDefsBlobView$ {
  /** @deprecated use `ToolsOzoneModerationDefsBlobView$inboundSchema` instead. */
  export const inboundSchema = ToolsOzoneModerationDefsBlobView$inboundSchema;
  /** @deprecated use `ToolsOzoneModerationDefsBlobView$outboundSchema` instead. */
  export const outboundSchema = ToolsOzoneModerationDefsBlobView$outboundSchema;
  /** @deprecated use `ToolsOzoneModerationDefsBlobView$Outbound` instead. */
  export type Outbound = ToolsOzoneModerationDefsBlobView$Outbound;
}

export function toolsOzoneModerationDefsBlobViewToJSON(
  toolsOzoneModerationDefsBlobView: ToolsOzoneModerationDefsBlobView,
): string {
  return JSON.stringify(
    ToolsOzoneModerationDefsBlobView$outboundSchema.parse(
      toolsOzoneModerationDefsBlobView,
    ),
  );
}

export function toolsOzoneModerationDefsBlobViewFromJSON(
  jsonString: string,
): SafeParseResult<ToolsOzoneModerationDefsBlobView, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ToolsOzoneModerationDefsBlobView$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ToolsOzoneModerationDefsBlobView' from JSON`,
  );
}
