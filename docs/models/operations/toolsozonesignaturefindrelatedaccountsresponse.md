# ToolsOzoneSignatureFindRelatedAccountsResponse

## Example Usage

```typescript
import { ToolsOzoneSignatureFindRelatedAccountsResponse } from "bluesky/models/operations";

let value: ToolsOzoneSignatureFindRelatedAccountsResponse = {
  result: {
    accounts: [
      {
        account: {
          did: "<id>",
          handle: "<value>",
          indexedAt: new Date("2023-01-02T00:36:42.947Z"),
        },
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                                                       | [operations.ToolsOzoneSignatureFindRelatedAccountsResponseBody](../../models/operations/toolsozonesignaturefindrelatedaccountsresponsebody.md) | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |