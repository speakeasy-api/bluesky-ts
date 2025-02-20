# ComAtprotoServerRefreshSessionResponseBody

OK

## Example Usage

```typescript
import { ComAtprotoServerRefreshSessionResponseBody } from "@speakeasy-sdks/bluesky/models/operations";

let value: ComAtprotoServerRefreshSessionResponseBody = {
  accessJwt: "<value>",
  refreshJwt: "<value>",
  handle: "<value>",
  did: "<id>",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `accessJwt`                                                                                                        | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `refreshJwt`                                                                                                       | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `handle`                                                                                                           | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `did`                                                                                                              | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `didDoc`                                                                                                           | *any*                                                                                                              | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `active`                                                                                                           | *boolean*                                                                                                          | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `status`                                                                                                           | [operations.ComAtprotoServerRefreshSessionStatus](../../models/operations/comatprotoserverrefreshsessionstatus.md) | :heavy_minus_sign:                                                                                                 | Hosting status of the account. If not specified, then assume 'active'.                                             |