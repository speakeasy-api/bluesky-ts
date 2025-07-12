# AppBskyEmbedVideoView

## Example Usage

```typescript
import { AppBskyEmbedVideoView } from "@speakeasy-sdks/bluesky/models/components";

let value: AppBskyEmbedVideoView = {
  cid: "<id>",
  playlist: "https://paltry-hyphenation.biz/",
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `cid`                                                                                                                            | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `playlist`                                                                                                                       | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `thumbnail`                                                                                                                      | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |
| `alt`                                                                                                                            | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |
| `aspectRatio`                                                                                                                    | [components.AppBskyEmbedDefsAspectRatio](../../models/components/appbskyembeddefsaspectratio.md)                                 | :heavy_minus_sign:                                                                                                               | width:height represents an aspect ratio. It may be approximate, and may not correspond to absolute dimensions in any given unit. |