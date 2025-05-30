/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ChatBskyActorDefsProfileViewBasic,
  ChatBskyActorDefsProfileViewBasic$inboundSchema,
  ChatBskyActorDefsProfileViewBasic$Outbound,
  ChatBskyActorDefsProfileViewBasic$outboundSchema,
} from "./chatbskyactordefsprofileviewbasic.js";
import {
  ChatBskyConvoDefsDeletedMessageView,
  ChatBskyConvoDefsDeletedMessageView$inboundSchema,
  ChatBskyConvoDefsDeletedMessageView$Outbound,
  ChatBskyConvoDefsDeletedMessageView$outboundSchema,
} from "./chatbskyconvodefsdeletedmessageview.js";
import {
  ChatBskyConvoDefsMessageView,
  ChatBskyConvoDefsMessageView$inboundSchema,
  ChatBskyConvoDefsMessageView$Outbound,
  ChatBskyConvoDefsMessageView$outboundSchema,
} from "./chatbskyconvodefsmessageview.js";

export type LastMessage =
  | ChatBskyConvoDefsDeletedMessageView
  | ChatBskyConvoDefsMessageView;

export type ChatBskyConvoDefsConvoView = {
  id: string;
  rev: string;
  members: Array<ChatBskyActorDefsProfileViewBasic>;
  lastMessage?:
    | ChatBskyConvoDefsDeletedMessageView
    | ChatBskyConvoDefsMessageView
    | undefined;
  muted: boolean;
  opened?: boolean | undefined;
  unreadCount: number;
};

/** @internal */
export const LastMessage$inboundSchema: z.ZodType<
  LastMessage,
  z.ZodTypeDef,
  unknown
> = z.union([
  ChatBskyConvoDefsDeletedMessageView$inboundSchema,
  ChatBskyConvoDefsMessageView$inboundSchema,
]);

/** @internal */
export type LastMessage$Outbound =
  | ChatBskyConvoDefsDeletedMessageView$Outbound
  | ChatBskyConvoDefsMessageView$Outbound;

/** @internal */
export const LastMessage$outboundSchema: z.ZodType<
  LastMessage$Outbound,
  z.ZodTypeDef,
  LastMessage
> = z.union([
  ChatBskyConvoDefsDeletedMessageView$outboundSchema,
  ChatBskyConvoDefsMessageView$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LastMessage$ {
  /** @deprecated use `LastMessage$inboundSchema` instead. */
  export const inboundSchema = LastMessage$inboundSchema;
  /** @deprecated use `LastMessage$outboundSchema` instead. */
  export const outboundSchema = LastMessage$outboundSchema;
  /** @deprecated use `LastMessage$Outbound` instead. */
  export type Outbound = LastMessage$Outbound;
}

export function lastMessageToJSON(lastMessage: LastMessage): string {
  return JSON.stringify(LastMessage$outboundSchema.parse(lastMessage));
}

export function lastMessageFromJSON(
  jsonString: string,
): SafeParseResult<LastMessage, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LastMessage$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LastMessage' from JSON`,
  );
}

/** @internal */
export const ChatBskyConvoDefsConvoView$inboundSchema: z.ZodType<
  ChatBskyConvoDefsConvoView,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  rev: z.string(),
  members: z.array(ChatBskyActorDefsProfileViewBasic$inboundSchema),
  lastMessage: z.union([
    ChatBskyConvoDefsDeletedMessageView$inboundSchema,
    ChatBskyConvoDefsMessageView$inboundSchema,
  ]).optional(),
  muted: z.boolean(),
  opened: z.boolean().optional(),
  unreadCount: z.number().int(),
});

/** @internal */
export type ChatBskyConvoDefsConvoView$Outbound = {
  id: string;
  rev: string;
  members: Array<ChatBskyActorDefsProfileViewBasic$Outbound>;
  lastMessage?:
    | ChatBskyConvoDefsDeletedMessageView$Outbound
    | ChatBskyConvoDefsMessageView$Outbound
    | undefined;
  muted: boolean;
  opened?: boolean | undefined;
  unreadCount: number;
};

/** @internal */
export const ChatBskyConvoDefsConvoView$outboundSchema: z.ZodType<
  ChatBskyConvoDefsConvoView$Outbound,
  z.ZodTypeDef,
  ChatBskyConvoDefsConvoView
> = z.object({
  id: z.string(),
  rev: z.string(),
  members: z.array(ChatBskyActorDefsProfileViewBasic$outboundSchema),
  lastMessage: z.union([
    ChatBskyConvoDefsDeletedMessageView$outboundSchema,
    ChatBskyConvoDefsMessageView$outboundSchema,
  ]).optional(),
  muted: z.boolean(),
  opened: z.boolean().optional(),
  unreadCount: z.number().int(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatBskyConvoDefsConvoView$ {
  /** @deprecated use `ChatBskyConvoDefsConvoView$inboundSchema` instead. */
  export const inboundSchema = ChatBskyConvoDefsConvoView$inboundSchema;
  /** @deprecated use `ChatBskyConvoDefsConvoView$outboundSchema` instead. */
  export const outboundSchema = ChatBskyConvoDefsConvoView$outboundSchema;
  /** @deprecated use `ChatBskyConvoDefsConvoView$Outbound` instead. */
  export type Outbound = ChatBskyConvoDefsConvoView$Outbound;
}

export function chatBskyConvoDefsConvoViewToJSON(
  chatBskyConvoDefsConvoView: ChatBskyConvoDefsConvoView,
): string {
  return JSON.stringify(
    ChatBskyConvoDefsConvoView$outboundSchema.parse(chatBskyConvoDefsConvoView),
  );
}

export function chatBskyConvoDefsConvoViewFromJSON(
  jsonString: string,
): SafeParseResult<ChatBskyConvoDefsConvoView, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ChatBskyConvoDefsConvoView$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ChatBskyConvoDefsConvoView' from JSON`,
  );
}
