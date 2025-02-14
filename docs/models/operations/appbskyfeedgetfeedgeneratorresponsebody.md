# AppBskyFeedGetFeedGeneratorResponseBody

OK

## Example Usage

```typescript
import { AppBskyFeedGetFeedGeneratorResponseBody } from "@speakeasy-api/bluesky/models/operations";

let value: AppBskyFeedGetFeedGeneratorResponseBody = {
  view: {
    uri: "https://rough-mentor.biz/",
    cid: "<id>",
    did: "<id>",
    creator: {
      did: "<id>",
      handle: "<value>",
    },
    displayName: "Judah31",
    indexedAt: new Date("2023-05-25T10:48:39.501Z"),
  },
  isOnline: false,
  isValid: false,
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `view`                                                                                               | [components.AppBskyFeedDefsGeneratorView](../../models/components/appbskyfeeddefsgeneratorview.md)   | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `isOnline`                                                                                           | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | Indicates whether the feed generator service has been online recently, or else seems to be inactive. |
| `isValid`                                                                                            | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | Indicates whether the feed generator service is compatible with the record declaration.              |