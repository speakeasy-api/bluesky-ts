# AppBskyFeedGetLikesResponse

## Example Usage

```typescript
import { AppBskyFeedGetLikesResponse } from "@speakeasy-sdks/bluesky/models/operations";

let value: AppBskyFeedGetLikesResponse = {
  result: {
    uri: "https://superficial-pinstripe.org",
    likes: [
      {
        indexedAt: new Date("2023-12-02T10:21:26.984Z"),
        createdAt: new Date("2024-03-04T08:47:35.916Z"),
        actor: {
          did: "<id>",
          handle: "<value>",
        },
      },
    ],
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                 | [operations.AppBskyFeedGetLikesResponseBody](../../models/operations/appbskyfeedgetlikesresponsebody.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |