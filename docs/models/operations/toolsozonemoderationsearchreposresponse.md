# ToolsOzoneModerationSearchReposResponse

## Example Usage

```typescript
import { ToolsOzoneModerationSearchReposResponse } from "@speakeasy-api/bluesky/models/operations";

let value: ToolsOzoneModerationSearchReposResponse = {
  result: {
    repos: [
      {
        did: "<id>",
        handle: "<value>",
        relatedRecords: [
          "<value>",
        ],
        indexedAt: new Date("2022-01-09T15:23:00.451Z"),
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