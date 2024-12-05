# ComAtprotoSyncGetRecordRequest

## Example Usage

```typescript
import { ComAtprotoSyncGetRecordRequest } from "@speakeasy-api/bluesky/models/operations";

let value: ComAtprotoSyncGetRecordRequest = {
  did: "<id>",
  collection: "<id>",
  rkey: "<value>",
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `did`                | *string*             | :heavy_check_mark:   | The DID of the repo. |
| `collection`         | *string*             | :heavy_check_mark:   | N/A                  |
| `rkey`               | *string*             | :heavy_check_mark:   | Record Key           |