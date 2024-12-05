# AppBskyGraphGetKnownFollowersResponse

## Example Usage

```typescript
import { AppBskyGraphGetKnownFollowersResponse } from "@speakeasy-api/bluesky/models/operations";

let value: AppBskyGraphGetKnownFollowersResponse = {
  result: {
    subject: {
      did: "<id>",
      handle: "<value>",
    },
    followers: [],
  },
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                                     | [operations.AppBskyGraphGetKnownFollowersResponseBody](../../models/operations/appbskygraphgetknownfollowersresponsebody.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |