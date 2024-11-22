# ComAtprotoRepoDeleteRecordRequestBody

## Example Usage

```typescript
import { ComAtprotoRepoDeleteRecordRequestBody } from "bluesky/models/operations";

let value: ComAtprotoRepoDeleteRecordRequestBody = {
  repo: "<value>",
  collection: "<id>",
  rkey: "<value>",
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `repo`                                                | *string*                                              | :heavy_check_mark:                                    | The handle or DID of the repo (aka, current account). |
| `collection`                                          | *string*                                              | :heavy_check_mark:                                    | The NSID of the record collection.                    |
| `rkey`                                                | *string*                                              | :heavy_check_mark:                                    | The Record Key.                                       |
| `swapRecord`                                          | *string*                                              | :heavy_minus_sign:                                    | Compare and swap with the previous record by CID.     |
| `swapCommit`                                          | *string*                                              | :heavy_minus_sign:                                    | Compare and swap with the previous commit by CID.     |