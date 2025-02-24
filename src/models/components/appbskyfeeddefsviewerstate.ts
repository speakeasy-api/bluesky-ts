/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Metadata about the requesting account's relationship with the subject content. Only has meaningful content for authed requests.
 */
export type AppBskyFeedDefsViewerState = {
  repost?: string | undefined;
  like?: string | undefined;
  threadMuted?: boolean | undefined;
  replyDisabled?: boolean | undefined;
  embeddingDisabled?: boolean | undefined;
  pinned?: boolean | undefined;
};

/** @internal */
export const AppBskyFeedDefsViewerState$inboundSchema: z.ZodType<
  AppBskyFeedDefsViewerState,
  z.ZodTypeDef,
  unknown
> = z.object({
  repost: z.string().optional(),
  like: z.string().optional(),
  threadMuted: z.boolean().optional(),
  replyDisabled: z.boolean().optional(),
  embeddingDisabled: z.boolean().optional(),
  pinned: z.boolean().optional(),
});

/** @internal */
export type AppBskyFeedDefsViewerState$Outbound = {
  repost?: string | undefined;
  like?: string | undefined;
  threadMuted?: boolean | undefined;
  replyDisabled?: boolean | undefined;
  embeddingDisabled?: boolean | undefined;
  pinned?: boolean | undefined;
};

/** @internal */
export const AppBskyFeedDefsViewerState$outboundSchema: z.ZodType<
  AppBskyFeedDefsViewerState$Outbound,
  z.ZodTypeDef,
  AppBskyFeedDefsViewerState
> = z.object({
  repost: z.string().optional(),
  like: z.string().optional(),
  threadMuted: z.boolean().optional(),
  replyDisabled: z.boolean().optional(),
  embeddingDisabled: z.boolean().optional(),
  pinned: z.boolean().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyFeedDefsViewerState$ {
  /** @deprecated use `AppBskyFeedDefsViewerState$inboundSchema` instead. */
  export const inboundSchema = AppBskyFeedDefsViewerState$inboundSchema;
  /** @deprecated use `AppBskyFeedDefsViewerState$outboundSchema` instead. */
  export const outboundSchema = AppBskyFeedDefsViewerState$outboundSchema;
  /** @deprecated use `AppBskyFeedDefsViewerState$Outbound` instead. */
  export type Outbound = AppBskyFeedDefsViewerState$Outbound;
}

export function appBskyFeedDefsViewerStateToJSON(
  appBskyFeedDefsViewerState: AppBskyFeedDefsViewerState,
): string {
  return JSON.stringify(
    AppBskyFeedDefsViewerState$outboundSchema.parse(appBskyFeedDefsViewerState),
  );
}

export function appBskyFeedDefsViewerStateFromJSON(
  jsonString: string,
): SafeParseResult<AppBskyFeedDefsViewerState, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AppBskyFeedDefsViewerState$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AppBskyFeedDefsViewerState' from JSON`,
  );
}
