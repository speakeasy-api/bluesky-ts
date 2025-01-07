/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { BlueskyCore } from "../core.js";
import { dlv } from "../lib/dlv.js";
import { encodeFormQuery } from "../lib/encodings.js";
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
import {
  createPageIterator,
  haltIterator,
  PageIterator,
  Paginator,
} from "../types/operations.js";

/**
 * *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*
 *
 * *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
 *
 * Find actors (profiles) matching search criteria. Does not require auth.
 */
export async function actorsSearch(
  client: BlueskyCore,
  request?: operations.AppBskyActorSearchActorsRequest | undefined,
  options?: RequestOptions,
): Promise<
  PageIterator<
    Result<
      operations.AppBskyActorSearchActorsResponse,
      | errors.AppBskyActorSearchActorsResponseBody
      | errors.AppBskyActorSearchActorsActorsResponseBody
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
    >,
    { cursor: string }
  >
> {
  const parsed = safeParse(
    request,
    (value) =>
      operations.AppBskyActorSearchActorsRequest$outboundSchema.optional()
        .parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return haltIterator(parsed);
  }
  const payload = parsed.value;
  const body = null;

  const path = pathToFunc("/xrpc/app.bsky.actor.searchActors")();

  const query = encodeFormQuery({
    "cursor": payload?.cursor,
    "limit": payload?.limit,
    "q": payload?.q,
  });

  const headers = new Headers({
    Accept: "application/json",
  });

  const secConfig = await extractSecurity(client._options.bearer);
  const securityInput = secConfig == null ? {} : { bearer: secConfig };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    operationID: "app.bsky.actor.searchActors",
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
    return haltIterator(requestRes);
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
    return haltIterator(doResult);
  }
  const response = doResult.value;

  const responseFields = {
    HttpMeta: { Response: response, Request: req },
  };

  const [result, raw] = await M.match<
    operations.AppBskyActorSearchActorsResponse,
    | errors.AppBskyActorSearchActorsResponseBody
    | errors.AppBskyActorSearchActorsActorsResponseBody
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
    M.json(200, operations.AppBskyActorSearchActorsResponse$inboundSchema, {
      key: "Result",
    }),
    M.jsonErr(400, errors.AppBskyActorSearchActorsResponseBody$inboundSchema),
    M.jsonErr(
      401,
      errors.AppBskyActorSearchActorsActorsResponseBody$inboundSchema,
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
    return haltIterator(result);
  }

  const nextFunc = (
    responseData: unknown,
  ): {
    next: Paginator<
      Result<
        operations.AppBskyActorSearchActorsResponse,
        | errors.AppBskyActorSearchActorsResponseBody
        | errors.AppBskyActorSearchActorsActorsResponseBody
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
    >;
    "~next"?: { cursor: string };
  } => {
    const nextCursor = dlv(responseData, "cursor");
    if (nextCursor == null) {
      return { next: () => null };
    }

    const nextVal = () =>
      actorsSearch(
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
  return { ...page, ...createPageIterator(page, (v) => !v.ok) };
}
