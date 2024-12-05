# ToolsOzoneSignatureSearchAccountsResponse

## Example Usage

```typescript
import { ToolsOzoneSignatureSearchAccountsResponse } from "bluesky/models/operations";

let value: ToolsOzoneSignatureSearchAccountsResponse = {
  result: {
    accounts: [
      {
        did: "<id>",
        handle: "<value>",
        indexedAt: new Date("2023-01-02T00:36:42.947Z"),
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `result`                                                                                                                             | [operations.ToolsOzoneSignatureSearchAccountsResponseBody](../../models/operations/toolsozonesignaturesearchaccountsresponsebody.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |