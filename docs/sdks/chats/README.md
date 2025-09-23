# Chats
(*chats*)

## Overview

### Available Operations

* [getConvo](#getconvo) - *This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
* [getMessageContext](#getmessagecontext) - *This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

## getConvo

*This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

### Example Usage

<!-- UsageSnippet language="typescript" operationID="chat.bsky.convo.getConvo" method="get" path="/xrpc/chat.bsky.convo.getConvo" -->
```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.chats.getConvo({
    convoId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlueskyCore } from "@speakeasy-sdks/bluesky/core.js";
import { chatsGetConvo } from "@speakeasy-sdks/bluesky/funcs/chatsGetConvo.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await chatsGetConvo(bluesky, {
    convoId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("chatsGetConvo failed:", res.error);
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
  useChatsGetConvo,
  useChatsGetConvoSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchChatsGetConvo,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateChatsGetConvo,
  invalidateAllChatsGetConvo,
} from "@speakeasy-sdks/bluesky/react-query/chatsGetConvo.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ChatBskyConvoGetConvoRequest](../../models/operations/chatbskyconvogetconvorequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ChatBskyConvoGetConvoResponse](../../models/operations/chatbskyconvogetconvoresponse.md)\>**

### Errors

| Error Type                                   | Status Code                                  | Content Type                                 |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| errors.ChatBskyConvoGetConvoBadRequestError  | 400                                          | application/json                             |
| errors.ChatBskyConvoGetConvoAuthMissingError | 401                                          | application/json                             |
| errors.NotFoundError                         | 404                                          | application/json                             |
| errors.UnauthorizedError                     | 403, 407                                     | application/json                             |
| errors.TimeoutError                          | 408                                          | application/json                             |
| errors.RateLimitedError                      | 429                                          | application/json                             |
| errors.BadRequestError                       | 413, 414, 415, 422, 431                      | application/json                             |
| errors.TimeoutError                          | 504                                          | application/json                             |
| errors.NotFoundError                         | 501, 505                                     | application/json                             |
| errors.InternalServerError                   | 500, 502, 503, 506, 507, 508                 | application/json                             |
| errors.BadRequestError                       | 510                                          | application/json                             |
| errors.UnauthorizedError                     | 511                                          | application/json                             |
| errors.APIError                              | 4XX, 5XX                                     | \*/\*                                        |

## getMessageContext

*This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

### Example Usage

<!-- UsageSnippet language="typescript" operationID="chat.bsky.moderation.getMessageContext" method="get" path="/xrpc/chat.bsky.moderation.getMessageContext" -->
```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.chats.getMessageContext({
    messageId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlueskyCore } from "@speakeasy-sdks/bluesky/core.js";
import { chatsGetMessageContext } from "@speakeasy-sdks/bluesky/funcs/chatsGetMessageContext.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await chatsGetMessageContext(bluesky, {
    messageId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("chatsGetMessageContext failed:", res.error);
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
  useChatsGetMessageContext,
  useChatsGetMessageContextSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchChatsGetMessageContext,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateChatsGetMessageContext,
  invalidateAllChatsGetMessageContext,
} from "@speakeasy-sdks/bluesky/react-query/chatsGetMessageContext.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ChatBskyModerationGetMessageContextRequest](../../models/operations/chatbskymoderationgetmessagecontextrequest.md)                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ChatBskyModerationGetMessageContextResponse](../../models/operations/chatbskymoderationgetmessagecontextresponse.md)\>**

### Errors

| Error Type                                                 | Status Code                                                | Content Type                                               |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| errors.ChatBskyModerationGetMessageContextBadRequestError  | 400                                                        | application/json                                           |
| errors.ChatBskyModerationGetMessageContextAuthMissingError | 401                                                        | application/json                                           |
| errors.NotFoundError                                       | 404                                                        | application/json                                           |
| errors.UnauthorizedError                                   | 403, 407                                                   | application/json                                           |
| errors.TimeoutError                                        | 408                                                        | application/json                                           |
| errors.RateLimitedError                                    | 429                                                        | application/json                                           |
| errors.BadRequestError                                     | 413, 414, 415, 422, 431                                    | application/json                                           |
| errors.TimeoutError                                        | 504                                                        | application/json                                           |
| errors.NotFoundError                                       | 501, 505                                                   | application/json                                           |
| errors.InternalServerError                                 | 500, 502, 503, 506, 507, 508                               | application/json                                           |
| errors.BadRequestError                                     | 510                                                        | application/json                                           |
| errors.UnauthorizedError                                   | 511                                                        | application/json                                           |
| errors.APIError                                            | 4XX, 5XX                                                   | \*/\*                                                      |