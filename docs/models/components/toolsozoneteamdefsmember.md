# ToolsOzoneTeamDefsMember

## Example Usage

```typescript
import { ToolsOzoneTeamDefsMember } from "@speakeasy-api/bluesky/models/components";

let value: ToolsOzoneTeamDefsMember = {
  did: "<id>",
  role: "#roleModerator",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `did`                                                                                                            | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `disabled`                                                                                                       | *boolean*                                                                                                        | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `profile`                                                                                                        | [components.AppBskyActorDefsProfileViewDetailed](../../models/components/appbskyactordefsprofileviewdetailed.md) | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `createdAt`                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                    | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `updatedAt`                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                    | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `lastUpdatedBy`                                                                                                  | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `role`                                                                                                           | [components.ToolsOzoneTeamDefsMemberRole](../../models/components/toolsozoneteamdefsmemberrole.md)               | :heavy_check_mark:                                                                                               | N/A                                                                                                              |