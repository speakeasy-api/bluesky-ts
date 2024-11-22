/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ChatBskyModerationGetActorMetadataRequest = {
  actor: string;
};

/**
 * OK
 */
export type ChatBskyModerationGetActorMetadataResponseBody = {
  day: components.ChatBskyModerationGetActorMetadataMetadata;
  month: components.ChatBskyModerationGetActorMetadataMetadata;
  all: components.ChatBskyModerationGetActorMetadataMetadata;
};

/** @internal */
export const ChatBskyModerationGetActorMetadataRequest$inboundSchema: z.ZodType<
  ChatBskyModerationGetActorMetadataRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  actor: z.string(),
});

/** @internal */
export type ChatBskyModerationGetActorMetadataRequest$Outbound = {
  actor: string;
};

/** @internal */
export const ChatBskyModerationGetActorMetadataRequest$outboundSchema:
  z.ZodType<
    ChatBskyModerationGetActorMetadataRequest$Outbound,
    z.ZodTypeDef,
    ChatBskyModerationGetActorMetadataRequest
  > = z.object({
    actor: z.string(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatBskyModerationGetActorMetadataRequest$ {
  /** @deprecated use `ChatBskyModerationGetActorMetadataRequest$inboundSchema` instead. */
  export const inboundSchema =
    ChatBskyModerationGetActorMetadataRequest$inboundSchema;
  /** @deprecated use `ChatBskyModerationGetActorMetadataRequest$outboundSchema` instead. */
  export const outboundSchema =
    ChatBskyModerationGetActorMetadataRequest$outboundSchema;
  /** @deprecated use `ChatBskyModerationGetActorMetadataRequest$Outbound` instead. */
  export type Outbound = ChatBskyModerationGetActorMetadataRequest$Outbound;
}

export function chatBskyModerationGetActorMetadataRequestToJSON(
  chatBskyModerationGetActorMetadataRequest:
    ChatBskyModerationGetActorMetadataRequest,
): string {
  return JSON.stringify(
    ChatBskyModerationGetActorMetadataRequest$outboundSchema.parse(
      chatBskyModerationGetActorMetadataRequest,
    ),
  );
}

export function chatBskyModerationGetActorMetadataRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  ChatBskyModerationGetActorMetadataRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      ChatBskyModerationGetActorMetadataRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'ChatBskyModerationGetActorMetadataRequest' from JSON`,
  );
}

/** @internal */
export const ChatBskyModerationGetActorMetadataResponseBody$inboundSchema:
  z.ZodType<
    ChatBskyModerationGetActorMetadataResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    day: components.ChatBskyModerationGetActorMetadataMetadata$inboundSchema,
    month: components.ChatBskyModerationGetActorMetadataMetadata$inboundSchema,
    all: components.ChatBskyModerationGetActorMetadataMetadata$inboundSchema,
  });

/** @internal */
export type ChatBskyModerationGetActorMetadataResponseBody$Outbound = {
  day: components.ChatBskyModerationGetActorMetadataMetadata$Outbound;
  month: components.ChatBskyModerationGetActorMetadataMetadata$Outbound;
  all: components.ChatBskyModerationGetActorMetadataMetadata$Outbound;
};

/** @internal */
export const ChatBskyModerationGetActorMetadataResponseBody$outboundSchema:
  z.ZodType<
    ChatBskyModerationGetActorMetadataResponseBody$Outbound,
    z.ZodTypeDef,
    ChatBskyModerationGetActorMetadataResponseBody
  > = z.object({
    day: components.ChatBskyModerationGetActorMetadataMetadata$outboundSchema,
    month: components.ChatBskyModerationGetActorMetadataMetadata$outboundSchema,
    all: components.ChatBskyModerationGetActorMetadataMetadata$outboundSchema,
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatBskyModerationGetActorMetadataResponseBody$ {
  /** @deprecated use `ChatBskyModerationGetActorMetadataResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ChatBskyModerationGetActorMetadataResponseBody$inboundSchema;
  /** @deprecated use `ChatBskyModerationGetActorMetadataResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ChatBskyModerationGetActorMetadataResponseBody$outboundSchema;
  /** @deprecated use `ChatBskyModerationGetActorMetadataResponseBody$Outbound` instead. */
  export type Outbound =
    ChatBskyModerationGetActorMetadataResponseBody$Outbound;
}

export function chatBskyModerationGetActorMetadataResponseBodyToJSON(
  chatBskyModerationGetActorMetadataResponseBody:
    ChatBskyModerationGetActorMetadataResponseBody,
): string {
  return JSON.stringify(
    ChatBskyModerationGetActorMetadataResponseBody$outboundSchema.parse(
      chatBskyModerationGetActorMetadataResponseBody,
    ),
  );
}

export function chatBskyModerationGetActorMetadataResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  ChatBskyModerationGetActorMetadataResponseBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      ChatBskyModerationGetActorMetadataResponseBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'ChatBskyModerationGetActorMetadataResponseBody' from JSON`,
  );
}
