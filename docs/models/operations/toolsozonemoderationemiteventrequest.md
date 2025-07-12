# ToolsOzoneModerationEmitEventRequest

## Example Usage

```typescript
import { ToolsOzoneModerationEmitEventRequest } from "@speakeasy-sdks/bluesky/models/operations";

let value: ToolsOzoneModerationEmitEventRequest = {
  event: {
    comment:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
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