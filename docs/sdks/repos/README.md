# Repos
(*repos*)

## Overview

### Available Operations

* [applyWrites](#applywrites) - *This endpoint is part of the atproto PDS repository management APIs. Requests usually require authentication (unlike the `com.atproto.sync.*` endpoints), and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Apply a batch transaction of repository creates, updates, and deletes. Requires auth, implemented by PDS.
* [createRecord](#createrecord) - *This endpoint is part of the atproto PDS repository management APIs. Requests usually require authentication (unlike the `com.atproto.sync.*` endpoints), and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Create a single new repository record. Requires auth, implemented by PDS.
* [describe](#describe) - *This endpoint is part of the atproto PDS repository management APIs. Requests usually require authentication (unlike the `com.atproto.sync.*` endpoints), and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get information about an account and repository, including the list of collections. Does not require auth.
* [getRecord](#getrecord) - *This endpoint is part of the atproto PDS repository management APIs. Requests usually require authentication (unlike the `com.atproto.sync.*` endpoints), and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a single record from a repository. Does not require auth.
* [listMissingBlobs](#listmissingblobs) - *This endpoint is part of the atproto PDS repository management APIs. Requests usually require authentication (unlike the `com.atproto.sync.*` endpoints), and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Returns a list of missing blobs for the requesting account. Intended to be used in the account migration flow.
* [list](#list) - *This endpoint is part of the atproto PDS repository management APIs. Requests usually require authentication (unlike the `com.atproto.sync.*` endpoints), and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

List a range of records in a repository, matching a specific collection. Does not require auth.

## applyWrites

*This endpoint is part of the atproto PDS repository management APIs. Requests usually require authentication (unlike the `com.atproto.sync.*` endpoints), and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Apply a batch transaction of repository creates, updates, and deletes. Requires auth, implemented by PDS.

### Example Usage

```typescript
import { Bluesky } from "@speakeasy-api/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.repos.applyWrites({
    repo: "<value>",
    writes: [
      {
        collection: "<id>",
        rkey: "<value>",
        value: "<value>",
      },
      {
        collection: "<id>",
        value: "<value>",
      },
      {
        collection: "<id>",
        value: "<value>",
      },
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
import { reposApplyWrites } from "@speakeasy-api/bluesky/funcs/reposApplyWrites.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await reposApplyWrites(bluesky, {
    repo: "<value>",
    writes: [
      {
        collection: "<id>",
        rkey: "<value>",
        value: "<value>",
      },
      {
        collection: "<id>",
        value: "<value>",
      },
      {
        collection: "<id>",
        value: "<value>",
      },
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
  // Mutation hook for triggering the API call.
  useReposApplyWritesMutation
} from "@speakeasy-api/bluesky/react-query/reposApplyWrites.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ComAtprotoRepoApplyWritesRequestBody](../../models/operations/comatprotorepoapplywritesrequestbody.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ComAtprotoRepoApplyWritesResponseBody](../../models/operations/comatprotorepoapplywritesresponsebody.md)\>**

### Errors

| Error Type                                        | Status Code                                       | Content Type                                      |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| errors.ComAtprotoRepoApplyWritesResponseBody      | 400                                               | application/json                                  |
| errors.ComAtprotoRepoApplyWritesReposResponseBody | 401                                               | application/json                                  |
| errors.Unauthorized                               | 403, 407, 511                                     | application/json                                  |
| errors.NotFound                                   | 404, 501, 505                                     | application/json                                  |
| errors.Timeout                                    | 408, 504                                          | application/json                                  |
| errors.BadRequest                                 | 413, 414, 415, 422, 431, 510                      | application/json                                  |
| errors.RateLimited                                | 429                                               | application/json                                  |
| errors.InternalServerError                        | 500, 502, 503, 506, 507, 508                      | application/json                                  |
| errors.APIError                                   | 4XX, 5XX                                          | \*/\*                                             |

## createRecord

*This endpoint is part of the atproto PDS repository management APIs. Requests usually require authentication (unlike the `com.atproto.sync.*` endpoints), and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Create a single new repository record. Requires auth, implemented by PDS.

### Example Usage

```typescript
import { Bluesky } from "@speakeasy-api/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.repos.createRecord({
    repo: "<value>",
    collection: "<id>",
    record: "<value>",
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
import { reposCreateRecord } from "@speakeasy-api/bluesky/funcs/reposCreateRecord.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await reposCreateRecord(bluesky, {
    repo: "<value>",
    collection: "<id>",
    record: "<value>",
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
  useReposCreateRecordMutation
} from "@speakeasy-api/bluesky/react-query/reposCreateRecord.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ComAtprotoRepoCreateRecordRequestBody](../../models/operations/comatprotorepocreaterecordrequestbody.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ComAtprotoRepoCreateRecordResponseBody](../../models/operations/comatprotorepocreaterecordresponsebody.md)\>**

### Errors

| Error Type                                         | Status Code                                        | Content Type                                       |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| errors.ComAtprotoRepoCreateRecordResponseBody      | 400                                                | application/json                                   |
| errors.ComAtprotoRepoCreateRecordReposResponseBody | 401                                                | application/json                                   |
| errors.Unauthorized                                | 403, 407, 511                                      | application/json                                   |
| errors.NotFound                                    | 404, 501, 505                                      | application/json                                   |
| errors.Timeout                                     | 408, 504                                           | application/json                                   |
| errors.BadRequest                                  | 413, 414, 415, 422, 431, 510                       | application/json                                   |
| errors.RateLimited                                 | 429                                                | application/json                                   |
| errors.InternalServerError                         | 500, 502, 503, 506, 507, 508                       | application/json                                   |
| errors.APIError                                    | 4XX, 5XX                                           | \*/\*                                              |

## describe

*This endpoint is part of the atproto PDS repository management APIs. Requests usually require authentication (unlike the `com.atproto.sync.*` endpoints), and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get information about an account and repository, including the list of collections. Does not require auth.

### Example Usage

```typescript
import { Bluesky } from "@speakeasy-api/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.repos.describe({
    repo: "<value>",
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
import { reposDescribe } from "@speakeasy-api/bluesky/funcs/reposDescribe.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await reposDescribe(bluesky, {
    repo: "<value>",
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
  useReposDescribe,
  useReposDescribeSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchReposDescribe,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateReposDescribe,
  invalidateAllReposDescribe,
} from "@speakeasy-api/bluesky/react-query/reposDescribe.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ComAtprotoRepoDescribeRepoRequest](../../models/operations/comatprotorepodescribereporequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ComAtprotoRepoDescribeRepoResponseBody](../../models/operations/comatprotorepodescribereporesponsebody.md)\>**

### Errors

| Error Type                                         | Status Code                                        | Content Type                                       |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| errors.ComAtprotoRepoDescribeRepoResponseBody      | 400                                                | application/json                                   |
| errors.ComAtprotoRepoDescribeRepoReposResponseBody | 401                                                | application/json                                   |
| errors.Unauthorized                                | 403, 407, 511                                      | application/json                                   |
| errors.NotFound                                    | 404, 501, 505                                      | application/json                                   |
| errors.Timeout                                     | 408, 504                                           | application/json                                   |
| errors.BadRequest                                  | 413, 414, 415, 422, 431, 510                       | application/json                                   |
| errors.RateLimited                                 | 429                                                | application/json                                   |
| errors.InternalServerError                         | 500, 502, 503, 506, 507, 508                       | application/json                                   |
| errors.APIError                                    | 4XX, 5XX                                           | \*/\*                                              |

## getRecord

*This endpoint is part of the atproto PDS repository management APIs. Requests usually require authentication (unlike the `com.atproto.sync.*` endpoints), and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a single record from a repository. Does not require auth.

### Example Usage

```typescript
import { Bluesky } from "@speakeasy-api/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.repos.getRecord({
    repo: "<value>",
    collection: "<id>",
    rkey: "<value>",
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
import { reposGetRecord } from "@speakeasy-api/bluesky/funcs/reposGetRecord.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await reposGetRecord(bluesky, {
    repo: "<value>",
    collection: "<id>",
    rkey: "<value>",
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
  useReposGetRecord,
  useReposGetRecordSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchReposGetRecord,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateReposGetRecord,
  invalidateAllReposGetRecord,
} from "@speakeasy-api/bluesky/react-query/reposGetRecord.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ComAtprotoRepoGetRecordRequest](../../models/operations/comatprotorepogetrecordrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ComAtprotoRepoGetRecordResponseBody](../../models/operations/comatprotorepogetrecordresponsebody.md)\>**

### Errors

| Error Type                                      | Status Code                                     | Content Type                                    |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| errors.ComAtprotoRepoGetRecordResponseBody      | 400                                             | application/json                                |
| errors.ComAtprotoRepoGetRecordReposResponseBody | 401                                             | application/json                                |
| errors.Unauthorized                             | 403, 407, 511                                   | application/json                                |
| errors.NotFound                                 | 404, 501, 505                                   | application/json                                |
| errors.Timeout                                  | 408, 504                                        | application/json                                |
| errors.BadRequest                               | 413, 414, 415, 422, 431, 510                    | application/json                                |
| errors.RateLimited                              | 429                                             | application/json                                |
| errors.InternalServerError                      | 500, 502, 503, 506, 507, 508                    | application/json                                |
| errors.APIError                                 | 4XX, 5XX                                        | \*/\*                                           |

## listMissingBlobs

*This endpoint is part of the atproto PDS repository management APIs. Requests usually require authentication (unlike the `com.atproto.sync.*` endpoints), and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Returns a list of missing blobs for the requesting account. Intended to be used in the account migration flow.

### Example Usage

```typescript
import { Bluesky } from "@speakeasy-api/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.repos.listMissingBlobs();

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
import { reposListMissingBlobs } from "@speakeasy-api/bluesky/funcs/reposListMissingBlobs.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await reposListMissingBlobs(bluesky);

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
  useReposListMissingBlobs,
  useReposListMissingBlobsSuspense,
  // Query hooks suitable for building infinite scrolling or "load more" UIs.
  useReposListMissingBlobsInfinite,
  useReposListMissingBlobsInfiniteSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchReposListMissingBlobs,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateReposListMissingBlobs,
  invalidateAllReposListMissingBlobs,
} from "@speakeasy-api/bluesky/react-query/reposListMissingBlobs.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ComAtprotoRepoListMissingBlobsRequest](../../models/operations/comatprotorepolistmissingblobsrequest.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ComAtprotoRepoListMissingBlobsResponse](../../models/operations/comatprotorepolistmissingblobsresponse.md)\>**

### Errors

| Error Type                                             | Status Code                                            | Content Type                                           |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| errors.ComAtprotoRepoListMissingBlobsResponseBody      | 400                                                    | application/json                                       |
| errors.ComAtprotoRepoListMissingBlobsReposResponseBody | 401                                                    | application/json                                       |
| errors.Unauthorized                                    | 403, 407, 511                                          | application/json                                       |
| errors.NotFound                                        | 404, 501, 505                                          | application/json                                       |
| errors.Timeout                                         | 408, 504                                               | application/json                                       |
| errors.BadRequest                                      | 413, 414, 415, 422, 431, 510                           | application/json                                       |
| errors.RateLimited                                     | 429                                                    | application/json                                       |
| errors.InternalServerError                             | 500, 502, 503, 506, 507, 508                           | application/json                                       |
| errors.APIError                                        | 4XX, 5XX                                               | \*/\*                                                  |

## list

*This endpoint is part of the atproto PDS repository management APIs. Requests usually require authentication (unlike the `com.atproto.sync.*` endpoints), and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

List a range of records in a repository, matching a specific collection. Does not require auth.

### Example Usage

```typescript
import { Bluesky } from "@speakeasy-api/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.repos.list({
    repo: "<value>",
    collection: "<id>",
  });

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
import { reposList } from "@speakeasy-api/bluesky/funcs/reposList.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await reposList(bluesky, {
    repo: "<value>",
    collection: "<id>",
  });

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
  useReposList,
  useReposListSuspense,
  // Query hooks suitable for building infinite scrolling or "load more" UIs.
  useReposListInfinite,
  useReposListInfiniteSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchReposList,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateReposList,
  invalidateAllReposList,
} from "@speakeasy-api/bluesky/react-query/reposList.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ComAtprotoRepoListRecordsRequest](../../models/operations/comatprotorepolistrecordsrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ComAtprotoRepoListRecordsResponse](../../models/operations/comatprotorepolistrecordsresponse.md)\>**

### Errors

| Error Type                                        | Status Code                                       | Content Type                                      |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| errors.ComAtprotoRepoListRecordsResponseBody      | 400                                               | application/json                                  |
| errors.ComAtprotoRepoListRecordsReposResponseBody | 401                                               | application/json                                  |
| errors.Unauthorized                               | 403, 407, 511                                     | application/json                                  |
| errors.NotFound                                   | 404, 501, 505                                     | application/json                                  |
| errors.Timeout                                    | 408, 504                                          | application/json                                  |
| errors.BadRequest                                 | 413, 414, 415, 422, 431, 510                      | application/json                                  |
| errors.RateLimited                                | 429                                               | application/json                                  |
| errors.InternalServerError                        | 500, 502, 503, 506, 507, 508                      | application/json                                  |
| errors.APIError                                   | 4XX, 5XX                                          | \*/\*                                             |