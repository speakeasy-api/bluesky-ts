# AppBskyEmbedRecordWithMediaView

## Example Usage

```typescript
import { AppBskyEmbedRecordWithMediaView } from "@speakeasy-sdks/bluesky/models/components";

let value: AppBskyEmbedRecordWithMediaView = {
  record: {
    record: {
      uri: "https://immediate-developmental.biz/",
      notFound: true,
    },
  },
  media: {
    external: {
      uri: "https://weary-cinder.org",
      title: "<value>",
      description: "whereas madly phooey exploration joyously gadzooks",
    },
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `record`                                                                               | [components.AppBskyEmbedRecordView](../../models/components/appbskyembedrecordview.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `media`                                                                                | *components.Media*                                                                     | :heavy_check_mark:                                                                     | N/A                                                                                    |