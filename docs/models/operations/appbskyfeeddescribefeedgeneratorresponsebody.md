# AppBskyFeedDescribeFeedGeneratorResponseBody

OK

## Example Usage

```typescript
import { AppBskyFeedDescribeFeedGeneratorResponseBody } from "bluesky/models/operations";

let value: AppBskyFeedDescribeFeedGeneratorResponseBody = {
  did: "<id>",
  feeds: [
    {
      uri: "https://insignificant-parsnip.info",
    },
  ],
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `did`                                                                                                                | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `feeds`                                                                                                              | [components.AppBskyFeedDescribeFeedGeneratorFeed](../../models/components/appbskyfeeddescribefeedgeneratorfeed.md)[] | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `links`                                                                                                              | [components.AppBskyFeedDescribeFeedGeneratorLinks](../../models/components/appbskyfeeddescribefeedgeneratorlinks.md) | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |