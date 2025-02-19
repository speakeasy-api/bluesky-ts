/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ChatBskyModerationUpdateActorAccessBody = {
  actor: string;
  allowAccess: boolean;
  ref?: string | undefined;
};

/** @internal */
export const ChatBskyModerationUpdateActorAccessBody$inboundSchema: z.ZodType<
  ChatBskyModerationUpdateActorAccessBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  actor: z.string(),
  allowAccess: z.boolean(),
  ref: z.string().optional(),
});

/** @internal */
export type ChatBskyModerationUpdateActorAccessBody$Outbound = {
  actor: string;
  allowAccess: boolean;
  ref?: string | undefined;
};

/** @internal */
export const ChatBskyModerationUpdateActorAccessBody$outboundSchema: z.ZodType<
  ChatBskyModerationUpdateActorAccessBody$Outbound,
  z.ZodTypeDef,
  ChatBskyModerationUpdateActorAccessBody
> = z.object({
  actor: z.string(),
  allowAccess: z.boolean(),
  ref: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatBskyModerationUpdateActorAccessBody$ {
  /** @deprecated use `ChatBskyModerationUpdateActorAccessBody$inboundSchema` instead. */
  export const inboundSchema =
    ChatBskyModerationUpdateActorAccessBody$inboundSchema;
  /** @deprecated use `ChatBskyModerationUpdateActorAccessBody$outboundSchema` instead. */
  export const outboundSchema =
    ChatBskyModerationUpdateActorAccessBody$outboundSchema;
  /** @deprecated use `ChatBskyModerationUpdateActorAccessBody$Outbound` instead. */
  export type Outbound = ChatBskyModerationUpdateActorAccessBody$Outbound;
}

export function chatBskyModerationUpdateActorAccessBodyToJSON(
  chatBskyModerationUpdateActorAccessBody:
    ChatBskyModerationUpdateActorAccessBody,
): string {
  return JSON.stringify(
    ChatBskyModerationUpdateActorAccessBody$outboundSchema.parse(
      chatBskyModerationUpdateActorAccessBody,
    ),
  );
}

export function chatBskyModerationUpdateActorAccessBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  ChatBskyModerationUpdateActorAccessBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      ChatBskyModerationUpdateActorAccessBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'ChatBskyModerationUpdateActorAccessBody' from JSON`,
  );
}
