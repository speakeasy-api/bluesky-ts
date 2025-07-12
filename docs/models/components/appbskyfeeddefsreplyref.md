# AppBskyFeedDefsReplyRef

## Example Usage

```typescript
import { AppBskyFeedDefsReplyRef } from "@speakeasy-sdks/bluesky/models/components";

let value: AppBskyFeedDefsReplyRef = {
  root: {
    uri: "https://definitive-mom.biz",
    cid: "<id>",
    author: {
      did: "<id>",
      handle: "<value>",
    },
    record: "<value>",
    indexedAt: new Date("2025-11-09T11:19:14.275Z"),
  },
  parent: {
    uri: "https://dirty-chapel.name",
    blocked: true,
    author: {
      did: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `root`                                                                                                     | *components.Root*                                                                                          | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `parent`                                                                                                   | *components.AppBskyFeedDefsReplyRefParent*                                                                 | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `grandparentAuthor`                                                                                        | [components.AppBskyActorDefsProfileViewBasic](../../models/components/appbskyactordefsprofileviewbasic.md) | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |