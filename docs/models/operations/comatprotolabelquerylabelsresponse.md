# ComAtprotoLabelQueryLabelsResponse

## Example Usage

```typescript
import { ComAtprotoLabelQueryLabelsResponse } from "@speakeasy-sdks/bluesky/models/operations";

let value: ComAtprotoLabelQueryLabelsResponse = {
  result: {
    labels: [
      {
        src: "<id>",
        uri: "https://critical-mainstream.info",
        val: "<value>",
        cts: new Date("2024-04-02T03:55:29.127Z"),
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                               | [operations.ComAtprotoLabelQueryLabelsResponseBody](../../models/operations/comatprotolabelquerylabelsresponsebody.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |