# AppBskyGraphGetStarterPackResponseBody

OK

## Example Usage

```typescript
import { AppBskyGraphGetStarterPackResponseBody } from "bluesky/models/operations";

let value: AppBskyGraphGetStarterPackResponseBody = {
  starterPack: {
    uri: "https://interesting-chairperson.biz",
    cid: "<id>",
    record: "<value>",
    creator: {
      did: "<id>",
      handle: "<value>",
    },
    indexedAt: new Date("2023-09-17T16:21:25.240Z"),
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `starterPack`                                                                                            | [components.AppBskyGraphDefsStarterPackView](../../models/components/appbskygraphdefsstarterpackview.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |