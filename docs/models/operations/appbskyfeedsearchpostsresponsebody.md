# AppBskyFeedSearchPostsResponseBody

OK

## Example Usage

```typescript
import { AppBskyFeedSearchPostsResponseBody } from "@speakeasy-api/bluesky/models/operations";

let value: AppBskyFeedSearchPostsResponseBody = {
  posts: [],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `cursor`                                                                                   | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `hitsTotal`                                                                                | *number*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `posts`                                                                                    | [components.AppBskyFeedDefsPostView](../../models/components/appbskyfeeddefspostview.md)[] | :heavy_check_mark:                                                                         | N/A                                                                                        |