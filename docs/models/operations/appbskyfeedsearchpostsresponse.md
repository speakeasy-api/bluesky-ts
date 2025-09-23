# AppBskyFeedSearchPostsResponse

## Example Usage

```typescript
import { AppBskyFeedSearchPostsResponse } from "@speakeasy-sdks/bluesky/models/operations";

let value: AppBskyFeedSearchPostsResponse = {
  result: {
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

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                       | [operations.AppBskyFeedSearchPostsResponseBody](../../models/operations/appbskyfeedsearchpostsresponsebody.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |