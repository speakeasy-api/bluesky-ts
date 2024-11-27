/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * If specified, only events where the subject is of the given type (account or record) will be returned. When this is set to 'account' the 'collections' parameter will be ignored. When includeAllUserRecords or subject is set, this will be ignored.
 */
export const SubjectType = {
  Account: "account",
  Record: "record",
} as const;
/**
 * If specified, only events where the subject is of the given type (account or record) will be returned. When this is set to 'account' the 'collections' parameter will be ignored. When includeAllUserRecords or subject is set, this will be ignored.
 */
export type SubjectType = ClosedEnum<typeof SubjectType>;

export type ToolsOzoneModerationQueryEventsRequest = {
  /**
   * The types of events (fully qualified string in the format of tools.ozone.moderation.defs#modEvent<name>) to filter by. If not specified, all events are returned.
   */
  types?: Array<string> | undefined;
  createdBy?: string | undefined;
  /**
   * Sort direction for the events. Defaults to descending order of created at timestamp.
   */
  sortDirection?: string | undefined;
  /**
   * Retrieve events created after a given timestamp
   */
  createdAfter?: Date | undefined;
  /**
   * Retrieve events created before a given timestamp
   */
  createdBefore?: Date | undefined;
  subject?: string | undefined;
  /**
   * If specified, only events where the subject belongs to the given collections will be returned. When subjectType is set to 'account', this will be ignored.
   */
  collections?: Array<string> | undefined;
  /**
   * If specified, only events where the subject is of the given type (account or record) will be returned. When this is set to 'account' the 'collections' parameter will be ignored. When includeAllUserRecords or subject is set, this will be ignored.
   */
  subjectType?: SubjectType | undefined;
  /**
   * If true, events on all record types (posts, lists, profile etc.) or records from given 'collections' param, owned by the did are returned.
   */
  includeAllUserRecords?: boolean | undefined;
  limit?: number | undefined;
  /**
   * If true, only events with comments are returned
   */
  hasComment?: boolean | undefined;
  /**
   * If specified, only events with comments containing the keyword are returned
   */
  comment?: string | undefined;
  /**
   * If specified, only events where all of these labels were added are returned
   */
  addedLabels?: Array<string> | undefined;
  /**
   * If specified, only events where all of these labels were removed are returned
   */
  removedLabels?: Array<string> | undefined;
  /**
   * If specified, only events where all of these tags were added are returned
   */
  addedTags?: Array<string> | undefined;
  /**
   * If specified, only events where all of these tags were removed are returned
   */
  removedTags?: Array<string> | undefined;
  reportTypes?: Array<string> | undefined;
  cursor?: string | undefined;
};

/**
 * OK
 */
export type ToolsOzoneModerationQueryEventsResponseBody = {
  cursor?: string | undefined;
  events: Array<components.ToolsOzoneModerationDefsModEventView>;
};

export type ToolsOzoneModerationQueryEventsResponse = {
  result: ToolsOzoneModerationQueryEventsResponseBody;
};

/** @internal */
export const SubjectType$inboundSchema: z.ZodNativeEnum<typeof SubjectType> = z
  .nativeEnum(SubjectType);

/** @internal */
export const SubjectType$outboundSchema: z.ZodNativeEnum<typeof SubjectType> =
  SubjectType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SubjectType$ {
  /** @deprecated use `SubjectType$inboundSchema` instead. */
  export const inboundSchema = SubjectType$inboundSchema;
  /** @deprecated use `SubjectType$outboundSchema` instead. */
  export const outboundSchema = SubjectType$outboundSchema;
}

/** @internal */
export const ToolsOzoneModerationQueryEventsRequest$inboundSchema: z.ZodType<
  ToolsOzoneModerationQueryEventsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  types: z.array(z.string()).optional(),
  createdBy: z.string().optional(),
  sortDirection: z.string().default("desc"),
  createdAfter: z.string().datetime({ offset: true }).transform(v =>
    new Date(v)
  ).optional(),
  createdBefore: z.string().datetime({ offset: true }).transform(v =>
    new Date(v)
  ).optional(),
  subject: z.string().optional(),
  collections: z.array(z.string()).optional(),
  subjectType: SubjectType$inboundSchema.optional(),
  includeAllUserRecords: z.boolean().optional(),
  limit: z.number().int().default(50),
  hasComment: z.boolean().optional(),
  comment: z.string().optional(),
  addedLabels: z.array(z.string()).optional(),
  removedLabels: z.array(z.string()).optional(),
  addedTags: z.array(z.string()).optional(),
  removedTags: z.array(z.string()).optional(),
  reportTypes: z.array(z.string()).optional(),
  cursor: z.string().optional(),
});

/** @internal */
export type ToolsOzoneModerationQueryEventsRequest$Outbound = {
  types?: Array<string> | undefined;
  createdBy?: string | undefined;
  sortDirection: string;
  createdAfter?: string | undefined;
  createdBefore?: string | undefined;
  subject?: string | undefined;
  collections?: Array<string> | undefined;
  subjectType?: string | undefined;
  includeAllUserRecords?: boolean | undefined;
  limit: number;
  hasComment?: boolean | undefined;
  comment?: string | undefined;
  addedLabels?: Array<string> | undefined;
  removedLabels?: Array<string> | undefined;
  addedTags?: Array<string> | undefined;
  removedTags?: Array<string> | undefined;
  reportTypes?: Array<string> | undefined;
  cursor?: string | undefined;
};

/** @internal */
export const ToolsOzoneModerationQueryEventsRequest$outboundSchema: z.ZodType<
  ToolsOzoneModerationQueryEventsRequest$Outbound,
  z.ZodTypeDef,
  ToolsOzoneModerationQueryEventsRequest
> = z.object({
  types: z.array(z.string()).optional(),
  createdBy: z.string().optional(),
  sortDirection: z.string().default("desc"),
  createdAfter: z.date().transform(v => v.toISOString()).optional(),
  createdBefore: z.date().transform(v => v.toISOString()).optional(),
  subject: z.string().optional(),
  collections: z.array(z.string()).optional(),
  subjectType: SubjectType$outboundSchema.optional(),
  includeAllUserRecords: z.boolean().optional(),
  limit: z.number().int().default(50),
  hasComment: z.boolean().optional(),
  comment: z.string().optional(),
  addedLabels: z.array(z.string()).optional(),
  removedLabels: z.array(z.string()).optional(),
  addedTags: z.array(z.string()).optional(),
  removedTags: z.array(z.string()).optional(),
  reportTypes: z.array(z.string()).optional(),
  cursor: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolsOzoneModerationQueryEventsRequest$ {
  /** @deprecated use `ToolsOzoneModerationQueryEventsRequest$inboundSchema` instead. */
  export const inboundSchema =
    ToolsOzoneModerationQueryEventsRequest$inboundSchema;
  /** @deprecated use `ToolsOzoneModerationQueryEventsRequest$outboundSchema` instead. */
  export const outboundSchema =
    ToolsOzoneModerationQueryEventsRequest$outboundSchema;
  /** @deprecated use `ToolsOzoneModerationQueryEventsRequest$Outbound` instead. */
  export type Outbound = ToolsOzoneModerationQueryEventsRequest$Outbound;
}

export function toolsOzoneModerationQueryEventsRequestToJSON(
  toolsOzoneModerationQueryEventsRequest:
    ToolsOzoneModerationQueryEventsRequest,
): string {
  return JSON.stringify(
    ToolsOzoneModerationQueryEventsRequest$outboundSchema.parse(
      toolsOzoneModerationQueryEventsRequest,
    ),
  );
}

export function toolsOzoneModerationQueryEventsRequestFromJSON(
  jsonString: string,
): SafeParseResult<ToolsOzoneModerationQueryEventsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      ToolsOzoneModerationQueryEventsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ToolsOzoneModerationQueryEventsRequest' from JSON`,
  );
}

/** @internal */
export const ToolsOzoneModerationQueryEventsResponseBody$inboundSchema:
  z.ZodType<
    ToolsOzoneModerationQueryEventsResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    cursor: z.string().optional(),
    events: z.array(
      components.ToolsOzoneModerationDefsModEventView$inboundSchema,
    ),
  });

/** @internal */
export type ToolsOzoneModerationQueryEventsResponseBody$Outbound = {
  cursor?: string | undefined;
  events: Array<components.ToolsOzoneModerationDefsModEventView$Outbound>;
};

/** @internal */
export const ToolsOzoneModerationQueryEventsResponseBody$outboundSchema:
  z.ZodType<
    ToolsOzoneModerationQueryEventsResponseBody$Outbound,
    z.ZodTypeDef,
    ToolsOzoneModerationQueryEventsResponseBody
  > = z.object({
    cursor: z.string().optional(),
    events: z.array(
      components.ToolsOzoneModerationDefsModEventView$outboundSchema,
    ),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolsOzoneModerationQueryEventsResponseBody$ {
  /** @deprecated use `ToolsOzoneModerationQueryEventsResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ToolsOzoneModerationQueryEventsResponseBody$inboundSchema;
  /** @deprecated use `ToolsOzoneModerationQueryEventsResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ToolsOzoneModerationQueryEventsResponseBody$outboundSchema;
  /** @deprecated use `ToolsOzoneModerationQueryEventsResponseBody$Outbound` instead. */
  export type Outbound = ToolsOzoneModerationQueryEventsResponseBody$Outbound;
}

export function toolsOzoneModerationQueryEventsResponseBodyToJSON(
  toolsOzoneModerationQueryEventsResponseBody:
    ToolsOzoneModerationQueryEventsResponseBody,
): string {
  return JSON.stringify(
    ToolsOzoneModerationQueryEventsResponseBody$outboundSchema.parse(
      toolsOzoneModerationQueryEventsResponseBody,
    ),
  );
}

export function toolsOzoneModerationQueryEventsResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  ToolsOzoneModerationQueryEventsResponseBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      ToolsOzoneModerationQueryEventsResponseBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'ToolsOzoneModerationQueryEventsResponseBody' from JSON`,
  );
}

/** @internal */
export const ToolsOzoneModerationQueryEventsResponse$inboundSchema: z.ZodType<
  ToolsOzoneModerationQueryEventsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: z.lazy(() =>
    ToolsOzoneModerationQueryEventsResponseBody$inboundSchema
  ),
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type ToolsOzoneModerationQueryEventsResponse$Outbound = {
  Result: ToolsOzoneModerationQueryEventsResponseBody$Outbound;
};

/** @internal */
export const ToolsOzoneModerationQueryEventsResponse$outboundSchema: z.ZodType<
  ToolsOzoneModerationQueryEventsResponse$Outbound,
  z.ZodTypeDef,
  ToolsOzoneModerationQueryEventsResponse
> = z.object({
  result: z.lazy(() =>
    ToolsOzoneModerationQueryEventsResponseBody$outboundSchema
  ),
}).transform((v) => {
  return remap$(v, {
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolsOzoneModerationQueryEventsResponse$ {
  /** @deprecated use `ToolsOzoneModerationQueryEventsResponse$inboundSchema` instead. */
  export const inboundSchema =
    ToolsOzoneModerationQueryEventsResponse$inboundSchema;
  /** @deprecated use `ToolsOzoneModerationQueryEventsResponse$outboundSchema` instead. */
  export const outboundSchema =
    ToolsOzoneModerationQueryEventsResponse$outboundSchema;
  /** @deprecated use `ToolsOzoneModerationQueryEventsResponse$Outbound` instead. */
  export type Outbound = ToolsOzoneModerationQueryEventsResponse$Outbound;
}

export function toolsOzoneModerationQueryEventsResponseToJSON(
  toolsOzoneModerationQueryEventsResponse:
    ToolsOzoneModerationQueryEventsResponse,
): string {
  return JSON.stringify(
    ToolsOzoneModerationQueryEventsResponse$outboundSchema.parse(
      toolsOzoneModerationQueryEventsResponse,
    ),
  );
}

export function toolsOzoneModerationQueryEventsResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  ToolsOzoneModerationQueryEventsResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      ToolsOzoneModerationQueryEventsResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'ToolsOzoneModerationQueryEventsResponse' from JSON`,
  );
}
