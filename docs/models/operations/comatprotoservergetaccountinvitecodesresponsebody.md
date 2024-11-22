# ComAtprotoServerGetAccountInviteCodesResponseBody

OK

## Example Usage

```typescript
import { ComAtprotoServerGetAccountInviteCodesResponseBody } from "bluesky/models/operations";

let value: ComAtprotoServerGetAccountInviteCodesResponseBody = {
  codes: [
    {
      code: "<value>",
      available: 543806,
      disabled: false,
      forAccount: "<value>",
      createdBy: "<value>",
      createdAt: new Date("2023-05-16T18:35:52.926Z"),
      uses: [
        {
          usedBy: "<id>",
          usedAt: new Date("2024-08-24T17:13:02.117Z"),
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