/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { BlueskyCore } from "../core.js";
import { encodeJSON } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { compactMap } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import * as components from "../models/components/index.js";
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
import { Result } from "../types/fp.js";

/**
 * *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Create or update set metadata
 */
export async function ozoneSetUpsert(
  client: BlueskyCore,
  request: components.ToolsOzoneSetDefsSet,
  options?: RequestOptions,
): Promise<
  Result<
    components.ToolsOzoneSetDefsSetView,
    | errors.ToolsOzoneSetUpsertSetResponseBody
    | errors.ToolsOzoneSetUpsertSetOzoneSetResponseBody
    | errors.NotFound
    | errors.Unauthorized
    | errors.Timeout
    | errors.RateLimited
    | errors.BadRequest
    | errors.Timeout
    | errors.NotFound
    | errors.InternalServerError
    | errors.BadRequest
    | errors.Unauthorized
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
    (value) => components.ToolsOzoneSetDefsSet$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return parsed;
  }
  const payload = parsed.value;
  const body = encodeJSON("body", payload, { explode: true });

  const path = pathToFunc("/xrpc/tools.ozone.set.upsertSet")();

  const headers = new Headers(compactMap({
    "Content-Type": "application/json",
    Accept: "application/json",
  }));

  const secConfig = await extractSecurity(client._options.bearer);
  const securityInput = secConfig == null ? {} : { bearer: secConfig };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    baseURL: options?.serverURL ?? "",
    operationID: "tools.ozone.set.upsertSet",
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
    components.ToolsOzoneSetDefsSetView,
    | errors.ToolsOzoneSetUpsertSetResponseBody
    | errors.ToolsOzoneSetUpsertSetOzoneSetResponseBody
    | errors.NotFound
    | errors.Unauthorized
    | errors.Timeout
    | errors.RateLimited
    | errors.BadRequest
    | errors.Timeout
    | errors.NotFound
    | errors.InternalServerError
    | errors.BadRequest
    | errors.Unauthorized
    | APIError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(200, components.ToolsOzoneSetDefsSetView$inboundSchema),
    M.jsonErr(400, errors.ToolsOzoneSetUpsertSetResponseBody$inboundSchema),
    M.jsonErr(
      401,
      errors.ToolsOzoneSetUpsertSetOzoneSetResponseBody$inboundSchema,
    ),
    M.jsonErr(404, errors.NotFound$inboundSchema),
    M.jsonErr([403, 407], errors.Unauthorized$inboundSchema),
    M.jsonErr(408, errors.Timeout$inboundSchema),
    M.jsonErr(429, errors.RateLimited$inboundSchema),
    M.jsonErr([413, 414, 415, 422, 431], errors.BadRequest$inboundSchema),
    M.jsonErr(504, errors.Timeout$inboundSchema),
    M.jsonErr([501, 505], errors.NotFound$inboundSchema),
    M.jsonErr(
      [500, 502, 503, 506, 507, 508],
      errors.InternalServerError$inboundSchema,
    ),
    M.jsonErr(510, errors.BadRequest$inboundSchema),
    M.jsonErr(511, errors.Unauthorized$inboundSchema),
    M.fail("4XX"),
    M.fail("5XX"),
  )(response, { extraFields: responseFields });
  if (!result.ok) {
    return result;
  }

  return result;
}
