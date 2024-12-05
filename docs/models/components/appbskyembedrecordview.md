# AppBskyEmbedRecordView

## Example Usage

```typescript
import { AppBskyEmbedRecordView } from "bluesky/models/components";

let value: AppBskyEmbedRecordView = {
  record: {
    uri: "https://shabby-singing.biz/",
    cid: "<id>",
    creator: {
      did: "<id>",
      handle: "<value>",
    },
    name: "<value>",
    purpose: "<value>",
    indexedAt: new Date("2024-12-03T07:19:37.207Z"),
  },
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `record`             | *components.RecordT* | :heavy_check_mark:   | N/A                  |