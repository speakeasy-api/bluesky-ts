# ToolsOzoneModerationDefsModEventViewDetail

## Example Usage

```typescript
import { ToolsOzoneModerationDefsModEventViewDetail } from "@speakeasy-api/bluesky/models/components";

let value: ToolsOzoneModerationDefsModEventViewDetail = {
  id: 709051,
  event: {
    subjectLine: "<value>",
  },
  subject: {
    uri: "https://lost-swine.org",
  },
  subjectBlobs: [
    {
      cid: "<id>",
      mimeType: "<value>",
      size: 271551,
      createdAt: new Date("2024-10-27T20:52:23.318Z"),
    },
  ],
  createdBy: "<id>",
  createdAt: new Date("2024-07-31T03:15:58.659Z"),
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