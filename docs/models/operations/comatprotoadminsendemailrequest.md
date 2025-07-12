# ComAtprotoAdminSendEmailRequest

## Example Usage

```typescript
import { ComAtprotoAdminSendEmailRequest } from "@speakeasy-sdks/bluesky/models/operations";

let value: ComAtprotoAdminSendEmailRequest = {
  recipientDid: "<id>",
  content: "<value>",
  senderDid: "<id>",
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `recipientDid`                                                                                                                       | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `content`                                                                                                                            | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `subject`                                                                                                                            | *string*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `senderDid`                                                                                                                          | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `comment`                                                                                                                            | *string*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | Additional comment by the sender that won't be used in the email itself but helpful to provide more context for moderators/reviewers |