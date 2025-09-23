# ComAtprotoServerCreateInviteCodesResponse

OK

## Example Usage

```typescript
import { ComAtprotoServerCreateInviteCodesResponse } from "@speakeasy-sdks/bluesky/models/operations";

let value: ComAtprotoServerCreateInviteCodesResponse = {
  codes: [
    {
      account: "36736196",
      codes: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
    },
  ],
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `codes`                                                                                                                                | [components.ComAtprotoServerCreateInviteCodesAccountCodes](../../models/components/comatprotoservercreateinvitecodesaccountcodes.md)[] | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |