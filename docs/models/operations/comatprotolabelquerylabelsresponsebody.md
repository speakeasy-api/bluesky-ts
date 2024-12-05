# ComAtprotoLabelQueryLabelsResponseBody

OK

## Example Usage

```typescript
import { ComAtprotoLabelQueryLabelsResponseBody } from "@speakeasy-api/bluesky/models/operations";

let value: ComAtprotoLabelQueryLabelsResponseBody = {
  labels: [
    {
      src: "<id>",
      uri: "https://simplistic-teriyaki.com",
      val: "<value>",
      cts: new Date("2023-08-29T04:52:14.624Z"),
    },
  ],
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `cursor`                                                                                     | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `labels`                                                                                     | [components.ComAtprotoLabelDefsLabel](../../models/components/comatprotolabeldefslabel.md)[] | :heavy_check_mark:                                                                           | N/A                                                                                          |