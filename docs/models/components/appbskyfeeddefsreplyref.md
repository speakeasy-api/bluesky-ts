# AppBskyFeedDefsReplyRef

## Example Usage

```typescript
import { AppBskyFeedDefsReplyRef } from "bluesky/models/components";

let value: AppBskyFeedDefsReplyRef = {
  root: {
    uri: "https://excellent-comestible.org",
  },
  parent: {
    uri: "https://clean-importance.org/",
    cid: "<id>",
    author: {
      did: "<id>",
      handle: "<value>",
    },
    record: "<value>",
    indexedAt: new Date("2023-04-10T09:10:18.917Z"),
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `root`                                                                                                     | *components.Root*                                                                                          | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `parent`                                                                                                   | *components.Parent*                                                                                        | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `grandparentAuthor`                                                                                        | [components.AppBskyActorDefsProfileViewBasic](../../models/components/appbskyactordefsprofileviewbasic.md) | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |