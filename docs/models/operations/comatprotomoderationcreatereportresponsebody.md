# ComAtprotoModerationCreateReportResponseBody

OK

## Example Usage

```typescript
import { ComAtprotoModerationCreateReportResponseBody } from "bluesky/models/operations";

let value: ComAtprotoModerationCreateReportResponseBody = {
  id: 117531,
  reasonType: "<value>",
  subject: {
    uri: "https://second-hand-gripper.name/",
    cid: "<id>",
  },
  reportedBy: "<id>",
  createdAt: new Date("2022-07-20T20:59:34.122Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `reasonType`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `reason`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `subject`                                                                                     | *operations.ComAtprotoModerationCreateReportComAtprotoModerationSubject*                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `reportedBy`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |