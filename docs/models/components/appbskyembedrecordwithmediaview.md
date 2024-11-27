# AppBskyEmbedRecordWithMediaView

## Example Usage

```typescript
import { AppBskyEmbedRecordWithMediaView } from "bluesky/models/components";

let value: AppBskyEmbedRecordWithMediaView = {
  record: {
    record: {
      uri: "https://lavish-retrospectivity.biz/",
      cid: "<id>",
      record: "<value>",
      creator: {
        did: "<id>",
        handle: "<value>",
      },
      indexedAt: new Date("2023-09-13T16:15:37.701Z"),
    },
  },
  media: {
    images: [
      {
        thumb: "https://clear-formation.com/",
        fullsize: "https://ragged-guide.com/",
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