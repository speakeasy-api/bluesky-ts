# AppBskyLabelerDefsLabelerViewDetailed

## Example Usage

```typescript
import { AppBskyLabelerDefsLabelerViewDetailed } from "@speakeasy-api/bluesky/models/components";

let value: AppBskyLabelerDefsLabelerViewDetailed = {
  uri: "https://hungry-meal.net/",
  cid: "<id>",
  creator: {
    did: "<id>",
    handle: "<value>",
  },
  policies: {
    labelValues: [
      "!no-unauthenticated",
    ],
  },
  indexedAt: new Date("2023-01-22T07:56:26.664Z"),
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