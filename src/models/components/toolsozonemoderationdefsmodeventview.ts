/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ChatBskyConvoDefsMessageRef,
  ChatBskyConvoDefsMessageRef$inboundSchema,
  ChatBskyConvoDefsMessageRef$Outbound,
  ChatBskyConvoDefsMessageRef$outboundSchema,
} from "./chatbskyconvodefsmessageref.js";
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
  ToolsOzoneModerationDefsAccountEvent,
  ToolsOzoneModerationDefsAccountEvent$inboundSchema,
  ToolsOzoneModerationDefsAccountEvent$Outbound,
  ToolsOzoneModerationDefsAccountEvent$outboundSchema,
} from "./toolsozonemoderationdefsaccountevent.js";
import {
  ToolsOzoneModerationDefsIdentityEvent,
  ToolsOzoneModerationDefsIdentityEvent$inboundSchema,
  ToolsOzoneModerationDefsIdentityEvent$Outbound,
  ToolsOzoneModerationDefsIdentityEvent$outboundSchema,
} from "./toolsozonemoderationdefsidentityevent.js";
import {
  ToolsOzoneModerationDefsModEventAcknowledge,
  ToolsOzoneModerationDefsModEventAcknowledge$inboundSchema,
  ToolsOzoneModerationDefsModEventAcknowledge$Outbound,
  ToolsOzoneModerationDefsModEventAcknowledge$outboundSchema,
} from "./toolsozonemoderationdefsmodeventacknowledge.js";
import {
  ToolsOzoneModerationDefsModEventComment,
  ToolsOzoneModerationDefsModEventComment$inboundSchema,
  ToolsOzoneModerationDefsModEventComment$Outbound,
  ToolsOzoneModerationDefsModEventComment$outboundSchema,
} from "./toolsozonemoderationdefsmodeventcomment.js";
import {
  ToolsOzoneModerationDefsModEventDivert,
  ToolsOzoneModerationDefsModEventDivert$inboundSchema,
  ToolsOzoneModerationDefsModEventDivert$Outbound,
  ToolsOzoneModerationDefsModEventDivert$outboundSchema,
} from "./toolsozonemoderationdefsmodeventdivert.js";
import {
  ToolsOzoneModerationDefsModEventEmail,
  ToolsOzoneModerationDefsModEventEmail$inboundSchema,
  ToolsOzoneModerationDefsModEventEmail$Outbound,
  ToolsOzoneModerationDefsModEventEmail$outboundSchema,
} from "./toolsozonemoderationdefsmodeventemail.js";
import {
  ToolsOzoneModerationDefsModEventEscalate,
  ToolsOzoneModerationDefsModEventEscalate$inboundSchema,
  ToolsOzoneModerationDefsModEventEscalate$Outbound,
  ToolsOzoneModerationDefsModEventEscalate$outboundSchema,
} from "./toolsozonemoderationdefsmodeventescalate.js";
import {
  ToolsOzoneModerationDefsModEventLabel,
  ToolsOzoneModerationDefsModEventLabel$inboundSchema,
  ToolsOzoneModerationDefsModEventLabel$Outbound,
  ToolsOzoneModerationDefsModEventLabel$outboundSchema,
} from "./toolsozonemoderationdefsmodeventlabel.js";
import {
  ToolsOzoneModerationDefsModEventMute,
  ToolsOzoneModerationDefsModEventMute$inboundSchema,
  ToolsOzoneModerationDefsModEventMute$Outbound,
  ToolsOzoneModerationDefsModEventMute$outboundSchema,
} from "./toolsozonemoderationdefsmodeventmute.js";
import {
  ToolsOzoneModerationDefsModEventMuteReporter,
  ToolsOzoneModerationDefsModEventMuteReporter$inboundSchema,
  ToolsOzoneModerationDefsModEventMuteReporter$Outbound,
  ToolsOzoneModerationDefsModEventMuteReporter$outboundSchema,
} from "./toolsozonemoderationdefsmodeventmutereporter.js";
import {
  ToolsOzoneModerationDefsModEventReport,
  ToolsOzoneModerationDefsModEventReport$inboundSchema,
  ToolsOzoneModerationDefsModEventReport$Outbound,
  ToolsOzoneModerationDefsModEventReport$outboundSchema,
} from "./toolsozonemoderationdefsmodeventreport.js";
import {
  ToolsOzoneModerationDefsModEventResolveAppeal,
  ToolsOzoneModerationDefsModEventResolveAppeal$inboundSchema,
  ToolsOzoneModerationDefsModEventResolveAppeal$Outbound,
  ToolsOzoneModerationDefsModEventResolveAppeal$outboundSchema,
} from "./toolsozonemoderationdefsmodeventresolveappeal.js";
import {
  ToolsOzoneModerationDefsModEventReverseTakedown,
  ToolsOzoneModerationDefsModEventReverseTakedown$inboundSchema,
  ToolsOzoneModerationDefsModEventReverseTakedown$Outbound,
  ToolsOzoneModerationDefsModEventReverseTakedown$outboundSchema,
} from "./toolsozonemoderationdefsmodeventreversetakedown.js";
import {
  ToolsOzoneModerationDefsModEventTag,
  ToolsOzoneModerationDefsModEventTag$inboundSchema,
  ToolsOzoneModerationDefsModEventTag$Outbound,
  ToolsOzoneModerationDefsModEventTag$outboundSchema,
} from "./toolsozonemoderationdefsmodeventtag.js";
import {
  ToolsOzoneModerationDefsModEventTakedown,
  ToolsOzoneModerationDefsModEventTakedown$inboundSchema,
  ToolsOzoneModerationDefsModEventTakedown$Outbound,
  ToolsOzoneModerationDefsModEventTakedown$outboundSchema,
} from "./toolsozonemoderationdefsmodeventtakedown.js";
import {
  ToolsOzoneModerationDefsModEventUnmute,
  ToolsOzoneModerationDefsModEventUnmute$inboundSchema,
  ToolsOzoneModerationDefsModEventUnmute$Outbound,
  ToolsOzoneModerationDefsModEventUnmute$outboundSchema,
} from "./toolsozonemoderationdefsmodeventunmute.js";
import {
  ToolsOzoneModerationDefsModEventUnmuteReporter,
  ToolsOzoneModerationDefsModEventUnmuteReporter$inboundSchema,
  ToolsOzoneModerationDefsModEventUnmuteReporter$Outbound,
  ToolsOzoneModerationDefsModEventUnmuteReporter$outboundSchema,
} from "./toolsozonemoderationdefsmodeventunmutereporter.js";
import {
  ToolsOzoneModerationDefsRecordEvent,
  ToolsOzoneModerationDefsRecordEvent$inboundSchema,
  ToolsOzoneModerationDefsRecordEvent$Outbound,
  ToolsOzoneModerationDefsRecordEvent$outboundSchema,
} from "./toolsozonemoderationdefsrecordevent.js";

