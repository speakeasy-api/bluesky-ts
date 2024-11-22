# ToolsOzoneModerationQueryEventsResponseBody

OK

## Example Usage

```typescript
import { ToolsOzoneModerationQueryEventsResponseBody } from "bluesky/models/operations";

let value: ToolsOzoneModerationQueryEventsResponseBody = {
  events: [
    {
      id: 730709,
      event: {
        active: false,
        timestamp: new Date("2022-10-26T14:10:48.354Z"),
      },
      subject: {
        uri: "https://simplistic-descendant.biz/",
        cid: "<id>",
      },
      subjectBlobCids: [
        "<value>",
      ],
      createdBy: "<id>",
      createdAt: new Date("2023-05-08T10:10:03.097Z"),
    },
  ],
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                                             | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `events`                                                                                                             | [components.ToolsOzoneModerationDefsModEventView](../../models/components/toolsozonemoderationdefsmodeventview.md)[] | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |