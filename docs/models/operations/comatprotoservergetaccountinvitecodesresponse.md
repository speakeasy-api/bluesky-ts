# ComAtprotoServerGetAccountInviteCodesResponse

OK

## Example Usage

```typescript
import { ComAtprotoServerGetAccountInviteCodesResponse } from "@speakeasy-sdks/bluesky/models/operations";

let value: ComAtprotoServerGetAccountInviteCodesResponse = {
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
| `codes`                                                                                                  | [components.ComAtprotoServerDefsInviteCode](../../models/components/comatprotoserverdefsinvitecode.md)[] | :heavy_check_mark:                                                                                       | N/A                                                                                                      |