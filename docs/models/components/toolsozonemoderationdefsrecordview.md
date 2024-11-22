# ToolsOzoneModerationDefsRecordView

## Example Usage

```typescript
import { ToolsOzoneModerationDefsRecordView } from "bluesky/models/components";

let value: ToolsOzoneModerationDefsRecordView = {
  uri: "https://criminal-mathematics.info",
  cid: "<id>",
  value: "<value>",
  blobCids: [
    "<id>",
  ],
  indexedAt: new Date("2024-10-08T18:46:29.615Z"),
  moderation: {},
  repo: {
    did: "<id>",
    handle: "<value>",
    relatedRecords: [
      "<value>",
    ],
    indexedAt: new Date("2022-04-26T04:24:39.015Z"),
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