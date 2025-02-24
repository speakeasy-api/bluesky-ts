# Feed
(*feed*)

## Overview

### Available Operations

* [getActor](#getactor) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a list of feeds (feed generator records) created by the actor (in the actor's repo).
* [getActorLikes](#getactorlikes) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a list of posts liked by an actor. Requires auth, actor must be the requesting account.
* [getAuthor](#getauthor) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a view of an actor's 'author feed' (post and reposts by the author). Does not require auth.
* [fetch](#fetch) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a hydrated feed from an actor's selected feed generator. Implemented by App View.
* [getGenerator](#getgenerator) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get information about a feed generator. Implemented by AppView.
* [getGenerators](#getgenerators) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get information about a list of feed generators.
* [getSkeleton](#getskeleton) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a skeleton of a feed provided by a feed generator. Auth is optional, depending on provider requirements, and provides the DID of the requester. Implemented by Feed Generator Service.
* [getSuggested](#getsuggested) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a list of suggested feeds (feed generators) for the requesting account.
* [getTimeline](#gettimeline) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a view of the requesting account's home timeline. This is expected to be some form of reverse-chronological feed.
* [search](#search) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Find posts matching search criteria, returning views of those posts.

## getActor

*This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a list of feeds (feed generator records) created by the actor (in the actor's repo).

### Example Usage

```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.feed.getActor({
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
import { BlueskyCore } from "@speakeasy-sdks/bluesky/core.js";
import { feedGetActor } from "@speakeasy-sdks/bluesky/funcs/feedGetActor.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await feedGetActor(bluesky, {
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
  useFeedGetActor,
  useFeedGetActorSuspense,
  // Query hooks suitable for building infinite scrolling or "load more" UIs.
  useFeedGetActorInfinite,
  useFeedGetActorInfiniteSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchFeedGetActor,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateFeedGetActor,
  invalidateAllFeedGetActor,
} from "@speakeasy-sdks/bluesky/react-query/feedGetActor.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AppBskyFeedGetActorFeedsRequest](../../models/operations/appbskyfeedgetactorfeedsrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AppBskyFeedGetActorFeedsResponse](../../models/operations/appbskyfeedgetactorfeedsresponse.md)\>**

### Errors

| Error Type                                                   | Status Code                                                  | Content Type                                                 |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| errors.BadRequestAppBskyFeedGetActorFeedsResponseBodyError   | 400                                                          | application/json                                             |
| errors.UnauthorizedAppBskyFeedGetActorFeedsResponseBodyError | 401                                                          | application/json                                             |
| errors.NotFoundError                                         | 404                                                          | application/json                                             |
| errors.UnauthorizedError                                     | 403, 407                                                     | application/json                                             |
| errors.TimeoutError                                          | 408                                                          | application/json                                             |
| errors.RateLimitedError                                      | 429                                                          | application/json                                             |
| errors.BadRequestError                                       | 413, 414, 415, 422, 431                                      | application/json                                             |
| errors.TimeoutError                                          | 504                                                          | application/json                                             |
| errors.NotFoundError                                         | 501, 505                                                     | application/json                                             |
| errors.InternalServerError                                   | 500, 502, 503, 506, 507, 508                                 | application/json                                             |
| errors.BadRequestError                                       | 510                                                          | application/json                                             |
| errors.UnauthorizedError                                     | 511                                                          | application/json                                             |
| errors.APIError                                              | 4XX, 5XX                                                     | \*/\*                                                        |

## getActorLikes

*This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a list of posts liked by an actor. Requires auth, actor must be the requesting account.

### Example Usage

```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.feed.getActorLikes({
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
import { BlueskyCore } from "@speakeasy-sdks/bluesky/core.js";
import { feedGetActorLikes } from "@speakeasy-sdks/bluesky/funcs/feedGetActorLikes.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await feedGetActorLikes(bluesky, {
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
  useFeedGetActorLikes,
  useFeedGetActorLikesSuspense,
  // Query hooks suitable for building infinite scrolling or "load more" UIs.
  useFeedGetActorLikesInfinite,
  useFeedGetActorLikesInfiniteSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchFeedGetActorLikes,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateFeedGetActorLikes,
  invalidateAllFeedGetActorLikes,
} from "@speakeasy-sdks/bluesky/react-query/feedGetActorLikes.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AppBskyFeedGetActorLikesRequest](../../models/operations/appbskyfeedgetactorlikesrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AppBskyFeedGetActorLikesResponse](../../models/operations/appbskyfeedgetactorlikesresponse.md)\>**

### Errors

| Error Type                                                   | Status Code                                                  | Content Type                                                 |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| errors.BadRequestAppBskyFeedGetActorLikesResponseBodyError   | 400                                                          | application/json                                             |
| errors.UnauthorizedAppBskyFeedGetActorLikesResponseBodyError | 401                                                          | application/json                                             |
| errors.NotFoundError                                         | 404                                                          | application/json                                             |
| errors.UnauthorizedError                                     | 403, 407                                                     | application/json                                             |
| errors.TimeoutError                                          | 408                                                          | application/json                                             |
| errors.RateLimitedError                                      | 429                                                          | application/json                                             |
| errors.BadRequestError                                       | 413, 414, 415, 422, 431                                      | application/json                                             |
| errors.TimeoutError                                          | 504                                                          | application/json                                             |
| errors.NotFoundError                                         | 501, 505                                                     | application/json                                             |
| errors.InternalServerError                                   | 500, 502, 503, 506, 507, 508                                 | application/json                                             |
| errors.BadRequestError                                       | 510                                                          | application/json                                             |
| errors.UnauthorizedError                                     | 511                                                          | application/json                                             |
| errors.APIError                                              | 4XX, 5XX                                                     | \*/\*                                                        |

## getAuthor

*This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a view of an actor's 'author feed' (post and reposts by the author). Does not require auth.

### Example Usage

```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.feed.getAuthor({
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
import { BlueskyCore } from "@speakeasy-sdks/bluesky/core.js";
import { feedGetAuthor } from "@speakeasy-sdks/bluesky/funcs/feedGetAuthor.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await feedGetAuthor(bluesky, {
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
  useActorAuthorFeed,
  useActorAuthorFeedSuspense,
  // Query hooks suitable for building infinite scrolling or "load more" UIs.
  useActorAuthorFeedInfinite,
  useActorAuthorFeedInfiniteSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchActorAuthorFeed,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateActorAuthorFeed,
  invalidateAllActorAuthorFeed,
} from "@speakeasy-sdks/bluesky/react-query/feedGetAuthor.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AppBskyFeedGetAuthorFeedRequest](../../models/operations/appbskyfeedgetauthorfeedrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AppBskyFeedGetAuthorFeedResponse](../../models/operations/appbskyfeedgetauthorfeedresponse.md)\>**

### Errors

| Error Type                                                   | Status Code                                                  | Content Type                                                 |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| errors.BadRequestAppBskyFeedGetAuthorFeedResponseBodyError   | 400                                                          | application/json                                             |
| errors.UnauthorizedAppBskyFeedGetAuthorFeedResponseBodyError | 401                                                          | application/json                                             |
| errors.NotFoundError                                         | 404                                                          | application/json                                             |
| errors.UnauthorizedError                                     | 403, 407                                                     | application/json                                             |
| errors.TimeoutError                                          | 408                                                          | application/json                                             |
| errors.RateLimitedError                                      | 429                                                          | application/json                                             |
| errors.BadRequestError                                       | 413, 414, 415, 422, 431                                      | application/json                                             |
| errors.TimeoutError                                          | 504                                                          | application/json                                             |
| errors.NotFoundError                                         | 501, 505                                                     | application/json                                             |
| errors.InternalServerError                                   | 500, 502, 503, 506, 507, 508                                 | application/json                                             |
| errors.BadRequestError                                       | 510                                                          | application/json                                             |
| errors.UnauthorizedError                                     | 511                                                          | application/json                                             |
| errors.APIError                                              | 4XX, 5XX                                                     | \*/\*                                                        |

## fetch

*This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a hydrated feed from an actor's selected feed generator. Implemented by App View.

### Example Usage

```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.feed.fetch({
    feed: "https://unkempt-gym.name",
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
import { BlueskyCore } from "@speakeasy-sdks/bluesky/core.js";
import { feedFetch } from "@speakeasy-sdks/bluesky/funcs/feedFetch.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await feedFetch(bluesky, {
    feed: "https://unkempt-gym.name",
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
  useFeed,
  useFeedSuspense,
  // Query hooks suitable for building infinite scrolling or "load more" UIs.
  useFeedInfinite,
  useFeedInfiniteSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchFeed,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateFeed,
  invalidateAllFeed,
} from "@speakeasy-sdks/bluesky/react-query/feedFetch.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AppBskyFeedGetFeedRequest](../../models/operations/appbskyfeedgetfeedrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AppBskyFeedGetFeedResponse](../../models/operations/appbskyfeedgetfeedresponse.md)\>**

### Errors

| Error Type                                             | Status Code                                            | Content Type                                           |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| errors.BadRequestAppBskyFeedGetFeedResponseBodyError   | 400                                                    | application/json                                       |
| errors.UnauthorizedAppBskyFeedGetFeedResponseBodyError | 401                                                    | application/json                                       |
| errors.NotFoundError                                   | 404                                                    | application/json                                       |
| errors.UnauthorizedError                               | 403, 407                                               | application/json                                       |
| errors.TimeoutError                                    | 408                                                    | application/json                                       |
| errors.RateLimitedError                                | 429                                                    | application/json                                       |
| errors.BadRequestError                                 | 413, 414, 415, 422, 431                                | application/json                                       |
| errors.TimeoutError                                    | 504                                                    | application/json                                       |
| errors.NotFoundError                                   | 501, 505                                               | application/json                                       |
| errors.InternalServerError                             | 500, 502, 503, 506, 507, 508                           | application/json                                       |
| errors.BadRequestError                                 | 510                                                    | application/json                                       |
| errors.UnauthorizedError                               | 511                                                    | application/json                                       |
| errors.APIError                                        | 4XX, 5XX                                               | \*/\*                                                  |

## getGenerator

*This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get information about a feed generator. Implemented by AppView.

### Example Usage

```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.feed.getGenerator({
    feed: "https://unrealistic-poppy.biz/",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlueskyCore } from "@speakeasy-sdks/bluesky/core.js";
import { feedGetGenerator } from "@speakeasy-sdks/bluesky/funcs/feedGetGenerator.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await feedGetGenerator(bluesky, {
    feed: "https://unrealistic-poppy.biz/",
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
  useFeedGetGenerator,
  useFeedGetGeneratorSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchFeedGetGenerator,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateFeedGetGenerator,
  invalidateAllFeedGetGenerator,
} from "@speakeasy-sdks/bluesky/react-query/feedGetGenerator.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AppBskyFeedGetFeedGeneratorRequest](../../models/operations/appbskyfeedgetfeedgeneratorrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AppBskyFeedGetFeedGeneratorResponseBody](../../models/operations/appbskyfeedgetfeedgeneratorresponsebody.md)\>**

### Errors

| Error Type                                                      | Status Code                                                     | Content Type                                                    |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| errors.BadRequestAppBskyFeedGetFeedGeneratorResponseBodyError   | 400                                                             | application/json                                                |
| errors.UnauthorizedAppBskyFeedGetFeedGeneratorResponseBodyError | 401                                                             | application/json                                                |
| errors.NotFoundError                                            | 404                                                             | application/json                                                |
| errors.UnauthorizedError                                        | 403, 407                                                        | application/json                                                |
| errors.TimeoutError                                             | 408                                                             | application/json                                                |
| errors.RateLimitedError                                         | 429                                                             | application/json                                                |
| errors.BadRequestError                                          | 413, 414, 415, 422, 431                                         | application/json                                                |
| errors.TimeoutError                                             | 504                                                             | application/json                                                |
| errors.NotFoundError                                            | 501, 505                                                        | application/json                                                |
| errors.InternalServerError                                      | 500, 502, 503, 506, 507, 508                                    | application/json                                                |
| errors.BadRequestError                                          | 510                                                             | application/json                                                |
| errors.UnauthorizedError                                        | 511                                                             | application/json                                                |
| errors.APIError                                                 | 4XX, 5XX                                                        | \*/\*                                                           |

## getGenerators

*This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get information about a list of feed generators.

### Example Usage

```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.feed.getGenerators({
    feeds: [
      "https://knowledgeable-replacement.com/",
      "https://affectionate-tomatillo.biz",
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
import { BlueskyCore } from "@speakeasy-sdks/bluesky/core.js";
import { feedGetGenerators } from "@speakeasy-sdks/bluesky/funcs/feedGetGenerators.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await feedGetGenerators(bluesky, {
    feeds: [
      "https://knowledgeable-replacement.com/",
      "https://affectionate-tomatillo.biz",
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
  // Query hooks for fetching data.
  useFeedGetGenerators,
  useFeedGetGeneratorsSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchFeedGetGenerators,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateFeedGetGenerators,
  invalidateAllFeedGetGenerators,
} from "@speakeasy-sdks/bluesky/react-query/feedGetGenerators.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AppBskyFeedGetFeedGeneratorsRequest](../../models/operations/appbskyfeedgetfeedgeneratorsrequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AppBskyFeedGetFeedGeneratorsResponseBody](../../models/operations/appbskyfeedgetfeedgeneratorsresponsebody.md)\>**

### Errors

| Error Type                                                       | Status Code                                                      | Content Type                                                     |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| errors.BadRequestAppBskyFeedGetFeedGeneratorsResponseBodyError   | 400                                                              | application/json                                                 |
| errors.UnauthorizedAppBskyFeedGetFeedGeneratorsResponseBodyError | 401                                                              | application/json                                                 |
| errors.NotFoundError                                             | 404                                                              | application/json                                                 |
| errors.UnauthorizedError                                         | 403, 407                                                         | application/json                                                 |
| errors.TimeoutError                                              | 408                                                              | application/json                                                 |
| errors.RateLimitedError                                          | 429                                                              | application/json                                                 |
| errors.BadRequestError                                           | 413, 414, 415, 422, 431                                          | application/json                                                 |
| errors.TimeoutError                                              | 504                                                              | application/json                                                 |
| errors.NotFoundError                                             | 501, 505                                                         | application/json                                                 |
| errors.InternalServerError                                       | 500, 502, 503, 506, 507, 508                                     | application/json                                                 |
| errors.BadRequestError                                           | 510                                                              | application/json                                                 |
| errors.UnauthorizedError                                         | 511                                                              | application/json                                                 |
| errors.APIError                                                  | 4XX, 5XX                                                         | \*/\*                                                            |

## getSkeleton

*This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a skeleton of a feed provided by a feed generator. Auth is optional, depending on provider requirements, and provides the DID of the requester. Implemented by Feed Generator Service.

### Example Usage

```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.feed.getSkeleton({
    feed: "https://graceful-stir-fry.com",
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
import { BlueskyCore } from "@speakeasy-sdks/bluesky/core.js";
import { feedGetSkeleton } from "@speakeasy-sdks/bluesky/funcs/feedGetSkeleton.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await feedGetSkeleton(bluesky, {
    feed: "https://graceful-stir-fry.com",
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
  useFeedGetSkeleton,
  useFeedGetSkeletonSuspense,
  // Query hooks suitable for building infinite scrolling or "load more" UIs.
  useFeedGetSkeletonInfinite,
  useFeedGetSkeletonInfiniteSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchFeedGetSkeleton,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateFeedGetSkeleton,
  invalidateAllFeedGetSkeleton,
} from "@speakeasy-sdks/bluesky/react-query/feedGetSkeleton.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AppBskyFeedGetFeedSkeletonRequest](../../models/operations/appbskyfeedgetfeedskeletonrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AppBskyFeedGetFeedSkeletonResponse](../../models/operations/appbskyfeedgetfeedskeletonresponse.md)\>**

### Errors

| Error Type                                                     | Status Code                                                    | Content Type                                                   |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| errors.BadRequestAppBskyFeedGetFeedSkeletonResponseBodyError   | 400                                                            | application/json                                               |
| errors.UnauthorizedAppBskyFeedGetFeedSkeletonResponseBodyError | 401                                                            | application/json                                               |
| errors.NotFoundError                                           | 404                                                            | application/json                                               |
| errors.UnauthorizedError                                       | 403, 407                                                       | application/json                                               |
| errors.TimeoutError                                            | 408                                                            | application/json                                               |
| errors.RateLimitedError                                        | 429                                                            | application/json                                               |
| errors.BadRequestError                                         | 413, 414, 415, 422, 431                                        | application/json                                               |
| errors.TimeoutError                                            | 504                                                            | application/json                                               |
| errors.NotFoundError                                           | 501, 505                                                       | application/json                                               |
| errors.InternalServerError                                     | 500, 502, 503, 506, 507, 508                                   | application/json                                               |
| errors.BadRequestError                                         | 510                                                            | application/json                                               |
| errors.UnauthorizedError                                       | 511                                                            | application/json                                               |
| errors.APIError                                                | 4XX, 5XX                                                       | \*/\*                                                          |

## getSuggested

*This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a list of suggested feeds (feed generators) for the requesting account.

### Example Usage

```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.feed.getSuggested({});

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
import { BlueskyCore } from "@speakeasy-sdks/bluesky/core.js";
import { feedGetSuggested } from "@speakeasy-sdks/bluesky/funcs/feedGetSuggested.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await feedGetSuggested(bluesky, {});

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
  useFeedGetSuggested,
  useFeedGetSuggestedSuspense,
  // Query hooks suitable for building infinite scrolling or "load more" UIs.
  useFeedGetSuggestedInfinite,
  useFeedGetSuggestedInfiniteSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchFeedGetSuggested,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateFeedGetSuggested,
  invalidateAllFeedGetSuggested,
} from "@speakeasy-sdks/bluesky/react-query/feedGetSuggested.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AppBskyFeedGetSuggestedFeedsRequest](../../models/operations/appbskyfeedgetsuggestedfeedsrequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AppBskyFeedGetSuggestedFeedsResponse](../../models/operations/appbskyfeedgetsuggestedfeedsresponse.md)\>**

### Errors

| Error Type                                                       | Status Code                                                      | Content Type                                                     |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| errors.BadRequestAppBskyFeedGetSuggestedFeedsResponseBodyError   | 400                                                              | application/json                                                 |
| errors.UnauthorizedAppBskyFeedGetSuggestedFeedsResponseBodyError | 401                                                              | application/json                                                 |
| errors.NotFoundError                                             | 404                                                              | application/json                                                 |
| errors.UnauthorizedError                                         | 403, 407                                                         | application/json                                                 |
| errors.TimeoutError                                              | 408                                                              | application/json                                                 |
| errors.RateLimitedError                                          | 429                                                              | application/json                                                 |
| errors.BadRequestError                                           | 413, 414, 415, 422, 431                                          | application/json                                                 |
| errors.TimeoutError                                              | 504                                                              | application/json                                                 |
| errors.NotFoundError                                             | 501, 505                                                         | application/json                                                 |
| errors.InternalServerError                                       | 500, 502, 503, 506, 507, 508                                     | application/json                                                 |
| errors.BadRequestError                                           | 510                                                              | application/json                                                 |
| errors.UnauthorizedError                                         | 511                                                              | application/json                                                 |
| errors.APIError                                                  | 4XX, 5XX                                                         | \*/\*                                                            |

## getTimeline

*This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a view of the requesting account's home timeline. This is expected to be some form of reverse-chronological feed.

### Example Usage

```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.feed.getTimeline({});

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
import { BlueskyCore } from "@speakeasy-sdks/bluesky/core.js";
import { feedGetTimeline } from "@speakeasy-sdks/bluesky/funcs/feedGetTimeline.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await feedGetTimeline(bluesky, {});

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
  useFeedGetTimeline,
  useFeedGetTimelineSuspense,
  // Query hooks suitable for building infinite scrolling or "load more" UIs.
  useFeedGetTimelineInfinite,
  useFeedGetTimelineInfiniteSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchFeedGetTimeline,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateFeedGetTimeline,
  invalidateAllFeedGetTimeline,
} from "@speakeasy-sdks/bluesky/react-query/feedGetTimeline.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AppBskyFeedGetTimelineRequest](../../models/operations/appbskyfeedgettimelinerequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AppBskyFeedGetTimelineResponse](../../models/operations/appbskyfeedgettimelineresponse.md)\>**

### Errors

| Error Type                                                 | Status Code                                                | Content Type                                               |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| errors.BadRequestAppBskyFeedGetTimelineResponseBodyError   | 400                                                        | application/json                                           |
| errors.UnauthorizedAppBskyFeedGetTimelineResponseBodyError | 401                                                        | application/json                                           |
| errors.NotFoundError                                       | 404                                                        | application/json                                           |
| errors.UnauthorizedError                                   | 403, 407                                                   | application/json                                           |
| errors.TimeoutError                                        | 408                                                        | application/json                                           |
| errors.RateLimitedError                                    | 429                                                        | application/json                                           |
| errors.BadRequestError                                     | 413, 414, 415, 422, 431                                    | application/json                                           |
| errors.TimeoutError                                        | 504                                                        | application/json                                           |
| errors.NotFoundError                                       | 501, 505                                                   | application/json                                           |
| errors.InternalServerError                                 | 500, 502, 503, 506, 507, 508                               | application/json                                           |
| errors.BadRequestError                                     | 510                                                        | application/json                                           |
| errors.UnauthorizedError                                   | 511                                                        | application/json                                           |
| errors.APIError                                            | 4XX, 5XX                                                   | \*/\*                                                      |

## search

*This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Find posts matching search criteria, returning views of those posts.

### Example Usage

```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.feed.search({
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
import { BlueskyCore } from "@speakeasy-sdks/bluesky/core.js";
import { feedSearch } from "@speakeasy-sdks/bluesky/funcs/feedSearch.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await feedSearch(bluesky, {
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
  useFeedSearch,
  useFeedSearchSuspense,
  // Query hooks suitable for building infinite scrolling or "load more" UIs.
  useFeedSearchInfinite,
  useFeedSearchInfiniteSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchFeedSearch,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateFeedSearch,
  invalidateAllFeedSearch,
} from "@speakeasy-sdks/bluesky/react-query/feedSearch.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AppBskyFeedSearchPostsRequest](../../models/operations/appbskyfeedsearchpostsrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AppBskyFeedSearchPostsResponse](../../models/operations/appbskyfeedsearchpostsresponse.md)\>**

### Errors

| Error Type                                                 | Status Code                                                | Content Type                                               |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| errors.BadRequestAppBskyFeedSearchPostsResponseBodyError   | 400                                                        | application/json                                           |
| errors.UnauthorizedAppBskyFeedSearchPostsResponseBodyError | 401                                                        | application/json                                           |
| errors.NotFoundError                                       | 404                                                        | application/json                                           |
| errors.UnauthorizedError                                   | 403, 407                                                   | application/json                                           |
| errors.TimeoutError                                        | 408                                                        | application/json                                           |
| errors.RateLimitedError                                    | 429                                                        | application/json                                           |
| errors.BadRequestError                                     | 413, 414, 415, 422, 431                                    | application/json                                           |
| errors.TimeoutError                                        | 504                                                        | application/json                                           |
| errors.NotFoundError                                       | 501, 505                                                   | application/json                                           |
| errors.InternalServerError                                 | 500, 502, 503, 506, 507, 508                               | application/json                                           |
| errors.BadRequestError                                     | 510                                                        | application/json                                           |
| errors.UnauthorizedError                                   | 511                                                        | application/json                                           |
| errors.APIError                                            | 4XX, 5XX                                                   | \*/\*                                                      |