# AppBskyFeedGetQuotesResponseBody

OK

## Example Usage

```typescript
import { AppBskyFeedGetQuotesResponseBody } from "bluesky/models/operations";

let value: AppBskyFeedGetQuotesResponseBody = {
  uri: "https://better-poppy.name/",
  posts: [],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `uri`                                                                                      | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `cid`                                                                                      | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `cursor`                                                                                   | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `posts`                                                                                    | [components.AppBskyFeedDefsPostView](../../models/components/appbskyfeeddefspostview.md)[] | :heavy_check_mark:                                                                         | N/A                                                                                        |