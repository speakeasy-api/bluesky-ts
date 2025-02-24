# AppBskyGraphDefsListView

## Example Usage

```typescript
import { AppBskyGraphDefsListView } from "@speakeasy-sdks/bluesky/models/components";

let value: AppBskyGraphDefsListView = {
  uri: "https://cheerful-outlaw.org",
  cid: "<id>",
  creator: {
    did: "<id>",
    handle: "<value>",
  },
  name: "<value>",
  purpose: "<value>",
  indexedAt: new Date("2025-12-18T17:26:12.157Z"),
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `uri`                                                                                                    | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `cid`                                                                                                    | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `creator`                                                                                                | [components.AppBskyActorDefsProfileView](../../models/components/appbskyactordefsprofileview.md)         | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `name`                                                                                                   | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `purpose`                                                                                                | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `description`                                                                                            | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `descriptionFacets`                                                                                      | [components.AppBskyRichtextFacet](../../models/components/appbskyrichtextfacet.md)[]                     | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `avatar`                                                                                                 | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `listItemCount`                                                                                          | *number*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `labels`                                                                                                 | [components.ComAtprotoLabelDefsLabel](../../models/components/comatprotolabeldefslabel.md)[]             | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `viewer`                                                                                                 | [components.AppBskyGraphDefsListViewerState](../../models/components/appbskygraphdefslistviewerstate.md) | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `indexedAt`                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)            | :heavy_check_mark:                                                                                       | N/A                                                                                                      |