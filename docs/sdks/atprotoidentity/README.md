# AtprotoIdentity
(*atprotoIdentity*)

## Overview

### Available Operations

* [requestPlcOperationSignature](#requestplcoperationsignature) - *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Request an email with a code to in order to request a signed PLC operation. Requires Auth.
* [resolveHandle](#resolvehandle) - *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Resolves a handle (domain name) to a DID.
* [signPlcOperation](#signplcoperation) - *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Signs a PLC operation to update some value(s) in the requesting DID's document.

## requestPlcOperationSignature

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Request an email with a code to in order to request a signed PLC operation. Requires Auth.

### Example Usage

```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  await bluesky.atprotoIdentity.requestPlcOperationSignature();


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlueskyCore } from "@speakeasy-sdks/bluesky/core.js";
import { atprotoIdentityRequestPlcOperationSignature } from "@speakeasy-sdks/bluesky/funcs/atprotoIdentityRequestPlcOperationSignature.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await atprotoIdentityRequestPlcOperationSignature(bluesky);

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### React hooks and utilities

This method can be used in React components through the following hooks and
associated utilities.

> Check out [this guide][hook-guide] for information about each of the utilities
> below and how to get started using React hooks.

[hook-guide]: ../../../REACT_QUERY.md

```tsx
import {
  // Mutation hook for triggering the API call.
  useAtprotoIdentityRequestPlcOperationSignatureMutation
} from "@speakeasy-sdks/bluesky/react-query/atprotoIdentityRequestPlcOperationSignature.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                                                                         | Status Code                                                                        | Content Type                                                                       |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| errors.BadRequestComAtprotoIdentityRequestPlcOperationSignatureResponseBodyError   | 400                                                                                | application/json                                                                   |
| errors.UnauthorizedComAtprotoIdentityRequestPlcOperationSignatureResponseBodyError | 401                                                                                | application/json                                                                   |
| errors.NotFoundError                                                               | 404                                                                                | application/json                                                                   |
| errors.UnauthorizedError                                                           | 403, 407                                                                           | application/json                                                                   |
| errors.TimeoutError                                                                | 408                                                                                | application/json                                                                   |
| errors.RateLimitedError                                                            | 429                                                                                | application/json                                                                   |
| errors.BadRequestError                                                             | 413, 414, 415, 422, 431                                                            | application/json                                                                   |
| errors.TimeoutError                                                                | 504                                                                                | application/json                                                                   |
| errors.NotFoundError                                                               | 501, 505                                                                           | application/json                                                                   |
| errors.InternalServerError                                                         | 500, 502, 503, 506, 507, 508                                                       | application/json                                                                   |
| errors.BadRequestError                                                             | 510                                                                                | application/json                                                                   |
| errors.UnauthorizedError                                                           | 511                                                                                | application/json                                                                   |
| errors.APIError                                                                    | 4XX, 5XX                                                                           | \*/\*                                                                              |

## resolveHandle

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Resolves a handle (domain name) to a DID.

### Example Usage

```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.atprotoIdentity.resolveHandle({
    handle: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlueskyCore } from "@speakeasy-sdks/bluesky/core.js";
import { atprotoIdentityResolveHandle } from "@speakeasy-sdks/bluesky/funcs/atprotoIdentityResolveHandle.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await atprotoIdentityResolveHandle(bluesky, {
    handle: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### React hooks and utilities

This method can be used in React components through the following hooks and
associated utilities.

> Check out [this guide][hook-guide] for information about each of the utilities
> below and how to get started using React hooks.

[hook-guide]: ../../../REACT_QUERY.md

```tsx
import {
  // Query hooks for fetching data.
  useDidForProfile,
  useDidForProfileSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchDidForProfile,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateDidForProfile,
  invalidateAllDidForProfile,
} from "@speakeasy-sdks/bluesky/react-query/atprotoIdentityResolveHandle.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ComAtprotoIdentityResolveHandleRequest](../../models/operations/comatprotoidentityresolvehandlerequest.md)                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ComAtprotoIdentityResolveHandleResponseBody](../../models/operations/comatprotoidentityresolvehandleresponsebody.md)\>**

### Errors

| Error Type                                                          | Status Code                                                         | Content Type                                                        |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| errors.BadRequestComAtprotoIdentityResolveHandleResponseBodyError   | 400                                                                 | application/json                                                    |
| errors.UnauthorizedComAtprotoIdentityResolveHandleResponseBodyError | 401                                                                 | application/json                                                    |
| errors.NotFoundError                                                | 404                                                                 | application/json                                                    |
| errors.UnauthorizedError                                            | 403, 407                                                            | application/json                                                    |
| errors.TimeoutError                                                 | 408                                                                 | application/json                                                    |
| errors.RateLimitedError                                             | 429                                                                 | application/json                                                    |
| errors.BadRequestError                                              | 413, 414, 415, 422, 431                                             | application/json                                                    |
| errors.TimeoutError                                                 | 504                                                                 | application/json                                                    |
| errors.NotFoundError                                                | 501, 505                                                            | application/json                                                    |
| errors.InternalServerError                                          | 500, 502, 503, 506, 507, 508                                        | application/json                                                    |
| errors.BadRequestError                                              | 510                                                                 | application/json                                                    |
| errors.UnauthorizedError                                            | 511                                                                 | application/json                                                    |
| errors.APIError                                                     | 4XX, 5XX                                                            | \*/\*                                                               |

## signPlcOperation

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Signs a PLC operation to update some value(s) in the requesting DID's document.

### Example Usage

```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.atprotoIdentity.signPlcOperation();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlueskyCore } from "@speakeasy-sdks/bluesky/core.js";
import { atprotoIdentitySignPlcOperation } from "@speakeasy-sdks/bluesky/funcs/atprotoIdentitySignPlcOperation.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await atprotoIdentitySignPlcOperation(bluesky);

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### React hooks and utilities

This method can be used in React components through the following hooks and
associated utilities.

> Check out [this guide][hook-guide] for information about each of the utilities
> below and how to get started using React hooks.

[hook-guide]: ../../../REACT_QUERY.md

```tsx
import {
  // Mutation hook for triggering the API call.
  useAtprotoIdentitySignPlcOperationMutation
} from "@speakeasy-sdks/bluesky/react-query/atprotoIdentitySignPlcOperation.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ComAtprotoIdentitySignPlcOperationBody](../../models/operations/comatprotoidentitysignplcoperationbody.md)                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ComAtprotoIdentitySignPlcOperationResponseBody](../../models/operations/comatprotoidentitysignplcoperationresponsebody.md)\>**

### Errors

| Error Type                                                             | Status Code                                                            | Content Type                                                           |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| errors.BadRequestComAtprotoIdentitySignPlcOperationResponseBodyError   | 400                                                                    | application/json                                                       |
| errors.UnauthorizedComAtprotoIdentitySignPlcOperationResponseBodyError | 401                                                                    | application/json                                                       |
| errors.NotFoundError                                                   | 404                                                                    | application/json                                                       |
| errors.UnauthorizedError                                               | 403, 407                                                               | application/json                                                       |
| errors.TimeoutError                                                    | 408                                                                    | application/json                                                       |
| errors.RateLimitedError                                                | 429                                                                    | application/json                                                       |
| errors.BadRequestError                                                 | 413, 414, 415, 422, 431                                                | application/json                                                       |
| errors.TimeoutError                                                    | 504                                                                    | application/json                                                       |
| errors.NotFoundError                                                   | 501, 505                                                               | application/json                                                       |
| errors.InternalServerError                                             | 500, 502, 503, 506, 507, 508                                           | application/json                                                       |
| errors.BadRequestError                                                 | 510                                                                    | application/json                                                       |
| errors.UnauthorizedError                                               | 511                                                                    | application/json                                                       |
| errors.APIError                                                        | 4XX, 5XX                                                               | \*/\*                                                                  |