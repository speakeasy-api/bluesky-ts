# ToolsOzoneSetQuerySetsResponseBody

OK

## Example Usage

```typescript
import { ToolsOzoneSetQuerySetsResponseBody } from "bluesky/models/operations";

let value: ToolsOzoneSetQuerySetsResponseBody = {
  sets: [
    {
      name: "<value>",
      setSize: 279068,
      createdAt: new Date("2022-08-18T21:15:45.632Z"),
      updatedAt: new Date("2022-05-07T19:27:28.258Z"),
    },
  ],
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `sets`                                                                                       | [components.ToolsOzoneSetDefsSetView](../../models/components/toolsozonesetdefssetview.md)[] | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `cursor`                                                                                     | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |