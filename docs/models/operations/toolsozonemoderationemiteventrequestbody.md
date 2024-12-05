# ToolsOzoneModerationEmitEventRequestBody

## Example Usage

```typescript
import { ToolsOzoneModerationEmitEventRequestBody } from "@speakeasy-api/bluesky/models/operations";

let value: ToolsOzoneModerationEmitEventRequestBody = {
  event: {
    comment:
      "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
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