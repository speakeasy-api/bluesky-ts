# AppBskyFeedGetFeedSkeletonResponseBody

OK

## Example Usage

```typescript
import { AppBskyFeedGetFeedSkeletonResponseBody } from "bluesky/models/operations";

let value: AppBskyFeedGetFeedSkeletonResponseBody = {
  feed: [
    {
      post: "https://shocked-vestment.biz/",
    },
  ],
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                                   | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `feed`                                                                                                     | [components.AppBskyFeedDefsSkeletonFeedPost](../../models/components/appbskyfeeddefsskeletonfeedpost.md)[] | :heavy_check_mark:                                                                                         | N/A                                                                                                        |