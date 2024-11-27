# AppBskyLabelerDefsLabelerViewDetailed

## Example Usage

```typescript
import { AppBskyLabelerDefsLabelerViewDetailed } from "bluesky/models/components";

let value: AppBskyLabelerDefsLabelerViewDetailed = {
  uri: "https://tricky-version.com",
  cid: "<id>",
  creator: {
    did: "<id>",
    handle: "<value>",
  },
  policies: {
    labelValues: [
      "!hide",
    ],
  },
  indexedAt: new Date("2024-09-27T23:00:42.188Z"),
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `uri`                                                                                                              | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `cid`                                                                                                              | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `creator`                                                                                                          | [components.AppBskyActorDefsProfileView](../../models/components/appbskyactordefsprofileview.md)                   | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `policies`                                                                                                         | [components.AppBskyLabelerDefsLabelerPolicies](../../models/components/appbskylabelerdefslabelerpolicies.md)       | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `likeCount`                                                                                                        | *number*                                                                                                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `viewer`                                                                                                           | [components.AppBskyLabelerDefsLabelerViewerState](../../models/components/appbskylabelerdefslabelerviewerstate.md) | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `indexedAt`                                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                      | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `labels`                                                                                                           | [components.ComAtprotoLabelDefsLabel](../../models/components/comatprotolabeldefslabel.md)[]                       | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |