# Admin
(*admin*)

## Overview

### Available Operations

* [disableInviteCodes](#disableinvitecodes) - *This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Disable some set of codes and/or all codes associated with a set of users.
* [getAccountInfo](#getaccountinfo) - *This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get details about an account.
* [getSubjectStatus](#getsubjectstatus) - *This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get the service-specific admin status of a subject (account, record, or blob).
* [sendEmail](#sendemail) - *This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Send email to a user's account email address.
* [updateAccountEmail](#updateaccountemail) - *This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Administrative action to update an account's email.
* [updateAccountHandle](#updateaccounthandle) - *This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Administrative action to update an account's handle.
* [updateAccountPassword](#updateaccountpassword) - *This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Update the password for a user account as an administrator.
* [updateSubjectStatus](#updatesubjectstatus) - *This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Update the service-specific admin status of a subject (account, record, or blob).

## disableInviteCodes

*This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Disable some set of codes and/or all codes associated with a set of users.

### Example Usage

```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  await bluesky.admin.disableInviteCodes();


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlueskyCore } from "@speakeasy-sdks/bluesky/core.js";
import { adminDisableInviteCodes } from "@speakeasy-sdks/bluesky/funcs/adminDisableInviteCodes.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await adminDisableInviteCodes(bluesky);

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
  useAdminDisableInviteCodesMutation
} from "@speakeasy-sdks/bluesky/react-query/adminDisableInviteCodes.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ComAtprotoAdminDisableInviteCodesBody](../../models/operations/comatprotoadmindisableinvitecodesbody.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                                                            | Status Code                                                           | Content Type                                                          |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| errors.BadRequestComAtprotoAdminDisableInviteCodesResponseBodyError   | 400                                                                   | application/json                                                      |
| errors.UnauthorizedComAtprotoAdminDisableInviteCodesResponseBodyError | 401                                                                   | application/json                                                      |
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

## getAccountInfo

*This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get details about an account.

### Example Usage

```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.admin.getAccountInfo({
    did: "<id>",
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
import { adminGetAccountInfo } from "@speakeasy-sdks/bluesky/funcs/adminGetAccountInfo.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await adminGetAccountInfo(bluesky, {
    did: "<id>",
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
  useAdminGetAccountInfo,
  useAdminGetAccountInfoSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchAdminGetAccountInfo,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateAdminGetAccountInfo,
  invalidateAllAdminGetAccountInfo,
} from "@speakeasy-sdks/bluesky/react-query/adminGetAccountInfo.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ComAtprotoAdminGetAccountInfoRequest](../../models/operations/comatprotoadmingetaccountinforequest.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ComAtprotoAdminDefsAccountView](../../models/components/comatprotoadmindefsaccountview.md)\>**

### Errors

| Error Type                                                        | Status Code                                                       | Content Type                                                      |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| errors.BadRequestComAtprotoAdminGetAccountInfoResponseBodyError   | 400                                                               | application/json                                                  |
| errors.UnauthorizedComAtprotoAdminGetAccountInfoResponseBodyError | 401                                                               | application/json                                                  |
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

## getSubjectStatus

*This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get the service-specific admin status of a subject (account, record, or blob).

### Example Usage

```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.admin.getSubjectStatus();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlueskyCore } from "@speakeasy-sdks/bluesky/core.js";
import { adminGetSubjectStatus } from "@speakeasy-sdks/bluesky/funcs/adminGetSubjectStatus.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await adminGetSubjectStatus(bluesky);

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
  useAdminGetSubjectStatus,
  useAdminGetSubjectStatusSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchAdminGetSubjectStatus,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateAdminGetSubjectStatus,
  invalidateAllAdminGetSubjectStatus,
} from "@speakeasy-sdks/bluesky/react-query/adminGetSubjectStatus.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ComAtprotoAdminGetSubjectStatusRequest](../../models/operations/comatprotoadmingetsubjectstatusrequest.md)                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ComAtprotoAdminGetSubjectStatusResponseBody](../../models/operations/comatprotoadmingetsubjectstatusresponsebody.md)\>**

### Errors

| Error Type                                                          | Status Code                                                         | Content Type                                                        |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| errors.BadRequestComAtprotoAdminGetSubjectStatusResponseBodyError   | 400                                                                 | application/json                                                    |
| errors.UnauthorizedComAtprotoAdminGetSubjectStatusResponseBodyError | 401                                                                 | application/json                                                    |
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

## sendEmail

*This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Send email to a user's account email address.

### Example Usage

```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.admin.sendEmail({
    recipientDid: "<id>",
    content: "<value>",
    senderDid: "<id>",
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
import { adminSendEmail } from "@speakeasy-sdks/bluesky/funcs/adminSendEmail.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await adminSendEmail(bluesky, {
    recipientDid: "<id>",
    content: "<value>",
    senderDid: "<id>",
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
  useAdminSendEmailMutation
} from "@speakeasy-sdks/bluesky/react-query/adminSendEmail.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ComAtprotoAdminSendEmailBody](../../models/operations/comatprotoadminsendemailbody.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ComAtprotoAdminSendEmailResponseBody](../../models/operations/comatprotoadminsendemailresponsebody.md)\>**

### Errors

| Error Type                                                   | Status Code                                                  | Content Type                                                 |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| errors.BadRequestComAtprotoAdminSendEmailResponseBodyError   | 400                                                          | application/json                                             |
| errors.UnauthorizedComAtprotoAdminSendEmailResponseBodyError | 401                                                          | application/json                                             |
| errors.NotFoundError                                         | 404                                                          | application/json                                             |
| errors.UnauthorizedError                                     | 403, 407                                                     | application/json                                             |
| errors.TimeoutError                                          | 408                                                          | application/json                                             |
| errors.RateLimitedError                                      | 429                                                          | application/json                                             |
| errors.BadRequestError                                       | 413, 414, 415, 422, 431                                      | application/json                                             |
| errors.TimeoutError                                          | 504                                                          | application/json                                             |
| errors.NotFoundError                                         | 501, 505                                                     | application/json                                             |
| errors.InternalServerError                                   | 500, 502, 503, 506, 507, 508                                 | application/json                                             |
| errors.BadRequestError                                       | 510                                                          | application/json                                             |
| errors.UnauthorizedError                                     | 511                                                          | application/json                                             |
| errors.APIError                                              | 4XX, 5XX                                                     | \*/\*                                                        |

## updateAccountEmail

*This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Administrative action to update an account's email.

### Example Usage

```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  await bluesky.admin.updateAccountEmail({
    account: "<value>",
    email: "Darron58@hotmail.com",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlueskyCore } from "@speakeasy-sdks/bluesky/core.js";
import { adminUpdateAccountEmail } from "@speakeasy-sdks/bluesky/funcs/adminUpdateAccountEmail.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await adminUpdateAccountEmail(bluesky, {
    account: "<value>",
    email: "Darron58@hotmail.com",
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
  useAdminUpdateAccountEmailMutation
} from "@speakeasy-sdks/bluesky/react-query/adminUpdateAccountEmail.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ComAtprotoAdminUpdateAccountEmailBody](../../models/operations/comatprotoadminupdateaccountemailbody.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                                                            | Status Code                                                           | Content Type                                                          |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| errors.BadRequestComAtprotoAdminUpdateAccountEmailResponseBodyError   | 400                                                                   | application/json                                                      |
| errors.UnauthorizedComAtprotoAdminUpdateAccountEmailResponseBodyError | 401                                                                   | application/json                                                      |
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

## updateAccountHandle

*This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Administrative action to update an account's handle.

### Example Usage

```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  await bluesky.admin.updateAccountHandle({
    did: "<id>",
    handle: "<value>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlueskyCore } from "@speakeasy-sdks/bluesky/core.js";
import { adminUpdateAccountHandle } from "@speakeasy-sdks/bluesky/funcs/adminUpdateAccountHandle.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await adminUpdateAccountHandle(bluesky, {
    did: "<id>",
    handle: "<value>",
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
  useAdminUpdateAccountHandleMutation
} from "@speakeasy-sdks/bluesky/react-query/adminUpdateAccountHandle.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ComAtprotoAdminUpdateAccountHandleBody](../../models/operations/comatprotoadminupdateaccounthandlebody.md)                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                                                             | Status Code                                                            | Content Type                                                           |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| errors.BadRequestComAtprotoAdminUpdateAccountHandleResponseBodyError   | 400                                                                    | application/json                                                       |
| errors.UnauthorizedComAtprotoAdminUpdateAccountHandleResponseBodyError | 401                                                                    | application/json                                                       |
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

## updateAccountPassword

*This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Update the password for a user account as an administrator.

### Example Usage

```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  await bluesky.admin.updateAccountPassword({
    did: "<id>",
    password: "fJuaUyavCLqhYRb",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlueskyCore } from "@speakeasy-sdks/bluesky/core.js";
import { adminUpdateAccountPassword } from "@speakeasy-sdks/bluesky/funcs/adminUpdateAccountPassword.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await adminUpdateAccountPassword(bluesky, {
    did: "<id>",
    password: "fJuaUyavCLqhYRb",
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
  useAdminUpdateAccountPasswordMutation
} from "@speakeasy-sdks/bluesky/react-query/adminUpdateAccountPassword.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ComAtprotoAdminUpdateAccountPasswordBody](../../models/operations/comatprotoadminupdateaccountpasswordbody.md)                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                                                               | Status Code                                                              | Content Type                                                             |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| errors.BadRequestComAtprotoAdminUpdateAccountPasswordResponseBodyError   | 400                                                                      | application/json                                                         |
| errors.UnauthorizedComAtprotoAdminUpdateAccountPasswordResponseBodyError | 401                                                                      | application/json                                                         |
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

## updateSubjectStatus

*This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Update the service-specific admin status of a subject (account, record, or blob).

### Example Usage

```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.admin.updateSubjectStatus({
    subject: {
      uri: "https://empty-descendant.info/",
      cid: "<id>",
    },
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
import { adminUpdateSubjectStatus } from "@speakeasy-sdks/bluesky/funcs/adminUpdateSubjectStatus.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await adminUpdateSubjectStatus(bluesky, {
    subject: {
      uri: "https://empty-descendant.info/",
      cid: "<id>",
    },
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
  useAdminUpdateSubjectStatusMutation
} from "@speakeasy-sdks/bluesky/react-query/adminUpdateSubjectStatus.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ComAtprotoAdminUpdateSubjectStatusBody](../../models/operations/comatprotoadminupdatesubjectstatusbody.md)                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ComAtprotoAdminUpdateSubjectStatusResponseBody](../../models/operations/comatprotoadminupdatesubjectstatusresponsebody.md)\>**

### Errors

| Error Type                                                             | Status Code                                                            | Content Type                                                           |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| errors.BadRequestComAtprotoAdminUpdateSubjectStatusResponseBodyError   | 400                                                                    | application/json                                                       |
| errors.UnauthorizedComAtprotoAdminUpdateSubjectStatusResponseBodyError | 401                                                                    | application/json                                                       |
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