# ComAtprotoModerationCreateReportResponse

OK

## Example Usage

```typescript
import { ComAtprotoModerationCreateReportResponse } from "@speakeasy-sdks/bluesky/models/operations";

let value: ComAtprotoModerationCreateReportResponse = {
  id: 713015,
  reasonType: "<value>",
  subject: {
    did: "<id>",
  },
  reportedBy: "<id>",
  createdAt: new Date("2025-04-21T14:22:27.201Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `reasonType`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `reason`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `subject`                                                                                     | *operations.ComAtprotoModerationCreateReportSubjectResponse*                                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `reportedBy`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |