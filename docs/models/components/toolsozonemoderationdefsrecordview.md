# ToolsOzoneModerationDefsRecordView

## Example Usage

```typescript
import { ToolsOzoneModerationDefsRecordView } from "@speakeasy-api/bluesky/models/components";

let value: ToolsOzoneModerationDefsRecordView = {
  uri: "https://warm-excess.org",
  cid: "<id>",
  value: "<value>",
  blobCids: [
    "<id>",
  ],
  indexedAt: new Date("2024-09-15T17:39:34.108Z"),
  moderation: {},
  repo: {
    did: "<id>",
    handle: "<value>",
    relatedRecords: [
      "<value>",
    ],
    indexedAt: new Date("2023-05-18T18:14:48.703Z"),
    moderation: {},
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `uri`                                                                                                          | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `cid`                                                                                                          | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `value`                                                                                                        | *any*                                                                                                          | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `blobCids`                                                                                                     | *string*[]                                                                                                     | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `indexedAt`                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                  | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `moderation`                                                                                                   | [components.ToolsOzoneModerationDefsModeration](../../models/components/toolsozonemoderationdefsmoderation.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `repo`                                                                                                         | [components.ToolsOzoneModerationDefsRepoView](../../models/components/toolsozonemoderationdefsrepoview.md)     | :heavy_check_mark:                                                                                             | N/A                                                                                                            |