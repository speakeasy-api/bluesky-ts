# AppBskyFeedGetPostsRequest

## Example Usage

```typescript
import { AppBskyFeedGetPostsRequest } from "@speakeasy-sdks/bluesky/models/operations";

let value: AppBskyFeedGetPostsRequest = {
  uris: [
    "https://dutiful-cellar.biz",
  ],
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `uris`                                             | *string*[]                                         | :heavy_check_mark:                                 | List of post AT-URIs to return hydrated views for. |