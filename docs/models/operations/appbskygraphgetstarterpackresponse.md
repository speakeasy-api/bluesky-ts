# AppBskyGraphGetStarterPackResponse

OK

## Example Usage

```typescript
import { AppBskyGraphGetStarterPackResponse } from "@speakeasy-sdks/bluesky/models/operations";

let value: AppBskyGraphGetStarterPackResponse = {
  starterPack: {
    uri: "https://courteous-density.com",
    cid: "<id>",
    record: "<value>",
    creator: {
      did: "<id>",
      handle: "<value>",
    },
    indexedAt: new Date("2024-05-10T02:56:15.580Z"),
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `starterPack`                                                                                            | [components.AppBskyGraphDefsStarterPackView](../../models/components/appbskygraphdefsstarterpackview.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |