# Admins
(*admins*)

## Overview

### Available Operations

* [deleteAccount](#deleteaccount) - *This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Delete a user account as an administrator.
* [enableAccountInvites](#enableaccountinvites) - *This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Re-enable an account's ability to receive invite codes.
* [getAccountInfos](#getaccountinfos) - *This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get details about some accounts.

## deleteAccount

*This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Delete a user account as an administrator.

### Example Usage

```typescript
import { Bluesky } from "@speakeasy-api/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  await bluesky.admins.deleteAccount({
    did: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlueskyCore } from "@speakeasy-api/bluesky/core.js";
import { adminsDeleteAccount } from "@speakeasy-api/bluesky/funcs/adminsDeleteAccount.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await adminsDeleteAccount(bluesky, {
    did: "<id>",
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
  useAdminsDeleteAccountMutation
} from "@speakeasy-api/bluesky/react-query/adminsDeleteAccount.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ComAtprotoAdminDeleteAccountRequestBody](../../models/operations/comatprotoadmindeleteaccountrequestbody.md)                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                                            | Status Code                                           | Content Type                                          |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| errors.ComAtprotoAdminDeleteAccountResponseBody       | 400                                                   | application/json                                      |
| errors.ComAtprotoAdminDeleteAccountAdminsResponseBody | 401                                                   | application/json                                      |
| errors.NotFound                                       | 404                                                   | application/json                                      |
| errors.Unauthorized                                   | 403, 407                                              | application/json                                      |
| errors.Timeout                                        | 408                                                   | application/json                                      |
| errors.RateLimited                                    | 429                                                   | application/json                                      |
| errors.BadRequest                                     | 413, 414, 415, 422, 431                               | application/json                                      |
| errors.Timeout                                        | 504                                                   | application/json                                      |
| errors.NotFound                                       | 501, 505                                              | application/json                                      |
| errors.InternalServerError                            | 500, 502, 503, 506, 507, 508                          | application/json                                      |
| errors.BadRequest                                     | 510                                                   | application/json                                      |
| errors.Unauthorized                                   | 511                                                   | application/json                                      |
| errors.APIError                                       | 4XX, 5XX                                              | \*/\*                                                 |

## enableAccountInvites

*This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Re-enable an account's ability to receive invite codes.

### Example Usage

```typescript
import { Bluesky } from "@speakeasy-api/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  await bluesky.admins.enableAccountInvites({
    account: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlueskyCore } from "@speakeasy-api/bluesky/core.js";
import { adminsEnableAccountInvites } from "@speakeasy-api/bluesky/funcs/adminsEnableAccountInvites.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await adminsEnableAccountInvites(bluesky, {
    account: "<id>",
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
  useAdminsEnableAccountInvitesMutation
} from "@speakeasy-api/bluesky/react-query/adminsEnableAccountInvites.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ComAtprotoAdminEnableAccountInvitesRequestBody](../../models/operations/comatprotoadminenableaccountinvitesrequestbody.md)                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                                                   | Status Code                                                  | Content Type                                                 |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| errors.ComAtprotoAdminEnableAccountInvitesResponseBody       | 400                                                          | application/json                                             |
| errors.ComAtprotoAdminEnableAccountInvitesAdminsResponseBody | 401                                                          | application/json                                             |
| errors.NotFound                                              | 404                                                          | application/json                                             |
| errors.Unauthorized                                          | 403, 407                                                     | application/json                                             |
| errors.Timeout                                               | 408                                                          | application/json                                             |
| errors.RateLimited                                           | 429                                                          | application/json                                             |
| errors.BadRequest                                            | 413, 414, 415, 422, 431                                      | application/json                                             |
| errors.Timeout                                               | 504                                                          | application/json                                             |
| errors.NotFound                                              | 501, 505                                                     | application/json                                             |
| errors.InternalServerError                                   | 500, 502, 503, 506, 507, 508                                 | application/json                                             |
| errors.BadRequest                                            | 510                                                          | application/json                                             |
| errors.Unauthorized                                          | 511                                                          | application/json                                             |
| errors.APIError                                              | 4XX, 5XX                                                     | \*/\*                                                        |

## getAccountInfos

*This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get details about some accounts.

### Example Usage

```typescript
import { Bluesky } from "@speakeasy-api/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.admins.getAccountInfos({
    dids: [
      "<id>",
    ],
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
import { adminsGetAccountInfos } from "@speakeasy-api/bluesky/funcs/adminsGetAccountInfos.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await adminsGetAccountInfos(bluesky, {
    dids: [
      "<id>",
    ],
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
  useAdminsGetAccountInfos,
  useAdminsGetAccountInfosSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchAdminsGetAccountInfos,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateAdminsGetAccountInfos,
  invalidateAllAdminsGetAccountInfos,
} from "@speakeasy-api/bluesky/react-query/adminsGetAccountInfos.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ComAtprotoAdminGetAccountInfosRequest](../../models/operations/comatprotoadmingetaccountinfosrequest.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ComAtprotoAdminGetAccountInfosResponseBody](../../models/operations/comatprotoadmingetaccountinfosresponsebody.md)\>**

### Errors

| Error Type                                              | Status Code                                             | Content Type                                            |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| errors.ComAtprotoAdminGetAccountInfosResponseBody       | 400                                                     | application/json                                        |
| errors.ComAtprotoAdminGetAccountInfosAdminsResponseBody | 401                                                     | application/json                                        |
| errors.NotFound                                         | 404                                                     | application/json                                        |
| errors.Unauthorized                                     | 403, 407                                                | application/json                                        |
| errors.Timeout                                          | 408                                                     | application/json                                        |
| errors.RateLimited                                      | 429                                                     | application/json                                        |
| errors.BadRequest                                       | 413, 414, 415, 422, 431                                 | application/json                                        |
| errors.Timeout                                          | 504                                                     | application/json                                        |
| errors.NotFound                                         | 501, 505                                                | application/json                                        |
| errors.InternalServerError                              | 500, 502, 503, 506, 507, 508                            | application/json                                        |
| errors.BadRequest                                       | 510                                                     | application/json                                        |
| errors.Unauthorized                                     | 511                                                     | application/json                                        |
| errors.APIError                                         | 4XX, 5XX                                                | \*/\*                                                   |