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
      indexedAt: new Date("2023-08-29T01:52:01.164Z"),
      moderation: {},
    },
  ],
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `repos`              | *operations.Repos*[] | :heavy_check_mark:   | N/A                  |