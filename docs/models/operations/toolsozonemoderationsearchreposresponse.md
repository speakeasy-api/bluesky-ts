# ToolsOzoneModerationSearchReposResponse

## Example Usage

```typescript
import { ToolsOzoneModerationSearchReposResponse } from "@speakeasy-sdks/bluesky/models/operations";

let value: ToolsOzoneModerationSearchReposResponse = {
  result: {
    repos: [
      {
        did: "<id>",
        handle: "<value>",
        relatedRecords: [
          "<value 1>",
          "<value 2>",
        ],
        indexedAt: new Date("2025-03-20T17:58:57.025Z"),
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