# ToolsOzoneSignatureFindRelatedAccountsResponse

## Example Usage

```typescript
import { ToolsOzoneSignatureFindRelatedAccountsResponse } from "@speakeasy-sdks/bluesky/models/operations";

let value: ToolsOzoneSignatureFindRelatedAccountsResponse = {
  result: {
    accounts: [
      {
        account: {
          did: "<id>",
          handle: "<value>",
          indexedAt: new Date("2025-06-10T19:00:11.527Z"),
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