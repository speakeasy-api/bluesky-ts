# ToolsOzoneSetGetValuesResponse

## Example Usage

```typescript
import { ToolsOzoneSetGetValuesResponse } from "@speakeasy-sdks/bluesky/models/operations";

let value: ToolsOzoneSetGetValuesResponse = {
  result: {
    set: {
      name: "<value>",
      setSize: 498953,
      createdAt: new Date("2025-06-19T02:32:34.391Z"),
      updatedAt: new Date("2023-05-11T12:11:29.237Z"),
    },
    values: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                       | [operations.ToolsOzoneSetGetValuesResponseBody](../../models/operations/toolsozonesetgetvaluesresponsebody.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |