# QueryParamSubjectType

If specified, subjects of the given type (account or record) will be returned. When this is set to 'account' the 'collections' parameter will be ignored. When includeAllUserRecords or subject is set, this will be ignored.

## Example Usage

```typescript
import { QueryParamSubjectType } from "@speakeasy-api/bluesky/models/operations";

let value: QueryParamSubjectType = "account";
```

## Values

```typescript
"account" | "record"
```