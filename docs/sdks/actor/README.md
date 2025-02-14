# Actor
(*actor*)

## Overview

### Available Operations

* [getSuggestions](#getsuggestions) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a list of suggested actors. Expected use is discovery of accounts to follow during new account onboarding.
* [searchTypeahead](#searchtypeahead) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Find actor suggestions for a prefix search term. Expected use is for auto-completion during text field entry. Does not require auth.

## getSuggestions

*This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get a list of suggested actors. Expected use is discovery of accounts to follow during new account onboarding.

### Example Usage

```typescript
import { Bluesky } from "@speakeasy-api/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.actor.getSuggestions({});

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
import { actorGetSuggestions } from "@speakeasy-api/bluesky/funcs/actorGetSuggestions.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await actorGetSuggestions(bluesky, {});

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
  useActorGetSuggestions,
  useActorGetSuggestionsSuspense,
  // Query hooks suitable for building infinite scrolling or "load more" UIs.
  useActorGetSuggestionsInfinite,
  useActorGetSuggestionsInfiniteSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchActorGetSuggestions,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateActorGetSuggestions,
  invalidateAllActorGetSuggestions,
} from "@speakeasy-api/bluesky/react-query/actorGetSuggestions.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AppBskyActorGetSuggestionsRequest](../../models/operations/appbskyactorgetsuggestionsrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AppBskyActorGetSuggestionsResponse](../../models/operations/appbskyactorgetsuggestionsresponse.md)\>**

### Errors

| Error Type                                         | Status Code                                        | Content Type                                       |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| errors.AppBskyActorGetSuggestionsResponseBody      | 400                                                | application/json                                   |
| errors.AppBskyActorGetSuggestionsActorResponseBody | 401                                                | application/json                                   |
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

## searchTypeahead

*This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Find actor suggestions for a prefix search term. Expected use is for auto-completion during text field entry. Does not require auth.

### Example Usage

```typescript
import { Bluesky } from "@speakeasy-api/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.actor.searchTypeahead({});

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlueskyCore } from "@speakeasy-api/bluesky/core.js";
import { actorSearchTypeahead } from "@speakeasy-api/bluesky/funcs/actorSearchTypeahead.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await actorSearchTypeahead(bluesky, {});

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
  useActorSearchTypeahead,
  useActorSearchTypeaheadSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchActorSearchTypeahead,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateActorSearchTypeahead,
  invalidateAllActorSearchTypeahead,
} from "@speakeasy-api/bluesky/react-query/actorSearchTypeahead.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AppBskyActorSearchActorsTypeaheadRequest](../../models/operations/appbskyactorsearchactorstypeaheadrequest.md)                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AppBskyActorSearchActorsTypeaheadResponseBody](../../models/operations/appbskyactorsearchactorstypeaheadresponsebody.md)\>**

### Errors

| Error Type                                                | Status Code                                               | Content Type                                              |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| errors.AppBskyActorSearchActorsTypeaheadResponseBody      | 400                                                       | application/json                                          |
| errors.AppBskyActorSearchActorsTypeaheadActorResponseBody | 401                                                       | application/json                                          |
| errors.NotFound                                           | 404                                                       | application/json                                          |
| errors.Unauthorized                                       | 403, 407                                                  | application/json                                          |
| errors.Timeout                                            | 408                                                       | application/json                                          |
| errors.RateLimited                                        | 429                                                       | application/json                                          |
| errors.BadRequest                                         | 413, 414, 415, 422, 431                                   | application/json                                          |
| errors.Timeout                                            | 504                                                       | application/json                                          |
| errors.NotFound                                           | 501, 505                                                  | application/json                                          |
| errors.InternalServerError                                | 500, 502, 503, 506, 507, 508                              | application/json                                          |
| errors.BadRequest                                         | 510                                                       | application/json                                          |
| errors.Unauthorized                                       | 511                                                       | application/json                                          |
| errors.APIError                                           | 4XX, 5XX                                                  | \*/\*                                                     |