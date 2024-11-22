/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  AppBskyFeedDefsBlockedPost,
  AppBskyFeedDefsBlockedPost$inboundSchema,
  AppBskyFeedDefsBlockedPost$Outbound,
  AppBskyFeedDefsBlockedPost$outboundSchema,
} from "./appbskyfeeddefsblockedpost.js";
import {
  AppBskyFeedDefsNotFoundPost,
  AppBskyFeedDefsNotFoundPost$inboundSchema,
  AppBskyFeedDefsNotFoundPost$Outbound,
  AppBskyFeedDefsNotFoundPost$outboundSchema,
} from "./appbskyfeeddefsnotfoundpost.js";
import {
  AppBskyFeedDefsPostView,
  AppBskyFeedDefsPostView$inboundSchema,
  AppBskyFeedDefsPostView$Outbound,
  AppBskyFeedDefsPostView$outboundSchema,
} from "./appbskyfeeddefspostview.js";

export type AppBskyFeedDefsThreadViewPostParent =
  | AppBskyFeedDefsNotFoundPost
  | AppBskyFeedDefsThreadViewPost
  | AppBskyFeedDefsBlockedPost;

export type Replies =
  | AppBskyFeedDefsNotFoundPost
  | AppBskyFeedDefsThreadViewPost
  | AppBskyFeedDefsBlockedPost;

export type AppBskyFeedDefsThreadViewPost = {
  post: AppBskyFeedDefsPostView;
  parent?:
    | AppBskyFeedDefsNotFoundPost
    | AppBskyFeedDefsThreadViewPost
    | AppBskyFeedDefsBlockedPost
    | undefined;
  replies?:
    | Array<
      | AppBskyFeedDefsNotFoundPost
      | AppBskyFeedDefsThreadViewPost
      | AppBskyFeedDefsBlockedPost
    >
    | undefined;
};

/** @internal */
export const AppBskyFeedDefsThreadViewPostParent$inboundSchema: z.ZodType<
  AppBskyFeedDefsThreadViewPostParent,
  z.ZodTypeDef,
  unknown
> = z.union([
  AppBskyFeedDefsNotFoundPost$inboundSchema,
  z.lazy(() => AppBskyFeedDefsThreadViewPost$inboundSchema),
  AppBskyFeedDefsBlockedPost$inboundSchema,
]);

/** @internal */
export type AppBskyFeedDefsThreadViewPostParent$Outbound =
  | AppBskyFeedDefsNotFoundPost$Outbound
  | AppBskyFeedDefsThreadViewPost$Outbound
  | AppBskyFeedDefsBlockedPost$Outbound;

/** @internal */
export const AppBskyFeedDefsThreadViewPostParent$outboundSchema: z.ZodType<
  AppBskyFeedDefsThreadViewPostParent$Outbound,
  z.ZodTypeDef,
  AppBskyFeedDefsThreadViewPostParent
> = z.union([
  AppBskyFeedDefsNotFoundPost$outboundSchema,
  z.lazy(() => AppBskyFeedDefsThreadViewPost$outboundSchema),
  AppBskyFeedDefsBlockedPost$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyFeedDefsThreadViewPostParent$ {
  /** @deprecated use `AppBskyFeedDefsThreadViewPostParent$inboundSchema` instead. */
  export const inboundSchema =
    AppBskyFeedDefsThreadViewPostParent$inboundSchema;
  /** @deprecated use `AppBskyFeedDefsThreadViewPostParent$outboundSchema` instead. */
  export const outboundSchema =
    AppBskyFeedDefsThreadViewPostParent$outboundSchema;
  /** @deprecated use `AppBskyFeedDefsThreadViewPostParent$Outbound` instead. */
  export type Outbound = AppBskyFeedDefsThreadViewPostParent$Outbound;
}

export function appBskyFeedDefsThreadViewPostParentToJSON(
  appBskyFeedDefsThreadViewPostParent: AppBskyFeedDefsThreadViewPostParent,
): string {
  return JSON.stringify(
    AppBskyFeedDefsThreadViewPostParent$outboundSchema.parse(
      appBskyFeedDefsThreadViewPostParent,
    ),
  );
}

export function appBskyFeedDefsThreadViewPostParentFromJSON(
  jsonString: string,
): SafeParseResult<AppBskyFeedDefsThreadViewPostParent, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AppBskyFeedDefsThreadViewPostParent$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AppBskyFeedDefsThreadViewPostParent' from JSON`,
  );
}

/** @internal */
export const Replies$inboundSchema: z.ZodType<Replies, z.ZodTypeDef, unknown> =
  z.union([
    AppBskyFeedDefsNotFoundPost$inboundSchema,
    z.lazy(() => AppBskyFeedDefsThreadViewPost$inboundSchema),
    AppBskyFeedDefsBlockedPost$inboundSchema,
  ]);

