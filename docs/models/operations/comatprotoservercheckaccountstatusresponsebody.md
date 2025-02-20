# ComAtprotoServerCheckAccountStatusResponseBody

OK

## Example Usage

```typescript
import { ComAtprotoServerCheckAccountStatusResponseBody } from "@speakeasy-sdks/bluesky/models/operations";

let value: ComAtprotoServerCheckAccountStatusResponseBody = {
  activated: false,
  validDid: false,
  repoCommit: "<id>",
  repoRev: "<value>",
  repoBlocks: 457223,
  indexedRecords: 951875,
  privateStateValues: 575751,
  expectedBlobs: 820767,
  importedBlobs: 908844,
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