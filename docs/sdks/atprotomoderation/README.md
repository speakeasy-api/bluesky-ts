# AtprotoModeration
(*atprotoModeration*)

## Overview

### Available Operations

* [createReport](#createreport) - *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Submit a moderation report regarding an atproto account or record. Implemented by moderation services (with PDS proxying), and requires auth.

## createReport

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Submit a moderation report regarding an atproto account or record. Implemented by moderation services (with PDS proxying), and requires auth.

### Example Usage

```typescript
import { Bluesky } from "@speakeasy-api/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.atprotoModeration.createReport({
    reasonType: "<value>",
    subject: {
      did: "<id>",
    },
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
import { atprotoModerationCreateReport } from "@speakeasy-api/bluesky/funcs/atprotoModerationCreateReport.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await atprotoModerationCreateReport(bluesky, {
    reasonType: "<value>",
    subject: {
      did: "<id>",
    },
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
  // Mutation hook for triggering the API call.
  useAtprotoModerationCreateReportMutation
} from "@speakeasy-api/bluesky/react-query/atprotoModerationCreateReport.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ComAtprotoModerationCreateReportRequestBody](../../models/operations/comatprotomoderationcreatereportrequestbody.md)                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ComAtprotoModerationCreateReportResponseBody](../../models/operations/comatprotomoderationcreatereportresponsebody.md)\>**

### Errors

| Error Type                                                           | Status Code                                                          | Content Type                                                         |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| errors.ComAtprotoModerationCreateReportResponseBody                  | 400                                                                  | application/json                                                     |
| errors.ComAtprotoModerationCreateReportAtprotoModerationResponseBody | 401                                                                  | application/json                                                     |
| errors.NotFound                                                      | 404                                                                  | application/json                                                     |
| errors.Unauthorized                                                  | 403, 407                                                             | application/json                                                     |
| errors.Timeout                                                       | 408                                                                  | application/json                                                     |
| errors.RateLimited                                                   | 429                                                                  | application/json                                                     |
| errors.BadRequest                                                    | 413, 414, 415, 422, 431                                              | application/json                                                     |
| errors.Timeout                                                       | 504                                                                  | application/json                                                     |
| errors.NotFound                                                      | 501, 505                                                             | application/json                                                     |
| errors.InternalServerError                                           | 500, 502, 503, 506, 507, 508                                         | application/json                                                     |
| errors.BadRequest                                                    | 510                                                                  | application/json                                                     |
| errors.Unauthorized                                                  | 511                                                                  | application/json                                                     |
| errors.APIError                                                      | 4XX, 5XX                                                             | \*/\*                                                                |