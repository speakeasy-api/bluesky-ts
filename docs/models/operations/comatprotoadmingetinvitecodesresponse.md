# ComAtprotoAdminGetInviteCodesResponse

## Example Usage

```typescript
import { ComAtprotoAdminGetInviteCodesResponse } from "bluesky/models/operations";

let value: ComAtprotoAdminGetInviteCodesResponse = {
  result: {
    codes: [
      {
        code: "<value>",
        available: 377752,
        disabled: false,
        forAccount: "<value>",
        createdBy: "<value>",
        createdAt: new Date("2022-07-16T20:17:42.484Z"),
        uses: [
          {
            usedBy: "<id>",
            usedAt: new Date("2022-01-28T01:08:57.377Z"),
          },
        ],
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                                     | [operations.ComAtprotoAdminGetInviteCodesResponseBody](../../models/operations/comatprotoadmingetinvitecodesresponsebody.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |