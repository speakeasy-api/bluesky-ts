# AppBskyEmbedRecordView

## Example Usage

```typescript
import { AppBskyEmbedRecordView } from "bluesky/models/components";

let value: AppBskyEmbedRecordView = {
  record: {
    uri: "https://scaly-approach.org/",
    cid: "<id>",
    author: {
      did: "<id>",
      handle: "<value>",
    },
    value: "<value>",
    indexedAt: new Date("2023-07-25T00:13:17.699Z"),
  },
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `record`             | *components.RecordT* | :heavy_check_mark:   | N/A                  |