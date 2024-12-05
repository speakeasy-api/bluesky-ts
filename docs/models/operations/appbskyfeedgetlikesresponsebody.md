# AppBskyFeedGetLikesResponseBody

OK

## Example Usage

```typescript
import { AppBskyFeedGetLikesResponseBody } from "@speakeasy-api/bluesky/models/operations";

let value: AppBskyFeedGetLikesResponseBody = {
  uri: "https://oddball-translation.com",
  likes: [],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `uri`                                                                                      | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `cid`                                                                                      | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `cursor`                                                                                   | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `likes`                                                                                    | [components.AppBskyFeedGetLikesLike](../../models/components/appbskyfeedgetlikeslike.md)[] | :heavy_check_mark:                                                                         | N/A                                                                                        |