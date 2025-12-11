# ToolsOzoneSetQuerySetsResponseBody

OK

## Example Usage

```typescript
import { ToolsOzoneSetQuerySetsResponseBody } from "@speakeasy-sdks/bluesky/models/operations";

let value: ToolsOzoneSetQuerySetsResponseBody = {
  sets: [
    {
      name: "<value>",
      setSize: 613228,
      createdAt: new Date("2025-10-11T18:51:48.488Z"),
      updatedAt: new Date("2023-11-02T20:18:38.716Z"),
    },
  ],
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `sets`                                                                                       | [components.ToolsOzoneSetDefsSetView](../../models/components/toolsozonesetdefssetview.md)[] | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `cursor`                                                                                     | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |