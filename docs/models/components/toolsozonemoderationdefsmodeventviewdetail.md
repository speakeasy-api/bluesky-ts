# ToolsOzoneModerationDefsModEventViewDetail

## Example Usage

```typescript
import { ToolsOzoneModerationDefsModEventViewDetail } from "bluesky/models/components";

let value: ToolsOzoneModerationDefsModEventViewDetail = {
  id: 40874,
  event: {
    createLabelVals: [
      "<value>",
    ],
    negateLabelVals: [
      "<value>",
    ],
  },
  subject: {
    uri: "https://soggy-rule.org",
    cid: "<id>",
    value: "<value>",
    blobCids: [
      "<id>",
    ],
    indexedAt: new Date("2024-02-29T11:16:40.701Z"),
    moderation: {},
    repo: {
      did: "<id>",
      handle: "<value>",
      relatedRecords: [
        "<value>",
      ],
      indexedAt: new Date("2024-12-08T23:54:11.569Z"),
      moderation: {},
    },
  },
  subjectBlobs: [
    {
      cid: "<id>",
      mimeType: "<value>",
      size: 898826,
      createdAt: new Date("2023-10-06T01:00:30.025Z"),
    },
  ],
  createdBy: "<id>",
  createdAt: new Date("2023-10-07T14:53:57.713Z"),
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                         | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `event`                                                                                                      | *components.ToolsOzoneModerationDefsModEventViewDetailEvent*                                                 | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `subject`                                                                                                    | *components.ToolsOzoneModerationDefsModEventViewDetailSubject*                                               | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `subjectBlobs`                                                                                               | [components.ToolsOzoneModerationDefsBlobView](../../models/components/toolsozonemoderationdefsblobview.md)[] | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `createdBy`                                                                                                  | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `createdAt`                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                | :heavy_check_mark:                                                                                           | N/A                                                                                                          |