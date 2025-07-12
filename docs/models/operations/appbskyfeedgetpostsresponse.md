# AppBskyFeedGetPostsResponse

OK

## Example Usage

```typescript
import { AppBskyFeedGetPostsResponse } from "@speakeasy-sdks/bluesky/models/operations";

let value: AppBskyFeedGetPostsResponse = {
  posts: [
    {
      uri: "https://creative-foodstuffs.com/",
      cid: "<id>",
      author: {
        did: "<id>",
        handle: "<value>",
      },
      record: "<value>",
      indexedAt: new Date("2024-04-15T06:12:23.570Z"),
    },
  ],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `posts`                                                                                    | [components.AppBskyFeedDefsPostView](../../models/components/appbskyfeeddefspostview.md)[] | :heavy_check_mark:                                                                         | N/A                                                                                        |