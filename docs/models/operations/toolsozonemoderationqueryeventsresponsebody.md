# ToolsOzoneModerationQueryEventsResponseBody

OK

## Example Usage

```typescript
import { ToolsOzoneModerationQueryEventsResponseBody } from "@speakeasy-sdks/bluesky/models/operations";

let value: ToolsOzoneModerationQueryEventsResponseBody = {
  events: [
    {
      id: 237807,
      event: {
        reportType: "<value>",
      },
      subject: {
        uri: "https://tedious-descendant.name/",
        cid: "<id>",
      },
      subjectBlobCids: [
        "<value>",
      ],
      createdBy: "<id>",
      createdAt: new Date("2025-10-30T01:43:08.424Z"),
    },
  ],
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                                             | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `events`                                                                                                             | [components.ToolsOzoneModerationDefsModEventView](../../models/components/toolsozonemoderationdefsmodeventview.md)[] | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |