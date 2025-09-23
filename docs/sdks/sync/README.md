# Sync
(*sync*)

## Overview

### Available Operations

* [getRepo](#getrepo) - This endpoint is part of the atproto repository synchronization APIs. Requests usually do not require authentication, and can be made to PDS intances or Relay instances.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Download a repository export as CAR file. Optionally only a 'diff' since a previous revision. Does not require auth; implemented by PDS.
* [listBlobs](#listblobs) - This endpoint is part of the atproto repository synchronization APIs. Requests usually do not require authentication, and can be made to PDS intances or Relay instances.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

List blob CIDs for an account, since some repo revision. Does not require auth; implemented by PDS.
* [notifyOfUpdate](#notifyofupdate) - This endpoint is part of the atproto repository synchronization APIs. Requests usually do not require authentication, and can be made to PDS intances or Relay instances.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Notify a crawling service of a recent update, and that crawling should resume. Intended use is after a gap between repo stream events caused the crawling service to disconnect. Does not require auth; implemented by Relay.

## getRepo

This endpoint is part of the atproto repository synchronization APIs. Requests usually do not require authentication, and can be made to PDS intances or Relay instances.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Download a repository export as CAR file. Optionally only a 'diff' since a previous revision. Does not require auth; implemented by PDS.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="com.atproto.sync.getRepo" method="get" path="/xrpc/com.atproto.sync.getRepo" -->
```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  await bluesky.sync.getRepo({
    did: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlueskyCore } from "@speakeasy-sdks/bluesky/core.js";
import { syncGetRepo } from "@speakeasy-sdks/bluesky/funcs/syncGetRepo.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await syncGetRepo(bluesky, {
    did: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("syncGetRepo failed:", res.error);
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
  useSyncGetRepo,
  useSyncGetRepoSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchSyncGetRepo,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateSyncGetRepo,
  invalidateAllSyncGetRepo,
} from "@speakeasy-sdks/bluesky/react-query/syncGetRepo.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ComAtprotoSyncGetRepoRequest](../../models/operations/comatprotosyncgetreporequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                                   | Status Code                                  | Content Type                                 |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| errors.ComAtprotoSyncGetRepoBadRequestError  | 400                                          | application/json                             |
| errors.ComAtprotoSyncGetRepoAuthMissingError | 401                                          | application/json                             |
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

## listBlobs

This endpoint is part of the atproto repository synchronization APIs. Requests usually do not require authentication, and can be made to PDS intances or Relay instances.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

List blob CIDs for an account, since some repo revision. Does not require auth; implemented by PDS.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="com.atproto.sync.listBlobs" method="get" path="/xrpc/com.atproto.sync.listBlobs" -->
```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.sync.listBlobs({
    did: "<id>",
  });

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
import { syncListBlobs } from "@speakeasy-sdks/bluesky/funcs/syncListBlobs.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await syncListBlobs(bluesky, {
    did: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("syncListBlobs failed:", res.error);
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
  useSyncListBlobs,
  useSyncListBlobsSuspense,
  // Query hooks suitable for building infinite scrolling or "load more" UIs.
  useSyncListBlobsInfinite,
  useSyncListBlobsInfiniteSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchSyncListBlobs,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateSyncListBlobs,
  invalidateAllSyncListBlobs,
} from "@speakeasy-sdks/bluesky/react-query/syncListBlobs.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ComAtprotoSyncListBlobsRequest](../../models/operations/comatprotosynclistblobsrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ComAtprotoSyncListBlobsResponse](../../models/operations/comatprotosynclistblobsresponse.md)\>**

### Errors

| Error Type                                     | Status Code                                    | Content Type                                   |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| errors.ComAtprotoSyncListBlobsBadRequestError  | 400                                            | application/json                               |
| errors.ComAtprotoSyncListBlobsAuthMissingError | 401                                            | application/json                               |
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

## notifyOfUpdate

This endpoint is part of the atproto repository synchronization APIs. Requests usually do not require authentication, and can be made to PDS intances or Relay instances.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Notify a crawling service of a recent update, and that crawling should resume. Intended use is after a gap between repo stream events caused the crawling service to disconnect. Does not require auth; implemented by Relay.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="com.atproto.sync.notifyOfUpdate" method="post" path="/xrpc/com.atproto.sync.notifyOfUpdate" -->
```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  await bluesky.sync.notifyOfUpdate({
    hostname: "monstrous-reach.com",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlueskyCore } from "@speakeasy-sdks/bluesky/core.js";
import { syncNotifyOfUpdate } from "@speakeasy-sdks/bluesky/funcs/syncNotifyOfUpdate.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await syncNotifyOfUpdate(bluesky, {
    hostname: "monstrous-reach.com",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("syncNotifyOfUpdate failed:", res.error);
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
  useSyncNotifyOfUpdateMutation
} from "@speakeasy-sdks/bluesky/react-query/syncNotifyOfUpdate.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ComAtprotoSyncNotifyOfUpdateRequest](../../models/operations/comatprotosyncnotifyofupdaterequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                                          | Status Code                                         | Content Type                                        |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| errors.ComAtprotoSyncNotifyOfUpdateBadRequestError  | 400                                                 | application/json                                    |
| errors.ComAtprotoSyncNotifyOfUpdateAuthMissingError | 401                                                 | application/json                                    |
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