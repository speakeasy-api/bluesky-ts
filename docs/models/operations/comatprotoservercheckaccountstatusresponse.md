# ComAtprotoServerCheckAccountStatusResponse

OK

## Example Usage

```typescript
import { ComAtprotoServerCheckAccountStatusResponse } from "@speakeasy-sdks/bluesky/models/operations";

let value: ComAtprotoServerCheckAccountStatusResponse = {
  activated: true,
  validDid: true,
  repoCommit: "<id>",
  repoRev: "<value>",
  repoBlocks: 36491,
  indexedRecords: 325697,
  privateStateValues: 679114,
  expectedBlobs: 957109,
  importedBlobs: 888740,
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