export type ToolsOzoneModerationDefsModEventViewEvent =
  | ToolsOzoneModerationDefsModEventReverseTakedown
  | ToolsOzoneModerationDefsModEventAcknowledge
  | ToolsOzoneModerationDefsModEventEscalate
  | ToolsOzoneModerationDefsModEventUnmute
  | ToolsOzoneModerationDefsModEventUnmuteReporter
  | ToolsOzoneModerationDefsModEventResolveAppeal
  | ToolsOzoneModerationDefsModEventDivert
  | ToolsOzoneModerationDefsModEventComment
  | ToolsOzoneModerationDefsModEventMute
  | ToolsOzoneModerationDefsModEventMuteReporter
  | ToolsOzoneModerationDefsModEventTakedown
  | ToolsOzoneModerationDefsModEventReport
  | ToolsOzoneModerationDefsModEventLabel
  | ToolsOzoneModerationDefsModEventEmail
  | ToolsOzoneModerationDefsModEventTag
  | ToolsOzoneModerationDefsAccountEvent
  | ToolsOzoneModerationDefsRecordEvent
  | ToolsOzoneModerationDefsIdentityEvent;

export type Subject =
  | ComAtprotoAdminDefsRepoRef
  | ComAtprotoRepoStrongRef
  | ChatBskyConvoDefsMessageRef;

export type ToolsOzoneModerationDefsModEventView = {
  id: number;
  event:
    | ToolsOzoneModerationDefsModEventReverseTakedown
    | ToolsOzoneModerationDefsModEventAcknowledge
    | ToolsOzoneModerationDefsModEventEscalate
    | ToolsOzoneModerationDefsModEventUnmute
    | ToolsOzoneModerationDefsModEventUnmuteReporter
    | ToolsOzoneModerationDefsModEventResolveAppeal
    | ToolsOzoneModerationDefsModEventDivert
    | ToolsOzoneModerationDefsModEventComment
    | ToolsOzoneModerationDefsModEventMute
    | ToolsOzoneModerationDefsModEventMuteReporter
    | ToolsOzoneModerationDefsModEventTakedown
    | ToolsOzoneModerationDefsModEventReport
    | ToolsOzoneModerationDefsModEventLabel
    | ToolsOzoneModerationDefsModEventEmail
    | ToolsOzoneModerationDefsModEventTag
    | ToolsOzoneModerationDefsAccountEvent
    | ToolsOzoneModerationDefsRecordEvent
    | ToolsOzoneModerationDefsIdentityEvent;
  subject:
    | ComAtprotoAdminDefsRepoRef
    | ComAtprotoRepoStrongRef
    | ChatBskyConvoDefsMessageRef;
  subjectBlobCids: Array<string>;
  createdBy: string;
  createdAt: Date;
  creatorHandle?: string | undefined;
  subjectHandle?: string | undefined;
};

/** @internal */
export const ToolsOzoneModerationDefsModEventViewEvent$inboundSchema: z.ZodType<
  ToolsOzoneModerationDefsModEventViewEvent,
  z.ZodTypeDef,
  unknown
> = z.union([
  ToolsOzoneModerationDefsModEventReverseTakedown$inboundSchema,
  ToolsOzoneModerationDefsModEventAcknowledge$inboundSchema,
  ToolsOzoneModerationDefsModEventEscalate$inboundSchema,
  ToolsOzoneModerationDefsModEventUnmute$inboundSchema,
  ToolsOzoneModerationDefsModEventUnmuteReporter$inboundSchema,
  ToolsOzoneModerationDefsModEventResolveAppeal$inboundSchema,
  ToolsOzoneModerationDefsModEventDivert$inboundSchema,
  ToolsOzoneModerationDefsModEventComment$inboundSchema,
  ToolsOzoneModerationDefsModEventMute$inboundSchema,
  ToolsOzoneModerationDefsModEventMuteReporter$inboundSchema,
  ToolsOzoneModerationDefsModEventTakedown$inboundSchema,
  ToolsOzoneModerationDefsModEventReport$inboundSchema,
  ToolsOzoneModerationDefsModEventLabel$inboundSchema,
  ToolsOzoneModerationDefsModEventEmail$inboundSchema,
  ToolsOzoneModerationDefsModEventTag$inboundSchema,
  ToolsOzoneModerationDefsAccountEvent$inboundSchema,
  ToolsOzoneModerationDefsRecordEvent$inboundSchema,
  ToolsOzoneModerationDefsIdentityEvent$inboundSchema,
]);

/** @internal */
export type ToolsOzoneModerationDefsModEventViewEvent$Outbound =
  | ToolsOzoneModerationDefsModEventReverseTakedown$Outbound
  | ToolsOzoneModerationDefsModEventAcknowledge$Outbound
  | ToolsOzoneModerationDefsModEventEscalate$Outbound
  | ToolsOzoneModerationDefsModEventUnmute$Outbound
  | ToolsOzoneModerationDefsModEventUnmuteReporter$Outbound
  | ToolsOzoneModerationDefsModEventResolveAppeal$Outbound
  | ToolsOzoneModerationDefsModEventDivert$Outbound
  | ToolsOzoneModerationDefsModEventComment$Outbound
  | ToolsOzoneModerationDefsModEventMute$Outbound
  | ToolsOzoneModerationDefsModEventMuteReporter$Outbound
  | ToolsOzoneModerationDefsModEventTakedown$Outbound
  | ToolsOzoneModerationDefsModEventReport$Outbound
  | ToolsOzoneModerationDefsModEventLabel$Outbound
  | ToolsOzoneModerationDefsModEventEmail$Outbound
  | ToolsOzoneModerationDefsModEventTag$Outbound
  | ToolsOzoneModerationDefsAccountEvent$Outbound
  | ToolsOzoneModerationDefsRecordEvent$Outbound
  | ToolsOzoneModerationDefsIdentityEvent$Outbound;

/** @internal */
export const ToolsOzoneModerationDefsModEventViewEvent$outboundSchema:
  z.ZodType<
    ToolsOzoneModerationDefsModEventViewEvent$Outbound,
    z.ZodTypeDef,
    ToolsOzoneModerationDefsModEventViewEvent
  > = z.union([
    ToolsOzoneModerationDefsModEventReverseTakedown$outboundSchema,
    ToolsOzoneModerationDefsModEventAcknowledge$outboundSchema,
    ToolsOzoneModerationDefsModEventEscalate$outboundSchema,
    ToolsOzoneModerationDefsModEventUnmute$outboundSchema,
    ToolsOzoneModerationDefsModEventUnmuteReporter$outboundSchema,
    ToolsOzoneModerationDefsModEventResolveAppeal$outboundSchema,
    ToolsOzoneModerationDefsModEventDivert$outboundSchema,
    ToolsOzoneModerationDefsModEventComment$outboundSchema,
    ToolsOzoneModerationDefsModEventMute$outboundSchema,
    ToolsOzoneModerationDefsModEventMuteReporter$outboundSchema,
    ToolsOzoneModerationDefsModEventTakedown$outboundSchema,
    ToolsOzoneModerationDefsModEventReport$outboundSchema,
    ToolsOzoneModerationDefsModEventLabel$outboundSchema,
    ToolsOzoneModerationDefsModEventEmail$outboundSchema,
    ToolsOzoneModerationDefsModEventTag$outboundSchema,
    ToolsOzoneModerationDefsAccountEvent$outboundSchema,
    ToolsOzoneModerationDefsRecordEvent$outboundSchema,
    ToolsOzoneModerationDefsIdentityEvent$outboundSchema,
  ]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolsOzoneModerationDefsModEventViewEvent$ {
  /** @deprecated use `ToolsOzoneModerationDefsModEventViewEvent$inboundSchema` instead. */
  export const inboundSchema =
    ToolsOzoneModerationDefsModEventViewEvent$inboundSchema;
  /** @deprecated use `ToolsOzoneModerationDefsModEventViewEvent$outboundSchema` instead. */
  export const outboundSchema =
    ToolsOzoneModerationDefsModEventViewEvent$outboundSchema;
  /** @deprecated use `ToolsOzoneModerationDefsModEventViewEvent$Outbound` instead. */
  export type Outbound = ToolsOzoneModerationDefsModEventViewEvent$Outbound;
}

export function toolsOzoneModerationDefsModEventViewEventToJSON(
  toolsOzoneModerationDefsModEventViewEvent:
    ToolsOzoneModerationDefsModEventViewEvent,
): string {
  return JSON.stringify(
    ToolsOzoneModerationDefsModEventViewEvent$outboundSchema.parse(
      toolsOzoneModerationDefsModEventViewEvent,
    ),
  );
}

export function toolsOzoneModerationDefsModEventViewEventFromJSON(
  jsonString: string,
): SafeParseResult<
  ToolsOzoneModerationDefsModEventViewEvent,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      ToolsOzoneModerationDefsModEventViewEvent$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'ToolsOzoneModerationDefsModEventViewEvent' from JSON`,
  );
}

/** @internal */
export const Subject$inboundSchema: z.ZodType<Subject, z.ZodTypeDef, unknown> =
  z.union([
    ComAtprotoAdminDefsRepoRef$inboundSchema,
    ComAtprotoRepoStrongRef$inboundSchema,
    ChatBskyConvoDefsMessageRef$inboundSchema,
  ]);

/** @internal */
export type Subject$Outbound =
  | ComAtprotoAdminDefsRepoRef$Outbound
  | ComAtprotoRepoStrongRef$Outbound
  | ChatBskyConvoDefsMessageRef$Outbound;

/** @internal */
export const Subject$outboundSchema: z.ZodType<
  Subject$Outbound,
  z.ZodTypeDef,
  Subject
> = z.union([
  ComAtprotoAdminDefsRepoRef$outboundSchema,
  ComAtprotoRepoStrongRef$outboundSchema,
  ChatBskyConvoDefsMessageRef$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Subject$ {
  /** @deprecated use `Subject$inboundSchema` instead. */
  export const inboundSchema = Subject$inboundSchema;
  /** @deprecated use `Subject$outboundSchema` instead. */
  export const outboundSchema = Subject$outboundSchema;
  /** @deprecated use `Subject$Outbound` instead. */
  export type Outbound = Subject$Outbound;
}

export function subjectToJSON(subject: Subject): string {
  return JSON.stringify(Subject$outboundSchema.parse(subject));
}

export function subjectFromJSON(
  jsonString: string,
): SafeParseResult<Subject, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Subject$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Subject' from JSON`,
  );
}

/** @internal */
export const ToolsOzoneModerationDefsModEventView$inboundSchema: z.ZodType<
  ToolsOzoneModerationDefsModEventView,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.number().int(),
  event: z.union([
    ToolsOzoneModerationDefsModEventReverseTakedown$inboundSchema,
    ToolsOzoneModerationDefsModEventAcknowledge$inboundSchema,
    ToolsOzoneModerationDefsModEventEscalate$inboundSchema,
    ToolsOzoneModerationDefsModEventUnmute$inboundSchema,
    ToolsOzoneModerationDefsModEventUnmuteReporter$inboundSchema,
    ToolsOzoneModerationDefsModEventResolveAppeal$inboundSchema,
    ToolsOzoneModerationDefsModEventDivert$inboundSchema,
    ToolsOzoneModerationDefsModEventComment$inboundSchema,
    ToolsOzoneModerationDefsModEventMute$inboundSchema,
    ToolsOzoneModerationDefsModEventMuteReporter$inboundSchema,
    ToolsOzoneModerationDefsModEventTakedown$inboundSchema,
    ToolsOzoneModerationDefsModEventReport$inboundSchema,
    ToolsOzoneModerationDefsModEventLabel$inboundSchema,
    ToolsOzoneModerationDefsModEventEmail$inboundSchema,
    ToolsOzoneModerationDefsModEventTag$inboundSchema,
    ToolsOzoneModerationDefsAccountEvent$inboundSchema,
    ToolsOzoneModerationDefsRecordEvent$inboundSchema,
    ToolsOzoneModerationDefsIdentityEvent$inboundSchema,
  ]),
  subject: z.union([
    ComAtprotoAdminDefsRepoRef$inboundSchema,
    ComAtprotoRepoStrongRef$inboundSchema,
    ChatBskyConvoDefsMessageRef$inboundSchema,
  ]),
  subjectBlobCids: z.array(z.string()),
  createdBy: z.string(),
  createdAt: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  creatorHandle: z.string().optional(),
  subjectHandle: z.string().optional(),
});

/** @internal */
export type ToolsOzoneModerationDefsModEventView$Outbound = {
  id: number;
  event:
    | ToolsOzoneModerationDefsModEventReverseTakedown$Outbound
    | ToolsOzoneModerationDefsModEventAcknowledge$Outbound
    | ToolsOzoneModerationDefsModEventEscalate$Outbound
    | ToolsOzoneModerationDefsModEventUnmute$Outbound
    | ToolsOzoneModerationDefsModEventUnmuteReporter$Outbound
    | ToolsOzoneModerationDefsModEventResolveAppeal$Outbound
    | ToolsOzoneModerationDefsModEventDivert$Outbound
    | ToolsOzoneModerationDefsModEventComment$Outbound
    | ToolsOzoneModerationDefsModEventMute$Outbound
    | ToolsOzoneModerationDefsModEventMuteReporter$Outbound
    | ToolsOzoneModerationDefsModEventTakedown$Outbound
    | ToolsOzoneModerationDefsModEventReport$Outbound
    | ToolsOzoneModerationDefsModEventLabel$Outbound
    | ToolsOzoneModerationDefsModEventEmail$Outbound
    | ToolsOzoneModerationDefsModEventTag$Outbound
    | ToolsOzoneModerationDefsAccountEvent$Outbound
    | ToolsOzoneModerationDefsRecordEvent$Outbound
    | ToolsOzoneModerationDefsIdentityEvent$Outbound;
  subject:
    | ComAtprotoAdminDefsRepoRef$Outbound
    | ComAtprotoRepoStrongRef$Outbound
    | ChatBskyConvoDefsMessageRef$Outbound;
  subjectBlobCids: Array<string>;
  createdBy: string;
  createdAt: string;
  creatorHandle?: string | undefined;
  subjectHandle?: string | undefined;
};

/** @internal */
export const ToolsOzoneModerationDefsModEventView$outboundSchema: z.ZodType<
  ToolsOzoneModerationDefsModEventView$Outbound,
  z.ZodTypeDef,
  ToolsOzoneModerationDefsModEventView
> = z.object({
  id: z.number().int(),
  event: z.union([
    ToolsOzoneModerationDefsModEventReverseTakedown$outboundSchema,
    ToolsOzoneModerationDefsModEventAcknowledge$outboundSchema,
    ToolsOzoneModerationDefsModEventEscalate$outboundSchema,
    ToolsOzoneModerationDefsModEventUnmute$outboundSchema,
    ToolsOzoneModerationDefsModEventUnmuteReporter$outboundSchema,
    ToolsOzoneModerationDefsModEventResolveAppeal$outboundSchema,
    ToolsOzoneModerationDefsModEventDivert$outboundSchema,
    ToolsOzoneModerationDefsModEventComment$outboundSchema,
    ToolsOzoneModerationDefsModEventMute$outboundSchema,
    ToolsOzoneModerationDefsModEventMuteReporter$outboundSchema,
    ToolsOzoneModerationDefsModEventTakedown$outboundSchema,
    ToolsOzoneModerationDefsModEventReport$outboundSchema,
    ToolsOzoneModerationDefsModEventLabel$outboundSchema,
    ToolsOzoneModerationDefsModEventEmail$outboundSchema,
    ToolsOzoneModerationDefsModEventTag$outboundSchema,
    ToolsOzoneModerationDefsAccountEvent$outboundSchema,
    ToolsOzoneModerationDefsRecordEvent$outboundSchema,
    ToolsOzoneModerationDefsIdentityEvent$outboundSchema,
  ]),
  subject: z.union([
    ComAtprotoAdminDefsRepoRef$outboundSchema,
    ComAtprotoRepoStrongRef$outboundSchema,
    ChatBskyConvoDefsMessageRef$outboundSchema,
  ]),
  subjectBlobCids: z.array(z.string()),
  createdBy: z.string(),
  createdAt: z.date().transform(v => v.toISOString()),
  creatorHandle: z.string().optional(),
  subjectHandle: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolsOzoneModerationDefsModEventView$ {
  /** @deprecated use `ToolsOzoneModerationDefsModEventView$inboundSchema` instead. */
  export const inboundSchema =
    ToolsOzoneModerationDefsModEventView$inboundSchema;
  /** @deprecated use `ToolsOzoneModerationDefsModEventView$outboundSchema` instead. */
  export const outboundSchema =
    ToolsOzoneModerationDefsModEventView$outboundSchema;
  /** @deprecated use `ToolsOzoneModerationDefsModEventView$Outbound` instead. */
  export type Outbound = ToolsOzoneModerationDefsModEventView$Outbound;
}

export function toolsOzoneModerationDefsModEventViewToJSON(
  toolsOzoneModerationDefsModEventView: ToolsOzoneModerationDefsModEventView,
): string {
  return JSON.stringify(
    ToolsOzoneModerationDefsModEventView$outboundSchema.parse(
      toolsOzoneModerationDefsModEventView,
    ),
  );
}

export function toolsOzoneModerationDefsModEventViewFromJSON(
  jsonString: string,
): SafeParseResult<ToolsOzoneModerationDefsModEventView, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      ToolsOzoneModerationDefsModEventView$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ToolsOzoneModerationDefsModEventView' from JSON`,
  );
}
