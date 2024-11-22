# ComAtprotoServerCheckAccountStatusResponseBody

OK

## Example Usage

```typescript
import { ComAtprotoServerCheckAccountStatusResponseBody } from "bluesky/models/operations";

let value: ComAtprotoServerCheckAccountStatusResponseBody = {
  activated: false,
  validDid: false,
  repoCommit: "<id>",
  repoRev: "<value>",
  repoBlocks: 639473,
  indexedRecords: 368584,
  privateStateValues: 136900,
  expectedBlobs: 822118,
  importedBlobs: 189848,
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `activated`          | *boolean*            | :heavy_check_mark:   | N/A                  |
| `validDid`           | *boolean*            | :heavy_check_mark:   | N/A                  |
| `repoCommit`         | *string*             | :heavy_check_mark:   | N/A                  |
| `repoRev`            | *string*             | :heavy_check_mark:   | N/A                  |
| `repoBlocks`         | *number*             | :heavy_check_mark:   | N/A                  |
| `indexedRecords`     | *number*             | :heavy_check_mark:   | N/A                  |
| `privateStateValues` | *number*             | :heavy_check_mark:   | N/A                  |
| `expectedBlobs`      | *number*             | :heavy_check_mark:   | N/A                  |
| `importedBlobs`      | *number*             | :heavy_check_mark:   | N/A                  |