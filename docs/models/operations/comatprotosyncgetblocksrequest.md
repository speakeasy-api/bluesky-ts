# ComAtprotoSyncGetBlocksRequest

## Example Usage

```typescript
import { ComAtprotoSyncGetBlocksRequest } from "@speakeasy-api/bluesky/models/operations";

let value: ComAtprotoSyncGetBlocksRequest = {
  did: "<id>",
  cids: [
    "<id>",
  ],
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `did`                | *string*             | :heavy_check_mark:   | The DID of the repo. |
| `cids`               | *string*[]           | :heavy_check_mark:   | N/A                  |