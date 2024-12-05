# AppBskyFeedGetFeedSkeletonRequest

## Example Usage

```typescript
import { AppBskyFeedGetFeedSkeletonRequest } from "@speakeasy-api/bluesky/models/operations";

let value: AppBskyFeedGetFeedSkeletonRequest = {
  feed: "https://surprised-accelerator.net/",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `feed`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | Reference to feed generator record describing the specific feed being requested. |
| `limit`                                                                          | *number*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `cursor`                                                                         | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |