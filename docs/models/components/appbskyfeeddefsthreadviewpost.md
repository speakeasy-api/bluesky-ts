# AppBskyFeedDefsThreadViewPost

## Example Usage

```typescript
import { AppBskyFeedDefsThreadViewPost } from "@speakeasy-api/bluesky/models/components";

let value: AppBskyFeedDefsThreadViewPost = {
  post: {
    uri: "https://jam-packed-section.org",
    cid: "<id>",
    author: {
      did: "<id>",
      handle: "<value>",
    },
    record: "<value>",
    indexedAt: new Date("2023-11-24T20:56:14.878Z"),
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `post`                                                                                   | [components.AppBskyFeedDefsPostView](../../models/components/appbskyfeeddefspostview.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `parent`                                                                                 | *components.AppBskyFeedDefsThreadViewPostParent*                                         | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `replies`                                                                                | *components.Replies*[]                                                                   | :heavy_minus_sign:                                                                       | N/A                                                                                      |