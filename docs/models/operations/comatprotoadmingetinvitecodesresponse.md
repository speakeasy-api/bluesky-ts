# ComAtprotoAdminGetInviteCodesResponse

## Example Usage

```typescript
import { ComAtprotoAdminGetInviteCodesResponse } from "@speakeasy-sdks/bluesky/models/operations";

let value: ComAtprotoAdminGetInviteCodesResponse = {
  result: {
    codes: [
      {
        code: "<value>",
        available: 696344,
        disabled: false,
        forAccount: "<value>",
        createdBy: "<value>",
        createdAt: new Date("2024-02-19T00:23:03.771Z"),
        uses: [
          {
            usedBy: "<id>",
            usedAt: new Date("2023-07-16T20:17:42.484Z"),
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