/** @internal */
export type Replies$Outbound =
  | AppBskyFeedDefsNotFoundPost$Outbound
  | AppBskyFeedDefsThreadViewPost$Outbound
  | AppBskyFeedDefsBlockedPost$Outbound;

/** @internal */
export const Replies$outboundSchema: z.ZodType<
  Replies$Outbound,
  z.ZodTypeDef,
  Replies
> = z.union([
  AppBskyFeedDefsNotFoundPost$outboundSchema,
  z.lazy(() => AppBskyFeedDefsThreadViewPost$outboundSchema),
  AppBskyFeedDefsBlockedPost$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Replies$ {
  /** @deprecated use `Replies$inboundSchema` instead. */
  export const inboundSchema = Replies$inboundSchema;
  /** @deprecated use `Replies$outboundSchema` instead. */
  export const outboundSchema = Replies$outboundSchema;
  /** @deprecated use `Replies$Outbound` instead. */
  export type Outbound = Replies$Outbound;
}

export function repliesToJSON(replies: Replies): string {
  return JSON.stringify(Replies$outboundSchema.parse(replies));
}

export function repliesFromJSON(
  jsonString: string,
): SafeParseResult<Replies, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Replies$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Replies' from JSON`,
  );
}

/** @internal */
export const AppBskyFeedDefsThreadViewPost$inboundSchema: z.ZodType<
  AppBskyFeedDefsThreadViewPost,
  z.ZodTypeDef,
  unknown
> = z.object({
  post: AppBskyFeedDefsPostView$inboundSchema,
  parent: z.union([
    AppBskyFeedDefsNotFoundPost$inboundSchema,
    z.lazy(() => AppBskyFeedDefsThreadViewPost$inboundSchema),
    AppBskyFeedDefsBlockedPost$inboundSchema,
  ]).optional(),
  replies: z.array(
    z.union([
      AppBskyFeedDefsNotFoundPost$inboundSchema,
      z.lazy(() => AppBskyFeedDefsThreadViewPost$inboundSchema),
      AppBskyFeedDefsBlockedPost$inboundSchema,
    ]),
  ).optional(),
});

/** @internal */
export type AppBskyFeedDefsThreadViewPost$Outbound = {
  post: AppBskyFeedDefsPostView$Outbound;
  parent?:
    | AppBskyFeedDefsNotFoundPost$Outbound
    | AppBskyFeedDefsThreadViewPost$Outbound
    | AppBskyFeedDefsBlockedPost$Outbound
    | undefined;
  replies?:
    | Array<
      | AppBskyFeedDefsNotFoundPost$Outbound
      | AppBskyFeedDefsThreadViewPost$Outbound
      | AppBskyFeedDefsBlockedPost$Outbound
    >
    | undefined;
};

/** @internal */
export const AppBskyFeedDefsThreadViewPost$outboundSchema: z.ZodType<
  AppBskyFeedDefsThreadViewPost$Outbound,
  z.ZodTypeDef,
  AppBskyFeedDefsThreadViewPost
> = z.object({
  post: AppBskyFeedDefsPostView$outboundSchema,
  parent: z.union([
    AppBskyFeedDefsNotFoundPost$outboundSchema,
    z.lazy(() => AppBskyFeedDefsThreadViewPost$outboundSchema),
    AppBskyFeedDefsBlockedPost$outboundSchema,
  ]).optional(),
  replies: z.array(
    z.union([
      AppBskyFeedDefsNotFoundPost$outboundSchema,
      z.lazy(() => AppBskyFeedDefsThreadViewPost$outboundSchema),
      AppBskyFeedDefsBlockedPost$outboundSchema,
    ]),
  ).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyFeedDefsThreadViewPost$ {
  /** @deprecated use `AppBskyFeedDefsThreadViewPost$inboundSchema` instead. */
  export const inboundSchema = AppBskyFeedDefsThreadViewPost$inboundSchema;
  /** @deprecated use `AppBskyFeedDefsThreadViewPost$outboundSchema` instead. */
  export const outboundSchema = AppBskyFeedDefsThreadViewPost$outboundSchema;
  /** @deprecated use `AppBskyFeedDefsThreadViewPost$Outbound` instead. */
  export type Outbound = AppBskyFeedDefsThreadViewPost$Outbound;
}

export function appBskyFeedDefsThreadViewPostToJSON(
  appBskyFeedDefsThreadViewPost: AppBskyFeedDefsThreadViewPost,
): string {
  return JSON.stringify(
    AppBskyFeedDefsThreadViewPost$outboundSchema.parse(
      appBskyFeedDefsThreadViewPost,
    ),
  );
}

export function appBskyFeedDefsThreadViewPostFromJSON(
  jsonString: string,
): SafeParseResult<AppBskyFeedDefsThreadViewPost, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AppBskyFeedDefsThreadViewPost$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AppBskyFeedDefsThreadViewPost' from JSON`,
  );
}
