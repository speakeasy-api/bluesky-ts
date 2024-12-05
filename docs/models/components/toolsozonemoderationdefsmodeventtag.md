# ToolsOzoneModerationDefsModEventTag

Add/Remove a tag on a subject

## Example Usage

```typescript
import { ToolsOzoneModerationDefsModEventTag } from "@speakeasy-api/bluesky/models/components";

let value: ToolsOzoneModerationDefsModEventTag = {
  add: [
    "<value>",
  ],
  remove: [
    "<value>",
  ],
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `add`                                        | *string*[]                                   | :heavy_check_mark:                           | N/A                                          |
| `remove`                                     | *string*[]                                   | :heavy_check_mark:                           | N/A                                          |
| `comment`                                    | *string*                                     | :heavy_minus_sign:                           | Additional comment about added/removed tags. |