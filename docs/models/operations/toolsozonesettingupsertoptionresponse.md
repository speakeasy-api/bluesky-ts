# ToolsOzoneSettingUpsertOptionResponse

OK

## Example Usage

```typescript
import { ToolsOzoneSettingUpsertOptionResponse } from "@speakeasy-sdks/bluesky/models/operations";

let value: ToolsOzoneSettingUpsertOptionResponse = {
  option: {
    key: "<id>",
    did: "<id>",
    value: "<value>",
    scope: "personal",
    createdBy: "<id>",
    lastUpdatedBy: "<id>",
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `option`                                                                                         | [components.ToolsOzoneSettingDefsOption](../../models/components/toolsozonesettingdefsoption.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |