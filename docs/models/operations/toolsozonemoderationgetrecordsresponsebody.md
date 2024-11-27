# ToolsOzoneModerationGetRecordsResponseBody

OK

## Example Usage

```typescript
import { ToolsOzoneModerationGetRecordsResponseBody } from "bluesky/models/operations";

let value: ToolsOzoneModerationGetRecordsResponseBody = {
  records: [
    {
      uri: "https://pertinent-godfather.org/",
      cid: "<id>",
      value: "<value>",
      blobs: [
        {
          cid: "<id>",
          mimeType: "<value>",
          size: 967795,
          createdAt: new Date("2023-08-23T09:15:37.633Z"),
        },
      ],
      indexedAt: new Date("2022-10-29T04:57:33.054Z"),
      moderation: {},
      repo: {
        did: "<id>",
        handle: "<value>",
        relatedRecords: [
          "<value>",
        ],
        indexedAt: new Date("2023-10-12T02:01:44.166Z"),
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