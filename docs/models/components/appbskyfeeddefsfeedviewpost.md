# AppBskyFeedDefsFeedViewPost

## Example Usage

```typescript
import { AppBskyFeedDefsFeedViewPost } from "@speakeasy-sdks/bluesky/models/components";

let value: AppBskyFeedDefsFeedViewPost = {
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
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `post`                                                                                   | [components.AppBskyFeedDefsPostView](../../models/components/appbskyfeeddefspostview.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `reply`                                                                                  | [components.AppBskyFeedDefsReplyRef](../../models/components/appbskyfeeddefsreplyref.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `reason`                                                                                 | *components.AppBskyFeedDefsFeedViewPostReason*                                           | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `feedContext`                                                                            | *string*                                                                                 | :heavy_minus_sign:                                                                       | Context provided by feed generator that may be passed back alongside interactions.       |