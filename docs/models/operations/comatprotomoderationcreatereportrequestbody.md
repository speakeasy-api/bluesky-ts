# ComAtprotoModerationCreateReportRequestBody

## Example Usage

```typescript
import { ComAtprotoModerationCreateReportRequestBody } from "@speakeasy-api/bluesky/models/operations";

let value: ComAtprotoModerationCreateReportRequestBody = {
  reasonType: "<value>",
  subject: {
    did: "<id>",
  },
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `reasonType`                                         | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `reason`                                             | *string*                                             | :heavy_minus_sign:                                   | Additional context about the content and violation.  |
| `subject`                                            | *operations.ComAtprotoModerationCreateReportSubject* | :heavy_check_mark:                                   | N/A                                                  |