# ComAtprotoServerDescribeServerResponse

OK

## Example Usage

```typescript
import { ComAtprotoServerDescribeServerResponse } from "@speakeasy-sdks/bluesky/models/operations";

let value: ComAtprotoServerDescribeServerResponse = {
  availableUserDomains: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  did: "<id>",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `inviteCodeRequired`                                                                                                 | *boolean*                                                                                                            | :heavy_minus_sign:                                                                                                   | If true, an invite code must be supplied to create an account on this instance.                                      |
| `phoneVerificationRequired`                                                                                          | *boolean*                                                                                                            | :heavy_minus_sign:                                                                                                   | If true, a phone verification token must be supplied to create an account on this instance.                          |
| `availableUserDomains`                                                                                               | *string*[]                                                                                                           | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `links`                                                                                                              | [components.ComAtprotoServerDescribeServerLinks](../../models/components/comatprotoserverdescribeserverlinks.md)     | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `contact`                                                                                                            | [components.ComAtprotoServerDescribeServerContact](../../models/components/comatprotoserverdescribeservercontact.md) | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `did`                                                                                                                | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |