# ToolsOzoneModerationGetReposResponseBody

OK

## Example Usage

```typescript
import { ToolsOzoneModerationGetReposResponseBody } from "bluesky/models/operations";

let value: ToolsOzoneModerationGetReposResponseBody = {
  repos: [
    {
      did: "<id>",
      handle: "<value>",
      relatedRecords: [
        "<value>",
      ],
      indexedAt: new Date("2024-01-26T23:39:52.001Z"),
      moderation: {},
    },
  ],
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `repos`              | *operations.Repos*[] | :heavy_check_mark:   | N/A                  |