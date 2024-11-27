# AppBskyFeedDefsThreadViewPost

## Example Usage

```typescript
import { AppBskyFeedDefsThreadViewPost } from "bluesky/models/components";

let value: AppBskyFeedDefsThreadViewPost = {
  post: {
    uri: "https://scented-availability.info",
    cid: "<id>",
    author: {
      did: "<id>",
      handle: "<value>",
    },
    record: "<value>",
    indexedAt: new Date("2022-07-03T12:13:54.462Z"),
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `post`                                                                                   | [components.AppBskyFeedDefsPostView](../../models/components/appbskyfeeddefspostview.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `parent`                                                                                 | *components.AppBskyFeedDefsThreadViewPostParent*                                         | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `replies`                                                                                | *components.Replies*[]                                                                   | :heavy_minus_sign:                                                                       | N/A                                                                                      |