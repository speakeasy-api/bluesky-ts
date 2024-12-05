# Syncs
(*syncs*)

## Overview

### Available Operations

* [getBlocks](#getblocks) - This endpoint is part of the atproto repository synchronization APIs. Requests usually do not require authentication, and can be made to PDS intances or Relay instances.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get data blocks from a given repo, by CID. For example, intermediate MST nodes, or records. Does not require auth; implemented by PDS.
* [getLatestCommit](#getlatestcommit) - This endpoint is part of the atproto repository synchronization APIs. Requests usually do not require authentication, and can be made to PDS intances or Relay instances.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get the current commit CID & revision of the specified repo. Does not require auth.
* [getRepoStatus](#getrepostatus) - This endpoint is part of the atproto repository synchronization APIs. Requests usually do not require authentication, and can be made to PDS intances or Relay instances.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get the hosting status for a repository, on this server. Expected to be implemented by PDS and Relay.
* [requestCrawl](#requestcrawl) - This endpoint is part of the atproto repository synchronization APIs. Requests usually do not require authentication, and can be made to PDS intances or Relay instances.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Request a service to persistently crawl hosted repos. Expected use is new PDS instances declaring their existence to Relays. Does not require auth.

## getBlocks

This endpoint is part of the atproto repository synchronization APIs. Requests usually do not require authentication, and can be made to PDS intances or Relay instances.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get data blocks from a given repo, by CID. For example, intermediate MST nodes, or records. Does not require auth; implemented by PDS.

### Example Usage

```typescript
import { Bluesky } from "bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  await bluesky.syncs.getBlocks({
    did: "<id>",
    cids: [
      "<id>",
      "<id>",
    ],
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlueskyCore } from "bluesky/core.js";
import { syncsGetBlocks } from "bluesky/funcs/syncsGetBlocks.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await syncsGetBlocks(bluesky, {
    did: "<id>",
    cids: [
      "<id>",
      "<id>",
    ],
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
  // Query hooks for fetching data.
  useSyncsGetBlocks,
  useSyncsGetBlocksSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchSyncsGetBlocks,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateSyncsGetBlocks,
  invalidateAllSyncsGetBlocks,
} from "bluesky/react-query/syncsGetBlocks.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ComAtprotoSyncGetBlocksRequest](../../models/operations/comatprotosyncgetblocksrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                                      | Status Code                                     | Content Type                                    |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| errors.ComAtprotoSyncGetBlocksResponseBody      | 400                                             | application/json                                |
| errors.ComAtprotoSyncGetBlocksSyncsResponseBody | 401                                             | application/json                                |
| errors.Unauthorized                             | 403, 407, 511                                   | application/json                                |
| errors.NotFound                                 | 404, 501, 505                                   | application/json                                |
| errors.Timeout                                  | 408, 504                                        | application/json                                |
| errors.BadRequest                               | 413, 414, 415, 422, 431, 510                    | application/json                                |
| errors.RateLimited                              | 429                                             | application/json                                |
| errors.InternalServerError                      | 500, 502, 503, 506, 507, 508                    | application/json                                |
| errors.APIError                                 | 4XX, 5XX                                        | \*/\*                                           |

## getLatestCommit

This endpoint is part of the atproto repository synchronization APIs. Requests usually do not require authentication, and can be made to PDS intances or Relay instances.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get the current commit CID & revision of the specified repo. Does not require auth.

### Example Usage

```typescript
import { Bluesky } from "bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.syncs.getLatestCommit({
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
import { BlueskyCore } from "bluesky/core.js";
import { syncsGetLatestCommit } from "bluesky/funcs/syncsGetLatestCommit.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await syncsGetLatestCommit(bluesky, {
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
  useSyncsGetLatestCommit,
  useSyncsGetLatestCommitSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchSyncsGetLatestCommit,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateSyncsGetLatestCommit,
  invalidateAllSyncsGetLatestCommit,
} from "bluesky/react-query/syncsGetLatestCommit.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ComAtprotoSyncGetLatestCommitRequest](../../models/operations/comatprotosyncgetlatestcommitrequest.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ComAtprotoSyncGetLatestCommitResponseBody](../../models/operations/comatprotosyncgetlatestcommitresponsebody.md)\>**

### Errors

| Error Type                                            | Status Code                                           | Content Type                                          |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| errors.ComAtprotoSyncGetLatestCommitResponseBody      | 400                                                   | application/json                                      |
| errors.ComAtprotoSyncGetLatestCommitSyncsResponseBody | 401                                                   | application/json                                      |
| errors.Unauthorized                                   | 403, 407, 511                                         | application/json                                      |
| errors.NotFound                                       | 404, 501, 505                                         | application/json                                      |
| errors.Timeout                                        | 408, 504                                              | application/json                                      |
| errors.BadRequest                                     | 413, 414, 415, 422, 431, 510                          | application/json                                      |
| errors.RateLimited                                    | 429                                                   | application/json                                      |
| errors.InternalServerError                            | 500, 502, 503, 506, 507, 508                          | application/json                                      |
| errors.APIError                                       | 4XX, 5XX                                              | \*/\*                                                 |

## getRepoStatus

This endpoint is part of the atproto repository synchronization APIs. Requests usually do not require authentication, and can be made to PDS intances or Relay instances.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get the hosting status for a repository, on this server. Expected to be implemented by PDS and Relay.

### Example Usage

```typescript
import { Bluesky } from "bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.syncs.getRepoStatus({
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
import { BlueskyCore } from "bluesky/core.js";
import { syncsGetRepoStatus } from "bluesky/funcs/syncsGetRepoStatus.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await syncsGetRepoStatus(bluesky, {
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
  useSyncsGetRepoStatus,
  useSyncsGetRepoStatusSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchSyncsGetRepoStatus,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateSyncsGetRepoStatus,
  invalidateAllSyncsGetRepoStatus,
} from "bluesky/react-query/syncsGetRepoStatus.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ComAtprotoSyncGetRepoStatusRequest](../../models/operations/comatprotosyncgetrepostatusrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ComAtprotoSyncGetRepoStatusResponseBody](../../models/operations/comatprotosyncgetrepostatusresponsebody.md)\>**

### Errors

| Error Type                                          | Status Code                                         | Content Type                                        |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| errors.ComAtprotoSyncGetRepoStatusResponseBody      | 400                                                 | application/json                                    |
| errors.ComAtprotoSyncGetRepoStatusSyncsResponseBody | 401                                                 | application/json                                    |
| errors.Unauthorized                                 | 403, 407, 511                                       | application/json                                    |
| errors.NotFound                                     | 404, 501, 505                                       | application/json                                    |
| errors.Timeout                                      | 408, 504                                            | application/json                                    |
| errors.BadRequest                                   | 413, 414, 415, 422, 431, 510                        | application/json                                    |
| errors.RateLimited                                  | 429                                                 | application/json                                    |
| errors.InternalServerError                          | 500, 502, 503, 506, 507, 508                        | application/json                                    |
| errors.APIError                                     | 4XX, 5XX                                            | \*/\*                                               |

## requestCrawl

This endpoint is part of the atproto repository synchronization APIs. Requests usually do not require authentication, and can be made to PDS intances or Relay instances.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Request a service to persistently crawl hosted repos. Expected use is new PDS instances declaring their existence to Relays. Does not require auth.

### Example Usage

```typescript
import { Bluesky } from "bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  await bluesky.syncs.requestCrawl({
    hostname: "strange-monster.com",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlueskyCore } from "bluesky/core.js";
import { syncsRequestCrawl } from "bluesky/funcs/syncsRequestCrawl.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await syncsRequestCrawl(bluesky, {
    hostname: "strange-monster.com",
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
  useSyncsRequestCrawlMutation
} from "bluesky/react-query/syncsRequestCrawl.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ComAtprotoSyncRequestCrawlRequestBody](../../models/operations/comatprotosyncrequestcrawlrequestbody.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                                         | Status Code                                        | Content Type                                       |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| errors.ComAtprotoSyncRequestCrawlResponseBody      | 400                                                | application/json                                   |
| errors.ComAtprotoSyncRequestCrawlSyncsResponseBody | 401                                                | application/json                                   |
| errors.Unauthorized                                | 403, 407, 511                                      | application/json                                   |
| errors.NotFound                                    | 404, 501, 505                                      | application/json                                   |
| errors.Timeout                                     | 408, 504                                           | application/json                                   |
| errors.BadRequest                                  | 413, 414, 415, 422, 431, 510                       | application/json                                   |
| errors.RateLimited                                 | 429                                                | application/json                                   |
| errors.InternalServerError                         | 500, 502, 503, 506, 507, 508                       | application/json                                   |
| errors.APIError                                    | 4XX, 5XX                                           | \*/\*                                              |