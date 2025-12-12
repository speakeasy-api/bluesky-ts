# ComAtprotoAdminGetInviteCodesResponseBody

OK

## Example Usage

```typescript
import { ComAtprotoAdminGetInviteCodesResponseBody } from "@speakeasy-sdks/bluesky/models/operations";

let value: ComAtprotoAdminGetInviteCodesResponseBody = {
  codes: [
    {
      code: "<value>",
      available: 202196,
      disabled: false,
      forAccount: "<value>",
      createdBy: "<value>",
      createdAt: new Date("2024-05-05T18:43:20.817Z"),
      uses: [],
    },
  ],
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                                 | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `codes`                                                                                                  | [components.ComAtprotoServerDefsInviteCode](../../models/components/comatprotoserverdefsinvitecode.md)[] | :heavy_check_mark:                                                                                       | N/A                                                                                                      |