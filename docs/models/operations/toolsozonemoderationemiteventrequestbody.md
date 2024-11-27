# ToolsOzoneModerationEmitEventRequestBody

## Example Usage

```typescript
import { ToolsOzoneModerationEmitEventRequestBody } from "bluesky/models/operations";

let value: ToolsOzoneModerationEmitEventRequestBody = {
  event: {
    active: false,
    timestamp: new Date("2022-10-26T14:10:48.354Z"),
  },
  subject: {
    did: "<id>",
  },
  createdBy: "<id>",
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `event`                                           | *operations.Event*                                | :heavy_check_mark:                                | N/A                                               |
| `subject`                                         | *operations.ToolsOzoneModerationEmitEventSubject* | :heavy_check_mark:                                | N/A                                               |
| `subjectBlobCids`                                 | *string*[]                                        | :heavy_minus_sign:                                | N/A                                               |
| `createdBy`                                       | *string*                                          | :heavy_check_mark:                                | N/A                                               |