/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { BlueskyCore } from "../core.js";
import { dlv } from "../lib/dlv.js";
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
import {
  createPageIterator,
  haltIterator,
  PageIterator,
  Paginator,
} from "../types/operations.js";

/**
 * *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Get accounts that share some matching threat signatures with the root account.
 */
export function ozoneSignaturesFindRelatedAccounts(
  client: BlueskyCore,
  request: operations.ToolsOzoneSignatureFindRelatedAccountsRequest,
  options?: RequestOptions,
): APIPromise<
  PageIterator<
    Result<
      operations.ToolsOzoneSignatureFindRelatedAccountsResponse,
      | errors.BadRequestToolsOzoneSignatureFindRelatedAccountsResponseBodyError
      | errors.UnauthorizedToolsOzoneSignatureFindRelatedAccountsResponseBodyError
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
    { cursor: string }
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
  request: operations.ToolsOzoneSignatureFindRelatedAccountsRequest,
  options?: RequestOptions,
): Promise<
  [
    PageIterator<
      Result<
        operations.ToolsOzoneSignatureFindRelatedAccountsResponse,
        | errors.BadRequestToolsOzoneSignatureFindRelatedAccountsResponseBodyError
        | errors.UnauthorizedToolsOzoneSignatureFindRelatedAccountsResponseBodyError
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
      { cursor: string }
    >,
    APICall,
  ]
> {
  const parsed = safeParse(
    request,
    (value) =>
      operations.ToolsOzoneSignatureFindRelatedAccountsRequest$outboundSchema
        .parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return [haltIterator(parsed), { status: "invalid" }];
  }
  const payload = parsed.value;
  const body = null;

  const path = pathToFunc("/xrpc/tools.ozone.signature.findRelatedAccounts")();

  const query = encodeFormQuery({
    "cursor": payload.cursor,
    "did": payload.did,
    "limit": payload.limit,
  });

  const headers = new Headers(compactMap({
    Accept: "application/json",
  }));

  const secConfig = await extractSecurity(client._options.bearer);
  const securityInput = secConfig == null ? {} : { bearer: secConfig };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    baseURL: options?.serverURL ?? "",
    operationID: "tools.ozone.signature.findRelatedAccounts",
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
    return [haltIterator(requestRes), { status: "invalid" }];
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
    return [haltIterator(doResult), { status: "request-error", request: req }];
  }
  const response = doResult.value;

  const responseFields = {
    HttpMeta: { Response: response, Request: req },
  };

  const [result, raw] = await M.match<
    operations.ToolsOzoneSignatureFindRelatedAccountsResponse,
    | errors.BadRequestToolsOzoneSignatureFindRelatedAccountsResponseBodyError
    | errors.UnauthorizedToolsOzoneSignatureFindRelatedAccountsResponseBodyError
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
      operations.ToolsOzoneSignatureFindRelatedAccountsResponse$inboundSchema,
      { key: "Result" },
    ),
    M.jsonErr(
      400,
      errors
        .BadRequestToolsOzoneSignatureFindRelatedAccountsResponseBodyError$inboundSchema,
    ),
    M.jsonErr(
      401,
      errors
        .UnauthorizedToolsOzoneSignatureFindRelatedAccountsResponseBodyError$inboundSchema,
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
    return [haltIterator(result), {
      status: "complete",
      request: req,
      response,
    }];
  }

  const nextFunc = (
    responseData: unknown,
  ): {
    next: Paginator<
      Result<
        operations.ToolsOzoneSignatureFindRelatedAccountsResponse,
        | errors.BadRequestToolsOzoneSignatureFindRelatedAccountsResponseBodyError
        | errors.UnauthorizedToolsOzoneSignatureFindRelatedAccountsResponseBodyError
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
    >;
    "~next"?: { cursor: string };
  } => {
    const nextCursor = dlv(responseData, "cursor");
    if (nextCursor == null) {
      return { next: () => null };
    }

    const nextVal = () =>
      ozoneSignaturesFindRelatedAccounts(
        client,
        {
          ...request,
          cursor: nextCursor,
        },
        options,
      );

    return { next: nextVal, "~next": { cursor: nextCursor } };
  };

  const page = { ...result, ...nextFunc(raw) };
  return [{ ...page, ...createPageIterator(page, (v) => !v.ok) }, {
    status: "complete",
    request: req,
    response,
  }];
}
