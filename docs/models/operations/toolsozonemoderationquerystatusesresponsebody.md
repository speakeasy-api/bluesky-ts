# ToolsOzoneModerationQueryStatusesResponseBody

OK

## Example Usage

```typescript
import { ToolsOzoneModerationQueryStatusesResponseBody } from "bluesky/models/operations";

let value: ToolsOzoneModerationQueryStatusesResponseBody = {
  subjectStatuses: [
    {
      id: 348476,
      subject: {
        uri: "https://portly-programme.biz",
        cid: "<id>",
      },
      updatedAt: new Date("2023-01-10T12:01:37.968Z"),
      createdAt: new Date("2024-01-12T03:52:56.114Z"),
      reviewState: "#reviewNone",
    },
  ],
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `cursor`                                                                                                                       | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `subjectStatuses`                                                                                                              | [components.ToolsOzoneModerationDefsSubjectStatusView](../../models/components/toolsozonemoderationdefssubjectstatusview.md)[] | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |