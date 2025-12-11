# ToolsOzoneModerationDefsRecordViewDetail

## Example Usage

```typescript
import { ToolsOzoneModerationDefsRecordViewDetail } from "@speakeasy-sdks/bluesky/models/components";

let value: ToolsOzoneModerationDefsRecordViewDetail = {
  uri: "https://fantastic-fowl.biz",
  cid: "<id>",
  value: "<value>",
  blobs: [],
  indexedAt: new Date("2023-03-01T23:15:04.148Z"),
  moderation: {},
  repo: {
    did: "<id>",
    handle: "<value>",
    relatedRecords: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    indexedAt: new Date("2024-06-24T11:12:34.140Z"),
    moderation: {},
  },
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `uri`                                                                                                                      | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `cid`                                                                                                                      | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `value`                                                                                                                    | *any*                                                                                                                      | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `blobs`                                                                                                                    | [components.ToolsOzoneModerationDefsBlobView](../../models/components/toolsozonemoderationdefsblobview.md)[]               | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `labels`                                                                                                                   | [components.ComAtprotoLabelDefsLabel](../../models/components/comatprotolabeldefslabel.md)[]                               | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `indexedAt`                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                              | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `moderation`                                                                                                               | [components.ToolsOzoneModerationDefsModerationDetail](../../models/components/toolsozonemoderationdefsmoderationdetail.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `repo`                                                                                                                     | [components.ToolsOzoneModerationDefsRepoView](../../models/components/toolsozonemoderationdefsrepoview.md)                 | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |