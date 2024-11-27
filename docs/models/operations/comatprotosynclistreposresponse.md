# ComAtprotoSyncListReposResponse

## Example Usage

```typescript
import { ComAtprotoSyncListReposResponse } from "bluesky/models/operations";

let value: ComAtprotoSyncListReposResponse = {
  result: {
    repos: [
      {
        did: "<id>",
        head: "<id>",
        rev: "<value>",
      },
    ],
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                         | [operations.ComAtprotoSyncListReposResponseBody](../../models/operations/comatprotosynclistreposresponsebody.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |