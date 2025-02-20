# ToolsOzoneModerationQueryEventsSubjectType

If specified, only events where the subject is of the given type (account or record) will be returned. When this is set to 'account' the 'collections' parameter will be ignored. When includeAllUserRecords or subject is set, this will be ignored.

## Example Usage

```typescript
import { ToolsOzoneModerationQueryEventsSubjectType } from "@speakeasy-sdks/bluesky/models/operations";

let value: ToolsOzoneModerationQueryEventsSubjectType = "record";
```

## Values

```typescript
"account" | "record"
```