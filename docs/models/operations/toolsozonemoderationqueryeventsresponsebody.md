# ToolsOzoneModerationQueryEventsResponseBody

OK

## Example Usage

```typescript
import { ToolsOzoneModerationQueryEventsResponseBody } from "@speakeasy-sdks/bluesky/models/operations";

let value: ToolsOzoneModerationQueryEventsResponseBody = {
  events: [
    {
      id: 499587,
      event: {
        subjectLine: "<value>",
      },
      subject: {
        uri: "https://reflecting-outlaw.org",
        cid: "<id>",
      },
      subjectBlobCids: [],
      createdBy: "<id>",
      createdAt: new Date("2024-09-02T21:34:29.055Z"),
    },
  ],
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                                             | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `events`                                                                                                             | [components.ToolsOzoneModerationDefsModEventView](../../models/components/toolsozonemoderationdefsmodeventview.md)[] | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |