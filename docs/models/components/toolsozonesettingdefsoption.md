# ToolsOzoneSettingDefsOption

## Example Usage

```typescript
import { ToolsOzoneSettingDefsOption } from "@speakeasy-sdks/bluesky/models/components";

let value: ToolsOzoneSettingDefsOption = {
  key: "<id>",
  did: "<id>",
  value: "<value>",
  scope: "personal",
  createdBy: "<id>",
  lastUpdatedBy: "<id>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `key`                                                                                         | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `did`                                                                                         | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `value`                                                                                       | *any*                                                                                         | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `managerRole`                                                                                 | [components.ManagerRole](../../models/components/managerrole.md)                              | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `scope`                                                                                       | [components.Scope](../../models/components/scope.md)                                          | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdBy`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `lastUpdatedBy`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |