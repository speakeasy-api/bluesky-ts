# AppBskyGraphDefsListViewBasic

## Example Usage

```typescript
import { AppBskyGraphDefsListViewBasic } from "@speakeasy-sdks/bluesky/models/components";

let value: AppBskyGraphDefsListViewBasic = {
  uri: "https://best-nougat.info",
  cid: "<id>",
  name: "<value>",
  purpose: "<value>",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `uri`                                                                                                    | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `cid`                                                                                                    | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `name`                                                                                                   | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `purpose`                                                                                                | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `avatar`                                                                                                 | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `listItemCount`                                                                                          | *number*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `labels`                                                                                                 | [components.ComAtprotoLabelDefsLabel](../../models/components/comatprotolabeldefslabel.md)[]             | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `viewer`                                                                                                 | [components.AppBskyGraphDefsListViewerState](../../models/components/appbskygraphdefslistviewerstate.md) | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `indexedAt`                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)            | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |