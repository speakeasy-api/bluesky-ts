/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ComAtprotoAdminDefsRepoRef,
  ComAtprotoAdminDefsRepoRef$inboundSchema,
  ComAtprotoAdminDefsRepoRef$Outbound,
  ComAtprotoAdminDefsRepoRef$outboundSchema,
} from "./comatprotoadmindefsreporef.js";
import {
  ComAtprotoRepoStrongRef,
  ComAtprotoRepoStrongRef$inboundSchema,
  ComAtprotoRepoStrongRef$Outbound,
  ComAtprotoRepoStrongRef$outboundSchema,
} from "./comatprotorepostrongref.js";
import {
  ToolsOzoneModerationDefsAccountHosting,
  ToolsOzoneModerationDefsAccountHosting$inboundSchema,
  ToolsOzoneModerationDefsAccountHosting$Outbound,
  ToolsOzoneModerationDefsAccountHosting$outboundSchema,
} from "./toolsozonemoderationdefsaccounthosting.js";
import {
  ToolsOzoneModerationDefsRecordHosting,
  ToolsOzoneModerationDefsRecordHosting$inboundSchema,
  ToolsOzoneModerationDefsRecordHosting$Outbound,
  ToolsOzoneModerationDefsRecordHosting$outboundSchema,
} from "./toolsozonemoderationdefsrecordhosting.js";
import {
  ToolsOzoneModerationDefsSubjectReviewState,
  ToolsOzoneModerationDefsSubjectReviewState$inboundSchema,
  ToolsOzoneModerationDefsSubjectReviewState$outboundSchema,
} from "./toolsozonemoderationdefssubjectreviewstate.js";

export type ToolsOzoneModerationDefsSubjectStatusViewSubject =
  | ComAtprotoAdminDefsRepoRef
  | ComAtprotoRepoStrongRef;

export type Hosting =
  | ToolsOzoneModerationDefsRecordHosting
  | ToolsOzoneModerationDefsAccountHosting;

export type ToolsOzoneModerationDefsSubjectStatusView = {
  id: number;
  subject: ComAtprotoAdminDefsRepoRef | ComAtprotoRepoStrongRef;
  hosting?:
    | ToolsOzoneModerationDefsRecordHosting
    | ToolsOzoneModerationDefsAccountHosting
    | undefined;
  subjectBlobCids?: Array<string> | undefined;
  subjectRepoHandle?: string | undefined;
  /**
   * Timestamp referencing when the last update was made to the moderation status of the subject
   */
  updatedAt: Date;
  /**
   * Timestamp referencing the first moderation status impacting event was emitted on the subject
   */
  createdAt: Date;
  reviewState: ToolsOzoneModerationDefsSubjectReviewState;
  /**
   * Sticky comment on the subject.
   */
  comment?: string | undefined;
  muteUntil?: Date | undefined;
  muteReportingUntil?: Date | undefined;
  lastReviewedBy?: string | undefined;
  lastReviewedAt?: Date | undefined;
  lastReportedAt?: Date | undefined;
  /**
   * Timestamp referencing when the author of the subject appealed a moderation action
   */
  lastAppealedAt?: Date | undefined;
  takendown?: boolean | undefined;
  /**
   * True indicates that the a previously taken moderator action was appealed against, by the author of the content. False indicates last appeal was resolved by moderators.
   */
  appealed?: boolean | undefined;
  suspendUntil?: Date | undefined;
  tags?: Array<string> | undefined;
};

/** @internal */
export const ToolsOzoneModerationDefsSubjectStatusViewSubject$inboundSchema:
  z.ZodType<
    ToolsOzoneModerationDefsSubjectStatusViewSubject,
    z.ZodTypeDef,
    unknown
  > = z.union([
    ComAtprotoAdminDefsRepoRef$inboundSchema,
    ComAtprotoRepoStrongRef$inboundSchema,
  ]);

/** @internal */
export type ToolsOzoneModerationDefsSubjectStatusViewSubject$Outbound =
  | ComAtprotoAdminDefsRepoRef$Outbound
  | ComAtprotoRepoStrongRef$Outbound;

/** @internal */
export const ToolsOzoneModerationDefsSubjectStatusViewSubject$outboundSchema:
  z.ZodType<
    ToolsOzoneModerationDefsSubjectStatusViewSubject$Outbound,
    z.ZodTypeDef,
    ToolsOzoneModerationDefsSubjectStatusViewSubject
  > = z.union([
    ComAtprotoAdminDefsRepoRef$outboundSchema,
    ComAtprotoRepoStrongRef$outboundSchema,
  ]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolsOzoneModerationDefsSubjectStatusViewSubject$ {
  /** @deprecated use `ToolsOzoneModerationDefsSubjectStatusViewSubject$inboundSchema` instead. */
  export const inboundSchema =
    ToolsOzoneModerationDefsSubjectStatusViewSubject$inboundSchema;
  /** @deprecated use `ToolsOzoneModerationDefsSubjectStatusViewSubject$outboundSchema` instead. */
  export const outboundSchema =
    ToolsOzoneModerationDefsSubjectStatusViewSubject$outboundSchema;
  /** @deprecated use `ToolsOzoneModerationDefsSubjectStatusViewSubject$Outbound` instead. */
  export type Outbound =
    ToolsOzoneModerationDefsSubjectStatusViewSubject$Outbound;
}

export function toolsOzoneModerationDefsSubjectStatusViewSubjectToJSON(
  toolsOzoneModerationDefsSubjectStatusViewSubject:
    ToolsOzoneModerationDefsSubjectStatusViewSubject,
): string {
  return JSON.stringify(
    ToolsOzoneModerationDefsSubjectStatusViewSubject$outboundSchema.parse(
      toolsOzoneModerationDefsSubjectStatusViewSubject,
    ),
  );
}

export function toolsOzoneModerationDefsSubjectStatusViewSubjectFromJSON(
  jsonString: string,
): SafeParseResult<
  ToolsOzoneModerationDefsSubjectStatusViewSubject,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      ToolsOzoneModerationDefsSubjectStatusViewSubject$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'ToolsOzoneModerationDefsSubjectStatusViewSubject' from JSON`,
  );
}

/** @internal */
export const Hosting$inboundSchema: z.ZodType<Hosting, z.ZodTypeDef, unknown> =
  z.union([
    ToolsOzoneModerationDefsRecordHosting$inboundSchema,
    ToolsOzoneModerationDefsAccountHosting$inboundSchema,
  ]);

/** @internal */
export type Hosting$Outbound =
  | ToolsOzoneModerationDefsRecordHosting$Outbound
  | ToolsOzoneModerationDefsAccountHosting$Outbound;

/** @internal */
export const Hosting$outboundSchema: z.ZodType<
  Hosting$Outbound,
  z.ZodTypeDef,
  Hosting
> = z.union([
  ToolsOzoneModerationDefsRecordHosting$outboundSchema,
  ToolsOzoneModerationDefsAccountHosting$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Hosting$ {
  /** @deprecated use `Hosting$inboundSchema` instead. */
  export const inboundSchema = Hosting$inboundSchema;
  /** @deprecated use `Hosting$outboundSchema` instead. */
  export const outboundSchema = Hosting$outboundSchema;
  /** @deprecated use `Hosting$Outbound` instead. */
  export type Outbound = Hosting$Outbound;
}

export function hostingToJSON(hosting: Hosting): string {
  return JSON.stringify(Hosting$outboundSchema.parse(hosting));
}

export function hostingFromJSON(
  jsonString: string,
): SafeParseResult<Hosting, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Hosting$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Hosting' from JSON`,
  );
}

/** @internal */
export const ToolsOzoneModerationDefsSubjectStatusView$inboundSchema: z.ZodType<
  ToolsOzoneModerationDefsSubjectStatusView,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.number().int(),
  subject: z.union([
    ComAtprotoAdminDefsRepoRef$inboundSchema,
    ComAtprotoRepoStrongRef$inboundSchema,
  ]),
  hosting: z.union([
    ToolsOzoneModerationDefsRecordHosting$inboundSchema,
    ToolsOzoneModerationDefsAccountHosting$inboundSchema,
  ]).optional(),
  subjectBlobCids: z.array(z.string()).optional(),
  subjectRepoHandle: z.string().optional(),
  updatedAt: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  createdAt: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  reviewState: ToolsOzoneModerationDefsSubjectReviewState$inboundSchema,
  comment: z.string().optional(),
  muteUntil: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  muteReportingUntil: z.string().datetime({ offset: true }).transform(v =>
    new Date(v)
  ).optional(),
  lastReviewedBy: z.string().optional(),
  lastReviewedAt: z.string().datetime({ offset: true }).transform(v =>
    new Date(v)
  ).optional(),
  lastReportedAt: z.string().datetime({ offset: true }).transform(v =>
    new Date(v)
  ).optional(),
  lastAppealedAt: z.string().datetime({ offset: true }).transform(v =>
    new Date(v)
  ).optional(),
  takendown: z.boolean().optional(),
  appealed: z.boolean().optional(),
  suspendUntil: z.string().datetime({ offset: true }).transform(v =>
    new Date(v)
  ).optional(),
  tags: z.array(z.string()).optional(),
});

/** @internal */
export type ToolsOzoneModerationDefsSubjectStatusView$Outbound = {
  id: number;
  subject:
    | ComAtprotoAdminDefsRepoRef$Outbound
    | ComAtprotoRepoStrongRef$Outbound;
  hosting?:
    | ToolsOzoneModerationDefsRecordHosting$Outbound
    | ToolsOzoneModerationDefsAccountHosting$Outbound
    | undefined;
  subjectBlobCids?: Array<string> | undefined;
  subjectRepoHandle?: string | undefined;
  updatedAt: string;
  createdAt: string;
  reviewState: string;
  comment?: string | undefined;
  muteUntil?: string | undefined;
  muteReportingUntil?: string | undefined;
  lastReviewedBy?: string | undefined;
  lastReviewedAt?: string | undefined;
  lastReportedAt?: string | undefined;
  lastAppealedAt?: string | undefined;
  takendown?: boolean | undefined;
  appealed?: boolean | undefined;
  suspendUntil?: string | undefined;
  tags?: Array<string> | undefined;
};

/** @internal */
export const ToolsOzoneModerationDefsSubjectStatusView$outboundSchema:
  z.ZodType<
    ToolsOzoneModerationDefsSubjectStatusView$Outbound,
    z.ZodTypeDef,
    ToolsOzoneModerationDefsSubjectStatusView
  > = z.object({
    id: z.number().int(),
    subject: z.union([
      ComAtprotoAdminDefsRepoRef$outboundSchema,
      ComAtprotoRepoStrongRef$outboundSchema,
    ]),
    hosting: z.union([
      ToolsOzoneModerationDefsRecordHosting$outboundSchema,
      ToolsOzoneModerationDefsAccountHosting$outboundSchema,
    ]).optional(),
    subjectBlobCids: z.array(z.string()).optional(),
    subjectRepoHandle: z.string().optional(),
    updatedAt: z.date().transform(v => v.toISOString()),
    createdAt: z.date().transform(v => v.toISOString()),
    reviewState: ToolsOzoneModerationDefsSubjectReviewState$outboundSchema,
    comment: z.string().optional(),
    muteUntil: z.date().transform(v => v.toISOString()).optional(),
    muteReportingUntil: z.date().transform(v => v.toISOString()).optional(),
    lastReviewedBy: z.string().optional(),
    lastReviewedAt: z.date().transform(v => v.toISOString()).optional(),
    lastReportedAt: z.date().transform(v => v.toISOString()).optional(),
    lastAppealedAt: z.date().transform(v => v.toISOString()).optional(),
    takendown: z.boolean().optional(),
    appealed: z.boolean().optional(),
    suspendUntil: z.date().transform(v => v.toISOString()).optional(),
    tags: z.array(z.string()).optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolsOzoneModerationDefsSubjectStatusView$ {
  /** @deprecated use `ToolsOzoneModerationDefsSubjectStatusView$inboundSchema` instead. */
  export const inboundSchema =
    ToolsOzoneModerationDefsSubjectStatusView$inboundSchema;
  /** @deprecated use `ToolsOzoneModerationDefsSubjectStatusView$outboundSchema` instead. */
  export const outboundSchema =
    ToolsOzoneModerationDefsSubjectStatusView$outboundSchema;
  /** @deprecated use `ToolsOzoneModerationDefsSubjectStatusView$Outbound` instead. */
  export type Outbound = ToolsOzoneModerationDefsSubjectStatusView$Outbound;
}

export function toolsOzoneModerationDefsSubjectStatusViewToJSON(
  toolsOzoneModerationDefsSubjectStatusView:
    ToolsOzoneModerationDefsSubjectStatusView,
): string {
  return JSON.stringify(
    ToolsOzoneModerationDefsSubjectStatusView$outboundSchema.parse(
      toolsOzoneModerationDefsSubjectStatusView,
    ),
  );
}

export function toolsOzoneModerationDefsSubjectStatusViewFromJSON(
  jsonString: string,
): SafeParseResult<
  ToolsOzoneModerationDefsSubjectStatusView,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      ToolsOzoneModerationDefsSubjectStatusView$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'ToolsOzoneModerationDefsSubjectStatusView' from JSON`,
  );
}
