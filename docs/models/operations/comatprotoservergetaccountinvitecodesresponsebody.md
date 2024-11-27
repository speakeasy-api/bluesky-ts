# ComAtprotoServerGetAccountInviteCodesResponseBody

OK

## Example Usage

```typescript
import { ComAtprotoServerGetAccountInviteCodesResponseBody } from "bluesky/models/operations";

let value: ComAtprotoServerGetAccountInviteCodesResponseBody = {
  codes: [
    {
      code: "<value>",
      available: 62713,
      disabled: false,
      forAccount: "<value>",
      createdBy: "<value>",
      createdAt: new Date("2023-04-10T17:44:39.673Z"),
      uses: [
        {
          usedBy: "<id>",
          usedAt: new Date("2022-10-11T12:25:32.503Z"),
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `codes`                                                                                                  | [components.ComAtprotoServerDefsInviteCode](../../models/components/comatprotoserverdefsinvitecode.md)[] | :heavy_check_mark:                                                                                       | N/A                                                                                                      |