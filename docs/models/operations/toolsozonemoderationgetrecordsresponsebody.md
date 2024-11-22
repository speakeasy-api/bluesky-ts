# ToolsOzoneModerationGetRecordsResponseBody

OK

## Example Usage

```typescript
import { ToolsOzoneModerationGetRecordsResponseBody } from "bluesky/models/operations";

let value: ToolsOzoneModerationGetRecordsResponseBody = {
  records: [
    {
      uri: "https://worthy-video.org",
      cid: "<id>",
      value: "<value>",
      blobs: [
        {
          cid: "<id>",
          mimeType: "<value>",
          size: 296556,
          createdAt: new Date("2024-12-23T05:51:49.489Z"),
        },
      ],
      indexedAt: new Date("2022-10-01T08:44:41.136Z"),
      moderation: {},
      repo: {
        did: "<id>",
        handle: "<value>",
        relatedRecords: [
          "<value>",
        ],
        indexedAt: new Date("2022-04-27T01:45:19.792Z"),
        moderation: {},
      },
    },
  ],
};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `records`              | *operations.Records*[] | :heavy_check_mark:     | N/A                    |