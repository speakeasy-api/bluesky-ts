# AppBskyGraphGetStarterPackResponseBody

OK

## Example Usage

```typescript
import { AppBskyGraphGetStarterPackResponseBody } from "bluesky/models/operations";

let value: AppBskyGraphGetStarterPackResponseBody = {
  starterPack: {
    uri: "https://well-groomed-hyena.org/",
    cid: "<id>",
    record: "<value>",
    creator: {
      did: "<id>",
      handle: "<value>",
    },
    indexedAt: new Date("2024-02-06T15:06:10.289Z"),
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `starterPack`                                                                                            | [components.AppBskyGraphDefsStarterPackView](../../models/components/appbskygraphdefsstarterpackview.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |