# ToolsOzoneSetGetValuesResponseBody

OK

## Example Usage

```typescript
import { ToolsOzoneSetGetValuesResponseBody } from "@speakeasy-sdks/bluesky/models/operations";

let value: ToolsOzoneSetGetValuesResponseBody = {
  set: {
    name: "<value>",
    setSize: 498953,
    createdAt: new Date("2025-06-19T02:32:34.391Z"),
    updatedAt: new Date("2023-05-11T12:11:29.237Z"),
  },
  values: [],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `set`                                                                                      | [components.ToolsOzoneSetDefsSetView](../../models/components/toolsozonesetdefssetview.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `values`                                                                                   | *string*[]                                                                                 | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `cursor`                                                                                   | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |