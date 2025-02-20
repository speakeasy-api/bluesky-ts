# ToolsOzoneSignatureFindRelatedAccountsResponseBody

OK

## Example Usage

```typescript
import { ToolsOzoneSignatureFindRelatedAccountsResponseBody } from "@speakeasy-sdks/bluesky/models/operations";

let value: ToolsOzoneSignatureFindRelatedAccountsResponseBody = {
  accounts: [
    {
      account: {
        did: "<id>",
        handle: "<value>",
        indexedAt: new Date("2025-02-02T08:16:25.886Z"),
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