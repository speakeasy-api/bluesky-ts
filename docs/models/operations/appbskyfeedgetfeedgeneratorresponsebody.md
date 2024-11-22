# AppBskyFeedGetFeedGeneratorResponseBody

OK

## Example Usage

```typescript
import { AppBskyFeedGetFeedGeneratorResponseBody } from "bluesky/models/operations";

let value: AppBskyFeedGetFeedGeneratorResponseBody = {
  view: {
    uri: "https://talkative-sauerkraut.org/",
    cid: "<id>",
    did: "<id>",
    creator: {
      did: "<id>",
      handle: "<value>",
    },
    displayName: "Wilford_Koepp",
    indexedAt: new Date("2022-06-07T02:45:53.539Z"),
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