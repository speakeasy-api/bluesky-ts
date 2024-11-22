# ComAtprotoServerDefsInviteCode

## Example Usage

```typescript
import { ComAtprotoServerDefsInviteCode } from "bluesky/models/components";

let value: ComAtprotoServerDefsInviteCode = {
  code: "<value>",
  available: 516124,
  disabled: false,
  forAccount: "<value>",
  createdBy: "<value>",
  createdAt: new Date("2022-08-29T23:13:04.327Z"),
  uses: [
    {
      usedBy: "<id>",
      usedAt: new Date("2022-10-28T15:04:27.098Z"),
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