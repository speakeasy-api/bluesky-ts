# AppBskyFeedDefsSkeletonFeedPost

## Example Usage

```typescript
import { AppBskyFeedDefsSkeletonFeedPost } from "bluesky/models/components";

let value: AppBskyFeedDefsSkeletonFeedPost = {
  post: "https://filthy-self-confidence.org/",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `post`                                                                                                         | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `reason`                                                                                                       | *components.AppBskyFeedDefsSkeletonFeedPostReason*                                                             | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `feedContext`                                                                                                  | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | Context that will be passed through to client and may be passed to feed generator back alongside interactions. |