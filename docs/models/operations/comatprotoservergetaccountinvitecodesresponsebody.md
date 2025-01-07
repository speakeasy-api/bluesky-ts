# ComAtprotoServerGetAccountInviteCodesResponseBody

OK

## Example Usage

```typescript
import { ComAtprotoServerGetAccountInviteCodesResponseBody } from "@speakeasy-api/bluesky/models/operations";

let value: ComAtprotoServerGetAccountInviteCodesResponseBody = {
  codes: [
    {
      code: "<value>",
      available: 490305,
      disabled: false,
      forAccount: "<value>",
      createdBy: "<value>",
      createdAt: new Date("2025-12-20T09:26:05.215Z"),
      uses: [
        {
          usedBy: "<id>",
          usedAt: new Date("2023-03-13T13:45:42.713Z"),
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