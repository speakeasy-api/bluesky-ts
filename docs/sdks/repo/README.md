# Repo
(*repo*)

## Overview

### Available Operations

* [putRecord](#putrecord) - *This endpoint is part of the atproto PDS repository management APIs. Requests usually require authentication (unlike the `com.atproto.sync.*` endpoints), and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Write a repository record, creating or updating it as needed. Requires auth, implemented by PDS.

## putRecord

*This endpoint is part of the atproto PDS repository management APIs. Requests usually require authentication (unlike the `com.atproto.sync.*` endpoints), and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Write a repository record, creating or updating it as needed. Requires auth, implemented by PDS.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="com.atproto.repo.putRecord" method="post" path="/xrpc/com.atproto.repo.putRecord" -->
```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.repo.putRecord({
    repo: "<value>",
    collection: "<id>",
    rkey: "<value>",
    record: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlueskyCore } from "@speakeasy-sdks/bluesky/core.js";
import { repoPutRecord } from "@speakeasy-sdks/bluesky/funcs/repoPutRecord.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await repoPutRecord(bluesky, {
    repo: "<value>",
    collection: "<id>",
    rkey: "<value>",
    record: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("repoPutRecord failed:", res.error);
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
  useRepoPutRecordMutation
} from "@speakeasy-sdks/bluesky/react-query/repoPutRecord.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ComAtprotoRepoPutRecordRequest](../../models/operations/comatprotorepoputrecordrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ComAtprotoRepoPutRecordResponse](../../models/operations/comatprotorepoputrecordresponse.md)\>**

### Errors

| Error Type                                     | Status Code                                    | Content Type                                   |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| errors.ComAtprotoRepoPutRecordBadRequestError  | 400                                            | application/json                               |
| errors.ComAtprotoRepoPutRecordAuthMissingError | 401                                            | application/json                               |
| errors.NotFoundError                           | 404                                            | application/json                               |
| errors.UnauthorizedError                       | 403, 407                                       | application/json                               |
| errors.TimeoutError                            | 408                                            | application/json                               |
| errors.RateLimitedError                        | 429                                            | application/json                               |
| errors.BadRequestError                         | 413, 414, 415, 422, 431                        | application/json                               |
| errors.TimeoutError                            | 504                                            | application/json                               |
| errors.NotFoundError                           | 501, 505                                       | application/json                               |
| errors.InternalServerError                     | 500, 502, 503, 506, 507, 508                   | application/json                               |
| errors.BadRequestError                         | 510                                            | application/json                               |
| errors.UnauthorizedError                       | 511                                            | application/json                               |
| errors.APIError                                | 4XX, 5XX                                       | \*/\*                                          |