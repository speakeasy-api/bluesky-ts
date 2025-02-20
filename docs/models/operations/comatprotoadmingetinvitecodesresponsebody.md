# ComAtprotoAdminGetInviteCodesResponseBody

OK

## Example Usage

```typescript
import { ComAtprotoAdminGetInviteCodesResponseBody } from "@speakeasy-sdks/bluesky/models/operations";

let value: ComAtprotoAdminGetInviteCodesResponseBody = {
  codes: [
    {
      code: "<value>",
      available: 58029,
      disabled: false,
      forAccount: "<value>",
      createdBy: "<value>",
      createdAt: new Date("2024-04-21T02:53:41.707Z"),
      uses: [
        {
          usedBy: "<id>",
          usedAt: new Date("2023-12-08T17:28:43.968Z"),
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