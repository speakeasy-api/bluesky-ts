# AtprotoSyncs
(*atprotoSyncs*)

## Overview

### Available Operations

* [getRecord](#getrecord) - This endpoint is part of the atproto repository synchronization APIs. Requests usually do not require authentication, and can be made to PDS intances or Relay instances.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get data blocks needed to prove the existence or non-existence of record in the current version of repo. Does not require auth.

## getRecord

This endpoint is part of the atproto repository synchronization APIs. Requests usually do not require authentication, and can be made to PDS intances or Relay instances.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Get data blocks needed to prove the existence or non-existence of record in the current version of repo. Does not require auth.

### Example Usage

```typescript
import { Bluesky } from "@speakeasy-api/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  await bluesky.atprotoSyncs.getRecord({
    did: "<id>",
    collection: "<id>",
    rkey: "<value>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlueskyCore } from "@speakeasy-api/bluesky/core.js";
import { atprotoSyncsGetRecord } from "@speakeasy-api/bluesky/funcs/atprotoSyncsGetRecord.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await atprotoSyncsGetRecord(bluesky, {
    did: "<id>",
    collection: "<id>",
    rkey: "<value>",
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
  // Query hooks for fetching data.
  useAtprotoSyncsGetRecord,
  useAtprotoSyncsGetRecordSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchAtprotoSyncsGetRecord,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateAtprotoSyncsGetRecord,
  invalidateAllAtprotoSyncsGetRecord,
} from "@speakeasy-api/bluesky/react-query/atprotoSyncsGetRecord.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ComAtprotoSyncGetRecordRequest](../../models/operations/comatprotosyncgetrecordrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                                             | Status Code                                            | Content Type                                           |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| errors.ComAtprotoSyncGetRecordResponseBody             | 400                                                    | application/json                                       |
| errors.ComAtprotoSyncGetRecordAtprotoSyncsResponseBody | 401                                                    | application/json                                       |
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