# AppBskyEmbedRecordViewRecord

## Example Usage

```typescript
import { AppBskyEmbedRecordViewRecord } from "bluesky/models/components";

let value: AppBskyEmbedRecordViewRecord = {
  uri: "https://oval-resource.biz/",
  cid: "<id>",
  author: {
    did: "<id>",
    handle: "<value>",
  },
  value: "<value>",
  indexedAt: new Date("2023-11-12T01:37:45.757Z"),
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `uri`                                                                                                      | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `cid`                                                                                                      | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `author`                                                                                                   | [components.AppBskyActorDefsProfileViewBasic](../../models/components/appbskyactordefsprofileviewbasic.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `value`                                                                                                    | *any*                                                                                                      | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `labels`                                                                                                   | [components.ComAtprotoLabelDefsLabel](../../models/components/comatprotolabeldefslabel.md)[]               | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `replyCount`                                                                                               | *number*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `repostCount`                                                                                              | *number*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `likeCount`                                                                                                | *number*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `quoteCount`                                                                                               | *number*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `embeds`                                                                                                   | *components.Embeds*[]                                                                                      | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `indexedAt`                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)              | :heavy_check_mark:                                                                                         | N/A                                                                                                        |