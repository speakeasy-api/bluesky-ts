# AppBskyFeedDescribeFeedGeneratorResponse

OK

## Example Usage

```typescript
import { AppBskyFeedDescribeFeedGeneratorResponse } from "@speakeasy-sdks/bluesky/models/operations";

let value: AppBskyFeedDescribeFeedGeneratorResponse = {
  did: "<id>",
  feeds: [
    {
      uri: "https://pointless-hexagon.net",
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