# ComAtprotoLabelQueryLabelsResponse

## Example Usage

```typescript
import { ComAtprotoLabelQueryLabelsResponse } from "bluesky/models/operations";

let value: ComAtprotoLabelQueryLabelsResponse = {
  result: {
    labels: [
      {
        src: "<id>",
        uri: "https://exalted-breastplate.com/",
        val: "<value>",
        cts: new Date("2024-10-15T18:20:20.936Z"),
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                               | [operations.ComAtprotoLabelQueryLabelsResponseBody](../../models/operations/comatprotolabelquerylabelsresponsebody.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |