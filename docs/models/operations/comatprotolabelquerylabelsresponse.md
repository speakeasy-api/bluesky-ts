# ComAtprotoLabelQueryLabelsResponse

## Example Usage

```typescript
import { ComAtprotoLabelQueryLabelsResponse } from "@speakeasy-api/bluesky/models/operations";

let value: ComAtprotoLabelQueryLabelsResponse = {
  result: {
    labels: [
      {
        src: "<id>",
        uri: "https://whispered-embarrassment.biz",
        val: "<value>",
        cts: new Date("2023-04-20T22:07:54.686Z"),
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                               | [operations.ComAtprotoLabelQueryLabelsResponseBody](../../models/operations/comatprotolabelquerylabelsresponsebody.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |