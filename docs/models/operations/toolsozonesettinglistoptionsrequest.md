# ToolsOzoneSettingListOptionsRequest

## Example Usage

```typescript
import { ToolsOzoneSettingListOptionsRequest } from "@speakeasy-api/bluesky/models/operations";

let value: ToolsOzoneSettingListOptionsRequest = {};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `limit`                                                                  | *number*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `cursor`                                                                 | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `scope`                                                                  | [operations.QueryParamScope](../../models/operations/queryparamscope.md) | :heavy_minus_sign:                                                       | N/A                                                                      |
| `prefix`                                                                 | *string*                                                                 | :heavy_minus_sign:                                                       | Filter keys by prefix                                                    |
| `keys`                                                                   | *string*[]                                                               | :heavy_minus_sign:                                                       | Filter for only the specified keys. Ignored if prefix is provided        |