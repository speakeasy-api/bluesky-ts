# ChatModeration
(*chatModeration*)

## Overview

### Available Operations

* [getActorMetadata](#getactormetadata) - *This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
* [updateActorAccess](#updateactoraccess) - *This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

## getActorMetadata

*This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

### Example Usage

```typescript
import { Bluesky } from "bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.chatModeration.getActorMetadata({
    actor: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlueskyCore } from "bluesky/core.js";
import { chatModerationGetActorMetadata } from "bluesky/funcs/chatModerationGetActorMetadata.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await chatModerationGetActorMetadata(bluesky, {
    actor: "<id>",
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
  useChatModerationGetActorMetadata,
  useChatModerationGetActorMetadataSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchChatModerationGetActorMetadata,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateChatModerationGetActorMetadata,
  invalidateAllChatModerationGetActorMetadata,
} from "bluesky/react-query/chatModerationGetActorMetadata.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ChatBskyModerationGetActorMetadataRequest](../../models/operations/chatbskymoderationgetactormetadatarequest.md)                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ChatBskyModerationGetActorMetadataResponseBody](../../models/operations/chatbskymoderationgetactormetadataresponsebody.md)\>**

### Errors

| Error Type                                                          | Status Code                                                         | Content Type                                                        |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| errors.ChatBskyModerationGetActorMetadataResponseBody               | 400                                                                 | application/json                                                    |
| errors.ChatBskyModerationGetActorMetadataChatModerationResponseBody | 401                                                                 | application/json                                                    |
| errors.Unauthorized                                                 | 403, 407, 511                                                       | application/json                                                    |
| errors.NotFound                                                     | 404, 501, 505                                                       | application/json                                                    |
| errors.Timeout                                                      | 408, 504                                                            | application/json                                                    |
| errors.BadRequest                                                   | 413, 414, 415, 422, 431, 510                                        | application/json                                                    |
| errors.RateLimited                                                  | 429                                                                 | application/json                                                    |
| errors.InternalServerError                                          | 500, 502, 503, 506, 507, 508                                        | application/json                                                    |
| errors.APIError                                                     | 4XX, 5XX                                                            | \*/\*                                                               |

## updateActorAccess

*This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

### Example Usage

```typescript
import { Bluesky } from "bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  await bluesky.chatModeration.updateActorAccess({
    actor: "<id>",
    allowAccess: true,
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlueskyCore } from "bluesky/core.js";
import { chatModerationUpdateActorAccess } from "bluesky/funcs/chatModerationUpdateActorAccess.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await chatModerationUpdateActorAccess(bluesky, {
    actor: "<id>",
    allowAccess: true,
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
  useChatModerationUpdateActorAccessMutation
} from "bluesky/react-query/chatModerationUpdateActorAccess.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ChatBskyModerationUpdateActorAccessRequestBody](../../models/operations/chatbskymoderationupdateactoraccessrequestbody.md)                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                                                           | Status Code                                                          | Content Type                                                         |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| errors.ChatBskyModerationUpdateActorAccessResponseBody               | 400                                                                  | application/json                                                     |
| errors.ChatBskyModerationUpdateActorAccessChatModerationResponseBody | 401                                                                  | application/json                                                     |
| errors.Unauthorized                                                  | 403, 407, 511                                                        | application/json                                                     |
| errors.NotFound                                                      | 404, 501, 505                                                        | application/json                                                     |
| errors.Timeout                                                       | 408, 504                                                             | application/json                                                     |
| errors.BadRequest                                                    | 413, 414, 415, 422, 431, 510                                         | application/json                                                     |
| errors.RateLimited                                                   | 429                                                                  | application/json                                                     |
| errors.InternalServerError                                           | 500, 502, 503, 506, 507, 508                                         | application/json                                                     |
| errors.APIError                                                      | 4XX, 5XX                                                             | \*/\*                                                                |