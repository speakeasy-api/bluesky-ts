# ToolsOzoneSetGetValuesResponseBody

OK

## Example Usage

```typescript
import { ToolsOzoneSetGetValuesResponseBody } from "bluesky/models/operations";

let value: ToolsOzoneSetGetValuesResponseBody = {
  set: {
    name: "<value>",
    setSize: 922112,
    createdAt: new Date("2022-04-09T02:03:52.245Z"),
    updatedAt: new Date("2023-03-21T21:54:24.613Z"),
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