# Identity
(*identity*)

## Overview

### Available Operations

* [getRecommendedDidCredentials](#getrecommendeddidcredentials) - *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Describe the credentials that should be included in the DID doc of an account that is migrating to this service.
* [submitPlcOperation](#submitplcoperation) - *To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Validates a PLC operation to ensure that it doesn't violate a service's constraints or get the identity into a bad state, then submits it to the PLC registry

## getRecommendedDidCredentials

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Describe the credentials that should be included in the DID doc of an account that is migrating to this service.

### Example Usage

```typescript
import { Bluesky } from "@speakeasy-api/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.identity.getRecommendedDidCredentials();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlueskyCore } from "@speakeasy-api/bluesky/core.js";
import { identityGetRecommendedDidCredentials } from "@speakeasy-api/bluesky/funcs/identityGetRecommendedDidCredentials.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await identityGetRecommendedDidCredentials(bluesky);

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
  useIdentityGetRecommendedDidCredentials,
  useIdentityGetRecommendedDidCredentialsSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchIdentityGetRecommendedDidCredentials,
  
  // Utility to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateAllIdentityGetRecommendedDidCredentials,
} from "@speakeasy-api/bluesky/react-query/identityGetRecommendedDidCredentials.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ComAtprotoIdentityGetRecommendedDidCredentialsResponseBody](../../models/operations/comatprotoidentitygetrecommendeddidcredentialsresponsebody.md)\>**

### Errors

| Error Type                                                                | Status Code                                                               | Content Type                                                              |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| errors.ComAtprotoIdentityGetRecommendedDidCredentialsResponseBody         | 400                                                                       | application/json                                                          |
| errors.ComAtprotoIdentityGetRecommendedDidCredentialsIdentityResponseBody | 401                                                                       | application/json                                                          |
| errors.Unauthorized                                                       | 403, 407, 511                                                             | application/json                                                          |
| errors.NotFound                                                           | 404, 501, 505                                                             | application/json                                                          |
| errors.Timeout                                                            | 408, 504                                                                  | application/json                                                          |
| errors.BadRequest                                                         | 413, 414, 415, 422, 431, 510                                              | application/json                                                          |
| errors.RateLimited                                                        | 429                                                                       | application/json                                                          |
| errors.InternalServerError                                                | 500, 502, 503, 506, 507, 508                                              | application/json                                                          |
| errors.APIError                                                           | 4XX, 5XX                                                                  | \*/\*                                                                     |

## submitPlcOperation

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Validates a PLC operation to ensure that it doesn't violate a service's constraints or get the identity into a bad state, then submits it to the PLC registry

### Example Usage

```typescript
import { Bluesky } from "@speakeasy-api/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  await bluesky.identity.submitPlcOperation({
    operation: "<value>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlueskyCore } from "@speakeasy-api/bluesky/core.js";
import { identitySubmitPlcOperation } from "@speakeasy-api/bluesky/funcs/identitySubmitPlcOperation.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await identitySubmitPlcOperation(bluesky, {
    operation: "<value>",
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
  useIdentitySubmitPlcOperationMutation
} from "@speakeasy-api/bluesky/react-query/identitySubmitPlcOperation.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ComAtprotoIdentitySubmitPlcOperationRequestBody](../../models/operations/comatprotoidentitysubmitplcoperationrequestbody.md)                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                                                      | Status Code                                                     | Content Type                                                    |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| errors.ComAtprotoIdentitySubmitPlcOperationResponseBody         | 400                                                             | application/json                                                |
| errors.ComAtprotoIdentitySubmitPlcOperationIdentityResponseBody | 401                                                             | application/json                                                |
| errors.Unauthorized                                             | 403, 407, 511                                                   | application/json                                                |
| errors.NotFound                                                 | 404, 501, 505                                                   | application/json                                                |
| errors.Timeout                                                  | 408, 504                                                        | application/json                                                |
| errors.BadRequest                                               | 413, 414, 415, 422, 431, 510                                    | application/json                                                |
| errors.RateLimited                                              | 429                                                             | application/json                                                |
| errors.InternalServerError                                      | 500, 502, 503, 506, 507, 508                                    | application/json                                                |
| errors.APIError                                                 | 4XX, 5XX                                                        | \*/\*                                                           |