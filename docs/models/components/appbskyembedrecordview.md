# AppBskyEmbedRecordView

## Example Usage

```typescript
import { AppBskyEmbedRecordView } from "@speakeasy-sdks/bluesky/models/components";

let value: AppBskyEmbedRecordView = {
  record: {
    uri: "https://possible-disconnection.com",
    cid: "<id>",
    did: "<id>",
    creator: {
      did: "<id>",
      handle: "<value>",
    },
    displayName: "Jeanie.Bauch91",
    indexedAt: new Date("2024-01-07T23:48:39.193Z"),
  },
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `record`             | *components.RecordT* | :heavy_check_mark:   | N/A                  |