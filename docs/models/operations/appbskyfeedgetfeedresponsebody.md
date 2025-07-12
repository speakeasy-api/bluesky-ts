# AppBskyFeedGetFeedResponseBody

OK

## Example Usage

```typescript
import { AppBskyFeedGetFeedResponseBody } from "@speakeasy-sdks/bluesky/models/operations";

let value: AppBskyFeedGetFeedResponseBody = {
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
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                           | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `feed`                                                                                             | [components.AppBskyFeedDefsFeedViewPost](../../models/components/appbskyfeeddefsfeedviewpost.md)[] | :heavy_check_mark:                                                                                 | N/A                                                                                                |