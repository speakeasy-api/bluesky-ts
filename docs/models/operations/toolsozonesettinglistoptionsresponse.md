# ToolsOzoneSettingListOptionsResponse

## Example Usage

```typescript
import { ToolsOzoneSettingListOptionsResponse } from "bluesky/models/operations";

let value: ToolsOzoneSettingListOptionsResponse = {
  result: {
    options: [
      {
        key: "<id>",
        did: "<id>",
        value: "<value>",
        scope: "personal",
        createdBy: "<id>",
        lastUpdatedBy: "<id>",
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                                   | [operations.ToolsOzoneSettingListOptionsResponseBody](../../models/operations/toolsozonesettinglistoptionsresponsebody.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |