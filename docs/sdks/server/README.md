# Server
(*server*)

## Overview

### Available Operations

* [checkAccountStatus](#checkaccountstatus) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Returns the status of an account, especially as pertaining to import or recovery. Can be called many times over the course of an account migration. Requires auth and can only be called pertaining to oneself.
* [confirmEmail](#confirmemail) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Confirm an email using a token from com.atproto.server.requestEmailConfirmation.
* [createSession](#createsession) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Create an authentication session.
* [deactivateAccount](#deactivateaccount) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Deactivates a currently active account. Stops serving of repo, and future writes to repo until reactivated. Used to finalize account migration with the old host after the account has been activated on the new host.
* [listAppPasswords](#listapppasswords) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

List all App Passwords.
* [requestAccountDelete](#requestaccountdelete) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Initiate a user account deletion via email.
* [requestEmailUpdate](#requestemailupdate) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Request a token in order to update email.

## checkAccountStatus

*This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Returns the status of an account, especially as pertaining to import or recovery. Can be called many times over the course of an account migration. Requires auth and can only be called pertaining to oneself.

### Example Usage

```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.server.checkAccountStatus();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlueskyCore } from "@speakeasy-sdks/bluesky/core.js";
import { serverCheckAccountStatus } from "@speakeasy-sdks/bluesky/funcs/serverCheckAccountStatus.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await serverCheckAccountStatus(bluesky);

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
  useServerCheckAccountStatus,
  useServerCheckAccountStatusSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchServerCheckAccountStatus,
  
  // Utility to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateAllServerCheckAccountStatus,
} from "@speakeasy-sdks/bluesky/react-query/serverCheckAccountStatus.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ComAtprotoServerCheckAccountStatusResponseBody](../../models/operations/comatprotoservercheckaccountstatusresponsebody.md)\>**

### Errors

| Error Type                                                             | Status Code                                                            | Content Type                                                           |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| errors.BadRequestComAtprotoServerCheckAccountStatusResponseBodyError   | 400                                                                    | application/json                                                       |
| errors.UnauthorizedComAtprotoServerCheckAccountStatusResponseBodyError | 401                                                                    | application/json                                                       |
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

## confirmEmail

*This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Confirm an email using a token from com.atproto.server.requestEmailConfirmation.

### Example Usage

```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  await bluesky.server.confirmEmail({
    email: "Moriah.Davis21@gmail.com",
    token: "<value>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlueskyCore } from "@speakeasy-sdks/bluesky/core.js";
import { serverConfirmEmail } from "@speakeasy-sdks/bluesky/funcs/serverConfirmEmail.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await serverConfirmEmail(bluesky, {
    email: "Moriah.Davis21@gmail.com",
    token: "<value>",
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
  useServerConfirmEmailMutation
} from "@speakeasy-sdks/bluesky/react-query/serverConfirmEmail.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ComAtprotoServerConfirmEmailBody](../../models/operations/comatprotoserverconfirmemailbody.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                                                       | Status Code                                                      | Content Type                                                     |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| errors.BadRequestComAtprotoServerConfirmEmailResponseBodyError   | 400                                                              | application/json                                                 |
| errors.UnauthorizedComAtprotoServerConfirmEmailResponseBodyError | 401                                                              | application/json                                                 |
| errors.NotFoundError                                             | 404                                                              | application/json                                                 |
| errors.UnauthorizedError                                         | 403, 407                                                         | application/json                                                 |
| errors.TimeoutError                                              | 408                                                              | application/json                                                 |
| errors.RateLimitedError                                          | 429                                                              | application/json                                                 |
| errors.BadRequestError                                           | 413, 414, 415, 422, 431                                          | application/json                                                 |
| errors.TimeoutError                                              | 504                                                              | application/json                                                 |
| errors.NotFoundError                                             | 501, 505                                                         | application/json                                                 |
| errors.InternalServerError                                       | 500, 502, 503, 506, 507, 508                                     | application/json                                                 |
| errors.BadRequestError                                           | 510                                                              | application/json                                                 |
| errors.UnauthorizedError                                         | 511                                                              | application/json                                                 |
| errors.APIError                                                  | 4XX, 5XX                                                         | \*/\*                                                            |

## createSession

*This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Create an authentication session.

### Example Usage

```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.server.createSession({
    identifier: "<value>",
    password: "U1pGyJcw9BY1LjU",
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
import { serverCreateSession } from "@speakeasy-sdks/bluesky/funcs/serverCreateSession.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await serverCreateSession(bluesky, {
    identifier: "<value>",
    password: "U1pGyJcw9BY1LjU",
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
  // Mutation hook for triggering the API call.
  useServerCreateSessionMutation
} from "@speakeasy-sdks/bluesky/react-query/serverCreateSession.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ComAtprotoServerCreateSessionBody](../../models/operations/comatprotoservercreatesessionbody.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ComAtprotoServerCreateSessionResponseBody](../../models/operations/comatprotoservercreatesessionresponsebody.md)\>**

### Errors

| Error Type                                                        | Status Code                                                       | Content Type                                                      |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| errors.BadRequestComAtprotoServerCreateSessionResponseBodyError   | 400                                                               | application/json                                                  |
| errors.UnauthorizedComAtprotoServerCreateSessionResponseBodyError | 401                                                               | application/json                                                  |
| errors.NotFoundError                                              | 404                                                               | application/json                                                  |
| errors.UnauthorizedError                                          | 403, 407                                                          | application/json                                                  |
| errors.TimeoutError                                               | 408                                                               | application/json                                                  |
| errors.RateLimitedError                                           | 429                                                               | application/json                                                  |
| errors.BadRequestError                                            | 413, 414, 415, 422, 431                                           | application/json                                                  |
| errors.TimeoutError                                               | 504                                                               | application/json                                                  |
| errors.NotFoundError                                              | 501, 505                                                          | application/json                                                  |
| errors.InternalServerError                                        | 500, 502, 503, 506, 507, 508                                      | application/json                                                  |
| errors.BadRequestError                                            | 510                                                               | application/json                                                  |
| errors.UnauthorizedError                                          | 511                                                               | application/json                                                  |
| errors.APIError                                                   | 4XX, 5XX                                                          | \*/\*                                                             |

## deactivateAccount

*This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Deactivates a currently active account. Stops serving of repo, and future writes to repo until reactivated. Used to finalize account migration with the old host after the account has been activated on the new host.

### Example Usage

```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  await bluesky.server.deactivateAccount();


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlueskyCore } from "@speakeasy-sdks/bluesky/core.js";
import { serverDeactivateAccount } from "@speakeasy-sdks/bluesky/funcs/serverDeactivateAccount.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await serverDeactivateAccount(bluesky);

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
  useServerDeactivateAccountMutation
} from "@speakeasy-sdks/bluesky/react-query/serverDeactivateAccount.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ComAtprotoServerDeactivateAccountBody](../../models/operations/comatprotoserverdeactivateaccountbody.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                                                            | Status Code                                                           | Content Type                                                          |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| errors.BadRequestComAtprotoServerDeactivateAccountResponseBodyError   | 400                                                                   | application/json                                                      |
| errors.UnauthorizedComAtprotoServerDeactivateAccountResponseBodyError | 401                                                                   | application/json                                                      |
| errors.NotFoundError                                                  | 404                                                                   | application/json                                                      |
| errors.UnauthorizedError                                              | 403, 407                                                              | application/json                                                      |
| errors.TimeoutError                                                   | 408                                                                   | application/json                                                      |
| errors.RateLimitedError                                               | 429                                                                   | application/json                                                      |
| errors.BadRequestError                                                | 413, 414, 415, 422, 431                                               | application/json                                                      |
| errors.TimeoutError                                                   | 504                                                                   | application/json                                                      |
| errors.NotFoundError                                                  | 501, 505                                                              | application/json                                                      |
| errors.InternalServerError                                            | 500, 502, 503, 506, 507, 508                                          | application/json                                                      |
| errors.BadRequestError                                                | 510                                                                   | application/json                                                      |
| errors.UnauthorizedError                                              | 511                                                                   | application/json                                                      |
| errors.APIError                                                       | 4XX, 5XX                                                              | \*/\*                                                                 |

## listAppPasswords

*This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

List all App Passwords.

### Example Usage

```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.server.listAppPasswords();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlueskyCore } from "@speakeasy-sdks/bluesky/core.js";
import { serverListAppPasswords } from "@speakeasy-sdks/bluesky/funcs/serverListAppPasswords.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await serverListAppPasswords(bluesky);

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
  useServerListAppPasswords,
  useServerListAppPasswordsSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchServerListAppPasswords,
  
  // Utility to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateAllServerListAppPasswords,
} from "@speakeasy-sdks/bluesky/react-query/serverListAppPasswords.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ComAtprotoServerListAppPasswordsResponseBody](../../models/operations/comatprotoserverlistapppasswordsresponsebody.md)\>**

### Errors

| Error Type                                                           | Status Code                                                          | Content Type                                                         |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| errors.BadRequestComAtprotoServerListAppPasswordsResponseBodyError   | 400                                                                  | application/json                                                     |
| errors.UnauthorizedComAtprotoServerListAppPasswordsResponseBodyError | 401                                                                  | application/json                                                     |
| errors.NotFoundError                                                 | 404                                                                  | application/json                                                     |
| errors.UnauthorizedError                                             | 403, 407                                                             | application/json                                                     |
| errors.TimeoutError                                                  | 408                                                                  | application/json                                                     |
| errors.RateLimitedError                                              | 429                                                                  | application/json                                                     |
| errors.BadRequestError                                               | 413, 414, 415, 422, 431                                              | application/json                                                     |
| errors.TimeoutError                                                  | 504                                                                  | application/json                                                     |
| errors.NotFoundError                                                 | 501, 505                                                             | application/json                                                     |
| errors.InternalServerError                                           | 500, 502, 503, 506, 507, 508                                         | application/json                                                     |
| errors.BadRequestError                                               | 510                                                                  | application/json                                                     |
| errors.UnauthorizedError                                             | 511                                                                  | application/json                                                     |
| errors.APIError                                                      | 4XX, 5XX                                                             | \*/\*                                                                |

## requestAccountDelete

*This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Initiate a user account deletion via email.

### Example Usage

```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  await bluesky.server.requestAccountDelete();


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlueskyCore } from "@speakeasy-sdks/bluesky/core.js";
import { serverRequestAccountDelete } from "@speakeasy-sdks/bluesky/funcs/serverRequestAccountDelete.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await serverRequestAccountDelete(bluesky);

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
  useServerRequestAccountDeleteMutation
} from "@speakeasy-sdks/bluesky/react-query/serverRequestAccountDelete.js";
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

| Error Type                                                               | Status Code                                                              | Content Type                                                             |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| errors.BadRequestComAtprotoServerRequestAccountDeleteResponseBodyError   | 400                                                                      | application/json                                                         |
| errors.UnauthorizedComAtprotoServerRequestAccountDeleteResponseBodyError | 401                                                                      | application/json                                                         |
| errors.NotFoundError                                                     | 404                                                                      | application/json                                                         |
| errors.UnauthorizedError                                                 | 403, 407                                                                 | application/json                                                         |
| errors.TimeoutError                                                      | 408                                                                      | application/json                                                         |
| errors.RateLimitedError                                                  | 429                                                                      | application/json                                                         |
| errors.BadRequestError                                                   | 413, 414, 415, 422, 431                                                  | application/json                                                         |
| errors.TimeoutError                                                      | 504                                                                      | application/json                                                         |
| errors.NotFoundError                                                     | 501, 505                                                                 | application/json                                                         |
| errors.InternalServerError                                               | 500, 502, 503, 506, 507, 508                                             | application/json                                                         |
| errors.BadRequestError                                                   | 510                                                                      | application/json                                                         |
| errors.UnauthorizedError                                                 | 511                                                                      | application/json                                                         |
| errors.APIError                                                          | 4XX, 5XX                                                                 | \*/\*                                                                    |

## requestEmailUpdate

*This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Request a token in order to update email.

### Example Usage

```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.server.requestEmailUpdate();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlueskyCore } from "@speakeasy-sdks/bluesky/core.js";
import { serverRequestEmailUpdate } from "@speakeasy-sdks/bluesky/funcs/serverRequestEmailUpdate.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await serverRequestEmailUpdate(bluesky);

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
  useServerRequestEmailUpdateMutation
} from "@speakeasy-sdks/bluesky/react-query/serverRequestEmailUpdate.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ComAtprotoServerRequestEmailUpdateResponseBody](../../models/operations/comatprotoserverrequestemailupdateresponsebody.md)\>**

### Errors

| Error Type                                                             | Status Code                                                            | Content Type                                                           |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| errors.BadRequestComAtprotoServerRequestEmailUpdateResponseBodyError   | 400                                                                    | application/json                                                       |
| errors.UnauthorizedComAtprotoServerRequestEmailUpdateResponseBodyError | 401                                                                    | application/json                                                       |
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