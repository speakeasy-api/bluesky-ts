# ToolsOzoneModerationQueryEventsResponseBody

OK

## Example Usage

```typescript
import { ToolsOzoneModerationQueryEventsResponseBody } from "bluesky/models/operations";

let value: ToolsOzoneModerationQueryEventsResponseBody = {
  events: [
    {
      id: 455444,
      event: {
        durationInHours: 248413,
      },
      subject: {
        uri: "https://hopeful-lieu.net/",
        cid: "<id>",
      },
      subjectBlobCids: [
        "<value>",
      ],
      createdBy: "<id>",
      createdAt: new Date("2023-01-01T12:34:49.368Z"),
    },
  ],
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                                             | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `events`                                                                                                             | [components.ToolsOzoneModerationDefsModEventView](../../models/components/toolsozonemoderationdefsmodeventview.md)[] | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |