# ToolsOzoneModerationSearchReposResponseBody

OK

## Example Usage

```typescript
import { ToolsOzoneModerationSearchReposResponseBody } from "@speakeasy-sdks/bluesky/models/operations";

let value: ToolsOzoneModerationSearchReposResponseBody = {
  repos: [
    {
      did: "<id>",
      handle: "<value>",
      relatedRecords: [
        "<value>",
      ],
      indexedAt: new Date("2025-02-17T12:41:59.818Z"),
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