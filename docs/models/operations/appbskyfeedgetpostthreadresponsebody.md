# AppBskyFeedGetPostThreadResponseBody

OK

## Example Usage

```typescript
import { AppBskyFeedGetPostThreadResponseBody } from "bluesky/models/operations";

let value: AppBskyFeedGetPostThreadResponseBody = {
  thread: {
    uri: "https://wobbly-instance.org/",
    author: {
      did: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `thread`                                                                                             | *operations.Thread*                                                                                  | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `threadgate`                                                                                         | [components.AppBskyFeedDefsThreadgateView](../../models/components/appbskyfeeddefsthreadgateview.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |