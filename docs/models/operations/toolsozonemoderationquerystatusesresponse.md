# ToolsOzoneModerationQueryStatusesResponse

## Example Usage

```typescript
import { ToolsOzoneModerationQueryStatusesResponse } from "bluesky/models/operations";

let value: ToolsOzoneModerationQueryStatusesResponse = {
  result: {
    subjectStatuses: [
      {
        id: 543678,
        subject: {
          did: "<id>",
        },
        updatedAt: new Date("2022-02-03T03:18:29.615Z"),
        createdAt: new Date("2024-02-18T12:41:59.818Z"),
        reviewState: "#reviewOpen",
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `result`                                                                                                                             | [operations.ToolsOzoneModerationQueryStatusesResponseBody](../../models/operations/toolsozonemoderationquerystatusesresponsebody.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |