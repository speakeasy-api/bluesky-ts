# ToolsOzoneModerationGetRecordsResponse

OK

## Example Usage

```typescript
import { ToolsOzoneModerationGetRecordsResponse } from "@speakeasy-sdks/bluesky/models/operations";

let value: ToolsOzoneModerationGetRecordsResponse = {
  records: [
    {
      uri: "https://cooperative-travel.biz",
      cid: "<id>",
      value: "<value>",
      blobs: [],
      indexedAt: new Date("2024-08-01T10:50:46.380Z"),
      moderation: {},
      repo: {
        did: "<id>",
        handle: "<value>",
        relatedRecords: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
        indexedAt: new Date("2024-06-24T11:12:34.140Z"),
        moderation: {},
      },
    },
  ],
};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `records`              | *operations.RecordT*[] | :heavy_check_mark:     | N/A                    |