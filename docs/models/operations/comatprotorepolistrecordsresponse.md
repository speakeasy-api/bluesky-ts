# ComAtprotoRepoListRecordsResponse

## Example Usage

```typescript
import { ComAtprotoRepoListRecordsResponse } from "bluesky/models/operations";

let value: ComAtprotoRepoListRecordsResponse = {
  result: {
    records: [
      {
        uri: "https://awesome-quinoa.com/",
        cid: "<id>",
        value: "<value>",
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                             | [operations.ComAtprotoRepoListRecordsResponseBody](../../models/operations/comatprotorepolistrecordsresponsebody.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |