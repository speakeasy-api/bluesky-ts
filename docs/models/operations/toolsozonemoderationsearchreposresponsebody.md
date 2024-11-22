# ToolsOzoneModerationSearchReposResponseBody

OK

## Example Usage

```typescript
import { ToolsOzoneModerationSearchReposResponseBody } from "bluesky/models/operations";

let value: ToolsOzoneModerationSearchReposResponseBody = {
  repos: [
    {
      did: "<id>",
      handle: "<value>",
      relatedRecords: [
        "<value>",
      ],
      indexedAt: new Date("2024-08-08T13:10:49.877Z"),
      moderation: {},
    },
  ],
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `cursor`                                                                                                     | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `repos`                                                                                                      | [components.ToolsOzoneModerationDefsRepoView](../../models/components/toolsozonemoderationdefsrepoview.md)[] | :heavy_check_mark:                                                                                           | N/A                                                                                                          |