# AppBskyVideoGetUploadLimitsResponse

OK

## Example Usage

```typescript
import { AppBskyVideoGetUploadLimitsResponse } from "@speakeasy-sdks/bluesky/models/operations";

let value: AppBskyVideoGetUploadLimitsResponse = {
  canUpload: false,
};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `canUpload`            | *boolean*              | :heavy_check_mark:     | N/A                    |
| `remainingDailyVideos` | *number*               | :heavy_minus_sign:     | N/A                    |
| `remainingDailyBytes`  | *number*               | :heavy_minus_sign:     | N/A                    |
| `message`              | *string*               | :heavy_minus_sign:     | N/A                    |
| `error`                | *string*               | :heavy_minus_sign:     | N/A                    |