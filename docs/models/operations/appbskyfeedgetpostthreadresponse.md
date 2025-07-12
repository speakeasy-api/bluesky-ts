# AppBskyFeedGetPostThreadResponse

OK

## Example Usage

```typescript
import { AppBskyFeedGetPostThreadResponse } from "@speakeasy-sdks/bluesky/models/operations";

let value: AppBskyFeedGetPostThreadResponse = {
  thread: {
    uri: "https://major-yak.org/",
    blocked: true,
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