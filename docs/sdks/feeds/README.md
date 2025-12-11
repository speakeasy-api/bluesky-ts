# Feeds

## Overview

### Available Operations

* [describeGenerator](#describegenerator) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get information about a feed generator, including policies and offered feed URIs. Does not require auth; implemented by Feed Generator services (not App View).
* [getLikes](#getlikes) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get like records which reference a subject (by AT-URI and CID).
* [getList](#getlist) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a feed of recent posts from a list (posts and reposts from any actors on the list). Does not require auth.
* [getPostThread](#getpostthread) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get posts in a thread. Does not require auth, but additional metadata and filtering will be applied for authed requests.
* [get](#get) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Gets post views for a specified list of posts (by AT-URI). This is sometimes referred to as 'hydrating' a 'feed skeleton'.
* [getQuotes](#getquotes) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a list of quotes for a given post.
* [getRepostedBy](#getrepostedby) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a list of reposts for a given post.
* [sendInteractions](#sendinteractions) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Send information about interactions with feed items back to the feed generator that served them.

## describeGenerator

*This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get information about a feed generator, including policies and offered feed URIs. Does not require auth; implemented by Feed Generator services (not App View).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="app.bsky.feed.describeFeedGenerator" method="get" path="/xrpc/app.bsky.feed.describeFeedGenerator" -->
```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.feeds.describeGenerator();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlueskyCore } from "@speakeasy-sdks/bluesky/core.js";
import { feedsDescribeGenerator } from "@speakeasy-sdks/bluesky/funcs/feedsDescribeGenerator.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await feedsDescribeGenerator(bluesky);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("feedsDescribeGenerator failed:", res.error);
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
  useFeedsDescribeGenerator,
  useFeedsDescribeGeneratorSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchFeedsDescribeGenerator,
  
  // Utility to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateAllFeedsDescribeGenerator,
} from "@speakeasy-sdks/bluesky/react-query/feedsDescribeGenerator.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AppBskyFeedDescribeFeedGeneratorResponse](../../models/operations/appbskyfeeddescribefeedgeneratorresponse.md)\>**

### Errors

| Error Type                                              | Status Code                                             | Content Type                                            |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| errors.AppBskyFeedDescribeFeedGeneratorBadRequestError  | 400                                                     | application/json                                        |
| errors.AppBskyFeedDescribeFeedGeneratorAuthMissingError | 401                                                     | application/json                                        |
| errors.NotFoundError                                    | 404                                                     | application/json                                        |
| errors.UnauthorizedError                                | 403, 407                                                | application/json                                        |
| errors.TimeoutError                                     | 408                                                     | application/json                                        |
| errors.RateLimitedError                                 | 429                                                     | application/json                                        |
| errors.BadRequestError                                  | 413, 414, 415, 422, 431                                 | application/json                                        |
| errors.TimeoutError                                     | 504                                                     | application/json                                        |
| errors.NotFoundError                                    | 501, 505                                                | application/json                                        |
| errors.InternalServerError                              | 500, 502, 503, 506, 507, 508                            | application/json                                        |
| errors.BadRequestError                                  | 510                                                     | application/json                                        |
| errors.UnauthorizedError                                | 511                                                     | application/json                                        |
| errors.APIError                                         | 4XX, 5XX                                                | \*/\*                                                   |

## getLikes

*This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get like records which reference a subject (by AT-URI and CID).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="app.bsky.feed.getLikes" method="get" path="/xrpc/app.bsky.feed.getLikes" -->
```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.feeds.getLikes({
    uri: "https://immaculate-thorn.biz",
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
import { feedsGetLikes } from "@speakeasy-sdks/bluesky/funcs/feedsGetLikes.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await feedsGetLikes(bluesky, {
    uri: "https://immaculate-thorn.biz",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("feedsGetLikes failed:", res.error);
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
  useFeedsGetLikes,
  useFeedsGetLikesSuspense,
  // Query hooks suitable for building infinite scrolling or "load more" UIs.
  useFeedsGetLikesInfinite,
  useFeedsGetLikesInfiniteSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchFeedsGetLikes,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateFeedsGetLikes,
  invalidateAllFeedsGetLikes,
} from "@speakeasy-sdks/bluesky/react-query/feedsGetLikes.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AppBskyFeedGetLikesRequest](../../models/operations/appbskyfeedgetlikesrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AppBskyFeedGetLikesResponse](../../models/operations/appbskyfeedgetlikesresponse.md)\>**

### Errors

| Error Type                                 | Status Code                                | Content Type                               |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| errors.AppBskyFeedGetLikesBadRequestError  | 400                                        | application/json                           |
| errors.AppBskyFeedGetLikesAuthMissingError | 401                                        | application/json                           |
| errors.NotFoundError                       | 404                                        | application/json                           |
| errors.UnauthorizedError                   | 403, 407                                   | application/json                           |
| errors.TimeoutError                        | 408                                        | application/json                           |
| errors.RateLimitedError                    | 429                                        | application/json                           |
| errors.BadRequestError                     | 413, 414, 415, 422, 431                    | application/json                           |
| errors.TimeoutError                        | 504                                        | application/json                           |
| errors.NotFoundError                       | 501, 505                                   | application/json                           |
| errors.InternalServerError                 | 500, 502, 503, 506, 507, 508               | application/json                           |
| errors.BadRequestError                     | 510                                        | application/json                           |
| errors.UnauthorizedError                   | 511                                        | application/json                           |
| errors.APIError                            | 4XX, 5XX                                   | \*/\*                                      |

## getList

*This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a feed of recent posts from a list (posts and reposts from any actors on the list). Does not require auth.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="app.bsky.feed.getListFeed" method="get" path="/xrpc/app.bsky.feed.getListFeed" -->
```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.feeds.getList({
    list: "https://quiet-ignorance.biz/",
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
import { feedsGetList } from "@speakeasy-sdks/bluesky/funcs/feedsGetList.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await feedsGetList(bluesky, {
    list: "https://quiet-ignorance.biz/",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("feedsGetList failed:", res.error);
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
  useFeedsGetList,
  useFeedsGetListSuspense,
  // Query hooks suitable for building infinite scrolling or "load more" UIs.
  useFeedsGetListInfinite,
  useFeedsGetListInfiniteSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchFeedsGetList,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateFeedsGetList,
  invalidateAllFeedsGetList,
} from "@speakeasy-sdks/bluesky/react-query/feedsGetList.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AppBskyFeedGetListFeedRequest](../../models/operations/appbskyfeedgetlistfeedrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AppBskyFeedGetListFeedResponse](../../models/operations/appbskyfeedgetlistfeedresponse.md)\>**

### Errors

| Error Type                                    | Status Code                                   | Content Type                                  |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| errors.AppBskyFeedGetListFeedBadRequestError  | 400                                           | application/json                              |
| errors.AppBskyFeedGetListFeedAuthMissingError | 401                                           | application/json                              |
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

## getPostThread

*This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get posts in a thread. Does not require auth, but additional metadata and filtering will be applied for authed requests.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="app.bsky.feed.getPostThread" method="get" path="/xrpc/app.bsky.feed.getPostThread" -->
```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.feeds.getPostThread({
    uri: "https://well-to-do-brush.net/",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlueskyCore } from "@speakeasy-sdks/bluesky/core.js";
import { feedsGetPostThread } from "@speakeasy-sdks/bluesky/funcs/feedsGetPostThread.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await feedsGetPostThread(bluesky, {
    uri: "https://well-to-do-brush.net/",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("feedsGetPostThread failed:", res.error);
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
  useFeedsGetPostThread,
  useFeedsGetPostThreadSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchFeedsGetPostThread,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateFeedsGetPostThread,
  invalidateAllFeedsGetPostThread,
} from "@speakeasy-sdks/bluesky/react-query/feedsGetPostThread.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AppBskyFeedGetPostThreadRequest](../../models/operations/appbskyfeedgetpostthreadrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AppBskyFeedGetPostThreadResponse](../../models/operations/appbskyfeedgetpostthreadresponse.md)\>**

### Errors

| Error Type                                      | Status Code                                     | Content Type                                    |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| errors.AppBskyFeedGetPostThreadBadRequestError  | 400                                             | application/json                                |
| errors.AppBskyFeedGetPostThreadAuthMissingError | 401                                             | application/json                                |
| errors.NotFoundError                            | 404                                             | application/json                                |
| errors.UnauthorizedError                        | 403, 407                                        | application/json                                |
| errors.TimeoutError                             | 408                                             | application/json                                |
| errors.RateLimitedError                         | 429                                             | application/json                                |
| errors.BadRequestError                          | 413, 414, 415, 422, 431                         | application/json                                |
| errors.TimeoutError                             | 504                                             | application/json                                |
| errors.NotFoundError                            | 501, 505                                        | application/json                                |
| errors.InternalServerError                      | 500, 502, 503, 506, 507, 508                    | application/json                                |
| errors.BadRequestError                          | 510                                             | application/json                                |
| errors.UnauthorizedError                        | 511                                             | application/json                                |
| errors.APIError                                 | 4XX, 5XX                                        | \*/\*                                           |

## get

*This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Gets post views for a specified list of posts (by AT-URI). This is sometimes referred to as 'hydrating' a 'feed skeleton'.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="app.bsky.feed.getPosts" method="get" path="/xrpc/app.bsky.feed.getPosts" -->
```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.feeds.get({
    uris: [
      "https://scented-labourer.com/",
      "https://querulous-partridge.biz",
      "https://youthful-eternity.org/",
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlueskyCore } from "@speakeasy-sdks/bluesky/core.js";
import { feedsGet } from "@speakeasy-sdks/bluesky/funcs/feedsGet.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await feedsGet(bluesky, {
    uris: [
      "https://scented-labourer.com/",
      "https://querulous-partridge.biz",
      "https://youthful-eternity.org/",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("feedsGet failed:", res.error);
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
  useFeedsGet,
  useFeedsGetSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchFeedsGet,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateFeedsGet,
  invalidateAllFeedsGet,
} from "@speakeasy-sdks/bluesky/react-query/feedsGet.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AppBskyFeedGetPostsRequest](../../models/operations/appbskyfeedgetpostsrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AppBskyFeedGetPostsResponse](../../models/operations/appbskyfeedgetpostsresponse.md)\>**

### Errors

| Error Type                                 | Status Code                                | Content Type                               |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| errors.AppBskyFeedGetPostsBadRequestError  | 400                                        | application/json                           |
| errors.AppBskyFeedGetPostsAuthMissingError | 401                                        | application/json                           |
| errors.NotFoundError                       | 404                                        | application/json                           |
| errors.UnauthorizedError                   | 403, 407                                   | application/json                           |
| errors.TimeoutError                        | 408                                        | application/json                           |
| errors.RateLimitedError                    | 429                                        | application/json                           |
| errors.BadRequestError                     | 413, 414, 415, 422, 431                    | application/json                           |
| errors.TimeoutError                        | 504                                        | application/json                           |
| errors.NotFoundError                       | 501, 505                                   | application/json                           |
| errors.InternalServerError                 | 500, 502, 503, 506, 507, 508               | application/json                           |
| errors.BadRequestError                     | 510                                        | application/json                           |
| errors.UnauthorizedError                   | 511                                        | application/json                           |
| errors.APIError                            | 4XX, 5XX                                   | \*/\*                                      |

## getQuotes

*This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a list of quotes for a given post.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="app.bsky.feed.getQuotes" method="get" path="/xrpc/app.bsky.feed.getQuotes" -->
```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.feeds.getQuotes({
    uri: "https://dazzling-sand.com/",
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
import { feedsGetQuotes } from "@speakeasy-sdks/bluesky/funcs/feedsGetQuotes.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await feedsGetQuotes(bluesky, {
    uri: "https://dazzling-sand.com/",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("feedsGetQuotes failed:", res.error);
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
  useFeedsGetQuotes,
  useFeedsGetQuotesSuspense,
  // Query hooks suitable for building infinite scrolling or "load more" UIs.
  useFeedsGetQuotesInfinite,
  useFeedsGetQuotesInfiniteSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchFeedsGetQuotes,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateFeedsGetQuotes,
  invalidateAllFeedsGetQuotes,
} from "@speakeasy-sdks/bluesky/react-query/feedsGetQuotes.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AppBskyFeedGetQuotesRequest](../../models/operations/appbskyfeedgetquotesrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AppBskyFeedGetQuotesResponse](../../models/operations/appbskyfeedgetquotesresponse.md)\>**

### Errors

| Error Type                                  | Status Code                                 | Content Type                                |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| errors.AppBskyFeedGetQuotesBadRequestError  | 400                                         | application/json                            |
| errors.AppBskyFeedGetQuotesAuthMissingError | 401                                         | application/json                            |
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

## getRepostedBy

*This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a list of reposts for a given post.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="app.bsky.feed.getRepostedBy" method="get" path="/xrpc/app.bsky.feed.getRepostedBy" -->
```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.feeds.getRepostedBy({
    uri: "https://foolhardy-cycle.name",
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
import { feedsGetRepostedBy } from "@speakeasy-sdks/bluesky/funcs/feedsGetRepostedBy.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await feedsGetRepostedBy(bluesky, {
    uri: "https://foolhardy-cycle.name",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("feedsGetRepostedBy failed:", res.error);
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
  useFeedsGetRepostedBy,
  useFeedsGetRepostedBySuspense,
  // Query hooks suitable for building infinite scrolling or "load more" UIs.
  useFeedsGetRepostedByInfinite,
  useFeedsGetRepostedByInfiniteSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchFeedsGetRepostedBy,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateFeedsGetRepostedBy,
  invalidateAllFeedsGetRepostedBy,
} from "@speakeasy-sdks/bluesky/react-query/feedsGetRepostedBy.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AppBskyFeedGetRepostedByRequest](../../models/operations/appbskyfeedgetrepostedbyrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AppBskyFeedGetRepostedByResponse](../../models/operations/appbskyfeedgetrepostedbyresponse.md)\>**

### Errors

| Error Type                                      | Status Code                                     | Content Type                                    |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| errors.AppBskyFeedGetRepostedByBadRequestError  | 400                                             | application/json                                |
| errors.AppBskyFeedGetRepostedByAuthMissingError | 401                                             | application/json                                |
| errors.NotFoundError                            | 404                                             | application/json                                |
| errors.UnauthorizedError                        | 403, 407                                        | application/json                                |
| errors.TimeoutError                             | 408                                             | application/json                                |
| errors.RateLimitedError                         | 429                                             | application/json                                |
| errors.BadRequestError                          | 413, 414, 415, 422, 431                         | application/json                                |
| errors.TimeoutError                             | 504                                             | application/json                                |
| errors.NotFoundError                            | 501, 505                                        | application/json                                |
| errors.InternalServerError                      | 500, 502, 503, 506, 507, 508                    | application/json                                |
| errors.BadRequestError                          | 510                                             | application/json                                |
| errors.UnauthorizedError                        | 511                                             | application/json                                |
| errors.APIError                                 | 4XX, 5XX                                        | \*/\*                                           |

## sendInteractions

*This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Send information about interactions with feed items back to the feed generator that served them.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="app.bsky.feed.sendInteractions" method="post" path="/xrpc/app.bsky.feed.sendInteractions" -->
```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.feeds.sendInteractions({
    interactions: [],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlueskyCore } from "@speakeasy-sdks/bluesky/core.js";
import { feedsSendInteractions } from "@speakeasy-sdks/bluesky/funcs/feedsSendInteractions.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await feedsSendInteractions(bluesky, {
    interactions: [],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("feedsSendInteractions failed:", res.error);
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
  useFeedsSendInteractionsMutation
} from "@speakeasy-sdks/bluesky/react-query/feedsSendInteractions.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AppBskyFeedSendInteractionsRequest](../../models/operations/appbskyfeedsendinteractionsrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AppBskyFeedSendInteractionsResponse](../../models/operations/appbskyfeedsendinteractionsresponse.md)\>**

### Errors

| Error Type                                         | Status Code                                        | Content Type                                       |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| errors.AppBskyFeedSendInteractionsBadRequestError  | 400                                                | application/json                                   |
| errors.AppBskyFeedSendInteractionsAuthMissingError | 401                                                | application/json                                   |
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