# ToolsOzoneModerationQueryStatusesSubjectType

If specified, subjects of the given type (account or record) will be returned. When this is set to 'account' the 'collections' parameter will be ignored. When includeAllUserRecords or subject is set, this will be ignored.

## Example Usage

```typescript
import { ToolsOzoneModerationQueryStatusesSubjectType } from "@speakeasy-sdks/bluesky/models/operations";

let value: ToolsOzoneModerationQueryStatusesSubjectType = "record";
```

## Values

```typescript
"account" | "record"
```