# OzoneSignatures
(*ozoneSignatures*)

## Overview

### Available Operations

* [findRelatedAccounts](#findrelatedaccounts) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get accounts that share some matching threat signatures with the root account.

## findRelatedAccounts

*This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get accounts that share some matching threat signatures with the root account.

### Example Usage

```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.ozoneSignatures.findRelatedAccounts({
    did: "<id>",
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
import { ozoneSignaturesFindRelatedAccounts } from "@speakeasy-sdks/bluesky/funcs/ozoneSignaturesFindRelatedAccounts.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await ozoneSignaturesFindRelatedAccounts(bluesky, {
    did: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("ozoneSignaturesFindRelatedAccounts failed:", res.error);
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
  useOzoneSignaturesFindRelatedAccounts,
  useOzoneSignaturesFindRelatedAccountsSuspense,
  // Query hooks suitable for building infinite scrolling or "load more" UIs.
  useOzoneSignaturesFindRelatedAccountsInfinite,
  useOzoneSignaturesFindRelatedAccountsInfiniteSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchOzoneSignaturesFindRelatedAccounts,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateOzoneSignaturesFindRelatedAccounts,
  invalidateAllOzoneSignaturesFindRelatedAccounts,
} from "@speakeasy-sdks/bluesky/react-query/ozoneSignaturesFindRelatedAccounts.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ToolsOzoneSignatureFindRelatedAccountsRequest](../../models/operations/toolsozonesignaturefindrelatedaccountsrequest.md)                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ToolsOzoneSignatureFindRelatedAccountsResponse](../../models/operations/toolsozonesignaturefindrelatedaccountsresponse.md)\>**

### Errors

| Error Type                                                    | Status Code                                                   | Content Type                                                  |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| errors.ToolsOzoneSignatureFindRelatedAccountsBadRequestError  | 400                                                           | application/json                                              |
| errors.ToolsOzoneSignatureFindRelatedAccountsAuthMissingError | 401                                                           | application/json                                              |
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