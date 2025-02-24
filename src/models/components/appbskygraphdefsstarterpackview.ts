/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  AppBskyActorDefsProfileViewBasic,
  AppBskyActorDefsProfileViewBasic$inboundSchema,
  AppBskyActorDefsProfileViewBasic$Outbound,
  AppBskyActorDefsProfileViewBasic$outboundSchema,
} from "./appbskyactordefsprofileviewbasic.js";
import {
  AppBskyFeedDefsGeneratorView,
  AppBskyFeedDefsGeneratorView$inboundSchema,
  AppBskyFeedDefsGeneratorView$Outbound,
  AppBskyFeedDefsGeneratorView$outboundSchema,
} from "./appbskyfeeddefsgeneratorview.js";
import {
  AppBskyGraphDefsListItemView,
  AppBskyGraphDefsListItemView$inboundSchema,
  AppBskyGraphDefsListItemView$Outbound,
  AppBskyGraphDefsListItemView$outboundSchema,
} from "./appbskygraphdefslistitemview.js";
import {
  AppBskyGraphDefsListViewBasic,
  AppBskyGraphDefsListViewBasic$inboundSchema,
  AppBskyGraphDefsListViewBasic$Outbound,
  AppBskyGraphDefsListViewBasic$outboundSchema,
} from "./appbskygraphdefslistviewbasic.js";
import {
  ComAtprotoLabelDefsLabel,
  ComAtprotoLabelDefsLabel$inboundSchema,
  ComAtprotoLabelDefsLabel$Outbound,
  ComAtprotoLabelDefsLabel$outboundSchema,
} from "./comatprotolabeldefslabel.js";

export type AppBskyGraphDefsStarterPackView = {
  uri: string;
  cid: string;
  record?: any | undefined;
  creator: AppBskyActorDefsProfileViewBasic;
  list?: AppBskyGraphDefsListViewBasic | undefined;
  listItemsSample?: Array<AppBskyGraphDefsListItemView> | undefined;
  feeds?: Array<AppBskyFeedDefsGeneratorView> | undefined;
  joinedWeekCount?: number | undefined;
  joinedAllTimeCount?: number | undefined;
  labels?: Array<ComAtprotoLabelDefsLabel> | undefined;
  indexedAt: Date;
};

/** @internal */
export const AppBskyGraphDefsStarterPackView$inboundSchema: z.ZodType<
  AppBskyGraphDefsStarterPackView,
  z.ZodTypeDef,
  unknown
> = z.object({
  uri: z.string(),
  cid: z.string(),
  record: z.any().optional(),
  creator: AppBskyActorDefsProfileViewBasic$inboundSchema,
  list: AppBskyGraphDefsListViewBasic$inboundSchema.optional(),
  listItemsSample: z.array(AppBskyGraphDefsListItemView$inboundSchema)
    .optional(),
  feeds: z.array(AppBskyFeedDefsGeneratorView$inboundSchema).optional(),
  joinedWeekCount: z.number().int().optional(),
  joinedAllTimeCount: z.number().int().optional(),
  labels: z.array(ComAtprotoLabelDefsLabel$inboundSchema).optional(),
  indexedAt: z.string().datetime({ offset: true }).transform(v => new Date(v)),
});

/** @internal */
export type AppBskyGraphDefsStarterPackView$Outbound = {
  uri: string;
  cid: string;
  record?: any | undefined;
  creator: AppBskyActorDefsProfileViewBasic$Outbound;
  list?: AppBskyGraphDefsListViewBasic$Outbound | undefined;
  listItemsSample?: Array<AppBskyGraphDefsListItemView$Outbound> | undefined;
  feeds?: Array<AppBskyFeedDefsGeneratorView$Outbound> | undefined;
  joinedWeekCount?: number | undefined;
  joinedAllTimeCount?: number | undefined;
  labels?: Array<ComAtprotoLabelDefsLabel$Outbound> | undefined;
  indexedAt: string;
};

/** @internal */
export const AppBskyGraphDefsStarterPackView$outboundSchema: z.ZodType<
  AppBskyGraphDefsStarterPackView$Outbound,
  z.ZodTypeDef,
  AppBskyGraphDefsStarterPackView
> = z.object({
  uri: z.string(),
  cid: z.string(),
  record: z.any().optional(),
  creator: AppBskyActorDefsProfileViewBasic$outboundSchema,
  list: AppBskyGraphDefsListViewBasic$outboundSchema.optional(),
  listItemsSample: z.array(AppBskyGraphDefsListItemView$outboundSchema)
    .optional(),
  feeds: z.array(AppBskyFeedDefsGeneratorView$outboundSchema).optional(),
  joinedWeekCount: z.number().int().optional(),
  joinedAllTimeCount: z.number().int().optional(),
  labels: z.array(ComAtprotoLabelDefsLabel$outboundSchema).optional(),
  indexedAt: z.date().transform(v => v.toISOString()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyGraphDefsStarterPackView$ {
  /** @deprecated use `AppBskyGraphDefsStarterPackView$inboundSchema` instead. */
  export const inboundSchema = AppBskyGraphDefsStarterPackView$inboundSchema;
  /** @deprecated use `AppBskyGraphDefsStarterPackView$outboundSchema` instead. */
  export const outboundSchema = AppBskyGraphDefsStarterPackView$outboundSchema;
  /** @deprecated use `AppBskyGraphDefsStarterPackView$Outbound` instead. */
  export type Outbound = AppBskyGraphDefsStarterPackView$Outbound;
}

export function appBskyGraphDefsStarterPackViewToJSON(
  appBskyGraphDefsStarterPackView: AppBskyGraphDefsStarterPackView,
): string {
  return JSON.stringify(
    AppBskyGraphDefsStarterPackView$outboundSchema.parse(
      appBskyGraphDefsStarterPackView,
    ),
  );
}

export function appBskyGraphDefsStarterPackViewFromJSON(
  jsonString: string,
): SafeParseResult<AppBskyGraphDefsStarterPackView, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AppBskyGraphDefsStarterPackView$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AppBskyGraphDefsStarterPackView' from JSON`,
  );
}
