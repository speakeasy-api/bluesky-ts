# ComAtprotoAdminGetAccountInfosResponseBody

OK

## Example Usage

```typescript
import { ComAtprotoAdminGetAccountInfosResponseBody } from "bluesky/models/operations";

let value: ComAtprotoAdminGetAccountInfosResponseBody = {
  infos: [
    {
      did: "<id>",
      handle: "<value>",
      indexedAt: new Date("2022-10-06T18:35:34.427Z"),
    },
  ],
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `infos`                                                                                                  | [components.ComAtprotoAdminDefsAccountView](../../models/components/comatprotoadmindefsaccountview.md)[] | :heavy_check_mark:                                                                                       | N/A                                                                                                      |