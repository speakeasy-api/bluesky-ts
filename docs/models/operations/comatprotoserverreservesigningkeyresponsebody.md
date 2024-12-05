# ComAtprotoServerReserveSigningKeyResponseBody

OK

## Example Usage

```typescript
import { ComAtprotoServerReserveSigningKeyResponseBody } from "@speakeasy-api/bluesky/models/operations";

let value: ComAtprotoServerReserveSigningKeyResponseBody = {
  signingKey: "<value>",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `signingKey`                                                           | *string*                                                               | :heavy_check_mark:                                                     | The public key for the reserved signing key, in did:key serialization. |