# AppBskyFeedDefsReplyRef

## Example Usage

```typescript
import { AppBskyFeedDefsReplyRef } from "@speakeasy-sdks/bluesky/models/components";

let value: AppBskyFeedDefsReplyRef = {
  root: {
    uri: "https://excellent-comestible.org",
    notFound: true,
  },
  parent: {
    uri: "https://clean-importance.org/",
    cid: "<id>",
    author: {
      did: "<id>",
      handle: "<value>",
    },
    record: "<value>",
    indexedAt: new Date("2024-04-09T09:10:18.917Z"),
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `root`                                                                                                     | *components.Root*                                                                                          | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `parent`                                                                                                   | *components.AppBskyFeedDefsReplyRefParent*                                                                 | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `grandparentAuthor`                                                                                        | [components.AppBskyActorDefsProfileViewBasic](../../models/components/appbskyactordefsprofileviewbasic.md) | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |