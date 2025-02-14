# ToolsOzoneModerationGetRecordsResponseBody

OK

## Example Usage

```typescript
import { ToolsOzoneModerationGetRecordsResponseBody } from "@speakeasy-api/bluesky/models/operations";

let value: ToolsOzoneModerationGetRecordsResponseBody = {
  records: [
    {
      uri: "https://firm-impact.info",
      cid: "<id>",
      value: "<value>",
      blobs: [
        {
          cid: "<id>",
          mimeType: "<value>",
          size: 248413,
          createdAt: new Date("2024-07-08T10:18:33.697Z"),
        },
      ],
      indexedAt: new Date("2023-12-07T04:15:26.087Z"),
      moderation: {},
      repo: {
        did: "<id>",
        handle: "<value>",
        relatedRecords: [
          "<value>",
        ],
        indexedAt: new Date("2024-02-13T20:18:32.614Z"),
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