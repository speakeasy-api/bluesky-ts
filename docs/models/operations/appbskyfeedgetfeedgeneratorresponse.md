# AppBskyFeedGetFeedGeneratorResponse

OK

## Example Usage

```typescript
import { AppBskyFeedGetFeedGeneratorResponse } from "@speakeasy-sdks/bluesky/models/operations";

let value: AppBskyFeedGetFeedGeneratorResponse = {
  view: {
    uri: "https://trim-makeover.net/",
    cid: "<id>",
    did: "<id>",
    creator: {
      did: "<id>",
      handle: "<value>",
    },
    displayName: "Rocio_Bruen",
    indexedAt: new Date("2025-01-16T07:29:55.397Z"),
  },
  isOnline: true,
  isValid: false,
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `view`                                                                                               | [components.AppBskyFeedDefsGeneratorView](../../models/components/appbskyfeeddefsgeneratorview.md)   | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `isOnline`                                                                                           | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | Indicates whether the feed generator service has been online recently, or else seems to be inactive. |
| `isValid`                                                                                            | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | Indicates whether the feed generator service is compatible with the record declaration.              |