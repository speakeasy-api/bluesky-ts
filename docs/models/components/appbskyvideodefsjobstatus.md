# AppBskyVideoDefsJobStatus

## Example Usage

```typescript
import { AppBskyVideoDefsJobStatus } from "@speakeasy-sdks/bluesky/models/components";

let value: AppBskyVideoDefsJobStatus = {
  jobId: "<id>",
  did: "<id>",
  state: "JOB_STATE_COMPLETED",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `jobId`                                                                                                            | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `did`                                                                                                              | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `state`                                                                                                            | [components.State](../../models/components/state.md)                                                               | :heavy_check_mark:                                                                                                 | The state of the video processing job. All values not listed as a known value indicate that the job is in process. |
| `progress`                                                                                                         | *number*                                                                                                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `blob`                                                                                                             | *Uint8Array*                                                                                                       | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `error`                                                                                                            | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `message`                                                                                                          | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |