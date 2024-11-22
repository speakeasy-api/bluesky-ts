/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  AppBskyActorDefsProfileView,
  AppBskyActorDefsProfileView$inboundSchema,
  AppBskyActorDefsProfileView$Outbound,
  AppBskyActorDefsProfileView$outboundSchema,
} from "./appbskyactordefsprofileview.js";
import {
  AppBskyGraphDefsListViewerState,
  AppBskyGraphDefsListViewerState$inboundSchema,
  AppBskyGraphDefsListViewerState$Outbound,
  AppBskyGraphDefsListViewerState$outboundSchema,
} from "./appbskygraphdefslistviewerstate.js";
import {
  AppBskyRichtextFacet,
  AppBskyRichtextFacet$inboundSchema,
  AppBskyRichtextFacet$Outbound,
  AppBskyRichtextFacet$outboundSchema,
} from "./appbskyrichtextfacet.js";
import {
  ComAtprotoLabelDefsLabel,
  ComAtprotoLabelDefsLabel$inboundSchema,
  ComAtprotoLabelDefsLabel$Outbound,
  ComAtprotoLabelDefsLabel$outboundSchema,
} from "./comatprotolabeldefslabel.js";

export type AppBskyGraphDefsListView = {
  uri: string;
  cid: string;
  creator: AppBskyActorDefsProfileView;
  name: string;
  purpose: string;
  description?: string | undefined;
  descriptionFacets?: Array<AppBskyRichtextFacet> | undefined;
  avatar?: string | undefined;
  listItemCount?: number | undefined;
  labels?: Array<ComAtprotoLabelDefsLabel> | undefined;
  viewer?: AppBskyGraphDefsListViewerState | undefined;
  indexedAt: Date;
};

/** @internal */
export const AppBskyGraphDefsListView$inboundSchema: z.ZodType<
  AppBskyGraphDefsListView,
  z.ZodTypeDef,
  unknown
> = z.object({
  uri: z.string(),
  cid: z.string(),
  creator: AppBskyActorDefsProfileView$inboundSchema,
  name: z.string(),
  purpose: z.string(),
  description: z.string().optional(),
  descriptionFacets: z.array(AppBskyRichtextFacet$inboundSchema).optional(),
  avatar: z.string().optional(),
  listItemCount: z.number().int().optional(),
  labels: z.array(ComAtprotoLabelDefsLabel$inboundSchema).optional(),
  viewer: AppBskyGraphDefsListViewerState$inboundSchema.optional(),
  indexedAt: z.string().datetime({ offset: true }).transform(v => new Date(v)),
});

/** @internal */
export type AppBskyGraphDefsListView$Outbound = {
  uri: string;
  cid: string;
  creator: AppBskyActorDefsProfileView$Outbound;
  name: string;
  purpose: string;
  description?: string | undefined;
  descriptionFacets?: Array<AppBskyRichtextFacet$Outbound> | undefined;
  avatar?: string | undefined;
  listItemCount?: number | undefined;
  labels?: Array<ComAtprotoLabelDefsLabel$Outbound> | undefined;
  viewer?: AppBskyGraphDefsListViewerState$Outbound | undefined;
  indexedAt: string;
};

/** @internal */
export const AppBskyGraphDefsListView$outboundSchema: z.ZodType<
  AppBskyGraphDefsListView$Outbound,
  z.ZodTypeDef,
  AppBskyGraphDefsListView
> = z.object({
  uri: z.string(),
  cid: z.string(),
  creator: AppBskyActorDefsProfileView$outboundSchema,
  name: z.string(),
  purpose: z.string(),
  description: z.string().optional(),
  descriptionFacets: z.array(AppBskyRichtextFacet$outboundSchema).optional(),
  avatar: z.string().optional(),
  listItemCount: z.number().int().optional(),
  labels: z.array(ComAtprotoLabelDefsLabel$outboundSchema).optional(),
  viewer: AppBskyGraphDefsListViewerState$outboundSchema.optional(),
  indexedAt: z.date().transform(v => v.toISOString()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppBskyGraphDefsListView$ {
  /** @deprecated use `AppBskyGraphDefsListView$inboundSchema` instead. */
  export const inboundSchema = AppBskyGraphDefsListView$inboundSchema;
  /** @deprecated use `AppBskyGraphDefsListView$outboundSchema` instead. */
  export const outboundSchema = AppBskyGraphDefsListView$outboundSchema;
  /** @deprecated use `AppBskyGraphDefsListView$Outbound` instead. */
  export type Outbound = AppBskyGraphDefsListView$Outbound;
}

export function appBskyGraphDefsListViewToJSON(
  appBskyGraphDefsListView: AppBskyGraphDefsListView,
): string {
  return JSON.stringify(
    AppBskyGraphDefsListView$outboundSchema.parse(appBskyGraphDefsListView),
  );
}

export function appBskyGraphDefsListViewFromJSON(
  jsonString: string,
): SafeParseResult<AppBskyGraphDefsListView, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AppBskyGraphDefsListView$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AppBskyGraphDefsListView' from JSON`,
  );
}
