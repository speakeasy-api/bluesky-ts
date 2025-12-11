# Server

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

<!-- UsageSnippet language="typescript" operationID="com.atproto.server.checkAccountStatus" method="get" path="/xrpc/com.atproto.server.checkAccountStatus" -->
```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.server.checkAccountStatus();

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
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("serverCheckAccountStatus failed:", res.error);
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

**Promise\<[operations.ComAtprotoServerCheckAccountStatusResponse](../../models/operations/comatprotoservercheckaccountstatusresponse.md)\>**

### Errors

| Error Type                                                | Status Code                                               | Content Type                                              |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| errors.ComAtprotoServerCheckAccountStatusBadRequestError  | 400                                                       | application/json                                          |
| errors.ComAtprotoServerCheckAccountStatusAuthMissingError | 401                                                       | application/json                                          |
| errors.NotFoundError                                      | 404                                                       | application/json                                          |
| errors.UnauthorizedError                                  | 403, 407                                                  | application/json                                          |
| errors.TimeoutError                                       | 408                                                       | application/json                                          |
| errors.RateLimitedError                                   | 429                                                       | application/json                                          |
| errors.BadRequestError                                    | 413, 414, 415, 422, 431                                   | application/json                                          |
| errors.TimeoutError                                       | 504                                                       | application/json                                          |
| errors.NotFoundError                                      | 501, 505                                                  | application/json                                          |
| errors.InternalServerError                                | 500, 502, 503, 506, 507, 508                              | application/json                                          |
| errors.BadRequestError                                    | 510                                                       | application/json                                          |
| errors.UnauthorizedError                                  | 511                                                       | application/json                                          |
| errors.APIError                                           | 4XX, 5XX                                                  | \*/\*                                                     |

## confirmEmail

*This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Confirm an email using a token from com.atproto.server.requestEmailConfirmation.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="com.atproto.server.confirmEmail" method="post" path="/xrpc/com.atproto.server.confirmEmail" -->
```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  await bluesky.server.confirmEmail({
    email: "Lela_Grimes70@hotmail.com",
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
    email: "Lela_Grimes70@hotmail.com",
    token: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("serverConfirmEmail failed:", res.error);
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
  useServerConfirmEmailMutation
} from "@speakeasy-sdks/bluesky/react-query/serverConfirmEmail.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ComAtprotoServerConfirmEmailRequest](../../models/operations/comatprotoserverconfirmemailrequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                                          | Status Code                                         | Content Type                                        |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| errors.ComAtprotoServerConfirmEmailBadRequestError  | 400                                                 | application/json                                    |
| errors.ComAtprotoServerConfirmEmailAuthMissingError | 401                                                 | application/json                                    |
| errors.NotFoundError                                | 404                                                 | application/json                                    |
| errors.UnauthorizedError                            | 403, 407                                            | application/json                                    |
| errors.TimeoutError                                 | 408                                                 | application/json                                    |
| errors.RateLimitedError                             | 429                                                 | application/json                                    |
| errors.BadRequestError                              | 413, 414, 415, 422, 431                             | application/json                                    |
| errors.TimeoutError                                 | 504                                                 | application/json                                    |
| errors.NotFoundError                                | 501, 505                                            | application/json                                    |
| errors.InternalServerError                          | 500, 502, 503, 506, 507, 508                        | application/json                                    |
| errors.BadRequestError                              | 510                                                 | application/json                                    |
| errors.UnauthorizedError                            | 511                                                 | application/json                                    |
| errors.APIError                                     | 4XX, 5XX                                            | \*/\*                                               |

## createSession

*This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Create an authentication session.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="com.atproto.server.createSession" method="post" path="/xrpc/com.atproto.server.createSession" -->
```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.server.createSession({
    identifier: "<value>",
    password: "MW4x0Pj3UrVeGJS",
  });

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
    password: "MW4x0Pj3UrVeGJS",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("serverCreateSession failed:", res.error);
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
  useServerCreateSessionMutation
} from "@speakeasy-sdks/bluesky/react-query/serverCreateSession.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ComAtprotoServerCreateSessionRequest](../../models/operations/comatprotoservercreatesessionrequest.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ComAtprotoServerCreateSessionResponse](../../models/operations/comatprotoservercreatesessionresponse.md)\>**

### Errors

| Error Type                                           | Status Code                                          | Content Type                                         |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| errors.ComAtprotoServerCreateSessionBadRequestError  | 400                                                  | application/json                                     |
| errors.ComAtprotoServerCreateSessionAuthMissingError | 401                                                  | application/json                                     |
| errors.NotFoundError                                 | 404                                                  | application/json                                     |
| errors.UnauthorizedError                             | 403, 407                                             | application/json                                     |
| errors.TimeoutError                                  | 408                                                  | application/json                                     |
| errors.RateLimitedError                              | 429                                                  | application/json                                     |
| errors.BadRequestError                               | 413, 414, 415, 422, 431                              | application/json                                     |
| errors.TimeoutError                                  | 504                                                  | application/json                                     |
| errors.NotFoundError                                 | 501, 505                                             | application/json                                     |
| errors.InternalServerError                           | 500, 502, 503, 506, 507, 508                         | application/json                                     |
| errors.BadRequestError                               | 510                                                  | application/json                                     |
| errors.UnauthorizedError                             | 511                                                  | application/json                                     |
| errors.APIError                                      | 4XX, 5XX                                             | \*/\*                                                |

## deactivateAccount

*This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Deactivates a currently active account. Stops serving of repo, and future writes to repo until reactivated. Used to finalize account migration with the old host after the account has been activated on the new host.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="com.atproto.server.deactivateAccount" method="post" path="/xrpc/com.atproto.server.deactivateAccount" -->
```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  await bluesky.server.deactivateAccount({});


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
  const res = await serverDeactivateAccount(bluesky, {});
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("serverDeactivateAccount failed:", res.error);
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
  useServerDeactivateAccountMutation
} from "@speakeasy-sdks/bluesky/react-query/serverDeactivateAccount.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ComAtprotoServerDeactivateAccountRequest](../../models/operations/comatprotoserverdeactivateaccountrequest.md)                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                                               | Status Code                                              | Content Type                                             |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| errors.ComAtprotoServerDeactivateAccountBadRequestError  | 400                                                      | application/json                                         |
| errors.ComAtprotoServerDeactivateAccountAuthMissingError | 401                                                      | application/json                                         |
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

## listAppPasswords

*This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

List all App Passwords.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="com.atproto.server.listAppPasswords" method="get" path="/xrpc/com.atproto.server.listAppPasswords" -->
```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.server.listAppPasswords();

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
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("serverListAppPasswords failed:", res.error);
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

**Promise\<[operations.ComAtprotoServerListAppPasswordsResponse](../../models/operations/comatprotoserverlistapppasswordsresponse.md)\>**

### Errors

| Error Type                                              | Status Code                                             | Content Type                                            |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| errors.ComAtprotoServerListAppPasswordsBadRequestError  | 400                                                     | application/json                                        |
| errors.ComAtprotoServerListAppPasswordsAuthMissingError | 401                                                     | application/json                                        |
| errors.NotFoundError                                    | 404                                                     | application/json                                        |
| errors.UnauthorizedError                                | 403, 407                                                | application/json                                        |
| errors.TimeoutError                                     | 408                                                     | application/json                                        |
| errors.RateLimitedError                                 | 429                                                     | application/json                                        |
| errors.BadRequestError                                  | 413, 414, 415, 422, 431                                 | application/json                                        |
| errors.TimeoutError                                     | 504                                                     | application/json                                        |
| errors.NotFoundError                                    | 501, 505                                                | application/json                                        |
| errors.InternalServerError                              | 500, 502, 503, 506, 507, 508                            | application/json                                        |
| errors.BadRequestError                                  | 510                                                     | application/json                                        |
| errors.UnauthorizedError                                | 511                                                     | application/json                                        |
| errors.APIError                                         | 4XX, 5XX                                                | \*/\*                                                   |

## requestAccountDelete

*This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Initiate a user account deletion via email.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="com.atproto.server.requestAccountDelete" method="post" path="/xrpc/com.atproto.server.requestAccountDelete" -->
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
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("serverRequestAccountDelete failed:", res.error);
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

| Error Type                                                  | Status Code                                                 | Content Type                                                |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| errors.ComAtprotoServerRequestAccountDeleteBadRequestError  | 400                                                         | application/json                                            |
| errors.ComAtprotoServerRequestAccountDeleteAuthMissingError | 401                                                         | application/json                                            |
| errors.NotFoundError                                        | 404                                                         | application/json                                            |
| errors.UnauthorizedError                                    | 403, 407                                                    | application/json                                            |
| errors.TimeoutError                                         | 408                                                         | application/json                                            |
| errors.RateLimitedError                                     | 429                                                         | application/json                                            |
| errors.BadRequestError                                      | 413, 414, 415, 422, 431                                     | application/json                                            |
| errors.TimeoutError                                         | 504                                                         | application/json                                            |
| errors.NotFoundError                                        | 501, 505                                                    | application/json                                            |
| errors.InternalServerError                                  | 500, 502, 503, 506, 507, 508                                | application/json                                            |
| errors.BadRequestError                                      | 510                                                         | application/json                                            |
| errors.UnauthorizedError                                    | 511                                                         | application/json                                            |
| errors.APIError                                             | 4XX, 5XX                                                    | \*/\*                                                       |

## requestEmailUpdate

*This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Request a token in order to update email.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="com.atproto.server.requestEmailUpdate" method="post" path="/xrpc/com.atproto.server.requestEmailUpdate" -->
```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.server.requestEmailUpdate();

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
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("serverRequestEmailUpdate failed:", res.error);
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

**Promise\<[operations.ComAtprotoServerRequestEmailUpdateResponse](../../models/operations/comatprotoserverrequestemailupdateresponse.md)\>**

### Errors

| Error Type                                                | Status Code                                               | Content Type                                              |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| errors.ComAtprotoServerRequestEmailUpdateBadRequestError  | 400                                                       | application/json                                          |
| errors.ComAtprotoServerRequestEmailUpdateAuthMissingError | 401                                                       | application/json                                          |
| errors.NotFoundError                                      | 404                                                       | application/json                                          |
| errors.UnauthorizedError                                  | 403, 407                                                  | application/json                                          |
| errors.TimeoutError                                       | 408                                                       | application/json                                          |
| errors.RateLimitedError                                   | 429                                                       | application/json                                          |
| errors.BadRequestError                                    | 413, 414, 415, 422, 431                                   | application/json                                          |
| errors.TimeoutError                                       | 504                                                       | application/json                                          |
| errors.NotFoundError                                      | 501, 505                                                  | application/json                                          |
| errors.InternalServerError                                | 500, 502, 503, 506, 507, 508                              | application/json                                          |
| errors.BadRequestError                                    | 510                                                       | application/json                                          |
| errors.UnauthorizedError                                  | 511                                                       | application/json                                          |
| errors.APIError                                           | 4XX, 5XX                                                  | \*/\*                                                     |