# AppBskyFeedDefsThreadViewPost

## Example Usage

```typescript
import { AppBskyFeedDefsThreadViewPost } from "@speakeasy-sdks/bluesky/models/components";

let value: AppBskyFeedDefsThreadViewPost = {
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
| `parent`                                                                                 | *components.AppBskyFeedDefsThreadViewPostParent*                                         | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `replies`                                                                                | *components.Reply*[]                                                                     | :heavy_minus_sign:                                                                       | N/A                                                                                      |