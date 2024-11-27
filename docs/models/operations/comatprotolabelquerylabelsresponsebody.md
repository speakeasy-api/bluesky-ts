# ComAtprotoLabelQueryLabelsResponseBody

OK

## Example Usage

```typescript
import { ComAtprotoLabelQueryLabelsResponseBody } from "bluesky/models/operations";

let value: ComAtprotoLabelQueryLabelsResponseBody = {
  labels: [
    {
      src: "<id>",
      uri: "https://bouncy-marketplace.name",
      val: "<value>",
      cts: new Date("2024-11-20T06:46:28.205Z"),
    },
  ],
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `cursor`                                                                                     | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `labels`                                                                                     | [components.ComAtprotoLabelDefsLabel](../../models/components/comatprotolabeldefslabel.md)[] | :heavy_check_mark:                                                                           | N/A                                                                                          |