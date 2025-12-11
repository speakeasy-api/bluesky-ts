# ToolsOzoneModerationQueryStatusesResponseBody

OK

## Example Usage

```typescript
import { ToolsOzoneModerationQueryStatusesResponseBody } from "@speakeasy-sdks/bluesky/models/operations";

let value: ToolsOzoneModerationQueryStatusesResponseBody = {
  subjectStatuses: [
    {
      id: 344525,
      subject: {
        did: "<id>",
      },
      updatedAt: new Date("2025-11-12T23:29:58.309Z"),
      createdAt: new Date("2025-10-22T17:01:28.275Z"),
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