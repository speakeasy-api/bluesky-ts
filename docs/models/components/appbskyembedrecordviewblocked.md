# AppBskyEmbedRecordViewBlocked

## Example Usage

```typescript
import { AppBskyEmbedRecordViewBlocked } from "bluesky/models/components";

let value: AppBskyEmbedRecordViewBlocked = {
  uri: "https://strange-morbidity.name/",
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