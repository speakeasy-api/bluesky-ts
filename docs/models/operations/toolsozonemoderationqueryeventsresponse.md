# ToolsOzoneModerationQueryEventsResponse

## Example Usage

```typescript
import { ToolsOzoneModerationQueryEventsResponse } from "@speakeasy-sdks/bluesky/models/operations";

let value: ToolsOzoneModerationQueryEventsResponse = {
  result: {
    events: [
      {
        id: 633998,
        event: {
          active: false,
          timestamp: new Date("2025-10-27T11:16:32.408Z"),
        },
        subject: {
          did: "<id>",
          convoId: "<id>",
          messageId: "<id>",
        },
        subjectBlobCids: [
          "<value>",
        ],
        createdBy: "<id>",
        createdAt: new Date("2025-02-05T17:37:20.583Z"),
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                                         | [operations.ToolsOzoneModerationQueryEventsResponseBody](../../models/operations/toolsozonemoderationqueryeventsresponsebody.md) | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |