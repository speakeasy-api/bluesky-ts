# ToolsOzoneSetGetValuesResponseBody

OK

## Example Usage

```typescript
import { ToolsOzoneSetGetValuesResponseBody } from "bluesky/models/operations";

let value: ToolsOzoneSetGetValuesResponseBody = {
  set: {
    name: "<value>",
    setSize: 342611,
    createdAt: new Date("2023-11-13T23:09:56.778Z"),
    updatedAt: new Date("2022-11-02T20:36:11.917Z"),
  },
  values: [
    "<value>",
  ],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `set`                                                                                      | [components.ToolsOzoneSetDefsSetView](../../models/components/toolsozonesetdefssetview.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `values`                                                                                   | *string*[]                                                                                 | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `cursor`                                                                                   | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |