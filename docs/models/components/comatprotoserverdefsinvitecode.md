# ComAtprotoServerDefsInviteCode

## Example Usage

```typescript
import { ComAtprotoServerDefsInviteCode } from "bluesky/models/components";

let value: ComAtprotoServerDefsInviteCode = {
  code: "<value>",
  available: 712893,
  disabled: false,
  forAccount: "<value>",
  createdBy: "<value>",
  createdAt: new Date("2024-06-29T04:50:59.216Z"),
  uses: [
    {
      usedBy: "<id>",
      usedAt: new Date("2022-03-05T11:14:44.230Z"),
    },
  ],
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                         | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `available`                                                                                                    | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `disabled`                                                                                                     | *boolean*                                                                                                      | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `forAccount`                                                                                                   | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `createdBy`                                                                                                    | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `createdAt`                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                  | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `uses`                                                                                                         | [components.ComAtprotoServerDefsInviteCodeUse](../../models/components/comatprotoserverdefsinvitecodeuse.md)[] | :heavy_check_mark:                                                                                             | N/A                                                                                                            |