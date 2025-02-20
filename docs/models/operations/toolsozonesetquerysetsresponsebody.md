# ToolsOzoneSetQuerySetsResponseBody

OK

## Example Usage

```typescript
import { ToolsOzoneSetQuerySetsResponseBody } from "@speakeasy-sdks/bluesky/models/operations";

let value: ToolsOzoneSetQuerySetsResponseBody = {
  sets: [
    {
      name: "<value>",
      setSize: 372679,
      createdAt: new Date("2024-08-04T11:15:03.211Z"),
      updatedAt: new Date("2025-10-07T15:13:11.606Z"),
    },
  ],
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `sets`                                                                                       | [components.ToolsOzoneSetDefsSetView](../../models/components/toolsozonesetdefssetview.md)[] | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `cursor`                                                                                     | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |