# Servers
(*servers*)

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

```typescript
import { Bluesky } from "@speakeasy-api/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.servers.getServiceAuth({
    aud: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlueskyCore } from "@speakeasy-api/bluesky/core.js";
import { serversGetServiceAuth } from "@speakeasy-api/bluesky/funcs/serversGetServiceAuth.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await serversGetServiceAuth(bluesky, {
    aud: "<id>",
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
} from "@speakeasy-api/bluesky/react-query/serversGetServiceAuth.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ComAtprotoServerGetServiceAuthRequest](../../models/operations/comatprotoservergetserviceauthrequest.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ComAtprotoServerGetServiceAuthResponseBody](../../models/operations/comatprotoservergetserviceauthresponsebody.md)\>**

### Errors

| Error Type                                               | Status Code                                              | Content Type                                             |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| errors.ComAtprotoServerGetServiceAuthResponseBody        | 400                                                      | application/json                                         |
| errors.ComAtprotoServerGetServiceAuthServersResponseBody | 401                                                      | application/json                                         |
| errors.Unauthorized                                      | 403, 407, 511                                            | application/json                                         |
| errors.NotFound                                          | 404, 501, 505                                            | application/json                                         |
| errors.Timeout                                           | 408, 504                                                 | application/json                                         |
| errors.BadRequest                                        | 413, 414, 415, 422, 431, 510                             | application/json                                         |
| errors.RateLimited                                       | 429                                                      | application/json                                         |
| errors.InternalServerError                               | 500, 502, 503, 506, 507, 508                             | application/json                                         |
| errors.APIError                                          | 4XX, 5XX                                                 | \*/\*                                                    |

## getSession

*This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get information about the current auth session. Requires auth.

### Example Usage

```typescript
import { Bluesky } from "@speakeasy-api/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.servers.getSession();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlueskyCore } from "@speakeasy-api/bluesky/core.js";
import { serversGetSession } from "@speakeasy-api/bluesky/funcs/serversGetSession.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await serversGetSession(bluesky);

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
  useServersGetSession,
  useServersGetSessionSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchServersGetSession,
  
  // Utility to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateAllServersGetSession,
} from "@speakeasy-api/bluesky/react-query/serversGetSession.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ComAtprotoServerGetSessionResponseBody](../../models/operations/comatprotoservergetsessionresponsebody.md)\>**

### Errors

| Error Type                                           | Status Code                                          | Content Type                                         |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| errors.ComAtprotoServerGetSessionResponseBody        | 400                                                  | application/json                                     |
| errors.ComAtprotoServerGetSessionServersResponseBody | 401                                                  | application/json                                     |
| errors.Unauthorized                                  | 403, 407, 511                                        | application/json                                     |
| errors.NotFound                                      | 404, 501, 505                                        | application/json                                     |
| errors.Timeout                                       | 408, 504                                             | application/json                                     |
| errors.BadRequest                                    | 413, 414, 415, 422, 431, 510                         | application/json                                     |
| errors.RateLimited                                   | 429                                                  | application/json                                     |
| errors.InternalServerError                           | 500, 502, 503, 506, 507, 508                         | application/json                                     |
| errors.APIError                                      | 4XX, 5XX                                             | \*/\*                                                |

## reserveSigningKey

*This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Reserve a repo signing key, for use with account creation. Necessary so that a DID PLC update operation can be constructed during an account migraiton. Public and does not require auth; implemented by PDS. NOTE: this endpoint may change when full account migration is implemented.

### Example Usage

```typescript
import { Bluesky } from "@speakeasy-api/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.servers.reserveSigningKey();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlueskyCore } from "@speakeasy-api/bluesky/core.js";
import { serversReserveSigningKey } from "@speakeasy-api/bluesky/funcs/serversReserveSigningKey.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await serversReserveSigningKey(bluesky);

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
  useServersReserveSigningKeyMutation
} from "@speakeasy-api/bluesky/react-query/serversReserveSigningKey.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ComAtprotoServerReserveSigningKeyRequestBody](../../models/operations/comatprotoserverreservesigningkeyrequestbody.md)                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ComAtprotoServerReserveSigningKeyResponseBody](../../models/operations/comatprotoserverreservesigningkeyresponsebody.md)\>**

### Errors

| Error Type                                                  | Status Code                                                 | Content Type                                                |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| errors.ComAtprotoServerReserveSigningKeyResponseBody        | 400                                                         | application/json                                            |
| errors.ComAtprotoServerReserveSigningKeyServersResponseBody | 401                                                         | application/json                                            |
| errors.Unauthorized                                         | 403, 407, 511                                               | application/json                                            |
| errors.NotFound                                             | 404, 501, 505                                               | application/json                                            |
| errors.Timeout                                              | 408, 504                                                    | application/json                                            |
| errors.BadRequest                                           | 413, 414, 415, 422, 431, 510                                | application/json                                            |
| errors.RateLimited                                          | 429                                                         | application/json                                            |
| errors.InternalServerError                                  | 500, 502, 503, 506, 507, 508                                | application/json                                            |
| errors.APIError                                             | 4XX, 5XX                                                    | \*/\*                                                       |

## updateEmail

*This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Update an account's email.

### Example Usage

```typescript
import { Bluesky } from "@speakeasy-api/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  await bluesky.servers.updateEmail({
    email: "Isai.Auer35@yahoo.com",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlueskyCore } from "@speakeasy-api/bluesky/core.js";
import { serversUpdateEmail } from "@speakeasy-api/bluesky/funcs/serversUpdateEmail.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await serversUpdateEmail(bluesky, {
    email: "Isai.Auer35@yahoo.com",
  });

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
  useServersUpdateEmailMutation
} from "@speakeasy-api/bluesky/react-query/serversUpdateEmail.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ComAtprotoServerUpdateEmailRequestBody](../../models/operations/comatprotoserverupdateemailrequestbody.md)                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                                            | Status Code                                           | Content Type                                          |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| errors.ComAtprotoServerUpdateEmailResponseBody        | 400                                                   | application/json                                      |
| errors.ComAtprotoServerUpdateEmailServersResponseBody | 401                                                   | application/json                                      |
| errors.Unauthorized                                   | 403, 407, 511                                         | application/json                                      |
| errors.NotFound                                       | 404, 501, 505                                         | application/json                                      |
| errors.Timeout                                        | 408, 504                                              | application/json                                      |
| errors.BadRequest                                     | 413, 414, 415, 422, 431, 510                          | application/json                                      |
| errors.RateLimited                                    | 429                                                   | application/json                                      |
| errors.InternalServerError                            | 500, 502, 503, 506, 507, 508                          | application/json                                      |
| errors.APIError                                       | 4XX, 5XX                                              | \*/\*                                                 |