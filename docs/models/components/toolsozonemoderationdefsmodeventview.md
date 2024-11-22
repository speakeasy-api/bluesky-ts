# ToolsOzoneModerationDefsModEventView

## Example Usage

```typescript
import { ToolsOzoneModerationDefsModEventView } from "bluesky/models/components";

let value: ToolsOzoneModerationDefsModEventView = {
  id: 881189,
  event: {
    timestamp: new Date("2022-10-25T14:52:48.050Z"),
  },
  subject: {
    uri: "https://mysterious-tuber.biz",
    cid: "<id>",
  },
  subjectBlobCids: [
    "<value>",
  ],
  createdBy: "<id>",
  createdAt: new Date("2024-12-13T20:14:50.509Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `event`                                                                                       | *components.ToolsOzoneModerationDefsModEventViewEvent*                                        | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `subject`                                                                                     | *components.Subject*                                                                          | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `subjectBlobCids`                                                                             | *string*[]                                                                                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdBy`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `creatorHandle`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `subjectHandle`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |