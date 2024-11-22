# AppBskyEmbedRecordView

## Example Usage

```typescript
import { AppBskyEmbedRecordView } from "bluesky/models/components";

let value: AppBskyEmbedRecordView = {
  record: {
    uri: "https://triangular-husband.info/",
    cid: "<id>",
    creator: {
      did: "<id>",
      handle: "<value>",
    },
    name: "<value>",
    purpose: "<value>",
    indexedAt: new Date("2023-05-07T09:54:10.374Z"),
  },
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `record`             | *components.RecordT* | :heavy_check_mark:   | N/A                  |