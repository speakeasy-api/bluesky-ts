/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ComAtprotoSyncGetBlocksRequest = {
  /**
   * The DID of the repo.
   */
  did: string;
  cids: Array<string>;
};

/** @internal */
export const ComAtprotoSyncGetBlocksRequest$inboundSchema: z.ZodType<
  ComAtprotoSyncGetBlocksRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  did: z.string(),
  cids: z.array(z.string()),
});

/** @internal */
export type ComAtprotoSyncGetBlocksRequest$Outbound = {
  did: string;
  cids: Array<string>;
};

/** @internal */
export const ComAtprotoSyncGetBlocksRequest$outboundSchema: z.ZodType<
  ComAtprotoSyncGetBlocksRequest$Outbound,
  z.ZodTypeDef,
  ComAtprotoSyncGetBlocksRequest
> = z.object({
  did: z.string(),
  cids: z.array(z.string()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoSyncGetBlocksRequest$ {
  /** @deprecated use `ComAtprotoSyncGetBlocksRequest$inboundSchema` instead. */
  export const inboundSchema = ComAtprotoSyncGetBlocksRequest$inboundSchema;
  /** @deprecated use `ComAtprotoSyncGetBlocksRequest$outboundSchema` instead. */
  export const outboundSchema = ComAtprotoSyncGetBlocksRequest$outboundSchema;
  /** @deprecated use `ComAtprotoSyncGetBlocksRequest$Outbound` instead. */
  export type Outbound = ComAtprotoSyncGetBlocksRequest$Outbound;
}

export function comAtprotoSyncGetBlocksRequestToJSON(
  comAtprotoSyncGetBlocksRequest: ComAtprotoSyncGetBlocksRequest,
): string {
  return JSON.stringify(
    ComAtprotoSyncGetBlocksRequest$outboundSchema.parse(
      comAtprotoSyncGetBlocksRequest,
    ),
  );
}

export function comAtprotoSyncGetBlocksRequestFromJSON(
  jsonString: string,
): SafeParseResult<ComAtprotoSyncGetBlocksRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ComAtprotoSyncGetBlocksRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ComAtprotoSyncGetBlocksRequest' from JSON`,
  );
}
