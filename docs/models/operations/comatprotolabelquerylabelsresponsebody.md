# ComAtprotoLabelQueryLabelsResponseBody

OK

## Example Usage

```typescript
import { ComAtprotoLabelQueryLabelsResponseBody } from "bluesky/models/operations";

let value: ComAtprotoLabelQueryLabelsResponseBody = {
  labels: [
    {
      src: "<id>",
      uri: "https://wee-ravioli.biz/",
      val: "<value>",
      cts: new Date("2022-08-22T18:57:29.709Z"),
    },
  ],
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `cursor`                                                                                     | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `labels`                                                                                     | [components.ComAtprotoLabelDefsLabel](../../models/components/comatprotolabeldefslabel.md)[] | :heavy_check_mark:                                                                           | N/A                                                                                          |