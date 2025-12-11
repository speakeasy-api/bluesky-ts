# AtprotoSync

## Overview

### Available Operations

* [getBlob](#getblob) - This endpoint is part of the atproto repository synchronization APIs. Requests usually do not require authentication, and can be made to PDS intances or Relay instances.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a blob associated with a given account. Returns the full blob as originally uploaded. Does not require auth; implemented by PDS.
* [listRepos](#listrepos) - This endpoint is part of the atproto repository synchronization APIs. Requests usually do not require authentication, and can be made to PDS intances or Relay instances.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Enumerates all the DID, rev, and commit CID for all repos hosted by this service. Does not require auth; implemented by PDS and Relay.

## getBlob

This endpoint is part of the atproto repository synchronization APIs. Requests usually do not require authentication, and can be made to PDS intances or Relay instances.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a blob associated with a given account. Returns the full blob as originally uploaded. Does not require auth; implemented by PDS.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="com.atproto.sync.getBlob" method="get" path="/xrpc/com.atproto.sync.getBlob" -->
```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  await bluesky.atprotoSync.getBlob({
    did: "<id>",
    cid: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlueskyCore } from "@speakeasy-sdks/bluesky/core.js";
import { atprotoSyncGetBlob } from "@speakeasy-sdks/bluesky/funcs/atprotoSyncGetBlob.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await atprotoSyncGetBlob(bluesky, {
    did: "<id>",
    cid: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("atprotoSyncGetBlob failed:", res.error);
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
  useAtprotoSyncGetBlob,
  useAtprotoSyncGetBlobSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchAtprotoSyncGetBlob,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateAtprotoSyncGetBlob,
  invalidateAllAtprotoSyncGetBlob,
} from "@speakeasy-sdks/bluesky/react-query/atprotoSyncGetBlob.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ComAtprotoSyncGetBlobRequest](../../models/operations/comatprotosyncgetblobrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                                   | Status Code                                  | Content Type                                 |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| errors.ComAtprotoSyncGetBlobBadRequestError  | 400                                          | application/json                             |
| errors.ComAtprotoSyncGetBlobAuthMissingError | 401                                          | application/json                             |
| errors.NotFoundError                         | 404                                          | application/json                             |
| errors.UnauthorizedError                     | 403, 407                                     | application/json                             |
| errors.TimeoutError                          | 408                                          | application/json                             |
| errors.RateLimitedError                      | 429                                          | application/json                             |
| errors.BadRequestError                       | 413, 414, 415, 422, 431                      | application/json                             |
| errors.TimeoutError                          | 504                                          | application/json                             |
| errors.NotFoundError                         | 501, 505                                     | application/json                             |
| errors.InternalServerError                   | 500, 502, 503, 506, 507, 508                 | application/json                             |
| errors.BadRequestError                       | 510                                          | application/json                             |
| errors.UnauthorizedError                     | 511                                          | application/json                             |
| errors.APIError                              | 4XX, 5XX                                     | \*/\*                                        |

## listRepos

This endpoint is part of the atproto repository synchronization APIs. Requests usually do not require authentication, and can be made to PDS intances or Relay instances.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Enumerates all the DID, rev, and commit CID for all repos hosted by this service. Does not require auth; implemented by PDS and Relay.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="com.atproto.sync.listRepos" method="get" path="/xrpc/com.atproto.sync.listRepos" -->
```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.atprotoSync.listRepos({});

  for await (const page of result) {
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlueskyCore } from "@speakeasy-sdks/bluesky/core.js";
import { atprotoSyncListRepos } from "@speakeasy-sdks/bluesky/funcs/atprotoSyncListRepos.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await atprotoSyncListRepos(bluesky, {});
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("atprotoSyncListRepos failed:", res.error);
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
  useAtprotoSyncListRepos,
  useAtprotoSyncListReposSuspense,
  // Query hooks suitable for building infinite scrolling or "load more" UIs.
  useAtprotoSyncListReposInfinite,
  useAtprotoSyncListReposInfiniteSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchAtprotoSyncListRepos,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateAtprotoSyncListRepos,
  invalidateAllAtprotoSyncListRepos,
} from "@speakeasy-sdks/bluesky/react-query/atprotoSyncListRepos.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ComAtprotoSyncListReposRequest](../../models/operations/comatprotosynclistreposrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ComAtprotoSyncListReposResponse](../../models/operations/comatprotosynclistreposresponse.md)\>**

### Errors

| Error Type                                     | Status Code                                    | Content Type                                   |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| errors.ComAtprotoSyncListReposBadRequestError  | 400                                            | application/json                               |
| errors.ComAtprotoSyncListReposAuthMissingError | 401                                            | application/json                               |
| errors.NotFoundError                           | 404                                            | application/json                               |
| errors.UnauthorizedError                       | 403, 407                                       | application/json                               |
| errors.TimeoutError                            | 408                                            | application/json                               |
| errors.RateLimitedError                        | 429                                            | application/json                               |
| errors.BadRequestError                         | 413, 414, 415, 422, 431                        | application/json                               |
| errors.TimeoutError                            | 504                                            | application/json                               |
| errors.NotFoundError                           | 501, 505                                       | application/json                               |
| errors.InternalServerError                     | 500, 502, 503, 506, 507, 508                   | application/json                               |
| errors.BadRequestError                         | 510                                            | application/json                               |
| errors.UnauthorizedError                       | 511                                            | application/json                               |
| errors.APIError                                | 4XX, 5XX                                       | \*/\*                                          |