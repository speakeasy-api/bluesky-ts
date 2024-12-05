# ComAtprotoSyncGetBlobRequest

## Example Usage

```typescript
import { ComAtprotoSyncGetBlobRequest } from "@speakeasy-api/bluesky/models/operations";

let value: ComAtprotoSyncGetBlobRequest = {
  did: "<id>",
  cid: "<id>",
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `did`                        | *string*                     | :heavy_check_mark:           | The DID of the account.      |
| `cid`                        | *string*                     | :heavy_check_mark:           | The CID of the blob to fetch |