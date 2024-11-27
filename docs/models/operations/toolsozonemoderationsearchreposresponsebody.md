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
      indexedAt: new Date("2023-02-13T10:57:00.909Z"),
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