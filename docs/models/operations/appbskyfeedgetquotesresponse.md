# AppBskyFeedGetQuotesResponse

## Example Usage

```typescript
import { AppBskyFeedGetQuotesResponse } from "@speakeasy-sdks/bluesky/models/operations";

let value: AppBskyFeedGetQuotesResponse = {
  result: {
    uri: "https://early-underneath.org",
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
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [operations.AppBskyFeedGetQuotesResponseBody](../../models/operations/appbskyfeedgetquotesresponsebody.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |