# ComAtprotoServerCreateAccountRequest

## Example Usage

```typescript
import { ComAtprotoServerCreateAccountRequest } from "@speakeasy-sdks/bluesky/models/operations";

let value: ComAtprotoServerCreateAccountRequest = {
  handle: "<value>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `email`                                                                                      | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `handle`                                                                                     | *string*                                                                                     | :heavy_check_mark:                                                                           | Requested handle for the account.                                                            |
| `did`                                                                                        | *string*                                                                                     | :heavy_minus_sign:                                                                           | Pre-existing atproto DID, being imported to a new account.                                   |
| `inviteCode`                                                                                 | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `verificationCode`                                                                           | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `verificationPhone`                                                                          | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `password`                                                                                   | *string*                                                                                     | :heavy_minus_sign:                                                                           | Initial account password. May need to meet instance-specific password strength requirements. |
| `recoveryKey`                                                                                | *string*                                                                                     | :heavy_minus_sign:                                                                           | DID PLC rotation key (aka, recovery key) to be included in PLC creation operation.           |
| `plcOp`                                                                                      | *any*                                                                                        | :heavy_minus_sign:                                                                           | N/A                                                                                          |