# ToolsOzoneSettingUpsertOptionRequestBody

## Example Usage

```typescript
import { ToolsOzoneSettingUpsertOptionRequestBody } from "bluesky/models/operations";

let value: ToolsOzoneSettingUpsertOptionRequestBody = {
  key: "<id>",
  scope: "personal",
  value: "<value>",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `key`                                                                                                          | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `scope`                                                                                                        | [operations.ToolsOzoneSettingUpsertOptionScope](../../models/operations/toolsozonesettingupsertoptionscope.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `value`                                                                                                        | *any*                                                                                                          | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `description`                                                                                                  | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `managerRole`                                                                                                  | [operations.ManagerRole](../../models/operations/managerrole.md)                                               | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |