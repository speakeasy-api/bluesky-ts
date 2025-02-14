# Teams
(*teams*)

## Overview

### Available Operations

* [deleteMember](#deletemember) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Delete a member from ozone team. Requires admin role.
* [updateMember](#updatemember) - *This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Update a member in the ozone service. Requires admin role.

## deleteMember

*This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Delete a member from ozone team. Requires admin role.

### Example Usage

```typescript
import { Bluesky } from "@speakeasy-api/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  await bluesky.teams.deleteMember({
    did: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlueskyCore } from "@speakeasy-api/bluesky/core.js";
import { teamsDeleteMember } from "@speakeasy-api/bluesky/funcs/teamsDeleteMember.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await teamsDeleteMember(bluesky, {
    did: "<id>",
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
  useTeamsDeleteMemberMutation
} from "@speakeasy-api/bluesky/react-query/teamsDeleteMember.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ToolsOzoneTeamDeleteMemberRequestBody](../../models/operations/toolsozoneteamdeletememberrequestbody.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                                         | Status Code                                        | Content Type                                       |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| errors.ToolsOzoneTeamDeleteMemberResponseBody      | 400                                                | application/json                                   |
| errors.ToolsOzoneTeamDeleteMemberTeamsResponseBody | 401                                                | application/json                                   |
| errors.NotFound                                    | 404                                                | application/json                                   |
| errors.Unauthorized                                | 403, 407                                           | application/json                                   |
| errors.Timeout                                     | 408                                                | application/json                                   |
| errors.RateLimited                                 | 429                                                | application/json                                   |
| errors.BadRequest                                  | 413, 414, 415, 422, 431                            | application/json                                   |
| errors.Timeout                                     | 504                                                | application/json                                   |
| errors.NotFound                                    | 501, 505                                           | application/json                                   |
| errors.InternalServerError                         | 500, 502, 503, 506, 507, 508                       | application/json                                   |
| errors.BadRequest                                  | 510                                                | application/json                                   |
| errors.Unauthorized                                | 511                                                | application/json                                   |
| errors.APIError                                    | 4XX, 5XX                                           | \*/\*                                              |

## updateMember

*This endpoint is part of the [Ozone moderation service](https://ozone.tools/) APIs. Requests usually require authentication, are directed to the user's PDS intance, and proxied to the Ozone instance indicated by the DID in the service proxying header. Admin authenentication may also be possible, with request sent directly to the Ozone instance.*

*To learn more about calling atproto API endpoints like this one, see the [API Hosts and Auth](/docs/advanced-guides/api-directory) guide.*

Update a member in the ozone service. Requires admin role.

### Example Usage

```typescript
import { Bluesky } from "@speakeasy-api/bluesky";

const bluesky = new Bluesky({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const result = await bluesky.teams.updateMember({
    did: "<id>",
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
import { teamsUpdateMember } from "@speakeasy-api/bluesky/funcs/teamsUpdateMember.js";

// Use `BlueskyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bluesky = new BlueskyCore({
  bearer: process.env["BLUESKY_BEARER"] ?? "",
});

async function run() {
  const res = await teamsUpdateMember(bluesky, {
    did: "<id>",
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
  useTeamsUpdateMemberMutation
} from "@speakeasy-api/bluesky/react-query/teamsUpdateMember.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ToolsOzoneTeamUpdateMemberRequestBody](../../models/operations/toolsozoneteamupdatememberrequestbody.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ToolsOzoneTeamDefsMember](../../models/components/toolsozoneteamdefsmember.md)\>**

### Errors

| Error Type                                         | Status Code                                        | Content Type                                       |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| errors.ToolsOzoneTeamUpdateMemberResponseBody      | 400                                                | application/json                                   |
| errors.ToolsOzoneTeamUpdateMemberTeamsResponseBody | 401                                                | application/json                                   |
| errors.NotFound                                    | 404                                                | application/json                                   |
| errors.Unauthorized                                | 403, 407                                           | application/json                                   |
| errors.Timeout                                     | 408                                                | application/json                                   |
| errors.RateLimited                                 | 429                                                | application/json                                   |
| errors.BadRequest                                  | 413, 414, 415, 422, 431                            | application/json                                   |
| errors.Timeout                                     | 504                                                | application/json                                   |
| errors.NotFound                                    | 501, 505                                           | application/json                                   |
| errors.InternalServerError                         | 500, 502, 503, 506, 507, 508                       | application/json                                   |
| errors.BadRequest                                  | 510                                                | application/json                                   |
| errors.Unauthorized                                | 511                                                | application/json                                   |
| errors.APIError                                    | 4XX, 5XX                                           | \*/\*                                              |