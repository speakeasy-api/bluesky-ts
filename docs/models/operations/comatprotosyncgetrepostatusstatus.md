# ComAtprotoSyncGetRepoStatusStatus

If active=false, this optional field indicates a possible reason for why the account is not active. If active=false and no status is supplied, then the host makes no claim for why the repository is no longer being hosted.

## Example Usage

```typescript
import { ComAtprotoSyncGetRepoStatusStatus } from "bluesky/models/operations";

let value: ComAtprotoSyncGetRepoStatusStatus = "deactivated";
```

## Values

```typescript
"takendown" | "suspended" | "deactivated"
```