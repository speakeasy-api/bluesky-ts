# AppBskyGraphGetFollowersResponse

## Example Usage

```typescript
import { AppBskyGraphGetFollowersResponse } from "@speakeasy-sdks/bluesky/models/operations";

let value: AppBskyGraphGetFollowersResponse = {
  result: {
    subject: {
      did: "<id>",
      handle: "<value>",
    },
    followers: [
      {
        did: "<id>",
        handle: "<value>",
      },
    ],
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `result`                                                                                                           | [operations.AppBskyGraphGetFollowersResponseBody](../../models/operations/appbskygraphgetfollowersresponsebody.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |