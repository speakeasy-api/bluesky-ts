# ToolsOzoneSetQuerySetsResponseBody

OK

## Example Usage

```typescript
import { ToolsOzoneSetQuerySetsResponseBody } from "bluesky/models/operations";

let value: ToolsOzoneSetQuerySetsResponseBody = {
  sets: [
    {
      name: "<value>",
      setSize: 967966,
      createdAt: new Date("2024-12-25T20:43:06.136Z"),
      updatedAt: new Date("2023-05-11T04:43:03.147Z"),
    },
  ],
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `sets`                                                                                       | [components.ToolsOzoneSetDefsSetView](../../models/components/toolsozonesetdefssetview.md)[] | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `cursor`                                                                                     | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |