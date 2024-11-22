# ComAtprotoAdminGetInviteCodesResponseBody

OK

## Example Usage

```typescript
import { ComAtprotoAdminGetInviteCodesResponseBody } from "bluesky/models/operations";

let value: ComAtprotoAdminGetInviteCodesResponseBody = {
  codes: [
    {
      code: "<value>",
      available: 928082,
      disabled: false,
      forAccount: "<value>",
      createdBy: "<value>",
      createdAt: new Date("2024-02-12T00:54:59.142Z"),
      uses: [
        {
          usedBy: "<id>",
          usedAt: new Date("2022-02-04T21:29:28.328Z"),
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                                 | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `codes`                                                                                                  | [components.ComAtprotoServerDefsInviteCode](../../models/components/comatprotoserverdefsinvitecode.md)[] | :heavy_check_mark:                                                                                       | N/A                                                                                                      |