/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { BlueskyCore } from "../core.js";
import { encodeFormQuery } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { compactMap } from "../lib/primitives.js";
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
import { APICall, APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";

async function $do(
  client: BlueskyCore,
  request: operations.ComAtprotoSyncGetLatestCommitRequest,
  options?: RequestOptions,
): Promise<
  [
    Result<
      operations.ComAtprotoSyncGetLatestCommitResponseBody,
      | errors.ComAtprotoSyncGetLatestCommitResponseBody
      | errors.ComAtprotoSyncGetLatestCommitSyncsResponseBody
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
    >,
    APICall,
  ]
> {
  const parsed = safeParse(
    request,
    (value) =>
      operations.ComAtprotoSyncGetLatestCommitRequest$outboundSchema.parse(
        value,
      ),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return [parsed, { status: "invalid" }];
  }
  const payload = parsed.value;
  const body = null;

  const path = pathToFunc("/xrpc/com.atproto.sync.getLatestCommit")();

  const query = encodeFormQuery({
    "did": payload.did,
  });

  const headers = new Headers(compactMap({
    Accept: "application/json",
  }));

  const secConfig = await extractSecurity(client._options.bearer);
  const securityInput = secConfig == null ? {} : { bearer: secConfig };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    baseURL: options?.serverURL ?? "",
    operationID: "com.atproto.sync.getLatestCommit",
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
    method: "GET",
    baseURL: options?.serverURL,
    path: path,
    headers: headers,
    query: query,
    body: body,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return [requestRes, { status: "invalid" }];
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
    return [doResult, { status: "request-error", request: req }];
  }
  const response = doResult.value;

  const responseFields = {
    HttpMeta: { Response: response, Request: req },
  };

  const [result] = await M.match<
    operations.ComAtprotoSyncGetLatestCommitResponseBody,
    | errors.ComAtprotoSyncGetLatestCommitResponseBody
    | errors.ComAtprotoSyncGetLatestCommitSyncsResponseBody
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
    M.json(
      200,
      operations.ComAtprotoSyncGetLatestCommitResponseBody$inboundSchema,
    ),
    M.jsonErr(
      400,
      errors.ComAtprotoSyncGetLatestCommitResponseBody$inboundSchema,
    ),
    M.jsonErr(
      401,
      errors.ComAtprotoSyncGetLatestCommitSyncsResponseBody$inboundSchema,
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
    return [result, { status: "complete", request: req, response }];
  }

  return [result, { status: "complete", request: req, response }];
}

/**
 * This endpoint is part of the atproto repository synchronization APIs. Requests usually do not require authentication, and can be made to PDS intances or Relay instances.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Get the current commit CID & revision of the specified repo. Does not require auth.
 */
export function syncsGetLatestCommit(
  client: BlueskyCore,
  request: operations.ComAtprotoSyncGetLatestCommitRequest,
  options?: RequestOptions,
): APIPromise<
  Result<
    operations.ComAtprotoSyncGetLatestCommitResponseBody,
    | errors.ComAtprotoSyncGetLatestCommitResponseBody
    | errors.ComAtprotoSyncGetLatestCommitSyncsResponseBody
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
  return new APIPromise($do(
    client,
    request,
    options,
  ));
}
