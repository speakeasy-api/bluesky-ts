# Notifications
(*notifications*)

## Overview

### Available Operations

* [getUnreadCount](#getunreadcount) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Count the number of unread notifications for the requesting account. Requires auth.
* [putPreferences](#putpreferences) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Set notification-related preferences for an account. Requires auth.
* [registerPush](#registerpush) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Register to receive push notifications, via a specified service, for the requesting account. Requires auth.
* [updateSeen](#updateseen) - *This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Notify server that the requesting account has seen notifications. Requires auth.

## getUnreadCount

*This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Count the number of unread notifications for the requesting account. Requires auth.

### Example Usage

```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.notifications.getUnreadCount();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlueskyCore } from "@speakeasy-sdks/bluesky/core.js";
import { notificationsGetUnreadCount } from "@speakeasy-sdks/bluesky/funcs/notificationsGetUnreadCount.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await notificationsGetUnreadCount(bluesky);

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
  useNotificationsGetUnreadCount,
  useNotificationsGetUnreadCountSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchNotificationsGetUnreadCount,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateNotificationsGetUnreadCount,
  invalidateAllNotificationsGetUnreadCount,
} from "@speakeasy-sdks/bluesky/react-query/notificationsGetUnreadCount.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AppBskyNotificationGetUnreadCountRequest](../../models/operations/appbskynotificationgetunreadcountrequest.md)                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AppBskyNotificationGetUnreadCountResponseBody](../../models/operations/appbskynotificationgetunreadcountresponsebody.md)\>**

### Errors

| Error Type                                                            | Status Code                                                           | Content Type                                                          |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| errors.BadRequestAppBskyNotificationGetUnreadCountResponseBodyError   | 400                                                                   | application/json                                                      |
| errors.UnauthorizedAppBskyNotificationGetUnreadCountResponseBodyError | 401                                                                   | application/json                                                      |
| errors.NotFoundError                                                  | 404                                                                   | application/json                                                      |
| errors.UnauthorizedError                                              | 403, 407                                                              | application/json                                                      |
| errors.TimeoutError                                                   | 408                                                                   | application/json                                                      |
| errors.RateLimitedError                                               | 429                                                                   | application/json                                                      |
| errors.BadRequestError                                                | 413, 414, 415, 422, 431                                               | application/json                                                      |
| errors.TimeoutError                                                   | 504                                                                   | application/json                                                      |
| errors.NotFoundError                                                  | 501, 505                                                              | application/json                                                      |
| errors.InternalServerError                                            | 500, 502, 503, 506, 507, 508                                          | application/json                                                      |
| errors.BadRequestError                                                | 510                                                                   | application/json                                                      |
| errors.UnauthorizedError                                              | 511                                                                   | application/json                                                      |
| errors.APIError                                                       | 4XX, 5XX                                                              | \*/\*                                                                 |

## putPreferences

*This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Set notification-related preferences for an account. Requires auth.

### Example Usage

```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  await bluesky.notifications.putPreferences({
    priority: false,
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlueskyCore } from "@speakeasy-sdks/bluesky/core.js";
import { notificationsPutPreferences } from "@speakeasy-sdks/bluesky/funcs/notificationsPutPreferences.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await notificationsPutPreferences(bluesky, {
    priority: false,
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
  useNotificationsPutPreferencesMutation
} from "@speakeasy-sdks/bluesky/react-query/notificationsPutPreferences.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AppBskyNotificationPutPreferencesBody](../../models/operations/appbskynotificationputpreferencesbody.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                                                            | Status Code                                                           | Content Type                                                          |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| errors.BadRequestAppBskyNotificationPutPreferencesResponseBodyError   | 400                                                                   | application/json                                                      |
| errors.UnauthorizedAppBskyNotificationPutPreferencesResponseBodyError | 401                                                                   | application/json                                                      |
| errors.NotFoundError                                                  | 404                                                                   | application/json                                                      |
| errors.UnauthorizedError                                              | 403, 407                                                              | application/json                                                      |
| errors.TimeoutError                                                   | 408                                                                   | application/json                                                      |
| errors.RateLimitedError                                               | 429                                                                   | application/json                                                      |
| errors.BadRequestError                                                | 413, 414, 415, 422, 431                                               | application/json                                                      |
| errors.TimeoutError                                                   | 504                                                                   | application/json                                                      |
| errors.NotFoundError                                                  | 501, 505                                                              | application/json                                                      |
| errors.InternalServerError                                            | 500, 502, 503, 506, 507, 508                                          | application/json                                                      |
| errors.BadRequestError                                                | 510                                                                   | application/json                                                      |
| errors.UnauthorizedError                                              | 511                                                                   | application/json                                                      |
| errors.APIError                                                       | 4XX, 5XX                                                              | \*/\*                                                                 |

## registerPush

*This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Register to receive push notifications, via a specified service, for the requesting account. Requires auth.

### Example Usage

```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  await bluesky.notifications.registerPush({
    serviceDid: "<id>",
    token: "<value>",
    platform: "web",
    appId: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlueskyCore } from "@speakeasy-sdks/bluesky/core.js";
import { notificationsRegisterPush } from "@speakeasy-sdks/bluesky/funcs/notificationsRegisterPush.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await notificationsRegisterPush(bluesky, {
    serviceDid: "<id>",
    token: "<value>",
    platform: "web",
    appId: "<id>",
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
  useNotificationsRegisterPushMutation
} from "@speakeasy-sdks/bluesky/react-query/notificationsRegisterPush.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AppBskyNotificationRegisterPushBody](../../models/operations/appbskynotificationregisterpushbody.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                                                          | Status Code                                                         | Content Type                                                        |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| errors.BadRequestAppBskyNotificationRegisterPushResponseBodyError   | 400                                                                 | application/json                                                    |
| errors.UnauthorizedAppBskyNotificationRegisterPushResponseBodyError | 401                                                                 | application/json                                                    |
| errors.NotFoundError                                                | 404                                                                 | application/json                                                    |
| errors.UnauthorizedError                                            | 403, 407                                                            | application/json                                                    |
| errors.TimeoutError                                                 | 408                                                                 | application/json                                                    |
| errors.RateLimitedError                                             | 429                                                                 | application/json                                                    |
| errors.BadRequestError                                              | 413, 414, 415, 422, 431                                             | application/json                                                    |
| errors.TimeoutError                                                 | 504                                                                 | application/json                                                    |
| errors.NotFoundError                                                | 501, 505                                                            | application/json                                                    |
| errors.InternalServerError                                          | 500, 502, 503, 506, 507, 508                                        | application/json                                                    |
| errors.BadRequestError                                              | 510                                                                 | application/json                                                    |
| errors.UnauthorizedError                                            | 511                                                                 | application/json                                                    |
| errors.APIError                                                     | 4XX, 5XX                                                            | \*/\*                                                               |

## updateSeen

*This endpoint is part of the Bluesky application Lexicon APIs (`app.bsky.*`). Public endpoints which don't require authentication can be made directly against the public Bluesky AppView API: https://public.api.bsky.app. Authenticated requests are usually made to the user's PDS, with automatic service proxying. Authenticated requests can be used for both public and non-public endpoints.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Notify server that the requesting account has seen notifications. Requires auth.

### Example Usage

```typescript
import { Bluesky } from "@speakeasy-sdks/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  await bluesky.notifications.updateSeen({
    seenAt: new Date("2024-07-16T17:03:31.114Z"),
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlueskyCore } from "@speakeasy-sdks/bluesky/core.js";
import { notificationsUpdateSeen } from "@speakeasy-sdks/bluesky/funcs/notificationsUpdateSeen.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await notificationsUpdateSeen(bluesky, {
    seenAt: new Date("2024-07-16T17:03:31.114Z"),
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
  useNotificationsUpdateSeenMutation
} from "@speakeasy-sdks/bluesky/react-query/notificationsUpdateSeen.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AppBskyNotificationUpdateSeenBody](../../models/operations/appbskynotificationupdateseenbody.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                                                        | Status Code                                                       | Content Type                                                      |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| errors.BadRequestAppBskyNotificationUpdateSeenResponseBodyError   | 400                                                               | application/json                                                  |
| errors.UnauthorizedAppBskyNotificationUpdateSeenResponseBodyError | 401                                                               | application/json                                                  |
| errors.NotFoundError                                              | 404                                                               | application/json                                                  |
| errors.UnauthorizedError                                          | 403, 407                                                          | application/json                                                  |
| errors.TimeoutError                                               | 408                                                               | application/json                                                  |
| errors.RateLimitedError                                           | 429                                                               | application/json                                                  |
| errors.BadRequestError                                            | 413, 414, 415, 422, 431                                           | application/json                                                  |
| errors.TimeoutError                                               | 504                                                               | application/json                                                  |
| errors.NotFoundError                                              | 501, 505                                                          | application/json                                                  |
| errors.InternalServerError                                        | 500, 502, 503, 506, 507, 508                                      | application/json                                                  |
| errors.BadRequestError                                            | 510                                                               | application/json                                                  |
| errors.UnauthorizedError                                          | 511                                                               | application/json                                                  |
| errors.APIError                                                   | 4XX, 5XX                                                          | \*/\*                                                             |