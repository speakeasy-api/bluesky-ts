# ToolsOzoneModerationQueryStatusesResponseBody

OK

## Example Usage

```typescript
import { ToolsOzoneModerationQueryStatusesResponseBody } from "bluesky/models/operations";

let value: ToolsOzoneModerationQueryStatusesResponseBody = {
  subjectStatuses: [
    {
      id: 839189,
      subject: {
        did: "<id>",
      },
      updatedAt: new Date("2023-07-05T14:51:08.243Z"),
      createdAt: new Date("2024-10-30T01:43:08.424Z"),
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