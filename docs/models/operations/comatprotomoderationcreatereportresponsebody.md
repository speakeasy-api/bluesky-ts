# ComAtprotoModerationCreateReportResponseBody

OK

## Example Usage

```typescript
import { ComAtprotoModerationCreateReportResponseBody } from "bluesky/models/operations";

let value: ComAtprotoModerationCreateReportResponseBody = {
  id: 961571,
  reasonType: "<value>",
  subject: {
    did: "<id>",
  },
  reportedBy: "<id>",
  createdAt: new Date("2024-11-06T10:52:56.298Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `reasonType`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `reason`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `subject`                                                                                     | *operations.ComAtprotoModerationCreateReportAtprotoModerationSubject*                         | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `reportedBy`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |