# ToolsOzoneModerationDefsRecordView

## Example Usage

```typescript
import { ToolsOzoneModerationDefsRecordView } from "bluesky/models/components";

let value: ToolsOzoneModerationDefsRecordView = {
  uri: "https://awesome-conservative.com",
  cid: "<id>",
  value: "<value>",
  blobCids: [
    "<id>",
  ],
  indexedAt: new Date("2022-07-31T21:28:27.806Z"),
  moderation: {},
  repo: {
    did: "<id>",
    handle: "<value>",
    relatedRecords: [
      "<value>",
    ],
    indexedAt: new Date("2023-01-15T21:10:18.661Z"),
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