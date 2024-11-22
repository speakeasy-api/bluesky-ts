# AppBskyFeedDefsReplyRef

## Example Usage

```typescript
import { AppBskyFeedDefsReplyRef } from "bluesky/models/components";

let value: AppBskyFeedDefsReplyRef = {
  root: {
    uri: "https://bustling-flood.name/",
    author: {
      did: "<id>",
    },
  },
  parent: {
    uri: "https://zesty-footrest.net/",
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `root`                                                                                                     | *components.Root*                                                                                          | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `parent`                                                                                                   | *components.Parent*                                                                                        | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `grandparentAuthor`                                                                                        | [components.AppBskyActorDefsProfileViewBasic](../../models/components/appbskyactordefsprofileviewbasic.md) | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |