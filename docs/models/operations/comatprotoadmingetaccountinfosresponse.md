# ComAtprotoAdminGetAccountInfosResponse

OK

## Example Usage

```typescript
import { ComAtprotoAdminGetAccountInfosResponse } from "@speakeasy-sdks/bluesky/models/operations";

let value: ComAtprotoAdminGetAccountInfosResponse = {
  infos: [
    {
      did: "<id>",
      handle: "<value>",
      indexedAt: new Date("2025-11-16T21:47:32.872Z"),
    },
  ],
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `infos`                                                                                                  | [components.ComAtprotoAdminDefsAccountView](../../models/components/comatprotoadmindefsaccountview.md)[] | :heavy_check_mark:                                                                                       | N/A                                                                                                      |