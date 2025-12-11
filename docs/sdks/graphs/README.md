# Graphs

## Overview

### Available Operations

* [getBlocks](#getblocks) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Enumerates which accounts the requesting account is currently blocking. Requires auth.
* [getKnownFollowers](#getknownfollowers) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Enumerates accounts which follow a specified account (actor) and are followed by the viewer.
* [getListBlocks](#getlistblocks) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get mod lists that the requesting account (actor) is blocking. Requires auth.
* [getMutes](#getmutes) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Enumerates accounts that the requesting account (actor) currently has muted. Requires auth.
* [getStarterPacks](#getstarterpacks) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get views for a list of starter packs.
* [muteThread](#mutethread) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Mutes a thread preventing notifications from the thread and any of its children. Mutes are private in Bluesky. Requires auth.
* [unmuteActorList](#unmuteactorlist) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Unmutes the specified list of accounts. Requires auth.

## getBlocks

*This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Enumerates which accounts the requesting account is currently blocking. Requires auth.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="app.bsky.graph.getBlocks" method="get" path="/xrpc/app.bsky.graph.getBlocks" -->
```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.graphs.getBlocks({});

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
import { graphsGetBlocks } from "@speakeasy-sdks/bluesky/funcs/graphsGetBlocks.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await graphsGetBlocks(bluesky, {});
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("graphsGetBlocks failed:", res.error);
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
  useGraphsGetBlocks,
  useGraphsGetBlocksSuspense,
  // Query hooks suitable for building infinite scrolling or "load more" UIs.
  useGraphsGetBlocksInfinite,
  useGraphsGetBlocksInfiniteSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchGraphsGetBlocks,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateGraphsGetBlocks,
  invalidateAllGraphsGetBlocks,
} from "@speakeasy-sdks/bluesky/react-query/graphsGetBlocks.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AppBskyGraphGetBlocksRequest](../../models/operations/appbskygraphgetblocksrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AppBskyGraphGetBlocksResponse](../../models/operations/appbskygraphgetblocksresponse.md)\>**

### Errors

| Error Type                                   | Status Code                                  | Content Type                                 |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| errors.AppBskyGraphGetBlocksBadRequestError  | 400                                          | application/json                             |
| errors.AppBskyGraphGetBlocksAuthMissingError | 401                                          | application/json                             |
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

## getKnownFollowers

*This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Enumerates accounts which follow a specified account (actor) and are followed by the viewer.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="app.bsky.graph.getKnownFollowers" method="get" path="/xrpc/app.bsky.graph.getKnownFollowers" -->
```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.graphs.getKnownFollowers({
    actor: "<value>",
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
import { graphsGetKnownFollowers } from "@speakeasy-sdks/bluesky/funcs/graphsGetKnownFollowers.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await graphsGetKnownFollowers(bluesky, {
    actor: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("graphsGetKnownFollowers failed:", res.error);
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
  useGraphsGetKnownFollowers,
  useGraphsGetKnownFollowersSuspense,
  // Query hooks suitable for building infinite scrolling or "load more" UIs.
  useGraphsGetKnownFollowersInfinite,
  useGraphsGetKnownFollowersInfiniteSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchGraphsGetKnownFollowers,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateGraphsGetKnownFollowers,
  invalidateAllGraphsGetKnownFollowers,
} from "@speakeasy-sdks/bluesky/react-query/graphsGetKnownFollowers.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AppBskyGraphGetKnownFollowersRequest](../../models/operations/appbskygraphgetknownfollowersrequest.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AppBskyGraphGetKnownFollowersResponse](../../models/operations/appbskygraphgetknownfollowersresponse.md)\>**

### Errors

| Error Type                                           | Status Code                                          | Content Type                                         |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| errors.AppBskyGraphGetKnownFollowersBadRequestError  | 400                                                  | application/json                                     |
| errors.AppBskyGraphGetKnownFollowersAuthMissingError | 401                                                  | application/json                                     |
| errors.NotFoundError                                 | 404                                                  | application/json                                     |
| errors.UnauthorizedError                             | 403, 407                                             | application/json                                     |
| errors.TimeoutError                                  | 408                                                  | application/json                                     |
| errors.RateLimitedError                              | 429                                                  | application/json                                     |
| errors.BadRequestError                               | 413, 414, 415, 422, 431                              | application/json                                     |
| errors.TimeoutError                                  | 504                                                  | application/json                                     |
| errors.NotFoundError                                 | 501, 505                                             | application/json                                     |
| errors.InternalServerError                           | 500, 502, 503, 506, 507, 508                         | application/json                                     |
| errors.BadRequestError                               | 510                                                  | application/json                                     |
| errors.UnauthorizedError                             | 511                                                  | application/json                                     |
| errors.APIError                                      | 4XX, 5XX                                             | \*/\*                                                |

## getListBlocks

*This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get mod lists that the requesting account (actor) is blocking. Requires auth.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="app.bsky.graph.getListBlocks" method="get" path="/xrpc/app.bsky.graph.getListBlocks" -->
```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.graphs.getListBlocks({});

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
import { graphsGetListBlocks } from "@speakeasy-sdks/bluesky/funcs/graphsGetListBlocks.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await graphsGetListBlocks(bluesky, {});
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("graphsGetListBlocks failed:", res.error);
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
  useGraphsGetListBlocks,
  useGraphsGetListBlocksSuspense,
  // Query hooks suitable for building infinite scrolling or "load more" UIs.
  useGraphsGetListBlocksInfinite,
  useGraphsGetListBlocksInfiniteSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchGraphsGetListBlocks,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateGraphsGetListBlocks,
  invalidateAllGraphsGetListBlocks,
} from "@speakeasy-sdks/bluesky/react-query/graphsGetListBlocks.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AppBskyGraphGetListBlocksRequest](../../models/operations/appbskygraphgetlistblocksrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AppBskyGraphGetListBlocksResponse](../../models/operations/appbskygraphgetlistblocksresponse.md)\>**

### Errors

| Error Type                                       | Status Code                                      | Content Type                                     |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| errors.AppBskyGraphGetListBlocksBadRequestError  | 400                                              | application/json                                 |
| errors.AppBskyGraphGetListBlocksAuthMissingError | 401                                              | application/json                                 |
| errors.NotFoundError                             | 404                                              | application/json                                 |
| errors.UnauthorizedError                         | 403, 407                                         | application/json                                 |
| errors.TimeoutError                              | 408                                              | application/json                                 |
| errors.RateLimitedError                          | 429                                              | application/json                                 |
| errors.BadRequestError                           | 413, 414, 415, 422, 431                          | application/json                                 |
| errors.TimeoutError                              | 504                                              | application/json                                 |
| errors.NotFoundError                             | 501, 505                                         | application/json                                 |
| errors.InternalServerError                       | 500, 502, 503, 506, 507, 508                     | application/json                                 |
| errors.BadRequestError                           | 510                                              | application/json                                 |
| errors.UnauthorizedError                         | 511                                              | application/json                                 |
| errors.APIError                                  | 4XX, 5XX                                         | \*/\*                                            |

## getMutes

*This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Enumerates accounts that the requesting account (actor) currently has muted. Requires auth.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="app.bsky.graph.getMutes" method="get" path="/xrpc/app.bsky.graph.getMutes" -->
```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.graphs.getMutes({});

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
import { graphsGetMutes } from "@speakeasy-sdks/bluesky/funcs/graphsGetMutes.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await graphsGetMutes(bluesky, {});
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("graphsGetMutes failed:", res.error);
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
  useGraphsGetMutes,
  useGraphsGetMutesSuspense,
  // Query hooks suitable for building infinite scrolling or "load more" UIs.
  useGraphsGetMutesInfinite,
  useGraphsGetMutesInfiniteSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchGraphsGetMutes,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateGraphsGetMutes,
  invalidateAllGraphsGetMutes,
} from "@speakeasy-sdks/bluesky/react-query/graphsGetMutes.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AppBskyGraphGetMutesRequest](../../models/operations/appbskygraphgetmutesrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AppBskyGraphGetMutesResponse](../../models/operations/appbskygraphgetmutesresponse.md)\>**

### Errors

| Error Type                                  | Status Code                                 | Content Type                                |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| errors.AppBskyGraphGetMutesBadRequestError  | 400                                         | application/json                            |
| errors.AppBskyGraphGetMutesAuthMissingError | 401                                         | application/json                            |
| errors.NotFoundError                        | 404                                         | application/json                            |
| errors.UnauthorizedError                    | 403, 407                                    | application/json                            |
| errors.TimeoutError                         | 408                                         | application/json                            |
| errors.RateLimitedError                     | 429                                         | application/json                            |
| errors.BadRequestError                      | 413, 414, 415, 422, 431                     | application/json                            |
| errors.TimeoutError                         | 504                                         | application/json                            |
| errors.NotFoundError                        | 501, 505                                    | application/json                            |
| errors.InternalServerError                  | 500, 502, 503, 506, 507, 508                | application/json                            |
| errors.BadRequestError                      | 510                                         | application/json                            |
| errors.UnauthorizedError                    | 511                                         | application/json                            |
| errors.APIError                             | 4XX, 5XX                                    | \*/\*                                       |

## getStarterPacks

*This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get views for a list of starter packs.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="app.bsky.graph.getStarterPacks" method="get" path="/xrpc/app.bsky.graph.getStarterPacks" -->
```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.graphs.getStarterPacks({
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
import { graphsGetStarterPacks } from "@speakeasy-sdks/bluesky/funcs/graphsGetStarterPacks.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await graphsGetStarterPacks(bluesky, {
    uris: [],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("graphsGetStarterPacks failed:", res.error);
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
  useGraphsGetStarterPacks,
  useGraphsGetStarterPacksSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchGraphsGetStarterPacks,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateGraphsGetStarterPacks,
  invalidateAllGraphsGetStarterPacks,
} from "@speakeasy-sdks/bluesky/react-query/graphsGetStarterPacks.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AppBskyGraphGetStarterPacksRequest](../../models/operations/appbskygraphgetstarterpacksrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AppBskyGraphGetStarterPacksResponse](../../models/operations/appbskygraphgetstarterpacksresponse.md)\>**

### Errors

| Error Type                                         | Status Code                                        | Content Type                                       |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| errors.AppBskyGraphGetStarterPacksBadRequestError  | 400                                                | application/json                                   |
| errors.AppBskyGraphGetStarterPacksAuthMissingError | 401                                                | application/json                                   |
| errors.NotFoundError                               | 404                                                | application/json                                   |
| errors.UnauthorizedError                           | 403, 407                                           | application/json                                   |
| errors.TimeoutError                                | 408                                                | application/json                                   |
| errors.RateLimitedError                            | 429                                                | application/json                                   |
| errors.BadRequestError                             | 413, 414, 415, 422, 431                            | application/json                                   |
| errors.TimeoutError                                | 504                                                | application/json                                   |
| errors.NotFoundError                               | 501, 505                                           | application/json                                   |
| errors.InternalServerError                         | 500, 502, 503, 506, 507, 508                       | application/json                                   |
| errors.BadRequestError                             | 510                                                | application/json                                   |
| errors.UnauthorizedError                           | 511                                                | application/json                                   |
| errors.APIError                                    | 4XX, 5XX                                           | \*/\*                                              |

## muteThread

*This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Mutes a thread preventing notifications from the thread and any of its children. Mutes are private in Bluesky. Requires auth.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="app.bsky.graph.muteThread" method="post" path="/xrpc/app.bsky.graph.muteThread" -->
```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  await bluesky.graphs.muteThread({
    root: "https://any-junior.biz/",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlueskyCore } from "@speakeasy-sdks/bluesky/core.js";
import { graphsMuteThread } from "@speakeasy-sdks/bluesky/funcs/graphsMuteThread.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await graphsMuteThread(bluesky, {
    root: "https://any-junior.biz/",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("graphsMuteThread failed:", res.error);
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
  useGraphsMuteThreadMutation
} from "@speakeasy-sdks/bluesky/react-query/graphsMuteThread.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AppBskyGraphMuteThreadRequest](../../models/operations/appbskygraphmutethreadrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                                    | Status Code                                   | Content Type                                  |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| errors.AppBskyGraphMuteThreadBadRequestError  | 400                                           | application/json                              |
| errors.AppBskyGraphMuteThreadAuthMissingError | 401                                           | application/json                              |
| errors.NotFoundError                          | 404                                           | application/json                              |
| errors.UnauthorizedError                      | 403, 407                                      | application/json                              |
| errors.TimeoutError                           | 408                                           | application/json                              |
| errors.RateLimitedError                       | 429                                           | application/json                              |
| errors.BadRequestError                        | 413, 414, 415, 422, 431                       | application/json                              |
| errors.TimeoutError                           | 504                                           | application/json                              |
| errors.NotFoundError                          | 501, 505                                      | application/json                              |
| errors.InternalServerError                    | 500, 502, 503, 506, 507, 508                  | application/json                              |
| errors.BadRequestError                        | 510                                           | application/json                              |
| errors.UnauthorizedError                      | 511                                           | application/json                              |
| errors.APIError                               | 4XX, 5XX                                      | \*/\*                                         |

## unmuteActorList

*This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Unmutes the specified list of accounts. Requires auth.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="app.bsky.graph.unmuteActorList" method="post" path="/xrpc/app.bsky.graph.unmuteActorList" -->
```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  await bluesky.graphs.unmuteActorList({
    list: "https://digital-maestro.name",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlueskyCore } from "@speakeasy-sdks/bluesky/core.js";
import { graphsUnmuteActorList } from "@speakeasy-sdks/bluesky/funcs/graphsUnmuteActorList.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await graphsUnmuteActorList(bluesky, {
    list: "https://digital-maestro.name",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("graphsUnmuteActorList failed:", res.error);
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
  useGraphsUnmuteActorListMutation
} from "@speakeasy-sdks/bluesky/react-query/graphsUnmuteActorList.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AppBskyGraphUnmuteActorListRequest](../../models/operations/appbskygraphunmuteactorlistrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                                         | Status Code                                        | Content Type                                       |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| errors.AppBskyGraphUnmuteActorListBadRequestError  | 400                                                | application/json                                   |
| errors.AppBskyGraphUnmuteActorListAuthMissingError | 401                                                | application/json                                   |
| errors.NotFoundError                               | 404                                                | application/json                                   |
| errors.UnauthorizedError                           | 403, 407                                           | application/json                                   |
| errors.TimeoutError                                | 408                                                | application/json                                   |
| errors.RateLimitedError                            | 429                                                | application/json                                   |
| errors.BadRequestError                             | 413, 414, 415, 422, 431                            | application/json                                   |
| errors.TimeoutError                                | 504                                                | application/json                                   |
| errors.NotFoundError                               | 501, 505                                           | application/json                                   |
| errors.InternalServerError                         | 500, 502, 503, 506, 507, 508                       | application/json                                   |
| errors.BadRequestError                             | 510                                                | application/json                                   |
| errors.UnauthorizedError                           | 511                                                | application/json                                   |
| errors.APIError                                    | 4XX, 5XX                                           | \*/\*                                              |