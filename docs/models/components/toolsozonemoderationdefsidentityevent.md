# ToolsOzoneModerationDefsIdentityEvent

Logs identity related events on a repo subject. Normally captured by automod from the firehose and emitted to ozone for historical tracking.

## Example Usage

```typescript
import { ToolsOzoneModerationDefsIdentityEvent } from "bluesky/models/components";

let value: ToolsOzoneModerationDefsIdentityEvent = {
  timestamp: new Date("2023-07-05T14:57:11.531Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `comment`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `handle`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `pdsHost`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `tombstone`                                                                                   | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |