# ToolsOzoneModerationQueryEventsResponse

## Example Usage

```typescript
import { ToolsOzoneModerationQueryEventsResponse } from "bluesky/models/operations";

let value: ToolsOzoneModerationQueryEventsResponse = {
  result: {
    events: [
      {
        id: 924159,
        event: {
          active: false,
          timestamp: new Date("2022-02-23T08:44:58.363Z"),
        },
        subject: {
          did: "<id>",
        },
        subjectBlobCids: [
          "<value>",
        ],
        createdBy: "<id>",
        createdAt: new Date("2023-05-04T23:08:54.690Z"),
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                                         | [operations.ToolsOzoneModerationQueryEventsResponseBody](../../models/operations/toolsozonemoderationqueryeventsresponsebody.md) | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |