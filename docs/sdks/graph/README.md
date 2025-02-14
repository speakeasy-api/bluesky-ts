# Graph
(*graph*)

## Overview

### Available Operations

* [getActorStarterPacks](#getactorstarterpacks) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a list of starter packs created by the actor.
* [getFollows](#getfollows) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Enumerates accounts which a specified account (actor) follows.
* [getList](#getlist) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Gets a 'view' (with additional context) of a specified list.
* [getListMutes](#getlistmutes) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Enumerates mod lists that the requesting account (actor) currently has muted. Requires auth.
* [getLists](#getlists) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Enumerates the lists created by a specified account (actor).
* [getRelationships](#getrelationships) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Enumerates public relationships between one account, and a list of other accounts. Does not require auth.
* [getStarterPack](#getstarterpack) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Gets a view of a starter pack.
* [muteActor](#muteactor) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Creates a mute relationship for the specified account. Mutes are private in Bluesky. Requires auth.
* [muteActorList](#muteactorlist) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Creates a mute relationship for the specified list of accounts. Mutes are private in Bluesky. Requires auth.
* [searchStarterPacks](#searchstarterpacks) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Find starter packs matching search criteria. Does not require auth.
* [unmuteThread](#unmutethread) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Unmutes the specified thread. Requires auth.

## getActorStarterPacks

*This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a list of starter packs created by the actor.

### Example Usage

```typescript
import { Bluesky } from "@speakeasy-api/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.graph.getActorStarterPacks({
    actor: "<value>",
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
import { graphGetActorStarterPacks } from "@speakeasy-api/bluesky/funcs/graphGetActorStarterPacks.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await graphGetActorStarterPacks(bluesky, {
    actor: "<value>",
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
  useGraphGetActorStarterPacks,
  useGraphGetActorStarterPacksSuspense,
  // Query hooks suitable for building infinite scrolling or "load more" UIs.
  useGraphGetActorStarterPacksInfinite,
  useGraphGetActorStarterPacksInfiniteSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchGraphGetActorStarterPacks,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateGraphGetActorStarterPacks,
  invalidateAllGraphGetActorStarterPacks,
} from "@speakeasy-api/bluesky/react-query/graphGetActorStarterPacks.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AppBskyGraphGetActorStarterPacksRequest](../../models/operations/appbskygraphgetactorstarterpacksrequest.md)                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AppBskyGraphGetActorStarterPacksResponse](../../models/operations/appbskygraphgetactorstarterpacksresponse.md)\>**

### Errors

| Error Type                                               | Status Code                                              | Content Type                                             |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| errors.AppBskyGraphGetActorStarterPacksResponseBody      | 400                                                      | application/json                                         |
| errors.AppBskyGraphGetActorStarterPacksGraphResponseBody | 401                                                      | application/json                                         |
| errors.NotFound                                          | 404                                                      | application/json                                         |
| errors.Unauthorized                                      | 403, 407                                                 | application/json                                         |
| errors.Timeout                                           | 408                                                      | application/json                                         |
| errors.RateLimited                                       | 429                                                      | application/json                                         |
| errors.BadRequest                                        | 413, 414, 415, 422, 431                                  | application/json                                         |
| errors.Timeout                                           | 504                                                      | application/json                                         |
| errors.NotFound                                          | 501, 505                                                 | application/json                                         |
| errors.InternalServerError                               | 500, 502, 503, 506, 507, 508                             | application/json                                         |
| errors.BadRequest                                        | 510                                                      | application/json                                         |
| errors.Unauthorized                                      | 511                                                      | application/json                                         |
| errors.APIError                                          | 4XX, 5XX                                                 | \*/\*                                                    |

## getFollows

*This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Enumerates accounts which a specified account (actor) follows.

### Example Usage

```typescript
import { Bluesky } from "@speakeasy-api/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.graph.getFollows({
    actor: "<value>",
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
import { graphGetFollows } from "@speakeasy-api/bluesky/funcs/graphGetFollows.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await graphGetFollows(bluesky, {
    actor: "<value>",
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
  useFollows,
  useFollowsSuspense,
  // Query hooks suitable for building infinite scrolling or "load more" UIs.
  useFollowsInfinite,
  useFollowsInfiniteSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchFollows,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateFollows,
  invalidateAllFollows,
} from "@speakeasy-api/bluesky/react-query/graphGetFollows.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AppBskyGraphGetFollowsRequest](../../models/operations/appbskygraphgetfollowsrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AppBskyGraphGetFollowsResponse](../../models/operations/appbskygraphgetfollowsresponse.md)\>**

### Errors

| Error Type                                     | Status Code                                    | Content Type                                   |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| errors.AppBskyGraphGetFollowsResponseBody      | 400                                            | application/json                               |
| errors.AppBskyGraphGetFollowsGraphResponseBody | 401                                            | application/json                               |
| errors.NotFound                                | 404                                            | application/json                               |
| errors.Unauthorized                            | 403, 407                                       | application/json                               |
| errors.Timeout                                 | 408                                            | application/json                               |
| errors.RateLimited                             | 429                                            | application/json                               |
| errors.BadRequest                              | 413, 414, 415, 422, 431                        | application/json                               |
| errors.Timeout                                 | 504                                            | application/json                               |
| errors.NotFound                                | 501, 505                                       | application/json                               |
| errors.InternalServerError                     | 500, 502, 503, 506, 507, 508                   | application/json                               |
| errors.BadRequest                              | 510                                            | application/json                               |
| errors.Unauthorized                            | 511                                            | application/json                               |
| errors.APIError                                | 4XX, 5XX                                       | \*/\*                                          |

## getList

*This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Gets a 'view' (with additional context) of a specified list.

### Example Usage

```typescript
import { Bluesky } from "@speakeasy-api/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.graph.getList({
    list: "https://prickly-caption.info/",
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
import { graphGetList } from "@speakeasy-api/bluesky/funcs/graphGetList.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await graphGetList(bluesky, {
    list: "https://prickly-caption.info/",
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
  useGraphGetList,
  useGraphGetListSuspense,
  // Query hooks suitable for building infinite scrolling or "load more" UIs.
  useGraphGetListInfinite,
  useGraphGetListInfiniteSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchGraphGetList,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateGraphGetList,
  invalidateAllGraphGetList,
} from "@speakeasy-api/bluesky/react-query/graphGetList.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AppBskyGraphGetListRequest](../../models/operations/appbskygraphgetlistrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AppBskyGraphGetListResponse](../../models/operations/appbskygraphgetlistresponse.md)\>**

### Errors

| Error Type                                  | Status Code                                 | Content Type                                |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| errors.AppBskyGraphGetListResponseBody      | 400                                         | application/json                            |
| errors.AppBskyGraphGetListGraphResponseBody | 401                                         | application/json                            |
| errors.NotFound                             | 404                                         | application/json                            |
| errors.Unauthorized                         | 403, 407                                    | application/json                            |
| errors.Timeout                              | 408                                         | application/json                            |
| errors.RateLimited                          | 429                                         | application/json                            |
| errors.BadRequest                           | 413, 414, 415, 422, 431                     | application/json                            |
| errors.Timeout                              | 504                                         | application/json                            |
| errors.NotFound                             | 501, 505                                    | application/json                            |
| errors.InternalServerError                  | 500, 502, 503, 506, 507, 508                | application/json                            |
| errors.BadRequest                           | 510                                         | application/json                            |
| errors.Unauthorized                         | 511                                         | application/json                            |
| errors.APIError                             | 4XX, 5XX                                    | \*/\*                                       |

## getListMutes

*This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Enumerates mod lists that the requesting account (actor) currently has muted. Requires auth.

### Example Usage

```typescript
import { Bluesky } from "@speakeasy-api/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.graph.getListMutes({});

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
import { graphGetListMutes } from "@speakeasy-api/bluesky/funcs/graphGetListMutes.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await graphGetListMutes(bluesky, {});

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
  useGraphGetListMutes,
  useGraphGetListMutesSuspense,
  // Query hooks suitable for building infinite scrolling or "load more" UIs.
  useGraphGetListMutesInfinite,
  useGraphGetListMutesInfiniteSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchGraphGetListMutes,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateGraphGetListMutes,
  invalidateAllGraphGetListMutes,
} from "@speakeasy-api/bluesky/react-query/graphGetListMutes.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AppBskyGraphGetListMutesRequest](../../models/operations/appbskygraphgetlistmutesrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AppBskyGraphGetListMutesResponse](../../models/operations/appbskygraphgetlistmutesresponse.md)\>**

### Errors

| Error Type                                       | Status Code                                      | Content Type                                     |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| errors.AppBskyGraphGetListMutesResponseBody      | 400                                              | application/json                                 |
| errors.AppBskyGraphGetListMutesGraphResponseBody | 401                                              | application/json                                 |
| errors.NotFound                                  | 404                                              | application/json                                 |
| errors.Unauthorized                              | 403, 407                                         | application/json                                 |
| errors.Timeout                                   | 408                                              | application/json                                 |
| errors.RateLimited                               | 429                                              | application/json                                 |
| errors.BadRequest                                | 413, 414, 415, 422, 431                          | application/json                                 |
| errors.Timeout                                   | 504                                              | application/json                                 |
| errors.NotFound                                  | 501, 505                                         | application/json                                 |
| errors.InternalServerError                       | 500, 502, 503, 506, 507, 508                     | application/json                                 |
| errors.BadRequest                                | 510                                              | application/json                                 |
| errors.Unauthorized                              | 511                                              | application/json                                 |
| errors.APIError                                  | 4XX, 5XX                                         | \*/\*                                            |

## getLists

*This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Enumerates the lists created by a specified account (actor).

### Example Usage

```typescript
import { Bluesky } from "@speakeasy-api/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.graph.getLists({
    actor: "<value>",
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
import { graphGetLists } from "@speakeasy-api/bluesky/funcs/graphGetLists.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await graphGetLists(bluesky, {
    actor: "<value>",
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
  useGraphGetLists,
  useGraphGetListsSuspense,
  // Query hooks suitable for building infinite scrolling or "load more" UIs.
  useGraphGetListsInfinite,
  useGraphGetListsInfiniteSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchGraphGetLists,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateGraphGetLists,
  invalidateAllGraphGetLists,
} from "@speakeasy-api/bluesky/react-query/graphGetLists.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AppBskyGraphGetListsRequest](../../models/operations/appbskygraphgetlistsrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AppBskyGraphGetListsResponse](../../models/operations/appbskygraphgetlistsresponse.md)\>**

### Errors

| Error Type                                   | Status Code                                  | Content Type                                 |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| errors.AppBskyGraphGetListsResponseBody      | 400                                          | application/json                             |
| errors.AppBskyGraphGetListsGraphResponseBody | 401                                          | application/json                             |
| errors.NotFound                              | 404                                          | application/json                             |
| errors.Unauthorized                          | 403, 407                                     | application/json                             |
| errors.Timeout                               | 408                                          | application/json                             |
| errors.RateLimited                           | 429                                          | application/json                             |
| errors.BadRequest                            | 413, 414, 415, 422, 431                      | application/json                             |
| errors.Timeout                               | 504                                          | application/json                             |
| errors.NotFound                              | 501, 505                                     | application/json                             |
| errors.InternalServerError                   | 500, 502, 503, 506, 507, 508                 | application/json                             |
| errors.BadRequest                            | 510                                          | application/json                             |
| errors.Unauthorized                          | 511                                          | application/json                             |
| errors.APIError                              | 4XX, 5XX                                     | \*/\*                                        |

## getRelationships

*This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Enumerates public relationships between one account, and a list of other accounts. Does not require auth.

### Example Usage

```typescript
import { Bluesky } from "@speakeasy-api/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.graph.getRelationships({
    actor: "<value>",
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
import { graphGetRelationships } from "@speakeasy-api/bluesky/funcs/graphGetRelationships.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await graphGetRelationships(bluesky, {
    actor: "<value>",
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
  useGraphGetRelationships,
  useGraphGetRelationshipsSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchGraphGetRelationships,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateGraphGetRelationships,
  invalidateAllGraphGetRelationships,
} from "@speakeasy-api/bluesky/react-query/graphGetRelationships.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AppBskyGraphGetRelationshipsRequest](../../models/operations/appbskygraphgetrelationshipsrequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AppBskyGraphGetRelationshipsResponseBody](../../models/operations/appbskygraphgetrelationshipsresponsebody.md)\>**

### Errors

| Error Type                                           | Status Code                                          | Content Type                                         |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| errors.AppBskyGraphGetRelationshipsResponseBody      | 400                                                  | application/json                                     |
| errors.AppBskyGraphGetRelationshipsGraphResponseBody | 401                                                  | application/json                                     |
| errors.NotFound                                      | 404                                                  | application/json                                     |
| errors.Unauthorized                                  | 403, 407                                             | application/json                                     |
| errors.Timeout                                       | 408                                                  | application/json                                     |
| errors.RateLimited                                   | 429                                                  | application/json                                     |
| errors.BadRequest                                    | 413, 414, 415, 422, 431                              | application/json                                     |
| errors.Timeout                                       | 504                                                  | application/json                                     |
| errors.NotFound                                      | 501, 505                                             | application/json                                     |
| errors.InternalServerError                           | 500, 502, 503, 506, 507, 508                         | application/json                                     |
| errors.BadRequest                                    | 510                                                  | application/json                                     |
| errors.Unauthorized                                  | 511                                                  | application/json                                     |
| errors.APIError                                      | 4XX, 5XX                                             | \*/\*                                                |

## getStarterPack

*This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Gets a view of a starter pack.

### Example Usage

```typescript
import { Bluesky } from "@speakeasy-api/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.graph.getStarterPack({
    starterPack: "https://ajar-intellect.net",
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
import { graphGetStarterPack } from "@speakeasy-api/bluesky/funcs/graphGetStarterPack.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await graphGetStarterPack(bluesky, {
    starterPack: "https://ajar-intellect.net",
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
  useGraphGetStarterPack,
  useGraphGetStarterPackSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchGraphGetStarterPack,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateGraphGetStarterPack,
  invalidateAllGraphGetStarterPack,
} from "@speakeasy-api/bluesky/react-query/graphGetStarterPack.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AppBskyGraphGetStarterPackRequest](../../models/operations/appbskygraphgetstarterpackrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AppBskyGraphGetStarterPackResponseBody](../../models/operations/appbskygraphgetstarterpackresponsebody.md)\>**

### Errors

| Error Type                                         | Status Code                                        | Content Type                                       |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| errors.AppBskyGraphGetStarterPackResponseBody      | 400                                                | application/json                                   |
| errors.AppBskyGraphGetStarterPackGraphResponseBody | 401                                                | application/json                                   |
| errors.NotFound                                    | 404                                                | application/json                                   |
| errors.Unauthorized                                | 403, 407                                           | application/json                                   |
| errors.Timeout                                     | 408                                                | application/json                                   |
| errors.RateLimited                                 | 429                                                | application/json                                   |
| errors.BadRequest                                  | 413, 414, 415, 422, 431                            | application/json                                   |
| errors.Timeout                                     | 504                                                | application/json                                   |
| errors.NotFound                                    | 501, 505                                           | application/json                                   |
| errors.InternalServerError                         | 500, 502, 503, 506, 507, 508                       | application/json                                   |
| errors.BadRequest                                  | 510                                                | application/json                                   |
| errors.Unauthorized                                | 511                                                | application/json                                   |
| errors.APIError                                    | 4XX, 5XX                                           | \*/\*                                              |

## muteActor

*This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Creates a mute relationship for the specified account. Mutes are private in Bluesky. Requires auth.

### Example Usage

```typescript
import { Bluesky } from "@speakeasy-api/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  await bluesky.graph.muteActor({
    actor: "<value>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlueskyCore } from "@speakeasy-api/bluesky/core.js";
import { graphMuteActor } from "@speakeasy-api/bluesky/funcs/graphMuteActor.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await graphMuteActor(bluesky, {
    actor: "<value>",
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
  useGraphMuteActorMutation
} from "@speakeasy-api/bluesky/react-query/graphMuteActor.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AppBskyGraphMuteActorRequestBody](../../models/operations/appbskygraphmuteactorrequestbody.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                                    | Status Code                                   | Content Type                                  |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| errors.AppBskyGraphMuteActorResponseBody      | 400                                           | application/json                              |
| errors.AppBskyGraphMuteActorGraphResponseBody | 401                                           | application/json                              |
| errors.NotFound                               | 404                                           | application/json                              |
| errors.Unauthorized                           | 403, 407                                      | application/json                              |
| errors.Timeout                                | 408                                           | application/json                              |
| errors.RateLimited                            | 429                                           | application/json                              |
| errors.BadRequest                             | 413, 414, 415, 422, 431                       | application/json                              |
| errors.Timeout                                | 504                                           | application/json                              |
| errors.NotFound                               | 501, 505                                      | application/json                              |
| errors.InternalServerError                    | 500, 502, 503, 506, 507, 508                  | application/json                              |
| errors.BadRequest                             | 510                                           | application/json                              |
| errors.Unauthorized                           | 511                                           | application/json                              |
| errors.APIError                               | 4XX, 5XX                                      | \*/\*                                         |

## muteActorList

*This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Creates a mute relationship for the specified list of accounts. Mutes are private in Bluesky. Requires auth.

### Example Usage

```typescript
import { Bluesky } from "@speakeasy-api/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  await bluesky.graph.muteActorList({
    list: "https://tedious-instruction.biz",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlueskyCore } from "@speakeasy-api/bluesky/core.js";
import { graphMuteActorList } from "@speakeasy-api/bluesky/funcs/graphMuteActorList.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await graphMuteActorList(bluesky, {
    list: "https://tedious-instruction.biz",
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
  useGraphMuteActorListMutation
} from "@speakeasy-api/bluesky/react-query/graphMuteActorList.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AppBskyGraphMuteActorListRequestBody](../../models/operations/appbskygraphmuteactorlistrequestbody.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                                        | Status Code                                       | Content Type                                      |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| errors.AppBskyGraphMuteActorListResponseBody      | 400                                               | application/json                                  |
| errors.AppBskyGraphMuteActorListGraphResponseBody | 401                                               | application/json                                  |
| errors.NotFound                                   | 404                                               | application/json                                  |
| errors.Unauthorized                               | 403, 407                                          | application/json                                  |
| errors.Timeout                                    | 408                                               | application/json                                  |
| errors.RateLimited                                | 429                                               | application/json                                  |
| errors.BadRequest                                 | 413, 414, 415, 422, 431                           | application/json                                  |
| errors.Timeout                                    | 504                                               | application/json                                  |
| errors.NotFound                                   | 501, 505                                          | application/json                                  |
| errors.InternalServerError                        | 500, 502, 503, 506, 507, 508                      | application/json                                  |
| errors.BadRequest                                 | 510                                               | application/json                                  |
| errors.Unauthorized                               | 511                                               | application/json                                  |
| errors.APIError                                   | 4XX, 5XX                                          | \*/\*                                             |

## searchStarterPacks

*This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Find starter packs matching search criteria. Does not require auth.

### Example Usage

```typescript
import { Bluesky } from "@speakeasy-api/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.graph.searchStarterPacks({
    q: "<value>",
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
import { graphSearchStarterPacks } from "@speakeasy-api/bluesky/funcs/graphSearchStarterPacks.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await graphSearchStarterPacks(bluesky, {
    q: "<value>",
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
  useGraphSearchStarterPacks,
  useGraphSearchStarterPacksSuspense,
  // Query hooks suitable for building infinite scrolling or "load more" UIs.
  useGraphSearchStarterPacksInfinite,
  useGraphSearchStarterPacksInfiniteSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchGraphSearchStarterPacks,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateGraphSearchStarterPacks,
  invalidateAllGraphSearchStarterPacks,
} from "@speakeasy-api/bluesky/react-query/graphSearchStarterPacks.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AppBskyGraphSearchStarterPacksRequest](../../models/operations/appbskygraphsearchstarterpacksrequest.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AppBskyGraphSearchStarterPacksResponse](../../models/operations/appbskygraphsearchstarterpacksresponse.md)\>**

### Errors

| Error Type                                             | Status Code                                            | Content Type                                           |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| errors.AppBskyGraphSearchStarterPacksResponseBody      | 400                                                    | application/json                                       |
| errors.AppBskyGraphSearchStarterPacksGraphResponseBody | 401                                                    | application/json                                       |
| errors.NotFound                                        | 404                                                    | application/json                                       |
| errors.Unauthorized                                    | 403, 407                                               | application/json                                       |
| errors.Timeout                                         | 408                                                    | application/json                                       |
| errors.RateLimited                                     | 429                                                    | application/json                                       |
| errors.BadRequest                                      | 413, 414, 415, 422, 431                                | application/json                                       |
| errors.Timeout                                         | 504                                                    | application/json                                       |
| errors.NotFound                                        | 501, 505                                               | application/json                                       |
| errors.InternalServerError                             | 500, 502, 503, 506, 507, 508                           | application/json                                       |
| errors.BadRequest                                      | 510                                                    | application/json                                       |
| errors.Unauthorized                                    | 511                                                    | application/json                                       |
| errors.APIError                                        | 4XX, 5XX                                               | \*/\*                                                  |

## unmuteThread

*This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Unmutes the specified thread. Requires auth.

### Example Usage

```typescript
import { Bluesky } from "@speakeasy-api/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  await bluesky.graph.unmuteThread({
    root: "https://dutiful-fisherman.biz",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlueskyCore } from "@speakeasy-api/bluesky/core.js";
import { graphUnmuteThread } from "@speakeasy-api/bluesky/funcs/graphUnmuteThread.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await graphUnmuteThread(bluesky, {
    root: "https://dutiful-fisherman.biz",
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
  useGraphUnmuteThreadMutation
} from "@speakeasy-api/bluesky/react-query/graphUnmuteThread.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AppBskyGraphUnmuteThreadRequestBody](../../models/operations/appbskygraphunmutethreadrequestbody.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                                       | Status Code                                      | Content Type                                     |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| errors.AppBskyGraphUnmuteThreadResponseBody      | 400                                              | application/json                                 |
| errors.AppBskyGraphUnmuteThreadGraphResponseBody | 401                                              | application/json                                 |
| errors.NotFound                                  | 404                                              | application/json                                 |
| errors.Unauthorized                              | 403, 407                                         | application/json                                 |
| errors.Timeout                                   | 408                                              | application/json                                 |
| errors.RateLimited                               | 429                                              | application/json                                 |
| errors.BadRequest                                | 413, 414, 415, 422, 431                          | application/json                                 |
| errors.Timeout                                   | 504                                              | application/json                                 |
| errors.NotFound                                  | 501, 505                                         | application/json                                 |
| errors.InternalServerError                       | 500, 502, 503, 506, 507, 508                     | application/json                                 |
| errors.BadRequest                                | 510                                              | application/json                                 |
| errors.Unauthorized                              | 511                                              | application/json                                 |
| errors.APIError                                  | 4XX, 5XX                                         | \*/\*                                            |