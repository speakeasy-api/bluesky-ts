# AppBskyFeedGetAuthorFeedResponse

## Example Usage

```typescript
import { AppBskyFeedGetAuthorFeedResponse } from "@speakeasy-sdks/bluesky/models/operations";

let value: AppBskyFeedGetAuthorFeedResponse = {
  result: {
    feed: [
      {
        post: {
          uri: "https://amused-fedora.biz",
          cid: "<id>",
          author: {
            did: "<id>",
            handle: "<value>",
          },
          record: "<value>",
          indexedAt: new Date("2025-01-02T09:02:47.505Z"),
        },
      },
    ],
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `result`                                                                                                           | [operations.AppBskyFeedGetAuthorFeedResponseBody](../../models/operations/appbskyfeedgetauthorfeedresponsebody.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |