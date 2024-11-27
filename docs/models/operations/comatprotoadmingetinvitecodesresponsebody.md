# ComAtprotoAdminGetInviteCodesResponseBody

OK

## Example Usage

```typescript
import { ComAtprotoAdminGetInviteCodesResponseBody } from "bluesky/models/operations";

let value: ComAtprotoAdminGetInviteCodesResponseBody = {
  codes: [
    {
      code: "<value>",
      available: 434417,
      disabled: false,
      forAccount: "<value>",
      createdBy: "<value>",
      createdAt: new Date("2022-12-08T17:28:43.968Z"),
      uses: [
        {
          usedBy: "<id>",
          usedAt: new Date("2024-02-03T04:37:08.867Z"),
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