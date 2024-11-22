# ComAtprotoAdminSearchAccountsResponseBody

OK

## Example Usage

```typescript
import { ComAtprotoAdminSearchAccountsResponseBody } from "bluesky/models/operations";

let value: ComAtprotoAdminSearchAccountsResponseBody = {
  accounts: [
    {
      did: "<id>",
      handle: "<value>",
      indexedAt: new Date("2023-11-04T21:45:37.821Z"),
    },
  ],
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                                 | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `accounts`                                                                                               | [components.ComAtprotoAdminDefsAccountView](../../models/components/comatprotoadmindefsaccountview.md)[] | :heavy_check_mark:                                                                                       | N/A                                                                                                      |