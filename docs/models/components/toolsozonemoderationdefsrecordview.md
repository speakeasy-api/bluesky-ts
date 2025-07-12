# ToolsOzoneModerationDefsRecordView

## Example Usage

```typescript
import { ToolsOzoneModerationDefsRecordView } from "@speakeasy-sdks/bluesky/models/components";

let value: ToolsOzoneModerationDefsRecordView = {
  uri: "https://wordy-scout.com",
  cid: "<id>",
  value: "<value>",
  blobCids: [
    "<id 1>",
    "<id 2>",
  ],
  indexedAt: new Date("2025-12-06T20:49:52.605Z"),
  moderation: {},
  repo: {
    did: "<id>",
    handle: "<value>",
    relatedRecords: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    indexedAt: new Date("2024-06-24T11:12:34.140Z"),
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