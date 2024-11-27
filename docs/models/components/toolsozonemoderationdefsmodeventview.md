# ToolsOzoneModerationDefsModEventView

## Example Usage

```typescript
import { ToolsOzoneModerationDefsModEventView } from "bluesky/models/components";

let value: ToolsOzoneModerationDefsModEventView = {
  id: 701786,
  event: {
    comment:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
  },
  subject: {
    uri: "https://tough-morbidity.info/",
    cid: "<id>",
  },
  subjectBlobCids: [
    "<value>",
  ],
  createdBy: "<id>",
  createdAt: new Date("2024-07-19T07:42:14.060Z"),
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