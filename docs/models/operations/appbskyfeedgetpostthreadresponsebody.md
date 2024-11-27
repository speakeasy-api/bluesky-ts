# AppBskyFeedGetPostThreadResponseBody

OK

## Example Usage

```typescript
import { AppBskyFeedGetPostThreadResponseBody } from "bluesky/models/operations";

let value: AppBskyFeedGetPostThreadResponseBody = {
  thread: {
    post: {
      uri: "https://frequent-cardboard.biz/",
      cid: "<id>",
      author: {
        did: "<id>",
        handle: "<value>",
      },
      record: "<value>",
      indexedAt: new Date("2023-03-31T00:46:25.708Z"),
    },
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `thread`                                                                                             | *operations.Thread*                                                                                  | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `threadgate`                                                                                         | [components.AppBskyFeedDefsThreadgateView](../../models/components/appbskyfeeddefsthreadgateview.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |