# ComAtprotoAdminSearchAccountsResponse

## Example Usage

```typescript
import { ComAtprotoAdminSearchAccountsResponse } from "bluesky/models/operations";

let value: ComAtprotoAdminSearchAccountsResponse = {
  result: {
    accounts: [
      {
        did: "<id>",
        handle: "<value>",
        indexedAt: new Date("2022-08-26T17:15:29.799Z"),
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                                     | [operations.ComAtprotoAdminSearchAccountsResponseBody](../../models/operations/comatprotoadminsearchaccountsresponsebody.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |