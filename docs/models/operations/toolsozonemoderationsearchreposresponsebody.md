# ToolsOzoneModerationSearchReposResponseBody

OK

## Example Usage

```typescript
import { ToolsOzoneModerationSearchReposResponseBody } from "@speakeasy-api/bluesky/models/operations";

let value: ToolsOzoneModerationSearchReposResponseBody = {
  repos: [
    {
      did: "<id>",
      handle: "<value>",
      relatedRecords: [
        "<value>",
      ],
      indexedAt: new Date("2024-02-18T12:41:59.818Z"),
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