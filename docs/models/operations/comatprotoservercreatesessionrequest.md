# ComAtprotoServerCreateSessionRequest

## Example Usage

```typescript
import { ComAtprotoServerCreateSessionRequest } from "@speakeasy-sdks/bluesky/models/operations";

let value: ComAtprotoServerCreateSessionRequest = {
  identifier: "<value>",
  password: "NPZVf6vptNPMTX4",
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `identifier`                                                                    | *string*                                                                        | :heavy_check_mark:                                                              | Handle or other identifier supported by the server for the authenticating user. |
| `password`                                                                      | *string*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `authFactorToken`                                                               | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |