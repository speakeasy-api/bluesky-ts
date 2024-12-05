# ComAtprotoRepoDescribeRepoResponseBody

OK

## Example Usage

```typescript
import { ComAtprotoRepoDescribeRepoResponseBody } from "@speakeasy-api/bluesky/models/operations";

let value: ComAtprotoRepoDescribeRepoResponseBody = {
  handle: "<value>",
  did: "<id>",
  didDoc: "<value>",
  collections: [
    "<id>",
  ],
  handleIsCorrect: false,
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