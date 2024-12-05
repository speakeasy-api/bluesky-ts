# AtprotoAdmin
(*atprotoAdmin*)

## Overview

### Available Operations

* [disableAccountInvites](#disableaccountinvites) - *This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Disable an account from receiving new invite codes, but does not invalidate existing codes.
* [getInviteCodes](#getinvitecodes) - *This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get an admin view of invite codes.
* [searchAccounts](#searchaccounts) - *This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get list of accounts that matches your search query.

## disableAccountInvites

*This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Disable an account from receiving new invite codes, but does not invalidate existing codes.

### Example Usage

```typescript
import { Bluesky } from "@speakeasy-api/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  await bluesky.atprotoAdmin.disableAccountInvites({
    account: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlueskyCore } from "@speakeasy-api/bluesky/core.js";
import { atprotoAdminDisableAccountInvites } from "@speakeasy-api/bluesky/funcs/atprotoAdminDisableAccountInvites.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await atprotoAdminDisableAccountInvites(bluesky, {
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
  useAtprotoAdminDisableAccountInvitesMutation
} from "@speakeasy-api/bluesky/react-query/atprotoAdminDisableAccountInvites.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ComAtprotoAdminDisableAccountInvitesRequestBody](../../models/operations/comatprotoadmindisableaccountinvitesrequestbody.md)                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                                                          | Status Code                                                         | Content Type                                                        |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| errors.ComAtprotoAdminDisableAccountInvitesResponseBody             | 400                                                                 | application/json                                                    |
| errors.ComAtprotoAdminDisableAccountInvitesAtprotoAdminResponseBody | 401                                                                 | application/json                                                    |
| errors.Unauthorized                                                 | 403, 407, 511                                                       | application/json                                                    |
| errors.NotFound                                                     | 404, 501, 505                                                       | application/json                                                    |
| errors.Timeout                                                      | 408, 504                                                            | application/json                                                    |
| errors.BadRequest                                                   | 413, 414, 415, 422, 431, 510                                        | application/json                                                    |
| errors.RateLimited                                                  | 429                                                                 | application/json                                                    |
| errors.InternalServerError                                          | 500, 502, 503, 506, 507, 508                                        | application/json                                                    |
| errors.APIError                                                     | 4XX, 5XX                                                            | \*/\*                                                               |

## getInviteCodes

*This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get an admin view of invite codes.

### Example Usage

```typescript
import { Bluesky } from "@speakeasy-api/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.atprotoAdmin.getInviteCodes();

  for await (const page of result) {
    // Handle the page
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlueskyCore } from "@speakeasy-api/bluesky/core.js";
import { atprotoAdminGetInviteCodes } from "@speakeasy-api/bluesky/funcs/atprotoAdminGetInviteCodes.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await atprotoAdminGetInviteCodes(bluesky);

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  for await (const page of result) {
    // Handle the page
    console.log(page);
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
  useAtprotoAdminGetInviteCodes,
  useAtprotoAdminGetInviteCodesSuspense,
  // Query hooks suitable for building infinite scrolling or "load more" UIs.
  useAtprotoAdminGetInviteCodesInfinite,
  useAtprotoAdminGetInviteCodesInfiniteSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchAtprotoAdminGetInviteCodes,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateAtprotoAdminGetInviteCodes,
  invalidateAllAtprotoAdminGetInviteCodes,
} from "@speakeasy-api/bluesky/react-query/atprotoAdminGetInviteCodes.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ComAtprotoAdminGetInviteCodesRequest](../../models/operations/comatprotoadmingetinvitecodesrequest.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ComAtprotoAdminGetInviteCodesResponse](../../models/operations/comatprotoadmingetinvitecodesresponse.md)\>**

### Errors

| Error Type                                                   | Status Code                                                  | Content Type                                                 |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| errors.ComAtprotoAdminGetInviteCodesResponseBody             | 400                                                          | application/json                                             |
| errors.ComAtprotoAdminGetInviteCodesAtprotoAdminResponseBody | 401                                                          | application/json                                             |
| errors.Unauthorized                                          | 403, 407, 511                                                | application/json                                             |
| errors.NotFound                                              | 404, 501, 505                                                | application/json                                             |
| errors.Timeout                                               | 408, 504                                                     | application/json                                             |
| errors.BadRequest                                            | 413, 414, 415, 422, 431, 510                                 | application/json                                             |
| errors.RateLimited                                           | 429                                                          | application/json                                             |
| errors.InternalServerError                                   | 500, 502, 503, 506, 507, 508                                 | application/json                                             |
| errors.APIError                                              | 4XX, 5XX                                                     | \*/\*                                                        |

## searchAccounts

*This endpoint is part of the atproto PDS management APIs. Requests usually require admin authentication and are made directly to the PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get list of accounts that matches your search query.

### Example Usage

```typescript
import { Bluesky } from "@speakeasy-api/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.atprotoAdmin.searchAccounts();

  for await (const page of result) {
    // Handle the page
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlueskyCore } from "@speakeasy-api/bluesky/core.js";
import { atprotoAdminSearchAccounts } from "@speakeasy-api/bluesky/funcs/atprotoAdminSearchAccounts.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await atprotoAdminSearchAccounts(bluesky);

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  for await (const page of result) {
    // Handle the page
    console.log(page);
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
  useAtprotoAdminSearchAccounts,
  useAtprotoAdminSearchAccountsSuspense,
  // Query hooks suitable for building infinite scrolling or "load more" UIs.
  useAtprotoAdminSearchAccountsInfinite,
  useAtprotoAdminSearchAccountsInfiniteSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchAtprotoAdminSearchAccounts,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateAtprotoAdminSearchAccounts,
  invalidateAllAtprotoAdminSearchAccounts,
} from "@speakeasy-api/bluesky/react-query/atprotoAdminSearchAccounts.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ComAtprotoAdminSearchAccountsRequest](../../models/operations/comatprotoadminsearchaccountsrequest.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ComAtprotoAdminSearchAccountsResponse](../../models/operations/comatprotoadminsearchaccountsresponse.md)\>**

### Errors

| Error Type                                                   | Status Code                                                  | Content Type                                                 |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| errors.ComAtprotoAdminSearchAccountsResponseBody             | 400                                                          | application/json                                             |
| errors.ComAtprotoAdminSearchAccountsAtprotoAdminResponseBody | 401                                                          | application/json                                             |
| errors.Unauthorized                                          | 403, 407, 511                                                | application/json                                             |
| errors.NotFound                                              | 404, 501, 505                                                | application/json                                             |
| errors.Timeout                                               | 408, 504                                                     | application/json                                             |
| errors.BadRequest                                            | 413, 414, 415, 422, 431, 510                                 | application/json                                             |
| errors.RateLimited                                           | 429                                                          | application/json                                             |
| errors.InternalServerError                                   | 500, 502, 503, 506, 507, 508                                 | application/json                                             |
| errors.APIError                                              | 4XX, 5XX                                                     | \*/\*                                                        |