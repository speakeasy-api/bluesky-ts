# ToolsOzoneModerationDefsRecordViewDetail

## Example Usage

```typescript
import { ToolsOzoneModerationDefsRecordViewDetail } from "bluesky/models/components";

let value: ToolsOzoneModerationDefsRecordViewDetail = {
  uri: "https://short-term-testing.net",
  cid: "<id>",
  value: "<value>",
  blobs: [
    {
      cid: "<id>",
      mimeType: "<value>",
      size: 310930,
      createdAt: new Date("2023-07-01T06:49:42.986Z"),
    },
  ],
  indexedAt: new Date("2024-02-09T03:46:21.750Z"),
  moderation: {},
  repo: {
    did: "<id>",
    handle: "<value>",
    relatedRecords: [
      "<value>",
    ],
    indexedAt: new Date("2022-06-01T17:26:33.631Z"),
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