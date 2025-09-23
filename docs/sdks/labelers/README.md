# Labelers
(*labelers*)

## Overview

### Available Operations

* [getServices](#getservices) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get information about a list of labeler services.

## getServices

*This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get information about a list of labeler services.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="app.bsky.labeler.getServices" method="get" path="/xrpc/app.bsky.labeler.getServices" -->
```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.labelers.getServices({
    dids: [
      "<id 1>",
      "<id 2>",
      "<id 3>",
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
import { labelersGetServices } from "@speakeasy-sdks/bluesky/funcs/labelersGetServices.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await labelersGetServices(bluesky, {
    dids: [
      "<id 1>",
      "<id 2>",
      "<id 3>",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("labelersGetServices failed:", res.error);
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
  useLabelersGetServices,
  useLabelersGetServicesSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchLabelersGetServices,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateLabelersGetServices,
  invalidateAllLabelersGetServices,
} from "@speakeasy-sdks/bluesky/react-query/labelersGetServices.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AppBskyLabelerGetServicesRequest](../../models/operations/appbskylabelergetservicesrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AppBskyLabelerGetServicesResponse](../../models/operations/appbskylabelergetservicesresponse.md)\>**

### Errors

| Error Type                                       | Status Code                                      | Content Type                                     |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| errors.AppBskyLabelerGetServicesBadRequestError  | 400                                              | application/json                                 |
| errors.AppBskyLabelerGetServicesAuthMissingError | 401                                              | application/json                                 |
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