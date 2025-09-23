# Set
(*set*)

## Overview

### Available Operations

* [delete](#delete) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Delete an entire set. Attempting to delete a set that does not exist will result in an error.
* [query](#query) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Query available sets

## delete

*This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Delete an entire set. Attempting to delete a set that does not exist will result in an error.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="tools.ozone.set.deleteSet" method="post" path="/xrpc/tools.ozone.set.deleteSet" -->
```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.set.delete({
    name: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlueskyCore } from "@speakeasy-sdks/bluesky/core.js";
import { setDelete } from "@speakeasy-sdks/bluesky/funcs/setDelete.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await setDelete(bluesky, {
    name: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("setDelete failed:", res.error);
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
  useSetDeleteMutation
} from "@speakeasy-sdks/bluesky/react-query/setDelete.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ToolsOzoneSetDeleteSetRequest](../../models/operations/toolsozonesetdeletesetrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ToolsOzoneSetDeleteSetResponse](../../models/operations/toolsozonesetdeletesetresponse.md)\>**

### Errors

| Error Type                                    | Status Code                                   | Content Type                                  |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| errors.ToolsOzoneSetDeleteSetBadRequestError  | 400                                           | application/json                              |
| errors.ToolsOzoneSetDeleteSetAuthMissingError | 401                                           | application/json                              |
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

## query

*This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Query available sets

### Example Usage

<!-- UsageSnippet language="typescript" operationID="tools.ozone.set.querySets" method="get" path="/xrpc/tools.ozone.set.querySets" -->
```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.set.query({});

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
import { setQuery } from "@speakeasy-sdks/bluesky/funcs/setQuery.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await setQuery(bluesky, {});
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("setQuery failed:", res.error);
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
  useSetQuery,
  useSetQuerySuspense,
  // Query hooks suitable for building infinite scrolling or "load more" UIs.
  useSetQueryInfinite,
  useSetQueryInfiniteSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchSetQuery,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateSetQuery,
  invalidateAllSetQuery,
} from "@speakeasy-sdks/bluesky/react-query/setQuery.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ToolsOzoneSetQuerySetsRequest](../../models/operations/toolsozonesetquerysetsrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ToolsOzoneSetQuerySetsResponse](../../models/operations/toolsozonesetquerysetsresponse.md)\>**

### Errors

| Error Type                                    | Status Code                                   | Content Type                                  |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| errors.ToolsOzoneSetQuerySetsBadRequestError  | 400                                           | application/json                              |
| errors.ToolsOzoneSetQuerySetsAuthMissingError | 401                                           | application/json                              |
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