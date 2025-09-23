# ToolsOzoneModerationDefsModEventView

## Example Usage

```typescript
import { ToolsOzoneModerationDefsModEventView } from "@speakeasy-sdks/bluesky/models/components";

let value: ToolsOzoneModerationDefsModEventView = {
  id: 480407,
  event: {
    timestamp: new Date("2024-10-31T17:16:53.421Z"),
  },
  subject: {
    uri: "https://reflecting-outlaw.org",
    cid: "<id>",
  },
  subjectBlobCids: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  createdBy: "<id>",
  createdAt: new Date("2023-02-01T12:59:43.045Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `event`                                                                                       | *components.ToolsOzoneModerationDefsModEventViewEvent*                                        | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `subject`                                                                                     | *components.ToolsOzoneModerationDefsModEventViewSubject*                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `subjectBlobCids`                                                                             | *string*[]                                                                                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdBy`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `creatorHandle`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `subjectHandle`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |