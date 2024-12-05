# ToolsOzoneModerationDefsRecordViewDetail

## Example Usage

```typescript
import { ToolsOzoneModerationDefsRecordViewDetail } from "@speakeasy-api/bluesky/models/components";

let value: ToolsOzoneModerationDefsRecordViewDetail = {
  uri: "https://glass-colonialism.name/",
  cid: "<id>",
  value: "<value>",
  blobs: [
    {
      cid: "<id>",
      mimeType: "<value>",
      size: 318028,
      createdAt: new Date("2024-11-16T00:59:56.580Z"),
    },
  ],
  indexedAt: new Date("2024-11-24T10:40:28.013Z"),
  moderation: {},
  repo: {
    did: "<id>",
    handle: "<value>",
    relatedRecords: [
      "<value>",
    ],
    indexedAt: new Date("2023-11-11T15:47:28.185Z"),
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