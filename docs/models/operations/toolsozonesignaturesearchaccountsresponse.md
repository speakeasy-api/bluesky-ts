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
        indexedAt: new Date("2022-04-17T13:52:40.497Z"),
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `result`                                                                                                                             | [operations.ToolsOzoneSignatureSearchAccountsResponseBody](../../models/operations/toolsozonesignaturesearchaccountsresponsebody.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |