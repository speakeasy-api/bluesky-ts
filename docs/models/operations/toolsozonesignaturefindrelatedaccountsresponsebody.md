# ToolsOzoneSignatureFindRelatedAccountsResponseBody

OK

## Example Usage

```typescript
import { ToolsOzoneSignatureFindRelatedAccountsResponseBody } from "bluesky/models/operations";

let value: ToolsOzoneSignatureFindRelatedAccountsResponseBody = {
  accounts: [
    {
      account: {
        did: "<id>",
        handle: "<value>",
        indexedAt: new Date("2024-11-26T16:52:15.770Z"),
      },
    },
  ],
};
```

## Fields

| Field                                                                                                                                                | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                                                                             | *string*                                                                                                                                             | :heavy_minus_sign:                                                                                                                                   | N/A                                                                                                                                                  |
| `accounts`                                                                                                                                           | [components.ToolsOzoneSignatureFindRelatedAccountsRelatedAccount](../../models/components/toolsozonesignaturefindrelatedaccountsrelatedaccount.md)[] | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |