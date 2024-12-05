# SubjectType

If specified, only events where the subject is of the given type (account or record) will be returned. When this is set to 'account' the 'collections' parameter will be ignored. When includeAllUserRecords or subject is set, this will be ignored.

## Example Usage

```typescript
import { SubjectType } from "bluesky/models/operations";

let value: SubjectType = "record";
```

## Values

```typescript
"account" | "record"
```