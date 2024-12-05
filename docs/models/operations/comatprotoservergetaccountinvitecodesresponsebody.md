# ComAtprotoServerGetAccountInviteCodesResponseBody

OK

## Example Usage

```typescript
import { ComAtprotoServerGetAccountInviteCodesResponseBody } from "bluesky/models/operations";

let value: ComAtprotoServerGetAccountInviteCodesResponseBody = {
  codes: [
    {
      code: "<value>",
      available: 490305,
      disabled: false,
      forAccount: "<value>",
      createdBy: "<value>",
      createdAt: new Date("2024-12-20T09:26:05.215Z"),
      uses: [
        {
          usedBy: "<id>",
          usedAt: new Date("2022-03-13T13:45:42.713Z"),
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