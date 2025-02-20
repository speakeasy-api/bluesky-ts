# AppBskyFeedGetPostThreadResponseBody

OK

## Example Usage

```typescript
import { AppBskyFeedGetPostThreadResponseBody } from "@speakeasy-sdks/bluesky/models/operations";

let value: AppBskyFeedGetPostThreadResponseBody = {
  thread: {
    uri: "https://ruddy-bandwidth.net/",
    notFound: true,
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `thread`                                                                                             | *operations.Thread*                                                                                  | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `threadgate`                                                                                         | [components.AppBskyFeedDefsThreadgateView](../../models/components/appbskyfeeddefsthreadgateview.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |