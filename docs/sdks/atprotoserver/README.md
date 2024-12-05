# AtprotoServer
(*atprotoServer*)

## Overview

### Available Operations

* [activateAccount](#activateaccount) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Activates a currently deactivated account. Used to finalize account migration after the account's repo is imported and identity is setup.
* [createAccount](#createaccount) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Create an account. Implemented by PDS.
* [createAppPassword](#createapppassword) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Create an App Password.
* [createInviteCode](#createinvitecode) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Create an invite code.
* [createInviteCodes](#createinvitecodes) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Create invite codes.
* [deleteAccount](#deleteaccount) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Delete an actor's account with a token and password. Can only be called after requesting a deletion token. Requires auth.
* [deleteSession](#deletesession) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Delete the current session. Requires auth.
* [describe](#describe) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Describes the server's account creation requirements and capabilities. Implemented by PDS.
* [refreshSession](#refreshsession) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Refresh an authentication session. Requires auth using the 'refreshJwt' (not the 'accessJwt').
* [requestEmailConfirmation](#requestemailconfirmation) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Request an email with a code to confirm ownership of email.
* [requestPasswordReset](#requestpasswordreset) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Initiate a user account password reset via email.
* [resetPassword](#resetpassword) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Reset a user account password using a token.
* [revokeAppPassword](#revokeapppassword) - *This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Revoke an App Password by name.

## activateAccount

*This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Activates a currently deactivated account. Used to finalize account migration after the account's repo is imported and identity is setup.

### Example Usage

```typescript
import { Bluesky } from "bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  await bluesky.atprotoServer.activateAccount();


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlueskyCore } from "bluesky/core.js";
import { atprotoServerActivateAccount } from "bluesky/funcs/atprotoServerActivateAccount.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await atprotoServerActivateAccount(bluesky);

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
  useAtprotoServerActivateAccountMutation
} from "bluesky/react-query/atprotoServerActivateAccount.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                                                      | Status Code                                                     | Content Type                                                    |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| errors.ComAtprotoServerActivateAccountResponseBody              | 400                                                             | application/json                                                |
| errors.ComAtprotoServerActivateAccountAtprotoServerResponseBody | 401                                                             | application/json                                                |
| errors.Unauthorized                                             | 403, 407, 511                                                   | application/json                                                |
| errors.NotFound                                                 | 404, 501, 505                                                   | application/json                                                |
| errors.Timeout                                                  | 408, 504                                                        | application/json                                                |
| errors.BadRequest                                               | 413, 414, 415, 422, 431, 510                                    | application/json                                                |
| errors.RateLimited                                              | 429                                                             | application/json                                                |
| errors.InternalServerError                                      | 500, 502, 503, 506, 507, 508                                    | application/json                                                |
| errors.APIError                                                 | 4XX, 5XX                                                        | \*/\*                                                           |

## createAccount

*This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Create an account. Implemented by PDS.

### Example Usage

```typescript
import { Bluesky } from "bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.atprotoServer.createAccount({
    handle: "<value>",
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
import { atprotoServerCreateAccount } from "bluesky/funcs/atprotoServerCreateAccount.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await atprotoServerCreateAccount(bluesky, {
    handle: "<value>",
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
  useAtprotoServerCreateAccountMutation
} from "bluesky/react-query/atprotoServerCreateAccount.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ComAtprotoServerCreateAccountRequestBody](../../models/operations/comatprotoservercreateaccountrequestbody.md)                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ComAtprotoServerCreateAccountResponseBody](../../models/operations/comatprotoservercreateaccountresponsebody.md)\>**

### Errors

| Error Type                                                    | Status Code                                                   | Content Type                                                  |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| errors.ComAtprotoServerCreateAccountResponseBody              | 400                                                           | application/json                                              |
| errors.ComAtprotoServerCreateAccountAtprotoServerResponseBody | 401                                                           | application/json                                              |
| errors.Unauthorized                                           | 403, 407, 511                                                 | application/json                                              |
| errors.NotFound                                               | 404, 501, 505                                                 | application/json                                              |
| errors.Timeout                                                | 408, 504                                                      | application/json                                              |
| errors.BadRequest                                             | 413, 414, 415, 422, 431, 510                                  | application/json                                              |
| errors.RateLimited                                            | 429                                                           | application/json                                              |
| errors.InternalServerError                                    | 500, 502, 503, 506, 507, 508                                  | application/json                                              |
| errors.APIError                                               | 4XX, 5XX                                                      | \*/\*                                                         |

## createAppPassword

*This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Create an App Password.

### Example Usage

```typescript
import { Bluesky } from "bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.atprotoServer.createAppPassword({
    name: "<value>",
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
import { atprotoServerCreateAppPassword } from "bluesky/funcs/atprotoServerCreateAppPassword.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await atprotoServerCreateAppPassword(bluesky, {
    name: "<value>",
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
  useAtprotoServerCreateAppPasswordMutation
} from "bluesky/react-query/atprotoServerCreateAppPassword.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ComAtprotoServerCreateAppPasswordRequestBody](../../models/operations/comatprotoservercreateapppasswordrequestbody.md)                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ComAtprotoServerCreateAppPasswordAppPassword](../../models/components/comatprotoservercreateapppasswordapppassword.md)\>**

### Errors

| Error Type                                                        | Status Code                                                       | Content Type                                                      |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| errors.ComAtprotoServerCreateAppPasswordResponseBody              | 400                                                               | application/json                                                  |
| errors.ComAtprotoServerCreateAppPasswordAtprotoServerResponseBody | 401                                                               | application/json                                                  |
| errors.Unauthorized                                               | 403, 407, 511                                                     | application/json                                                  |
| errors.NotFound                                                   | 404, 501, 505                                                     | application/json                                                  |
| errors.Timeout                                                    | 408, 504                                                          | application/json                                                  |
| errors.BadRequest                                                 | 413, 414, 415, 422, 431, 510                                      | application/json                                                  |
| errors.RateLimited                                                | 429                                                               | application/json                                                  |
| errors.InternalServerError                                        | 500, 502, 503, 506, 507, 508                                      | application/json                                                  |
| errors.APIError                                                   | 4XX, 5XX                                                          | \*/\*                                                             |

## createInviteCode

*This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Create an invite code.

### Example Usage

```typescript
import { Bluesky } from "bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.atprotoServer.createInviteCode({
    useCount: 828315,
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
import { atprotoServerCreateInviteCode } from "bluesky/funcs/atprotoServerCreateInviteCode.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await atprotoServerCreateInviteCode(bluesky, {
    useCount: 828315,
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
  useAtprotoServerCreateInviteCodeMutation
} from "bluesky/react-query/atprotoServerCreateInviteCode.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ComAtprotoServerCreateInviteCodeRequestBody](../../models/operations/comatprotoservercreateinvitecoderequestbody.md)                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ComAtprotoServerCreateInviteCodeResponseBody](../../models/operations/comatprotoservercreateinvitecoderesponsebody.md)\>**

### Errors

| Error Type                                                       | Status Code                                                      | Content Type                                                     |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| errors.ComAtprotoServerCreateInviteCodeResponseBody              | 400                                                              | application/json                                                 |
| errors.ComAtprotoServerCreateInviteCodeAtprotoServerResponseBody | 401                                                              | application/json                                                 |
| errors.Unauthorized                                              | 403, 407, 511                                                    | application/json                                                 |
| errors.NotFound                                                  | 404, 501, 505                                                    | application/json                                                 |
| errors.Timeout                                                   | 408, 504                                                         | application/json                                                 |
| errors.BadRequest                                                | 413, 414, 415, 422, 431, 510                                     | application/json                                                 |
| errors.RateLimited                                               | 429                                                              | application/json                                                 |
| errors.InternalServerError                                       | 500, 502, 503, 506, 507, 508                                     | application/json                                                 |
| errors.APIError                                                  | 4XX, 5XX                                                         | \*/\*                                                            |

## createInviteCodes

*This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Create invite codes.

### Example Usage

```typescript
import { Bluesky } from "bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.atprotoServer.createInviteCodes({
    useCount: 622859,
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
import { atprotoServerCreateInviteCodes } from "bluesky/funcs/atprotoServerCreateInviteCodes.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await atprotoServerCreateInviteCodes(bluesky, {
    useCount: 622859,
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
  useAtprotoServerCreateInviteCodesMutation
} from "bluesky/react-query/atprotoServerCreateInviteCodes.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ComAtprotoServerCreateInviteCodesRequestBody](../../models/operations/comatprotoservercreateinvitecodesrequestbody.md)                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ComAtprotoServerCreateInviteCodesResponseBody](../../models/operations/comatprotoservercreateinvitecodesresponsebody.md)\>**

### Errors

| Error Type                                                        | Status Code                                                       | Content Type                                                      |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| errors.ComAtprotoServerCreateInviteCodesResponseBody              | 400                                                               | application/json                                                  |
| errors.ComAtprotoServerCreateInviteCodesAtprotoServerResponseBody | 401                                                               | application/json                                                  |
| errors.Unauthorized                                               | 403, 407, 511                                                     | application/json                                                  |
| errors.NotFound                                                   | 404, 501, 505                                                     | application/json                                                  |
| errors.Timeout                                                    | 408, 504                                                          | application/json                                                  |
| errors.BadRequest                                                 | 413, 414, 415, 422, 431, 510                                      | application/json                                                  |
| errors.RateLimited                                                | 429                                                               | application/json                                                  |
| errors.InternalServerError                                        | 500, 502, 503, 506, 507, 508                                      | application/json                                                  |
| errors.APIError                                                   | 4XX, 5XX                                                          | \*/\*                                                             |

## deleteAccount

*This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Delete an actor's account with a token and password. Can only be called after requesting a deletion token. Requires auth.

### Example Usage

```typescript
import { Bluesky } from "bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  await bluesky.atprotoServer.deleteAccount({
    did: "<id>",
    password: "zBMKtu2pPdN390B",
    token: "<value>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlueskyCore } from "bluesky/core.js";
import { atprotoServerDeleteAccount } from "bluesky/funcs/atprotoServerDeleteAccount.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await atprotoServerDeleteAccount(bluesky, {
    did: "<id>",
    password: "zBMKtu2pPdN390B",
    token: "<value>",
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
  useAtprotoServerDeleteAccountMutation
} from "bluesky/react-query/atprotoServerDeleteAccount.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ComAtprotoServerDeleteAccountRequestBody](../../models/operations/comatprotoserverdeleteaccountrequestbody.md)                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                                                    | Status Code                                                   | Content Type                                                  |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| errors.ComAtprotoServerDeleteAccountResponseBody              | 400                                                           | application/json                                              |
| errors.ComAtprotoServerDeleteAccountAtprotoServerResponseBody | 401                                                           | application/json                                              |
| errors.Unauthorized                                           | 403, 407, 511                                                 | application/json                                              |
| errors.NotFound                                               | 404, 501, 505                                                 | application/json                                              |
| errors.Timeout                                                | 408, 504                                                      | application/json                                              |
| errors.BadRequest                                             | 413, 414, 415, 422, 431, 510                                  | application/json                                              |
| errors.RateLimited                                            | 429                                                           | application/json                                              |
| errors.InternalServerError                                    | 500, 502, 503, 506, 507, 508                                  | application/json                                              |
| errors.APIError                                               | 4XX, 5XX                                                      | \*/\*                                                         |

## deleteSession

*This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Delete the current session. Requires auth.

### Example Usage

```typescript
import { Bluesky } from "bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  await bluesky.atprotoServer.deleteSession();


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlueskyCore } from "bluesky/core.js";
import { atprotoServerDeleteSession } from "bluesky/funcs/atprotoServerDeleteSession.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await atprotoServerDeleteSession(bluesky);

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
  useAtprotoServerDeleteSessionMutation
} from "bluesky/react-query/atprotoServerDeleteSession.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                                                    | Status Code                                                   | Content Type                                                  |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| errors.ComAtprotoServerDeleteSessionResponseBody              | 400                                                           | application/json                                              |
| errors.ComAtprotoServerDeleteSessionAtprotoServerResponseBody | 401                                                           | application/json                                              |
| errors.Unauthorized                                           | 403, 407, 511                                                 | application/json                                              |
| errors.NotFound                                               | 404, 501, 505                                                 | application/json                                              |
| errors.Timeout                                                | 408, 504                                                      | application/json                                              |
| errors.BadRequest                                             | 413, 414, 415, 422, 431, 510                                  | application/json                                              |
| errors.RateLimited                                            | 429                                                           | application/json                                              |
| errors.InternalServerError                                    | 500, 502, 503, 506, 507, 508                                  | application/json                                              |
| errors.APIError                                               | 4XX, 5XX                                                      | \*/\*                                                         |

## describe

*This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Describes the server's account creation requirements and capabilities. Implemented by PDS.

### Example Usage

```typescript
import { Bluesky } from "bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.atprotoServer.describe();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlueskyCore } from "bluesky/core.js";
import { atprotoServerDescribe } from "bluesky/funcs/atprotoServerDescribe.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await atprotoServerDescribe(bluesky);

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
  useAtprotoServerDescribe,
  useAtprotoServerDescribeSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchAtprotoServerDescribe,
  
  // Utility to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateAllAtprotoServerDescribe,
} from "bluesky/react-query/atprotoServerDescribe.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ComAtprotoServerDescribeServerResponseBody](../../models/operations/comatprotoserverdescribeserverresponsebody.md)\>**

### Errors

| Error Type                                                     | Status Code                                                    | Content Type                                                   |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| errors.ComAtprotoServerDescribeServerResponseBody              | 400                                                            | application/json                                               |
| errors.ComAtprotoServerDescribeServerAtprotoServerResponseBody | 401                                                            | application/json                                               |
| errors.Unauthorized                                            | 403, 407, 511                                                  | application/json                                               |
| errors.NotFound                                                | 404, 501, 505                                                  | application/json                                               |
| errors.Timeout                                                 | 408, 504                                                       | application/json                                               |
| errors.BadRequest                                              | 413, 414, 415, 422, 431, 510                                   | application/json                                               |
| errors.RateLimited                                             | 429                                                            | application/json                                               |
| errors.InternalServerError                                     | 500, 502, 503, 506, 507, 508                                   | application/json                                               |
| errors.APIError                                                | 4XX, 5XX                                                       | \*/\*                                                          |

## refreshSession

*This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Refresh an authentication session. Requires auth using the 'refreshJwt' (not the 'accessJwt').

### Example Usage

```typescript
import { Bluesky } from "bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.atprotoServer.refreshSession();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlueskyCore } from "bluesky/core.js";
import { atprotoServerRefreshSession } from "bluesky/funcs/atprotoServerRefreshSession.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await atprotoServerRefreshSession(bluesky);

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
  useAtprotoServerRefreshSessionMutation
} from "bluesky/react-query/atprotoServerRefreshSession.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ComAtprotoServerRefreshSessionResponseBody](../../models/operations/comatprotoserverrefreshsessionresponsebody.md)\>**

### Errors

| Error Type                                                     | Status Code                                                    | Content Type                                                   |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| errors.ComAtprotoServerRefreshSessionResponseBody              | 400                                                            | application/json                                               |
| errors.ComAtprotoServerRefreshSessionAtprotoServerResponseBody | 401                                                            | application/json                                               |
| errors.Unauthorized                                            | 403, 407, 511                                                  | application/json                                               |
| errors.NotFound                                                | 404, 501, 505                                                  | application/json                                               |
| errors.Timeout                                                 | 408, 504                                                       | application/json                                               |
| errors.BadRequest                                              | 413, 414, 415, 422, 431, 510                                   | application/json                                               |
| errors.RateLimited                                             | 429                                                            | application/json                                               |
| errors.InternalServerError                                     | 500, 502, 503, 506, 507, 508                                   | application/json                                               |
| errors.APIError                                                | 4XX, 5XX                                                       | \*/\*                                                          |

## requestEmailConfirmation

*This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Request an email with a code to confirm ownership of email.

### Example Usage

```typescript
import { Bluesky } from "bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  await bluesky.atprotoServer.requestEmailConfirmation();


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlueskyCore } from "bluesky/core.js";
import { atprotoServerRequestEmailConfirmation } from "bluesky/funcs/atprotoServerRequestEmailConfirmation.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await atprotoServerRequestEmailConfirmation(bluesky);

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
  useAtprotoServerRequestEmailConfirmationMutation
} from "bluesky/react-query/atprotoServerRequestEmailConfirmation.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                                                               | Status Code                                                              | Content Type                                                             |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| errors.ComAtprotoServerRequestEmailConfirmationResponseBody              | 400                                                                      | application/json                                                         |
| errors.ComAtprotoServerRequestEmailConfirmationAtprotoServerResponseBody | 401                                                                      | application/json                                                         |
| errors.Unauthorized                                                      | 403, 407, 511                                                            | application/json                                                         |
| errors.NotFound                                                          | 404, 501, 505                                                            | application/json                                                         |
| errors.Timeout                                                           | 408, 504                                                                 | application/json                                                         |
| errors.BadRequest                                                        | 413, 414, 415, 422, 431, 510                                             | application/json                                                         |
| errors.RateLimited                                                       | 429                                                                      | application/json                                                         |
| errors.InternalServerError                                               | 500, 502, 503, 506, 507, 508                                             | application/json                                                         |
| errors.APIError                                                          | 4XX, 5XX                                                                 | \*/\*                                                                    |

## requestPasswordReset

*This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Initiate a user account password reset via email.

### Example Usage

```typescript
import { Bluesky } from "bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  await bluesky.atprotoServer.requestPasswordReset({
    email: "Columbus.Veum64@yahoo.com",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlueskyCore } from "bluesky/core.js";
import { atprotoServerRequestPasswordReset } from "bluesky/funcs/atprotoServerRequestPasswordReset.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await atprotoServerRequestPasswordReset(bluesky, {
    email: "Columbus.Veum64@yahoo.com",
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
  useAtprotoServerRequestPasswordResetMutation
} from "bluesky/react-query/atprotoServerRequestPasswordReset.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ComAtprotoServerRequestPasswordResetRequestBody](../../models/operations/comatprotoserverrequestpasswordresetrequestbody.md)                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                                                           | Status Code                                                          | Content Type                                                         |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| errors.ComAtprotoServerRequestPasswordResetResponseBody              | 400                                                                  | application/json                                                     |
| errors.ComAtprotoServerRequestPasswordResetAtprotoServerResponseBody | 401                                                                  | application/json                                                     |
| errors.Unauthorized                                                  | 403, 407, 511                                                        | application/json                                                     |
| errors.NotFound                                                      | 404, 501, 505                                                        | application/json                                                     |
| errors.Timeout                                                       | 408, 504                                                             | application/json                                                     |
| errors.BadRequest                                                    | 413, 414, 415, 422, 431, 510                                         | application/json                                                     |
| errors.RateLimited                                                   | 429                                                                  | application/json                                                     |
| errors.InternalServerError                                           | 500, 502, 503, 506, 507, 508                                         | application/json                                                     |
| errors.APIError                                                      | 4XX, 5XX                                                             | \*/\*                                                                |

## resetPassword

*This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Reset a user account password using a token.

### Example Usage

```typescript
import { Bluesky } from "bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  await bluesky.atprotoServer.resetPassword({
    token: "<value>",
    password: "H4fiBPbFtt_OLjH",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlueskyCore } from "bluesky/core.js";
import { atprotoServerResetPassword } from "bluesky/funcs/atprotoServerResetPassword.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await atprotoServerResetPassword(bluesky, {
    token: "<value>",
    password: "H4fiBPbFtt_OLjH",
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
  useAtprotoServerResetPasswordMutation
} from "bluesky/react-query/atprotoServerResetPassword.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ComAtprotoServerResetPasswordRequestBody](../../models/operations/comatprotoserverresetpasswordrequestbody.md)                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                                                    | Status Code                                                   | Content Type                                                  |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| errors.ComAtprotoServerResetPasswordResponseBody              | 400                                                           | application/json                                              |
| errors.ComAtprotoServerResetPasswordAtprotoServerResponseBody | 401                                                           | application/json                                              |
| errors.Unauthorized                                           | 403, 407, 511                                                 | application/json                                              |
| errors.NotFound                                               | 404, 501, 505                                                 | application/json                                              |
| errors.Timeout                                                | 408, 504                                                      | application/json                                              |
| errors.BadRequest                                             | 413, 414, 415, 422, 431, 510                                  | application/json                                              |
| errors.RateLimited                                            | 429                                                           | application/json                                              |
| errors.InternalServerError                                    | 500, 502, 503, 506, 507, 508                                  | application/json                                              |
| errors.APIError                                               | 4XX, 5XX                                                      | \*/\*                                                         |

## revokeAppPassword

*This endpoint is part of the atproto PDS server and account management APIs. Requests often require authentication and are made directly to the user's own PDS instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Revoke an App Password by name.

### Example Usage

```typescript
import { Bluesky } from "bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  await bluesky.atprotoServer.revokeAppPassword({
    name: "<value>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlueskyCore } from "bluesky/core.js";
import { atprotoServerRevokeAppPassword } from "bluesky/funcs/atprotoServerRevokeAppPassword.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await atprotoServerRevokeAppPassword(bluesky, {
    name: "<value>",
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
  useAtprotoServerRevokeAppPasswordMutation
} from "bluesky/react-query/atprotoServerRevokeAppPassword.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ComAtprotoServerRevokeAppPasswordRequestBody](../../models/operations/comatprotoserverrevokeapppasswordrequestbody.md)                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                                                        | Status Code                                                       | Content Type                                                      |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| errors.ComAtprotoServerRevokeAppPasswordResponseBody              | 400                                                               | application/json                                                  |
| errors.ComAtprotoServerRevokeAppPasswordAtprotoServerResponseBody | 401                                                               | application/json                                                  |
| errors.Unauthorized                                               | 403, 407, 511                                                     | application/json                                                  |
| errors.NotFound                                                   | 404, 501, 505                                                     | application/json                                                  |
| errors.Timeout                                                    | 408, 504                                                          | application/json                                                  |
| errors.BadRequest                                                 | 413, 414, 415, 422, 431, 510                                      | application/json                                                  |
| errors.RateLimited                                                | 429                                                               | application/json                                                  |
| errors.InternalServerError                                        | 500, 502, 503, 506, 507, 508                                      | application/json                                                  |
| errors.APIError                                                   | 4XX, 5XX                                                          | \*/\*                                                             |