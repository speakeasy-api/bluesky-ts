# OzoneServer
(*ozoneServer*)

## Overview

### Available Operations

* [getConfig](#getconfig) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get details about ozone's server configuration.

## getConfig

*This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get details about ozone's server configuration.

### Example Usage

```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.ozoneServer.getConfig();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlueskyCore } from "@speakeasy-sdks/bluesky/core.js";
import { ozoneServerGetConfig } from "@speakeasy-sdks/bluesky/funcs/ozoneServerGetConfig.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await ozoneServerGetConfig(bluesky);

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
  useOzoneServerGetConfig,
  useOzoneServerGetConfigSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchOzoneServerGetConfig,
  
  // Utility to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateAllOzoneServerGetConfig,
} from "@speakeasy-sdks/bluesky/react-query/ozoneServerGetConfig.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ToolsOzoneServerGetConfigResponseBody](../../models/operations/toolsozoneservergetconfigresponsebody.md)\>**

### Errors

| Error Type                                                    | Status Code                                                   | Content Type                                                  |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| errors.BadRequestToolsOzoneServerGetConfigResponseBodyError   | 400                                                           | application/json                                              |
| errors.UnauthorizedToolsOzoneServerGetConfigResponseBodyError | 401                                                           | application/json                                              |
| errors.NotFoundError                                          | 404                                                           | application/json                                              |
| errors.UnauthorizedError                                      | 403, 407                                                      | application/json                                              |
| errors.TimeoutError                                           | 408                                                           | application/json                                              |
| errors.RateLimitedError                                       | 429                                                           | application/json                                              |
| errors.BadRequestError                                        | 413, 414, 415, 422, 431                                       | application/json                                              |
| errors.TimeoutError                                           | 504                                                           | application/json                                              |
| errors.NotFoundError                                          | 501, 505                                                      | application/json                                              |
| errors.InternalServerError                                    | 500, 502, 503, 506, 507, 508                                  | application/json                                              |
| errors.BadRequestError                                        | 510                                                           | application/json                                              |
| errors.UnauthorizedError                                      | 511                                                           | application/json                                              |
| errors.APIError                                               | 4XX, 5XX                                                      | \*/\*                                                         |