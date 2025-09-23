# ChatConvos
(*chatConvos*)

## Overview

### Available Operations

* [getForMembers](#getformembers) - *This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
* [getMessages](#getmessages) - *This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
* [sendMessage](#sendmessage) - *This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*
* [updateRead](#updateread) - *This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

## getForMembers

*This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

### Example Usage

<!-- UsageSnippet language="typescript" operationID="chat.bsky.convo.getConvoForMembers" method="get" path="/xrpc/chat.bsky.convo.getConvoForMembers" -->
```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.chatConvos.getForMembers({
    members: [
      "<id 1>",
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
import { chatConvosGetForMembers } from "@speakeasy-sdks/bluesky/funcs/chatConvosGetForMembers.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await chatConvosGetForMembers(bluesky, {
    members: [
      "<id 1>",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("chatConvosGetForMembers failed:", res.error);
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
  useChatConvosGetForMembers,
  useChatConvosGetForMembersSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchChatConvosGetForMembers,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateChatConvosGetForMembers,
  invalidateAllChatConvosGetForMembers,
} from "@speakeasy-sdks/bluesky/react-query/chatConvosGetForMembers.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ChatBskyConvoGetConvoForMembersRequest](../../models/operations/chatbskyconvogetconvoformembersrequest.md)                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ChatBskyConvoGetConvoForMembersResponse](../../models/operations/chatbskyconvogetconvoformembersresponse.md)\>**

### Errors

| Error Type                                             | Status Code                                            | Content Type                                           |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| errors.ChatBskyConvoGetConvoForMembersBadRequestError  | 400                                                    | application/json                                       |
| errors.ChatBskyConvoGetConvoForMembersAuthMissingError | 401                                                    | application/json                                       |
| errors.NotFoundError                                   | 404                                                    | application/json                                       |
| errors.UnauthorizedError                               | 403, 407                                               | application/json                                       |
| errors.TimeoutError                                    | 408                                                    | application/json                                       |
| errors.RateLimitedError                                | 429                                                    | application/json                                       |
| errors.BadRequestError                                 | 413, 414, 415, 422, 431                                | application/json                                       |
| errors.TimeoutError                                    | 504                                                    | application/json                                       |
| errors.NotFoundError                                   | 501, 505                                               | application/json                                       |
| errors.InternalServerError                             | 500, 502, 503, 506, 507, 508                           | application/json                                       |
| errors.BadRequestError                                 | 510                                                    | application/json                                       |
| errors.UnauthorizedError                               | 511                                                    | application/json                                       |
| errors.APIError                                        | 4XX, 5XX                                               | \*/\*                                                  |

## getMessages

*This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

### Example Usage

<!-- UsageSnippet language="typescript" operationID="chat.bsky.convo.getMessages" method="get" path="/xrpc/chat.bsky.convo.getMessages" -->
```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.chatConvos.getMessages({
    convoId: "<id>",
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
import { chatConvosGetMessages } from "@speakeasy-sdks/bluesky/funcs/chatConvosGetMessages.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await chatConvosGetMessages(bluesky, {
    convoId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("chatConvosGetMessages failed:", res.error);
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
  useChatConvosGetMessages,
  useChatConvosGetMessagesSuspense,
  // Query hooks suitable for building infinite scrolling or "load more" UIs.
  useChatConvosGetMessagesInfinite,
  useChatConvosGetMessagesInfiniteSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchChatConvosGetMessages,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateChatConvosGetMessages,
  invalidateAllChatConvosGetMessages,
} from "@speakeasy-sdks/bluesky/react-query/chatConvosGetMessages.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ChatBskyConvoGetMessagesRequest](../../models/operations/chatbskyconvogetmessagesrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ChatBskyConvoGetMessagesResponse](../../models/operations/chatbskyconvogetmessagesresponse.md)\>**

### Errors

| Error Type                                      | Status Code                                     | Content Type                                    |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| errors.ChatBskyConvoGetMessagesBadRequestError  | 400                                             | application/json                                |
| errors.ChatBskyConvoGetMessagesAuthMissingError | 401                                             | application/json                                |
| errors.NotFoundError                            | 404                                             | application/json                                |
| errors.UnauthorizedError                        | 403, 407                                        | application/json                                |
| errors.TimeoutError                             | 408                                             | application/json                                |
| errors.RateLimitedError                         | 429                                             | application/json                                |
| errors.BadRequestError                          | 413, 414, 415, 422, 431                         | application/json                                |
| errors.TimeoutError                             | 504                                             | application/json                                |
| errors.NotFoundError                            | 501, 505                                        | application/json                                |
| errors.InternalServerError                      | 500, 502, 503, 506, 507, 508                    | application/json                                |
| errors.BadRequestError                          | 510                                             | application/json                                |
| errors.UnauthorizedError                        | 511                                             | application/json                                |
| errors.APIError                                 | 4XX, 5XX                                        | \*/\*                                           |

## sendMessage

*This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

### Example Usage

<!-- UsageSnippet language="typescript" operationID="chat.bsky.convo.sendMessage" method="post" path="/xrpc/chat.bsky.convo.sendMessage" -->
```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.chatConvos.sendMessage({
    convoId: "<id>",
    message: {
      text: "<value>",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlueskyCore } from "@speakeasy-sdks/bluesky/core.js";
import { chatConvosSendMessage } from "@speakeasy-sdks/bluesky/funcs/chatConvosSendMessage.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await chatConvosSendMessage(bluesky, {
    convoId: "<id>",
    message: {
      text: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("chatConvosSendMessage failed:", res.error);
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
  useChatConvosSendMessageMutation
} from "@speakeasy-sdks/bluesky/react-query/chatConvosSendMessage.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ChatBskyConvoSendMessageRequest](../../models/operations/chatbskyconvosendmessagerequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ChatBskyConvoDefsMessageView](../../models/components/chatbskyconvodefsmessageview.md)\>**

### Errors

| Error Type                                      | Status Code                                     | Content Type                                    |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| errors.ChatBskyConvoSendMessageBadRequestError  | 400                                             | application/json                                |
| errors.ChatBskyConvoSendMessageAuthMissingError | 401                                             | application/json                                |
| errors.NotFoundError                            | 404                                             | application/json                                |
| errors.UnauthorizedError                        | 403, 407                                        | application/json                                |
| errors.TimeoutError                             | 408                                             | application/json                                |
| errors.RateLimitedError                         | 429                                             | application/json                                |
| errors.BadRequestError                          | 413, 414, 415, 422, 431                         | application/json                                |
| errors.TimeoutError                             | 504                                             | application/json                                |
| errors.NotFoundError                            | 501, 505                                        | application/json                                |
| errors.InternalServerError                      | 500, 502, 503, 506, 507, 508                    | application/json                                |
| errors.BadRequestError                          | 510                                             | application/json                                |
| errors.UnauthorizedError                        | 511                                             | application/json                                |
| errors.APIError                                 | 4XX, 5XX                                        | \*/\*                                           |

## updateRead

*This endpoint is part of the Bluesky Chat (DMs) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the single central chat service by setting the appropriate service DID (`did:web:api.bsky.chat`) in the service proxying header.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

### Example Usage

<!-- UsageSnippet language="typescript" operationID="chat.bsky.convo.updateRead" method="post" path="/xrpc/chat.bsky.convo.updateRead" -->
```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.chatConvos.updateRead({
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
import { chatConvosUpdateRead } from "@speakeasy-sdks/bluesky/funcs/chatConvosUpdateRead.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await chatConvosUpdateRead(bluesky, {
    convoId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("chatConvosUpdateRead failed:", res.error);
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
  useChatConvosUpdateReadMutation
} from "@speakeasy-sdks/bluesky/react-query/chatConvosUpdateRead.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ChatBskyConvoUpdateReadRequest](../../models/operations/chatbskyconvoupdatereadrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ChatBskyConvoUpdateReadResponse](../../models/operations/chatbskyconvoupdatereadresponse.md)\>**

### Errors

| Error Type                                     | Status Code                                    | Content Type                                   |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| errors.ChatBskyConvoUpdateReadBadRequestError  | 400                                            | application/json                               |
| errors.ChatBskyConvoUpdateReadAuthMissingError | 401                                            | application/json                               |
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