# ToolsOzoneModerationSearchReposResponse

## Example Usage

```typescript
import { ToolsOzoneModerationSearchReposResponse } from "bluesky/models/operations";

let value: ToolsOzoneModerationSearchReposResponse = {
  result: {
    repos: [
      {
        did: "<id>",
        handle: "<value>",
        relatedRecords: [
          "<value>",
        ],
        indexedAt: new Date("2023-08-05T11:15:03.211Z"),
        moderation: {},
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                                         | [operations.ToolsOzoneModerationSearchReposResponseBody](../../models/operations/toolsozonemoderationsearchreposresponsebody.md) | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |