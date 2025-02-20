# ComAtprotoSyncNotifyOfUpdateBody

## Example Usage

```typescript
import { ComAtprotoSyncNotifyOfUpdateBody } from "@speakeasy-sdks/bluesky/models/operations";

let value: ComAtprotoSyncNotifyOfUpdateBody = {
  hostname: "haunting-solvency.org",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `hostname`                                                                   | *string*                                                                     | :heavy_check_mark:                                                           | Hostname of the current service (usually a PDS) that is notifying of update. |