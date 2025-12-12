# AppBskyGraphDefsStarterPackViewBasic

## Example Usage

```typescript
import { AppBskyGraphDefsStarterPackViewBasic } from "@speakeasy-sdks/bluesky/models/components";

let value: AppBskyGraphDefsStarterPackViewBasic = {
  uri: "https://growing-video.com",
  cid: "<id>",
  record: "<value>",
  creator: {
    did: "<id>",
    handle: "<value>",
  },
  indexedAt: new Date("2025-09-27T10:15:49.386Z"),
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `uri`                                                                                                      | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `cid`                                                                                                      | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `record`                                                                                                   | *any*                                                                                                      | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `creator`                                                                                                  | [components.AppBskyActorDefsProfileViewBasic](../../models/components/appbskyactordefsprofileviewbasic.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `listItemCount`                                                                                            | *number*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `joinedWeekCount`                                                                                          | *number*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `joinedAllTimeCount`                                                                                       | *number*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `labels`                                                                                                   | [components.ComAtprotoLabelDefsLabel](../../models/components/comatprotolabeldefslabel.md)[]               | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `indexedAt`                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)              | :heavy_check_mark:                                                                                         | N/A                                                                                                        |