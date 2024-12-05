# ToolsOzoneModerationDefsModEventEmail

Keep a log of outgoing email to a user

## Example Usage

```typescript
import { ToolsOzoneModerationDefsModEventEmail } from "@speakeasy-api/bluesky/models/components";

let value: ToolsOzoneModerationDefsModEventEmail = {
  subjectLine: "<value>",
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `subjectLine`                                   | *string*                                        | :heavy_check_mark:                              | The subject line of the email sent to the user. |
| `content`                                       | *string*                                        | :heavy_minus_sign:                              | The content of the email sent to the user.      |
| `comment`                                       | *string*                                        | :heavy_minus_sign:                              | Additional comment about the outgoing comm.     |