/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { BlueskyCore } from "../core.js";
import { encodeJSON } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { safeParse } from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import { APIError } from "../models/errors/apierror.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";

/**
 * *This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Re-enable an account's ability to receive invite codes.
 */
export async function adminsEnableAccountInvites(
  client: BlueskyCore,
  request: operations.ComAtprotoAdminEnableAccountInvitesRequestBody,
  options?: RequestOptions,
): Promise<
  Result<
    void,
    | errors.ComAtprotoAdminEnableAccountInvitesResponseBody
    | errors.ComAtprotoAdminEnableAccountInvitesAdminsResponseBody
    | errors.Unauthorized
    | errors.NotFound
    | errors.Timeout
    | errors.BadRequest
    | errors.RateLimited
    | errors.InternalServerError
    | APIError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  const parsed = safeParse(
    request,
    (value) =>
      operations.ComAtprotoAdminEnableAccountInvitesRequestBody$outboundSchema
        .parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return parsed;
  }
  const payload = parsed.value;
  const body = encodeJSON("body", payload, { explode: true });

  const path = pathToFunc("/xrpc/com.atproto.admin.enableAccountInvites")();

  const headers = new Headers({
    "Content-Type": "application/json",
    Accept: "application/json",
  });

  const secConfig = await extractSecurity(client._options.bearer);
  const securityInput = secConfig == null ? {} : { bearer: secConfig };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    operationID: "com.atproto.admin.enableAccountInvites",
    oAuth2Scopes: [],

    resolvedSecurity: requestSecurity,

    securitySource: client._options.bearer,
    retryConfig: options?.retries
      || client._options.retryConfig
      || { strategy: "none" },
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  };

  const requestRes = client._createRequest(context, {
    security: requestSecurity,
    method: "POST",
    baseURL: options?.serverURL,
    path: path,
    headers: headers,
    body: body,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return requestRes;
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: [
      "400",
      "401",
      "403",
      "404",
      "407",
      "408",
      "413",
      "414",
      "415",
      "422",
      "429",
      "431",
      "4XX",
      "500",
      "501",
      "502",
      "503",
      "504",
      "505",
      "506",
      "507",
      "508",
      "510",
      "511",
      "5XX",
    ],
    retryConfig: context.retryConfig,
    retryCodes: context.retryCodes,
  });
  if (!doResult.ok) {
    return doResult;
  }
  const response = doResult.value;

  const responseFields = {
    HttpMeta: { Response: response, Request: req },
  };

  const [result] = await M.match<
    void,
    | errors.ComAtprotoAdminEnableAccountInvitesResponseBody
    | errors.ComAtprotoAdminEnableAccountInvitesAdminsResponseBody
    | errors.Unauthorized
    | errors.NotFound
    | errors.Timeout
    | errors.BadRequest
    | errors.RateLimited
    | errors.InternalServerError
    | APIError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.nil(200, z.void()),
    M.jsonErr(
      400,
      errors.ComAtprotoAdminEnableAccountInvitesResponseBody$inboundSchema,
    ),
    M.jsonErr(
      401,
      errors
        .ComAtprotoAdminEnableAccountInvitesAdminsResponseBody$inboundSchema,
    ),
    M.jsonErr([403, 407, 511], errors.Unauthorized$inboundSchema),
    M.jsonErr([404, 501, 505], errors.NotFound$inboundSchema),
    M.jsonErr([408, 504], errors.Timeout$inboundSchema),
    M.jsonErr([413, 414, 415, 422, 431, 510], errors.BadRequest$inboundSchema),
    M.jsonErr(429, errors.RateLimited$inboundSchema),
    M.jsonErr(
      [500, 502, 503, 506, 507, 508],
      errors.InternalServerError$inboundSchema,
    ),
    M.fail(["4XX", "5XX"]),
  )(response, { extraFields: responseFields });
  if (!result.ok) {
    return result;
  }

  return result;
}
