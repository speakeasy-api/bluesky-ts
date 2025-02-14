# ComAtprotoAdminGetAccountInfosResponseBody

OK

## Example Usage

```typescript
import { ComAtprotoAdminGetAccountInfosResponseBody } from "@speakeasy-api/bluesky/models/operations";

let value: ComAtprotoAdminGetAccountInfosResponseBody = {
  infos: [
    {
      did: "<id>",
      handle: "<value>",
      indexedAt: new Date("2023-09-07T05:54:51.747Z"),
    },
  ],
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `infos`                                                                                                  | [components.ComAtprotoAdminDefsAccountView](../../models/components/comatprotoadmindefsaccountview.md)[] | :heavy_check_mark:                                                                                       | N/A                                                                                                      |