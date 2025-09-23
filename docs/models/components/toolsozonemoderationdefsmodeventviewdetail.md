# ToolsOzoneModerationDefsModEventViewDetail

## Example Usage

```typescript
import { ToolsOzoneModerationDefsModEventViewDetail } from "@speakeasy-sdks/bluesky/models/components";

let value: ToolsOzoneModerationDefsModEventViewDetail = {
  id: 551657,
  event: {
    op: "delete",
    timestamp: new Date("2023-08-13T11:08:30.188Z"),
  },
  subject: {
    uri: "https://warm-larva.org",
  },
  subjectBlobs: [
    {
      cid: "<id>",
      mimeType: "<value>",
      size: 125267,
      createdAt: new Date("2023-01-15T02:49:30.055Z"),
    },
  ],
  createdBy: "<id>",
  createdAt: new Date("2025-01-16T16:22:41.424Z"),
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