# ToolsOzoneModerationDefsModEventViewDetail

## Example Usage

```typescript
import { ToolsOzoneModerationDefsModEventViewDetail } from "bluesky/models/components";

let value: ToolsOzoneModerationDefsModEventViewDetail = {
  id: 531494,
  event: {
    add: [
      "<value>",
    ],
    remove: [
      "<value>",
    ],
  },
  subject: {
    did: "<id>",
  },
  subjectBlobs: [
    {
      cid: "<id>",
      mimeType: "<value>",
      size: 353819,
      createdAt: new Date("2023-02-19T13:57:23.980Z"),
    },
  ],
  createdBy: "<id>",
  createdAt: new Date("2023-12-23T00:24:20.036Z"),
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                         | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `event`                                                                                                      | *components.ToolsOzoneModerationDefsModEventViewDetailEvent*                                                 | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `subject`                                                                                                    | *components.ToolsOzoneModerationDefsModEventViewDetailSubject*                                               | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `subjectBlobs`                                                                                               | [components.ToolsOzoneModerationDefsBlobView](../../models/components/toolsozonemoderationdefsblobview.md)[] | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `createdBy`                                                                                                  | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `createdAt`                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                | :heavy_check_mark:                                                                                           | N/A                                                                                                          |