# AppBskyFeedDefsFeedViewPost

## Example Usage

```typescript
import { AppBskyFeedDefsFeedViewPost } from "bluesky/models/components";

let value: AppBskyFeedDefsFeedViewPost = {
  post: {
    uri: "https://quintessential-hunt.com/",
    cid: "<id>",
    author: {
      did: "<id>",
      handle: "<value>",
    },
    record: "<value>",
    indexedAt: new Date("2024-02-03T07:45:59.605Z"),
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `post`                                                                                   | [components.AppBskyFeedDefsPostView](../../models/components/appbskyfeeddefspostview.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `reply`                                                                                  | [components.AppBskyFeedDefsReplyRef](../../models/components/appbskyfeeddefsreplyref.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `reason`                                                                                 | *components.Reason*                                                                      | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `feedContext`                                                                            | *string*                                                                                 | :heavy_minus_sign:                                                                       | Context provided by feed generator that may be passed back alongside interactions.       |