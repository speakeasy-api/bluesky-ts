# Moderations

## Overview

### Available Operations

* [getRecords](#getrecords) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get details about some records.
* [getRepos](#getrepos) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get details about some repositories.
* [queryStatuses](#querystatuses) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

View moderation statuses of subjects (record or repo).

## getRecords

*This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get details about some records.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="tools.ozone.moderation.getRecords" method="get" path="/xrpc/tools.ozone.moderation.getRecords" -->
```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.moderations.getRecords({
    uris: [],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlueskyCore } from "@speakeasy-sdks/bluesky/core.js";
import { moderationsGetRecords } from "@speakeasy-sdks/bluesky/funcs/moderationsGetRecords.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await moderationsGetRecords(bluesky, {
    uris: [],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("moderationsGetRecords failed:", res.error);
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
  useModerationsGetRecords,
  useModerationsGetRecordsSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchModerationsGetRecords,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateModerationsGetRecords,
  invalidateAllModerationsGetRecords,
} from "@speakeasy-sdks/bluesky/react-query/moderationsGetRecords.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ToolsOzoneModerationGetRecordsRequest](../../models/operations/toolsozonemoderationgetrecordsrequest.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ToolsOzoneModerationGetRecordsResponse](../../models/operations/toolsozonemoderationgetrecordsresponse.md)\>**

### Errors

| Error Type                                            | Status Code                                           | Content Type                                          |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| errors.ToolsOzoneModerationGetRecordsBadRequestError  | 400                                                   | application/json                                      |
| errors.ToolsOzoneModerationGetRecordsAuthMissingError | 401                                                   | application/json                                      |
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

## getRepos

*This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get details about some repositories.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="tools.ozone.moderation.getRepos" method="get" path="/xrpc/tools.ozone.moderation.getRepos" -->
```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.moderations.getRepos({
    dids: [],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlueskyCore } from "@speakeasy-sdks/bluesky/core.js";
import { moderationsGetRepos } from "@speakeasy-sdks/bluesky/funcs/moderationsGetRepos.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await moderationsGetRepos(bluesky, {
    dids: [],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("moderationsGetRepos failed:", res.error);
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
  useModerationsGetRepos,
  useModerationsGetReposSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchModerationsGetRepos,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateModerationsGetRepos,
  invalidateAllModerationsGetRepos,
} from "@speakeasy-sdks/bluesky/react-query/moderationsGetRepos.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ToolsOzoneModerationGetReposRequest](../../models/operations/toolsozonemoderationgetreposrequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ToolsOzoneModerationGetReposResponse](../../models/operations/toolsozonemoderationgetreposresponse.md)\>**

### Errors

| Error Type                                          | Status Code                                         | Content Type                                        |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| errors.ToolsOzoneModerationGetReposBadRequestError  | 400                                                 | application/json                                    |
| errors.ToolsOzoneModerationGetReposAuthMissingError | 401                                                 | application/json                                    |
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

## queryStatuses

*This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

View moderation statuses of subjects (record or repo).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="tools.ozone.moderation.queryStatuses" method="get" path="/xrpc/tools.ozone.moderation.queryStatuses" -->
```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.moderations.queryStatuses({});

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
import { moderationsQueryStatuses } from "@speakeasy-sdks/bluesky/funcs/moderationsQueryStatuses.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await moderationsQueryStatuses(bluesky, {});
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("moderationsQueryStatuses failed:", res.error);
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
  useModerationsQueryStatuses,
  useModerationsQueryStatusesSuspense,
  // Query hooks suitable for building infinite scrolling or "load more" UIs.
  useModerationsQueryStatusesInfinite,
  useModerationsQueryStatusesInfiniteSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchModerationsQueryStatuses,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateModerationsQueryStatuses,
  invalidateAllModerationsQueryStatuses,
} from "@speakeasy-sdks/bluesky/react-query/moderationsQueryStatuses.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ToolsOzoneModerationQueryStatusesRequest](../../models/operations/toolsozonemoderationquerystatusesrequest.md)                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ToolsOzoneModerationQueryStatusesResponse](../../models/operations/toolsozonemoderationquerystatusesresponse.md)\>**

### Errors

| Error Type                                               | Status Code                                              | Content Type                                             |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| errors.ToolsOzoneModerationQueryStatusesBadRequestError  | 400                                                      | application/json                                         |
| errors.ToolsOzoneModerationQueryStatusesAuthMissingError | 401                                                      | application/json                                         |
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