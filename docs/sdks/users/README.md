# Users
(*users*)

## Overview

### Available Operations

* [getFollowers](#getfollowers) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Enumerates accounts which follow a specified account (actor).
* [getSuggestedFollows](#getsuggestedfollows) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Enumerates follows similar to a given account (actor). Expected use is to recommend additional accounts immediately after following one account.
* [unmute](#unmute) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Unmutes the specified account. Requires auth.

## getFollowers

*This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Enumerates accounts which follow a specified account (actor).

### Example Usage

```typescript
import { Bluesky } from "@speakeasy-api/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.users.getFollowers({
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
import { usersGetFollowers } from "@speakeasy-api/bluesky/funcs/usersGetFollowers.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await usersGetFollowers(bluesky, {
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
  useFollowers,
  useFollowersSuspense,
  // Query hooks suitable for building infinite scrolling or "load more" UIs.
  useFollowersInfinite,
  useFollowersInfiniteSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchFollowers,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateFollowers,
  invalidateAllFollowers,
} from "@speakeasy-api/bluesky/react-query/usersGetFollowers.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AppBskyGraphGetFollowersRequest](../../models/operations/appbskygraphgetfollowersrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AppBskyGraphGetFollowersResponse](../../models/operations/appbskygraphgetfollowersresponse.md)\>**

### Errors

| Error Type                                       | Status Code                                      | Content Type                                     |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| errors.AppBskyGraphGetFollowersResponseBody      | 400                                              | application/json                                 |
| errors.AppBskyGraphGetFollowersUsersResponseBody | 401                                              | application/json                                 |
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

## getSuggestedFollows

*This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Enumerates follows similar to a given account (actor). Expected use is to recommend additional accounts immediately after following one account.

### Example Usage

```typescript
import { Bluesky } from "@speakeasy-api/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.users.getSuggestedFollows({
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
import { usersGetSuggestedFollows } from "@speakeasy-api/bluesky/funcs/usersGetSuggestedFollows.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await usersGetSuggestedFollows(bluesky, {
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
  useUsersGetSuggestedFollows,
  useUsersGetSuggestedFollowsSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchUsersGetSuggestedFollows,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateUsersGetSuggestedFollows,
  invalidateAllUsersGetSuggestedFollows,
} from "@speakeasy-api/bluesky/react-query/usersGetSuggestedFollows.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AppBskyGraphGetSuggestedFollowsByActorRequest](../../models/operations/appbskygraphgetsuggestedfollowsbyactorrequest.md)                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AppBskyGraphGetSuggestedFollowsByActorResponseBody](../../models/operations/appbskygraphgetsuggestedfollowsbyactorresponsebody.md)\>**

### Errors

| Error Type                                                     | Status Code                                                    | Content Type                                                   |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| errors.AppBskyGraphGetSuggestedFollowsByActorResponseBody      | 400                                                            | application/json                                               |
| errors.AppBskyGraphGetSuggestedFollowsByActorUsersResponseBody | 401                                                            | application/json                                               |
| errors.NotFound                                                | 404                                                            | application/json                                               |
| errors.Unauthorized                                            | 403, 407                                                       | application/json                                               |
| errors.Timeout                                                 | 408                                                            | application/json                                               |
| errors.RateLimited                                             | 429                                                            | application/json                                               |
| errors.BadRequest                                              | 413, 414, 415, 422, 431                                        | application/json                                               |
| errors.Timeout                                                 | 504                                                            | application/json                                               |
| errors.NotFound                                                | 501, 505                                                       | application/json                                               |
| errors.InternalServerError                                     | 500, 502, 503, 506, 507, 508                                   | application/json                                               |
| errors.BadRequest                                              | 510                                                            | application/json                                               |
| errors.Unauthorized                                            | 511                                                            | application/json                                               |
| errors.APIError                                                | 4XX, 5XX                                                       | \*/\*                                                          |

## unmute

*This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Unmutes the specified account. Requires auth.

### Example Usage

```typescript
import { Bluesky } from "@speakeasy-api/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  await bluesky.users.unmute({
    actor: "<value>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlueskyCore } from "@speakeasy-api/bluesky/core.js";
import { usersUnmute } from "@speakeasy-api/bluesky/funcs/usersUnmute.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await usersUnmute(bluesky, {
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
  useUsersUnmuteMutation
} from "@speakeasy-api/bluesky/react-query/usersUnmute.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AppBskyGraphUnmuteActorRequestBody](../../models/operations/appbskygraphunmuteactorrequestbody.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                                      | Status Code                                     | Content Type                                    |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| errors.AppBskyGraphUnmuteActorResponseBody      | 400                                             | application/json                                |
| errors.AppBskyGraphUnmuteActorUsersResponseBody | 401                                             | application/json                                |
| errors.NotFound                                 | 404                                             | application/json                                |
| errors.Unauthorized                             | 403, 407                                        | application/json                                |
| errors.Timeout                                  | 408                                             | application/json                                |
| errors.RateLimited                              | 429                                             | application/json                                |
| errors.BadRequest                               | 413, 414, 415, 422, 431                         | application/json                                |
| errors.Timeout                                  | 504                                             | application/json                                |
| errors.NotFound                                 | 501, 505                                        | application/json                                |
| errors.InternalServerError                      | 500, 502, 503, 506, 507, 508                    | application/json                                |
| errors.BadRequest                               | 510                                             | application/json                                |
| errors.Unauthorized                             | 511                                             | application/json                                |
| errors.APIError                                 | 4XX, 5XX                                        | \*/\*                                           |