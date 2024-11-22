/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ChatBskyModerationGetActorMetadataMetadata = {
  messagesSent: number;
  messagesReceived: number;
  convos: number;
  convosStarted: number;
};

/** @internal */
export const ChatBskyModerationGetActorMetadataMetadata$inboundSchema:
  z.ZodType<ChatBskyModerationGetActorMetadataMetadata, z.ZodTypeDef, unknown> =
    z.object({
      messagesSent: z.number().int(),
      messagesReceived: z.number().int(),
      convos: z.number().int(),
      convosStarted: z.number().int(),
    });

/** @internal */
export type ChatBskyModerationGetActorMetadataMetadata$Outbound = {
  messagesSent: number;
  messagesReceived: number;
  convos: number;
  convosStarted: number;
};

/** @internal */
export const ChatBskyModerationGetActorMetadataMetadata$outboundSchema:
  z.ZodType<
    ChatBskyModerationGetActorMetadataMetadata$Outbound,
    z.ZodTypeDef,
    ChatBskyModerationGetActorMetadataMetadata
  > = z.object({
    messagesSent: z.number().int(),
    messagesReceived: z.number().int(),
    convos: z.number().int(),
    convosStarted: z.number().int(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatBskyModerationGetActorMetadataMetadata$ {
  /** @deprecated use `ChatBskyModerationGetActorMetadataMetadata$inboundSchema` instead. */
  export const inboundSchema =
    ChatBskyModerationGetActorMetadataMetadata$inboundSchema;
  /** @deprecated use `ChatBskyModerationGetActorMetadataMetadata$outboundSchema` instead. */
  export const outboundSchema =
    ChatBskyModerationGetActorMetadataMetadata$outboundSchema;
  /** @deprecated use `ChatBskyModerationGetActorMetadataMetadata$Outbound` instead. */
  export type Outbound = ChatBskyModerationGetActorMetadataMetadata$Outbound;
}

export function chatBskyModerationGetActorMetadataMetadataToJSON(
  chatBskyModerationGetActorMetadataMetadata:
    ChatBskyModerationGetActorMetadataMetadata,
): string {
  return JSON.stringify(
    ChatBskyModerationGetActorMetadataMetadata$outboundSchema.parse(
      chatBskyModerationGetActorMetadataMetadata,
    ),
  );
}

export function chatBskyModerationGetActorMetadataMetadataFromJSON(
  jsonString: string,
): SafeParseResult<
  ChatBskyModerationGetActorMetadataMetadata,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      ChatBskyModerationGetActorMetadataMetadata$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'ChatBskyModerationGetActorMetadataMetadata' from JSON`,
  );
}
