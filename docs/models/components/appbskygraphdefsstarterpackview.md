# AppBskyGraphDefsStarterPackView

## Example Usage

```typescript
import { AppBskyGraphDefsStarterPackView } from "bluesky/models/components";

let value: AppBskyGraphDefsStarterPackView = {
  uri: "https://impish-expansion.org/",
  cid: "<id>",
  record: "<value>",
  creator: {
    did: "<id>",
    handle: "<value>",
  },
  indexedAt: new Date("2024-08-31T12:55:25.056Z"),
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `uri`                                                                                                      | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `cid`                                                                                                      | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `record`                                                                                                   | *any*                                                                                                      | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `creator`                                                                                                  | [components.AppBskyActorDefsProfileViewBasic](../../models/components/appbskyactordefsprofileviewbasic.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `list`                                                                                                     | [components.AppBskyGraphDefsListViewBasic](../../models/components/appbskygraphdefslistviewbasic.md)       | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `listItemsSample`                                                                                          | [components.AppBskyGraphDefsListItemView](../../models/components/appbskygraphdefslistitemview.md)[]       | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `feeds`                                                                                                    | [components.AppBskyFeedDefsGeneratorView](../../models/components/appbskyfeeddefsgeneratorview.md)[]       | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `joinedWeekCount`                                                                                          | *number*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `joinedAllTimeCount`                                                                                       | *number*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `labels`                                                                                                   | [components.ComAtprotoLabelDefsLabel](../../models/components/comatprotolabeldefslabel.md)[]               | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `indexedAt`                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)              | :heavy_check_mark:                                                                                         | N/A                                                                                                        |