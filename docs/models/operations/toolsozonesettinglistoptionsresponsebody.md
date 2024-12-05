# ToolsOzoneSettingListOptionsResponseBody

OK

## Example Usage

```typescript
import { ToolsOzoneSettingListOptionsResponseBody } from "bluesky/models/operations";

let value: ToolsOzoneSettingListOptionsResponseBody = {
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
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                           | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `options`                                                                                          | [components.ToolsOzoneSettingDefsOption](../../models/components/toolsozonesettingdefsoption.md)[] | :heavy_check_mark:                                                                                 | N/A                                                                                                |