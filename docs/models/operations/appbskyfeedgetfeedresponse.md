# AppBskyFeedGetFeedResponse

## Example Usage

```typescript
import { AppBskyFeedGetFeedResponse } from "@speakeasy-sdks/bluesky/models/operations";

let value: AppBskyFeedGetFeedResponse = {
  result: {
    feed: [
      {
        post: {
          uri: "https://amused-fedora.biz",
          cid: "<id>",
          author: {
            did: "<id>",
            handle: "<value>",
          },
          record: "<value>",
          indexedAt: new Date("2025-01-02T09:02:47.505Z"),
        },
      },
    ],
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `result`                                                                                               | [operations.AppBskyFeedGetFeedResponseBody](../../models/operations/appbskyfeedgetfeedresponsebody.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |