# ComAtprotoRepoListRecordsRequest

## Example Usage

```typescript
import { ComAtprotoRepoListRecordsRequest } from "@speakeasy-api/bluesky/models/operations";

let value: ComAtprotoRepoListRecordsRequest = {
  repo: "<value>",
  collection: "<id>",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `repo`                                             | *string*                                           | :heavy_check_mark:                                 | The handle or DID of the repo.                     |
| `collection`                                       | *string*                                           | :heavy_check_mark:                                 | The NSID of the record type.                       |
| `limit`                                            | *number*                                           | :heavy_minus_sign:                                 | The number of records to return.                   |
| `cursor`                                           | *string*                                           | :heavy_minus_sign:                                 | N/A                                                |
| `reverse`                                          | *boolean*                                          | :heavy_minus_sign:                                 | Flag to reverse the order of the returned records. |