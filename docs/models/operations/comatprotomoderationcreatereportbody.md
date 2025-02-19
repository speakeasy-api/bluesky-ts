# ComAtprotoModerationCreateReportBody

## Example Usage

```typescript
import { ComAtprotoModerationCreateReportBody } from "@speakeasy-api/bluesky/models/operations";

let value: ComAtprotoModerationCreateReportBody = {
  reasonType: "<value>",
  subject: {
    did: "<id>",
  },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `reasonType`                                             | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `reason`                                                 | *string*                                                 | :heavy_minus_sign:                                       | Additional context about the content and violation.      |
| `subject`                                                | *operations.ComAtprotoModerationCreateReportBodySubject* | :heavy_check_mark:                                       | N/A                                                      |