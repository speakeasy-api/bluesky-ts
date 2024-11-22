/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ChatBskyConvoGetLogRequest = {
  cursor?: string | undefined;
};

export type Logs =
  | components.ChatBskyConvoDefsLogBeginConvo
  | components.ChatBskyConvoDefsLogLeaveConvo
  | components.ChatBskyConvoDefsLogCreateMessage
  | components.ChatBskyConvoDefsLogDeleteMessage;

/**
 * OK
 */
export type ChatBskyConvoGetLogResponseBody = {
  cursor?: string | undefined;
  logs: Array<
    | components.ChatBskyConvoDefsLogBeginConvo
    | components.ChatBskyConvoDefsLogLeaveConvo
    | components.ChatBskyConvoDefsLogCreateMessage
    | components.ChatBskyConvoDefsLogDeleteMessage
  >;
};

/** @internal */
export const ChatBskyConvoGetLogRequest$inboundSchema: z.ZodType<
  ChatBskyConvoGetLogRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  cursor: z.string().optional(),
});

/** @internal */
export type ChatBskyConvoGetLogRequest$Outbound = {
  cursor?: string | undefined;
};

/** @internal */
export const ChatBskyConvoGetLogRequest$outboundSchema: z.ZodType<
  ChatBskyConvoGetLogRequest$Outbound,
  z.ZodTypeDef,
  ChatBskyConvoGetLogRequest
> = z.object({
  cursor: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatBskyConvoGetLogRequest$ {
  /** @deprecated use `ChatBskyConvoGetLogRequest$inboundSchema` instead. */
  export const inboundSchema = ChatBskyConvoGetLogRequest$inboundSchema;
  /** @deprecated use `ChatBskyConvoGetLogRequest$outboundSchema` instead. */
  export const outboundSchema = ChatBskyConvoGetLogRequest$outboundSchema;
  /** @deprecated use `ChatBskyConvoGetLogRequest$Outbound` instead. */
  export type Outbound = ChatBskyConvoGetLogRequest$Outbound;
}

export function chatBskyConvoGetLogRequestToJSON(
  chatBskyConvoGetLogRequest: ChatBskyConvoGetLogRequest,
): string {
  return JSON.stringify(
    ChatBskyConvoGetLogRequest$outboundSchema.parse(chatBskyConvoGetLogRequest),
  );
}

export function chatBskyConvoGetLogRequestFromJSON(
  jsonString: string,
): SafeParseResult<ChatBskyConvoGetLogRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ChatBskyConvoGetLogRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ChatBskyConvoGetLogRequest' from JSON`,
  );
}

/** @internal */
export const Logs$inboundSchema: z.ZodType<Logs, z.ZodTypeDef, unknown> = z
  .union([
    components.ChatBskyConvoDefsLogBeginConvo$inboundSchema,
    components.ChatBskyConvoDefsLogLeaveConvo$inboundSchema,
    components.ChatBskyConvoDefsLogCreateMessage$inboundSchema,
    components.ChatBskyConvoDefsLogDeleteMessage$inboundSchema,
  ]);

/** @internal */
export type Logs$Outbound =
  | components.ChatBskyConvoDefsLogBeginConvo$Outbound
  | components.ChatBskyConvoDefsLogLeaveConvo$Outbound
  | components.ChatBskyConvoDefsLogCreateMessage$Outbound
  | components.ChatBskyConvoDefsLogDeleteMessage$Outbound;

/** @internal */
export const Logs$outboundSchema: z.ZodType<Logs$Outbound, z.ZodTypeDef, Logs> =
  z.union([
    components.ChatBskyConvoDefsLogBeginConvo$outboundSchema,
    components.ChatBskyConvoDefsLogLeaveConvo$outboundSchema,
    components.ChatBskyConvoDefsLogCreateMessage$outboundSchema,
    components.ChatBskyConvoDefsLogDeleteMessage$outboundSchema,
  ]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Logs$ {
  /** @deprecated use `Logs$inboundSchema` instead. */
  export const inboundSchema = Logs$inboundSchema;
  /** @deprecated use `Logs$outboundSchema` instead. */
  export const outboundSchema = Logs$outboundSchema;
  /** @deprecated use `Logs$Outbound` instead. */
  export type Outbound = Logs$Outbound;
}

export function logsToJSON(logs: Logs): string {
  return JSON.stringify(Logs$outboundSchema.parse(logs));
}

export function logsFromJSON(
  jsonString: string,
): SafeParseResult<Logs, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Logs$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Logs' from JSON`,
  );
}

/** @internal */
export const ChatBskyConvoGetLogResponseBody$inboundSchema: z.ZodType<
  ChatBskyConvoGetLogResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  cursor: z.string().optional(),
  logs: z.array(
    z.union([
      components.ChatBskyConvoDefsLogBeginConvo$inboundSchema,
      components.ChatBskyConvoDefsLogLeaveConvo$inboundSchema,
      components.ChatBskyConvoDefsLogCreateMessage$inboundSchema,
      components.ChatBskyConvoDefsLogDeleteMessage$inboundSchema,
    ]),
  ),
});

/** @internal */
export type ChatBskyConvoGetLogResponseBody$Outbound = {
  cursor?: string | undefined;
  logs: Array<
    | components.ChatBskyConvoDefsLogBeginConvo$Outbound
    | components.ChatBskyConvoDefsLogLeaveConvo$Outbound
    | components.ChatBskyConvoDefsLogCreateMessage$Outbound
    | components.ChatBskyConvoDefsLogDeleteMessage$Outbound
  >;
};

/** @internal */
export const ChatBskyConvoGetLogResponseBody$outboundSchema: z.ZodType<
  ChatBskyConvoGetLogResponseBody$Outbound,
  z.ZodTypeDef,
  ChatBskyConvoGetLogResponseBody
> = z.object({
  cursor: z.string().optional(),
  logs: z.array(
    z.union([
      components.ChatBskyConvoDefsLogBeginConvo$outboundSchema,
      components.ChatBskyConvoDefsLogLeaveConvo$outboundSchema,
      components.ChatBskyConvoDefsLogCreateMessage$outboundSchema,
      components.ChatBskyConvoDefsLogDeleteMessage$outboundSchema,
    ]),
  ),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatBskyConvoGetLogResponseBody$ {
  /** @deprecated use `ChatBskyConvoGetLogResponseBody$inboundSchema` instead. */
  export const inboundSchema = ChatBskyConvoGetLogResponseBody$inboundSchema;
  /** @deprecated use `ChatBskyConvoGetLogResponseBody$outboundSchema` instead. */
  export const outboundSchema = ChatBskyConvoGetLogResponseBody$outboundSchema;
  /** @deprecated use `ChatBskyConvoGetLogResponseBody$Outbound` instead. */
  export type Outbound = ChatBskyConvoGetLogResponseBody$Outbound;
}

export function chatBskyConvoGetLogResponseBodyToJSON(
  chatBskyConvoGetLogResponseBody: ChatBskyConvoGetLogResponseBody,
): string {
  return JSON.stringify(
    ChatBskyConvoGetLogResponseBody$outboundSchema.parse(
      chatBskyConvoGetLogResponseBody,
    ),
  );
}

export function chatBskyConvoGetLogResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<ChatBskyConvoGetLogResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ChatBskyConvoGetLogResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ChatBskyConvoGetLogResponseBody' from JSON`,
  );
}
