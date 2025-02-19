/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ComAtprotoSyncNotifyOfUpdateBody = {
  /**
   * Hostname of the current service (usually a PDS) that is notifying of update.
   */
  hostname: string;
};

/** @internal */
export const ComAtprotoSyncNotifyOfUpdateBody$inboundSchema: z.ZodType<
  ComAtprotoSyncNotifyOfUpdateBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  hostname: z.string(),
});

/** @internal */
export type ComAtprotoSyncNotifyOfUpdateBody$Outbound = {
  hostname: string;
};

/** @internal */
export const ComAtprotoSyncNotifyOfUpdateBody$outboundSchema: z.ZodType<
  ComAtprotoSyncNotifyOfUpdateBody$Outbound,
  z.ZodTypeDef,
  ComAtprotoSyncNotifyOfUpdateBody
> = z.object({
  hostname: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoSyncNotifyOfUpdateBody$ {
  /** @deprecated use `ComAtprotoSyncNotifyOfUpdateBody$inboundSchema` instead. */
  export const inboundSchema = ComAtprotoSyncNotifyOfUpdateBody$inboundSchema;
  /** @deprecated use `ComAtprotoSyncNotifyOfUpdateBody$outboundSchema` instead. */
  export const outboundSchema = ComAtprotoSyncNotifyOfUpdateBody$outboundSchema;
  /** @deprecated use `ComAtprotoSyncNotifyOfUpdateBody$Outbound` instead. */
  export type Outbound = ComAtprotoSyncNotifyOfUpdateBody$Outbound;
}

export function comAtprotoSyncNotifyOfUpdateBodyToJSON(
  comAtprotoSyncNotifyOfUpdateBody: ComAtprotoSyncNotifyOfUpdateBody,
): string {
  return JSON.stringify(
    ComAtprotoSyncNotifyOfUpdateBody$outboundSchema.parse(
      comAtprotoSyncNotifyOfUpdateBody,
    ),
  );
}

export function comAtprotoSyncNotifyOfUpdateBodyFromJSON(
  jsonString: string,
): SafeParseResult<ComAtprotoSyncNotifyOfUpdateBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ComAtprotoSyncNotifyOfUpdateBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ComAtprotoSyncNotifyOfUpdateBody' from JSON`,
  );
}
