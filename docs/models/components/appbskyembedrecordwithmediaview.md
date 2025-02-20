# AppBskyEmbedRecordWithMediaView

## Example Usage

```typescript
import { AppBskyEmbedRecordWithMediaView } from "@speakeasy-sdks/bluesky/models/components";

let value: AppBskyEmbedRecordWithMediaView = {
  record: {
    record: {
      uri: "https://crooked-cd.org",
      cid: "<id>",
      record: "<value>",
      creator: {
        did: "<id>",
        handle: "<value>",
      },
      indexedAt: new Date("2023-11-02T01:04:07.129Z"),
    },
  },
  media: {
    images: [
      {
        thumb: "https://charming-divine.org",
        fullsize: "https://miserly-grouper.net",
        alt: "<value>",
      },
    ],
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `record`                                                                               | [components.AppBskyEmbedRecordView](../../models/components/appbskyembedrecordview.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `media`                                                                                | *components.Media*                                                                     | :heavy_check_mark:                                                                     | N/A                                                                                    |