# ToolsOzoneModerationDefsAccountEvent

Logs account status related events on a repo subject. Normally captured by automod from the firehose and emitted to ozone for historical tracking.

## Example Usage

```typescript
import { ToolsOzoneModerationDefsAccountEvent } from "@speakeasy-sdks/bluesky/models/components";

let value: ToolsOzoneModerationDefsAccountEvent = {
  active: false,
  timestamp: new Date("2024-05-02T03:34:27.990Z"),
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `comment`                                                                                                                      | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `active`                                                                                                                       | *boolean*                                                                                                                      | :heavy_check_mark:                                                                                                             | Indicates that the account has a repository which can be fetched from the host that emitted this event.                        |
| `status`                                                                                                                       | [components.ToolsOzoneModerationDefsAccountEventStatus](../../models/components/toolsozonemoderationdefsaccounteventstatus.md) | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `timestamp`                                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                  | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |