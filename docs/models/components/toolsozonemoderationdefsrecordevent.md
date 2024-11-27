# ToolsOzoneModerationDefsRecordEvent

Logs lifecycle event on a record subject. Normally captured by automod from the firehose and emitted to ozone for historical tracking.

## Example Usage

```typescript
import { ToolsOzoneModerationDefsRecordEvent } from "bluesky/models/components";

let value: ToolsOzoneModerationDefsRecordEvent = {
  op: "create",
  timestamp: new Date("2023-01-19T21:32:01.817Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `comment`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `op`                                                                                          | [components.Op](../../models/components/op.md)                                                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `cid`                                                                                         | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |