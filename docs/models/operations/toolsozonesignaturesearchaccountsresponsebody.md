# ToolsOzoneSignatureSearchAccountsResponseBody

OK

## Example Usage

```typescript
import { ToolsOzoneSignatureSearchAccountsResponseBody } from "@speakeasy-sdks/bluesky/models/operations";

let value: ToolsOzoneSignatureSearchAccountsResponseBody = {
  accounts: [
    {
      did: "<id>",
      handle: "<value>",
      indexedAt: new Date("2024-07-12T17:58:06.600Z"),
    },
  ],
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                                 | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `accounts`                                                                                               | [components.ComAtprotoAdminDefsAccountView](../../models/components/comatprotoadmindefsaccountview.md)[] | :heavy_check_mark:                                                                                       | N/A                                                                                                      |