# AppBskyEmbedRecordViewBlocked

## Example Usage

```typescript
import { AppBskyEmbedRecordViewBlocked } from "@speakeasy-sdks/bluesky/models/components";

let value: AppBskyEmbedRecordViewBlocked = {
  uri: "https://rural-tinderbox.name/",
  author: {
    did: "<id>",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `uri`                                                                                              | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `blocked`                                                                                          | *boolean*                                                                                          | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `author`                                                                                           | [components.AppBskyFeedDefsBlockedAuthor](../../models/components/appbskyfeeddefsblockedauthor.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |