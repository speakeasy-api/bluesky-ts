/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ComAtprotoAdminEnableAccountInvitesBody = {
  account: string;
  /**
   * Optional reason for enabled invites.
   */
  note?: string | undefined;
};

/** @internal */
export const ComAtprotoAdminEnableAccountInvitesBody$inboundSchema: z.ZodType<
  ComAtprotoAdminEnableAccountInvitesBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  account: z.string(),
  note: z.string().optional(),
});

/** @internal */
export type ComAtprotoAdminEnableAccountInvitesBody$Outbound = {
  account: string;
  note?: string | undefined;
};

/** @internal */
export const ComAtprotoAdminEnableAccountInvitesBody$outboundSchema: z.ZodType<
  ComAtprotoAdminEnableAccountInvitesBody$Outbound,
  z.ZodTypeDef,
  ComAtprotoAdminEnableAccountInvitesBody
> = z.object({
  account: z.string(),
  note: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoAdminEnableAccountInvitesBody$ {
  /** @deprecated use `ComAtprotoAdminEnableAccountInvitesBody$inboundSchema` instead. */
  export const inboundSchema =
    ComAtprotoAdminEnableAccountInvitesBody$inboundSchema;
  /** @deprecated use `ComAtprotoAdminEnableAccountInvitesBody$outboundSchema` instead. */
  export const outboundSchema =
    ComAtprotoAdminEnableAccountInvitesBody$outboundSchema;
  /** @deprecated use `ComAtprotoAdminEnableAccountInvitesBody$Outbound` instead. */
  export type Outbound = ComAtprotoAdminEnableAccountInvitesBody$Outbound;
}

export function comAtprotoAdminEnableAccountInvitesBodyToJSON(
  comAtprotoAdminEnableAccountInvitesBody:
    ComAtprotoAdminEnableAccountInvitesBody,
): string {
  return JSON.stringify(
    ComAtprotoAdminEnableAccountInvitesBody$outboundSchema.parse(
      comAtprotoAdminEnableAccountInvitesBody,
    ),
  );
}

export function comAtprotoAdminEnableAccountInvitesBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  ComAtprotoAdminEnableAccountInvitesBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      ComAtprotoAdminEnableAccountInvitesBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'ComAtprotoAdminEnableAccountInvitesBody' from JSON`,
  );
}
