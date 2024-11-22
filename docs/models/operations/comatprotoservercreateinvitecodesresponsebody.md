# ComAtprotoServerCreateInviteCodesResponseBody

OK

## Example Usage

```typescript
import { ComAtprotoServerCreateInviteCodesResponseBody } from "bluesky/models/operations";

let value: ComAtprotoServerCreateInviteCodesResponseBody = {
  codes: [
    {
      account: "04210707",
      codes: [
        "<value>",
      ],
    },
  ],
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `codes`                                                                                                                                | [components.ComAtprotoServerCreateInviteCodesAccountCodes](../../models/components/comatprotoservercreateinvitecodesaccountcodes.md)[] | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |