# AppBskyGraphGetStarterPackResponseBody

OK

## Example Usage

```typescript
import { AppBskyGraphGetStarterPackResponseBody } from "@speakeasy-sdks/bluesky/models/operations";

let value: AppBskyGraphGetStarterPackResponseBody = {
  starterPack: {
    uri: "https://polished-horde.com/",
    cid: "<id>",
    record: "<value>",
    creator: {
      did: "<id>",
      handle: "<value>",
    },
    indexedAt: new Date("2023-11-23T22:01:05.887Z"),
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `starterPack`                                                                                            | [components.AppBskyGraphDefsStarterPackView](../../models/components/appbskygraphdefsstarterpackview.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |