/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import * as b64$ from "../../lib/base64.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * OK
 */
export type ComAtprotoRepoUploadBlobResponseBody = {
  blob: Uint8Array | string;
};

/** @internal */
export const ComAtprotoRepoUploadBlobResponseBody$inboundSchema: z.ZodType<
  ComAtprotoRepoUploadBlobResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  blob: b64$.zodInbound,
});

/** @internal */
export type ComAtprotoRepoUploadBlobResponseBody$Outbound = {
  blob: Uint8Array;
};

/** @internal */
export const ComAtprotoRepoUploadBlobResponseBody$outboundSchema: z.ZodType<
  ComAtprotoRepoUploadBlobResponseBody$Outbound,
  z.ZodTypeDef,
  ComAtprotoRepoUploadBlobResponseBody
> = z.object({
  blob: b64$.zodOutbound,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoRepoUploadBlobResponseBody$ {
  /** @deprecated use `ComAtprotoRepoUploadBlobResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ComAtprotoRepoUploadBlobResponseBody$inboundSchema;
  /** @deprecated use `ComAtprotoRepoUploadBlobResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ComAtprotoRepoUploadBlobResponseBody$outboundSchema;
  /** @deprecated use `ComAtprotoRepoUploadBlobResponseBody$Outbound` instead. */
  export type Outbound = ComAtprotoRepoUploadBlobResponseBody$Outbound;
}

export function comAtprotoRepoUploadBlobResponseBodyToJSON(
  comAtprotoRepoUploadBlobResponseBody: ComAtprotoRepoUploadBlobResponseBody,
): string {
  return JSON.stringify(
    ComAtprotoRepoUploadBlobResponseBody$outboundSchema.parse(
      comAtprotoRepoUploadBlobResponseBody,
    ),
  );
}

export function comAtprotoRepoUploadBlobResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<ComAtprotoRepoUploadBlobResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      ComAtprotoRepoUploadBlobResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ComAtprotoRepoUploadBlobResponseBody' from JSON`,
  );
}
