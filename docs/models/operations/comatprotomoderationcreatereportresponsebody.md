# ComAtprotoModerationCreateReportResponseBody

OK

## Example Usage

```typescript
import { ComAtprotoModerationCreateReportResponseBody } from "@speakeasy-api/bluesky/models/operations";

let value: ComAtprotoModerationCreateReportResponseBody = {
  id: 876506,
  reasonType: "<value>",
  subject: {
    did: "<id>",
  },
  reportedBy: "<id>",
  createdAt: new Date("2025-11-19T21:08:28.843Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `reasonType`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `reason`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `subject`                                                                                     | *operations.ComAtprotoModerationCreateReportResponseSubject*                                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `reportedBy`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |