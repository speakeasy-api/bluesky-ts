# Account
(*account*)

## Overview

### Available Operations

* [delete](#delete) - *This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
* [exportData](#exportdata) - *This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

## delete

*This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

### Example Usage

<!-- UsageSnippet language="typescript" operationID="chat.bsky.actor.deleteAccount" method="post" path="/xrpc/chat.bsky.actor.deleteAccount" -->
```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.account.delete();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlueskyCore } from "@speakeasy-sdks/bluesky/core.js";
import { accountDelete } from "@speakeasy-sdks/bluesky/funcs/accountDelete.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await accountDelete(bluesky);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountDelete failed:", res.error);
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
  useAccountDeleteMutation
} from "@speakeasy-sdks/bluesky/react-query/accountDelete.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ChatBskyActorDeleteAccountResponse](../../models/operations/chatbskyactordeleteaccountresponse.md)\>**

### Errors

| Error Type                                        | Status Code                                       | Content Type                                      |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| errors.ChatBskyActorDeleteAccountBadRequestError  | 400                                               | application/json                                  |
| errors.ChatBskyActorDeleteAccountAuthMissingError | 401                                               | application/json                                  |
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

## exportData

*This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

### Example Usage

<!-- UsageSnippet language="typescript" operationID="chat.bsky.actor.exportAccountData" method="get" path="/xrpc/chat.bsky.actor.exportAccountData" -->
```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  await bluesky.account.exportData();


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlueskyCore } from "@speakeasy-sdks/bluesky/core.js";
import { accountExportData } from "@speakeasy-sdks/bluesky/funcs/accountExportData.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await accountExportData(bluesky);
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("accountExportData failed:", res.error);
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
  useAccountExportData,
  useAccountExportDataSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchAccountExportData,
  
  // Utility to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateAllAccountExportData,
} from "@speakeasy-sdks/bluesky/react-query/accountExportData.js";
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

| Error Type                                            | Status Code                                           | Content Type                                          |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| errors.ChatBskyActorExportAccountDataBadRequestError  | 400                                                   | application/json                                      |
| errors.ChatBskyActorExportAccountDataAuthMissingError | 401                                                   | application/json                                      |
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