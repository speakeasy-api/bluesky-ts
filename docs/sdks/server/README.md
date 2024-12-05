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
import { Bluesky } from "@speakeasy-api/bluesky";

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
import { BlueskyCore } from "@speakeasy-api/bluesky/core.js";
import { serverCheckAccountStatus } from "@speakeasy-api/bluesky/funcs/serverCheckAccountStatus.js";

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
} from "@speakeasy-api/bluesky/react-query/serverCheckAccountStatus.js";
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

| Error Type                                                  | Status Code                                                 | Content Type                                                |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| errors.ComAtprotoServerCheckAccountStatusResponseBody       | 400                                                         | application/json                                            |
| errors.ComAtprotoServerCheckAccountStatusServerResponseBody | 401                                                         | application/json                                            |
| errors.Unauthorized                                         | 403, 407, 511                                               | application/json                                            |
| errors.NotFound                                             | 404, 501, 505                                               | application/json                                            |
| errors.Timeout                                              | 408, 504                                                    | application/json                                            |
| errors.BadRequest                                           | 413, 414, 415, 422, 431, 510                                | application/json                                            |
| errors.RateLimited                                          | 429                                                         | application/json                                            |
| errors.InternalServerError                                  | 500, 502, 503, 506, 507, 508                                | application/json                                            |
| errors.APIError                                             | 4XX, 5XX                                                    | \*/\*                                                       |

## confirmEmail

*This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Confirm an email using a token from com.atproto.server.requestEmailConfirmation.

### Example Usage

```typescript
import { Bluesky } from "@speakeasy-api/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  await bluesky.server.confirmEmail({
    email: "Eleanora_Dooley-Graham40@gmail.com",
    token: "<value>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlueskyCore } from "@speakeasy-api/bluesky/core.js";
import { serverConfirmEmail } from "@speakeasy-api/bluesky/funcs/serverConfirmEmail.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await serverConfirmEmail(bluesky, {
    email: "Eleanora_Dooley-Graham40@gmail.com",
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
} from "@speakeasy-api/bluesky/react-query/serverConfirmEmail.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ComAtprotoServerConfirmEmailRequestBody](../../models/operations/comatprotoserverconfirmemailrequestbody.md)                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                                            | Status Code                                           | Content Type                                          |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| errors.ComAtprotoServerConfirmEmailResponseBody       | 400                                                   | application/json                                      |
| errors.ComAtprotoServerConfirmEmailServerResponseBody | 401                                                   | application/json                                      |
| errors.Unauthorized                                   | 403, 407, 511                                         | application/json                                      |
| errors.NotFound                                       | 404, 501, 505                                         | application/json                                      |
| errors.Timeout                                        | 408, 504                                              | application/json                                      |
| errors.BadRequest                                     | 413, 414, 415, 422, 431, 510                          | application/json                                      |
| errors.RateLimited                                    | 429                                                   | application/json                                      |
| errors.InternalServerError                            | 500, 502, 503, 506, 507, 508                          | application/json                                      |
| errors.APIError                                       | 4XX, 5XX                                              | \*/\*                                                 |

## createSession

*This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Create an authentication session.

### Example Usage

```typescript
import { Bluesky } from "@speakeasy-api/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.server.createSession({
    identifier: "<value>",
    password: "8KbePEq2B0pDAnF",
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
import { serverCreateSession } from "@speakeasy-api/bluesky/funcs/serverCreateSession.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await serverCreateSession(bluesky, {
    identifier: "<value>",
    password: "8KbePEq2B0pDAnF",
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
} from "@speakeasy-api/bluesky/react-query/serverCreateSession.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ComAtprotoServerCreateSessionRequestBody](../../models/operations/comatprotoservercreatesessionrequestbody.md)                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ComAtprotoServerCreateSessionResponseBody](../../models/operations/comatprotoservercreatesessionresponsebody.md)\>**

### Errors

| Error Type                                             | Status Code                                            | Content Type                                           |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| errors.ComAtprotoServerCreateSessionResponseBody       | 400                                                    | application/json                                       |
| errors.ComAtprotoServerCreateSessionServerResponseBody | 401                                                    | application/json                                       |
| errors.Unauthorized                                    | 403, 407, 511                                          | application/json                                       |
| errors.NotFound                                        | 404, 501, 505                                          | application/json                                       |
| errors.Timeout                                         | 408, 504                                               | application/json                                       |
| errors.BadRequest                                      | 413, 414, 415, 422, 431, 510                           | application/json                                       |
| errors.RateLimited                                     | 429                                                    | application/json                                       |
| errors.InternalServerError                             | 500, 502, 503, 506, 507, 508                           | application/json                                       |
| errors.APIError                                        | 4XX, 5XX                                               | \*/\*                                                  |

## deactivateAccount

*This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Deactivates a currently active account. Stops serving of repo, and future writes to repo until reactivated. Used to finalize account migration with the old host after the account has been activated on the new host.

### Example Usage

```typescript
import { Bluesky } from "@speakeasy-api/bluesky";

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
import { BlueskyCore } from "@speakeasy-api/bluesky/core.js";
import { serverDeactivateAccount } from "@speakeasy-api/bluesky/funcs/serverDeactivateAccount.js";

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
} from "@speakeasy-api/bluesky/react-query/serverDeactivateAccount.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ComAtprotoServerDeactivateAccountRequestBody](../../models/operations/comatprotoserverdeactivateaccountrequestbody.md)                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                                                 | Status Code                                                | Content Type                                               |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| errors.ComAtprotoServerDeactivateAccountResponseBody       | 400                                                        | application/json                                           |
| errors.ComAtprotoServerDeactivateAccountServerResponseBody | 401                                                        | application/json                                           |
| errors.Unauthorized                                        | 403, 407, 511                                              | application/json                                           |
| errors.NotFound                                            | 404, 501, 505                                              | application/json                                           |
| errors.Timeout                                             | 408, 504                                                   | application/json                                           |
| errors.BadRequest                                          | 413, 414, 415, 422, 431, 510                               | application/json                                           |
| errors.RateLimited                                         | 429                                                        | application/json                                           |
| errors.InternalServerError                                 | 500, 502, 503, 506, 507, 508                               | application/json                                           |
| errors.APIError                                            | 4XX, 5XX                                                   | \*/\*                                                      |

## listAppPasswords

*This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

List all App Passwords.

### Example Usage

```typescript
import { Bluesky } from "@speakeasy-api/bluesky";

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
import { BlueskyCore } from "@speakeasy-api/bluesky/core.js";
import { serverListAppPasswords } from "@speakeasy-api/bluesky/funcs/serverListAppPasswords.js";

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
} from "@speakeasy-api/bluesky/react-query/serverListAppPasswords.js";
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

| Error Type                                                | Status Code                                               | Content Type                                              |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| errors.ComAtprotoServerListAppPasswordsResponseBody       | 400                                                       | application/json                                          |
| errors.ComAtprotoServerListAppPasswordsServerResponseBody | 401                                                       | application/json                                          |
| errors.Unauthorized                                       | 403, 407, 511                                             | application/json                                          |
| errors.NotFound                                           | 404, 501, 505                                             | application/json                                          |
| errors.Timeout                                            | 408, 504                                                  | application/json                                          |
| errors.BadRequest                                         | 413, 414, 415, 422, 431, 510                              | application/json                                          |
| errors.RateLimited                                        | 429                                                       | application/json                                          |
| errors.InternalServerError                                | 500, 502, 503, 506, 507, 508                              | application/json                                          |
| errors.APIError                                           | 4XX, 5XX                                                  | \*/\*                                                     |

## requestAccountDelete

*This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Initiate a user account deletion via email.

### Example Usage

```typescript
import { Bluesky } from "@speakeasy-api/bluesky";

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
import { BlueskyCore } from "@speakeasy-api/bluesky/core.js";
import { serverRequestAccountDelete } from "@speakeasy-api/bluesky/funcs/serverRequestAccountDelete.js";

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
} from "@speakeasy-api/bluesky/react-query/serverRequestAccountDelete.js";
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

| Error Type                                                    | Status Code                                                   | Content Type                                                  |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| errors.ComAtprotoServerRequestAccountDeleteResponseBody       | 400                                                           | application/json                                              |
| errors.ComAtprotoServerRequestAccountDeleteServerResponseBody | 401                                                           | application/json                                              |
| errors.Unauthorized                                           | 403, 407, 511                                                 | application/json                                              |
| errors.NotFound                                               | 404, 501, 505                                                 | application/json                                              |
| errors.Timeout                                                | 408, 504                                                      | application/json                                              |
| errors.BadRequest                                             | 413, 414, 415, 422, 431, 510                                  | application/json                                              |
| errors.RateLimited                                            | 429                                                           | application/json                                              |
| errors.InternalServerError                                    | 500, 502, 503, 506, 507, 508                                  | application/json                                              |
| errors.APIError                                               | 4XX, 5XX                                                      | \*/\*                                                         |

## requestEmailUpdate

*This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Request a token in order to update email.

### Example Usage

```typescript
import { Bluesky } from "@speakeasy-api/bluesky";

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
import { BlueskyCore } from "@speakeasy-api/bluesky/core.js";
import { serverRequestEmailUpdate } from "@speakeasy-api/bluesky/funcs/serverRequestEmailUpdate.js";

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
} from "@speakeasy-api/bluesky/react-query/serverRequestEmailUpdate.js";
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

| Error Type                                                  | Status Code                                                 | Content Type                                                |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| errors.ComAtprotoServerRequestEmailUpdateResponseBody       | 400                                                         | application/json                                            |
| errors.ComAtprotoServerRequestEmailUpdateServerResponseBody | 401                                                         | application/json                                            |
| errors.Unauthorized                                         | 403, 407, 511                                               | application/json                                            |
| errors.NotFound                                             | 404, 501, 505                                               | application/json                                            |
| errors.Timeout                                              | 408, 504                                                    | application/json                                            |
| errors.BadRequest                                           | 413, 414, 415, 422, 431, 510                                | application/json                                            |
| errors.RateLimited                                          | 429                                                         | application/json                                            |
| errors.InternalServerError                                  | 500, 502, 503, 506, 507, 508                                | application/json                                            |
| errors.APIError                                             | 4XX, 5XX                                                    | \*/\*                                                       |