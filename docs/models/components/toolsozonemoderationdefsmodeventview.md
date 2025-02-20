# ToolsOzoneModerationDefsModEventView

## Example Usage

```typescript
import { ToolsOzoneModerationDefsModEventView } from "@speakeasy-sdks/bluesky/models/components";

let value: ToolsOzoneModerationDefsModEventView = {
  id: 83791,
  event: {},
  subject: {
    did: "<id>",
  },
  subjectBlobCids: [
    "<value>",
  ],
  createdBy: "<id>",
  createdAt: new Date("2023-10-28T15:04:27.098Z"),
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