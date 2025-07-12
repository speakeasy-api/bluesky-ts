# ComAtprotoModerationCreateReportRequest

## Example Usage

```typescript
import { ComAtprotoModerationCreateReportRequest } from "@speakeasy-sdks/bluesky/models/operations";

let value: ComAtprotoModerationCreateReportRequest = {
  reasonType: "<value>",
  subject: {
    uri: "https://reflecting-outlaw.org",
    cid: "<id>",
  },
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `reasonType`                                                | *string*                                                    | :heavy_check_mark:                                          | N/A                                                         |
| `reason`                                                    | *string*                                                    | :heavy_minus_sign:                                          | Additional context about the content and violation.         |
| `subject`                                                   | *operations.ComAtprotoModerationCreateReportSubjectRequest* | :heavy_check_mark:                                          | N/A                                                         |