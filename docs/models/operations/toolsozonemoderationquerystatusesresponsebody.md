# ToolsOzoneModerationQueryStatusesResponseBody

OK

## Example Usage

```typescript
import { ToolsOzoneModerationQueryStatusesResponseBody } from "@speakeasy-api/bluesky/models/operations";

let value: ToolsOzoneModerationQueryStatusesResponseBody = {
  subjectStatuses: [
    {
      id: 924159,
      subject: {
        uri: "https://fair-hydrolyze.com/",
        cid: "<id>",
      },
      updatedAt: new Date("2024-01-17T22:18:44.696Z"),
      createdAt: new Date("2025-03-22T03:31:31.130Z"),
      reviewState: "#reviewClosed",
    },
  ],
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `cursor`                                                                                                                       | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `subjectStatuses`                                                                                                              | [components.ToolsOzoneModerationDefsSubjectStatusView](../../models/components/toolsozonemoderationdefssubjectstatusview.md)[] | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |