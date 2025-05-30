/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ChatBskyConvoGetMessagesRequest = {
  convoId: string;
  limit?: number | undefined;
  cursor?: string | undefined;
};

export type ChatBskyConvoGetMessagesMessages =
  | components.ChatBskyConvoDefsDeletedMessageView
  | components.ChatBskyConvoDefsMessageView;

/**
 * OK
 */
export type ChatBskyConvoGetMessagesResponseBody = {
  cursor?: string | undefined;
  messages: Array<
    | components.ChatBskyConvoDefsDeletedMessageView
    | components.ChatBskyConvoDefsMessageView
  >;
};

export type ChatBskyConvoGetMessagesResponse = {
  result: ChatBskyConvoGetMessagesResponseBody;
};

/** @internal */
export const ChatBskyConvoGetMessagesRequest$inboundSchema: z.ZodType<
  ChatBskyConvoGetMessagesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  convoId: z.string(),
  limit: z.number().int().default(50),
  cursor: z.string().optional(),
});

/** @internal */
export type ChatBskyConvoGetMessagesRequest$Outbound = {
  convoId: string;
  limit: number;
  cursor?: string | undefined;
};

/** @internal */
export const ChatBskyConvoGetMessagesRequest$outboundSchema: z.ZodType<
  ChatBskyConvoGetMessagesRequest$Outbound,
  z.ZodTypeDef,
  ChatBskyConvoGetMessagesRequest
> = z.object({
  convoId: z.string(),
  limit: z.number().int().default(50),
  cursor: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatBskyConvoGetMessagesRequest$ {
  /** @deprecated use `ChatBskyConvoGetMessagesRequest$inboundSchema` instead. */
  export const inboundSchema = ChatBskyConvoGetMessagesRequest$inboundSchema;
  /** @deprecated use `ChatBskyConvoGetMessagesRequest$outboundSchema` instead. */
  export const outboundSchema = ChatBskyConvoGetMessagesRequest$outboundSchema;
  /** @deprecated use `ChatBskyConvoGetMessagesRequest$Outbound` instead. */
  export type Outbound = ChatBskyConvoGetMessagesRequest$Outbound;
}

export function chatBskyConvoGetMessagesRequestToJSON(
  chatBskyConvoGetMessagesRequest: ChatBskyConvoGetMessagesRequest,
): string {
  return JSON.stringify(
    ChatBskyConvoGetMessagesRequest$outboundSchema.parse(
      chatBskyConvoGetMessagesRequest,
    ),
  );
}

export function chatBskyConvoGetMessagesRequestFromJSON(
  jsonString: string,
): SafeParseResult<ChatBskyConvoGetMessagesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ChatBskyConvoGetMessagesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ChatBskyConvoGetMessagesRequest' from JSON`,
  );
}

/** @internal */
export const ChatBskyConvoGetMessagesMessages$inboundSchema: z.ZodType<
  ChatBskyConvoGetMessagesMessages,
  z.ZodTypeDef,
  unknown
> = z.union([
  components.ChatBskyConvoDefsDeletedMessageView$inboundSchema,
  components.ChatBskyConvoDefsMessageView$inboundSchema,
]);

/** @internal */
export type ChatBskyConvoGetMessagesMessages$Outbound =
  | components.ChatBskyConvoDefsDeletedMessageView$Outbound
  | components.ChatBskyConvoDefsMessageView$Outbound;

/** @internal */
export const ChatBskyConvoGetMessagesMessages$outboundSchema: z.ZodType<
  ChatBskyConvoGetMessagesMessages$Outbound,
  z.ZodTypeDef,
  ChatBskyConvoGetMessagesMessages
> = z.union([
  components.ChatBskyConvoDefsDeletedMessageView$outboundSchema,
  components.ChatBskyConvoDefsMessageView$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatBskyConvoGetMessagesMessages$ {
  /** @deprecated use `ChatBskyConvoGetMessagesMessages$inboundSchema` instead. */
  export const inboundSchema = ChatBskyConvoGetMessagesMessages$inboundSchema;
  /** @deprecated use `ChatBskyConvoGetMessagesMessages$outboundSchema` instead. */
  export const outboundSchema = ChatBskyConvoGetMessagesMessages$outboundSchema;
  /** @deprecated use `ChatBskyConvoGetMessagesMessages$Outbound` instead. */
  export type Outbound = ChatBskyConvoGetMessagesMessages$Outbound;
}

export function chatBskyConvoGetMessagesMessagesToJSON(
  chatBskyConvoGetMessagesMessages: ChatBskyConvoGetMessagesMessages,
): string {
  return JSON.stringify(
    ChatBskyConvoGetMessagesMessages$outboundSchema.parse(
      chatBskyConvoGetMessagesMessages,
    ),
  );
}

export function chatBskyConvoGetMessagesMessagesFromJSON(
  jsonString: string,
): SafeParseResult<ChatBskyConvoGetMessagesMessages, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ChatBskyConvoGetMessagesMessages$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ChatBskyConvoGetMessagesMessages' from JSON`,
  );
}

/** @internal */
export const ChatBskyConvoGetMessagesResponseBody$inboundSchema: z.ZodType<
  ChatBskyConvoGetMessagesResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  cursor: z.string().optional(),
  messages: z.array(
    z.union([
      components.ChatBskyConvoDefsDeletedMessageView$inboundSchema,
      components.ChatBskyConvoDefsMessageView$inboundSchema,
    ]),
  ),
});

/** @internal */
export type ChatBskyConvoGetMessagesResponseBody$Outbound = {
  cursor?: string | undefined;
  messages: Array<
    | components.ChatBskyConvoDefsDeletedMessageView$Outbound
    | components.ChatBskyConvoDefsMessageView$Outbound
  >;
};

/** @internal */
export const ChatBskyConvoGetMessagesResponseBody$outboundSchema: z.ZodType<
  ChatBskyConvoGetMessagesResponseBody$Outbound,
  z.ZodTypeDef,
  ChatBskyConvoGetMessagesResponseBody
> = z.object({
  cursor: z.string().optional(),
  messages: z.array(
    z.union([
      components.ChatBskyConvoDefsDeletedMessageView$outboundSchema,
      components.ChatBskyConvoDefsMessageView$outboundSchema,
    ]),
  ),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatBskyConvoGetMessagesResponseBody$ {
  /** @deprecated use `ChatBskyConvoGetMessagesResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ChatBskyConvoGetMessagesResponseBody$inboundSchema;
  /** @deprecated use `ChatBskyConvoGetMessagesResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ChatBskyConvoGetMessagesResponseBody$outboundSchema;
  /** @deprecated use `ChatBskyConvoGetMessagesResponseBody$Outbound` instead. */
  export type Outbound = ChatBskyConvoGetMessagesResponseBody$Outbound;
}

export function chatBskyConvoGetMessagesResponseBodyToJSON(
  chatBskyConvoGetMessagesResponseBody: ChatBskyConvoGetMessagesResponseBody,
): string {
  return JSON.stringify(
    ChatBskyConvoGetMessagesResponseBody$outboundSchema.parse(
      chatBskyConvoGetMessagesResponseBody,
    ),
  );
}

export function chatBskyConvoGetMessagesResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<ChatBskyConvoGetMessagesResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      ChatBskyConvoGetMessagesResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ChatBskyConvoGetMessagesResponseBody' from JSON`,
  );
}

/** @internal */
export const ChatBskyConvoGetMessagesResponse$inboundSchema: z.ZodType<
  ChatBskyConvoGetMessagesResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: z.lazy(() => ChatBskyConvoGetMessagesResponseBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type ChatBskyConvoGetMessagesResponse$Outbound = {
  Result: ChatBskyConvoGetMessagesResponseBody$Outbound;
};

/** @internal */
export const ChatBskyConvoGetMessagesResponse$outboundSchema: z.ZodType<
  ChatBskyConvoGetMessagesResponse$Outbound,
  z.ZodTypeDef,
  ChatBskyConvoGetMessagesResponse
> = z.object({
  result: z.lazy(() => ChatBskyConvoGetMessagesResponseBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatBskyConvoGetMessagesResponse$ {
  /** @deprecated use `ChatBskyConvoGetMessagesResponse$inboundSchema` instead. */
  export const inboundSchema = ChatBskyConvoGetMessagesResponse$inboundSchema;
  /** @deprecated use `ChatBskyConvoGetMessagesResponse$outboundSchema` instead. */
  export const outboundSchema = ChatBskyConvoGetMessagesResponse$outboundSchema;
  /** @deprecated use `ChatBskyConvoGetMessagesResponse$Outbound` instead. */
  export type Outbound = ChatBskyConvoGetMessagesResponse$Outbound;
}

export function chatBskyConvoGetMessagesResponseToJSON(
  chatBskyConvoGetMessagesResponse: ChatBskyConvoGetMessagesResponse,
): string {
  return JSON.stringify(
    ChatBskyConvoGetMessagesResponse$outboundSchema.parse(
      chatBskyConvoGetMessagesResponse,
    ),
  );
}

export function chatBskyConvoGetMessagesResponseFromJSON(
  jsonString: string,
): SafeParseResult<ChatBskyConvoGetMessagesResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ChatBskyConvoGetMessagesResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ChatBskyConvoGetMessagesResponse' from JSON`,
  );
}
