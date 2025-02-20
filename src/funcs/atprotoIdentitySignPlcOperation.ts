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

/**
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Signs a PLC operation to update some value(s) in the requesting DID's document.
 */
export function atprotoIdentitySignPlcOperation(
  client: BlueskyCore,
  request?: operations.ComAtprotoIdentitySignPlcOperationBody | undefined,
  options?: RequestOptions,
): APIPromise<
  Result<
    operations.ComAtprotoIdentitySignPlcOperationResponseBody,
    | errors.BadRequestComAtprotoIdentitySignPlcOperationResponseBodyError
    | errors.UnauthorizedComAtprotoIdentitySignPlcOperationResponseBodyError
    | errors.NotFoundError
    | errors.UnauthorizedError
    | errors.TimeoutError
    | errors.RateLimitedError
    | errors.BadRequestError
    | errors.TimeoutError
    | errors.NotFoundError
    | errors.InternalServerError
    | errors.BadRequestError
    | errors.UnauthorizedError
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

async function $do(
  client: BlueskyCore,
  request?: operations.ComAtprotoIdentitySignPlcOperationBody | undefined,
  options?: RequestOptions,
): Promise<
  [
    Result<
      operations.ComAtprotoIdentitySignPlcOperationResponseBody,
      | errors.BadRequestComAtprotoIdentitySignPlcOperationResponseBodyError
      | errors.UnauthorizedComAtprotoIdentitySignPlcOperationResponseBodyError
      | errors.NotFoundError
      | errors.UnauthorizedError
      | errors.TimeoutError
      | errors.RateLimitedError
      | errors.BadRequestError
      | errors.TimeoutError
      | errors.NotFoundError
      | errors.InternalServerError
      | errors.BadRequestError
      | errors.UnauthorizedError
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
      operations.ComAtprotoIdentitySignPlcOperationBody$outboundSchema
        .optional().parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return [parsed, { status: "invalid" }];
  }
  const payload = parsed.value;
  const body = payload === undefined
    ? null
    : encodeJSON("body", payload, { explode: true });

  const path = pathToFunc("/xrpc/com.atproto.identity.signPlcOperation")();

  const headers = new Headers(compactMap({
    "Content-Type": "application/json",
    Accept: "application/json",
  }));

  const secConfig = await extractSecurity(client._options.bearer);
  const securityInput = secConfig == null ? {} : { bearer: secConfig };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    baseURL: options?.serverURL ?? client._baseURL ?? "",
    operationID: "com.atproto.identity.signPlcOperation",
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
    operations.ComAtprotoIdentitySignPlcOperationResponseBody,
    | errors.BadRequestComAtprotoIdentitySignPlcOperationResponseBodyError
    | errors.UnauthorizedComAtprotoIdentitySignPlcOperationResponseBodyError
    | errors.NotFoundError
    | errors.UnauthorizedError
    | errors.TimeoutError
    | errors.RateLimitedError
    | errors.BadRequestError
    | errors.TimeoutError
    | errors.NotFoundError
    | errors.InternalServerError
    | errors.BadRequestError
    | errors.UnauthorizedError
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
      operations.ComAtprotoIdentitySignPlcOperationResponseBody$inboundSchema,
    ),
    M.jsonErr(
      400,
      errors
        .BadRequestComAtprotoIdentitySignPlcOperationResponseBodyError$inboundSchema,
    ),
    M.jsonErr(
      401,
      errors
        .UnauthorizedComAtprotoIdentitySignPlcOperationResponseBodyError$inboundSchema,
    ),
    M.jsonErr(404, errors.NotFoundError$inboundSchema),
    M.jsonErr([403, 407], errors.UnauthorizedError$inboundSchema),
    M.jsonErr(408, errors.TimeoutError$inboundSchema),
    M.jsonErr(429, errors.RateLimitedError$inboundSchema),
    M.jsonErr([413, 414, 415, 422, 431], errors.BadRequestError$inboundSchema),
    M.jsonErr(504, errors.TimeoutError$inboundSchema),
    M.jsonErr([501, 505], errors.NotFoundError$inboundSchema),
    M.jsonErr(
      [500, 502, 503, 506, 507, 508],
      errors.InternalServerError$inboundSchema,
    ),
    M.jsonErr(510, errors.BadRequestError$inboundSchema),
    M.jsonErr(511, errors.UnauthorizedError$inboundSchema),
    M.fail("4XX"),
    M.fail("5XX"),
  )(response, { extraFields: responseFields });
  if (!result.ok) {
    return [result, { status: "complete", request: req, response }];
  }

  return [result, { status: "complete", request: req, response }];
}
