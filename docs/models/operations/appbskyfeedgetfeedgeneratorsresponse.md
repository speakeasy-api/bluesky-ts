# AppBskyFeedGetFeedGeneratorsResponse

OK

## Example Usage

```typescript
import { AppBskyFeedGetFeedGeneratorsResponse } from "@speakeasy-sdks/bluesky/models/operations";

let value: AppBskyFeedGetFeedGeneratorsResponse = {
  feeds: [
    {
      uri: "https://beloved-crocodile.info/",
      cid: "<id>",
      did: "<id>",
      creator: {
        did: "<id>",
        handle: "<value>",
      },
      displayName: "Carolanne.Wyman",
      indexedAt: new Date("2025-06-05T13:42:47.963Z"),
    },
  ],
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `feeds`                                                                                              | [components.AppBskyFeedDefsGeneratorView](../../models/components/appbskyfeeddefsgeneratorview.md)[] | :heavy_check_mark:                                                                                   | N/A                                                                                                  |