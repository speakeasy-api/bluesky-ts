# ComAtprotoServerCreateAccountResponseBody

Account login session returned on successful account creation.

## Example Usage

```typescript
import { ComAtprotoServerCreateAccountResponseBody } from "@speakeasy-api/bluesky/models/operations";

let value: ComAtprotoServerCreateAccountResponseBody = {
  accessJwt: "<value>",
  refreshJwt: "<value>",
  handle: "<value>",
  did: "<id>",
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `accessJwt`                 | *string*                    | :heavy_check_mark:          | N/A                         |
| `refreshJwt`                | *string*                    | :heavy_check_mark:          | N/A                         |
| `handle`                    | *string*                    | :heavy_check_mark:          | N/A                         |
| `did`                       | *string*                    | :heavy_check_mark:          | The DID of the new account. |
| `didDoc`                    | *any*                       | :heavy_minus_sign:          | N/A                         |