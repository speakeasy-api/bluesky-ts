# ComAtprotoRepoGetRecordRequest

## Example Usage

```typescript
import { ComAtprotoRepoGetRecordRequest } from "@speakeasy-sdks/bluesky/models/operations";

let value: ComAtprotoRepoGetRecordRequest = {
  repo: "<value>",
  collection: "<id>",
  rkey: "<value>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `repo`                                                                                       | *string*                                                                                     | :heavy_check_mark:                                                                           | The handle or DID of the repo.                                                               |
| `collection`                                                                                 | *string*                                                                                     | :heavy_check_mark:                                                                           | The NSID of the record collection.                                                           |
| `rkey`                                                                                       | *string*                                                                                     | :heavy_check_mark:                                                                           | The Record Key.                                                                              |
| `cid`                                                                                        | *string*                                                                                     | :heavy_minus_sign:                                                                           | The CID of the version of the record. If not specified, then return the most recent version. |