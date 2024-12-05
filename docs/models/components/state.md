# State

The state of the video processing job. All values not listed as a known value indicate that the job is in process.

## Example Usage

```typescript
import { State } from "@speakeasy-api/bluesky/models/components";

let value: State = "JOB_STATE_FAILED";
```

## Values

```typescript
"JOB_STATE_COMPLETED" | "JOB_STATE_FAILED"
```