# ToolsOzoneSignatureFindRelatedAccountsRelatedAccount

## Example Usage

```typescript
import { ToolsOzoneSignatureFindRelatedAccountsRelatedAccount } from "@speakeasy-sdks/bluesky/models/components";

let value: ToolsOzoneSignatureFindRelatedAccountsRelatedAccount = {
  account: {
    did: "<id>",
    handle: "<value>",
    indexedAt: new Date("2023-04-23T22:55:33.049Z"),
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `account`                                                                                                    | [components.ComAtprotoAdminDefsAccountView](../../models/components/comatprotoadmindefsaccountview.md)       | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `similarities`                                                                                               | [components.ToolsOzoneSignatureDefsSigDetail](../../models/components/toolsozonesignaturedefssigdetail.md)[] | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |