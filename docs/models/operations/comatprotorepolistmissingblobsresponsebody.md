# ComAtprotoRepoListMissingBlobsResponseBody

OK

## Example Usage

```typescript
import { ComAtprotoRepoListMissingBlobsResponseBody } from "@speakeasy-sdks/bluesky/models/operations";

let value: ComAtprotoRepoListMissingBlobsResponseBody = {
  blobs: [
    {
      cid: "<id>",
      recordUri: "https://straight-commercial.com",
    },
  ],
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                                                     | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `blobs`                                                                                                                      | [components.ComAtprotoRepoListMissingBlobsRecordBlob](../../models/components/comatprotorepolistmissingblobsrecordblob.md)[] | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |