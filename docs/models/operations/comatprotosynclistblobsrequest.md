# ComAtprotoSyncListBlobsRequest

## Example Usage

```typescript
import { ComAtprotoSyncListBlobsRequest } from "bluesky/models/operations";

let value: ComAtprotoSyncListBlobsRequest = {
  did: "<id>",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `did`                                              | *string*                                           | :heavy_check_mark:                                 | The DID of the repo.                               |
| `since`                                            | *string*                                           | :heavy_minus_sign:                                 | Optional revision of the repo to list blobs since. |
| `limit`                                            | *number*                                           | :heavy_minus_sign:                                 | N/A                                                |
| `cursor`                                           | *string*                                           | :heavy_minus_sign:                                 | N/A                                                |