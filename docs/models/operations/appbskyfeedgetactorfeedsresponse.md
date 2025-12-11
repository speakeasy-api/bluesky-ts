# AppBskyFeedGetActorFeedsResponse

## Example Usage

```typescript
import { AppBskyFeedGetActorFeedsResponse } from "@speakeasy-sdks/bluesky/models/operations";

let value: AppBskyFeedGetActorFeedsResponse = {
  result: {
    feeds: [
      {
        uri: "https://beloved-crocodile.info/",
        cid: "<id>",
        did: "<id>",
        creator: {
          did: "<id>",
          handle: "<value>",
        },
        displayName: "Carolanne.Wyman",
        indexedAt: new Date("2025-06-05T13:42:47.963Z"),
      },
    ],
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `result`                                                                                                           | [operations.AppBskyFeedGetActorFeedsResponseBody](../../models/operations/appbskyfeedgetactorfeedsresponsebody.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |