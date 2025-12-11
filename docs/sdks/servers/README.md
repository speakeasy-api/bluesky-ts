# Servers

## Overview

### Available Operations

* [getServiceAuth](#getserviceauth) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a signed token on behalf of the requesting DID for the requested service.
* [getSession](#getsession) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get information about the current auth session. Requires auth.
* [reserveSigningKey](#reservesigningkey) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Reserve a repo signing key, for use with account creation. Necessary so that a DID PLC update operation can be constructed during an account migraiton. Public and does not require auth; implemented by PDS. NOTE: this endpoint may change when full account migration is implemented.
* [updateEmail](#updateemail) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Update an account's email.

## getServiceAuth

*This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a signed token on behalf of the requesting DID for the requested service.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="com.atproto.server.getServiceAuth" method="get" path="/xrpc/com.atproto.server.getServiceAuth" -->
```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.servers.getServiceAuth({
    aud: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlueskyCore } from "@speakeasy-sdks/bluesky/core.js";
import { serversGetServiceAuth } from "@speakeasy-sdks/bluesky/funcs/serversGetServiceAuth.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await serversGetServiceAuth(bluesky, {
    aud: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("serversGetServiceAuth failed:", res.error);
  }
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
  useServersGetServiceAuth,
  useServersGetServiceAuthSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchServersGetServiceAuth,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateServersGetServiceAuth,
  invalidateAllServersGetServiceAuth,
} from "@speakeasy-sdks/bluesky/react-query/serversGetServiceAuth.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ComAtprotoServerGetServiceAuthRequest](../../models/operations/comatprotoservergetserviceauthrequest.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ComAtprotoServerGetServiceAuthResponse](../../models/operations/comatprotoservergetserviceauthresponse.md)\>**

### Errors

| Error Type                                            | Status Code                                           | Content Type                                          |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| errors.ComAtprotoServerGetServiceAuthBadRequestError  | 400                                                   | application/json                                      |
| errors.ComAtprotoServerGetServiceAuthAuthMissingError | 401                                                   | application/json                                      |
| errors.NotFoundError                                  | 404                                                   | application/json                                      |
| errors.UnauthorizedError                              | 403, 407                                              | application/json                                      |
| errors.TimeoutError                                   | 408                                                   | application/json                                      |
| errors.RateLimitedError                               | 429                                                   | application/json                                      |
| errors.BadRequestError                                | 413, 414, 415, 422, 431                               | application/json                                      |
| errors.TimeoutError                                   | 504                                                   | application/json                                      |
| errors.NotFoundError                                  | 501, 505                                              | application/json                                      |
| errors.InternalServerError                            | 500, 502, 503, 506, 507, 508                          | application/json                                      |
| errors.BadRequestError                                | 510                                                   | application/json                                      |
| errors.UnauthorizedError                              | 511                                                   | application/json                                      |
| errors.APIError                                       | 4XX, 5XX                                              | \*/\*                                                 |

## getSession

*This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get information about the current auth session. Requires auth.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="com.atproto.server.getSession" method="get" path="/xrpc/com.atproto.server.getSession" -->
```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.servers.getSession();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlueskyCore } from "@speakeasy-sdks/bluesky/core.js";
import { serversGetSession } from "@speakeasy-sdks/bluesky/funcs/serversGetSession.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await serversGetSession(bluesky);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("serversGetSession failed:", res.error);
  }
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
  useServersGetSession,
  useServersGetSessionSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchServersGetSession,
  
  // Utility to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateAllServersGetSession,
} from "@speakeasy-sdks/bluesky/react-query/serversGetSession.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ComAtprotoServerGetSessionResponse](../../models/operations/comatprotoservergetsessionresponse.md)\>**

### Errors

| Error Type                                        | Status Code                                       | Content Type                                      |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| errors.ComAtprotoServerGetSessionBadRequestError  | 400                                               | application/json                                  |
| errors.ComAtprotoServerGetSessionAuthMissingError | 401                                               | application/json                                  |
| errors.NotFoundError                              | 404                                               | application/json                                  |
| errors.UnauthorizedError                          | 403, 407                                          | application/json                                  |
| errors.TimeoutError                               | 408                                               | application/json                                  |
| errors.RateLimitedError                           | 429                                               | application/json                                  |
| errors.BadRequestError                            | 413, 414, 415, 422, 431                           | application/json                                  |
| errors.TimeoutError                               | 504                                               | application/json                                  |
| errors.NotFoundError                              | 501, 505                                          | application/json                                  |
| errors.InternalServerError                        | 500, 502, 503, 506, 507, 508                      | application/json                                  |
| errors.BadRequestError                            | 510                                               | application/json                                  |
| errors.UnauthorizedError                          | 511                                               | application/json                                  |
| errors.APIError                                   | 4XX, 5XX                                          | \*/\*                                             |

## reserveSigningKey

*This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Reserve a repo signing key, for use with account creation. Necessary so that a DID PLC update operation can be constructed during an account migraiton. Public and does not require auth; implemented by PDS. NOTE: this endpoint may change when full account migration is implemented.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="com.atproto.server.reserveSigningKey" method="post" path="/xrpc/com.atproto.server.reserveSigningKey" -->
```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.servers.reserveSigningKey({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlueskyCore } from "@speakeasy-sdks/bluesky/core.js";
import { serversReserveSigningKey } from "@speakeasy-sdks/bluesky/funcs/serversReserveSigningKey.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await serversReserveSigningKey(bluesky, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("serversReserveSigningKey failed:", res.error);
  }
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
  useServersReserveSigningKeyMutation
} from "@speakeasy-sdks/bluesky/react-query/serversReserveSigningKey.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ComAtprotoServerReserveSigningKeyRequest](../../models/operations/comatprotoserverreservesigningkeyrequest.md)                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ComAtprotoServerReserveSigningKeyResponse](../../models/operations/comatprotoserverreservesigningkeyresponse.md)\>**

### Errors

| Error Type                                               | Status Code                                              | Content Type                                             |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| errors.ComAtprotoServerReserveSigningKeyBadRequestError  | 400                                                      | application/json                                         |
| errors.ComAtprotoServerReserveSigningKeyAuthMissingError | 401                                                      | application/json                                         |
| errors.NotFoundError                                     | 404                                                      | application/json                                         |
| errors.UnauthorizedError                                 | 403, 407                                                 | application/json                                         |
| errors.TimeoutError                                      | 408                                                      | application/json                                         |
| errors.RateLimitedError                                  | 429                                                      | application/json                                         |
| errors.BadRequestError                                   | 413, 414, 415, 422, 431                                  | application/json                                         |
| errors.TimeoutError                                      | 504                                                      | application/json                                         |
| errors.NotFoundError                                     | 501, 505                                                 | application/json                                         |
| errors.InternalServerError                               | 500, 502, 503, 506, 507, 508                             | application/json                                         |
| errors.BadRequestError                                   | 510                                                      | application/json                                         |
| errors.UnauthorizedError                                 | 511                                                      | application/json                                         |
| errors.APIError                                          | 4XX, 5XX                                                 | \*/\*                                                    |

## updateEmail

*This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Update an account's email.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="com.atproto.server.updateEmail" method="post" path="/xrpc/com.atproto.server.updateEmail" -->
```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  await bluesky.servers.updateEmail({
    email: "Keyshawn_Emmerich@hotmail.com",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlueskyCore } from "@speakeasy-sdks/bluesky/core.js";
import { serversUpdateEmail } from "@speakeasy-sdks/bluesky/funcs/serversUpdateEmail.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await serversUpdateEmail(bluesky, {
    email: "Keyshawn_Emmerich@hotmail.com",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("serversUpdateEmail failed:", res.error);
  }
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
  useServersUpdateEmailMutation
} from "@speakeasy-sdks/bluesky/react-query/serversUpdateEmail.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ComAtprotoServerUpdateEmailRequest](../../models/operations/comatprotoserverupdateemailrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                                         | Status Code                                        | Content Type                                       |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| errors.ComAtprotoServerUpdateEmailBadRequestError  | 400                                                | application/json                                   |
| errors.ComAtprotoServerUpdateEmailAuthMissingError | 401                                                | application/json                                   |
| errors.NotFoundError                               | 404                                                | application/json                                   |
| errors.UnauthorizedError                           | 403, 407                                           | application/json                                   |
| errors.TimeoutError                                | 408                                                | application/json                                   |
| errors.RateLimitedError                            | 429                                                | application/json                                   |
| errors.BadRequestError                             | 413, 414, 415, 422, 431                            | application/json                                   |
| errors.TimeoutError                                | 504                                                | application/json                                   |
| errors.NotFoundError                               | 501, 505                                           | application/json                                   |
| errors.InternalServerError                         | 500, 502, 503, 506, 507, 508                       | application/json                                   |
| errors.BadRequestError                             | 510                                                | application/json                                   |
| errors.UnauthorizedError                           | 511                                                | application/json                                   |
| errors.APIError                                    | 4XX, 5XX                                           | \*/\*                                              |