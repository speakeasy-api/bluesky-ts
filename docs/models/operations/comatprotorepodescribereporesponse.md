# ComAtprotoRepoDescribeRepoResponse

OK

## Example Usage

```typescript
import { ComAtprotoRepoDescribeRepoResponse } from "@speakeasy-sdks/bluesky/models/operations";

let value: ComAtprotoRepoDescribeRepoResponse = {
  handle: "<value>",
  did: "<id>",
  didDoc: "<value>",
  collections: [
    "<id 1>",
    "<id 2>",
  ],
  handleIsCorrect: true,
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `handle`                                                           | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `did`                                                              | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `didDoc`                                                           | *any*                                                              | :heavy_check_mark:                                                 | N/A                                                                |
| `collections`                                                      | *string*[]                                                         | :heavy_check_mark:                                                 | N/A                                                                |
| `handleIsCorrect`                                                  | *boolean*                                                          | :heavy_check_mark:                                                 | Indicates if handle is currently valid (resolves bi-directionally) |