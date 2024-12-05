# ToolsOzoneModerationQueryStatusesResponse

## Example Usage

```typescript
import { ToolsOzoneModerationQueryStatusesResponse } from "bluesky/models/operations";

let value: ToolsOzoneModerationQueryStatusesResponse = {
  result: {
    subjectStatuses: [
      {
        id: 622385,
        subject: {
          uri: "https://grouchy-plain.org/",
          cid: "<id>",
        },
        updatedAt: new Date("2023-08-19T20:54:27.100Z"),
        createdAt: new Date("2022-11-06T20:07:53.826Z"),
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