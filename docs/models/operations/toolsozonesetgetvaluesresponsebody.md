# ToolsOzoneSetGetValuesResponseBody

OK

## Example Usage

```typescript
import { ToolsOzoneSetGetValuesResponseBody } from "bluesky/models/operations";

let value: ToolsOzoneSetGetValuesResponseBody = {
  set: {
    name: "<value>",
    setSize: 940210,
    createdAt: new Date("2024-04-02T20:07:08.138Z"),
    updatedAt: new Date("2024-02-06T17:37:20.583Z"),
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