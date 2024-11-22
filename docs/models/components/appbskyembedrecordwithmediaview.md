# AppBskyEmbedRecordWithMediaView

## Example Usage

```typescript
import { AppBskyEmbedRecordWithMediaView } from "bluesky/models/components";

let value: AppBskyEmbedRecordWithMediaView = {
  record: {
    record: {
      uri: "https://international-pecan.org/",
      cid: "<id>",
      creator: {
        did: "<id>",
        handle: "<value>",
      },
      name: "<value>",
      purpose: "<value>",
      indexedAt: new Date("2023-06-05T22:56:35.057Z"),
    },
  },
  media: {
    external: {
      uri: "https://afraid-jazz.biz/",
      title: "<value>",
      description:
        "infinite stranger before cooperative lieu adumbrate till as about",
    },
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `record`                                                                               | [components.AppBskyEmbedRecordView](../../models/components/appbskyembedrecordview.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `media`                                                                                | *components.Media*                                                                     | :heavy_check_mark:                                                                     | N/A                                                                                    |