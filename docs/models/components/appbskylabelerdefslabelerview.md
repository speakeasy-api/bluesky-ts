# AppBskyLabelerDefsLabelerView

## Example Usage

```typescript
import { AppBskyLabelerDefsLabelerView } from "@speakeasy-sdks/bluesky/models/components";

let value: AppBskyLabelerDefsLabelerView = {
  uri: "https://pink-tabletop.name/",
  cid: "<id>",
  creator: {
    did: "<id>",
    handle: "<value>",
  },
  indexedAt: new Date("2024-11-01T19:36:11.145Z"),
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `uri`                                                                                                              | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `cid`                                                                                                              | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `creator`                                                                                                          | [components.AppBskyActorDefsProfileView](../../models/components/appbskyactordefsprofileview.md)                   | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `likeCount`                                                                                                        | *number*                                                                                                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `viewer`                                                                                                           | [components.AppBskyLabelerDefsLabelerViewerState](../../models/components/appbskylabelerdefslabelerviewerstate.md) | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `indexedAt`                                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                      | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `labels`                                                                                                           | [components.ComAtprotoLabelDefsLabel](../../models/components/comatprotolabeldefslabel.md)[]                       | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |