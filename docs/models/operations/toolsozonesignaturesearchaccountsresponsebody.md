# ToolsOzoneSignatureSearchAccountsResponseBody

OK

## Example Usage

```typescript
import { ToolsOzoneSignatureSearchAccountsResponseBody } from "@speakeasy-api/bluesky/models/operations";

let value: ToolsOzoneSignatureSearchAccountsResponseBody = {
  accounts: [
    {
      did: "<id>",
      handle: "<value>",
      indexedAt: new Date("2023-07-13T17:58:06.600Z"),
    },
  ],
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                                 | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `accounts`                                                                                               | [components.ComAtprotoAdminDefsAccountView](../../models/components/comatprotoadmindefsaccountview.md)[] | :heavy_check_mark:                                                                                       | N/A                                                                                                      |