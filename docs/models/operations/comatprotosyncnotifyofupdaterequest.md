# ComAtprotoSyncNotifyOfUpdateRequest

## Example Usage

```typescript
import { ComAtprotoSyncNotifyOfUpdateRequest } from "@speakeasy-sdks/bluesky/models/operations";

let value: ComAtprotoSyncNotifyOfUpdateRequest = {
  hostname: "fruitful-pop.name",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `hostname`                                                                   | *string*                                                                     | :heavy_check_mark:                                                           | Hostname of the current service (usually a PDS) that is notifying of update. |