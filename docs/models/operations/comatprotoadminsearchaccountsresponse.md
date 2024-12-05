# ComAtprotoAdminSearchAccountsResponse

## Example Usage

```typescript
import { ComAtprotoAdminSearchAccountsResponse } from "@speakeasy-api/bluesky/models/operations";

let value: ComAtprotoAdminSearchAccountsResponse = {
  result: {
    accounts: [
      {
        did: "<id>",
        handle: "<value>",
        indexedAt: new Date("2022-03-15T16:56:03.501Z"),
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                                     | [operations.ComAtprotoAdminSearchAccountsResponseBody](../../models/operations/comatprotoadminsearchaccountsresponsebody.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |