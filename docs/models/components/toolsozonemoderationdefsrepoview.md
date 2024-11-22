# ToolsOzoneModerationDefsRepoView

## Example Usage

```typescript
import { ToolsOzoneModerationDefsRepoView } from "bluesky/models/components";

let value: ToolsOzoneModerationDefsRepoView = {
  did: "<id>",
  handle: "<value>",
  relatedRecords: [
    "<value>",
  ],
  indexedAt: new Date("2024-04-24T12:23:27.589Z"),
  moderation: {},
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `did`                                                                                                            | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `handle`                                                                                                         | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `email`                                                                                                          | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `relatedRecords`                                                                                                 | *any*[]                                                                                                          | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `indexedAt`                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                    | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `moderation`                                                                                                     | [components.ToolsOzoneModerationDefsModeration](../../models/components/toolsozonemoderationdefsmoderation.md)   | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `invitedBy`                                                                                                      | [components.ComAtprotoServerDefsInviteCode](../../models/components/comatprotoserverdefsinvitecode.md)           | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `invitesDisabled`                                                                                                | *boolean*                                                                                                        | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `inviteNote`                                                                                                     | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `deactivatedAt`                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                    | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `threatSignatures`                                                                                               | [components.ComAtprotoAdminDefsThreatSignature](../../models/components/comatprotoadmindefsthreatsignature.md)[] | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |