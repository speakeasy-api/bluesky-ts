# ComAtprotoServerCreateSessionBody

## Example Usage

```typescript
import { ComAtprotoServerCreateSessionBody } from "@speakeasy-api/bluesky/models/operations";

let value: ComAtprotoServerCreateSessionBody = {
  identifier: "<value>",
  password: "qBB2GyzsL7I869G",
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `identifier`                                                                    | *string*                                                                        | :heavy_check_mark:                                                              | Handle or other identifier supported by the server for the authenticating user. |
| `password`                                                                      | *string*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `authFactorToken`                                                               | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |