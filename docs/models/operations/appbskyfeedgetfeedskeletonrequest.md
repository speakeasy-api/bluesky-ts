# AppBskyFeedGetFeedSkeletonRequest

## Example Usage

```typescript
import { AppBskyFeedGetFeedSkeletonRequest } from "bluesky/models/operations";

let value: AppBskyFeedGetFeedSkeletonRequest = {
  feed: "https://lasting-metabolite.com",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `feed`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | Reference to feed generator record describing the specific feed being requested. |
| `limit`                                                                          | *number*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `cursor`                                                                         | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |